// ===== AUTH HELPER =====
// Simple auth using profiles table directly (no Supabase Auth)

const SESSION_KEY = 'personel_notebook_user';

window.getAvatarImgTag = function(filename, fallbackMode = 'text', username = '?') {
  const safeFile = filename ? filename.replace(/'/g, "\\'").replace(/"/g, "&quot;") : '';
  const safeName = username ? username.replace(/'/g, "\\'").replace(/"/g, "&quot;").charAt(0).toUpperCase() : '?';
  const onerrorStr = fallbackMode === 'hide' 
    ? `this.parentElement.style.display='none'`
    : `this.parentElement.textContent='${safeName}'`;

  if (safeFile.toLowerCase().endsWith('.mp4') || safeFile.toLowerCase().endsWith('.webm')) {
    return `<video src="avatars/${safeFile}" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover; pointer-events:none; border-radius:inherit; background:transparent;"></video>`;
  } else {
    return `<img src="avatars/${safeFile}" loading="lazy" alt="" onerror="${onerrorStr}">`;
  }
};

// Hash password with SHA-256
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + '_personel_notebook_salt');
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Get current logged-in user from localStorage
async function getCurrentUser() {
  try {
    const stored = localStorage.getItem(SESSION_KEY);
    if (!stored) return null;
    const user = JSON.parse(stored);

    // If offline, bypass DB check and return the stored user immediately
    if (!navigator.onLine) {
      const lastSeenKey = 'personel_notebook_last_seen_' + user.id;
      const lastUpdate = localStorage.getItem(lastSeenKey);
      if (!lastUpdate || Date.now() - parseInt(lastUpdate) > 5 * 60 * 1000) {
        if (typeof OfflineSync !== 'undefined') {
          OfflineSync.enqueue('profiles', 'update', { last_seen: new Date().toISOString() }, { id: user.id });
          localStorage.setItem(lastSeenKey, Date.now().toString());
        }
      }
      return user;
    }

    // Verify user still exists in DB
    const sb = getSupabase();
    if (!sb) return user; // offline fallback
    const { data } = await sb.from('profiles').select('*').eq('id', user.id).single();
    
    // Background presence update (throttle to once per 5 minutes)
    if (data && data.id) {
      const lastSeenKey = 'personel_notebook_last_seen_' + data.id;
      const lastUpdate = localStorage.getItem(lastSeenKey);
      if (!lastUpdate || Date.now() - parseInt(lastUpdate) > 5 * 60 * 1000) {
        sb.from('profiles').update({ last_seen: new Date().toISOString() }).eq('id', data.id)
          .then(({error}) => {
            if (!error) localStorage.setItem(lastSeenKey, Date.now().toString());
          });
      }
    }

    return data || null;
  } catch (e) {
    return null;
  }
}

// Register new user
async function registerUser(username, password) {
  const sb = getSupabase();
  if (!sb) return { error: { message: 'Bağlantı hatası' } };

  const trimmedUsername = username.trim();

  // Check if username exists
  const { data: existing } = await sb.from('profiles')
    .select('id').eq('username', trimmedUsername).maybeSingle();

  if (existing) {
    return { error: { message: 'Bu kullanıcı adı zaten kullanılıyor' } };
  }

  // Hash password
  const passHash = await hashPassword(password);

  // Create profile
  const { data, error } = await sb.from('profiles').insert({
    username: trimmedUsername,
    password_hash: passHash
  }).select().single();

  if (error) {
    return { error: { message: 'Kayıt sırasında hata oluştu: ' + error.message } };
  }

  // Save to localStorage
  localStorage.setItem(SESSION_KEY, JSON.stringify(data));
  return { data, error: null };
}

// Login user
async function loginUser(username, password) {
  const sb = getSupabase();
  if (!sb) return { error: { message: 'Bağlantı hatası' } };

  const trimmedUsername = username.trim();
  const passHash = await hashPassword(password);

  const { data, error } = await sb.from('profiles')
    .select('*')
    .eq('username', trimmedUsername)
    .eq('password_hash', passHash)
    .maybeSingle();

  if (error || !data) {
    return { error: { message: 'Kullanıcı adı veya şifre yanlış' } };
  }

  // Save to localStorage
  localStorage.setItem(SESSION_KEY, JSON.stringify(data));
  return { data, error: null };
}

