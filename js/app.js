// ===== PERSONEL NOTEBOOK - MAIN APP LOGIC =====
// Kategori seçimi, mod yönetimi ve quiz başlatma motoru

let currentCategory = 'vocab';
let currentTimesFilter = '';

function selectCategory(categorySlug) {
  currentCategory = categorySlug;
  currentTimesFilter = '';

  // Highlight selected category card
  document.querySelectorAll('.category-card').forEach(card => card.classList.remove('active'));
  const activeCard = document.getElementById('cat-' + categorySlug);
  if (activeCard) {
    activeCard.classList.add('active');
  }

  // Hide all dynamic sub-sections first
  document.getElementById('times-filter-section').style.display = 'none';
  document.getElementById('hour-filter-section').style.display = 'none';
  document.getElementById('grammar-action-section').style.display = 'none';
  document.getElementById('mode-section').style.display = 'none';

  // Sub-links update (study & list)
  const studyBtn = document.getElementById('btn-study-link');
  const listBtn = document.getElementById('btn-list-link');
  if (studyBtn) studyBtn.href = `study.html?category=${categorySlug}`;
  if (listBtn) listBtn.href = `category.html?category=${categorySlug}`;

  if (categorySlug === 'grammar') {
    const gramSection = document.getElementById('grammar-action-section');
    gramSection.style.display = 'block';
    setTimeout(() => {
      gramSection.classList.add('visible');
      gramSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 10);
  } else if (categorySlug === 'times') {
    const timesSection = document.getElementById('times-filter-section');
    timesSection.style.display = 'block';
    setTimeout(() => {
      timesSection.classList.add('visible');
      timesSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 10);
  } else {
    const modeSection = document.getElementById('mode-section');
    const catObj = typeof DataManager !== 'undefined' ? DataManager.getCategoryById(categorySlug) : null;
    const titleEl = document.getElementById('mode-section-title');
    if (titleEl && catObj) {
      titleEl.textContent = `${catObj.icon} ${catObj.name} - Pratik Modunu Seç`;
    }
    modeSection.style.display = 'block';
    setTimeout(() => {
      modeSection.classList.add('visible');
      modeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 10);
  }
}

// Backward compatibility bridge
function selectLevel(level) {
  selectCategory('vocab');
}

function selectDataset(dataset) {
  const map = {
    'kurs': 'vocab',
    'genel': 'vocab',
    'grammar': 'grammar',
    'deyimler': 'idioms',
    'times': 'times'
  };
  selectCategory(map[dataset] || dataset);
}

function selectTimesFilter(filter) {
  currentTimesFilter = filter;

  // Highlight selected card
  document.querySelectorAll('#times-filter-section .mode-card, #hour-filter-section .mode-card').forEach(card => {
    card.style.borderColor = 'var(--glass-border)';
    card.style.background = 'var(--bg-card)';
  });

  if (filter === 'am' || filter === 'pm') {
    document.getElementById('hour-filter-section').style.display = 'none';
    const cards = document.querySelectorAll('#times-filter-section .mode-card');
    const idx = filter === 'am' ? 0 : 1;
    if (cards[idx]) {
      cards[idx].style.borderColor = 'var(--accent-purple)';
      cards[idx].style.background = 'rgba(139, 92, 246, 0.08)';
    }
  } else {
    const card = document.getElementById('hour-card-' + filter);
    if (card) {
      card.style.borderColor = 'var(--accent-purple)';
      card.style.background = 'rgba(139, 92, 246, 0.08)';
    }
  }

  // Show standard mode section for times
  const modeSection = document.getElementById('mode-section');
  const titleEl = document.getElementById('mode-section-title');
  if (titleEl) titleEl.textContent = '⏰ Saatler Pratik Modunu Seç';
  modeSection.style.display = 'block';
  setTimeout(() => {
    modeSection.classList.add('visible');
    modeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 10);
}

function showHourFilters() {
  const hourSection = document.getElementById('hour-filter-section');
  const hourGrid = document.getElementById('hour-grid');

  document.querySelectorAll('#times-filter-section .mode-card').forEach(card => {
    card.style.borderColor = 'var(--glass-border)';
    card.style.background = 'var(--bg-card)';
  });

  if (hourGrid.children.length === 0) {
    for (let i = 0; i < 24; i++) {
      const hh = i.toString().padStart(2, '0');
      hourGrid.innerHTML += `
        <a class="mode-card" id="hour-card-${hh}" href="#" onclick="selectTimesFilter('${hh}'); return false;" style="padding: 10px; min-height: 70px;">
          <h3 style="font-size: 1.1rem; margin-bottom: 2px;">${hh}:00</h3>
          <p style="font-size: 0.75rem; opacity: 0.8;">${hh}:59'a kadar</p>
        </a>
      `;
    }
  }

  hourSection.style.display = 'block';
  setTimeout(() => {
    hourSection.classList.add('visible');
    hourSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 10);
}

// ===== START GRAMMAR GAP-FILL TEST =====
function startGrammarTest() {
  window.location.href = 'quiz.html?category=grammar_test&mode=gap-fill';
}

// ===== START QUIZ WITH KNOWN-WORDS FILTER =====
async function startQuiz(mode) {
  let url = `quiz.html?category=${currentCategory}&mode=${mode}`;
  if (currentCategory === 'times' && currentTimesFilter) {
    url += `&timesFilter=${currentTimesFilter}`;
  }

  const user = typeof getCurrentUser === 'function' ? await getCurrentUser() : null;
  if (!user || !user.id) {
    window.location.href = url;
    return;
  }

  // Fetch word results to see if there are known words
  let wordResults = null;
  const cacheKey = 'cachedWordResults_' + user.id;
  const cachedData = sessionStorage.getItem(cacheKey);

  if (cachedData) {
    wordResults = JSON.parse(cachedData);
  } else {
    try {
      const sb = getSupabase();
      const res = await sb
        .from('word_results').select('word_id, result').eq('user_id', user.id).limit(50000);
      wordResults = res.data;
      if (wordResults && wordResults.length > 0) {
        sessionStorage.setItem(cacheKey, JSON.stringify(wordResults));
      }
    } catch (e) {
      wordResults = [];
    }
  }

  if (!wordResults || wordResults.length === 0) {
    window.location.href = url;
    return;
  }

  const bestResults = {};
  wordResults.forEach(wr => {
    const priority = { first_try: 1, retry: 2, hard: 3, unknown: 4 };
    if (!bestResults[wr.word_id] || priority[wr.result] < priority[bestResults[wr.word_id]]) {
      bestResults[wr.word_id] = wr.result;
    }
  });

  const globalKnownWordIds = Object.entries(bestResults)
    .filter(([_, r]) => r === 'first_try')
    .map(([id, _]) => parseInt(id, 10));

  // Bu kategorideki öğelerin ID'leri
  let selectedData = [];
  if (typeof DataManager !== 'undefined') {
    if (currentCategory === 'times' && currentTimesFilter && typeof WORDS_A2_TIMES_FULL !== 'undefined') {
      if (currentTimesFilter === 'am') {
        selectedData = WORDS_A2_TIMES_FULL.filter(w => {
          const match = w.hintEn ? w.hintEn.match(/It is (\d{2}):/) : null;
          return match && parseInt(match[1], 10) < 12;
        });
      } else if (currentTimesFilter === 'pm') {
        selectedData = WORDS_A2_TIMES_FULL.filter(w => {
          const match = w.hintEn ? w.hintEn.match(/It is (\d{2}):/) : null;
          return match && parseInt(match[1], 10) >= 12;
        });
      } else {
        selectedData = WORDS_A2_TIMES_FULL.filter(w => w.hintEn && w.hintEn.includes(`It is ${currentTimesFilter}:`));
      }
    } else {
      selectedData = DataManager.getItemsByCategory(currentCategory);
    }
  }

  const selectedDataIds = new Set(selectedData.map(w => w.id));
  const relevantKnownWordIds = globalKnownWordIds.filter(id => selectedDataIds.has(id));

  if (relevantKnownWordIds.length > 0) {
    const includeKnown = confirm(
      `Seçtiğiniz kategoride "İlk Seferde" bildiğiniz ${relevantKnownWordIds.length} öğe var.\n\nDaha önceki bildikleriniz bu quize dahil edilsin mi?\n\n- Tamam: Tüm içerikle başlatır\n- İptal: Sadece bilmediğin veya zorlandığın içerikle başlatır`
    );

    if (includeKnown) {
      window.location.href = url;
    } else {
      localStorage.setItem('exclude_quiz_ids', JSON.stringify(relevantKnownWordIds));
      window.location.href = url + `&exclude=true`;
    }
  } else {
    window.location.href = url;
  }
}

// ===== DYNAMIC WORD COUNTS FOR INDEX UI =====
document.addEventListener('DOMContentLoaded', () => {
  if (typeof DataManager !== 'undefined') {
    const vCount = DataManager.getItemsByCategory('vocab').length;
    const gCount = DataManager.getItemsByCategory('grammar').length;
    const sCount = DataManager.getItemsByCategory('sentences').length;
    const iCount = DataManager.getItemsByCategory('idioms').length;
    const pCount = DataManager.getItemsByCategory('phrasal_verbs').length;
    const irCount = DataManager.getItemsByCategory('irregular_verbs').length;

    const elV = document.getElementById('count-vocab');
    const elG = document.getElementById('count-grammar');
    const elS = document.getElementById('count-sentences');
    const elI = document.getElementById('count-idioms');
    const elP = document.getElementById('count-phrasal_verbs');
    const elIr = document.getElementById('count-irregular_verbs');

    if (elV && vCount) elV.textContent = `${vCount} Kelime`;
    if (elG && gCount) elG.textContent = `${gCount} Konu / Tense`;
    if (elS && sCount) elS.textContent = `${sCount} Kalıp Cümle`;
    if (elI && iCount) elI.textContent = `${iCount} Deyim`;
    if (elP && pCount) elP.textContent = `${pCount} Fiil`;
    if (elIr && irCount) elIr.textContent = `${irCount} Fiil`;
  }
});
