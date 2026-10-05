// ===== PERSONEL NOTEBOOK - GÜNLÜK VE KALIP CÜMLELER HAVUZU =====
// Günlük konuşma, seyahat, restoran, alışveriş ve diyalog cümleleri

const SENTENCES_DATA = [
  {
    id: 3001,
    category: "sentences",
    en: "Could you give me a hand?",
    tr: "Bana yardım edebilir misiniz?",
    hintEn: "Asking someone politely for help.",
    hintTr: "Birinden kibarca yardım isteme kalıbı."
  },
  {
    id: 3002,
    category: "sentences",
    en: "What do you mean by that?",
    tr: "Bununla ne demek istiyorsun?",
    hintEn: "Asking for clarification.",
    hintTr: "Karşı tarafın ne kastettiğini sorma."
  },
  {
    id: 3003,
    category: "sentences",
    en: "How long does it take to get there?",
    tr: "Oraya gitmek ne kadar sürer?",
    hintEn: "Asking about travel duration.",
    hintTr: "Yolculuk süresini sorma kalıbı."
  },
  {
    id: 3004,
    category: "sentences",
    en: "I am looking forward to hearing from you.",
    tr: "Sizden haber almayı dört gözle bekliyorum.",
    hintEn: "Common formal email closing sentence.",
    hintTr: "Resmi e-postalarda sıkça kullanılan kapanış cümlesi."
  },
  {
    id: 3005,
    category: "sentences",
    en: "It doesn't make any sense.",
    tr: "Hiçbir mantığı yok / Hiç mantıklı gelmiyor.",
    hintEn: "When something is illogical or confusing.",
    hintTr: "Bir durum anlamsız veya mantıksız geldiğinde söylenir."
  },
  {
    id: 3006,
    category: "sentences",
    en: "I have no idea what you are talking about.",
    tr: "Neden bahsettiğin hakkında hiçbir fikrim yok.",
    hintEn: "Expressing total lack of information.",
    hintTr: "Hiçbir şey bilmediğini belirtme."
  },
  {
    id: 3007,
    category: "sentences",
    en: "Can I take your order, please?",
    tr: "Siparişinizi alabilir miyim lütfen?",
    hintEn: "Waiter asking a customer in a restaurant.",
    hintTr: "Garsonun müşteriye sipariş sorması."
  },
  {
    id: 3008,
    category: "sentences",
    en: "Would you like something to drink?",
    tr: "İçecek bir şey ister misiniz?",
    hintEn: "Polite offer for a beverage.",
    hintTr: "Kibarca içecek ikram etme veya teklif etme."
  },
  {
    id: 3009,
    category: "sentences",
    en: "Could we have the bill, please?",
    tr: "Hesabı alabilir miyiz lütfen?",
    hintEn: "Asking for the check in a restaurant or cafe.",
    hintTr: "Restoranda hesap isteme."
  },
  {
    id: 3010,
    category: "sentences",
    en: "Do you mind if I open the window?",
    tr: "Pencereyi açmamın bir sakıncası var mı?",
    hintEn: "Very polite way to ask for permission.",
    hintTr: "Çok kibar bir izin isteme kalıbı."
  },
  {
    id: 3011,
    category: "sentences",
    en: "Never mind, it's not important.",
    tr: "Boşver, önemli değil.",
    hintEn: "Telling someone not to worry about something.",
    hintTr: "Önemsiz bir şeyi dert etmemesini söyleme."
  },
  {
    id: 3012,
    category: "sentences",
    en: "Where is the nearest subway station?",
    tr: "En yakın metro istasyonu nerede?",
    hintEn: "Asking directions in a city.",
    hintTr: "Şehirde yol/istasyon sorma."
  },
  {
    id: 3013,
    category: "sentences",
    en: "How much does this cost?",
    tr: "Bunun fiyatı ne kadar?",
    hintEn: "Asking for the price of an item.",
    hintTr: "Bir ürünün fiyatını sorma."
  },
  {
    id: 3014,
    category: "sentences",
    en: "Can you speak a little slower, please?",
    tr: "Biraz daha yavaş konuşabilir misiniz lütfen?",
    hintEn: "When someone is speaking English too fast.",
    hintTr: "Karşıdaki kişi hızlı konuştuğunda rica etme."
  },
  {
    id: 3015,
    category: "sentences",
    en: "I agree with you completely.",
    tr: "Seninle tamamen aynı fikirdeyim.",
    hintEn: "Expressing strong agreement.",
    hintTr: "Fikir birliğini güçlü şekilde ifade etme."
  },
  {
    id: 3016,
    category: "sentences",
    en: "I am afraid I have to disagree.",
    tr: "Korkarım ki aynı fikirde değilim.",
    hintEn: "Polite disagreement.",
    hintTr: "Kibarca katılmadığını bildirme."
  },
  {
    id: 3017,
    category: "sentences",
    en: "What seems to be the problem?",
    tr: "Sorun nedir acaba? / Problem ne gibi görünüyor?",
    hintEn: "Doctor or customer support asking about an issue.",
    hintTr: "Doktorun veya görevlinin sorunu öğrenmek için sorması."
  },
  {
    id: 3018,
    category: "sentences",
    en: "I will get back to you as soon as possible.",
    tr: "Size en kısa sürede geri dönüş yapacağım.",
    hintEn: "Promising to reply quickly in communication.",
    hintTr: "İletişimde en kısa zamanda döneceğini bildirme."
  },
  {
    id: 3019,
    category: "sentences",
    en: "Make yourself at home.",
    tr: "Kendi evindeymiş gibi rahat et.",
    hintEn: "Welcoming a guest warmly into your house.",
    hintTr: "Misafire rahat etmesini söyleme kalıbı."
  },
  {
    id: 3020,
    category: "sentences",
    en: "It was nice meeting you.",
    tr: "Sizinle tanışmak çok güzeldi.",
    hintEn: "Said at the end of a first meeting.",
    hintTr: "İlk tanışma sonrası ayrılırken söylenen cümle."
  },
  {
    id: 3021,
    category: "sentences",
    en: "Keep up the good work!",
    tr: "Aynen böyle devam et! / İyi çalışmayı sürdür!",
    hintEn: "Encouraging someone who is doing well.",
    hintTr: "Birini motive etmek için söylenen ifade."
  },
  {
    id: 3022,
    category: "sentences",
    en: "I haven't seen you in ages!",
    tr: "Seni asırlardır görmüyorum! / Çok uzun zamandır görüşemedik!",
    hintEn: "When seeing an old friend after a long time.",
    hintTr: "Uzun süre sonra eski bir dostu görünce söylenir."
  },
  {
    id: 3023,
    category: "sentences",
    en: "Let me know if you need anything.",
    tr: "Bir şeye ihtiyacın olursa bana haber ver.",
    hintEn: "Offering assistance to a friend or colleague.",
    hintTr: "Yardım teklif etme kalıbı."
  },
  {
    id: 3024,
    category: "sentences",
    en: "That sounds like a great idea.",
    tr: "Kulağa harika bir fikir gibi geliyor.",
    hintEn: "Enthusiastic approval of a suggestion.",
    hintTr: "Bir öneriyi heyecanla onaylama."
  },
  {
    id: 3025,
    category: "sentences",
    en: "Sorry to keep you waiting.",
    tr: "Sizi beklettiğim için özür dilerim.",
    hintEn: "Apology for a delay.",
    hintTr: "Gecikme durumunda dilenen özür."
  },
  {
    id: 3026,
    category: "sentences",
    en: "Are you free this weekend?",
    tr: "Bu hafta sonu müsait misin?",
    hintEn: "Asking someone about their weekend plans.",
    hintTr: "Hafta sonu planını sorma."
  },
  {
    id: 3027,
    category: "sentences",
    en: "I didn't catch that, could you repeat?",
    tr: "Tam duyamadım / yakalayamadım, tekrar edebilir misiniz?",
    hintEn: "Asking someone to repeat what they said.",
    hintTr: "Söylenen şeyi tekrar ettirme kalıbı."
  },
  {
    id: 3028,
    category: "sentences",
    en: "It depends on the weather.",
    tr: "Hava durumuna bağlı.",
    hintEn: "Conditional statement based on weather.",
    hintTr: "Bir durumun havaya bağlı olduğunu belirtme."
  },
  {
    id: 3029,
    category: "sentences",
    en: "I am used to waking up early.",
    tr: "Erken uyanmaya alışkınım.",
    hintEn: "Describing a familiar habit.",
    hintTr: "Bir alışkanlığa aşina olduğunu anlatma."
  },
  {
    id: 3030,
    category: "sentences",
    en: "Have a safe flight!",
    tr: "İyi uçuşlar!",
    hintEn: "Wishing someone safe travel on an airplane.",
    hintTr: "Uçak yolculuğuna çıkana iyi dilek dileme."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SENTENCES_DATA;
}