// Logout
async function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
}

// Update user bar in navbar
async function updateUserBar() {
  const userBar = document.getElementById('user-bar');
  if (!userBar) return;

  const user = await getCurrentUser();
  if (user && user.username) {
    const isDashboard = window.location.pathname.includes('dashboard.html');
    const isIndex = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
    const isLeaderboard = window.location.pathname.includes('leaderboard.html');
    const isProfile = window.location.pathname.includes('profile.html');
    const isSettings = window.location.pathname.includes('settings.html');
    const isO2 = window.location.pathname.includes('o2.html');

    let unreadCount = 0;
    try {
      const sb = getSupabase();
      if (sb) {
        const { count, error } = await sb.from('notifications')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', user.id)
          .eq('is_read', false);
        if (!error && count) unreadCount = count;
      }
    } catch (e) { }

    // Build nav items list (only pages user is NOT currently on)
    const mobileNotif = `<a href="#" class="burger-nav-item" onclick="openNotifications(); return false;"><span class="burger-nav-icon">🔔</span> Bildirimler ${unreadCount > 0 ? `<span style="background:var(--accent-red); color:white; font-size:0.75rem; padding:2px 8px; border-radius:10px; font-weight:700; margin-left:auto;">${unreadCount} Yeni</span>` : ''}</a>`;
    let navItems = mobileNotif;
    navItems += '<a href="inbox.html" class="burger-nav-item"><span class="burger-nav-icon">📥</span> Gelen Kutusu</a>';

    if (!isIndex) navItems += '<a href="index.html" class="burger-nav-item"><span class="burger-nav-icon">🏠</span> Ana Sayfa</a>';
    if (!isDashboard) navItems += '<a href="dashboard.html" class="burger-nav-item"><span class="burger-nav-icon">📊</span> Panelim</a>';
    if (!isLeaderboard) navItems += '<a href="leaderboard.html" class="burger-nav-item"><span class="burger-nav-icon">🥇</span> Skor Tablosu</a>';
    if (!isO2) navItems += '<a href="o2.html" class="burger-nav-item"><span class="burger-nav-icon">🔍</span> O₂ Oxygen</a>';
    if (!isProfile) navItems += '<a href="profile.html?id=' + user.id + '" class="burger-nav-item"><span class="burger-nav-icon">👤</span> Profilim</a>';
    if (!isSettings) navItems += '<a href="settings.html" class="burger-nav-item"><span class="burger-nav-icon">⚙️</span> Ayarlar</a>';

    // Desktop buttons (same as before)
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const themeIcon = currentTheme === 'light' ? '🌙' : '☀️';
    const themeText = currentTheme === 'light' ? 'Karanlık Mod' : 'Aydınlık Mod';

    navItems += `<a href="#" class="burger-nav-item theme-mobile-btn" onclick="toggleTheme(); return false;" id="theme-toggle-mobile"><span class="burger-nav-icon">${themeIcon}</span> <span class="theme-text-span">${themeText}</span></a>`;

    const homeBtn = isIndex ? '' : '<a href="index.html" class="user-bar-btn desktop-nav"><span class="settings-btn-icon">🏠</span> Ana Sayfa</a>';
    const panelBtn = isDashboard ? '' : '<a href="dashboard.html" class="user-bar-btn desktop-nav"><span class="settings-btn-icon">📊</span> Panelim</a>';
    const lbBtn = isLeaderboard ? '' : '<a href="leaderboard.html" class="user-bar-btn desktop-nav"><span class="settings-btn-icon">🥇</span> Skor</a>';
    const o2Btn = isO2 ? '' : '<a href="o2.html" class="user-bar-btn desktop-nav" style="border-color: rgba(251,191,36,0.2); color: #fbbf24;"><span class="settings-btn-icon">🔍</span> O₂</a>';
    const profileBtn = isProfile ? '' : '<a href="profile.html?id=' + user.id + '" class="user-bar-btn desktop-nav"><span class="settings-btn-icon">👤</span> Profilim</a>';
    const settingsBtn = isSettings ? '' : '<a href="settings.html" class="user-bar-btn desktop-nav"><span class="settings-btn-icon">⚙️</span> Ayarlar</a>';

    const themeBtn = `<button class="user-bar-btn desktop-nav" onclick="toggleTheme()" id="theme-toggle-desktop" title="Temayı Değiştir">${themeIcon}</button>`;
    const notifBtn = `<button class="user-bar-btn desktop-nav" onclick="openNotifications()" title="Bildirimler" style="position:relative; font-size:1.1rem; padding: 6px 12px;">🔔${unreadCount > 0 ? `<span style="position:absolute; top:2px; right:2px; background:var(--accent-red); color:white; font-size:0.65rem; padding:2px 5px; border-radius:10px; font-weight:700; line-height:1;">${unreadCount}</span>` : ''}</button>`;
    const inboxBtn = `<a href="inbox.html" class="user-bar-btn desktop-nav" title="Gelen Kutusu" style="font-size:1.1rem; padding: 6px 12px;">📥</a>`;

    let displayName = user.username || 'Bilinmeyen Kullanıcı';
    let styleStr = user.name_style ? `font-family: ${user.name_style};` : '';

    let avatarHtml = '';
    if (user.avatar && user.avatar !== 'null') {
      const bgStyle = user.avatar_bg ? `background: ${user.avatar_bg};` : '';
      avatarHtml = `<div class="burger-avatar" style="${bgStyle}">${getAvatarImgTag(user.avatar, 'text', displayName)}</div>`;
    } else {
      avatarHtml = `<div class="burger-avatar">${escapeHtmlAuth(displayName).charAt(0).toUpperCase()}</div>`;
    }

    userBar.innerHTML = `
      <div class="user-greeting">
         👋 <span style="${styleStr}">${escapeHtmlAuth(displayName)}</span>
      </div>
      ${notifBtn}
      ${inboxBtn}
      ${homeBtn}
      ${panelBtn}
      ${lbBtn}
      ${o2Btn}
      <span class="nav-divider desktop-nav"></span>
      ${profileBtn}
      ${settingsBtn}
      ${themeBtn}
      <button class="burger-toggle" id="burger-toggle" onclick="toggleBurgerMenu()" aria-label="Menüyü aç">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
      <div class="burger-overlay" id="burger-overlay" onclick="closeBurgerMenu()"></div>
      <div class="burger-panel" id="burger-panel">
        <div class="burger-panel-header">
          ${avatarHtml}
          <div class="burger-user-info">
            <span class="burger-display-name" style="${styleStr}">${escapeHtmlAuth(displayName)}</span>
            <span class="burger-user-sub">Hoş geldin! 👋</span>
          </div>
          <button class="burger-close" onclick="closeBurgerMenu()" aria-label="Menüyü kapat">✕</button>
        </div>
        <div class="burger-nav-list">
          ${navItems}
        </div>
        <div class="burger-panel-footer">
          <span class="burger-footer-text">📚 Personel Notebook</span>
        </div>
      </div>
    `;
    userBar.classList.add('logged-in');
  } else {
    userBar.innerHTML = `
      <a href="leaderboard.html" class="user-bar-btn desktop-nav">🏅 Skor</a>
      <a href="o2.html" class="user-bar-btn desktop-nav" style="border-color: rgba(251,191,36,0.2); color: #fbbf24;">🔍 O₂</a>
      <a href="login.html" class="user-bar-btn login-link desktop-nav">🔑 Giriş Yap</a>
      <button class="burger-toggle" id="burger-toggle" onclick="toggleBurgerMenu()" aria-label="Menüyü aç">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
      <div class="burger-overlay" id="burger-overlay" onclick="closeBurgerMenu()"></div>
      <div class="burger-panel" id="burger-panel">
        <div class="burger-panel-header">
          <div class="burger-avatar">?</div>
          <div class="burger-user-info">
            <span class="burger-display-name">Misafir</span>
            <span class="burger-user-sub">Giriş yapmadınız</span>
          </div>
          <button class="burger-close" onclick="closeBurgerMenu()" aria-label="Menüyü kapat">✕</button>
        </div>
        <div class="burger-nav-list">
          <a href="leaderboard.html" class="burger-nav-item"><span class="burger-nav-icon">🏅</span> Skor Tablosu</a>
          <a href="o2.html" class="burger-nav-item"><span class="burger-nav-icon">🔍</span> O₂ Oxygen</a>
          <a href="login.html" class="burger-nav-item burger-nav-login"><span class="burger-nav-icon">🔑</span> Giriş Yap / Kayıt Ol</a>
        </div>
        <div class="burger-panel-footer">
          <span class="burger-footer-text">📚 Personel Notebook</span>
        </div>
      </div>
    `;
    userBar.classList.remove('logged-in');
  }
}

