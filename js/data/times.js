// ===== PERSONEL NOTEBOOK - SAATLER VE ZAMAN İFADELERİ HAVUZU =====
// Zaman kavramları, analog/dijital saat terimleri ve zarflar

const TIMES_DATA = [
  { id: 7001, category: "times", en: "O'clock", tr: "Tam Saat", hintEn: "Used for exact hours. (e.g. It's five o'clock)", hintTr: "Tam saatleri belirtir. (Örn: Saat tam 5)" },
  { id: 7002, category: "times", en: "Half past", tr: "Buçuk", hintEn: "30 minutes past the hour. (e.g. Half past two)", hintTr: "Saati 30 dakika geçe, buçuk. (Örn: İki buçuk)" },
  { id: 7003, category: "times", en: "A quarter past", tr: "Çeyrek geçe", hintEn: "15 minutes after the hour.", hintTr: "Saati 15 dakika geçmesi." },
  { id: 7004, category: "times", en: "A quarter to", tr: "Çeyrek kala", hintEn: "15 minutes before the next hour.", hintTr: "Bir sonraki saate 15 dakika kalması." },
  { id: 7005, category: "times", en: "Past", tr: "Geçe", hintEn: "Minutes after the hour.", hintTr: "Saati geçmesi. (Örn: Ten past six)" },
  { id: 7006, category: "times", en: "To", tr: "Kala", hintEn: "Minutes before the next hour.", hintTr: "Bir sonraki saate kalması. (Örn: Twenty to eight)" },
  { id: 7007, category: "times", en: "Noon / Midday", tr: "Öğle vakti", hintEn: "12:00 PM in the middle of the day.", hintTr: "Gün ortası, saat 12:00." },
  { id: 7008, category: "times", en: "Midnight", tr: "Gece yarısı", hintEn: "12:00 AM at night.", hintTr: "Gecenin tam ortası, saat 00:00." },
  { id: 7009, category: "times", en: "Sunrise / Dawn", tr: "Gündoğumu / Şafak", hintEn: "When the sun comes up in the morning.", hintTr: "Sabah güneşin doğduğu vakit." },
  { id: 7010, category: "times", en: "Sunset / Dusk", tr: "Günbatımı / Alacakaranlık", hintEn: "When the sun goes down in the evening.", hintTr: "Akşam güneşin battığı vakit." },
  { id: 7011, category: "times", en: "AM", tr: "Öğleden önce", hintEn: "Time from midnight to noon (Ante Meridiem).", hintTr: "Gece yarısından öğlene kadar olan zaman dilimi." },
  { id: 7012, category: "times", en: "PM", tr: "Öğleden sonra", hintEn: "Time from noon to midnight (Post Meridiem).", hintTr: "Öğleden gece yarısına kadar olan zaman dilimi." },
  { id: 7013, category: "times", en: "On time", tr: "Tam vaktinde", hintEn: "Not late, at the exact correct time (punctual).", hintTr: "Geç kalmadan, tam beklenen saatte (Dakik)." },
  { id: 7014, category: "times", en: "In time", tr: "Vakitlice / Yetişecek şekilde", hintEn: "Early enough to do something before a deadline.", hintTr: "Bir şeye ucu ucuna ya da tam zamanında yetişmek." },
  { id: 7015, category: "times", en: "Early", tr: "Erken", hintEn: "Before the usual or planned time.", hintTr: "Planlanan zamandan önce." },
  { id: 7016, category: "times", en: "Late", tr: "Geç", hintEn: "After the usual or planned time.", hintTr: "Planlanan zamandan sonra." },
  { id: 7017, category: "times", en: "Watch", tr: "Kol saati", hintEn: "A small clock you wear on your arm.", hintTr: "Koluna taktığın küçük saat." },
  { id: 7018, category: "times", en: "Clock", tr: "Duvar saati", hintEn: "A machine that shows time on a wall.", hintTr: "Zamanı gösteren ve duvara asılan makine." },
  { id: 7019, category: "times", en: "Second", tr: "Saniye", hintEn: "A very short time. 60 in a minute.", hintTr: "Çok kısa zaman ölçüsü, dakikanın 60'ta 1'i." },
  { id: 7020, category: "times", en: "Minute", tr: "Dakika", hintEn: "60 seconds of time.", hintTr: "60 saniyelik zaman ölçüsü." },
  { id: 7021, category: "times", en: "Hour", tr: "Saat", hintEn: "60 minutes of time.", hintTr: "60 dakikalık zaman ölçüsü." },
  { id: 7022, category: "times", en: "Schedule / Timetable", tr: "Zaman çizelgesi / Tarife", hintEn: "A list of times when things will happen.", hintTr: "Otobüs, tren veya ders saatlerini gösteren plan." },
  { id: 7023, category: "times", en: "Fortnight", tr: "İki haftalık süre", hintEn: "A period of 14 days (two weeks).", hintTr: "Tam iki haftadan oluşan 14 günlük süre." },
  { id: 7024, category: "times", en: "Decade", tr: "On yıl", hintEn: "A period of 10 years.", hintTr: "10 yıllık zaman dilimi." },
  { id: 7025, category: "times", en: "Century", tr: "Yüzyıl / Asır", hintEn: "A period of 100 years.", hintTr: "100 yıllık zaman dilimi." },
  { id: 7026, category: "times", en: "Millennium", tr: "Binyıl", hintEn: "A period of 1000 years.", hintTr: "1000 yıllık zaman dilimi." },
  { id: 7027, category: "times", en: "Nowadays", tr: "Bugünlerde", hintEn: "In the present time, these days.", hintTr: "Şu anki günlerde, son zamanlarda." },
  { id: 7028, category: "times", en: "At the moment", tr: "Şu anda", hintEn: "Right now.", hintTr: "Konuşmanın yapıldığı o an." },
  { id: 7029, category: "times", en: "Run out of time", tr: "Zamanın tükenmesi", hintEn: "To have no more time left.", hintTr: "Bir iş için ayrılan vaktin bitmesi." },
  { id: 7030, category: "times", en: "Take your time", tr: "Acele etme", hintEn: "Don't hurry, use the time you need.", hintTr: "Acelesi yok, vaktini alabilirsin." },
  { id: 7031, category: "times", en: "Pass the time", tr: "Zaman geçirmek", hintEn: "To do something while waiting.", hintTr: "Beklerken boş durmayıp bir şeylerle vakit öldürmek." },
  { id: 7032, category: "times", en: "Free time / Spare time", tr: "Boş zaman", hintEn: "Time when you don't have to work.", hintTr: "Çalışmak zorunda olmadığın serbest zaman." },
  { id: 7033, category: "times", en: "Punctual", tr: "Dakik", hintEn: "Always arriving at the exact right time.", hintTr: "Her yere tam vaktinde giden, hiç geç kalmayan." },
  { id: 7034, category: "times", en: "Behind schedule", tr: "Planın / Programın gerisinde", hintEn: "Running late according to the planned timetable.", hintTr: "Planlanan zamana göre gecikmiş durumda olmak." }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TIMES_DATA;
}
