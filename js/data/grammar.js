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
  },

  // =========================================================================
  // 4. NOUNS (İSİMLER AİLESİ)
  // =========================================================================
  {
    id: 6014,
    category: "grammar",
    group: "Nouns",
    topic_en: "Plural Nouns",
    topic_tr: "Çoğul İsimler",
    accepted_answers: [
      "Plural Nouns", "Plural Noun", "Plurals", "Çoğul İsimler", "Çoğul İsim", "Plural"
    ],
    formula_short: "Noun + s/es/ies | Irregular (child → children)",
    formula_long: "Regular: cat → cats, box → boxes, baby → babies | Irregular: man → men, child → children",
    forms: {
      positive: { short: "cat → cats / box → boxes", long: "Noun + s / es / ies", example: "I have two cats and three boxes." },
      negative: { short: "Irregular: man → men, person → people", long: "Düzensiz çoğullar (-s almaz)", example: "There are many children in the park." },
      question: { short: "How many + plural noun?", long: "How many + Çoğul İsim?", example: "How many books do you read?" }
    },
    signal_words: ["two", "three", "many", "several", "a few", "these", "those"],
    usage: "Sayılabilen isimlerin birden fazla olduğunu belirtmek için -s, -es, -ies takıları veya düzensiz çekimler kullanılır.",
    en: "Noun + s/es/ies (cat → cats, child → children)",
    tr: "Plural Nouns (Çoğul İsimler)",
    hintEn: "Examples: 'book → books', 'watch → watches', 'child → children', 'foot → feet'.",
    hintTr: "Çoğul İsimler (İsim sonuna -s/-es getirme veya düzensiz çoğul)"
  },
  {
    id: 6015,
    category: "grammar",
    group: "Nouns",
    topic_en: "Countable & Uncountable",
    topic_tr: "Sayılabilir & Sayılamaz İsimler",
    accepted_answers: [
      "Countable and Uncountable", "Countable & Uncountable", "Countable Nouns", "Uncountable Nouns", "Sayılabilir ve Sayılamaz İsimler", "Sayılabilir Sayılamaz", "Countable", "Uncountable"
    ],
    formula_short: "Countable: a/an, one, two... | Uncountable: some + noun (no -s)",
    formula_long: "Countable: an apple, three books | Uncountable: water, money, information, bread, milk",
    forms: {
      positive: { short: "Countable: a car / two cars | Uncountable: some water", long: "Sayılabilenler çoğul olur, sayılamayanlar daima tekil çekimlenir.", example: "An apple is on the table. / Some milk is in the fridge." },
      negative: { short: "No plural for uncountable: ❌ waters", long: "Sayılamayan isimler -s takısı almaz ve 'a/an' ile kullanılmaz.", example: "I need some information, not an information." },
      question: { short: "How many (sayılabilir) vs How much (sayılamaz)", long: "How many books? vs How much water?", example: "How much money do you need?" }
    },
    signal_words: ["a/an", "some", "a bottle of water", "a piece of advice", "money", "bread", "furniture"],
    usage: "Adet ile sayılabilenler (countable) ve sıvı, kütle, soyut kavram gibi sayılamayanlar (uncountable).",
    en: "a/an + Noun vs some + Noun (no plural -s)",
    tr: "Countable & Uncountable (Sayılabilir & Sayılamaz)",
    hintEn: "Clues: an apple (countable), some milk (uncountable - no 'a milk').",
    hintTr: "Sayılabilir ve Sayılamaz İsimler (a/an vs some, much vs many)"
  },
  {
    id: 6016,
    category: "grammar",
    group: "Nouns",
    topic_en: "Much / Many / A lot of",
    topic_tr: "Miktar Belirteçleri (Much / Many / A lot of)",
    accepted_answers: [
      "Much Many A lot of", "Much / Many", "Much Many", "Quantifiers", "Miktar Belirteçleri", "Much and Many", "Much", "Many", "A lot of"
    ],
    formula_short: "much + uncountable | many + plural countable | a lot of + both",
    formula_long: "Much + Sayılamaz (water/money) | Many + Sayılabilir Çoğul (books/friends) | A lot of + Her ikisi de",
    forms: {
      positive: { short: "a lot of + books / money", long: "Olumlu cümlelerde genellikle 'a lot of' tercih edilir.", example: "She has a lot of friends. / We have a lot of time." },
      negative: { short: "not much (sayılamaz) / not many (sayılabilir)", long: "Olumsuz cümlelerde 'much' ve 'many' yaygındır.", example: "I don't have much money. / He doesn't read many books." },
      question: { short: "How much...? / How many...?", long: "How much + Sayılamaz? / How many + Çoğul?", example: "How much coffee do you drink? / How many pens do you have?" }
    },
    signal_words: ["how much", "how many", "too much", "too many", "a lot of", "plenty of"],
    usage: "Miktar sormak veya çokluğu ifade etmek için kullanılır (much: sayılamaz, many: sayılabilir).",
    en: "much (uncountable) vs many (countable) vs a lot of",
    tr: "Much / Many / A lot of (Miktar Belirteçleri)",
    hintEn: "Clues: How much water? / How many students? / A lot of books.",
    hintTr: "Miktar Belirteçleri (much: sayılamaz, many: sayılabilir)"
  },
  {
    id: 6017,
    category: "grammar",
    group: "Nouns",
    topic_en: "Some / Any",
    topic_tr: "Some & Any (Biraz / Birkaç / Hiç)",
    accepted_answers: [
      "Some / Any", "Some Any", "Some and Any", "Some", "Any"
    ],
    formula_short: "some: (+) & offer (?) | any: (-) & question (?)",
    formula_long: "(+) I have some apples / (?) Would you like some tea? | (-) I don't have any money / (?) Do you have any milk?",
    forms: {
      positive: { short: "some + plural / uncountable (+)", long: "Olumlu cümlelerde ve ikram/teklif sorularında 'some'.", example: "There is some sugar in the kitchen. / Would you like some coffee?" },
      negative: { short: "not + any (-)", long: "Olumsuz cümlelerde hiç olmadığını belirtmek için 'any'.", example: "I don't have any brothers or sisters." },
      question: { short: "any in general questions (?)", long: "Genel soru cümlelerinde 'any'.", example: "Are there any questions? / Do you have any cash?" }
    },
    signal_words: ["would you like some", "don't have any", "are there any", "is there any"],
    usage: "Belirsiz miktarları ifade eder. Some olumlularda ve tekliflerde; Any olumsuzlarda ve sorularda kullanılır.",
    en: "some (+) & offer vs any (-) & (?)",
    tr: "Some / Any",
    hintEn: "Clues: 'I have some friends.' / 'I don't have any money.' / 'Would you like some tea?'",
    hintTr: "Some (+) ve Any (- / ?)"
  },

  // =========================================================================
  // 5. PRONOUNS & POSSESSIVES (ZAMİRLER & SAHİPLİKLER)
  // =========================================================================
  {
    id: 6018,
    category: "grammar",
    group: "Pronouns",
    topic_en: "Subject & Object Pronouns",
    topic_tr: "Özne & Nesne Zamirleri",
    accepted_answers: [
      "Subject & Object Pronouns", "Subject and Object Pronouns", "Pronouns", "Özne ve Nesne Zamirleri", "Zamirler", "Subject Pronouns", "Object Pronouns"
    ],
    formula_short: "Subject: I, you, he, she, it, we, they | Object: me, you, him, her, it, us, them",
    formula_long: "Subject (eylemi yapan) + Verb + Object (eylemden etkilenen nesne)",
    forms: {
      positive: { short: "He (Subj) loves her (Obj)", long: "Özne cümlenin başında, nesne fiil veya edattan sonra gelir.", example: "She gave the book to me." },
      negative: { short: "They don't know us", long: "Nesne zamiri fiilin hemen arkasında yer alır.", example: "I didn't invite them to the party." },
      question: { short: "Can you help me?", long: "Soru cümlesinde de nesne fiilden sonra gelir.", example: "Do you know him?" }
    },
    signal_words: ["me", "you", "him", "her", "us", "them", "with me", "for him", "to us"],
    usage: "Özne zamirleri (I, you, he...) cümlenin öznesi; nesne zamirleri (me, him, them...) fiilin nesnesidir.",
    en: "I/he/she (Subject) vs me/him/her (Object)",
    tr: "Subject & Object Pronouns (Özne & Nesne Zamirleri)",
    hintEn: "Example: 'He (Subject) called me (Object).' / 'We saw them.'",
    hintTr: "Özne ve Nesne Zamirleri (I/he vs me/him/them)"
  },
  {
    id: 6019,
    category: "grammar",
    group: "Pronouns",
    topic_en: "Possessive Adjectives & Pronouns",
    topic_tr: "Sahiplik Sıfatları & Zamirleri",
    accepted_answers: [
      "Possessive Adjectives & Pronouns", "Possessives", "Possessive Pronouns", "Possessive Adjectives", "İyelik Zamirleri", "Sahiplik Sıfatları ve Zamirleri"
    ],
    formula_short: "Adj + Noun: my, your, his, her, our, their | Pronoun: mine, yours, his, hers, ours, theirs",
    formula_long: "Possessive Adj: my car, your pen | Possessive Pronoun: That car is mine, This pen is yours",
    forms: {
      positive: { short: "my/your + noun vs mine/yours", long: "Sıfat isimle kullanılır, zamir ismin yerine geçer (tek başına durur).", example: "This is my bag. / That bag is mine." },
      negative: { short: "It is not hers / It isn't our car", long: "Olumsuzda da aynı kural geçerlidir.", example: "That phone isn't mine; it's hers." },
      question: { short: "Whose is this? Is it yours?", long: "Whose (kimin) sorusuna sahiplik zamiriyle cevap verilir.", example: "Whose car is that? - It's ours." }
    },
    signal_words: ["my", "your", "his", "her", "its", "our", "their", "mine", "yours", "hers", "ours", "theirs", "whose"],
    usage: "Aitlik bildirir. my/your isimden önce gelir (my car); mine/yours isimsiz tek başına kullanılır (it is mine).",
    en: "my/your/their (Adj) vs mine/yours/theirs (Pronoun)",
    tr: "Possessive Adjectives & Pronouns",
    hintEn: "Clues: 'This is my dog.' (Adj) vs 'The dog is mine.' (Pronoun).",
    hintTr: "Sahiplik Sıfatları (my/your) ve Zamirleri (mine/yours)"
  },
  {
    id: 6020,
    category: "grammar",
    group: "Pronouns",
    topic_en: "Possessive Case ('s)",
    topic_tr: "Possessive Case ('s - İyelik Eki)",
    accepted_answers: [
      "Possessive Case", "Possessive 's", "Apostrophe s", "Apostrof Sahiplik", "İyelik Eki ('s)", "Possessive S", "Possessive"
    ],
    formula_short: "Singular: Name/Noun + 's (Ali's car) | Plural: Noun' + ... (boys' room)",
    formula_long: "Owner + 's + possession -> John's computer, the teacher's desk, children's toys",
    forms: {
      positive: { short: "Ali's phone / the teacher's car", long: "Tekil isimlere ve özel adlara 's eklenir.", example: "David's father is a doctor." },
      negative: { short: "Irregular plurals take 's: children's books", long: "-s ile bitmeyen düzensiz çoğullar 's alır.", example: "The women's bags are here." },
      question: { short: "Regular plurals take only ': students' books", long: "-s ile biten çoğullara sadece kesme işareti (') konur.", example: "The students' scores were high." }
    },
    signal_words: ["'s", "whose", "Ali's", "my brother's", "the doctor's"],
    usage: "İnsan veya hayvanların bir şeye sahip olduğunu göstermek için ismin sonuna gelen kesme işareti ('s).",
    en: "Owner + 's (Ali's car, the boys' room)",
    tr: "Possessive Case ('s - İyelik Eki)",
    hintEn: "Example: 'This is Ali's car.' / 'The girls' school is near here.'",
    hintTr: "Kesme İşareti ile Sahiplik ('s İyelik Eki)"
  },
  {
    id: 6021,
    category: "grammar",
    group: "Pronouns",
    topic_en: "Reflexive Pronouns",
    topic_tr: "Dönüşlü Zamirler (-self / -selves)",
    accepted_answers: [
      "Reflexive Pronouns", "Reflexive Pronoun", "Dönüşlü Zamirler", "Dönüşlü Zamir", "Reflexive"
    ],
    formula_short: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves",
    formula_long: "Subject + Verb + Reflexive Pronoun (eylem öznenin kendisine döner veya 'bizzat / kendi kendine' vurgulanır)",
    forms: {
      positive: { short: "I did it myself / She hurt herself", long: "Eylemi yapan ve etkilenen aynı kişiyse veya kendi başına yapıldıysa kullanılır.", example: "He made this cake himself. / Take care of yourself!" },
      negative: { short: "by + reflexive: by myself (tek başıma)", long: "by myself = on my own (kendi başıma / yalnız).", example: "I don't like living by myself." },
      question: { short: "Did you do it yourself?", long: "Bizzat kendin mi yaptın sorusunda kullanılır.", example: "Did they paint the house themselves?" }
    },
    signal_words: ["myself", "yourself", "himself", "herself", "itself", "ourselves", "themselves", "by myself"],
    usage: "Özne ile nesne aynı olduğunda (-self / -selves) veya eylemin tek başına/bizzat yapıldığını vurgularken.",
    en: "myself / yourself / himself / herself (Dönüşlü Zamirler)",
    tr: "Reflexive Pronouns (Dönüşlü Zamirler)",
    hintEn: "Example: 'I cut myself with the knife.' / 'She repaired the car herself.'",
    hintTr: "Dönüşlü Zamirler (myself, himself, themselves)"
  },

  // =========================================================================
  // 6. MODALS & AUXILIARY VERBS (YARDIMCI & MODAL FİİLLER)
  // =========================================================================
  {
    id: 6022,
    category: "grammar",
    group: "Modals",
    topic_en: "Auxiliary Verbs",
    topic_tr: "Yardımcı Fiiller (Do / Does / Did)",
    accepted_answers: [
      "Auxiliary Verbs", "Auxiliary Verb", "Yardımcı Fiiller", "Yardımcı Fiil", "Do Does Did", "Auxiliary"
    ],
    formula_short: "do/does/did + Base Verb (V1)",
    formula_long: "Present: do/does + not + V1 | Past: did + not + V1 | Question: Do/Does/Did + S + V1?",
    forms: {
      positive: { short: "do/does (present) / did (past)", long: "Yardımcı fiil devreye girdiğinde ana fiil DAİMA yalın (V1) kalır.", example: "He did go to the store. (emphasis)" },
      negative: { short: "don't / doesn't / didn't + V1", long: "❌ didn't went yerine ✅ didn't go.", example: "She didn't call me yesterday. / I don't eat meat." },
      question: { short: "Do/Does/Did + S + V1?", long: "Soru sorarken başa gelir, ana fiil V1 olur.", example: "Did you finish your project? / Does he speak Turkish?" }
    },
    signal_words: ["do", "does", "did", "don't", "doesn't", "didn't", "Y.F"],
    usage: "Soru ve olumsuz cümle yapımında kullanılır. Yanlarındaki ana fiil her zaman V1 (yalın) halde kalır.",
    en: "do/does/did + V1 (Yardımcı Fiiller)",
    tr: "Auxiliary Verbs (Yardımcı Fiiller: Do / Does / Did)",
    hintEn: "Example: 'Does she work here?' / 'He didn't go to school.' (Rule: Always followed by V1).",
    hintTr: "Yardımcı Fiiller (do/does/did + V1 kuralı)"
  },
  {
    id: 6023,
    category: "grammar",
    group: "Modals",
    topic_en: "Can / Could",
    topic_tr: "Can & Could (Yetenek ve İzin)",
    accepted_answers: [
      "Can Could", "Can / Could", "Can", "Could", "Modal Can", "Yetenek ve İzin", "Can and Could"
    ],
    formula_short: "S + can/could + V1 | can't/couldn't + V1",
    formula_long: "Present Ability: can + V1 | Past Ability: could + V1 | Polite Request: Could you please...?",
    forms: {
      positive: { short: "can + V1 (şimdiki) / could + V1 (geçmiş)", long: "Özneden bağımsız olarak daima yalın fiil (V1) ile birleşir.", example: "I can speak English. / When I was 6, I could swim." },
      negative: { short: "cannot (can't) / couldn't + V1", long: "Yetersizlik veya izin verilmeyen durumlar.", example: "She can't come today. / I couldn't sleep last night." },
      question: { short: "Can / Could + S + V1?", long: "Yetenek sormak veya kibar rica/istek bildirmek.", example: "Could you pass the salt, please? / Can you drive?" }
    },
    signal_words: ["can", "could", "can't", "couldn't", "ability", "polite request"],
    usage: "Şimdiki yetenek/olanak için 'can', geçmiş yetenek veya kibarca ricada bulunmak için 'could' kullanılır.",
    en: "S + can / could + V1",
    tr: "Can / Could (Yetenek ve İzin)",
    hintEn: "Example: 'She can play the piano.' / 'Could you open the door, please?'",
    hintTr: "Modal Fiiller: Can (şimdiki yetenek) ve Could (geçmiş yetenek / kibar rica)"
  },
  {
    id: 6024,
    category: "grammar",
    group: "Modals",
    topic_en: "Must / Have to",
    topic_tr: "Must & Have to (Zorunluluk)",
    accepted_answers: [
      "Must Have to", "Must / Have to", "Must", "Have to", "Zorunluluk Modalları", "Must and Have to"
    ],
    formula_short: "must + V1 (kişisel) | have to + V1 (kural/dışsal) | don't have to (gerek yok)",
    formula_long: "Must: içten gelen zorunluluk | Have to: kanun/dış kural | Mustn't: yasak | Don't have to: zorunluluk yok",
    forms: {
      positive: { short: "must + V1 / have to + V1", long: "Yapılması zorunlu eylemleri belirtir.", example: "I must study for the exam. / You have to wear a seatbelt." },
      negative: { short: "mustn't (yasak) vs don't have to (gerek yok)", long: "⚠️ Mustn't = kesin yasak (don't do it!), Don't have to = gerek yok (isteğe bağlı).", example: "You mustn't smoke here (yasak). / You don't have to pay now (gerek yok)." },
      question: { short: "Do I have to...? / Must we...?", long: "Zorunluluk sorusu.", example: "Do we have to leave right now?" }
    },
    signal_words: ["must", "have to", "has to", "mustn't", "don't have to", "obligation", "rule"],
    usage: "Zorunlulukları anlatır. Must kişisel karardır; have to kurallar ve kanunlardır; mustn't yasaktır.",
    en: "S + must / have to + V1",
    tr: "Must / Have to (Zorunluluk)",
    hintEn: "Example: 'You must stop at red lights.' / 'You don't have to wake up early tomorrow.'",
    hintTr: "Zorunluluk Modalları (must, have to, don't have to, mustn't)"
  },
  {
    id: 6025,
    category: "grammar",
    group: "Modals",
    topic_en: "Should / Shouldn't",
    topic_tr: "Should & Shouldn't (Tavsiye & Öneri)",
    accepted_answers: [
      "Should Shouldn't", "Should / Shouldn't", "Should", "Shouldn't", "Tavsiye Modalı", "Should and Shouldn't"
    ],
    formula_short: "S + should/shouldn't + V1",
    formula_long: "Subject + should + Base Verb (V1) (tavsiye) | should not (shouldn't) (yapılmaması önerilen)",
    forms: {
      positive: { short: "should + V1 (tavsiye)", long: "Birine yapmasının doğru veya iyi olacağını söylerken.", example: "You look tired; you should go to bed." },
      negative: { short: "shouldn't + V1 (olumsuz tavsiye)", long: "Birine bir şeyi yapmamasını öğütlerken.", example: "You shouldn't eat so much junk food." },
      question: { short: "Should + S + V1?", long: "Fikir veya tavsiye danışırken.", example: "What should I wear tonight? / Should we call him?" }
    },
    signal_words: ["should", "shouldn't", "ought to", "advice", "you should see a doctor", "I think you should"],
    usage: "Öğüt, öneri ve tavsiye vermek için kullanılır. Zorunluluk değil, iyi bir fikir olduğunu belirtir.",
    en: "S + should / shouldn't + V1",
    tr: "Should / Shouldn't (Tavsiye)",
    hintEn: "Example: 'You should drink more water.' / 'You shouldn't stay up late.'",
    hintTr: "Tavsiye ve Öneri Modalı (should / shouldn't + V1)"
  },
  {
    id: 6026,
    category: "grammar",
    group: "Modals",
    topic_en: "Question Words",
    topic_tr: "Question Words (Wh- Soru Kelimeleri)",
    accepted_answers: [
      "Question Words", "Wh Questions", "Wh- Words", "Soru Kelimeleri", "Wh- Soru Kelimeleri", "Wh Words"
    ],
    formula_short: "What / Where / When / Who / Why / Which / How (+ Aux + S + V?)",
    formula_long: "Wh- Word + Auxiliary (do/does/is/can) + Subject + Verb + ...?",
    forms: {
      positive: { short: "What (ne), Where (nerede), When (ne zaman)", long: "Bilgi almak için sorulan cümlenin en başında yer alır.", example: "Where do you live? / What is your name?" },
      negative: { short: "Who (kim), Why (neden), Which (hangisi)", long: "Sebepler, kişiler ve seçenekler için kullanılır.", example: "Why are you late? / Who called you?" },
      question: { short: "How (nasıl), How often (ne sıklıkla), How much/many", long: "How ile türetilen miktar, sıklık ve yaş soruları.", example: "How often do you exercise? / How old are you?" }
    },
    signal_words: ["what", "where", "when", "who", "why", "which", "how", "how often", "how much", "how many"],
    usage: "Evet/hayır cevabı yerine bilgi isteyen açık uçlu soru sormak için cümlenin en başına gelir.",
    en: "What / Where / When / Who / Why / How + Aux + S + V?",
    tr: "Question Words (Wh- Soru Kelimeleri)",
    hintEn: "Examples: 'Where do you go?' / 'Why are you learning English?' / 'How often do you travel?'",
    hintTr: "Soru Kelimeleri (What, Where, When, Who, Why, How)"
  },

  // =========================================================================
  // 7. ADJECTIVES & ADVERBS (SIFATLAR & ZARFLAR)
  // =========================================================================
  {
    id: 6027,
    category: "grammar",
    group: "Adjectives & Adverbs",
    topic_en: "Comparatives",
    topic_tr: "Comparatives (Karşılaştırma Sıfatları)",
    accepted_answers: [
      "Comparatives", "Comparative", "Comparative Adjectives", "Karşılaştırma Sıfatları", "Karşılaştırma"
    ],
    formula_short: "adj + -er + than (taller than) | more + adj + than (more expensive than)",
    formula_long: "Kısa sıfat: A is older than B | Uzun sıfat: A is more comfortable than B | Düzensiz: better, worse, farther",
    forms: {
      positive: { short: "taller than / more expensive than", long: "İki nesne veya kişiyi kıyaslarken sıfata -er veya başına more eklenir.", example: "An elephant is bigger than a horse. / Gold is more expensive than silver." },
      negative: { short: "not as ... as (kadar değil)", long: "Eşitlik olumsuzluğu: not as tall as.", example: "He is not as tall as his brother." },
      question: { short: "Who is taller? / Which one is better?", long: "Hangisi daha... sorusu.", example: "Is English easier than German?" }
    },
    signal_words: ["than", "more", "-er", "better", "worse", "bigger", "taller", "less"],
    usage: "İki kişiyi, yeri veya nesneyi birbiriyle kıyaslamak için kullanılır (-er than / more than).",
    en: "taller than / more expensive than (Karşılaştırma)",
    tr: "Comparatives (Karşılaştırma Sıfatları)",
    hintEn: "Clues: 'taller than', 'faster than', 'more beautiful than', 'better than'.",
    hintTr: "Karşılaştırma Sıfatları (-er than / more than)"
  },
  {
    id: 6028,
    category: "grammar",
    group: "Adjectives & Adverbs",
    topic_en: "Superlatives",
    topic_tr: "Superlatives (En Üstünlük Sıfatları)",
    accepted_answers: [
      "Superlatives", "Superlative", "Superlative Adjectives", "En Üstünlük Sıfatları", "Üstünlük Sıfatları"
    ],
    formula_short: "the + adj + -est (the tallest) | the most + adj (the most beautiful)",
    formula_long: "Kısa sıfat: the highest mountain | Uzun sıfat: the most interesting film | Düzensiz: the best, the worst",
    forms: {
      positive: { short: "the + -est / the most + adj", long: "Bir grubun içindeki 'en' olanı ifade eder, başına mutlaka 'the' gelir.", example: "Everest is the highest mountain in the world. / She is the most intelligent student." },
      negative: { short: "the least + adj (en az)", long: "En az üstünlük.", example: "This is the least expensive option." },
      question: { short: "What is the longest river?", long: "En... olan nedir sorusu.", example: "Who is the fastest runner in the team?" }
    },
    signal_words: ["the -est", "the most", "the best", "the worst", "in the world", "in the class", "of all"],
    usage: "Üç veya daha fazla şey arasında 'en' olanı (en uzun, en pahalı, en iyi) belirtmek için kullanılır.",
    en: "the tallest / the most beautiful (En Üstünlük)",
    tr: "Superlatives (En Üstünlük Sıfatları)",
    hintEn: "Clues: 'the highest mountain', 'the most popular sport', 'the best film'.",
    hintTr: "En Üstünlük Sıfatları (the -est / the most)"
  },
  {
    id: 6029,
    category: "grammar",
    group: "Adjectives & Adverbs",
    topic_en: "Adverbs of Frequency",
    topic_tr: "Adverbs of Frequency (Sıklık Zarfları)",
    accepted_answers: [
      "Adverbs of Frequency", "Frequency Adverbs", "Sıklık Zarfları", "Sıklık Zarfı", "Frequency"
    ],
    formula_short: "Subject + adverb + main verb | Subject + be + adverb",
    formula_long: "always (100%) > usually (80%) > often (60%) > sometimes (50%) > rarely (20%) > never (0%)",
    forms: {
      positive: { short: "I always wake up early / He is usually happy", long: "Ana fiilden önce, 'to be' (am/is/are) fiilinden sonra gelir.", example: "I often drink green tea. / She is always on time." },
      negative: { short: "never = not ever (olumsuz anlam)", long: "Never zaten olumsuzluk içerdiği için cümle yapısı olumlu kurulur.", example: "He never eats pork. (❌ He doesn't never eat)" },
      question: { short: "How often do you...?", long: "Eylemin ne sıklıkla yapıldığını sorar.", example: "How often do you travel abroad?" }
    },
    signal_words: ["always", "usually", "often", "sometimes", "rarely", "seldom", "never", "hardly ever", "how often"],
    usage: "Bir eylemin ne sıklıkla yapıldığını ifade eder. Genellikle Present Simple (Geniş Zaman) ile kullanılır.",
    en: "always / usually / often / sometimes / never + V1",
    tr: "Adverbs of Frequency (Sıklık Zarfları)",
    hintEn: "Clues: always (100%), usually (80%), sometimes (50%), never (0%). Position: before main verb.",
    hintTr: "Sıklık Zarfları (always, usually, sometimes, never)"
  },

  // =========================================================================
  // 8. STRUCTURES & PREPOSITIONS (TEMEL YAPILAR & EDATLAR)
  // =========================================================================
  {
    id: 6030,
    category: "grammar",
    group: "Structures",
    topic_en: "There is / There are",
    topic_tr: "There is & There are (Var / Yok)",
    accepted_answers: [
      "There is There are", "There is / There are", "There is", "There are", "Var Yok", "There be"
    ],
    formula_short: "Singular/Uncountable: There is | Plural: There are | (-) isn't / aren't",
    formula_long: "(+) There is a cat / There is some milk | There are three cars | (-) There isn't any milk | (?) Is there / Are there...?",
    forms: {
      positive: { short: "There is + singular / There are + plural", long: "Bir yerde bir şeyin var olduğunu bildirmek için kullanılır.", example: "There is a supermarket near my house. / There are 30 students in the class." },
      negative: { short: "There isn't / There aren't", long: "Yok olduğunu bildirmek için.", example: "There isn't any milk left. / There aren't any tickets." },
      question: { short: "Is there...? / Are there...?", long: "Var mı sorusu.", example: "Is there a hospital nearby? / Are there any questions?" }
    },
    signal_words: ["there is", "there are", "there isn't", "there aren't", "is there", "are there"],
    usage: "Bir nesnenin veya kişinin belirli bir yerde mevcut (var) veya yok olduğunu ifade eder.",
    en: "There is (tekil/sayılamaz) vs There are (çoğul)",
    tr: "There is / There are (Var / Yok)",
    hintEn: "Example: 'There is a book on the table.' / 'There are two spiders on the wall!'",
    hintTr: "Var/Yok Cümleleri (There is / There are)"
  },
  {
    id: 6031,
    category: "grammar",
    group: "Structures",
    topic_en: "Have got / Has got",
    topic_tr: "Have got & Has got (Sahiplik)",
    accepted_answers: [
      "Have got Has got", "Have got / Has got", "Have got", "Has got", "Sahiplik (Have got)", "Have/Has got"
    ],
    formula_short: "S + have/has got | (-) haven't/hasn't got | (?) Have/Has + S + got?",
    formula_long: "I/You/We/They have got ('ve got) | He/She/It has got ('s got) | Sahiplik, aile fertleri ve fiziksel özellikler",
    forms: {
      positive: { short: "I've got a car / She's got blue eyes", long: "Sahip olunan şeyleri belirtmek için (İngiliz İngilizcesinde çok yaygın).", example: "I have got two sisters. / He has got a new bicycle." },
      negative: { short: "haven't got / hasn't got", long: "Sahip olunmayan durumlar.", example: "We haven't got much time. / She hasn't got a car." },
      question: { short: "Have you got...? / Has she got...?", long: "Sahiplik sorusu.", example: "Have you got a pen I can borrow? / Has he got a dog?" }
    },
    signal_words: ["have got", "has got", "haven't got", "hasn't got", "'ve got", "'s got"],
    usage: "Bir şeye sahip olmayı, aile üyelerini veya fiziksel özellikleri belirtir (I have got = I have).",
    en: "S + have/has got (Sahiplik)",
    tr: "Have got / Has got",
    hintEn: "Example: 'I have got a bicycle.' / 'She has got brown eyes.' / 'Have you got any money?'",
    hintTr: "Sahiplik İfadesi (Have got / Has got)"
  },
  {
    id: 6032,
    category: "grammar",
    group: "Structures",
    topic_en: "Imperatives",
    topic_tr: "Imperatives (Emir Cümleleri)",
    accepted_answers: [
      "Imperatives", "Imperative", "Emir Cümleleri", "Emir Kipi"
    ],
    formula_short: "(+) Base Verb (V1)! | (-) Don't + Base Verb (V1)!",
    formula_long: "Özne kullanılmaz! Cümle doğrudan yalın fiil ile başlar: Sit down! / Listen! / Don't run! / Don't speak!",
    forms: {
      positive: { short: "V1! (Open the door!)", long: "Talimat, emir, yön tarifi veya doğrudan tavsiye verirken.", example: "Turn left at the traffic lights. / Please sit down." },
      negative: { short: "Don't + V1! (Don't touch!)", long: "Bir şeyin yapılmamasını emrederken başına 'Don't' gelir.", example: "Don't forget your umbrella! / Don't make noise!" },
      question: { short: "Let's + V1 (hadi yapalım)", long: "Birlikte yapma önerisinde 'Let's' kullanılır.", example: "Let's go to the cinema!" }
    },
    signal_words: ["don't", "please", "let's", "listen!", "look!", "be quiet!"],
    usage: "Emir vermek, talimat veya tavsiye sunmak için kullanılır. Cümlede özne (you) söylenmez, doğrudan fiille başlar.",
    en: "V1! (Sit down!) vs Don't + V1! (Don't run!)",
    tr: "Imperatives (Emir Cümleleri)",
    hintEn: "Example: 'Sit down, please!' / 'Don't touch that!' (Rule: No subject, starts with V1).",
    hintTr: "Emir Cümleleri (Yalın Fiil! / Don't + Fiil!)"
  },
  {
    id: 6033,
    category: "grammar",
    group: "Structures",
    topic_en: "Prepositions of Place & Time",
    topic_tr: "Prepositions of Place & Time (In / On / At)",
    accepted_answers: [
      "Prepositions of Place and Time", "Prepositions", "In On At", "Edatlar", "Zaman ve Yer Edatları", "Prepositions of Place", "Prepositions of Time"
    ],
    formula_short: "Time: at 5 PM, on Monday, in July | Place: at the door, on the table, in the room",
    formula_long: "IN (aylar, yıllar, mevsimler, kapalı alanlar) | ON (günler, tarihler, yüzeyler) | AT (saatler, net noktalar)",
    forms: {
      positive: { short: "at 8:00 / on Sunday / in 2024", long: "Zaman ve konum bildiren temel üç edatın hiyerarşisi.", example: "The meeting is at 3 PM on Monday in July." },
      negative: { short: "at home / on the wall / in the car", long: "Konum edatları: at (nokta), on (yüzey), in (içinde).", example: "He is at home. The picture is on the wall." },
      question: { short: "When? At 5. Where? In London.", long: "When ve Where sorularının temel edat yanıtları.", example: "Where is the cat? - It is in the box." }
    },
    signal_words: ["in July", "in 2025", "in the morning", "on Monday", "on the table", "at 9 PM", "at night", "at home"],
    usage: "Zaman ve yer konumlarını belirtir: In (genel/ay/yıl/içinde), On (gün/tarih/yüzey), At (nokta/saat).",
    en: "in / on / at (Zaman ve Yer Edatları)",
    tr: "Prepositions of Place & Time (In / On / At)",
    hintEn: "Clues: at 7:00 (exact time), on Monday (days), in 2024 (years/months).",
    hintTr: "Zaman ve Yer Edatları (In, On, At)"
  },
  {
    id: 6034,
    category: "grammar",
    group: "Structures",
    topic_en: "Linking Words",
    topic_tr: "Linking Words (Bağlaçlar: And, But, So, Because, Or)",
    accepted_answers: [
      "Linking Words", "Conjunctions", "Bağlaçlar", "And But So Because", "Connectors"
    ],
    formula_short: "and (ve) | but (ama) | so (bu yüzden) | because (çünkü) | or (veya)",
    formula_long: "Sentence A + [and / but / so / because / or] + Sentence B",
    forms: {
      positive: { short: "because (neden) vs so (sonuç)", long: "Because nedene, so sonuca bağlar.", example: "I stayed home because it was raining. / It was raining, so I stayed home." },
      negative: { short: "but (zıtlık) vs and (ekleme)", long: "But zıt iki fikri, and benzer fikirleri bağlar.", example: "He is rich but unhappy. / She likes tea and coffee." },
      question: { short: "or (seçenek)", long: "İki seçenek arasında tercih sunarken.", example: "Do you want tea or coffee?" }
    },
    signal_words: ["and", "but", "so", "because", "or", "although"],
    usage: "İki cümleyi veya fikri birbirine bağlar. And (ekleme), but (zıtlık), because (sebep), so (sonuç), or (seçenek).",
    en: "and / but / so / because / or (Bağlaçlar)",
    tr: "Linking Words (Bağlaçlar)",
    hintEn: "Examples: 'He was tired, so he slept.' / 'I called him, but he didn't answer.' / 'She smiled because she won.'",
    hintTr: "Cümle Bağlaçları (and, but, so, because, or)"
  },

  // =========================================================================
  // 9. CONDITIONALS & ADVANCED (KOŞUL CÜMLELERİ & GEÇİŞ KONULARI)
  // =========================================================================
  {
    id: 6035,
    category: "grammar",
    group: "Conditionals",
    topic_en: "Zero & First Conditional",
    topic_tr: "Zero & First Conditional (Koşul Cümleleri)",
    accepted_answers: [
      "Conditionals", "Zero and First Conditional", "First Conditional", "Zero Conditional", "If Clauses", "Koşul Cümleleri"
    ],
    formula_short: "Zero: If + Present, Present | First: If + Present Simple, will + V1",
    formula_long: "Zero (genel kural): If you heat water, it boils. | First (gelecekte olası): If it rains tomorrow, we will stay home.",
    forms: {
      positive: { short: "If + Present Simple, will + V1", long: "Gelecekte olması muhtemel durumlar ve onların sonuçları.", example: "If I study hard, I will pass the exam." },
      negative: { short: "If + S + don't/doesn't + V1, won't + V1", long: "Olumsuz koşul cümleleri.", example: "If you don't hurry, you will miss the train." },
      question: { short: "What will you do if it rains?", long: "Koşul ve sonuç soruları.", example: "Will you come if I invite you?" }
    },
    signal_words: ["if", "unless (if not)", "if it rains", "will", "condition"],
    usage: "Zero: Genel bilimsel doğrular. First Conditional: Gelecekte gerçekleşmesi muhtemel durumlar ve olası sonuçları.",
    en: "If + Present Simple, will + V1 (First Conditional)",
    tr: "Zero & First Conditional (Koşul Cümleleri)",
    hintEn: "Example: 'If it rains tomorrow, we will stay at home.' (Pattern: If + Present, will + V1).",
    hintTr: "Koşul Cümleleri: First Conditional (If + Present, will + V1)"
  },
  {
    id: 6036,
    category: "grammar",
    group: "Conditionals",
    topic_en: "For and Since",
    topic_tr: "For & Since (Zaman Edatları - Süreç ve Başlangıç)",
    accepted_answers: [
      "For and Since", "For / Since", "For Since", "For", "Since", "For ve Since"
    ],
    formula_short: "For + Period (for 3 years) | Since + Specific Point (since 2020, since morning)",
    formula_long: "Present Perfect ile: For = süreç uzunluğu (for 10 minutes, for 2 days) | Since = eylemin başladığı nokta (since yesterday, since 5 o'clock)",
    forms: {
      positive: { short: "have lived here for 5 years / since 2019", long: "Geçmişten bugüne süren eylemin zamanını belirtirken.", example: "I have known him for ten years. / She has worked here since January." },
      negative: { short: "haven't seen him since Monday", long: "Belli bir zamandan beri yapılmayan eylem.", example: "I haven't eaten anything for six hours." },
      question: { short: "How long have you lived here?", long: "How long sorusuna For veya Since ile cevap verilir.", example: "How long have you been in Istanbul? - Since 2020." }
    },
    signal_words: ["for three days", "for a long time", "since 2020", "since yesterday", "since childhood", "how long"],
    usage: "Present Perfect ile eylemin ne kadar süredir devam ettiğini (for) veya ne zaman başladığını (since) belirtir.",
    en: "for (süreç: for 3 years) vs since (başlangıç: since 2020)",
    tr: "For and Since (Süreç ve Başlangıç)",
    hintEn: "Clues: for 5 hours (duration) vs since 2 o'clock (starting point).",
    hintTr: "For (süreç: for 3 days) ve Since (başlangıç noktası: since 2018)"
  },
  {
    id: 6037,
    category: "grammar",
    group: "Conditionals",
    topic_en: "Reported Speech",
    topic_tr: "Reported Speech (Dolaylı Anlatım - Temel)",
    accepted_answers: [
      "Reported Speech", "Indirect Speech", "Dolaylı Anlatım", "Aktarılan Söz"
    ],
    formula_short: "He said (that) S + Past Tense... / She told me (that)...",
    formula_long: "Direct: 'I am tired' → Reported: He said that he was tired. (Present tense geçmiş zamana kayar)",
    forms: {
      positive: { short: "am/is → was | have → had | will → would", long: "Bir başkasının söylediği sözü aktarırken zaman bir derece geçmişe kayar.", example: "'I like pizza.' → He said that he liked pizza." },
      negative: { short: "don't → didn't | can't → couldn't", long: "Olumsuz aktarma.", example: "'I cannot come.' → She said she couldn't come." },
      question: { short: "He asked if / whether...", long: "Dolaylı soru sorma.", example: "He asked me if I was hungry." }
    },
    signal_words: ["he said that", "she told me", "he asked if", "reported speech"],
    usage: "Bir başkasının söylediği cümleyi aktarırken kullanılır. Ana fiil 'said/told' olduğunda cümle bir derece geçmiş zamana kayar.",
    en: "He said (that) he was tired (Dolaylı Anlatım)",
    tr: "Reported Speech (Dolaylı Anlatım - Temel)",
    hintEn: "Example: Direct: 'I am hungry.' → Indirect: 'He said he was hungry.'",
    hintTr: "Dolaylı Anlatım (He said that... zamanın geçmişe kayması)"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GRAMMAR_DATA;
}