// ===== BURGER MENU FUNCTIONS =====
function toggleBurgerMenu() {
  const panel = document.getElementById('burger-panel');
  const overlay = document.getElementById('burger-overlay');
  const toggle = document.getElementById('burger-toggle');
  if (!panel || !overlay) return;

  const isOpen = panel.classList.contains('open');
  if (isOpen) {
    closeBurgerMenu();
  } else {
    panel.classList.add('open');
    overlay.classList.add('open');
    if (toggle) toggle.style.display = 'none';
    document.body.style.overflow = 'hidden';
  }
}

function closeBurgerMenu() {
  const panel = document.getElementById('burger-panel');
  const overlay = document.getElementById('burger-overlay');
  const toggle = document.getElementById('burger-toggle');
  if (panel) panel.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  if (toggle) toggle.style.display = '';
  document.body.style.overflow = '';
}

async function handleLogout() {
  await logoutUser();
  window.location.href = 'index.html';
}

window.promptChangeUsername = async function () {
  const user = await getCurrentUser();
  if (!user) return;

  const newName = prompt("Yeni kullanıcı adınızı girin:", user.username);
  if (!newName || newName.trim() === "" || newName.trim() === user.username) {
    return; // İptal edildi, boş bırakıldı veya aynı isim
  }
  const trimmedUsername = newName.trim();

  const sb = getSupabase();
  if (!sb) { alert("Bağlantı hatası"); return; }

  // Kullanıcı adının başka biri tarafından kullanılıp kullanılmadığını kontrol et
  const { data: existing } = await sb.from('profiles').select('id').eq('username', trimmedUsername).maybeSingle();
  if (existing) {
    alert("Bu kullanıcı adı başka biri tarafından kullanılıyor.");
    return;
  }

  // Kullanıcı adını güncelle
  const { data, error } = await sb.from('profiles').update({ username: trimmedUsername }).eq('id', user.id).select();
  if (error || !data || data.length === 0) {
    alert("Bağlantı başarılı fakat veritabanı ismi güncellemedi.\n\nSebep: Supabase 'profiles' tablosunda UPDATE izniniz (RLS Policy) yok. Lütfen Supabase'den profiles tablosuna UPDATE policy ekleyin.");
    return;
  }

  // Yerel oturumu güncelle
  user.username = trimmedUsername;
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));

  if (typeof logActivity === 'function') {
    logActivity('username_changed', { oldUsername: user.username, newUsername: trimmedUsername });
  }

  alert("Kullanıcı adınız başarıyla güncellendi.");
  window.location.reload(); // Üst bardaki metnin güncellenmesi için sayfayı yenile
};

