// ===== PERSONEL NOTEBOOK - GRAMMAR TEST (GAP FILL / BOŞLUK DOLDURMA) =====
// A1-A2 & Erken B1 Cümle İçi Boşluk Doldurma Test Soruları
// Saf İngilizce pratik: İpuçlarını ve zaman belirteçlerini inceleyerek doğru fiil/gramer formunu yazın.

const GRAMMAR_TEST_DATA = [
  // =========================================================================
  // 1. TENSE CONTRASTS & TIME CLAUSES
  // =========================================================================
  {
    id: 7001,
    category: "grammar_test",
    topic: "Past Continuous & Past Simple",
    sentence: "They _______ (watch) a horror movie when the lights _______ (go out).",
    blanks: [
      {
        index: 1,
        clue: "watch",
        answers: ["were watching"]
      },
      {
        index: 2,
        clue: "go out",
        answers: ["went out"]
      }
    ],
    explanation: "Geçmişte devam eden eylem için Past Continuous (were watching), onu aniden bölen olay için Past Simple (went out) kullanılır."
  },
  {
    id: 7002,
    category: "grammar_test",
    topic: "Past Simple & Cause-Effect",
    sentence: "He _______ (study) all night, so he _______ (not / come) to school.",
    blanks: [
      {
        index: 1,
        clue: "study",
        answers: ["studied", "had studied", "had been studying"]
      },
      {
        index: 2,
        clue: "not / come",
        answers: ["didn't come", "did not come"]
      }
    ],
    explanation: "Geçmişte tamamlanmış iki eylem: tüm gece çalıştı (studied) ve bu yüzden okula gelmedi (didn't come)."
  },
  {
    id: 7003,
    category: "grammar_test",
    topic: "Present Simple vs Present Continuous",
    sentence: "Listen! Somebody _______ (sing) upstairs, but usually nobody _______ (make) noise.",
    blanks: [
      {
        index: 1,
        clue: "sing",
        answers: ["is singing"]
      },
      {
        index: 2,
        clue: "make",
        answers: ["makes"]
      }
    ],
    explanation: "'Listen!' konuşma anında olan eylemi (is singing) belirtir. 'usually' ise genel alışkanlığı (makes) gerektirir."
  },
  {
    id: 7004,
    category: "grammar_test",
    topic: "Past Simple & Past Continuous",
    sentence: "While I _______ (walk) in the park, I _______ (find) a gold coin on the ground.",
    blanks: [
      {
        index: 1,
        clue: "walk",
        answers: ["was walking"]
      },
      {
        index: 2,
        clue: "find",
        answers: ["found"]
      }
    ],
    explanation: "While ile devam eden eylem (was walking), o sırada gerçekleşen anlık bulma eylemi (found)."
  },
  {
    id: 7005,
    category: "grammar_test",
    topic: "Past Perfect & Past Simple",
    sentence: "When we arrived at the cinema, the film _______ (already / start).",
    blanks: [
      {
        index: 1,
        clue: "already / start",
        answers: ["had already started", "already started"]
      }
    ],
    explanation: "Biz varmadan önce çoktan başlamış olduğu için geçmişin geçmişi: Past Perfect (had already started)."
  },
  {
    id: 7006,
    category: "grammar_test",
    topic: "Present Perfect & Time Markers",
    sentence: "I _______ (never / visit) London, but my brother _______ (go) there last summer.",
    blanks: [
      {
        index: 1,
        clue: "never / visit",
        answers: ["have never visited", "have never visited"]
      },
      {
        index: 2,
        clue: "go",
        answers: ["went"]
      }
    ],
    explanation: "Hayat deneyimi için Present Perfect (have never visited), belirli bir geçmiş tarih (last summer) için Past Simple (went)."
  },
  {
    id: 7007,
    category: "grammar_test",
    topic: "Future: Will vs Be Going To",
    sentence: "Look at those dark clouds! It _______ (rain).",
    blanks: [
      {
        index: 1,
        clue: "rain",
        answers: ["is going to rain", "'s going to rain"]
      }
    ],
    explanation: "Gözle görülür kesin bir kanıt (dark clouds) olduğunda tahmin için 'is going to rain' kullanılır."
  },
  {
    id: 7008,
    category: "grammar_test",
    topic: "Simple Future (Will)",
    sentence: "Don't worry about the dishes. I _______ (wash) them for you.",
    blanks: [
      {
        index: 1,
        clue: "wash",
        answers: ["will wash", "'ll wash"]
      }
    ],
    explanation: "Konuşma anında verilen ani karar ve yardım teklifleri için Simple Future (will wash / 'll wash) kullanılır."
  },
  {
    id: 7009,
    category: "grammar_test",
    topic: "Present Perfect Continuous",
    sentence: "She is completely exhausted because she _______ (run) for two hours.",
    blanks: [
      {
        index: 1,
        clue: "run",
        answers: ["has been running"]
      }
    ],
    explanation: "Eylemin süresine (for two hours) ve şu anki fiziksel etkisine vurgu yapıldığı için 'has been running'."
  },
  {
    id: 7010,
    category: "grammar_test",
    topic: "Past Simple Negation",
    sentence: "We _______ (not / go) to the beach yesterday because the weather was terrible.",
    blanks: [
      {
        index: 1,
        clue: "not / go",
        answers: ["didn't go", "did not go"]
      }
    ],
    explanation: "Past Simple olumsuz cümlede 'didn't + V1' kalıbı kullanılır: didn't go."
  },

  // =========================================================================
  // 2. NOUNS, QUANTIFIERS & DETERMINERS
  // =========================================================================
  {
    id: 7011,
    category: "grammar_test",
    topic: "Plural Nouns (Irregular)",
    sentence: "Three _______ (child) and two _______ (man) were waiting at the bus stop.",
    blanks: [
      {
        index: 1,
        clue: "child",
        answers: ["children"]
      },
      {
        index: 2,
        clue: "man",
        answers: ["men"]
      }
    ],
    explanation: "Düzensiz çoğul isimler: child → children, man → men."
  },
  {
    id: 7012,
    category: "grammar_test",
    topic: "Some vs Any",
    sentence: "We don't have _______ (some / any) sugar, but we have _______ (some / any) honey.",
    blanks: [
      {
        index: 1,
        clue: "some / any",
        answers: ["any"]
      },
      {
        index: 2,
        clue: "some / any",
        answers: ["some"]
      }
    ],
    explanation: "Olumsuz cümlede 'any' (don't have any sugar), olumlu cümlede 'some' (have some honey) kullanılır."
  },
  {
    id: 7013,
    category: "grammar_test",
    topic: "Much vs Many",
    sentence: "How _______ (much / many) money do you need, and how _______ (much / many) books did you buy?",
    blanks: [
      {
        index: 1,
        clue: "much / many",
        answers: ["much"]
      },
      {
        index: 2,
        clue: "much / many",
        answers: ["many"]
      }
    ],
    explanation: "Sayılamayan isimlerde 'how much' (money), sayılabilen çoğullarda 'how many' (books) kullanılır."
  },
  {
    id: 7014,
    category: "grammar_test",
    topic: "Countable vs Uncountable (A/An vs Some)",
    sentence: "I want to eat _______ (a / an / some) apple and drink _______ (a / an / some) water.",
    blanks: [
      {
        index: 1,
        clue: "a / an / some",
        answers: ["an"]
      },
      {
        index: 2,
        clue: "a / an / some",
        answers: ["some"]
      }
    ],
    explanation: "Sesli harfle başlayan tekil sayılabilir isimlerde 'an apple', sayılamayan sıvılarda 'some water' kullanılır."
  },

  // =========================================================================
  // 3. PRONOUNS & POSSESSIVES
  // =========================================================================
  {
    id: 7015,
    category: "grammar_test",
    topic: "Subject & Object Pronouns",
    sentence: "My parents called _______ (I / me) because _______ (they / them) were worried.",
    blanks: [
      {
        index: 1,
        clue: "I / me",
        answers: ["me"]
      },
      {
        index: 2,
        clue: "they / them",
        answers: ["they"]
      }
    ],
    explanation: "Fiilden sonra nesne zamiri (called me), cümlenin başında özne zamiri (they were worried) gelir."
  },
  {
    id: 7016,
    category: "grammar_test",
    topic: "Possessive Adjectives & Pronouns",
    sentence: "This is not my jacket. Is it _______ (your / yours)? No, _______ (my / mine) is black.",
    blanks: [
      {
        index: 1,
        clue: "your / yours",
        answers: ["yours"]
      },
      {
        index: 2,
        clue: "my / mine",
        answers: ["mine"]
      }
    ],
    explanation: "İsimsiz tek başına duran sahiplik zamirleri: 'yours' (seninki) ve 'mine' (benimki)."
  },
  {
    id: 7017,
    category: "grammar_test",
    topic: "Possessive Case ('s)",
    sentence: "Where is _______ (Ali / car)? It is parked near the _______ (teachers / room).",
    blanks: [
      {
        index: 1,
        clue: "Ali's",
        answers: ["Ali's", "Alis"]
      },
      {
        index: 2,
        clue: "teachers' / teacher's",
        answers: ["teachers' room", "teacher's room", "teachers'", "teacher's"]
      }
    ],
    explanation: "Kişi sahipliğinde apostrof: Ali's car (Ali'nin arabası)."
  },
  {
    id: 7018,
    category: "grammar_test",
    topic: "Reflexive Pronouns",
    sentence: "He was cutting bread and accidentally hurt _______ (him / himself).",
    blanks: [
      {
        index: 1,
        clue: "him / himself",
        answers: ["himself"]
      }
    ],
    explanation: "Eylem öznenin kendisine döndüğünde dönüşlü zamir kullanılır: hurt himself (kendini kesti)."
  },

  // =========================================================================
  // 4. MODALS & AUXILIARIES
  // =========================================================================
  {
    id: 7019,
    category: "grammar_test",
    topic: "Can / Could (Ability & Politeness)",
    sentence: "When I was ten, I _______ (can / could) run very fast, but now I can't.",
    blanks: [
      {
        index: 1,
        clue: "can / could",
        answers: ["could"]
      }
    ],
    explanation: "Geçmişteki yetenek için 'could' kullanılır (When I was ten, I could run fast)."
  },
  {
    id: 7020,
    category: "grammar_test",
    topic: "Must vs Don't Have to",
    sentence: "Tomorrow is Sunday, so I _______ (not / have to) wake up early.",
    blanks: [
      {
        index: 1,
        clue: "not / have to",
        answers: ["don't have to", "do not have to"]
      }
    ],
    explanation: "Zorunluluğun olmadığını (gerek olmadığını) belirtmek için 'don't have to' kullanılır."
  },
  {
    id: 7021,
    category: "grammar_test",
    topic: "Mustn't (Prohibition)",
    sentence: "You _______ (must not / don't have to) take photos inside the museum; it is strictly forbidden!",
    blanks: [
      {
        index: 1,
        clue: "must not / don't have to",
        answers: ["must not", "mustn't"]
      }
    ],
    explanation: "Yasak olan (forbidden) eylemlerde 'must not / mustn't' kullanılır."
  },
  {
    id: 7022,
    category: "grammar_test",
    topic: "Should / Shouldn't (Advice)",
    sentence: "You have a high fever. You _______ (should) stay in bed and you _______ (not / drink) cold water.",
    blanks: [
      {
        index: 1,
        clue: "should",
        answers: ["should"]
      },
      {
        index: 2,
        clue: "not / drink",
        answers: ["shouldn't drink", "should not drink"]
      }
    ],
    explanation: "Tavsiye ve öğüt cümlelerinde: should + V1 ve shouldn't + V1 kullanılır."
  },
  {
    id: 7023,
    category: "grammar_test",
    topic: "Question Words (Wh- Questions)",
    sentence: "_______ (Where / When) is my backpack? - It is under your bed.",
    blanks: [
      {
        index: 1,
        clue: "Where / When",
        answers: ["Where", "where"]
      }
    ],
    explanation: "Konum ('under your bed') sorulduğu için soru kelimesi 'Where' (Nerede) olmalıdır."
  },

  // =========================================================================
  // 5. COMPARATIVES & SUPERLATIVES
  // =========================================================================
  {
    id: 7024,
    category: "grammar_test",
    topic: "Comparatives",
    sentence: "A plane is _______ (fast) than a train, and gold is _______ (expensive) than silver.",
    blanks: [
      {
        index: 1,
        clue: "fast",
        answers: ["faster"]
      },
      {
        index: 2,
        clue: "expensive",
        answers: ["more expensive"]
      }
    ],
    explanation: "Kısa sıfatlarda -er (faster than), uzun sıfatlarda more (more expensive than) kullanılır."
  },
  {
    id: 7025,
    category: "grammar_test",
    topic: "Superlatives",
    sentence: "Mount Everest is the _______ (high) mountain in the world, and this is the _______ (good) movie I have ever seen.",
    blanks: [
      {
        index: 1,
        clue: "high",
        answers: ["highest"]
      },
      {
        index: 2,
        clue: "good",
        answers: ["best"]
      }
    ],
    explanation: "En üstünlük derecesi: the highest mountain ve düzensiz sıfat good → the best."
  },
  {
    id: 7026,
    category: "grammar_test",
    topic: "Adverbs of Frequency",
    sentence: "He is a vegetarian, so he _______ (never / eat) meat.",
    blanks: [
      {
        index: 1,
        clue: "never / eat",
        answers: ["never eats"]
      }
    ],
    explanation: "Özne 'he' olduğu için fiil -s takısı alır ve sıklık zarfı fiilden önce gelir: never eats."
  },

  // =========================================================================
  // 6. STRUCTURES & PREPOSITIONS
  // =========================================================================
  {
    id: 7027,
    category: "grammar_test",
    topic: "There is / There are",
    sentence: "_______ (There is / There are) a spider on the wall, and _______ (there is / there are) three apples in the basket.",
    blanks: [
      {
        index: 1,
        clue: "There is / There are",
        answers: ["There is", "there is", "There's", "there's"]
      },
      {
        index: 2,
        clue: "there is / there are",
        answers: ["there are", "There are"]
      }
    ],
    explanation: "Tekil nesne için 'There is a spider', çoğul nesne için 'there are three apples'."
  },
  {
    id: 7028,
    category: "grammar_test",
    topic: "Have got / Has got",
    sentence: "I have got a bicycle, but my brother _______ (not / have got) one.",
    blanks: [
      {
        index: 1,
        clue: "not / have got",
        answers: ["hasn't got", "has not got"]
      }
    ],
    explanation: "He/She/It için olumsuz sahiplik: hasn't got."
  },
  {
    id: 7029,
    category: "grammar_test",
    topic: "Imperatives",
    sentence: "Please _______ (sit) down and _______ (not / make) noise during the exam!",
    blanks: [
      {
        index: 1,
        clue: "sit",
        answers: ["sit"]
      },
      {
        index: 2,
        clue: "not / make",
        answers: ["don't make", "do not make"]
      }
    ],
    explanation: "Emir cümlelerinde özne kullanılmaz: olumlu 'sit', olumsuz 'don't make'."
  },
  {
    id: 7030,
    category: "grammar_test",
    topic: "Prepositions of Time (In / On / At)",
    sentence: "Our flight leaves _______ 08:30 _______ Monday morning _______ July.",
    blanks: [
      {
        index: 1,
        clue: "at / on / in",
        answers: ["at"]
      },
      {
        index: 2,
        clue: "at / on / in",
        answers: ["on"]
      },
      {
        index: 3,
        clue: "at / on / in",
        answers: ["in"]
      }
    ],
    explanation: "Saatlerde 'at' (at 08:30), günlerde 'on' (on Monday), aylarda 'in' (in July) kullanılır."
  },
  {
    id: 7031,
    category: "grammar_test",
    topic: "Linking Words (Because vs So)",
    sentence: "It was raining heavily, _______ (so / because) we decided to stay at home.",
    blanks: [
      {
        index: 1,
        clue: "so / because",
        answers: ["so"]
      }
    ],
    explanation: "Sonuç bildiren bağlaç 'so' (bu yüzden). 'Yağmur yağıyordu, bu yüzden evde kaldık.'"
  },

  // =========================================================================
  // 7. CONDITIONALS & ADVANCED
  // =========================================================================
  {
    id: 7032,
    category: "grammar_test",
    topic: "First Conditional",
    sentence: "If it _______ (rain) tomorrow, we _______ (cancel) the outdoor match.",
    blanks: [
      {
        index: 1,
        clue: "rain",
        answers: ["rains"]
      },
      {
        index: 2,
        clue: "cancel",
        answers: ["will cancel", "'ll cancel"]
      }
    ],
    explanation: "First Conditional kuralı: If + Present Simple (rains), Main clause: will + V1 (will cancel)."
  },
  {
    id: 7033,
    category: "grammar_test",
    topic: "Zero Conditional",
    sentence: "If you _______ (heat) ice, it _______ (melt).",
    blanks: [
      {
        index: 1,
        clue: "heat",
        answers: ["heat"]
      },
      {
        index: 2,
        clue: "melt",
        answers: ["melts"]
      }
    ],
    explanation: "Bilimsel genel doğrular (Zero Conditional): Her iki taraf da Present Simple olur (heat / melts)."
  },
  {
    id: 7034,
    category: "grammar_test",
    topic: "For vs Since",
    sentence: "They have lived in this city _______ (for / since) ten years, but I have been here only _______ (for / since) 2022.",
    blanks: [
      {
        index: 1,
        clue: "for / since",
        answers: ["for"]
      },
      {
        index: 2,
        clue: "for / since",
        answers: ["since"]
      }
    ],
    explanation: "Süreç uzunluğu için 'for' (for ten years), başlangıç noktası için 'since' (since 2022)."
  },
  {
    id: 7035,
    category: "grammar_test",
    topic: "Reported Speech (Basic)",
    sentence: "Direct: 'I am tired.' → Indirect: He said that he _______ (be) tired.",
    blanks: [
      {
        index: 1,
        clue: "be",
        answers: ["was"]
      }
    ],
    explanation: "Dolaylı aktarmada 'said' geçmiş zaman olduğu için 'am' fiili geçmiş zamana (was) dönüşür."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GRAMMAR_TEST_DATA;
}
