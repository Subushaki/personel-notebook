// ===== PERSONEL NOTEBOOK - DÜZENSİZ FİİLLER (IRREGULAR VERBS) =====
// V1 (Base), V2 (Past Simple), V3 (Past Participle) ve Türkçe anlamları

const IRREGULAR_VERBS_DATA = [
  { id: 10001, category: "irregular_verbs", en: "Be - Was/Were - Been", tr: "Olmak", hintEn: "V1: Be, V2: Was/Were, V3: Been", hintTr: "Olmak fiili" },
  { id: 10002, category: "irregular_verbs", en: "Become - Became - Become", tr: "Haline gelmek / Olmak", hintEn: "V1: Become, V2: Became, V3: Become", hintTr: "Dönüşmek, bir durum halini almak" },
  { id: 10003, category: "irregular_verbs", en: "Begin - Began - Begun", tr: "Başlamak", hintEn: "V1: Begin, V2: Began, V3: Begun", hintTr: "Bir eyleme başlamak" },
  { id: 10004, category: "irregular_verbs", en: "Break - Broke - Broken", tr: "Kırmak / Bozulmak", hintEn: "V1: Break, V2: Broke, V3: Broken", hintTr: "Parçalamak veya kırılmak" },
  { id: 10005, category: "irregular_verbs", en: "Bring - Brought - Brought", tr: "Getirmek", hintEn: "V1: Bring, V2: Brought, V3: Brought", hintTr: "Bir şeyi yanında taşımak/getirmek" },
  { id: 10006, category: "irregular_verbs", en: "Build - Built - Built", tr: "İnşa etmek / Kurmak", hintEn: "V1: Build, V2: Built, V3: Built", hintTr: "Bina veya yapı oluşturmak" },
  { id: 10007, category: "irregular_verbs", en: "Buy - Bought - Bought", tr: "Satın almak", hintEn: "V1: Buy, V2: Bought, V3: Bought", hintTr: "Parayla ürün satın almak" },
  { id: 10008, category: "irregular_verbs", en: "Catch - Caught - Caught", tr: "Yakalamak / Tutmak", hintEn: "V1: Catch, V2: Caught, V3: Caught", hintTr: "Topu veya kaçan bir şeyi tutmak" },
  { id: 10009, category: "irregular_verbs", en: "Choose - Chose - Chosen", tr: "Seçmek", hintEn: "V1: Choose, V2: Chose, V3: Chosen", hintTr: "Birçok seçenek arasından tercih yapmak" },
  { id: 10010, category: "irregular_verbs", en: "Come - Came - Come", tr: "Gelmek", hintEn: "V1: Come, V2: Came, V3: Come", hintTr: "Bir yere varmak veya yaklaşmak" },
  { id: 10011, category: "irregular_verbs", en: "Cost - Cost - Cost", tr: "Mal olmak / Değerinde olmak", hintEn: "V1: Cost, V2: Cost, V3: Cost", hintTr: "Fiyatı bir tutar olmak" },
  { id: 10012, category: "irregular_verbs", en: "Do - Did - Done", tr: "Yapmak", hintEn: "V1: Do, V2: Did, V3: Done", hintTr: "Bir işi icra etmek" },
  { id: 10013, category: "irregular_verbs", en: "Draw - Drew - Drawn", tr: "Çizmek / Çekmek", hintEn: "V1: Draw, V2: Drew, V3: Drawn", hintTr: "Resim çizmek" },
  { id: 10014, category: "irregular_verbs", en: "Drink - Drank - Drunk", tr: "İçmek", hintEn: "V1: Drink, V2: Drank, V3: Drunk", hintTr: "Sıvı tüketmek" },
  { id: 10015, category: "irregular_verbs", en: "Drive - Drove - Driven", tr: "Araba sürmek", hintEn: "V1: Drive, V2: Drove, V3: Driven", hintTr: "Araç kullanmak" },
  { id: 10016, category: "irregular_verbs", en: "Eat - Ate - Eaten", tr: "Yemek yemek", hintEn: "V1: Eat, V2: Ate, V3: Eaten", hintTr: "Besin tüketmek" },
  { id: 10017, category: "irregular_verbs", en: "Fall - Fell - Fallen", tr: "Düşmek", hintEn: "V1: Fall, V2: Fell, V3: Fallen", hintTr: "Yere düşmek" },
  { id: 10018, category: "irregular_verbs", en: "Feel - Felt - Felt", tr: "Hissetmek", hintEn: "V1: Feel, V2: Felt, V3: Felt", hintTr: "Duygu veya fiziksel temas hissetmek" },
  { id: 10019, category: "irregular_verbs", en: "Find - Found - Found", tr: "Bulmak", hintEn: "V1: Find, V2: Found, V3: Found", hintTr: "Kayıp bir şeyi keşfetmek" },
  { id: 10020, category: "irregular_verbs", en: "Fly - Flew - Flown", tr: "Uçmak", hintEn: "V1: Fly, V2: Flew, V3: Flown", hintTr: "Havada süzülmek" },
  { id: 10021, category: "irregular_verbs", en: "Forget - Forgot - Forgotten", tr: "Unutmak", hintEn: "V1: Forget, V2: Forgot, V3: Forgotten", hintTr: "Hatırlayamamak" },
  { id: 10022, category: "irregular_verbs", en: "Get - Got - Got / Gotten", tr: "Elde etmek / Almak / Olmak", hintEn: "V1: Get, V2: Got, V3: Got/Gotten", hintTr: "Edinmek veya duruma girmek" },
  { id: 10023, category: "irregular_verbs", en: "Give - Gave - Given", tr: "Vermek", hintEn: "V1: Give, V2: Gave, V3: Given", hintTr: "Bir şeyi birine teslim etmek" },
  { id: 10024, category: "irregular_verbs", en: "Go - Went - Gone", tr: "Gitmek", hintEn: "V1: Go, V2: Went, V3: Gone", hintTr: "Bir yerden başka yere hareket etmek" },
  { id: 10025, category: "irregular_verbs", en: "Have - Had - Had", tr: "Sahip olmak", hintEn: "V1: Have, V2: Had, V3: Had", hintTr: "Mülkiyetinde bulundurmak" },
  { id: 10026, category: "irregular_verbs", en: "Hear - Heard - Heard", tr: "Duymak", hintEn: "V1: Hear, V2: Heard, V3: Heard", hintTr: "Kulakla ses algılamak" },
  { id: 10027, category: "irregular_verbs", en: "Know - Knew - Known", tr: "Bilmek / Tanımak", hintEn: "V1: Know, V2: Knew, V3: Known", hintTr: "Bilgi sahibi olmak veya birini tanımak" },
  { id: 10028, category: "irregular_verbs", en: "Leave - Left - Left", tr: "Ayrılmak / Bırakmak", hintEn: "V1: Leave, V2: Left, V3: Left", hintTr: "Bir mekandan çıkmak veya eşya terk etmek" },
  { id: 10029, category: "irregular_verbs", en: "Lose - Lost - Lost", tr: "Kaybetmek", hintEn: "V1: Lose, V2: Lost, V3: Lost", hintTr: "Eşyayı veya maçı kaybetmek" },
  { id: 10030, category: "irregular_verbs", en: "Make - Made - Made", tr: "Yapmak / Üretmek", hintEn: "V1: Make, V2: Made, V3: Made", hintTr: "Yeni bir şey ortaya koymak" }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = IRREGULAR_VERBS_DATA;
}