window.promptChangePassword = async function () {
  const user = await getCurrentUser();
  if (!user) return;

  const newPass = prompt("Yeni şifrenizi girin (en az 4 karakter):");
  if (!newPass || newPass.trim() === "") {
    return; // İptal edildi veya boş
  }

  const trimmedPass = newPass.trim();
  if (trimmedPass.length < 4) {
    alert("Şifre en az 4 karakter olmalıdır.");
    return;
  }

  const confirmPass = prompt("Yeni şifrenizi tekrar girin:");
  if (confirmPass === null) return; // İptal

  if (trimmedPass !== confirmPass.trim()) {
    alert("Şifreler eşleşmiyor!");
    return;
  }

  const sb = getSupabase();
  if (!sb) { alert("Bağlantı hatası"); return; }

  // Hash new password using current salt
  const passHash = await hashPassword(trimmedPass);

  // Update password in DB
  const { data, error } = await sb.from('profiles').update({ password_hash: passHash }).eq('id', user.id).select();
  if (error || !data || data.length === 0) {
    alert("Bağlantı başarılı fakat şifre güncellenemedi.\n\nSebep: Supabase 'profiles' tablosunda UPDATE izniniz (RLS Policy) yok. Lütfen Supabase'den profiles tablosuna UPDATE policy ekleyin.");
    return;
  }

  if (typeof logActivity === 'function') {
    logActivity('password_changed', {});
  }

  alert("Şifreniz başarıyla değiştirildi.");
};

