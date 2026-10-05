// ===== PERSONEL NOTEBOOK - İNGİLİZCE TENSE & ZAMAN FORMÜLLERİ =====
// A2-B1 Kurs Müfredatına Tam Uyumlu 13 Temel Tense (Zaman)
// Yalnızca derste işlenen zamanlar: Simple, Continuous, Perfect, Perfect Continuous + Be Going To.
// Gereksiz/işlenmemiş (Conditionals, Bare Infinitive, Passive vb.) tüm konular temizlenmiştir.

const GRAMMAR_DATA = [
  // =========================================================================
  // 1. PRESENT SIMPLE (GENİŞ ZAMAN)
  // =========================================================================
  {
    id: 6001,
    category: "grammar",
    group: "Present",
    topic_en: "Present Simple",
    topic_tr: "Geniş Zaman",
    accepted_answers: [
      "Present Simple", "Simple Present", "Present Tense", "Geniş Zaman", "Present Simple Tense", "Simple Present Tense"
    ],
    formula_short: "S + V1 (he/she/it: V1 + s/es)",
    formula_long: "Subject + Base Verb (V1) [+ s/es] + Object/Time",
    forms: {
      positive: {
        short: "S + V1 (s/es)",
        long: "Subject + V1 (s/es) + ...",
        example: "I work every day. / She works hard."
      },
      negative: {
        short: "S + do/does not + V1",
        long: "Subject + do/does + not + V1 + ...",
        example: "I do not work. / She does not work (doesn't work)."
      },
      question: {
        short: "Do/Does + S + V1?",
        long: "Do/Does + Subject + V1 + ...?",
        example: "Do you work? / Does she work?"
      }
    },
    signal_words: ["always", "usually", "often", "sometimes", "rarely", "never", "every day", "every week", "on Mondays"],
    usage: "Rutinler, alışkanlıklar, genel doğrular, programlar ve kalıcı durumlar.",
    en: "S + V1 (s/es)",
    tr: "Present Simple (Geniş Zaman)",
    hintEn: "Example: 'She works every day.' / 'The Earth goes around the Sun.' (Clues: always, usually, every day)",
    hintTr: "Geniş Zaman (Rutinler ve genel doğrular: V1 / s-es)"
  },

  // =========================================================================
  // 2. PRESENT CONTINUOUS (ŞİMDİKİ ZAMAN)
  // =========================================================================
  {
    id: 6002,
    category: "grammar",
    group: "Present",
    topic_en: "Present Continuous",
    topic_tr: "Şimdiki Zaman",
    accepted_answers: [
      "Present Continuous", "Present Progressive", "Şimdiki Zaman", "Present Continuous Tense", "Present Progressive Tense"
    ],
    formula_short: "S + am/is/are + V-ing",
    formula_long: "Subject + am/is/are + Verb(-ing) + Object",
    forms: {
      positive: {
        short: "S + am/is/are + V-ing",
        long: "Subject + am/is/are + V-ing + ...",
        example: "I am working now. / She is studying English right now."
      },
      negative: {
        short: "S + am/is/are + not + V-ing",
        long: "Subject + am/is/are + not + V-ing + ...",
        example: "I am not working. / She is not studying (isn't studying)."
      },
      question: {
        short: "Am/Is/Are + S + V-ing?",
        long: "Am/Is/Are + Subject + V-ing + ...?",
        example: "Are you working? / Is she studying?"
      }
    },
    signal_words: ["now", "right now", "at the moment", "currently", "look!", "listen!", "these days"],
    usage: "Şu anda gerçekleşen veya geçici olarak devam eden eylemler.",
    en: "S + am/is/are + V-ing",
    tr: "Present Continuous (Şimdiki Zaman)",
    hintEn: "Example: 'She is reading a book right now.' (Clues: now, at the moment, look!)",
    hintTr: "Şimdiki Zaman (am/is/are + V-ing)"
  },

  // =========================================================================
  // 3. PRESENT PERFECT (YAKIN GEÇMİŞ ZAMAN)
  // =========================================================================
  {
    id: 6003,
    category: "grammar",
    group: "Present",
    topic_en: "Present Perfect",
    topic_tr: "Yakın Geçmiş Zaman",
    accepted_answers: [
      "Present Perfect", "Present Perfect Tense", "Simple Present Perfect", "Yakın Geçmiş Zaman", "Belirsiz Geçmiş Zaman"
    ],
    formula_short: "S + have/has + V3",
    formula_long: "Subject + have/has + Past Participle (V3) + Object",
    forms: {
      positive: {
        short: "S + have/has + V3",
        long: "Subject + have/has + V3 + ...",
        example: "I have finished my homework. / She has gone."
      },
      negative: {
        short: "S + have/has + not + V3",
        long: "Subject + have/has + not (haven't/hasn't) + V3 + ...",
        example: "I have not worked. / She has not finished her project."
      },
      question: {
        short: "Have/Has + S + V3?",
        long: "Have/Has + Subject + V3 + ...?",
        example: "Have you worked? / Has she gone? / Have you ever seen this movie?"
      }
    },
    signal_words: ["already", "just", "yet", "ever", "never", "since", "for", "recently", "so far"],
    usage: "Geçmişte olmuş ama zamanı belirtilmemiş deneyimler, henüz biten işler ve etkisi süren durumlar.",
    en: "S + have/has + V3",
    tr: "Present Perfect (Yakın Geçmiş Zaman)",
    hintEn: "Example: 'I have already eaten.' / 'Have you ever been to London?' (Clues: already, just, yet, ever)",
    hintTr: "Yakın Geçmiş Zaman (have/has + V3)"
  },

  // =========================================================================
  // 4. PRESENT PERFECT CONTINUOUS (SÜREGELEN YAKIN GEÇMİŞ ZAMAN)
  // =========================================================================
  {
    id: 6004,
    category: "grammar",
    group: "Present",
    topic_en: "Present Perfect Continuous",
    topic_tr: "Süregelen Yakın Geçmiş Zaman",
    accepted_answers: [
      "Present Perfect Continuous", "Present Perfect Progressive", "Süregelen Yakın Geçmiş Zaman", "Present Perfect Continuous Tense"
    ],
    formula_short: "S + have/has + been + V-ing",
    formula_long: "Subject + have/has + been + Verb(-ing) + Object",
    forms: {
      positive: {
        short: "S + have/has + been + V-ing",
        long: "Subject + have/has + been + V-ing + ...",
        example: "I have been studying for three hours. / She has been working since morning."
      },
      negative: {
        short: "S + have/has + not + been + V-ing",
        long: "Subject + have/has + not + been + V-ing + ...",
        example: "I have not been studying. / She hasn't been working long."
      },
      question: {
        short: "Have/Has + S + been + V-ing?",
        long: "Have/Has + Subject + been + V-ing + ...?",
        example: "Have you been studying? / How long have you been waiting here?"
      }
    },
    signal_words: ["for three hours", "since morning", "all day", "how long", "lately", "recently"],
    usage: "Geçmişte başlayıp şimdiye kadar kesintisiz süren eylemin sürecine vurgu yapar.",
    en: "S + have/has + been + V-ing",
    tr: "Present Perfect Continuous",
    hintEn: "Example: 'I have been studying English for three hours.' (Clues: have/has been + V-ing, for, since)",
    hintTr: "Sürece Vurgu Yapan Sürekli Geçmiş (have/has been + V-ing)"
  },

  // =========================================================================
  // 5. PAST SIMPLE (GEÇMİŞ ZAMAN)
  // =========================================================================
  {
    id: 6005,
    category: "grammar",
    group: "Past",
    topic_en: "Past Simple",
    topic_tr: "Geçmiş Zaman",
    accepted_answers: [
      "Past Simple", "Simple Past", "Past Tense", "Geçmiş Zaman", "Past Simple Tense", "Simple Past Tense", "Di'li Geçmiş Zaman", "Dili Geçmiş Zaman"
    ],
    formula_short: "S + V2",
    formula_long: "Subject + Past Form (V2) + Object",
    forms: {
      positive: {
        short: "S + V2",
        long: "Subject + V2 + ...",
        example: "I worked yesterday. / She went to London last year."
      },
      negative: {
        short: "S + did not + V1",
        long: "Subject + did not (didn't) + V1 + ...",
        example: "I did not work. / She did not go (didn't go)."
      },
      question: {
        short: "Did + S + V1?",
        long: "Did + Subject + V1 + ...?",
        example: "Did you work yesterday? / Did she go to school?"
      }
    },
    signal_words: ["yesterday", "last night", "last week", "last year", "ago", "two days ago", "in 2015"],
    usage: "Geçmişte belirli bir zamanda gerçekleşmiş ve tamamen bitmiş eylemler.",
    en: "S + V2",
    tr: "Past Simple (Geçmiş Zaman)",
    hintEn: "Example: 'She went home two hours ago.' / 'I worked yesterday.' (Clues: yesterday, last week, ago)",
    hintTr: "Geçmiş Zaman (V2 / did not + V1)"
  },

  // =========================================================================
  // 6. PAST CONTINUOUS (GEÇMİŞTE SÜREGELEN ZAMAN)
  // =========================================================================
  {
    id: 6006,
    category: "grammar",
    group: "Past",
    topic_en: "Past Continuous",
    topic_tr: "Geçmişte Süregelen Zaman",
    accepted_answers: [
      "Past Continuous", "Past Progressive", "Geçmişte Süregelen Zaman", "Past Continuous Tense", "Geçmişte Sürekli Zaman"
    ],
    formula_short: "S + was/were + V-ing",
    formula_long: "Subject + was/were + Verb(-ing) + Object",
    forms: {
      positive: {
        short: "S + was/were + V-ing",
        long: "Subject + was/were + V-ing + ...",
        example: "I was sleeping when he called. / They were studying at 8 PM."
      },
      negative: {
        short: "S + was/were + not + V-ing",
        long: "Subject + was/were + not (wasn't/weren't) + V-ing + ...",
        example: "I was not working. / They were not studying."
      },
      question: {
        short: "Was/Were + S + V-ing?",
        long: "Was/Were + Subject + V-ing + ...?",
        example: "Were you sleeping? / Was she studying when it rained?"
      }
    },
    signal_words: ["while", "as", "when", "at 10 PM yesterday", "all evening", "all day yesterday"],
    usage: "Geçmişte belirli bir anda devam etmekte olan eylem (özellikle when/while ile).",
    en: "S + was/were + V-ing",
    tr: "Past Continuous (Geçmişte Süregelen Zaman)",
    hintEn: "Example: 'I was sleeping when he called me.' (Clues: was/were + V-ing, while, when)",
    hintTr: "Geçmişte Devam Eden Zaman (was/were + V-ing)"
  },

  // =========================================================================
  // 7. PAST PERFECT (ÖNCEKİ GEÇMİŞ ZAMAN)
  // =========================================================================
  {
    id: 6007,
    category: "grammar",
    group: "Past",
    topic_en: "Past Perfect",
    topic_tr: "Önceki Geçmiş Zaman",
    accepted_answers: [
      "Past Perfect", "Past Perfect Tense", "Simple Past Perfect", "Önceki Geçmiş Zaman", "Mişli Geçmiş Zaman"
    ],
    formula_short: "S + had + V3",
    formula_long: "Subject + had + Past Participle (V3) + Object",
    forms: {
      positive: {
        short: "S + had + V3",
        long: "Subject + had + V3 + ...",
        example: "I had finished my homework before dinner. / She had gone."
      },
      negative: {
        short: "S + had not (hadn't) + V3",
        long: "Subject + had not (hadn't) + V3 + ...",
        example: "I had not worked. / She hadn't left when I arrived."
      },
      question: {
        short: "Had + S + V3?",
        long: "Had + Subject + V3 + ...?",
        example: "Had you finished before he called? / Had she gone?"
      }
    },
    signal_words: ["before", "after", "by the time", "already", "when"],
    usage: "Geçmişteki iki olaydan daha önce gerçekleşmiş ve tamamlanmış olanı anlatır (had + V3).",
    en: "S + had + V3",
    tr: "Past Perfect (Önceki Geçmiş Zaman)",
    hintEn: "Example: 'When I arrived at the station, the train had already left.' (Clues: had + V3, before)",
    hintTr: "Geçmişin Geçmişi (had + V3, diğer olaydan önce tamamlanan)"
  },

  // =========================================================================
  // 8. PAST PERFECT CONTINUOUS (GEÇMİŞTE SÜREGELEN ÖNCEKİ ZAMAN)
  // =========================================================================
  {
    id: 6008,
    category: "grammar",
    group: "Past",
    topic_en: "Past Perfect Continuous",
    topic_tr: "Geçmişte Süregelen Önceki Zaman",
    accepted_answers: [
      "Past Perfect Continuous", "Past Perfect Progressive", "Geçmişte Süregelen Önceki Zaman", "Past Perfect Continuous Tense"
    ],
    formula_short: "S + had + been + V-ing",
    formula_long: "Subject + had + been + Verb(-ing) + Object",
    forms: {
      positive: {
        short: "S + had + been + V-ing",
        long: "Subject + had + been + V-ing + ...",
        example: "I had been working for two hours when he arrived. / She had been studying."
      },
      negative: {
        short: "S + had not (hadn't) + been + V-ing",
        long: "Subject + had not (hadn't) + been + V-ing + ...",
        example: "I had not been working. / She hadn't been studying long before the test."
      },
      question: {
        short: "Had + S + been + V-ing?",
        long: "Had + Subject + been + V-ing + ...?",
        example: "Had you been working long before they called? / Had she been studying?"
      }
    },
    signal_words: ["had been doing", "for two hours before", "by the time", "until then"],
    usage: "Geçmişteki bir andan veya olaydan önce bir süre devam etmiş olan süreç.",
    en: "S + had + been + V-ing",
    tr: "Past Perfect Continuous",
    hintEn: "Example: 'He was tired because he had been running for an hour.' (Clues: had been + V-ing)",
    hintTr: "Geçmişte Başka Bir Olaydan Önce Sürmüş Eylem (had been + V-ing)"
  },

  // =========================================================================
  // 9. SIMPLE FUTURE (GELECEK ZAMAN - WILL)
  // =========================================================================
  {
    id: 6009,
    category: "grammar",
    group: "Future",
    topic_en: "Simple Future",
    topic_tr: "Gelecek Zaman (Will)",
    accepted_answers: [
      "Simple Future", "Future Simple", "Future Tense", "Future T", "Gelecek Zaman", "Will Future", "Simple Future Tense", "Gelecek Zaman (Will)", "Will"
    ],
    formula_short: "S + will + V1",
    formula_long: "Subject + will + Base Verb (V1) + Object",
    forms: {
      positive: {
        short: "S + will + V1",
        long: "Subject + will + V1 + ...",
        example: "I will work tomorrow. / She will come."
      },
      negative: {
        short: "S + will not (won't) + V1",
        long: "Subject + will not (won't) + V1 + ...",
        example: "I will not work. / She won't come to the party."
      },
      question: {
        short: "Will + S + V1?",
        long: "Will + Subject + V1 + ...?",
        example: "Will you work tomorrow? / Will she come?"
      }
    },
    signal_words: ["tomorrow", "next week", "next month", "soon", "in the future", "probably", "I think", "I hope"],
    usage: "Geleceğe yönelik anlık kararlar, vaatler, tahminler ve teklifler.",
    en: "S + will + V1",
    tr: "Simple Future (Gelecek Zaman - Will)",
    hintEn: "Example: 'I think it will rain tomorrow.' / 'I will help you.' (Clues: will + V1, tomorrow)",
    hintTr: "Gelecek Zaman (will + V1, anlık kararlar ve tahminler)"
  },

  // =========================================================================
  // 10. BE GOING TO (PLANLANAN GELECEK ZAMAN)
  // =========================================================================
  {
    id: 6010,
    category: "grammar",
    group: "Future",
    topic_en: "Be Going To",
    topic_tr: "Planlanan Gelecek Zaman",
    accepted_answers: [
      "Be Going To", "Going to", "Future with Going To", "Planlanan Gelecek Zaman", "Planlı Gelecek Zaman"
    ],
    formula_short: "S + am/is/are + going to + V1",
    formula_long: "Subject + am/is/are + going to + Base Verb (V1) + Object",
    forms: {
      positive: {
        short: "S + am/is/are + going to + V1",
        long: "Subject + am/is/are + going to + V1 + ...",
        example: "I am going to study tonight. / She is going to buy a car."
      },
      negative: {
        short: "S + am/is/are + not + going to + V1",
        long: "Subject + am/is/are + not + going to + V1 + ...",
        example: "I am not going to attend the meeting. / They aren't going to come."
      },
      question: {
        short: "Am/Is/Are + S + going to + V1?",
        long: "Am/Is/Are + Subject + going to + V1 + ...?",
        example: "Are you going to watch the match? / Is she going to travel?"
      }
    },
    signal_words: ["planned", "decided", "look at those clouds", "tonight", "next weekend"],
    usage: "Önceden planlanmış niyetler ve şu andaki güçlü bir kanıta dayanan gelecek tahminleri.",
    en: "S + am/is/are + going to + V1",
    tr: "Be Going To (Planlanan Gelecek Zaman)",
    hintEn: "Example: 'Look at those dark clouds! It is going to rain.' / 'I am going to study tonight.'",
    hintTr: "Planlı Gelecek Zaman (am/is/are + going to + V1)"
  },

  // =========================================================================
  // 11. FUTURE CONTINUOUS (GELECEKTE SÜREGELEN ZAMAN)
  // =========================================================================
  {
    id: 6011,
    category: "grammar",
    group: "Future",
    topic_en: "Future Continuous",
    topic_tr: "Gelecekte Süregelen Zaman",
    accepted_answers: [
      "Future Continuous", "Future Progressive", "Gelecekte Süregelen Zaman", "Future Continuous Tense", "Gelecekte Sürekli Zaman"
    ],
    formula_short: "S + will + be + V-ing",
    formula_long: "Subject + will + be + Verb(-ing) + Object",
    forms: {
      positive: {
        short: "S + will + be + V-ing",
        long: "Subject + will + be + V-ing + ...",
        example: "I will be working at 10 AM tomorrow. / She will be studying."
      },
      negative: {
        short: "S + will not (won't) + be + V-ing",
        long: "Subject + will not (won't) + be + V-ing + ...",
        example: "I will not be working. / She won't be studying tonight."
      },
      question: {
        short: "Will + S + be + V-ing?",
        long: "Will + Subject + be + V-ing + ...?",
        example: "Will you be working tomorrow at noon? / Will she be studying?"
      }
    },
    signal_words: ["this time tomorrow", "at 3 PM next Monday", "at this hour next week", "in two years"],
    usage: "Gelecekte belirli bir anda gerçekleşmekte ve devam etmekte olacak olaylar.",
    en: "S + will + be + V-ing",
    tr: "Future Continuous (Gelecekte Süregelen Zaman)",
    hintEn: "Example: 'This time tomorrow, I will be flying to London.' (Clues: will be + V-ing)",
    hintTr: "Gelecekte Devam Edecek Zaman (will be + V-ing)"
  },

  // =========================================================================
  // 12. FUTURE PERFECT (GELECEKTE TAMAMLANMIŞ ZAMAN)
  // =========================================================================
  {
    id: 6012,
    category: "grammar",
    group: "Future",
    topic_en: "Future Perfect",
    topic_tr: "Gelecekte Tamamlanmış Zaman",
    accepted_answers: [
      "Future Perfect", "Future Perfect Tense", "Simple Future Perfect", "Gelecekte Tamamlanmış Zaman"
    ],
    formula_short: "S + will + have + V3",
    formula_long: "Subject + will + have + Past Participle (V3) + Object",
    forms: {
      positive: {
        short: "S + will + have + V3",
        long: "Subject + will + have + V3 + ...",
        example: "I will have finished my homework by 8 PM. / She will have gone."
      },
      negative: {
        short: "S + will not (won't) + have + V3",
        long: "Subject + will not (won't) + have + V3 + ...",
        example: "I will not have finished. / She won't have left by then."
      },
      question: {
        short: "Will + S + have + V3?",
        long: "Will + Subject + have + V3 + ...?",
        example: "Will you have finished the report by tomorrow? / Will she have gone?"
      }
    },
    signal_words: ["by tomorrow", "by next week", "by 2030", "by the time", "in two hours"],
    usage: "Gelecekte belirli bir zamana veya başka bir olaya kadar tamamlanmış, bitmiş olacak eylemler.",
    en: "S + will + have + V3",
    tr: "Future Perfect (Gelecekte Tamamlanmış Zaman)",
    hintEn: "Example: 'By the time you arrive, I will have finished cooking.' (Clues: will have + V3, by tomorrow)",
    hintTr: "Gelecekte Tamamlanmış Olacak Eylemler (will have + V3)"
  },

  // =========================================================================
  // 13. FUTURE PERFECT CONTINUOUS (GELECEKTE SÜREGELEN TAMAMLANMIŞ ZAMAN)
  // =========================================================================
  {
    id: 6013,
    category: "grammar",
    group: "Future",
    topic_en: "Future Perfect Continuous",
    topic_tr: "Gelecekte Süregelen Tamamlanmış Zaman",
    accepted_answers: [
      "Future Perfect Continuous", "Future Perfect Progressive", "Gelecekte Süregelen Tamamlanmış Zaman", "Future Perfect Continuous Tense"
    ],
    formula_short: "S + will + have + been + V-ing",
    formula_long: "Subject + will + have + been + Verb(-ing) + Object",
    forms: {
      positive: {
        short: "S + will + have + been + V-ing",
        long: "Subject + will + have + been + V-ing + ...",
        example: "By next year, I will have been working here for 5 years. / She will have been studying."
      },
      negative: {
        short: "S + will not (won't) + have + been + V-ing",
        long: "Subject + will not (won't) + have + been + V-ing + ...",
        example: "I will not have been working. / She won't have been studying long enough."
      },
      question: {
        short: "Will + S + have + been + V-ing?",
        long: "Will + Subject + have + been + V-ing + ...?",
        example: "Will you have been working here for a long time by then?"
      }
    },
    signal_words: ["by next year for ... years", "by 2028 for a decade", "by the time"],
    usage: "Gelecekteki belirli bir noktaya gelindiğinde bir eylemin ne kadar süredir devam ediyor olacağını vurgular.",
    en: "S + will + have + been + V-ing",
    tr: "Future Perfect Continuous",
    hintEn: "Example: 'By 5 PM, she will have been driving for six hours.' (Clues: will have been + V-ing)",
    hintTr: "Gelecekte Sürecek Olan Eylemin Süresi (will have been + V-ing)"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GRAMMAR_DATA;
}
