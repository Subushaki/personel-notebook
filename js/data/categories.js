// ===== PERSONEL NOTEBOOK - KATEGORİ TANIMLARI =====
// İleride yeni bir kategori eklemek için bu listeye yeni bir obje eklemek yeterlidir!

const CATEGORIES = [
  {
    id: "vocab",
    name: "Kelimeler",
    subtitle: "Vocabulary Hub",
    icon: "📖",
    description: "Kurs ve genel İngilizce kelime hazinesi",
    color: "#3b82f6",
    modes: [
      { id: "en-tr", label: "İngilizce → Türkçe", icon: "🇬🇧 → 🇹🇷" },
      { id: "tr-en", label: "Türkçe → İngilizce", icon: "🇹🇷 → 🇬🇧" }
    ],
    supportsStudy: true
  },
  {
    id: "grammar",
    name: "Gramer & Formüller",
    subtitle: "Formula & Grammar Hub",
    icon: "⚡",
    description: "Formülü gör konuyu yaz veya cümle boşluk doldurma testi yap!",
    color: "#8b5cf6",
    modes: [
      { id: "formula-topic", label: "Formül Quizi", icon: "📐 → ✍️" },
      { id: "gap-fill", label: "Gramer Testi (Boşluk Doldurma)", icon: "📝 → 🔤" }
    ],
    supportsStudy: true,
    isGrammar: true
  },
  {
    id: "sentences",
    name: "Cümleler & Kalıplar",
    subtitle: "Daily Sentences",
    icon: "💬",
    description: "Günlük diyaloglar ve pratik konuşma kalıpları",
    color: "#10b981",
    modes: [
      { id: "en-tr", label: "İngilizce → Türkçe", icon: "🇬🇧 → 🇹🇷" },
      { id: "tr-en", label: "Türkçe → İngilizce", icon: "🇹🇷 → 🇬🇧" }
    ],
    supportsStudy: true
  },
  {
    id: "idioms",
    name: "Deyimler",
    subtitle: "Idioms & Expressions",
    icon: "🎭",
    description: "En sık kullanılan deyimler ve mecazi ifadeler",
    color: "#f59e0b",
    modes: [
      { id: "en-tr", label: "İngilizce → Türkçe", icon: "🇬🇧 → 🇹🇷" },
      { id: "tr-en", label: "Türkçe → İngilizce", icon: "🇹🇷 → 🇬🇧" }
    ],
    supportsStudy: true
  },
  {
    id: "times",
    name: "Saatler & Zaman",
    subtitle: "Telling Time & Hours",
    icon: "⏰",
    description: "Analog/dijital saat okuma ve zaman terimleri",
    color: "#ec4899",
    modes: [
      { id: "en-tr", label: "Saat → Okunuşu", icon: "⏰ → 🇬🇧" },
      { id: "tr-en", label: "Okunuş → Türkçe", icon: "🇬🇧 → 🇹🇷" }
    ],
    hasTimeFilters: true,
    supportsStudy: true
  },
  {
    id: "phrasal_verbs",
    name: "Phrasal Verbs",
    subtitle: "Deyimsel Fiiller",
    icon: "🔄",
    description: "İngilizcenin olmazsa olmazı fiil + edat kalıpları",
    color: "#06b6d4",
    modes: [
      { id: "en-tr", label: "İngilizce → Türkçe", icon: "🇬🇧 → 🇹🇷" },
      { id: "tr-en", label: "Türkçe → İngilizce", icon: "🇹🇷 → 🇬🇧" }
    ],
    supportsStudy: true
  },
  {
    id: "irregular_verbs",
    name: "Düzensiz Fiiller",
    subtitle: "V1 - V2 - V3 Çekimleri",
    icon: "📊",
    description: "Fiillerin 1., 2. ve 3. halleri ve Türkçe anlamları",
    color: "#f97316",
    modes: [
      { id: "en-tr", label: "V1 → Türkçe", icon: "🇬🇧 → 🇹🇷" },
      { id: "tr-en", label: "Türkçe → V1/V2/V3", icon: "🇹🇷 → 🇬🇧" }
    ],
    supportsStudy: true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CATEGORIES;
}
