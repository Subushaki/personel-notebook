// ===== PERSONEL NOTEBOOK - MERKEZİ VERİ YÖNETİCİSİ (DATA MANAGER) =====
// Tüm veri kaynaklarını tek bir API altında birleştirir ve gelecekte
// yeni veri / kategori eklemeyi çocuk oyuncağı haline getirir.

const DataManager = (function() {
  'use strict';

  // Güvenli veri alıcıları (Hem Tarayıcı hem Node.js uyumlu)
  function getVocab() { 
    if (typeof VOCAB_DATA !== 'undefined') return VOCAB_DATA;
    if (typeof global !== 'undefined' && global.VOCAB_DATA) return global.VOCAB_DATA;
    try { return require('./words.js'); } catch (e) { return []; }
  }
  function getGrammar() { 
    if (typeof GRAMMAR_DATA !== 'undefined') return GRAMMAR_DATA;
    if (typeof global !== 'undefined' && global.GRAMMAR_DATA) return global.GRAMMAR_DATA;
    try { return require('./grammar.js'); } catch (e) { return []; }
  }
  function getSentences() { 
    if (typeof SENTENCES_DATA !== 'undefined') return SENTENCES_DATA;
    if (typeof global !== 'undefined' && global.SENTENCES_DATA) return global.SENTENCES_DATA;
    try { return require('./sentences.js'); } catch (e) { return []; }
  }
  function getIdioms() { 
    if (typeof IDIOMS_DATA !== 'undefined') return IDIOMS_DATA;
    if (typeof global !== 'undefined' && global.IDIOMS_DATA) return global.IDIOMS_DATA;
    try { return require('./idioms.js'); } catch (e) { return []; }
  }
  function getTimes() { 
    if (typeof TIMES_DATA !== 'undefined') return TIMES_DATA;
    if (typeof global !== 'undefined' && global.TIMES_DATA) return global.TIMES_DATA;
    try { return require('./times.js'); } catch (e) { return []; }
  }
  function getPhrasalVerbs() { 
    if (typeof PHRASAL_VERBS_DATA !== 'undefined') return PHRASAL_VERBS_DATA;
    if (typeof global !== 'undefined' && global.PHRASAL_VERBS_DATA) return global.PHRASAL_VERBS_DATA;
    try { return require('./phrasal-verbs.js'); } catch (e) { return []; }
  }
  function getIrregularVerbs() { 
    if (typeof IRREGULAR_VERBS_DATA !== 'undefined') return IRREGULAR_VERBS_DATA;
    if (typeof global !== 'undefined' && global.IRREGULAR_VERBS_DATA) return global.IRREGULAR_VERBS_DATA;
    try { return require('./irregular-verbs.js'); } catch (e) { return []; }
  }
  function getCategories() { 
    if (typeof CATEGORIES !== 'undefined') return CATEGORIES;
    if (typeof global !== 'undefined' && global.CATEGORIES) return global.CATEGORIES;
    try { return require('./categories.js'); } catch (e) { return []; }
  }

  // Kategori bazlı veri eşleme
  const categoryMap = {
    'vocab': getVocab,
    'grammar': getGrammar,
    'sentences': getSentences,
    'idioms': getIdioms,
    'times': getTimes,
    'phrasal_verbs': getPhrasalVerbs,
    'irregular_verbs': getIrregularVerbs
  };

  return {
    getCategories: function() {
      return getCategories();
    },

    getCategoryById: function(catId) {
      return getCategories().find(c => c.id === catId) || null;
    },

    getItemsByCategory: function(categorySlug) {
      // Saatler özel durumu (tam liste seçilmişse)
      if (categorySlug === 'times_full' && typeof WORDS_A2_TIMES_FULL !== 'undefined') {
        return WORDS_A2_TIMES_FULL;
      }
      
      const fetcher = categoryMap[categorySlug];
      if (fetcher) {
        return fetcher();
      }
      return [];
    },

    getAllItems: function() {
      return [
        ...getVocab(),
        ...getGrammar(),
        ...getSentences(),
        ...getIdioms(),
        ...getTimes(),
        ...getPhrasalVerbs(),
        ...getIrregularVerbs()
      ];
    },

    getItemById: function(id) {
      const numId = parseInt(id, 10);
      const all = this.getAllItems();
      const found = all.find(item => item.id === numId);
      if (found) return found;

      // Saatler tam listesinde ara
      if (typeof WORDS_A2_TIMES_FULL !== 'undefined') {
        const fullFound = WORDS_A2_TIMES_FULL.find(item => item.id === numId);
        if (fullFound) return fullFound;
      }
      return null;
    },

    getGrammarTopic: function(topicEnOrTr) {
      const gList = getGrammar();
      const search = (topicEnOrTr || '').trim().toLowerCase();
      return gList.find(g => 
        (g.topic_en && g.topic_en.toLowerCase() === search) ||
        (g.topic_tr && g.topic_tr.toLowerCase() === search) ||
        (g.accepted_answers && g.accepted_answers.some(a => a.toLowerCase() === search))
      ) || null;
    }
  };
})();

// ===== GERİYE DÖNÜK UYUMLULUK (BACKWARD COMPATIBILITY BRIDGE) =====
// Eski quiz veya app bileşenleri ararsa hata vermemesi için
var WORDS_A2 = typeof VOCAB_DATA !== 'undefined' ? VOCAB_DATA : [];
var WORDS_A2_GENEL = typeof VOCAB_DATA !== 'undefined' ? VOCAB_DATA : [];
var WORDS_A2_GRAMMAR = typeof GRAMMAR_DATA !== 'undefined' ? GRAMMAR_DATA : [];
var WORDS_A2_DEYIMLER = typeof IDIOMS_DATA !== 'undefined' ? IDIOMS_DATA : [];
var WORDS_A2_TIMES = typeof TIMES_DATA !== 'undefined' ? TIMES_DATA : [];
var ALL_WORDS_A2 = DataManager.getAllItems();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DataManager;
}
