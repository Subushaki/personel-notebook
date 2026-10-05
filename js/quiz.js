// ===== QUIZ ENGINE =====
// 3-attempt system with retry queue + word tracking + star system

(function () {
  'use strict';

  // ===== STATE =====
  let queue = [];
  let totalWords = 0;
  let completedWords = 0;
  let currentItem = null;
  let isWaiting = false;
  let isCustomQuiz = false;

  let mode = 'en-tr';

  const stats = {
    firstTry: 0,
    retry: 0,
    hard: 0,
    unknown: 0
  };

  const wordLists = {
    firstTry: [],
    retry: [],
    hard: [],
    unknown: []
  };

  // Supabase state
  let loggedInUser = null;
  let sessionId = null;

  // ===== SESSION PERSISTENCE =====
  const SESSION_TIMEOUT = 60 * 60 * 1000; // 1 saat
  let pendingPreviousSession = null;

  function getQuizStateKey() {
    const p = new URLSearchParams(window.location.search);
    const cat = p.get('category') || p.get('dataset') || 'kurs';
    let key = 'quiz_state_' + cat + '_' + (p.get('mode') || 'en-tr');
    if (p.get('timesFilter')) key += '_' + p.get('timesFilter');
    if (p.get('custom') === 'true') key += '_custom';
    if (p.get('exclude') === 'true') key += '_excl';
    return key;
  }

  function findWordById(id) {
    if (typeof DataManager !== 'undefined') {
      const f = DataManager.getItemById(id);
      if (f) return f;
    }
    if (typeof GRAMMAR_TEST_DATA !== 'undefined') {
      const f = GRAMMAR_TEST_DATA.find(w => w.id === id);
      if (f) return f;
    }
    if (typeof WORDS_A2_GRAMMAR !== 'undefined') {
      const f = WORDS_A2_GRAMMAR.find(w => w.id === id);
      if (f) return f;
    }
    if (typeof ALL_WORDS_A2 !== 'undefined') {
      const f = ALL_WORDS_A2.find(w => w.id === id);
      if (f) return f;
    }
    if (typeof WORDS_A2_TIMES_FULL !== 'undefined') {
      const f = WORDS_A2_TIMES_FULL.find(w => w.id === id);
      if (f) return f;
    }
    return null;
  }

  function saveQuizState() {
    try {
      const state = {
        queue: queue.map(i => ({ id: i.word.id, attempt: i.attempt })),
        currentItem: currentItem ? { id: currentItem.word.id, attempt: currentItem.attempt } : null,
        completedWords, totalWords, mode, isCustomQuiz, sessionId,
        stats: { ...stats },
        wordLists: {
          firstTry: wordLists.firstTry.map(w => w.id),
          retry: wordLists.retry.map(w => w.id),
          hard: wordLists.hard.map(w => w.id),
          unknown: wordLists.unknown.map(w => w.id)
        },
        lastActivity: Date.now()
      };
      localStorage.setItem(getQuizStateKey(), JSON.stringify(state));
    } catch (e) { /* silent */ }
  }

  function clearQuizState() {
    try { localStorage.removeItem(getQuizStateKey()); } catch (e) {}
  }

  function loadQuizState() {
    try {
      const raw = localStorage.getItem(getQuizStateKey());
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function restoreFromState(saved) {
    queue = [];
    if (saved.currentItem) {
      const w = findWordById(saved.currentItem.id);
      if (w) queue.push({ word: w, attempt: saved.currentItem.attempt });
    }
    saved.queue.forEach(item => {
      const w = findWordById(item.id);
      if (w) queue.push({ word: w, attempt: item.attempt });
    });
    totalWords = saved.totalWords;
    completedWords = saved.completedWords;
    stats.firstTry = saved.stats.firstTry;
    stats.retry = saved.stats.retry;
    stats.hard = saved.stats.hard;
    stats.unknown = saved.stats.unknown;
    wordLists.firstTry = saved.wordLists.firstTry.map(findWordById).filter(Boolean);
    wordLists.retry = saved.wordLists.retry.map(findWordById).filter(Boolean);
    wordLists.hard = saved.wordLists.hard.map(findWordById).filter(Boolean);
    wordLists.unknown = saved.wordLists.unknown.map(findWordById).filter(Boolean);
    sessionId = saved.sessionId;
  }

  // ===== INIT =====
  function init() {
    const params = new URLSearchParams(window.location.search);
    mode = params.get('mode') || 'en-tr';
    const level = params.get('level') || 'all';
    const category = params.get('category') || params.get('dataset') || 'vocab';
    isCustomQuiz = params.get('custom') === 'true';

    // Get item list
    let wordList = [];
    const timesFilter = params.get('timesFilter');

    if (typeof DataManager !== 'undefined') {
      if (category === 'times' && timesFilter && typeof WORDS_A2_TIMES_FULL !== 'undefined') {
        if (timesFilter === 'am') {
          wordList = WORDS_A2_TIMES_FULL.filter(w => {
            const match = w.hintEn ? w.hintEn.match(/It is (\d{2}):/) : null;
            return match && parseInt(match[1], 10) < 12;
          });
        } else if (timesFilter === 'pm') {
          wordList = WORDS_A2_TIMES_FULL.filter(w => {
            const match = w.hintEn ? w.hintEn.match(/It is (\d{2}):/) : null;
            return match && parseInt(match[1], 10) >= 12;
          });
        } else {
          wordList = WORDS_A2_TIMES_FULL.filter(w => w.hintEn && w.hintEn.includes(`It is ${timesFilter}:`));
        }
      } else {
        wordList = DataManager.getItemsByCategory(category);
      }
    } else {
      // Fallback
      let selectedData = typeof WORDS_A2 !== 'undefined' ? WORDS_A2 : [];
      if (category === 'genel' && typeof WORDS_A2_GENEL !== 'undefined') selectedData = WORDS_A2_GENEL;
      else if (category === 'grammar' && typeof WORDS_A2_GRAMMAR !== 'undefined') selectedData = WORDS_A2_GRAMMAR;
      else if (category === 'grammar_test' && typeof GRAMMAR_TEST_DATA !== 'undefined') selectedData = GRAMMAR_TEST_DATA;
      else if (category === 'deyimler' && typeof WORDS_A2_DEYIMLER !== 'undefined') selectedData = WORDS_A2_DEYIMLER;
      else if (category === 'times' && typeof WORDS_A2_TIMES !== 'undefined') selectedData = WORDS_A2_TIMES;
      wordList = [...selectedData];
    }

    if (isCustomQuiz) {
      const customIds = JSON.parse(localStorage.getItem('custom_quiz_ids') || '[]');
      const allItems = typeof DataManager !== 'undefined' ? DataManager.getAllItems() : (typeof ALL_WORDS_A2 !== 'undefined' ? ALL_WORDS_A2 : []);
      wordList = allItems.filter(w => customIds.includes(w.id));
      if (wordList.length === 0) {
        alert('Özel quiz için kelime bulunamadı!');
        window.location.href = 'dashboard.html';
        return;
      }
      document.getElementById('progress-mode-label').textContent =
        (mode === 'en-tr' ? '🇬🇧→🇹🇷' : '🇹🇷→🇬🇧') + ' ⭐ Özel Quiz';
    } else {
      if (params.get('exclude') === 'true') {
        const excludeIds = JSON.parse(localStorage.getItem('exclude_quiz_ids') || '[]');
        wordList = wordList.filter(w => !excludeIds.includes(w.id));
        if (wordList.length === 0) {
           alert('Çalışacak içerik kalmadı! Tümünü başarıyla bildiniz.');
           window.location.href = 'dashboard.html';
           return;
        }
      }
    }

    if (!wordList || wordList.length === 0) {
      if (category === 'grammar_test' && typeof GRAMMAR_TEST_DATA !== 'undefined') {
        wordList = [...GRAMMAR_TEST_DATA];
      } else {
        wordList = typeof DataManager !== 'undefined' ? DataManager.getItemsByCategory('vocab') : [];
      }
    }

    totalWords = wordList.length;

    // Set UI labels
    if (category === 'grammar_test' || mode === 'gap-fill') {
      mode = 'gap-fill';
      if (!isCustomQuiz) document.getElementById('progress-mode-label').textContent = '📝 Gramer Testi (Boşluk Doldurma)';
      document.getElementById('question-label').textContent = 'COMPLETE THE SENTENCE';
      document.getElementById('answer-label').textContent = 'FILL IN THE BLANKS (ENGLISH)';
      document.getElementById('answer-input').placeholder = 'Write the missing word(s)...';
    } else if (category === 'grammar') {
      mode = 'formula-topic';
      if (!isCustomQuiz) document.getElementById('progress-mode-label').textContent = '⚡ Gramer Formülleri & Tense Quizi';
      document.getElementById('question-label').textContent = 'FORMÜL & İPUCU (Konuyu Bul)';
      document.getElementById('answer-label').textContent = 'GRAMER KONUSU / TENSE';
      document.getElementById('answer-input').placeholder = 'Konuyu veya Tense adını yazın (örn: Present Perfect)...';
    } else if (category === 'sentences') {
      if (!isCustomQuiz) document.getElementById('progress-mode-label').textContent = mode === 'en-tr' ? '💬 Cümleler (İngilizce → Türkçe)' : '💬 Cümleler (Türkçe → İngilizce)';
      document.getElementById('question-label').textContent = mode === 'en-tr' ? 'İNGİLİZCE CÜMLE' : 'TÜRKÇE CÜMLE';
      document.getElementById('answer-label').textContent = mode === 'en-tr' ? 'TÜRKÇE KARŞILIĞI' : 'İNGİLİZCE KARŞILIĞI';
      document.getElementById('answer-input').placeholder = mode === 'en-tr' ? 'Türkçe anlamını yazın...' : 'İngilizce karşılığını yazın...';
    } else if (category === 'idioms') {
      if (!isCustomQuiz) document.getElementById('progress-mode-label').textContent = mode === 'en-tr' ? '🎭 Deyimler (İngilizce → Türkçe)' : '🎭 Deyimler (Türkçe → İngilizce)';
      document.getElementById('question-label').textContent = mode === 'en-tr' ? 'İNGİLİZCE DEYİM' : 'TÜRKÇE ANLAMI';
      document.getElementById('answer-label').textContent = mode === 'en-tr' ? 'TÜRKÇE ANLAMI' : 'İNGİLİZCE DEYİM';
      document.getElementById('answer-input').placeholder = mode === 'en-tr' ? 'Türkçe anlamını yazın...' : 'İngilizce deyimi yazın...';
    } else if (category === 'phrasal_verbs') {
      if (!isCustomQuiz) document.getElementById('progress-mode-label').textContent = mode === 'en-tr' ? '🔄 Phrasal Verbs (EN → TR)' : '🔄 Phrasal Verbs (TR → EN)';
      document.getElementById('question-label').textContent = mode === 'en-tr' ? 'PHRASAL VERB' : 'TÜRKÇE ANLAMI';
      document.getElementById('answer-label').textContent = mode === 'en-tr' ? 'TÜRKÇE ANLAMI' : 'PHRASAL VERB';
      document.getElementById('answer-input').placeholder = mode === 'en-tr' ? 'Türkçe karşılığını yazın...' : 'İngilizce phrasal verb yazın...';
    } else if (category === 'irregular_verbs') {
      if (!isCustomQuiz) document.getElementById('progress-mode-label').textContent = '📊 Düzensiz Fiiller (V1 - V2 - V3)';
      document.getElementById('question-label').textContent = 'DÜZENSİZ FİİL';
      document.getElementById('answer-label').textContent = 'TÜRKÇE ANLAMI';
      document.getElementById('answer-input').placeholder = 'Türkçe anlamını yazın...';
    } else if (mode === 'en-tr') {
      if (!isCustomQuiz) document.getElementById('progress-mode-label').textContent = '🇬🇧 İngilizce → Türkçe 🇹🇷';
      document.getElementById('question-label').textContent = 'İNGİLİZCE';
      document.getElementById('answer-label').textContent = 'TÜRKÇE KARŞILIĞI';
      document.getElementById('answer-input').placeholder = 'Türkçe anlamını yazın...';
    } else {
      if (!isCustomQuiz) document.getElementById('progress-mode-label').textContent = '🇹🇷 Türkçe → İngilizce 🇬🇧';
      document.getElementById('question-label').textContent = 'TÜRKÇE';
      document.getElementById('answer-label').textContent = 'İNGİLİZCE KARŞILIĞI';
      document.getElementById('answer-input').placeholder = 'İngilizce karşılığını yazın...';
    }

    // ===== CHECK FOR SAVED SESSION =====
    const savedState = loadQuizState();
    if (savedState && savedState.completedWords > 0) {
      const elapsed = Date.now() - savedState.lastActivity;
      const mins = Math.round(elapsed / 60000);
      const timeText = mins < 1 ? 'az önce' : mins + ' dk önce';

      // Kalan kelime sayısını hesapla
      let remainingCount = savedState.queue ? savedState.queue.length : 0;
      if (savedState.currentItem) remainingCount++;

      const isExpired = elapsed > SESSION_TIMEOUT;
      const statusText = isExpired ? '⏰ Zaman aşımı' : '📌 ' + timeText;

      let confirmMsg;
      if (remainingCount > 0) {
        confirmMsg = 'Kayıtlı ilerlemeniz var (' + statusText + '):\n' +
          savedState.completedWords + '/' + savedState.totalWords + ' kelime çözüldü, ' + remainingCount + ' kelime kaldı.\n\n' +
          'Kaldığınız yerden devam etmek ister misiniz?\n\n' +
          '• Tamam → Kaldığın yerden devam et\n' +
          '• İptal → Önceki cevaplar kaydedilir, kalan ' + remainingCount + ' kelimeyle yeni quiz başlar';
      } else {
        confirmMsg = 'Önceki quiziniz tamamlanmış (' + statusText + '):\n' +
          savedState.completedWords + '/' + savedState.totalWords + ' kelime çözüldü.\n\n' +
          'Sonuçları görmek ister misiniz?\n\n' +
          '• Tamam → Sonuçları göster\n' +
          '• İptal → Yeni quiz başlat';
      }

      if (confirm(confirmMsg)) {
        // ✅ KABUL: Kaldığı yerden devam et
        restoreFromState(savedState);
        updateProgress();
        updateStats();
        if (remainingCount > 0) {
          showNextWord();
        } else {
          showResults();
        }
        setupKeyListeners();
        setupExitListeners();
        initSupabaseSession();
        return;
      } else {
        // ❌ RED: Önceki oturumun cevaplarını kaydet, kalan kelimelerle yeni quiz başlat
        const prevSessionId = savedState.sessionId;
        const prevStats = savedState.stats;

        // Kalan benzersiz kelime ID'lerini topla
        const remainingWordIds = new Set();
        if (savedState.currentItem) remainingWordIds.add(savedState.currentItem.id);
        if (savedState.queue) savedState.queue.forEach(item => remainingWordIds.add(item.id));

        clearQuizState();

        // Önceki oturumu Supabase'de tamamla (initSupabaseSession içinde çalışacak)
        if (prevSessionId && prevStats && savedState.completedWords > 0) {
          pendingPreviousSession = { sessionId: prevSessionId, stats: prevStats };
        }

        // wordList'i sadece kalan kelimelerle filtrele
        if (remainingWordIds.size > 0) {
          const filteredList = wordList.filter(w => remainingWordIds.has(w.id));
          if (filteredList.length > 0) {
            wordList = filteredList;
          }
          // filteredList boşsa tüm kelimeler çözülmüş demektir — tam listeyle devam et
        }
        totalWords = wordList.length;
      }
    }

    // Build queue
    queue = wordList.map(w => ({ word: w, attempt: 1 }));
    shuffleArray(queue);

    updateProgress();
    showNextWord();

    setupKeyListeners();
    setupExitListeners();
    initSupabaseSession();
  }

  // ===== KEYBOARD LISTENERS =====
  function setupKeyListeners() {
    document.getElementById('answer-input').addEventListener('keydown', function (e) {
      if (document.querySelector('.o2-modal-overlay.open')) return;
      if (e.key === 'Enter' && !isWaiting) {
        e.stopPropagation();
        checkAnswer();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (document.querySelector('.o2-modal-overlay.open')) return;
      if (isWaiting && (e.key === 'Enter' || e.code === 'Space')) {
        e.preventDefault();
        nextWord();
      }
    });
  }

  // ===== EXIT LISTENERS =====
  function setupExitListeners() {
    window.addEventListener('beforeunload', function (e) {
      // Save state immediately if they close the tab
      saveQuizState();
    });
    
    // Also save state when visibility changes (like switching to another app on mobile)
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'hidden') {
        saveQuizState();
      }
    });
  }

  // ===== SUPABASE SESSION =====
  async function initSupabaseSession() {
    try {
      const user = await getCurrentUser();
      if (user && user.id) {
        loggedInUser = user;
        const sb = getSupabase();

        // Önceki oturumu tamamla (kullanıcı devam etmek istemedi)
        if (pendingPreviousSession && pendingPreviousSession.sessionId) {
          const prev = pendingPreviousSession;
          const prevUpdateData = {
            status: 'completed',
            first_try_count: prev.stats.firstTry,
            retry_count: prev.stats.retry,
            hard_count: prev.stats.hard,
            unknown_count: prev.stats.unknown,
            completed_at: new Date().toISOString()
          };

          if (!navigator.onLine) {
            if (typeof OfflineSync !== 'undefined') {
              OfflineSync.enqueue('quiz_sessions', 'update', prevUpdateData, { id: prev.sessionId });
            }
          } else {
            try {
              await sb.from('quiz_sessions').update(prevUpdateData).eq('id', prev.sessionId);
              sessionStorage.removeItem('cachedWordResults_' + user.id);
            } catch (ex) { /* silent */ }
          }
          pendingPreviousSession = null;
        }

        // Reuse existing session if restored
        if (sessionId) return;

        const params = new URLSearchParams(window.location.search);
        const sessionData = {
          user_id: user.id,
          level: params.get('level') || 'a2',
          mode: params.get('mode') || 'en-tr',
          status: 'in_progress'
        };

        if (!navigator.onLine) {
          // Generate a temp session ID and enqueue the insertion
          const tempSessionId = 'local-session-' + Date.now() + '-' + Math.floor(Math.random() * 100000);
          sessionData.id = tempSessionId;
          if (typeof OfflineSync !== 'undefined') {
            OfflineSync.enqueue('quiz_sessions', 'insert', sessionData);
          }
          sessionId = tempSessionId;
          console.log('[Offline] Initialized local quiz session:', sessionId);
          return;
        }

        const { data } = await sb.from('quiz_sessions').insert(sessionData).select().single();
        if (data) sessionId = data.id;
      }
    } catch (e) { /* silent */ }
  }

  async function saveWordResult(wordId, result) {
    if (!loggedInUser || !sessionId) return;
    
    const wordResultData = {
      user_id: loggedInUser.id,
      session_id: sessionId,
      word_id: wordId,
      result: result
    };

    if (!navigator.onLine) {
      if (typeof OfflineSync !== 'undefined') {
        OfflineSync.enqueue('word_results', 'insert', wordResultData);
        
        if (result === 'first_try') {
          OfflineSync.enqueue('study_words', 'update', {
            starred: false,
            mastered: true
          }, { user_id: loggedInUser.id, word_id: wordId });
        }
        
        if (result === 'unknown') {
          OfflineSync.enqueue('study_words', 'upsert', {
            user_id: loggedInUser.id,
            word_id: wordId,
            times_failed: 1,
            last_failed_at: new Date().toISOString(),
            mastered: false,
            starred: true
          }, null, { onConflict: 'user_id,word_id' });
        }
      }
      return;
    }

    try {
      const sb = getSupabase();
      await sb.from('word_results').insert(wordResultData);

      // İlk seferde doğru → yıldızı kaldır, mastered yap
      if (result === 'first_try') {
        await sb.from('study_words').update({
          starred: false,
          mastered: true
        }).eq('user_id', loggedInUser.id).eq('word_id', wordId);
      }

      // Bilinmeyen kelime → yıldızla
      if (result === 'unknown') {
        await sb.from('study_words').upsert({
          user_id: loggedInUser.id,
          word_id: wordId,
          times_failed: 1,
          last_failed_at: new Date().toISOString(),
          mastered: false,
          starred: true
        }, { onConflict: 'user_id,word_id' });
      }
    } catch (e) { /* silent */ }
  }

  // Auto-star word on any wrong answer
  async function starWord(wordId) {
    if (!loggedInUser) return;

    const studyWordData = {
      user_id: loggedInUser.id,
      word_id: wordId,
      starred: true,
      last_failed_at: new Date().toISOString(),
      mastered: false
    };

    if (!navigator.onLine) {
      if (typeof OfflineSync !== 'undefined') {
        OfflineSync.enqueue('study_words', 'upsert', studyWordData, null, { onConflict: 'user_id,word_id' });
      }
      return;
    }

    try {
      const sb = getSupabase();
      await sb.from('study_words').upsert(studyWordData, { onConflict: 'user_id,word_id' });
    } catch (e) { /* silent */ }
  }

  // Toggle star (for results screen)
  window.toggleStar = async function (wordId, btn) {
    if (!loggedInUser) return;
    const isStarred = btn.classList.contains('starred');

    if (isStarred) {
      // Unstar
      if (!navigator.onLine) {
        if (typeof OfflineSync !== 'undefined') {
          OfflineSync.enqueue('study_words', 'update', { starred: false }, { user_id: loggedInUser.id, word_id: wordId });
        }
      } else {
        const sb = getSupabase();
        await sb.from('study_words').update({ starred: false })
          .eq('user_id', loggedInUser.id).eq('word_id', wordId);
      }
      btn.classList.remove('starred');
      btn.textContent = '☆';
    } else {
      // Star
      const studyWordData = {
        user_id: loggedInUser.id,
        word_id: wordId,
        starred: true,
        mastered: false
      };
      if (!navigator.onLine) {
        if (typeof OfflineSync !== 'undefined') {
          OfflineSync.enqueue('study_words', 'upsert', studyWordData, null, { onConflict: 'user_id,word_id' });
        }
      } else {
        const sb = getSupabase();
        await sb.from('study_words').upsert(studyWordData, { onConflict: 'user_id,word_id' });
      }
      btn.classList.add('starred');
      btn.textContent = '★';
    }
  };

  async function saveSessionComplete() {
    if (!loggedInUser || !sessionId) return;
    
    // Clear session cache to force re-fetch when online
    sessionStorage.removeItem('cachedWordResults_' + loggedInUser.id);

    const sessionUpdateData = {
      status: 'completed',
      first_try_count: stats.firstTry,
      retry_count: stats.retry,
      hard_count: stats.hard,
      unknown_count: stats.unknown,
      completed_at: new Date().toISOString()
    };

    if (!navigator.onLine) {
      if (typeof OfflineSync !== 'undefined') {
        OfflineSync.enqueue('quiz_sessions', 'update', sessionUpdateData, { id: sessionId });
      }
      return;
    }

    try {
      const sb = getSupabase();
      await sb.from('quiz_sessions').update(sessionUpdateData).eq('id', sessionId);
    } catch (e) { /* silent */ }
  }

  // ===== SHUFFLE =====
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // ===== SHOW NEXT WORD =====
  function showNextWord() {
    if (queue.length === 0) {
      showResults();
      return;
    }

    currentItem = queue.shift();
    const w = currentItem.word;
    const isGrammarTest = w.category === 'grammar_test' || mode === 'gap-fill';
    const isGrammar = !isGrammarTest && (w.category === 'grammar' || !!w.formula_short || mode === 'formula-topic');

    const qEl = document.getElementById('question-word');

    // Remove any leftover multi-gap inputs
    const existingMulti = document.getElementById('multi-gap-inputs');
    if (existingMulti) existingMulti.remove();

    const input = document.getElementById('answer-input');

    if (isGrammarTest) {
      const blankCount = (w.blanks && w.blanks.length) || 1;
      let sentenceHtml = escapeHtml(w.sentence || w.en || '');
      let bCount = 0;
      sentenceHtml = sentenceHtml.replace(/_______/g, () => {
        bCount++;
        return `<span class="blank-marker">[${bCount}] _______</span>`;
      });

      qEl.innerHTML = `
        <div class="grammar-test-card">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="grammar-test-topic">${escapeHtml(w.topic || 'Gramer Testi')}</span>
            <span style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">${blankCount} BOŞLUK</span>
          </div>
          <div class="grammar-test-sentence">${sentenceHtml}</div>
        </div>
      `;

      if (w.blanks && w.blanks.length > 1) {
        // Multi-blank mode: hide single input, render multi-inputs
        input.style.display = 'none';
        const inputGroup = document.querySelector('.answer-input-group');
        const submitBtn = document.getElementById('submit-btn');

        const multiContainer = document.createElement('div');
        multiContainer.id = 'multi-gap-inputs';
        multiContainer.className = 'grammar-test-inputs';

        w.blanks.forEach((b, idx) => {
          const row = document.createElement('div');
          row.className = 'blank-input-row';
          row.innerHTML = `
            <span class="blank-num-badge">${b.index || (idx + 1)}</span>
            <input
              type="text"
              class="answer-input gap-input"
              id="gap-input-${idx}"
              data-blank-index="${idx}"
              placeholder="(${escapeHtml(b.clue || '')}) için fiil/kelime hali..."
              autocomplete="off"
              autocapitalize="none"
              spellcheck="false"
            >
          `;
          multiContainer.appendChild(row);
        });

        if (inputGroup && submitBtn) {
          inputGroup.insertBefore(multiContainer, submitBtn);
        }

        // Key listeners for multi-gap inputs
        w.blanks.forEach((b, idx) => {
          const gapInp = document.getElementById('gap-input-' + idx);
          if (gapInp) {
            gapInp.addEventListener('keydown', function (e) {
              if (document.querySelector('.o2-modal-overlay.open')) return;
              if (e.key === 'Enter' && !isWaiting) {
                e.stopPropagation();
                if (idx < w.blanks.length - 1) {
                  const nextInp = document.getElementById('gap-input-' + (idx + 1));
                  if (nextInp) nextInp.focus();
                } else {
                  checkAnswer();
                }
              }
            });
          }
        });

        const firstInp = document.getElementById('gap-input-0');
        if (firstInp) firstInp.focus();

      } else {
        // Single blank grammar test
        input.style.display = '';
        input.value = '';
        input.className = 'answer-input';
        input.disabled = false;
        const clue = (w.blanks && w.blanks[0] && w.blanks[0].clue) ? w.blanks[0].clue : '';
        input.placeholder = clue ? `(${clue}) için doğru hali yazın...` : 'Cevabınızı yazın...';
        input.focus();
      }

    } else if (isGrammar) {
      input.style.display = '';
      input.value = '';
      input.className = 'answer-input';
      input.disabled = false;
      input.placeholder = 'Konuyu veya Tense adını yazın (örn: Present Perfect)...';

      const exampleStr = w.forms && w.forms.positive ? w.forms.positive.example : (w.hintEn || '');
      const signalsStr = w.signal_words ? w.signal_words.slice(0, 5).join(', ') : '';

      qEl.innerHTML = `
        <div class="grammar-formula-card">
          <div class="grammar-badge">${escapeHtml(w.formula_short || w.en)}</div>
          ${w.formula_long ? `<div class="grammar-formula-long">${escapeHtml(w.formula_long)}</div>` : ''}
          ${exampleStr ? `
            <div class="grammar-example-box">
              <span class="grammar-example-title">💡 Örnek Cümle:</span>
              <span class="grammar-example-text">"${escapeHtml(exampleStr)}"</span>
            </div>
          ` : ''}
          ${signalsStr ? `
            <div class="grammar-signals">🔑 <strong>İpuçları:</strong> ${escapeHtml(signalsStr)}</div>
          ` : ''}
        </div>
      `;
      input.focus();
    } else {
      input.style.display = '';
      input.value = '';
      input.className = 'answer-input';
      input.disabled = false;
      const questionWord = mode === 'en-tr' ? w.en : w.tr;
      qEl.textContent = questionWord;
      input.focus();
    }

    document.getElementById('feedback-message').className = 'feedback-message';
    document.getElementById('feedback-message').innerHTML = '';
    document.getElementById('continue-btn').className = 'continue-btn';
    document.getElementById('submit-btn').disabled = false;
    
    const repBtn = document.getElementById('report-btn');
    if (repBtn) repBtn.style.display = 'none';

    const badge = document.getElementById('attempt-badge');
    if (currentItem.attempt === 2) {
      badge.className = 'attempt-badge visible attempt-2';
      badge.textContent = '🔄 2. Deneme';
    } else if (currentItem.attempt === 3) {
      badge.className = 'attempt-badge visible attempt-3';
      badge.textContent = '⚠️ Son Deneme';
    } else {
      badge.className = 'attempt-badge';
      badge.textContent = '';
    }

    isWaiting = false;
  }

  // ===== CHECK ANSWER =====
  window.checkAnswer = function () {
    if (isWaiting || !currentItem) return;

    const w = currentItem.word;
    const isGrammarTest = w.category === 'grammar_test' || mode === 'gap-fill';
    const isGrammar = !isGrammarTest && (w.category === 'grammar' || !!w.formula_short || mode === 'formula-topic');

    let isCorrect = false;
    let correctAnswerDisplay = '';
    let blankResults = [];

    if (isGrammarTest) {
      const blanks = w.blanks || [{ index: 1, clue: '', answers: [w.en] }];
      const userAnswers = [];

      if (blanks.length > 1) {
        let allFilled = true;
        for (let i = 0; i < blanks.length; i++) {
          const inp = document.getElementById('gap-input-' + i);
          const val = inp ? inp.value.trim() : '';
          if (!val) {
            allFilled = false;
            if (inp) inp.focus();
            break;
          }
          userAnswers.push(val);
        }
        if (!allFilled) return;
      } else {
        const inp = document.getElementById('answer-input');
        const val = inp.value.trim();
        if (!val) {
          inp.focus();
          return;
        }
        userAnswers.push(val);
      }

      let allGapsCorrect = true;
      for (let i = 0; i < blanks.length; i++) {
        const b = blanks[i];
        const uAns = userAnswers[i];
        const ok = isGapAnswerCorrect(uAns, b.answers);
        blankResults.push({ index: i, userAns: uAns, isCorrect: ok, answers: b.answers });
        if (!ok) allGapsCorrect = false;

        const inpEl = blanks.length > 1
          ? document.getElementById('gap-input-' + i)
          : document.getElementById('answer-input');
        if (inpEl) {
          inpEl.className = 'answer-input ' + (ok ? 'correct' : 'wrong');
          inpEl.disabled = true;
        }
      }

      isCorrect = allGapsCorrect;

    } else if (isGrammar) {
      const input = document.getElementById('answer-input');
      const userAnswer = input.value.trim();
      if (userAnswer === '') {
        input.focus();
        return;
      }
      isCorrect = compareGrammarAnswer(userAnswer, w);
      correctAnswerDisplay = (w.topic_en || w.tr) + (w.topic_tr ? ` (${w.topic_tr})` : '');
    } else {
      const input = document.getElementById('answer-input');
      const userAnswer = input.value.trim();
      if (userAnswer === '') {
        input.focus();
        return;
      }
      const correctAnswer = mode === 'en-tr' ? w.tr : w.en;
      isCorrect = compareAnswers(userAnswer, correctAnswer);
      correctAnswerDisplay = correctAnswer;
    }

    const feedback = document.getElementById('feedback-message');
    const continueBtn = document.getElementById('continue-btn');

    if (isCorrect) {
      if (!isGrammarTest) {
        const input = document.getElementById('answer-input');
        input.className = 'answer-input correct';
        input.disabled = true;
      }
      document.getElementById('submit-btn').disabled = true;

      feedback.className = 'feedback-message correct';
      if (isGrammarTest) {
        const blanks = w.blanks || [];
        const answersStr = blanks.map((b, i) =>
          `[${i+1}] <strong>${escapeHtml(b.answers[0])}</strong>`
        ).join(' &nbsp;|&nbsp; ');

        feedback.innerHTML = `
          ✅ Harika! Doğru Tamamladın.
          <div style="margin-top:6px; font-size:1.05rem; color:#10b981;">
            ${answersStr}
          </div>
          ${w.explanation ? `
            <div class="grammar-explanation-box">
              <strong>💡 Kural / Açıklama:</strong> ${escapeHtml(w.explanation)}
            </div>
          ` : ''}
        `;
      } else if (isGrammar) {
        feedback.innerHTML = `
          ✅ Doğru!
          <span class="correct-answer"><strong>${escapeHtml(currentItem.word.topic_en || currentItem.word.tr)}</strong> ${currentItem.word.topic_tr ? `(${escapeHtml(currentItem.word.topic_tr)})` : ''} — <span style="color:#a78bfa;">[${escapeHtml(currentItem.word.formula_short || currentItem.word.en)}]</span></span>
        `;
      } else {
        feedback.innerHTML = `
          ✅ Doğru!
          <span class="correct-answer"><strong>${escapeHtml(currentItem.word.en)}</strong> — ${escapeHtml(currentItem.word.tr)}</span>
        `;
      }

      if (currentItem.attempt === 1) {
        stats.firstTry++;
        wordLists.firstTry.push(currentItem.word);
        saveWordResult(currentItem.word.id, 'first_try');
      } else if (currentItem.attempt === 2) {
        stats.retry++;
        wordLists.retry.push(currentItem.word);
        saveWordResult(currentItem.word.id, 'retry');
      } else if (currentItem.attempt === 3) {
        stats.hard++;
        wordLists.hard.push(currentItem.word);
        saveWordResult(currentItem.word.id, 'hard');
      }

      completedWords++;
      updateProgress();
      saveQuizState();
      updateStats();

      continueBtn.className = 'continue-btn visible';
      
      if (loggedInUser) {
        const repBtn = document.getElementById('report-btn');
        if (repBtn) repBtn.style.display = 'inline-flex';
      }
      
      isWaiting = true;

    } else {
      // ❌ WRONG — auto-star this word
      starWord(currentItem.word.id);

      if (!isGrammarTest) {
        const input = document.getElementById('answer-input');
        input.className = 'answer-input wrong';
        input.disabled = true;
      }
      document.getElementById('submit-btn').disabled = true;

      feedback.className = 'feedback-message wrong';
      if (isGrammarTest) {
        const blanks = w.blanks || [];
        const answersStr = blanks.map((b, i) => {
          const isBldCorrect = blankResults[i] && blankResults[i].isCorrect;
          const statusIcon = isBldCorrect ? '✅' : '❌';
          return `<span style="display:inline-block; margin:2px 6px;">
            ${statusIcon} [${i+1}] <strong>${escapeHtml(b.answers.join(' / '))}</strong>
          </span>`;
        }).join('');

        feedback.innerHTML = `
          ❌ Yanlış veya Eksik!
          <div style="margin-top:6px; font-size:1rem;">
            Doğru cevaplar: ${answersStr}
          </div>
          ${w.explanation ? `
            <div class="grammar-explanation-box">
              <strong>💡 Kural / Açıklama:</strong> ${escapeHtml(w.explanation)}
            </div>
          ` : ''}
        `;
      } else {
        feedback.innerHTML = `
          ❌ Yanlış!
          <span class="correct-answer">Doğru cevap: <strong>${escapeHtml(correctAnswerDisplay)}</strong></span>
        `;
      }

      if (currentItem.attempt < 3) {
        const reinsertItem = {
          word: currentItem.word,
          attempt: currentItem.attempt + 1
        };
        const minPos = Math.min(3, queue.length);
        const maxPos = Math.min(10, queue.length);
        const insertPos = minPos + Math.floor(Math.random() * (maxPos - minPos + 1));
        queue.splice(insertPos, 0, reinsertItem);
      } else {
        stats.unknown++;
        wordLists.unknown.push(currentItem.word);
        saveWordResult(currentItem.word.id, 'unknown');
        completedWords++;
        updateProgress();
      }
      saveQuizState();

      updateStats();
      continueBtn.className = 'continue-btn visible';
      
      if (loggedInUser) {
        const repBtn = document.getElementById('report-btn');
        if (repBtn) repBtn.style.display = 'inline-flex';
      }
      
      isWaiting = true;
    }
  };

  // ===== GAP FILL SMART ANSWER COMPARISON =====
  function normalizeGapAnswer(str) {
    if (!str) return '';
    return str
      .replace(/[‘’`]/g, "'")
      .normalize('NFC')
      .trim()
      .toLowerCase()
      .replace(/[.?!,;]+$/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function expandContractions(str) {
    let s = ' ' + str + ' ';
    const pairs = [
      [/\bdidn't\b/g, 'did not'],
      [/\bdoesn't\b/g, 'does not'],
      [/\bdon't\b/g, 'do not'],
      [/\bwasn't\b/g, 'was not'],
      [/\bweren't\b/g, 'were not'],
      [/\bisn't\b/g, 'is not'],
      [/\baren't\b/g, 'are not'],
      [/\bhaven't\b/g, 'have not'],
      [/\bhasn't\b/g, 'has not'],
      [/\bhadn't\b/g, 'had not'],
      [/\bwon't\b/g, 'will not'],
      [/\bcan't\b/g, 'cannot'],
      [/\bcan not\b/g, 'cannot'],
      [/\bcouldn't\b/g, 'could not'],
      [/\bshouldn't\b/g, 'should not'],
      [/\bmustn't\b/g, 'must not'],
      [/\b'll\b/g, ' will'],
      [/\b've\b/g, ' have'],
      [/\b're\b/g, ' are'],
      [/\b'm\b/g, ' am']
    ];
    for (const [re, rep] of pairs) {
      s = s.replace(re, rep);
    }
    return s.replace(/\s+/g, ' ').trim();
  }

  function isGapAnswerCorrect(userAnswer, acceptedAnswers) {
    if (!userAnswer || !acceptedAnswers || !Array.isArray(acceptedAnswers)) return false;
    const userNorm = normalizeGapAnswer(userAnswer);
    const userExpanded = expandContractions(userNorm);

    for (const acc of acceptedAnswers) {
      const accNorm = normalizeGapAnswer(acc);
      if (userNorm === accNorm) return true;
      if (userExpanded === expandContractions(accNorm)) return true;
    }
    return false;
  }

  // ===== GRAMMAR SMART ANSWER COMPARISON =====
  function compareGrammarAnswer(userAnswer, item) {
    if (!userAnswer || !item) return false;

    function cleanString(str) {
      return (str || '').normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/İ/g, 'i').replace(/I/g, 'i').replace(/ı/g, 'i')
        .replace(/Ğ/g, 'g').replace(/ğ/g, 'g')
        .replace(/Ü/g, 'u').replace(/ü/g, 'u')
        .replace(/Ş/g, 's').replace(/ş/g, 's')
        .replace(/Ö/g, 'o').replace(/ö/g, 'o')
        .replace(/Ç/g, 'c').replace(/ç/g, 'c')
        .toLowerCase()
        .replace(/[.,\-_/()]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    function removeSuffixes(str) {
      return str
        .replace(/\b(tense|tensi|zaman|zamani|cumlesi|kipi|voice)\b/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    }

    const userClean = cleanString(userAnswer);
    const userCore = removeSuffixes(userClean);

    // All valid accepted candidates
    const candidates = [];
    if (item.topic_en) candidates.push(item.topic_en);
    if (item.topic_tr) candidates.push(item.topic_tr);
    if (item.tr) candidates.push(item.tr);
    if (item.accepted_answers && Array.isArray(item.accepted_answers)) {
      candidates.push(...item.accepted_answers);
    }

    for (const cand of candidates) {
      const candClean = cleanString(cand);
      const candCore = removeSuffixes(candClean);

      // Exact normalized match or core without suffix match
      if (userClean === candClean || (userCore && userCore === candCore)) {
        return true;
      }
    }

    return false;
  }

  // ===== COMPARE ANSWERS =====
  function compareAnswers(userAnswer, correctAnswer) {
    const normalize = mode === 'en-tr' ? normalizeTurkish : normalizeEnglish;
    const userNorm = normalize(userAnswer);
    const alternatives = correctAnswer.split(/\s*\/\s*/);
    for (const alt of alternatives) {
      const variants = generateVariants(alt);
      for (const variant of variants) {
        if (userNorm === normalize(variant)) return true;
      }
    }
    return false;
  }

  function generateVariants(text) {
    const variants = new Set();
    const trimmed = text.trim();
    variants.add(trimmed);
    const withoutParens = trimmed.replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
    if (withoutParens) variants.add(withoutParens);
    const withContent = trimmed.replace(/\(([^)]*)\)/g, '$1').replace(/\s+/g, ' ').trim();
    variants.add(withContent);
    return [...variants];
  }

  function normalizeTurkish(str) {
    return str.normalize('NFC').trim()
      .replace(/İ/g, 'i').replace(/I/g, 'ı').replace(/Ğ/g, 'ğ')
      .replace(/Ü/g, 'ü').replace(/Ş/g, 'ş').replace(/Ö/g, 'ö').replace(/Ç/g, 'ç')
      .toLocaleLowerCase('tr-TR');
  }

  function normalizeEnglish(str) {
    return str.normalize('NFC').trim().toLowerCase();
  }

  // ===== NEXT WORD =====
  window.nextWord = function () {
    if (!isWaiting) return;
    showNextWord();
  };

  // ===== FINISH QUIZ EARLY =====
  window.finishQuiz = function () {
    if (completedWords === 0) return;
    if (!confirm(`${completedWords} kelime çözüldü. Testi sonuçlandırmak istediğinize emin misiniz?`)) return;
    clearQuizState();
    queue = [];
    showResults();
  };

  // ===== UPDATE PROGRESS =====
  function updateProgress() {
    document.getElementById('progress-count').textContent = `${completedWords} / ${totalWords}`;
    const pct = (completedWords / totalWords) * 100;
    document.getElementById('progress-bar-fill').style.width = pct + '%';
  }

  // ===== UPDATE STATS =====
  function updateStats() {
    document.getElementById('stat-first').textContent = stats.firstTry;
    document.getElementById('stat-retry').textContent = stats.retry;
    document.getElementById('stat-hard').textContent = stats.hard;
    document.getElementById('stat-unknown').textContent = stats.unknown;
  }

  // ===== SHOW RESULTS =====
  function showResults() {
    clearQuizState();
    document.getElementById('progress-section').style.display = 'none';
    document.getElementById('quiz-card').style.display = 'none';
    document.getElementById('stats-bar').style.display = 'none';
    document.getElementById('quiz-bottom-actions').style.display = 'none';

    document.getElementById('result-first').textContent = stats.firstTry;
    document.getElementById('result-retry').textContent = stats.retry;
    document.getElementById('result-hard').textContent = stats.hard;
    document.getElementById('result-unknown').textContent = stats.unknown;

    const total = stats.firstTry + stats.retry + stats.hard + stats.unknown;
    const successRate = total > 0 ? Math.round(((stats.firstTry + stats.retry + stats.hard) / total) * 100) : 0;
    
    const ds = new URLSearchParams(window.location.search).get('dataset') || new URLSearchParams(window.location.search).get('category');
    const labelSoru = (ds === 'grammar' || ds === 'grammar_test') ? 'soru' : 'kelime';
    document.getElementById('results-subtitle').textContent =
      `${total} ${labelSoru} çözüldü — %${successRate} başarı oranı`;

    buildWordLists();
    saveSessionComplete();

    // Activity log
    if (typeof logActivity === 'function') {
      const params = new URLSearchParams(window.location.search);
      logActivity('quiz_completed', {
        dataset: params.get('dataset') || params.get('category') || 'kurs',
        mode: mode,
        total: total,
        firstTry: stats.firstTry,
        retry: stats.retry,
        hard: stats.hard,
        unknown: stats.unknown,
        successRate: successRate + '%'
      });
    }

    document.getElementById('results-screen').classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ===== BUILD WORD LISTS =====
  function buildWordLists() {
    const container = document.getElementById('results-word-lists');
    container.innerHTML = '';

    const categories = [
      { key: 'firstTry', icon: '⚡', title: 'İlk Seferde Bilinen', colorClass: 'wl-first', words: wordLists.firstTry },
      { key: 'retry', icon: '🔄', title: 'Tekrarda Öğrenilen', colorClass: 'wl-retry', words: wordLists.retry },
      { key: 'hard', icon: '😓', title: 'Yapılamayan', colorClass: 'wl-hard', words: wordLists.hard },
      { key: 'unknown', icon: '❌', title: 'Bilinmiyor', colorClass: 'wl-unknown', words: wordLists.unknown }
    ];

    categories.forEach(cat => {
      if (cat.words.length === 0) return;

      const section = document.createElement('div');
      section.className = `word-list-section ${cat.colorClass}`;

      const header = document.createElement('div');
      header.className = 'word-list-header';
      header.innerHTML = `
        <div class="word-list-title">
          <span class="word-list-icon">${cat.icon}</span>
          <span>${escapeHtml(cat.title)}</span>
          <span class="word-list-count">${cat.words.length}</span>
        </div>
        <span class="word-list-toggle">▶</span>
      `;
      header.addEventListener('click', () => {
        const body = section.querySelector('.word-list-body');
        const toggle = header.querySelector('.word-list-toggle');
        body.classList.toggle('collapsed');
        toggle.textContent = body.classList.contains('collapsed') ? '▶' : '▼';
      });

      const body = document.createElement('div');
      body.className = 'word-list-body collapsed';

      cat.words.forEach(word => {
        const row = document.createElement('div');
        row.className = 'word-list-row';
        // Star button: auto-starred if not firstTry
        const isAutoStarred = cat.key !== 'firstTry';
        const wordEnText = word.category === 'grammar_test' ? (word.sentence || word.en) : word.en;
        const wordTrText = word.category === 'grammar_test'
          ? (word.topic + (word.blanks ? ' [' + word.blanks.map(b => b.answers[0]).join(', ') + ']' : ''))
          : word.tr;
        row.innerHTML = `
          <button class="star-btn ${isAutoStarred ? 'starred' : ''}" onclick="toggleStar(${word.id}, this)" title="Yıldızla">
            ${isAutoStarred ? '★' : '☆'}
          </button>
          <span class="word-en">${escapeHtml(wordEnText)}</span>
          <span class="word-separator">—</span>
          <span class="word-tr">${escapeHtml(wordTrText)}</span>
        `;
        body.appendChild(row);
      });

      section.appendChild(header);
      section.appendChild(body);
      container.appendChild(section);
    });
  }

  // ===== RESTART =====
  window.restartQuiz = function () {
    clearQuizState();
    completedWords = 0;
    stats.firstTry = 0;
    stats.retry = 0;
    stats.hard = 0;
    stats.unknown = 0;
    wordLists.firstTry = [];
    wordLists.retry = [];
    wordLists.hard = [];
    wordLists.unknown = [];
    currentItem = null;
    isWaiting = false;

    document.getElementById('progress-section').style.display = '';
    document.getElementById('quiz-card').style.display = '';
    document.getElementById('stats-bar').style.display = '';
    document.getElementById('quiz-bottom-actions').style.display = '';
    document.getElementById('results-screen').classList.remove('visible');

    const params = new URLSearchParams(window.location.search);
    let wordList = [];
    const category = params.get('category') || params.get('dataset') || 'vocab';
    const timesFilter = params.get('timesFilter');

    if (typeof DataManager !== 'undefined') {
      if (category === 'times' && timesFilter && typeof WORDS_A2_TIMES_FULL !== 'undefined') {
        if (timesFilter === 'am') {
          wordList = WORDS_A2_TIMES_FULL.filter(w => {
            const match = w.hintEn ? w.hintEn.match(/It is (\d{2}):/) : null;
            return match && parseInt(match[1], 10) < 12;
          });
        } else if (timesFilter === 'pm') {
          wordList = WORDS_A2_TIMES_FULL.filter(w => {
            const match = w.hintEn ? w.hintEn.match(/It is (\d{2}):/) : null;
            return match && parseInt(match[1], 10) >= 12;
          });
        } else {
          wordList = WORDS_A2_TIMES_FULL.filter(w => w.hintEn && w.hintEn.includes(`It is ${timesFilter}:`));
        }
      } else {
        wordList = DataManager.getItemsByCategory(category);
      }
    } else {
      let selectedData = typeof WORDS_A2 !== 'undefined' ? WORDS_A2 : [];
      if (category === 'genel' && typeof WORDS_A2_GENEL !== 'undefined') selectedData = WORDS_A2_GENEL;
      else if (category === 'grammar' && typeof WORDS_A2_GRAMMAR !== 'undefined') selectedData = WORDS_A2_GRAMMAR;
      else if (category === 'grammar_test' && typeof GRAMMAR_TEST_DATA !== 'undefined') selectedData = GRAMMAR_TEST_DATA;
      else if (category === 'deyimler' && typeof WORDS_A2_DEYIMLER !== 'undefined') selectedData = WORDS_A2_DEYIMLER;
      else if (category === 'times' && typeof WORDS_A2_TIMES !== 'undefined') selectedData = WORDS_A2_TIMES;
      wordList = [...selectedData];
    }

    if (isCustomQuiz) {
      const customIds = JSON.parse(localStorage.getItem('custom_quiz_ids') || '[]');
      const allItems = typeof DataManager !== 'undefined' ? DataManager.getAllItems() : (typeof ALL_WORDS_A2 !== 'undefined' ? ALL_WORDS_A2 : []);
      wordList = allItems.filter(w => customIds.includes(w.id));
    } else {
      if (params.get('exclude') === 'true') {
        const excludeIds = JSON.parse(localStorage.getItem('exclude_quiz_ids') || '[]');
        wordList = wordList.filter(w => !excludeIds.includes(w.id));
      }
    }

    if (!wordList || wordList.length === 0) {
      if (category === 'grammar_test' && typeof GRAMMAR_TEST_DATA !== 'undefined') {
        wordList = [...GRAMMAR_TEST_DATA];
      } else {
        wordList = typeof DataManager !== 'undefined' ? DataManager.getItemsByCategory('vocab') : [];
      }
    }

    totalWords = wordList.length;

    queue = wordList.map(w => ({ word: w, attempt: 1 }));
    shuffleArray(queue);

    updateProgress();
    updateStats();
    showNextWord();
  };

  // ===== ESCAPE HTML =====
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ===== O2 OXYGEN MODAL =====
  window.openO2Info = function () {
    const overlay = document.getElementById('o2-modal-overlay');
    const searchInput = document.getElementById('o2-search-input');
    const resultsContainer = document.getElementById('o2-results');

    if (!overlay) return;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // ÖZEL İPUCU KONTROLÜ (410 Kelime ve Quiz Moduna Duyarlı)
    if (currentItem && currentItem.word && currentItem.word.hintEn && resultsContainer) {
      const hintToShow = mode === 'en-tr' ? currentItem.word.hintEn : currentItem.word.hintTr;
      const wordToShow = mode === 'en-tr' ? currentItem.word.en : currentItem.word.tr;
      
      const categoryColor = '#10b981';
      resultsContainer.innerHTML = `
        <div class="o2-result-card tip-card" style="border: 2px solid rgba(16, 185, 129, 0.3);">
          <div class="o2-card-header">
            <span class="o2-card-badge" style="background: ${categoryColor}20; color: ${categoryColor}; border-color: ${categoryColor}40">💡 Özel İpucu</span>
            <h3 class="o2-card-title">${escapeHtml(wordToShow)}</h3>
          </div>
          <p class="o2-card-content" style="font-size: 1.1rem; line-height: 1.6; margin-top: 10px; color: var(--text-primary);">
            ${escapeHtml(hintToShow)}
          </p>
        </div>
      `;
      if (searchInput) searchInput.value = '';
      return; // O2 arama motorunu durdur, sadece bu özel kartı göster.
    }

    // Auto-search current word
    if (currentItem && currentItem.word) {
      const searchTerm = currentItem.word.en || '';
      if (searchInput) searchInput.value = searchTerm;
      performO2Search(searchTerm);
    }

    // Focus search input
    setTimeout(() => { if (searchInput) searchInput.focus(); }, 300);
  };

  window.closeO2Modal = function () {
    const overlay = document.getElementById('o2-modal-overlay');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  function performO2Search(query) {
    const resultsContainer = document.getElementById('o2-results');
    if (!resultsContainer || !query || query.trim().length < 2) {
      resultsContainer.innerHTML = '<div class="o2-empty-state"><span class="o2-empty-icon">🔍</span><p>Aramak istediğin kelimeyi veya kuralı yaz</p></div>';
      return;
    }

    // Search using O2 Engine
    let results = [];

    // If we have a current word, try quiz-context search first
    if (currentItem && currentItem.word && query === currentItem.word.en) {
      results = O2Engine.searchForQuiz(currentItem.word);
    }

    // If no quiz-context results, do general search
    if (results.length === 0) {
      results = O2Engine.search(query);
    }

    if (results.length === 0) {
      resultsContainer.innerHTML = '<div class="o2-empty-state"><span class="o2-empty-icon">🤷</span><p>"' + O2Engine.escapeHtml(query) + '" için sonuç bulunamadı</p></div>';
      return;
    }

    resultsContainer.innerHTML = results.map(entry => O2Engine.renderCard(entry)).join('');
  }

  // O2 search input handler
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('o2-search-input');
    if (searchInput) {
      let debounce = null;
      searchInput.addEventListener('input', () => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          performO2Search(searchInput.value);
        }, 300);
      });
    }
  });

  // ===== REPORT MODAL =====
  window.openReportModal = function() {
    if (!loggedInUser) {
      alert("Raporlamak için giriş yapmalısınız.");
      return;
    }
    if (!currentItem || !currentItem.word) return;
    
    document.getElementById('report-modal-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    
    const wordText = mode === 'en-tr' 
      ? `${currentItem.word.en} — ${currentItem.word.tr}` 
      : `${currentItem.word.tr} — ${currentItem.word.en}`;
      
    document.getElementById('report-word-text').textContent = wordText;
    document.getElementById('report-reason').value = "Hatalı Çeviri";
    document.getElementById('report-subject-container').style.display = 'none';
    document.getElementById('report-subject').value = "";
    document.getElementById('report-details').value = "";
    document.getElementById('submit-report-btn').disabled = false;
    document.getElementById('submit-report-btn').textContent = "Raporu Gönder";
  };

  window.closeReportModal = function() {
    const overlay = document.getElementById('report-modal-overlay');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  window.toggleReportSubject = function() {
    const reason = document.getElementById('report-reason').value;
    if (reason === "Diğer") {
      document.getElementById('report-subject-container').style.display = 'block';
    } else {
      document.getElementById('report-subject-container').style.display = 'none';
    }
  };

  window.submitReport = async function() {
    if (!loggedInUser || !currentItem || !currentItem.word) return;
    
    const reason = document.getElementById('report-reason').value;
    const subject = reason === "Diğer" ? document.getElementById('report-subject').value.trim() : reason;
    const details = document.getElementById('report-details').value.trim();
    
    if (reason === "Diğer" && !subject) {
      alert("Lütfen konu başlığı yazınız.");
      return;
    }
    
    if (!details) {
      alert("Lütfen açıklama yazınız.");
      return;
    }
    
    const btn = document.getElementById('submit-report-btn');
    btn.disabled = true;
    btn.textContent = "Gönderiliyor...";
    
    try {
      const sb = getSupabase();
      const { error } = await sb.from('reports').insert({
        user_id: loggedInUser.id,
        word_id: currentItem.word.id,
        word_en: currentItem.word.en,
        word_tr: currentItem.word.tr,
        reason_type: reason,
        subject: subject,
        details: details,
        status: 'pending'
      });
      
      if (error) throw error;
      
      alert("Raporunuz başarıyla gönderildi. Teşekkür ederiz!");
      closeReportModal();
    } catch (e) {
      alert("Rapor gönderilirken hata oluştu: " + e.message + "\\n\\nNot: Admin henüz 'reports' tablosunu oluşturmamış olabilir.");
      btn.disabled = false;
      btn.textContent = "Raporu Gönder";
    }
  };

  // ===== AUTO-SAVE & EXIT LISTENERS =====
  function setupExitListeners() {
    // Back button yakalama — sahte history girişi ekle
    history.pushState({ quizActive: true }, '', window.location.href);

    window.addEventListener('popstate', function() {
      // Geri tuşuna basıldı — kaydet ve navigasyona izin ver
      saveQuizState();
    });

    // Sekme/tarayıcı kapatma (masaüstü)
    window.addEventListener('beforeunload', function() {
      saveQuizState();
    });

    // Sayfa gizlenme (mobilde en güvenilir yol)
    window.addEventListener('pagehide', function() {
      saveQuizState();
    });

    // Sekme değişimi
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'hidden') {
        saveQuizState();
      }
    });
  }

  // ===== START =====
  document.addEventListener('DOMContentLoaded', init);

})();