window.confirmResetData = async function () {
  if (confirm("Tüm ilerlemenizi, yıldızlı kelimeleri ve geçmiş quiz oturumlarınızı silmek istediğinize emin misiniz? Bu işlem geri alınamaz!")) {
    const user = await getCurrentUser();
    if (!user) return;
    const sb = getSupabase();
    if (!sb) { alert("Bağlantı hatası"); return; }

    // Yükleniyor görselini vb. araya sokabilirsiniz ama basitçe işlemi başlatalım
    await sb.from('word_results').delete().eq('user_id', user.id);
    await sb.from('study_words').delete().eq('user_id', user.id);
    await sb.from('quiz_sessions').delete().eq('user_id', user.id);

    if (typeof logActivity === 'function') {
      logActivity('data_reset', {});
    }

    alert('Verileriniz başarıyla sıfırlandı.');
    window.location.reload();
  }
};

window.confirmDeleteAccount = async function () {
  if (confirm("Hesabınızı ve tüm verilerinizi KALICI olarak silmek istediğinize emin misiniz?")) {
    const user = await getCurrentUser();
    if (!user) return;
    const sb = getSupabase();
    if (!sb) { alert("Bağlantı hatası"); return; }

    await sb.from('word_results').delete().eq('user_id', user.id);
    await sb.from('study_words').delete().eq('user_id', user.id);
    await sb.from('quiz_sessions').delete().eq('user_id', user.id);
    
    if (typeof logActivity === 'function') {
      logActivity('account_deleted', {});
    }

    // Profili son olarak sil
    await sb.from('profiles').delete().eq('id', user.id);

    await logoutUser();
    alert('Hesabınız ve tüm verileriniz silindi.');
    window.location.href = 'login.html';
  }
};

