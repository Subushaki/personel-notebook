// ===== PERSONEL NOTEBOOK - PHRASAL VERBS (DEYİMSEL FİİLLER) =====
// En sık kullanılan fiil + edat kombinasyonları

const PHRASAL_VERBS_DATA = [
  { id: 9001, category: "phrasal_verbs", en: "Give up", tr: "Vazgeçmek / Bırakmak", hintEn: "To stop trying or quit a habit.", hintTr: "Bir alışkanlığı bırakmak veya mücadeleden vazgeçmek." },
  { id: 9002, category: "phrasal_verbs", en: "Look after", tr: "Göz kulak olmak / Bakmak", hintEn: "To take care of someone or something.", hintTr: "Birine veya bir şeye bakmak, ilgilenmek." },
  { id: 9003, category: "phrasal_verbs", en: "Look for", tr: "Aramak", hintEn: "To search for something you lost.", hintTr: "Kayıp bir şeyi veya birini bulmaya çalışmak." },
  { id: 9004, category: "phrasal_verbs", en: "Look forward to", tr: "Dört gözle beklemek", hintEn: "To feel excited about something in the future.", hintTr: "Gelecekteki bir olayı heyecanla beklemek." },
  { id: 9005, category: "phrasal_verbs", en: "Carry on", tr: "Devam etmek", hintEn: "To continue doing something.", hintTr: "Bir eylemi sürdürmek, devam ettirmek." },
  { id: 9006, category: "phrasal_verbs", en: "Find out", tr: "Öğrenmek / Keşfetmek", hintEn: "To discover a fact or piece of information.", hintTr: "Bir bilgiyi veya gerçeği ortaya çıkarmak/öğrenmek." },
  { id: 9007, category: "phrasal_verbs", en: "Get along with", tr: "Biriyle iyi anlaşmak", hintEn: "To have a friendly relationship with someone.", hintTr: "Biriyle iyi geçinmek, dostça ilişki kurmak." },
  { id: 9008, category: "phrasal_verbs", en: "Get on (the bus / train)", tr: "Binmek (otobüse, trene)", hintEn: "To enter a bus, train, or plane.", hintTr: "Toplu taşıma aracına adım atıp binmek." },
  { id: 9009, category: "phrasal_verbs", en: "Get off", tr: "İnmek (araçtan)", hintEn: "To leave a bus, train, or plane.", hintTr: "Taşıttan aşağı inmek." },
  { id: 9010, category: "phrasal_verbs", en: "Put off", tr: "Ertelemek", hintEn: "To postpone something to a later date.", hintTr: "Bir toplantı veya işi ileri bir tarihe bırakmak." },
  { id: 9011, category: "phrasal_verbs", en: "Put on", tr: "Giyinmek / Takmak", hintEn: "To wear clothes, shoes, or glasses.", hintTr: "Kıyafet, ayakkabı veya gözlük takmak/giymek." },
  { id: 9012, category: "phrasal_verbs", en: "Take off", tr: "Havalanmak (uçak) / Çıkarmak (kıyafet)", hintEn: "When a plane leaves the ground, or removing clothing.", hintTr: "Uçağın yerden kalkması veya üstünü çıkarmak." },
  { id: 9013, category: "phrasal_verbs", en: "Turn on", tr: "Açmak (ışık, cihaz)", hintEn: "To activate an electrical device.", hintTr: "Elektronik bir cihazı veya ışığı çalıştırmak." },
  { id: 9014, category: "phrasal_verbs", en: "Turn off", tr: "Kapatmak (cihaz, ışık)", hintEn: "To deactivate an electrical device.", hintTr: "Cihazı veya lambayı söndürmek/durdurmak." },
  { id: 9015, category: "phrasal_verbs", en: "Run out of", tr: "Bitmek / Tükenmek (benzin, para vb.)", hintEn: "To have none left of something.", hintTr: "Eldeki kaynağın tükenip bitmesi." },
  { id: 9016, category: "phrasal_verbs", en: "Break down", tr: "Bozulmak (araba, makine)", hintEn: "When a machine or vehicle stops working.", hintTr: "Aracın veya makinenin arıza yapıp durması." },
  { id: 9017, category: "phrasal_verbs", en: "Call off", tr: "İptal etmek", hintEn: "To cancel an event or meeting.", hintTr: "Planlanmış bir organizasyonu tamamen iptal etmek." },
  { id: 9018, category: "phrasal_verbs", en: "Wake up", tr: "Uyanmak", hintEn: "To stop sleeping.", hintTr: "Uykudan gözlerini açıp uyanmak." },
  { id: 9019, category: "phrasal_verbs", en: "Get up", tr: "Yataktan kalkmak / Ayağa kalkmak", hintEn: "To stand up or leave the bed.", hintTr: "Uyanıp yataktan bedenen kalkmak." },
  { id: 9020, category: "phrasal_verbs", en: "Come across", tr: "Tesadüfen karşılaşmak", hintEn: "To meet or find something by chance.", hintTr: "Bir şeyle veya biriyle şans eseri denk gelmek." },
  { id: 9021, category: "phrasal_verbs", en: "Grow up", tr: "Büyümek (çocukluktan yetişkinliğe)", hintEn: "To develop from a child into an adult.", hintTr: "Çocukluktan yetişkin bir insana dönüşmek." },
  { id: 9022, category: "phrasal_verbs", en: "Check in", tr: "Giriş yaptırmak (otel, havaalanı)", hintEn: "To register at a hotel or airport.", hintTr: "Otele veya uçuşa kayıt yaptırmak." },
  { id: 9023, category: "phrasal_verbs", en: "Check out", tr: "Otelden ayrılmak / İncelemek", hintEn: "To leave a hotel after paying, or inspect something.", hintTr: "Otelden ayrılış işlemlerini tamamlamak." },
  { id: 9024, category: "phrasal_verbs", en: "Set off / Set out", tr: "Yola çıkmak", hintEn: "To start a journey.", hintTr: "Bir seyahate veya yolculuğa başlamak." },
  { id: 9025, category: "phrasal_verbs", en: "Hold on", tr: "Beklemek (telefonda) / Dayanmak", hintEn: "Wait for a short time on the phone.", hintTr: "Kısa bir süre telefonda hatta beklemek." },
  { id: 9026, category: "phrasal_verbs", en: "Hang out", tr: "Vakit geçirmek / Takılmak", hintEn: "To spend time relaxing with friends.", hintTr: "Arkadaşlarla rahatça zaman öldürmek." },
  { id: 9027, category: "phrasal_verbs", en: "Fill in / Fill out", tr: "Doldurmak (form vb.)", hintEn: "To write information in an official form.", hintTr: "Bir anketi veya resmi formu yazı yazarak tamamlamak." },
  { id: 9028, category: "phrasal_verbs", en: "Give back", tr: "Geri vermek (emaneti)", hintEn: "To return something to its owner.", hintTr: "Ödünç alınan bir şeyi sahibine iade etmek." },
  { id: 9029, category: "phrasal_verbs", en: "Throw away", tr: "Çöpe atmak", hintEn: "To put something in the rubbish bin.", hintTr: "İşe yaramayan bir eşyayı çöpe göndermek." },
  { id: 9030, category: "phrasal_verbs", en: "Work out", tr: "Egzersiz yapmak / Çözmek", hintEn: "To exercise, or to solve a problem.", hintTr: "Spor salonunda idman yapmak veya sorunu çözüme kavuşturmak." }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PHRASAL_VERBS_DATA;
}
