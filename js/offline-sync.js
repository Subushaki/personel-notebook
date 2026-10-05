// ===== OFFLINE SYNC & UX MOTORU =====

const OfflineSync = (() => {
  const QUEUE_KEY = 'offline_sync_queue';
  let isFlushing = false;

  // Retrieve current queue
  function getQueue() {
    const queueStr = localStorage.getItem(QUEUE_KEY);
    return queueStr ? JSON.parse(queueStr) : [];
  }

  // Save queue to localStorage
  function saveQueue(queue) {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  }

  // Enqueue a database operation
  function enqueue(table, method, data, match = null, options = null) {
    const queue = getQueue();
    const op = {
      id: 'op-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
      table,
      method,
      data,
      match,
      options,
      timestamp: new Date().toISOString()
    };

    // If it's a quiz session insert, we track it with a tempId
    if (table === 'quiz_sessions' && method === 'insert') {
      op.tempId = data.id || ('local-session-' + Date.now() + '-' + Math.floor(Math.random() * 100000));
      data.id = undefined; // Supabase will assign the real UUID, so remove temp ID from insert data
    }

    queue.push(op);
    saveQueue(queue);
    console.log(`[Offline Sync] Enqueued operation for ${table}.${method}:`, op);

    // Show status banner if offline
    updateBannerState();

    return op.tempId || null;
  }

  // Flush queued operations to Supabase
  async function flush() {
    if (isFlushing) return;
    if (!navigator.onLine) return;

    let queue = getQueue();
    if (queue.length === 0) return;

    isFlushing = true;
    console.log(`[Offline Sync] Flushing ${queue.length} operations...`);

    const banner = document.getElementById('offline-status-banner');
    if (banner && banner.classList.contains('visible')) {
      banner.className = 'offline-status-banner online';
      banner.innerHTML = '🔄 İnternet bağlantısı sağlandı. Verileriniz Supabase ile eşitleniyor...';
    }

    // Check if Supabase config is loaded
    if (typeof getSupabase === 'undefined') {
      isFlushing = false;
      return;
    }

    const sb = getSupabase();
    if (!sb) {
      isFlushing = false;
      return;
    }

    let index = 0;
    while (index < queue.length) {
      const op = queue[index];
      let success = false;

      try {
        if (op.table === 'quiz_sessions' && op.method === 'insert') {
          // 1. Create the session on Supabase and get the real ID
          const { data, error } = await sb.from('quiz_sessions').insert(op.data).select().single();
          if (error) throw error;

          if (data && data.id) {
            const realSessionId = data.id;
            console.log(`[Offline Sync] Restored session on server. Temp: ${op.tempId} -> Real: ${realSessionId}`);

            // 2. Replace the temporary sessionId with the real one in all subsequent queued items
            for (let j = index + 1; j < queue.length; j++) {
              const nextOp = queue[j];
              if (nextOp.data && nextOp.data.session_id === op.tempId) {
                nextOp.data.session_id = realSessionId;
              }
              if (nextOp.match && nextOp.match.id === op.tempId) {
                nextOp.match.id = realSessionId;
              }
            }
            success = true;
          }
        } else if (op.method === 'insert') {
          const { error } = await sb.from(op.table).insert(op.data);
          if (error) throw error;
          success = true;
        } else if (op.method === 'update') {
          const { error } = await sb.from(op.table).update(op.data).match(op.match);
          if (error) throw error;
          success = true;
        } else if (op.method === 'upsert') {
          const { error } = await sb.from(op.table).upsert(op.data, op.options);
          if (error) throw error;
          success = true;
        }
      } catch (err) {
        console.error(`[Offline Sync] Error syncing table ${op.table}.${op.method}:`, err);
        
        // If it's a connection timeout or server unreachable, stop flushing and try later
        if (err.status === 0 || err.message === 'Failed to fetch' || !navigator.onLine) {
          break;
        } else {
          // If it's a bad query/invalid data, skip it to prevent blocking the queue
          console.warn(`[Offline Sync] Skipping unresolvable queue item:`, op);
          success = true;
        }
      }

      if (success) {
        queue.splice(index, 1);
        saveQueue(queue);
        // Do not increment index since we removed the element at the current index
      } else {
        index++;
      }
    }

    isFlushing = false;

    // Update banner UI to success
    if (queue.length === 0) {
      if (banner) {
        banner.className = 'offline-status-banner online';
        banner.innerHTML = '✅ Eşitleme tamamlandı! Tüm çevrimdışı veriler Supabase\'e aktarıldı.';
        setTimeout(() => {
          if (navigator.onLine && getQueue().length === 0) {
            banner.classList.remove('visible');
            document.body.classList.remove('offline-active');
          }
        }, 3000);
      }
    } else {
      if (banner) {
        banner.className = 'offline-status-banner offline';
        banner.innerHTML = `⚠️ Bazı veriler eşitlenemedi (${queue.length} işlem bekliyor)`;
      }
    }
  }

  // Update banner presentation state based on current connection status
  function updateBannerState() {
    const banner = document.getElementById('offline-status-banner');
    if (!banner) return;

    if (!navigator.onLine) {
      banner.className = 'offline-status-banner offline visible';
      banner.innerHTML = '⚡ Çevrimdışı Mod — Çözdüğünüz quizler ve ilerlemeniz yerel olarak kaydediliyor. İnternet geldiğinde otomatik eşitlenecek.';
      document.body.classList.add('offline-active');
    } else {
      const queue = getQueue();
      if (queue.length > 0) {
        flush();
      } else {
        banner.classList.remove('visible');
        document.body.classList.remove('offline-active');
      }
    }
  }

  // Inject UI Styles and Banner element
  function injectUI() {
    if (document.getElementById('offline-banner-style')) return;

    // CSS
    const style = document.createElement('style');
    style.id = 'offline-banner-style';
    style.textContent = `
      .offline-status-banner {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 10px 20px;
        text-align: center;
        font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 0.85rem;
        font-weight: 500;
        z-index: 999999;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        transform: translateY(-100%);
        opacity: 0;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(8px);
      }
      .offline-status-banner.visible {
        transform: translateY(0);
        opacity: 1;
      }
      .offline-status-banner.offline {
        background-color: rgba(245, 158, 11, 0.95); /* Amber with opacity */
        color: #09090b;
        border-bottom: 1px solid rgba(245, 158, 11, 0.2);
      }
      .offline-status-banner.online {
        background-color: rgba(16, 185, 129, 0.95); /* Emerald with opacity */
        color: #ffffff;
        border-bottom: 1px solid rgba(16, 185, 129, 0.2);
      }
      body {
        transition: padding-top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      body.offline-active {
        padding-top: 38px;
      }
      @media (max-width: 600px) {
        .offline-status-banner {
          font-size: 0.75rem;
          padding: 8px 12px;
        }
        body.offline-active {
          padding-top: 48px;
        }
      }
    `;
    document.head.appendChild(style);

    // HTML Banner
    const banner = document.createElement('div');
    banner.id = 'offline-status-banner';
    banner.className = 'offline-status-banner';
    document.body.appendChild(banner);

    // Initial state check
    updateBannerState();
  }

  // Initialization logic
  function init() {
    injectUI();

    // Listeners
    window.addEventListener('online', flush);
    window.addEventListener('offline', updateBannerState);
    window.addEventListener('load', () => {
      // Register Service Worker
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(reg => {
            console.log('[Service Worker] Registered successfully:', reg.scope);
            // Proactively check for SW updates
            reg.update().catch(() => {});
          })
          .catch(err => console.error('[Service Worker] Registration failed:', err));

        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (!refreshing) {
            refreshing = true;
            console.log('[Service Worker] New Service Worker activated, refreshing page...');
            window.location.reload();
          }
        });
      }
    });

    // Run first sync if online
    if (navigator.onLine) {
      // Small timeout to allow Supabase SDK to finish loading
      setTimeout(flush, 1500);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return {
    isOnline: () => navigator.onLine,
    enqueue,
    flush,
    getQueueLength: () => getQueue().length
  };
})();