function escapeHtmlAuth(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

window.openNotifications = async function () {
  closeBurgerMenu();
  let modal = document.getElementById('notifications-modal-overlay');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'notifications-modal-overlay';
    modal.className = 'o2-modal-overlay';
    modal.innerHTML = `
      <div class="o2-modal" onclick="event.stopPropagation()" style="max-width: 500px; padding-bottom: 0;">
        <div class="o2-modal-header" style="border-bottom: 1px solid var(--glass-border); padding-bottom: 15px;">
          <div class="o2-logo-wrap">
            <span class="o2-title" style="color: var(--accent-yellow);">🔔 Bildirimler</span>
          </div>
          <button class="o2-close" onclick="closeNotifications()" aria-label="Kapat">✕</button>
        </div>
        <div id="notifications-content" style="padding: 0; max-height: 60vh; overflow-y: auto;">
          <div style="text-align:center; color: var(--text-muted); padding: 30px;">Yükleniyor...</div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', closeNotifications);
  }

modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  const content = document.getElementById('notifications-content');
  const user = await getCurrentUser();
  if (!user) return;

  try {
    const sb = getSupabase();
    const { data, error } = await sb.from('notifications')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(30);

    if (error) throw error;

    let adminHtml = '';


    if (!data || data.length === 0) {
      if (adminHtml === '') {
        content.innerHTML = '<div style="text-align:center; color: var(--text-muted); padding: 30px;">Henüz bildiriminiz yok.</div>';
        return;
      } else {
        content.innerHTML = adminHtml;
        return;
      }
    }

    window.currentNotifications = data; // Store globally for details

    let html = '';
    data.forEach(n => {
      // Strip HTML tags for preview and replace multiple spaces
      const rawText = n.message.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const preview = rawText.substring(0, 60) + (rawText.length > 60 ? '...' : '');

      html += `
        <div style="padding: 20px; border-bottom: 1px solid var(--glass-border); background: ${n.is_read ? 'transparent' : 'rgba(251, 191, 36, 0.05)'}; display: flex; flex-direction: column; gap: 8px;">
          <div style="font-weight: 600; color: var(--text-primary); display:flex; justify-content:space-between; align-items: flex-start; gap: 10px;">
            <span>${escapeHtmlAuth(n.title)}</span>
            <div style="display:flex; gap:8px; align-items:center;">
              ${!n.is_read ? '<span style="color:var(--accent-yellow); font-size:0.7rem; padding:3px 8px; border-radius:12px; background:rgba(251,191,36,0.15); font-weight:700; flex-shrink:0;">YENİ</span>' : ''}
              <button onclick="deleteNotification(${n.id})" style="background:transparent; border:none; color:var(--accent-red); cursor:pointer; font-size:1.1rem; padding:0;" title="Sil">🗑️</button>
            </div>
          </div>
          <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.4;">${escapeHtmlAuth(preview)}</div>
          <button onclick="showNotificationDetail(${n.id})" style="background:transparent; border:none; color:var(--accent-blue); font-size:0.85rem; padding:0; cursor:pointer; font-weight:600; text-align:left; margin-top:5px;">Devamını Oku →</button>
        </div>
      `;
    });

    content.innerHTML = adminHtml + html;

    // Mark as read
    const unreadIds = data.filter(n => !n.is_read).map(n => n.id);
    if (unreadIds.length > 0) {
      await sb.from('notifications').update({ is_read: true }).in('id', unreadIds);
      setTimeout(updateUserBar, 1000);
    }

  } catch (e) {
    content.innerHTML = '<div style="text-align:center; color: var(--accent-red); padding: 30px;">Bildirimler yüklenemedi.<br><br><span style="font-size:0.8rem; color:var(--text-muted);">Not: Admin veritabanını güncellememiş olabilir.</span></div>';
  }
};

window.closeNotifications = function () {
  const modal = document.getElementById('notifications-modal-overlay');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
};

// Detay Modalı ve Silme İşlemleri
window.openNotificationDetail = function(id) {
  if (!window.currentNotifications) return;
  const n = window.currentNotifications.find(x => x.id === id);
  if (!n) return;
  
  let modal = document.getElementById('notif-detail-overlay');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'notif-detail-overlay';
    modal.className = 'o2-modal-overlay';
    modal.style.zIndex = '10000'; // üstte kalsın
    modal.innerHTML = `
      <div class="o2-modal" onclick="event.stopPropagation()" style="max-width: 500px;">
        <div class="o2-modal-header" style="border-bottom: 1px solid var(--glass-border); padding-bottom: 15px;">
          <div class="o2-logo-wrap">
            <span class="o2-title" id="notif-detail-title" style="color: var(--accent-yellow);">Detay</span>
          </div>
          <button class="o2-close" onclick="closeNotificationDetail()" aria-label="Kapat">✕</button>
        </div>
        <div id="notif-detail-content" style="padding: 25px; max-height: 60vh; overflow-y: auto; color: var(--text-primary); font-size: 0.95rem; line-height: 1.6; font-family: inherit;"></div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', closeNotificationDetail);
  }
  
  document.getElementById('notif-detail-title').textContent = n.title;
  // Use innerHTML without escaping because the HTML format is generated securely by the admin panel
  // User input is escaped inside the admin panel before inserting into DB
  document.getElementById('notif-detail-content').innerHTML = n.message;
  modal.classList.add('open');
};

window.closeNotificationDetail = function() {
  const modal = document.getElementById('notif-detail-overlay');
  if (modal) modal.classList.remove('open');
};

window.deleteNotification = async function(id) {
  if (confirm("Bu bildirimi silmek istediğinize emin misiniz?")) {
    if (confirm("Bu işlem kalıcıdır ve geri alınamaz. Kesinlikle silmek istiyor musunuz?")) {
      try {
        const sb = getSupabase();
        await sb.from('notifications').delete().eq('id', id);
        openNotifications(); // Listeyi yenile
        updateUserBar(); // Varsa sayıyı güncelle
      } catch (e) {
        alert("Silinirken hata oluştu.");
      }
    }
  }
};

// Auto-update user bar on page load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(updateUserBar, 100);
});
