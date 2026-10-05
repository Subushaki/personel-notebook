// ===== PERSONEL NOTEBOOK - DEYİMLER HAVUZU (IDIOMS & EXPRESSIONS) =====
// Popüler İngilizce deyimler, Türkçe anlamları ve ipuçları

const IDIOMS_DATA = [
  { id: 5001, category: "idioms", en: "A piece of cake", tr: "Çok kolay, çocuk oyuncağı", hintEn: "Something that is very easy to do.", hintTr: "Yapması son derece basit ve zahmetsiz iş." },
  { id: 5002, category: "idioms", en: "Break a leg", tr: "İyi şanslar", hintEn: "Used to wish someone good luck, especially before a performance.", hintTr: "Sınav, sahne veya gösteri öncesi iyi şanslar dileği." },
  { id: 5003, category: "idioms", en: "Under the weather", tr: "Hafif hasta hissetmek, keyifsiz olmak", hintEn: "Feeling slightly unwell or sick.", hintTr: "Kendini hafif kırgın veya hasta hissetme." },
  { id: 5004, category: "idioms", en: "Once in a blue moon", tr: "Ayda yılda bir, çok nadir", hintEn: "Happening very rarely.", hintTr: "Çok ender, neredeyse hiç olmayan durumlar için söylenir." },
  { id: 5005, category: "idioms", en: "Call it a day", tr: "Bugünlük bu kadar yeter, paydos etmek", hintEn: "To stop working on something for the rest of the day.", hintTr: "Çalışmayı bırakıp günü sonlandırmak." },
  { id: 5006, category: "idioms", en: "So far, so good", tr: "Şu ana kadar her şey yolunda", hintEn: "Things have gone well up to this point.", hintTr: "Şu ana dek işlerin iyi gittiğini belirtme." },
  { id: 5007, category: "idioms", en: "Time flies", tr: "Zaman su gibi akıp geçiyor", hintEn: "Time passes very quickly.", hintTr: "Vaktin çok hızlı akıp gitmesi." },
  { id: 5008, category: "idioms", en: "Better late than never", tr: "Geç olsun güç olmasın", hintEn: "It is better to do something late than never do it at all.", hintTr: "Hiç yapmamaktansa geç yapmak daha iyidir." },
  { id: 5009, category: "idioms", en: "Keep an eye on", tr: "Göz kulak olmak, dikkat etmek", hintEn: "To watch or take care of something carefully.", hintTr: "Bir şeye ya da birine dikkatle bakmak/korumak." },
  { id: 5010, category: "idioms", en: "Out of the blue", tr: "Durup dururken, aniden", hintEn: "Completely unexpectedly.", hintTr: "Hiç beklenmedik anda, birdenbire ortaya çıkan." },
  { id: 5011, category: "idioms", en: "Cost an arm and a leg", tr: "Çok pahalı olmak, ateş pahası", hintEn: "To be extremely expensive.", hintTr: "Fiyatı aşırı derecede yüksek olan şeyler." },
  { id: 5012, category: "idioms", en: "Bite the bullet", tr: "Dişini sıkmak, katlanmak", hintEn: "To force yourself to do something difficult or unpleasant.", hintTr: "Zor ve kaçınılmaz bir duruma katlanıp göğüs germek." },
  { id: 5013, category: "idioms", en: "Spill the beans", tr: "Ağzındaki baklayı çıkarmak, sırrı vermek", hintEn: "To reveal a secret by mistake or on purpose.", hintTr: "Gizli tutulan bir bilgiyi ortaya dökmek." },
  { id: 5014, category: "idioms", en: "Hit the sack / Hit the bed", tr: "Kafayı vurup yatmak, uyumaya gitmek", hintEn: "To go to bed to sleep.", hintTr: "Yorulup yatağa yatmak." },
  { id: 5015, category: "idioms", en: "Raining cats and dogs", tr: "Bardaktan boşanırcasına yağmur yağması", hintEn: "Raining very heavily.", hintTr: "Çok şiddetli yağmur yağması." },
  { id: 5016, category: "idioms", en: "Pull someone's leg", tr: "Biriyle kafa bulmak, işletmek", hintEn: "To tease someone in a playful way.", hintTr: "Şaka yollu birine takılmak, alaya almak." },
  { id: 5017, category: "idioms", en: "Miss the boat", tr: "Fırsatı kaçırmak", hintEn: "To lose an opportunity by acting too slowly.", hintTr: "Geç kalarak iyi bir fırsatı elden kaçırmak." },
  { id: 5018, category: "idioms", en: "To be on the same page", tr: "Aynı fikirde olmak, aynı noktada buluşmak", hintEn: "To have the same understanding or agreement.", hintTr: "Biriyle ortak bir anlayışta ve fikirde olmak." },
  { id: 5019, category: "idioms", en: "Let the cat out of the bag", tr: "Sırrı yanlışlıkla ağzından kaçırmak", hintEn: "To accidentally disclose a secret.", hintTr: "İstemeden bir sırrı herkese duyurmak." },
  { id: 5020, category: "idioms", en: "Beat around the bush", tr: "Lafı dolandırmak, sadede gelmemek", hintEn: "To avoid talking about what is important.", hintTr: "Asıl konuyu söylemeyip gereksiz uzatmak." },
  { id: 5021, category: "idioms", en: "No pain, no gain", tr: "Emek olmadan yemek olmaz", hintEn: "You have to work hard to achieve results.", hintTr: "Zahmet çekmeden başarıya ulaşılamaz." },
  { id: 5022, category: "idioms", en: "Rule of thumb", tr: "Genel kural, pratik kural", hintEn: "A practical principle based on experience.", hintTr: "Deneyimlere dayanan pratik kılavuz." },
  { id: 5023, category: "idioms", en: "Give a hand", tr: "Yardım eli uzatmak, yardım etmek", hintEn: "To help someone with something.", hintTr: "Bir işe yardım etmek." },
  { id: 5024, category: "idioms", en: "Hold your horses", tr: "Acele etme, sabırlı ol", hintEn: "Wait a moment and be patient.", hintTr: "Sakin ol ve biraz bekle anlamında." },
  { id: 5025, category: "idioms", en: "In the same boat", tr: "Aynı gemide olmak, aynı zor durumu paylaşmak", hintEn: "In the same difficult situation.", hintTr: "Aynı sıkıntılı vaziyette bulunmak." },
  { id: 5026, category: "idioms", en: "Make up your mind", tr: "Karar vermek", hintEn: "To make a decision.", hintTr: "İki veya daha fazla seçenek arasında kesin karara varmak." },
  { id: 5027, category: "idioms", en: "Take it easy", tr: "Sakin ol, kafana takma", hintEn: "Relax and do not panic.", hintTr: "Gevşe ve dert etme." },
  { id: 5028, category: "idioms", en: "Catch someone red-handed", tr: "Birini suçüstü yakalamak", hintEn: "To catch someone in the act of doing wrong.", hintTr: "Kötü bir iş yaparken tam o anda yakalanmak." },
  { id: 5029, category: "idioms", en: "See eye to eye", tr: "Biriyle tamamen aynı görüşte olmak", hintEn: "To agree completely with someone.", hintTr: "Bir kişiyle tam olarak uyuşmak." },
  { id: 5030, category: "idioms", en: "Add fuel to the fire", tr: "Yangına körükle gitmek", hintEn: "To make a bad situation even worse.", hintTr: "Kötü bir durumu daha da alevlendirmek." },
  { id: 5031, category: "idioms", en: "Burn the midnight oil", tr: "Gece yarılarına kadar çalışmak", hintEn: "To work or study late into the night.", hintTr: "Sınav veya proje için geç saatlere kadar dirsek çürütmek." },
  { id: 5032, category: "idioms", en: "Cry over spilled milk", tr: "Olmuşla ölmüşe çare aramak, boşuna üzülmek", hintEn: "To be upset about things that have already happened and cannot be changed.", hintTr: "Değiştirilemeyecek geçmiş bir olay için faydasızca üzülmek." },
  { id: 5033, category: "idioms", en: "Curiosity killed the cat", tr: "Fazla merak başa bela açar", hintEn: "Being too inquisitive can lead to danger.", hintTr: "Gereğinden fazla merakın zararlı olabileceğini hatırlatır." },
  { id: 5034, category: "idioms", en: "Cut corners", tr: "İşin kolayına kaçmak, baştan savma yapmak", hintEn: "To do something in an easy or cheap way that sacrifices quality.", hintTr: "Maliyet veya emekten kaçıp kaliteden ödün vermek." },
  { id: 5035, category: "idioms", en: "Every cloud has a silver lining", tr: "Her şerde bir hayır vardır", hintEn: "Every difficult situation has a hopeful aspect.", hintTr: "Her kötü durumun içinde olumlu bir taraf bulunabilir." },
  { id: 5036, category: "idioms", en: "Hit the nail on the head", tr: "Tam üstüne basmak, taşı gediğine koymak", hintEn: "To describe exactly what is causing a situation or problem.", hintTr: "Bir gerçeği veya sebebi tam on ikiden ifade etmek." },
  { id: 5037, category: "idioms", en: "Kill two birds with one stone", tr: "Bir taşla iki kuş vurmak", hintEn: "To achieve two things with a single action.", hintTr: "Tek bir hamleyle iki faydalı sonuca ulaşmak." },
  { id: 5038, category: "idioms", en: "Speak of the devil", tr: "İti an çomağı hazırla / İyi insan lafının üstüne gelir", hintEn: "When the person you were talking about arrives unexpectedly.", hintTr: "Hakkında konuşulan kişinin tam o anda gelmesi." },
  { id: 5039, category: "idioms", en: "The best of both worlds", tr: "Her iki durumun da avantajına sahip olmak", hintEn: "A situation where you can enjoy two different advantages at once.", hintTr: "İki farklı seçeneğin de en iyi taraflarından faydalanmak." },
  { id: 5040, category: "idioms", en: "Your guess is as good as mine", tr: "Benim de senin kadar hiçbir fikrim yok", hintEn: "I know as little about this as you do.", hintTr: "Ben de seninle aynı derecede bilgisizim." }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = IDIOMS_DATA;
}
