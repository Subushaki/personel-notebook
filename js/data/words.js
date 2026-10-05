// ===== PERSONEL NOTEBOOK - BİRLEŞİK KELİME HAVUZU =====
// Kurs + Genel kelimelerin tekilleştirilmiş, temizlenmiş havuzu (864 Kelime)

const VOCAB_DATA = [
  {
    "id": 1001,
    "category": "vocab",
    "en": "Sky",
    "tr": "Gökyüzü",
    "hintEn": "The blue space above us.",
    "hintTr": "Üstümüzdeki mavi boşluk."
  },
  {
    "id": 1002,
    "category": "vocab",
    "en": "Wood",
    "tr": "Ağaçlık",
    "hintEn": "A small area with many trees.",
    "hintTr": "Çok sayıda ağacın olduğu küçük alan."
  },
  {
    "id": 1003,
    "category": "vocab",
    "en": "Hill",
    "tr": "Tepe",
    "hintEn": "A small mountain.",
    "hintTr": "Küçük bir dağ."
  },
  {
    "id": 1004,
    "category": "vocab",
    "en": "Farmer",
    "tr": "Çiftçi",
    "hintEn": "A person who works on a farm and grows food.",
    "hintTr": "Çiftlikte çalışan ve yiyecek yetiştiren kişi."
  },
  {
    "id": 1005,
    "category": "vocab",
    "en": "Valley",
    "tr": "Vadi",
    "hintEn": "The low place between two mountains.",
    "hintTr": "İki dağ arasındaki alçak yer."
  },
  {
    "id": 1006,
    "category": "vocab",
    "en": "Tree",
    "tr": "Ağaç",
    "hintEn": "A tall green plant with leaves.",
    "hintTr": "Yaprakları olan uzun yeşil bitki."
  },
  {
    "id": 1007,
    "category": "vocab",
    "en": "Field",
    "tr": "Alan / Tarla",
    "hintEn": "A large open land for plants or animals.",
    "hintTr": "Bitkiler veya hayvanlar için büyük açık arazi."
  },
  {
    "id": 1008,
    "category": "vocab",
    "en": "Farm",
    "tr": "Çiftlik",
    "hintEn": "A place where farmers work and keep animals.",
    "hintTr": "Çiftçilerin çalıştığı ve hayvan beslediği yer."
  },
  {
    "id": 1009,
    "category": "vocab",
    "en": "Lake",
    "tr": "Göl",
    "hintEn": "A large area of water.",
    "hintTr": "Büyük bir su alanı."
  },
  {
    "id": 1010,
    "category": "vocab",
    "en": "Horse",
    "tr": "At",
    "hintEn": "A big animal you can ride.",
    "hintTr": "Üzerine binebileceğin büyük bir hayvan."
  },
  {
    "id": 1011,
    "category": "vocab",
    "en": "Boat",
    "tr": "Kayık",
    "hintEn": "A small ship to travel on water.",
    "hintTr": "Suda seyahat etmek için küçük gemi."
  },
  {
    "id": 1012,
    "category": "vocab",
    "en": "Grass",
    "tr": "Çimen",
    "hintEn": "Short green plants on the ground.",
    "hintTr": "Yerdeki kısa yeşil bitkiler."
  },
  {
    "id": 1013,
    "category": "vocab",
    "en": "Dog",
    "tr": "Köpek",
    "hintEn": "A friendly pet animal that barks.",
    "hintTr": "\"Havlayan, arkadaş canlısı evcil hayvan.\""
  },
  {
    "id": 1014,
    "category": "vocab",
    "en": "Path",
    "tr": "Patika / Keçi Yolu",
    "hintEn": "A small road for walking.",
    "hintTr": "Yürümek için küçük bir yol."
  },
  {
    "id": 1015,
    "category": "vocab",
    "en": "Grow",
    "tr": "Büyü(t)mek / Yetiş(tir)mek",
    "hintEn": "To get bigger over time.",
    "hintTr": "Zamanla daha büyük hale gelmek."
  },
  {
    "id": 1016,
    "category": "vocab",
    "en": "Own",
    "tr": "Sahip Olmak",
    "hintEn": "To have something that is yours.",
    "hintTr": "Sana ait olan bir şeye sahip olmak."
  },
  {
    "id": 1017,
    "category": "vocab",
    "en": "Crop",
    "tr": "Mahsul",
    "hintEn": "\"Plants grown on a farm, like wheat or corn.\"",
    "hintTr": "\"Çiftlikte yetiştirilen buğday, mısır gibi bitkiler.\""
  },
  {
    "id": 1018,
    "category": "vocab",
    "en": "Area",
    "tr": "Alan / Bölge",
    "hintEn": "A part of a place.",
    "hintTr": "Bir yerin bir kısmı veya bölümü."
  },
  {
    "id": 1019,
    "category": "vocab",
    "en": "Countryside",
    "tr": "Kırsal Bölge",
    "hintEn": "Land outside towns and cities.",
    "hintTr": "Şehirlerin ve kasabaların dışındaki arazi."
  },
  {
    "id": 1020,
    "category": "vocab",
    "en": "Bird",
    "tr": "Kuş",
    "hintEn": "An animal with wings that can fly.",
    "hintTr": "Kanatları olan ve uçabilen bir hayvan."
  },
  {
    "id": 1021,
    "category": "vocab",
    "en": "Wonderful",
    "tr": "Harika",
    "hintEn": "Very good or beautiful.",
    "hintTr": "Çok iyi veya çok güzel."
  },
  {
    "id": 1022,
    "category": "vocab",
    "en": "Fresh Food",
    "tr": "Taze Yiyecek",
    "hintEn": "\"Food that is new and not in a can.\"",
    "hintTr": "\"Konservede olmayan, yeni yiyecek.\""
  },
  {
    "id": 1023,
    "category": "vocab",
    "en": "Healthy",
    "tr": "Sağlıklı",
    "hintEn": "Good for your body.",
    "hintTr": "Vücudun için iyi ve yararlı olan."
  },
  {
    "id": 1024,
    "category": "vocab",
    "en": "Public Transport",
    "tr": "Toplu Taşıma",
    "hintEn": "Buses and trains for everyone to use.",
    "hintTr": "Herkesin kullanması için olan otobüsler ve trenler."
  },
  {
    "id": 1025,
    "category": "vocab",
    "en": "Terrible",
    "tr": "Korkunç",
    "hintEn": "Very bad.",
    "hintTr": "Çok kötü."
  },
  {
    "id": 1026,
    "category": "vocab",
    "en": "Ride a Bike",
    "tr": "Bisiklete Binmek",
    "hintEn": "To travel on a bicycle.",
    "hintTr": "Bir bisikletin üzerinde gitmek."
  },
  {
    "id": 1027,
    "category": "vocab",
    "en": "Alone",
    "tr": "Yalnız",
    "hintEn": "\"Without other people, single.\"",
    "hintTr": "\"Başka insanlar olmadan, tek başına.\""
  },
  {
    "id": 1028,
    "category": "vocab",
    "en": "Lonely",
    "tr": "Yalnız Bir Şekilde",
    "hintEn": "Feeling sad because you are alone.",
    "hintTr": "Tek başına olduğun için üzgün hissetmek."
  },
  {
    "id": 1029,
    "category": "vocab",
    "en": "Look After",
    "tr": "İlgilenmek",
    "hintEn": "To take care of someone or something.",
    "hintTr": "Birine veya bir şeye iyi bakmak."
  },
  {
    "id": 1030,
    "category": "vocab",
    "en": "Market",
    "tr": "Market",
    "hintEn": "A place to buy fresh food and things.",
    "hintTr": "Taze yiyecek ve eşyalar satın alınan yer."
  },
  {
    "id": 1031,
    "category": "vocab",
    "en": "Outdoor",
    "tr": "Açık Hava / Dış Mekan",
    "hintEn": "Outside a building.",
    "hintTr": "Bir binanın dışı."
  },
  {
    "id": 1032,
    "category": "vocab",
    "en": "Indoor",
    "tr": "Kapalı / İç Mekan",
    "hintEn": "Inside a building.",
    "hintTr": "Bir binanın içi."
  },
  {
    "id": 1033,
    "category": "vocab",
    "en": "Shopping Centre",
    "tr": "Alışveriş Merkezi",
    "hintEn": "A big building with many shops.",
    "hintTr": "İçinde çok sayıda mağaza olan büyük bina."
  },
  {
    "id": 1034,
    "category": "vocab",
    "en": "Department Store",
    "tr": "Büyük Mağaza",
    "hintEn": "A large shop with different sections.",
    "hintTr": "Farklı bölümleri olan büyük dükkan."
  },
  {
    "id": 1035,
    "category": "vocab",
    "en": "Hypermarket",
    "tr": "Hipermarket",
    "hintEn": "A very big supermarket.",
    "hintTr": "Çok büyük bir süpermarket."
  },
  {
    "id": 1036,
    "category": "vocab",
    "en": "Butcher's",
    "tr": "Kasap",
    "hintEn": "A shop where you buy meat.",
    "hintTr": "Et satın aldığın dükkan."
  },
  {
    "id": 1037,
    "category": "vocab",
    "en": "Chemist's",
    "tr": "Eczane",
    "hintEn": "A shop where you buy medicine.",
    "hintTr": "İlaç satın aldığın dükkan."
  },
  {
    "id": 1038,
    "category": "vocab",
    "en": "Paper Shop / Newsagent",
    "tr": "Gazete Bayii",
    "hintEn": "A shop where you buy newspapers and magazines.",
    "hintTr": "Gazete ve dergi satın aldığın dükkan."
  },
  {
    "id": 1039,
    "category": "vocab",
    "en": "Convenient",
    "tr": "Uygun",
    "hintEn": "Easy to use or easy to do.",
    "hintTr": "Kullanması veya yapması kolay olan."
  },
  {
    "id": 1040,
    "category": "vocab",
    "en": "Get",
    "tr": "Edinmek / Almak",
    "hintEn": "To take or receive something.",
    "hintTr": "Bir şeyi almak veya elde etmek."
  },
  {
    "id": 1041,
    "category": "vocab",
    "en": "Do The Shopping",
    "tr": "Alışveriş Yapmak",
    "hintEn": "To go to shops to buy things.",
    "hintTr": "Bir şeyler satın almak için dükkanlara gitmek."
  },
  {
    "id": 1042,
    "category": "vocab",
    "en": "Queue",
    "tr": "Sıra / Kuyruk",
    "hintEn": "A line of people waiting for something.",
    "hintTr": "Bir şey için bekleyen insan sırası."
  },
  {
    "id": 1043,
    "category": "vocab",
    "en": "Check Out",
    "tr": "Kasa",
    "hintEn": "The place where you pay in a shop.",
    "hintTr": "Bir mağazada aldıklarını ödediğin yer."
  },
  {
    "id": 1044,
    "category": "vocab",
    "en": "Choose",
    "tr": "Seçmek",
    "hintEn": "To pick one thing from many.",
    "hintTr": "Birçok şey arasından bir tanesini almak."
  },
  {
    "id": 1045,
    "category": "vocab",
    "en": "Prefer",
    "tr": "Tercih Etmek",
    "hintEn": "To like one thing more than another.",
    "hintTr": "Bir şeyi diğerinden daha çok sevmek."
  },
  {
    "id": 1046,
    "category": "vocab",
    "en": "Fill",
    "tr": "Doldurmak",
    "hintEn": "To make something full.",
    "hintTr": "Bir şeyi tam dolu hale getirmek."
  },
  {
    "id": 1047,
    "category": "vocab",
    "en": "Full",
    "tr": "Dolu",
    "hintEn": "Having no empty space.",
    "hintTr": "Hiç boş yeri olmayan."
  },
  {
    "id": 1048,
    "category": "vocab",
    "en": "Trolley",
    "tr": "Alışveriş Arabası",
    "hintEn": "A big basket on wheels for shopping.",
    "hintTr": "Alışveriş yapmak için tekerlekli büyük sepet."
  },
  {
    "id": 1049,
    "category": "vocab",
    "en": "Deliver",
    "tr": "İletmek / Ulaştırmak",
    "hintEn": "To take things to a person's house.",
    "hintTr": "Eşyaları bir kişinin evine götürmek."
  },
  {
    "id": 1050,
    "category": "vocab",
    "en": "(on) The Top Floor",
    "tr": "Üst Katta",
    "hintEn": "The highest level of a building.",
    "hintTr": "Bir binanın en yüksek katı."
  },
  {
    "id": 1051,
    "category": "vocab",
    "en": "(on) The Second Floor",
    "tr": "İkinci Katta",
    "hintEn": "The level above the first floor.",
    "hintTr": "Birinci katın üstündeki kat."
  },
  {
    "id": 1052,
    "category": "vocab",
    "en": "(on) The First Floor",
    "tr": "Birinci Katta",
    "hintEn": "The level above the ground floor.",
    "hintTr": "Zemin katın üstündeki kat."
  },
  {
    "id": 1053,
    "category": "vocab",
    "en": "(on) The Ground Floor",
    "tr": "Zemin Katta",
    "hintEn": "The level of a building at street level.",
    "hintTr": "Bir binanın sokak seviyesindeki giriş katı."
  },
  {
    "id": 1054,
    "category": "vocab",
    "en": "Garden",
    "tr": "Bahçe",
    "hintEn": "The green area outside a house.",
    "hintTr": "Bir evin dışındaki çiçekli yeşil alan."
  },
  {
    "id": 1055,
    "category": "vocab",
    "en": "Steps",
    "tr": "Merdivenler / Basamaklar",
    "hintEn": "Things you walk up or down outside.",
    "hintTr": "İnip çıkarken yürüdüğün basamaklar."
  },
  {
    "id": 1056,
    "category": "vocab",
    "en": "(in) The Basement",
    "tr": "Bodrumda",
    "hintEn": "The room under a house.",
    "hintTr": "Bir evin altındaki yeraltı odası."
  },
  {
    "id": 1057,
    "category": "vocab",
    "en": "Rubbish",
    "tr": "Çöp",
    "hintEn": "Things you do not need and throw away.",
    "hintTr": "İhtiyacın olmayan ve çöpe attığın şeyler."
  },
  {
    "id": 1058,
    "category": "vocab",
    "en": "Front Door",
    "tr": "Sokak Kapısı / Ön Kapı",
    "hintEn": "The main door to enter a house.",
    "hintTr": "Bir eve girmek için kullanılan ana kapı."
  },
  {
    "id": 1059,
    "category": "vocab",
    "en": "Stairs",
    "tr": "Merdivenler",
    "hintEn": "A set of steps inside a building.",
    "hintTr": "Bina içindeki basamaklar dizisi."
  },
  {
    "id": 1060,
    "category": "vocab",
    "en": "Lift",
    "tr": "Asansör",
    "hintEn": "A machine that takes you up and down in a building.",
    "hintTr": "Binada seni katlar arası aşağı yukarı taşıyan makine."
  },
  {
    "id": 1061,
    "category": "vocab",
    "en": "Flat",
    "tr": "Daire",
    "hintEn": "A home that is part of a larger building.",
    "hintTr": "Büyük bir binanın içinde yer alan ev."
  },
  {
    "id": 1062,
    "category": "vocab",
    "en": "Balcony",
    "tr": "Balkon",
    "hintEn": "An open area outside an upstairs window.",
    "hintTr": "Üst kat penceresinin dışındaki açık alan."
  },
  {
    "id": 1063,
    "category": "vocab",
    "en": "Modern",
    "tr": "Modern",
    "hintEn": "New and completely different from old styles.",
    "hintTr": "Yeni olan ve eski stillerden farklı olan."
  },
  {
    "id": 1064,
    "category": "vocab",
    "en": "Old",
    "tr": "Eski",
    "hintEn": "Not new.",
    "hintTr": "Yeni olmayan."
  },
  {
    "id": 1065,
    "category": "vocab",
    "en": "View",
    "tr": "Görüntü / Manzara",
    "hintEn": "What you can see from a window or high place.",
    "hintTr": "Bir pencereden veya yüksekten görebildiğin şey."
  },
  {
    "id": 1066,
    "category": "vocab",
    "en": "Upstairs",
    "tr": "Üst Kat",
    "hintEn": "To or on a higher floor.",
    "hintTr": "Daha yüksek bir kata veya katta."
  },
  {
    "id": 1067,
    "category": "vocab",
    "en": "Downstairs",
    "tr": "Alt Kat",
    "hintEn": "To or on a lower floor.",
    "hintTr": "Daha alt bir kata veya katta."
  },
  {
    "id": 1068,
    "category": "vocab",
    "en": "Outside",
    "tr": "Dışarısı",
    "hintEn": "Not inside a building.",
    "hintTr": "Binanın içi olmayan yer."
  },
  {
    "id": 1069,
    "category": "vocab",
    "en": "Inside",
    "tr": "İçerisi",
    "hintEn": "In a building or room.",
    "hintTr": "Bir binanın veya odanın içi."
  },
  {
    "id": 1070,
    "category": "vocab",
    "en": "Garage",
    "tr": "Garaj",
    "hintEn": "A building to keep a car safe.",
    "hintTr": "Arabayı güvende tutmak için yapılan kapalı yer."
  },
  {
    "id": 1071,
    "category": "vocab",
    "en": "Parking",
    "tr": "Park Yeri",
    "hintEn": "A place to leave your car.",
    "hintTr": "Arabanı bırakacağın yer."
  },
  {
    "id": 1072,
    "category": "vocab",
    "en": "Living Room",
    "tr": "Oturma Odası",
    "hintEn": "A room where people sit and watch TV.",
    "hintTr": "İnsanların oturup TV izlediği ana oda."
  },
  {
    "id": 1073,
    "category": "vocab",
    "en": "Dining Room",
    "tr": "Yemek Odası",
    "hintEn": "A room where you eat meals with your family.",
    "hintTr": "Ailenle birlikte yemek yediğin oda."
  },
  {
    "id": 1074,
    "category": "vocab",
    "en": "Study Room",
    "tr": "Çalışma Odası",
    "hintEn": "A quiet room for reading and working.",
    "hintTr": "Okumak ve çalışmak için sessiz oda."
  },
  {
    "id": 1075,
    "category": "vocab",
    "en": "Kitchen",
    "tr": "Mutfak",
    "hintEn": "A room where you cook food.",
    "hintTr": "Yemek pişirdiğin oda."
  },
  {
    "id": 1076,
    "category": "vocab",
    "en": "Home",
    "tr": "Ev",
    "hintEn": "The place where you live and feel safe.",
    "hintTr": "Yaşadığın ve güvende hissettiğin yer."
  },
  {
    "id": 1077,
    "category": "vocab",
    "en": "House",
    "tr": "Bina",
    "hintEn": "A building for a family to live in.",
    "hintTr": "Bir ailenin yaşaması için yapılmış bina."
  },
  {
    "id": 1078,
    "category": "vocab",
    "en": "Shelf",
    "tr": "Raf",
    "hintEn": "A flat piece of wood on a wall to put books.",
    "hintTr": "Kitap koymak için duvardaki düz tahta."
  },
  {
    "id": 1079,
    "category": "vocab",
    "en": "Tap (turn the Tap on-off)",
    "tr": "Musluk",
    "hintEn": "A thing you turn to get water.",
    "hintTr": "Su almak için açıp kapattığın şey."
  },
  {
    "id": 1080,
    "category": "vocab",
    "en": "Cup",
    "tr": "Fincan",
    "hintEn": "A small container with a handle to drink tea.",
    "hintTr": "Çay içmek için kulplu küçük kap."
  },
  {
    "id": 1081,
    "category": "vocab",
    "en": "Microwave",
    "tr": "Mikrodalga",
    "hintEn": "A machine that cooks food very fast.",
    "hintTr": "Yiyecekleri çok hızlı ısıtan küçük makine."
  },
  {
    "id": 1082,
    "category": "vocab",
    "en": "Frying Pan",
    "tr": "Kızartma Tavası",
    "hintEn": "A flat pan used for cooking food in oil.",
    "hintTr": "Yağda yemek pişirmek için kullanılan düz tava."
  },
  {
    "id": 1083,
    "category": "vocab",
    "en": "Freezer",
    "tr": "Dondurucu",
    "hintEn": "A very cold machine to make ice.",
    "hintTr": "Buz yapmak için kullanılan çok soğuk makine."
  },
  {
    "id": 1084,
    "category": "vocab",
    "en": "Sink",
    "tr": "Lavabo",
    "hintEn": "A place in the kitchen to wash dishes.",
    "hintTr": "Mutfakta bulaşık yıkamak için olan yer."
  },
  {
    "id": 1085,
    "category": "vocab",
    "en": "Saucer",
    "tr": "Çay Tabağı / Fincan Tabağı",
    "hintEn": "A small plate under a cup.",
    "hintTr": "Fincanın altına konulan küçük tabak."
  },
  {
    "id": 1086,
    "category": "vocab",
    "en": "Hob",
    "tr": "Set Üstü Ocak",
    "hintEn": "The top part of a cooker where you cook.",
    "hintTr": "Ocağın üzerinde yemek pişirilen üst kısmı."
  },
  {
    "id": 1087,
    "category": "vocab",
    "en": "Saucepan",
    "tr": "Sos Tavası",
    "hintEn": "A deep pan for boiling food.",
    "hintTr": "Yemek kaynatmak için kullanılan derin kap."
  },
  {
    "id": 1088,
    "category": "vocab",
    "en": "(rubbish) Bin",
    "tr": "Çöp Kovası",
    "hintEn": "A container for things you throw away.",
    "hintTr": "Çöpe atacağın şeyler için kullandığın kutu."
  },
  {
    "id": 1089,
    "category": "vocab",
    "en": "Empty",
    "tr": "Boş",
    "hintEn": "Having nothing inside.",
    "hintTr": "İçinde hiçbir şey olmayan."
  },
  {
    "id": 1090,
    "category": "vocab",
    "en": "Oven",
    "tr": "Fırın",
    "hintEn": "A machine used for baking food like pizza.",
    "hintTr": "Pizza veya kek pişirmek için kullanılan makine."
  },
  {
    "id": 1091,
    "category": "vocab",
    "en": "Fridge",
    "tr": "Buzdolabı",
    "hintEn": "A cold machine to keep food fresh.",
    "hintTr": "Yiyecekleri taze tutmak için kullanılan soğuk makine."
  },
  {
    "id": 1092,
    "category": "vocab",
    "en": "Washing Machine",
    "tr": "Çamaşır Makinası",
    "hintEn": "A machine that cleans dirty clothes.",
    "hintTr": "Kirli kıyafetleri temizleyen makine."
  },
  {
    "id": 1093,
    "category": "vocab",
    "en": "Cupboard",
    "tr": "Dolap",
    "hintEn": "A place with doors to keep things inside.",
    "hintTr": "İçinde eşyaları tutmak için kapakları olan yer."
  },
  {
    "id": 1094,
    "category": "vocab",
    "en": "Dishwasher",
    "tr": "Bulaşık Makinası",
    "hintEn": "A machine that cleans cups and plates.",
    "hintTr": "Fincan ve tabakları yıkayan makine."
  },
  {
    "id": 1095,
    "category": "vocab",
    "en": "Cooker",
    "tr": "Ocak",
    "hintEn": "A machine used to cook hot food.",
    "hintTr": "Sıcak yemek pişirmek için kullanılan ana makine."
  },
  {
    "id": 1096,
    "category": "vocab",
    "en": "Clean",
    "tr": "Temizlemek",
    "hintEn": "To wash something so it is not dirty.",
    "hintTr": "Kirli olmaması için bir şeyi yıkamak/silmek."
  },
  {
    "id": 1097,
    "category": "vocab",
    "en": "Take",
    "tr": "Almak",
    "hintEn": "To move something from one place to another.",
    "hintTr": "Bir şeyi bir yerden başka bir yere götürmek."
  },
  {
    "id": 1098,
    "category": "vocab",
    "en": "Make",
    "tr": "Yapmak",
    "hintEn": "To create or build something new.",
    "hintTr": "Yeni bir şey yaratmak veya inşa etmek."
  },
  {
    "id": 1099,
    "category": "vocab",
    "en": "Do the Ironing",
    "tr": "Ütü Yapmak",
    "hintEn": "To make clothes flat and smooth.",
    "hintTr": "Kıyafetleri düz ve pürüzsüz yapmak."
  },
  {
    "id": 1100,
    "category": "vocab",
    "en": "Do the Washing Up",
    "tr": "Bulaşıkları Yıkamak",
    "hintEn": "To clean plates and cups after eating.",
    "hintTr": "Yemekten sonra tabak ve fincanları yıkamak."
  },
  {
    "id": 1101,
    "category": "vocab",
    "en": "Housework",
    "tr": "Ev İşi",
    "hintEn": "The work you do to keep a house clean.",
    "hintTr": "Evi temiz tutmak için yapılan işler."
  },
  {
    "id": 1102,
    "category": "vocab",
    "en": "Homework",
    "tr": "Ev Ödevi",
    "hintEn": "School work you do at home.",
    "hintTr": "Evde yaptığın okul işi."
  },
  {
    "id": 1103,
    "category": "vocab",
    "en": "Bedroom",
    "tr": "Yatak Odası",
    "hintEn": "A room where you sleep.",
    "hintTr": "Uyuduğun oda."
  },
  {
    "id": 1104,
    "category": "vocab",
    "en": "Single Bed",
    "tr": "Tekli Yatak",
    "hintEn": "A bed for one person.",
    "hintTr": "Bir kişi için olan yatak."
  },
  {
    "id": 1105,
    "category": "vocab",
    "en": "Bedside Table",
    "tr": "Komodin",
    "hintEn": "A small table next to a bed.",
    "hintTr": "Yatağın yanındaki küçük masa."
  },
  {
    "id": 1106,
    "category": "vocab",
    "en": "Desk",
    "tr": "Sıra / Masa",
    "hintEn": "A table for studying or working.",
    "hintTr": "Ders çalışmak veya çalışmak için masa."
  },
  {
    "id": 1107,
    "category": "vocab",
    "en": "Chest of Drawers",
    "tr": "Çekmeceler",
    "hintEn": "A piece of furniture to keep clothes.",
    "hintTr": "Kıyafetleri koymak için çekmeceli mobilya."
  },
  {
    "id": 1108,
    "category": "vocab",
    "en": "Wardrobe",
    "tr": "Gardırop",
    "hintEn": "A tall cupboard for hanging clothes.",
    "hintTr": "Kıyafetleri asmak için uzun dolap."
  },
  {
    "id": 1109,
    "category": "vocab",
    "en": "Bath",
    "tr": "Banyo",
    "hintEn": "A large tub to wash your body in.",
    "hintTr": "Vücudunu yıkamak için büyük küvet."
  },
  {
    "id": 1110,
    "category": "vocab",
    "en": "Shower",
    "tr": "Duş",
    "hintEn": "Washing your body under falling water.",
    "hintTr": "Akan suyun altında vücudunu yıkamak."
  },
  {
    "id": 1111,
    "category": "vocab",
    "en": "Wash Basin",
    "tr": "Lavabo",
    "hintEn": "A place in the bathroom to wash hands.",
    "hintTr": "Banyoda el yıkamak için olan yer."
  },
  {
    "id": 1112,
    "category": "vocab",
    "en": "Mirror",
    "tr": "Ayna",
    "hintEn": "A glass where you can see yourself.",
    "hintTr": "Kendini görebildiğin cam."
  },
  {
    "id": 1113,
    "category": "vocab",
    "en": "Blanket",
    "tr": "Battaniye",
    "hintEn": "A warm cover for a bed.",
    "hintTr": "Yatak için sıcak tutan örtü."
  },
  {
    "id": 1114,
    "category": "vocab",
    "en": "Sheets",
    "tr": "Çarşaflar",
    "hintEn": "Thin cotton covers for a bed.",
    "hintTr": "Yatak için ince pamuklu örtüler."
  },
  {
    "id": 1115,
    "category": "vocab",
    "en": "Towels",
    "tr": "Havlular",
    "hintEn": "Soft pieces of cloth to dry your body.",
    "hintTr": "Vücudunu kurulamak için yumuşak kumaşlar."
  },
  {
    "id": 1116,
    "category": "vocab",
    "en": "Soap",
    "tr": "Sabun",
    "hintEn": "Something you use with water to wash.",
    "hintTr": "Yıkanmak için suyla kullandığın şey."
  },
  {
    "id": 1117,
    "category": "vocab",
    "en": "Have a Wash",
    "tr": "Yıkanmak",
    "hintEn": "To clean your body.",
    "hintTr": "Vücudunu temizlemek."
  },
  {
    "id": 1118,
    "category": "vocab",
    "en": "Clean Your Teeth",
    "tr": "Dişlerini Temizlemek",
    "hintEn": "To brush your teeth.",
    "hintTr": "Dişlerini fırçalamak."
  },
  {
    "id": 1119,
    "category": "vocab",
    "en": "Wash Your Hair",
    "tr": "Saçlarını Yıkamak",
    "hintEn": "To clean the hair on your head.",
    "hintTr": "Başındaki saçları temizlemek."
  },
  {
    "id": 1120,
    "category": "vocab",
    "en": "Have a Shave",
    "tr": "Tıraş Olmak",
    "hintEn": "To cut hair from the face.",
    "hintTr": "Yüzdeki kılları kesmek."
  },
  {
    "id": 1121,
    "category": "vocab",
    "en": "Put On Make Up",
    "tr": "Makyaj Yapmak",
    "hintEn": "To use color on your face to look nice.",
    "hintTr": "Güzel görünmek için yüze renk sürmek."
  },
  {
    "id": 1122,
    "category": "vocab",
    "en": "Take Off Make Up",
    "tr": "Makyajı Çıkarmak / Makyajı Silmek",
    "hintEn": "To clean color from your face.",
    "hintTr": "Yüzündeki boyayı temizlemek."
  },
  {
    "id": 1123,
    "category": "vocab",
    "en": "Tissue",
    "tr": "Mendil",
    "hintEn": "Soft paper to clean your nose or face.",
    "hintTr": "Burnunu veya yüzünü temizlemek için yumuşak kağıt."
  },
  {
    "id": 1124,
    "category": "vocab",
    "en": "Put On Perfume",
    "tr": "Parfüm Sıkmak",
    "hintEn": "To put sweet-smelling liquid on yourself.",
    "hintTr": "Üzerine güzel kokulu sıvı sıkmak."
  },
  {
    "id": 1125,
    "category": "vocab",
    "en": "Wear Perfume",
    "tr": "Parfüm Sıkmak",
    "hintEn": "To have a nice smell on your body.",
    "hintTr": "Vücudunda güzel bir koku olması."
  },
  {
    "id": 1126,
    "category": "vocab",
    "en": "A Razor",
    "tr": "Jilet",
    "hintEn": "A sharp tool for shaving.",
    "hintTr": "Tıraş olmak için keskin alet."
  },
  {
    "id": 1127,
    "category": "vocab",
    "en": "Toothpaste",
    "tr": "Diş Macunu",
    "hintEn": "The paste you use to clean your teeth.",
    "hintTr": "Dişlerini temizlemek için kullandığın macun."
  },
  {
    "id": 1128,
    "category": "vocab",
    "en": "Toothbrush",
    "tr": "Diş Fırçası",
    "hintEn": "A small brush for your teeth.",
    "hintTr": "Dişlerin için küçük fırça."
  },
  {
    "id": 1129,
    "category": "vocab",
    "en": "Window",
    "tr": "Pencere",
    "hintEn": "A glass hole in a wall to look outside.",
    "hintTr": "Dışarı bakmak için duvardaki camlı boşluk."
  },
  {
    "id": 1130,
    "category": "vocab",
    "en": "Light",
    "tr": "Işık",
    "hintEn": "Something that helps you see in the dark.",
    "hintTr": "Karanlıkta görmene yardım eden şey."
  },
  {
    "id": 1131,
    "category": "vocab",
    "en": "Ceiling",
    "tr": "Tavan",
    "hintEn": "The top part of a room.",
    "hintTr": "Bir odanın üst kısmı."
  },
  {
    "id": 1132,
    "category": "vocab",
    "en": "Wall",
    "tr": "Duvar",
    "hintEn": "The side of a room or building.",
    "hintTr": "Bir odanın veya binanın yanı."
  },
  {
    "id": 1133,
    "category": "vocab",
    "en": "Curtains",
    "tr": "Perdeler",
    "hintEn": "Pieces of cloth to cover a window.",
    "hintTr": "Bir pencereyi kapatmak için kumaş parçaları."
  },
  {
    "id": 1134,
    "category": "vocab",
    "en": "Cushion",
    "tr": "Minder / Yastık",
    "hintEn": "A soft bag to sit on or put on a sofa.",
    "hintTr": "Üzerine oturmak veya koltuğa koymak için yumuşak yastık."
  },
  {
    "id": 1135,
    "category": "vocab",
    "en": "Lamp",
    "tr": "Lamba",
    "hintEn": "An object that makes light.",
    "hintTr": "Işık veren nesne."
  },
  {
    "id": 1136,
    "category": "vocab",
    "en": "Armchair",
    "tr": "Tekli Koltuk",
    "hintEn": "A comfortable chair for one person.",
    "hintTr": "Bir kişi için rahat koltuk."
  },
  {
    "id": 1137,
    "category": "vocab",
    "en": "Coffee Table",
    "tr": "Orta Sehpa",
    "hintEn": "A low table for the living room.",
    "hintTr": "Oturma odası için alçak masa."
  },
  {
    "id": 1138,
    "category": "vocab",
    "en": "Floor",
    "tr": "Yer / Kat",
    "hintEn": "The part of a room where you walk.",
    "hintTr": "Odanın yürüdüğün kısmı."
  },
  {
    "id": 1139,
    "category": "vocab",
    "en": "Sofa",
    "tr": "Çekyat",
    "hintEn": "A long comfortable seat for 2 or 3 people.",
    "hintTr": "2 veya 3 kişi için uzun rahat koltuk."
  },
  {
    "id": 1140,
    "category": "vocab",
    "en": "Rug",
    "tr": "Kilim",
    "hintEn": "A small carpet for the floor.",
    "hintTr": "Yer için küçük halı."
  },
  {
    "id": 1141,
    "category": "vocab",
    "en": "Carpet",
    "tr": "Halı",
    "hintEn": "A thick cover for the floor.",
    "hintTr": "Yer için kalın örtü."
  },
  {
    "id": 1142,
    "category": "vocab",
    "en": "Chemistry",
    "tr": "Kimya",
    "hintEn": "The science of what things are made of.",
    "hintTr": "Şeylerin nelerden yapıldığını inceleyen bilim."
  },
  {
    "id": 1143,
    "category": "vocab",
    "en": "Physics",
    "tr": "Fizik",
    "hintEn": "The science of energy and moving things.",
    "hintTr": "Enerji ve hareket eden şeylerin bilimi."
  },
  {
    "id": 1144,
    "category": "vocab",
    "en": "Biology",
    "tr": "Biyoloji",
    "hintEn": "The science of living things.",
    "hintTr": "Canlıların bilimi."
  },
  {
    "id": 1145,
    "category": "vocab",
    "en": "Maths",
    "tr": "Matematik",
    "hintEn": "The study of numbers.",
    "hintTr": "Sayıların bilimi."
  },
  {
    "id": 1146,
    "category": "vocab",
    "en": "Geography",
    "tr": "Coğrafya",
    "hintEn": "The study of the world and places.",
    "hintTr": "Dünyanın ve yerlerin bilimi."
  },
  {
    "id": 1147,
    "category": "vocab",
    "en": "History",
    "tr": "Tarih",
    "hintEn": "The study of things in the past.",
    "hintTr": "Geçmişteki şeylerin incelenmesi."
  },
  {
    "id": 1148,
    "category": "vocab",
    "en": "Literature",
    "tr": "Edebiyat",
    "hintEn": "The study of written books and poems.",
    "hintTr": "Yazılmış kitapların ve şiirlerin incelenmesi."
  },
  {
    "id": 1149,
    "category": "vocab",
    "en": "Art",
    "tr": "Resim / Sanat",
    "hintEn": "Making beautiful things like drawings.",
    "hintTr": "Çizim gibi güzel şeyler yapma."
  },
  {
    "id": 1150,
    "category": "vocab",
    "en": "Subjects",
    "tr": "Konular / Dersler",
    "hintEn": "The things you learn at school.",
    "hintTr": "Okulda öğrendiğin şeyler."
  },
  {
    "id": 1151,
    "category": "vocab",
    "en": "Good at Something",
    "tr": "Bir Şeyde İyi Olmak",
    "hintEn": "To do something very well.",
    "hintTr": "Bir şeyi çok iyi yapmak."
  },
  {
    "id": 1152,
    "category": "vocab",
    "en": "Bad at Something",
    "tr": "Bir Şeyde Kötü Olmak",
    "hintEn": "To not do something well.",
    "hintTr": "Bir şeyi iyi yapamamak."
  },
  {
    "id": 1153,
    "category": "vocab",
    "en": "Terrible At",
    "tr": "Bir Şeyde Çok Kötü Olmak",
    "hintEn": "\"To do something very, very badly.\"",
    "hintTr": "Bir şeyi çok ama çok kötü yapmak."
  },
  {
    "id": 1154,
    "category": "vocab",
    "en": "Kindergarten",
    "tr": "Anaokulu / Kreş",
    "hintEn": "A school for very young children.",
    "hintTr": "Çok küçük çocuklar için okul."
  },
  {
    "id": 1155,
    "category": "vocab",
    "en": "Primary School",
    "tr": "İlkokul",
    "hintEn": "A school for young children.",
    "hintTr": "Küçük çocuklar için okul."
  },
  {
    "id": 1156,
    "category": "vocab",
    "en": "Secondary School",
    "tr": "Ortaokul",
    "hintEn": "A school for older children.",
    "hintTr": "Daha büyük çocuklar için okul."
  },
  {
    "id": 1157,
    "category": "vocab",
    "en": "State School",
    "tr": "Devlet Okulu",
    "hintEn": "A free school paid for by the government.",
    "hintTr": "Hükümetin ödediği ücretsiz okul."
  },
  {
    "id": 1158,
    "category": "vocab",
    "en": "Private School",
    "tr": "Özel Okul",
    "hintEn": "A school where parents pay money.",
    "hintTr": "Ailelerin para ödediği okul."
  },
  {
    "id": 1159,
    "category": "vocab",
    "en": "Start at School",
    "tr": "Okula Başlamak",
    "hintEn": "To begin going to school.",
    "hintTr": "Okula gitmeye başlamak."
  },
  {
    "id": 1160,
    "category": "vocab",
    "en": "Leave School",
    "tr": "Okuldan Ayrılmak",
    "hintEn": "To finish your time at school.",
    "hintTr": "Okuldaki zamanını bitirmek."
  },
  {
    "id": 1161,
    "category": "vocab",
    "en": "Get a Job",
    "tr": "İşe Girmek / İş Bulmak",
    "hintEn": "To find work to earn money.",
    "hintTr": "Para kazanmak için iş bulmak."
  },
  {
    "id": 1162,
    "category": "vocab",
    "en": "Take Exam",
    "tr": "Sınav Olmak",
    "hintEn": "To answer questions to show what you know.",
    "hintTr": "Ne bildiğini göstermek için soruları cevaplamak."
  },
  {
    "id": 1163,
    "category": "vocab",
    "en": "Pass an Exam",
    "tr": "Bir Sınavı Geçmek",
    "hintEn": "To get a good mark in a test.",
    "hintTr": "Bir testte iyi bir not almak."
  },
  {
    "id": 1164,
    "category": "vocab",
    "en": "Fail an Exam",
    "tr": "Bir Sınavdan Kalmak",
    "hintEn": "To get a bad mark in a test.",
    "hintTr": "Bir testte kötü bir not almak."
  },
  {
    "id": 1165,
    "category": "vocab",
    "en": "Result",
    "tr": "Sonuç",
    "hintEn": "The mark you get at the end of a test.",
    "hintTr": "Bir testin sonunda aldığın not."
  },
  {
    "id": 1166,
    "category": "vocab",
    "en": "Grade",
    "tr": "Not / Sınav Sonucu",
    "hintEn": "A letter or number showing how well you did.",
    "hintTr": "Ne kadar iyi yaptığını gösteren harf veya sayı."
  },
  {
    "id": 1167,
    "category": "vocab",
    "en": "Get a Grade",
    "tr": "Sınav Sonucu Almak",
    "hintEn": "To receive your mark for a test.",
    "hintTr": "Bir test için notunu almak."
  },
  {
    "id": 1168,
    "category": "vocab",
    "en": "Do Well",
    "tr": "İyi Yapmak",
    "hintEn": "To be successful at something.",
    "hintTr": "Bir şeyde başarılı olmak."
  },
  {
    "id": 1169,
    "category": "vocab",
    "en": "Do Badly",
    "tr": "Kötü Bir Şekilde Yapmak",
    "hintEn": "To not be successful at something.",
    "hintTr": "Bir şeyde başarılı olamamak."
  },
  {
    "id": 1170,
    "category": "vocab",
    "en": "Do a Degree",
    "tr": "Derece Yapmak",
    "hintEn": "To study at a university.",
    "hintTr": "Üniversitede okumak."
  },
  {
    "id": 1171,
    "category": "vocab",
    "en": "Term",
    "tr": "Dönem",
    "hintEn": "A part of the school year.",
    "hintTr": "Okul yılının bir bölümü."
  },
  {
    "id": 1172,
    "category": "vocab",
    "en": "Library",
    "tr": "Kütüphane",
    "hintEn": "A quiet place with many books to read.",
    "hintTr": "Okumak için çok sayıda kitabın olduğu sessiz yer."
  },
  {
    "id": 1173,
    "category": "vocab",
    "en": "Undergraduate",
    "tr": "Lisans Öğrencisi",
    "hintEn": "A university student studying for their first degree.",
    "hintTr": "İlk derecesi için okuyan üniversite öğrencisi."
  },
  {
    "id": 1174,
    "category": "vocab",
    "en": "Write an Essay",
    "tr": "Bir Deneme Yazısı Yazmak",
    "hintEn": "To write a short text on a subject.",
    "hintTr": "Bir konu hakkında kısa bir metin yazmak."
  },
  {
    "id": 1175,
    "category": "vocab",
    "en": "Again",
    "tr": "Yeniden",
    "hintEn": "One more time.",
    "hintTr": "Bir kez daha."
  },
  {
    "id": 1176,
    "category": "vocab",
    "en": "Psychology",
    "tr": "Psikoloji",
    "hintEn": "The study of the mind.",
    "hintTr": "Zihin bilimi."
  },
  {
    "id": 1177,
    "category": "vocab",
    "en": "A Psychologist",
    "tr": "Psikolog",
    "hintEn": "A doctor for the mind.",
    "hintTr": "Zihin doktoru."
  },
  {
    "id": 1178,
    "category": "vocab",
    "en": "Economics",
    "tr": "Ekonomi",
    "hintEn": "The study of money and business.",
    "hintTr": "Para ve iş dünyasının bilimi."
  },
  {
    "id": 1179,
    "category": "vocab",
    "en": "Economist",
    "tr": "Ekonomist",
    "hintEn": "An expert in money and business.",
    "hintTr": "Para ve iş dünyasında uzman."
  },
  {
    "id": 1180,
    "category": "vocab",
    "en": "Law",
    "tr": "Hukuk",
    "hintEn": "The rules of a country.",
    "hintTr": "Bir ülkenin kuralları."
  },
  {
    "id": 1181,
    "category": "vocab",
    "en": "Lawyer",
    "tr": "Avukat",
    "hintEn": "A person who helps people with the law.",
    "hintTr": "İnsanlara hukuk konusunda yardım eden kişi."
  },
  {
    "id": 1182,
    "category": "vocab",
    "en": "Politics",
    "tr": "Siyaset",
    "hintEn": "The work of running a country.",
    "hintTr": "Bir ülkeyi yönetme işi."
  },
  {
    "id": 1183,
    "category": "vocab",
    "en": "A Politician",
    "tr": "Siyasetçi",
    "hintEn": "A person who works in the government.",
    "hintTr": "Hükümette çalışan kişi."
  },
  {
    "id": 1184,
    "category": "vocab",
    "en": "Engineering",
    "tr": "Mühendislik",
    "hintEn": "The work of designing roads or machines.",
    "hintTr": "Yollar veya makineler tasarlama işi."
  },
  {
    "id": 1185,
    "category": "vocab",
    "en": "An Engineer",
    "tr": "Mühendis",
    "hintEn": "A person who designs machines or buildings.",
    "hintTr": "Makineler veya binalar tasarlayan kişi."
  },
  {
    "id": 1186,
    "category": "vocab",
    "en": "Architecture",
    "tr": "Mimarlık",
    "hintEn": "The art of designing buildings.",
    "hintTr": "Binalar tasarlama sanatı."
  },
  {
    "id": 1187,
    "category": "vocab",
    "en": "An Architect",
    "tr": "Mimar",
    "hintEn": "A person who draws plans for houses.",
    "hintTr": "Evler için planlar çizen kişi."
  },
  {
    "id": 1188,
    "category": "vocab",
    "en": "A Builder",
    "tr": "İnşaatçı",
    "hintEn": "A person who makes buildings.",
    "hintTr": "Binalar yapan kişi."
  },
  {
    "id": 1189,
    "category": "vocab",
    "en": "A Teacher",
    "tr": "Öğretmen",
    "hintEn": "A person who helps students learn.",
    "hintTr": "Öğrencilerin öğrenmesine yardım eden kişi."
  },
  {
    "id": 1190,
    "category": "vocab",
    "en": "A Shop Assistant",
    "tr": "Satıcı",
    "hintEn": "A person who works in a shop.",
    "hintTr": "Bir dükkanda çalışan kişi."
  },
  {
    "id": 1191,
    "category": "vocab",
    "en": "A Nurse",
    "tr": "Hemşire",
    "hintEn": "A person who helps doctors in a hospital.",
    "hintTr": "Hastanede doktorlara yardım eden kişi."
  },
  {
    "id": 1192,
    "category": "vocab",
    "en": "A Secretary",
    "tr": "Sekreter",
    "hintEn": "A person who works in an office and answers phones.",
    "hintTr": "Ofiste çalışan ve telefonlara bakan kişi."
  },
  {
    "id": 1193,
    "category": "vocab",
    "en": "A Hairdresser",
    "tr": "Kuaför",
    "hintEn": "A person who cuts and styles hair.",
    "hintTr": "Saçları kesen ve şekil veren kişi."
  },
  {
    "id": 1194,
    "category": "vocab",
    "en": "A Chef",
    "tr": "Şef",
    "hintEn": "A person who cooks food in a restaurant.",
    "hintTr": "Restoranda yemek pişiren kişi."
  },
  {
    "id": 1195,
    "category": "vocab",
    "en": "A Dentist",
    "tr": "Dişçi",
    "hintEn": "A doctor for your teeth.",
    "hintTr": "Dişleriniz için doktor."
  },
  {
    "id": 1196,
    "category": "vocab",
    "en": "A Soldier",
    "tr": "Asker",
    "hintEn": "A person in the army.",
    "hintTr": "Ordudaki kişi."
  },
  {
    "id": 1197,
    "category": "vocab",
    "en": "A Cleaner",
    "tr": "Temizlikçi",
    "hintEn": "A person whose job is to clean places.",
    "hintTr": "İşi yerleri temizlemek olan kişi."
  },
  {
    "id": 1198,
    "category": "vocab",
    "en": "A Vet",
    "tr": "Veteriner",
    "hintEn": "A doctor for animals.",
    "hintTr": "Hayvanlar için doktor."
  },
  {
    "id": 1199,
    "category": "vocab",
    "en": "A Pilot",
    "tr": "Pilot",
    "hintEn": "A person who flies planes.",
    "hintTr": "Uçak uçuran kişi."
  },
  {
    "id": 1200,
    "category": "vocab",
    "en": "A Lorry Driver",
    "tr": "Kamyonet Sürücüsü",
    "hintEn": "A person who drives big trucks.",
    "hintTr": "Büyük kamyonları süren kişi."
  },
  {
    "id": 1201,
    "category": "vocab",
    "en": "Self-Employed",
    "tr": "Kendi İşinin Sahibi",
    "hintEn": "\"Working for yourself, not for a boss.\"",
    "hintTr": "\"Bir patron için değil, kendi için çalışan.\""
  },
  {
    "id": 1202,
    "category": "vocab",
    "en": "Unemployed",
    "tr": "İşsiz",
    "hintEn": "Not having a job.",
    "hintTr": "Bir işi olmayan."
  },
  {
    "id": 1203,
    "category": "vocab",
    "en": "Retired",
    "tr": "Emekli",
    "hintEn": "Stopped working because you are older.",
    "hintTr": "Yaşlı olduğun için çalışmayı bırakmış."
  },
  {
    "id": 1204,
    "category": "vocab",
    "en": "Housewife",
    "tr": "Ev Hanımı",
    "hintEn": "A woman who works at home looking after her family.",
    "hintTr": "Evde çalışıp ailesine bakan kadın."
  },
  {
    "id": 1205,
    "category": "vocab",
    "en": "Boss",
    "tr": "Patron",
    "hintEn": "The person you work for.",
    "hintTr": "Kendisi için çalıştığın kişi."
  },
  {
    "id": 1206,
    "category": "vocab",
    "en": "An Office",
    "tr": "Ofis",
    "hintEn": "A room where people work at desks.",
    "hintTr": "İnsanların masalarda çalıştığı oda."
  },
  {
    "id": 1207,
    "category": "vocab",
    "en": "A Factory",
    "tr": "Fabrika",
    "hintEn": "A big building where things are made.",
    "hintTr": "Eşyaların yapıldığı büyük bina."
  },
  {
    "id": 1208,
    "category": "vocab",
    "en": "Company",
    "tr": "Şirket",
    "hintEn": "A business that sells things or services.",
    "hintTr": "Bir şeyler veya hizmetler satan işletme."
  },
  {
    "id": 1209,
    "category": "vocab",
    "en": "Full-Time",
    "tr": "Tam Zamanlı",
    "hintEn": "Working all the days of a week.",
    "hintTr": "Haftanın tüm günleri çalışmak."
  },
  {
    "id": 1210,
    "category": "vocab",
    "en": "Part-Time",
    "tr": "Yarı Zamanlı",
    "hintEn": "Working only some days or hours.",
    "hintTr": "Sadece bazı günler veya saatler çalışmak."
  },
  {
    "id": 1211,
    "category": "vocab",
    "en": "Long Hours",
    "tr": "Uzun Saatler",
    "hintEn": "Working for a very long time every day.",
    "hintTr": "Her gün çok uzun süre çalışmak."
  },
  {
    "id": 1212,
    "category": "vocab",
    "en": "Earn",
    "tr": "Kazanmak (Para)",
    "hintEn": "To get money for your work.",
    "hintTr": "Yaptığın iş için para almak."
  },
  {
    "id": 1213,
    "category": "vocab",
    "en": "Salary",
    "tr": "Maaş",
    "hintEn": "Money you get every month for your job.",
    "hintTr": "İşin için her ay aldığın para."
  },
  {
    "id": 1214,
    "category": "vocab",
    "en": "Wages",
    "tr": "Günlük Ücret",
    "hintEn": "Money you get every day or week for work.",
    "hintTr": "İş için her gün veya her hafta aldığın para."
  },
  {
    "id": 1215,
    "category": "vocab",
    "en": "Low",
    "tr": "Düşük",
    "hintEn": "Not high.",
    "hintTr": "Yüksek değil."
  },
  {
    "id": 1216,
    "category": "vocab",
    "en": "High",
    "tr": "Yüksek",
    "hintEn": "Not low.",
    "hintTr": "Düşük değil."
  },
  {
    "id": 1217,
    "category": "vocab",
    "en": "Design Building",
    "tr": "Bina Tasarlamak",
    "hintEn": "To draw plans for a new house.",
    "hintTr": "Yeni bir ev için planlar çizmek."
  },
  {
    "id": 1218,
    "category": "vocab",
    "en": "Discuss Something",
    "tr": "Bir Şeyi Tartışmak",
    "hintEn": "To talk about a subject with other people.",
    "hintTr": "Başka insanlarla bir konu hakkında konuşmak."
  },
  {
    "id": 1219,
    "category": "vocab",
    "en": "To Go To Meeting",
    "tr": "Bir Toplantıya Gitmek",
    "hintEn": "To go to a room to talk with people from work.",
    "hintTr": "İş yerindeki insanlarla konuşmak için odaya gitmek."
  },
  {
    "id": 1220,
    "category": "vocab",
    "en": "Write a Report",
    "tr": "Bir Rapor Yazmak",
    "hintEn": "To write information on paper for work.",
    "hintTr": "İş için kağıda bilgi yazmak."
  },
  {
    "id": 1221,
    "category": "vocab",
    "en": "Organize Meeting",
    "tr": "Toplantı Organize Etmek",
    "hintEn": "To plan a time for people to talk at work.",
    "hintTr": "İş yerinde insanların konuşması için zaman planlamak."
  },
  {
    "id": 1222,
    "category": "vocab",
    "en": "Colleague",
    "tr": "İş Arkadaşı / Meslektaş",
    "hintEn": "A person you work with.",
    "hintTr": "Birlikte çalıştığın kişi."
  },
  {
    "id": 1223,
    "category": "vocab",
    "en": "Webcam",
    "tr": "Video Kamera / İnternet Kamerası",
    "hintEn": "A small camera on a computer.",
    "hintTr": "Bilgisayardaki küçük kamera."
  },
  {
    "id": 1224,
    "category": "vocab",
    "en": "Printer",
    "tr": "Yazıcı",
    "hintEn": "A machine that prints words on paper.",
    "hintTr": "Kelimeleri kağıda yazdıran makine."
  },
  {
    "id": 1225,
    "category": "vocab",
    "en": "Laptop",
    "tr": "Dizüstü Bilgisayar",
    "hintEn": "A computer you can carry with you.",
    "hintTr": "Yanında taşıyabileceğin bilgisayar."
  },
  {
    "id": 1226,
    "category": "vocab",
    "en": "Hard Drive",
    "tr": "Sabit Disk",
    "hintEn": "The part of a computer that saves files.",
    "hintTr": "Bilgisayarın dosyaları kaydeden kısmı."
  },
  {
    "id": 1227,
    "category": "vocab",
    "en": "Monitor",
    "tr": "Monitör",
    "hintEn": "The screen of a computer.",
    "hintTr": "Bilgisayarın ekranı."
  },
  {
    "id": 1228,
    "category": "vocab",
    "en": "Disc",
    "tr": "Disk",
    "hintEn": "A round flat thing used to save music or files.",
    "hintTr": "Müzik veya dosya kaydetmek için yuvarlak düz şey."
  },
  {
    "id": 1229,
    "category": "vocab",
    "en": "Mouse",
    "tr": "Fare",
    "hintEn": "A small tool you move to use a computer.",
    "hintTr": "Bilgisayarı kullanmak için hareket ettirdiğin küçük alet."
  },
  {
    "id": 1230,
    "category": "vocab",
    "en": "Memory Stick",
    "tr": "Taşınabilir Bellek",
    "hintEn": "A very small thing to save computer files.",
    "hintTr": "Bilgisayar dosyalarını kaydetmek için çok küçük şey."
  },
  {
    "id": 1231,
    "category": "vocab",
    "en": "Screen",
    "tr": "Ekran",
    "hintEn": "The part of a TV or computer where you see pictures.",
    "hintTr": "TV veya bilgisayarın resimleri gördüğün kısmı."
  },
  {
    "id": 1232,
    "category": "vocab",
    "en": "Cut",
    "tr": "Kesmek",
    "hintEn": "To take a piece of text away.",
    "hintTr": "Bir metin parçasını almak/çıkarmak."
  },
  {
    "id": 1233,
    "category": "vocab",
    "en": "Paste",
    "tr": "Yapıştırmak",
    "hintEn": "To put a piece of text in a new place.",
    "hintTr": "Bir metin parçasını yeni bir yere koymak."
  },
  {
    "id": 1234,
    "category": "vocab",
    "en": "Save",
    "tr": "Kaydetmek",
    "hintEn": "To keep a document on a computer.",
    "hintTr": "Bir belgeyi bilgisayarda tutmak/saklamak."
  },
  {
    "id": 1235,
    "category": "vocab",
    "en": "Print",
    "tr": "Yazdırmak",
    "hintEn": "To put a document from a computer onto paper.",
    "hintTr": "Bilgisayardaki bir belgeyi kağıda dökmek."
  },
  {
    "id": 1236,
    "category": "vocab",
    "en": "Copy",
    "tr": "Kopyasını Almak / Kopyalamak",
    "hintEn": "To make the same text again.",
    "hintTr": "Aynı metni tekrar oluşturmak."
  },
  {
    "id": 1237,
    "category": "vocab",
    "en": "Check Your Email",
    "tr": "E-Posta Kontrol Etmek",
    "hintEn": "To look on your computer for new messages.",
    "hintTr": "Yeni mesajlar için bilgisayarına bakmak."
  },
  {
    "id": 1238,
    "category": "vocab",
    "en": "Get an Email",
    "tr": "Bir E-Posta Almak",
    "hintEn": "To receive a message on your computer.",
    "hintTr": "Bilgisayarından bir mesaj almak."
  },
  {
    "id": 1239,
    "category": "vocab",
    "en": "Reply To An Email",
    "tr": "Bir E-Postaya Cevap Vermek",
    "hintEn": "To send a message back.",
    "hintTr": "Geriye mesaj göndermek."
  },
  {
    "id": 1240,
    "category": "vocab",
    "en": "On The Internet",
    "tr": "İnternette",
    "hintEn": "Connected to the web.",
    "hintTr": "Web'e bağlı olmak."
  },
  {
    "id": 1241,
    "category": "vocab",
    "en": "Search",
    "tr": "Araştırmak",
    "hintEn": "To look for something online.",
    "hintTr": "İnternette bir şey aramak."
  },
  {
    "id": 1242,
    "category": "vocab",
    "en": "Wonderful / Fantastic",
    "tr": "Harika / Büyüleyici",
    "hintEn": "Really really good.",
    "hintTr": "Gerçekten çok çok iyi."
  },
  {
    "id": 1243,
    "category": "vocab",
    "en": "Favourite",
    "tr": "Favori",
    "hintEn": "The one you like the most.",
    "hintTr": "En çok sevdiğin şey."
  },
  {
    "id": 1244,
    "category": "vocab",
    "en": "Enjoy Doing Something",
    "tr": "Bir Şeyi Yapmaktan Keyif Almak",
    "hintEn": "To be happy doing an activity.",
    "hintTr": "Bir aktiviteyi yaparken mutlu olmak."
  },
  {
    "id": 1245,
    "category": "vocab",
    "en": "Boring",
    "tr": "Sıkıcı",
    "hintEn": "Not interesting.",
    "hintTr": "İlgi çekici değil."
  },
  {
    "id": 1246,
    "category": "vocab",
    "en": "Be Keen On Something",
    "tr": "Bir Şeye Çok İstekli Olmak",
    "hintEn": "To really like doing something.",
    "hintTr": "Bir şeyi yapmayı gerçekten çok sevmek."
  },
  {
    "id": 1247,
    "category": "vocab",
    "en": "To Be Interested In",
    "tr": "Bir Şeye İlgili Olmak",
    "hintEn": "Wanting to know more about a subject.",
    "hintTr": "Bir konu hakkında daha çok şey bilmek istemek."
  },
  {
    "id": 1248,
    "category": "vocab",
    "en": "Camping",
    "tr": "Kamp Yapma / Kamp",
    "hintEn": "Sleeping outside in a tent.",
    "hintTr": "Dışarıda bir çadırda uyumak."
  },
  {
    "id": 1249,
    "category": "vocab",
    "en": "Travelling",
    "tr": "Seyahat Etme / Seyahat",
    "hintEn": "Going to different places.",
    "hintTr": "Farklı yerlere gitmek."
  },
  {
    "id": 1250,
    "category": "vocab",
    "en": "Collect Things",
    "tr": "Bir Şeyler Toplamak",
    "hintEn": "To keep many things of the same kind.",
    "hintTr": "Aynı türden birçok şeyi saklamak/toplamak."
  },
  {
    "id": 1251,
    "category": "vocab",
    "en": "Skiing",
    "tr": "Kayak Yapma / Kayak",
    "hintEn": "Moving over snow on long flat boards.",
    "hintTr": "Uzun düz tahtalar üzerinde karda hareket etmek."
  },
  {
    "id": 1252,
    "category": "vocab",
    "en": "Fishing",
    "tr": "Balık Tutma",
    "hintEn": "Trying to catch fish.",
    "hintTr": "Balık yakalamaya çalışmak."
  },
  {
    "id": 1253,
    "category": "vocab",
    "en": "Spend Time",
    "tr": "Zaman Geçirmek / Zaman Harcamak",
    "hintEn": "To use your time doing something.",
    "hintTr": "Zamanını bir şey yaparak kullanmak."
  },
  {
    "id": 1254,
    "category": "vocab",
    "en": "Gym",
    "tr": "Spor / Spor Salonu",
    "hintEn": "A place to exercise and get strong.",
    "hintTr": "Egzersiz yapmak ve güçlenmek için bir yer."
  },
  {
    "id": 1255,
    "category": "vocab",
    "en": "Drawing",
    "tr": "Çizim Yapma / Çizim",
    "hintEn": "Making pictures with a pencil.",
    "hintTr": "Bir kalemle resimler yapmak."
  },
  {
    "id": 1256,
    "category": "vocab",
    "en": "Painting",
    "tr": "Resim Yapma / Resim / Tablo",
    "hintEn": "Making pictures with colors.",
    "hintTr": "Renklerle resimler yapmak."
  },
  {
    "id": 1257,
    "category": "vocab",
    "en": "Gardening",
    "tr": "Bahçecilik",
    "hintEn": "Growing plants and flowers outside.",
    "hintTr": "Dışarıda bitki ve çiçek yetiştirmek."
  },
  {
    "id": 1258,
    "category": "vocab",
    "en": "Repair Cars",
    "tr": "Arabaları Tamir Etmek",
    "hintEn": "To fix broken cars.",
    "hintTr": "Bozuk arabaları düzeltmek."
  },
  {
    "id": 1259,
    "category": "vocab",
    "en": "Listen to Something",
    "tr": "Bir Şeyi Dinlemek",
    "hintEn": "To hear music or words.",
    "hintTr": "Müzik veya kelimeleri duymaya çalışmak."
  },
  {
    "id": 1260,
    "category": "vocab",
    "en": "Shooting",
    "tr": "Atış Yapma / Atış",
    "hintEn": "Firing a gun for sport.",
    "hintTr": "Spor için silah ateşlemek."
  },
  {
    "id": 1261,
    "category": "vocab",
    "en": "Singing",
    "tr": "Şarkı Söyleme",
    "hintEn": "Making musical sounds with your voice.",
    "hintTr": "Sesinle müzikal sesler çıkarmak."
  },
  {
    "id": 1262,
    "category": "vocab",
    "en": "Band",
    "tr": "Müzik Grubu",
    "hintEn": "A group of people playing music together.",
    "hintTr": "Birlikte müzik çalan bir grup insan."
  },
  {
    "id": 1263,
    "category": "vocab",
    "en": "Well-Known",
    "tr": "İyi Bilinen",
    "hintEn": "\"Famous, known by many people.\"",
    "hintTr": "\"Ünlü, birçok insan tarafından bilinen.\""
  },
  {
    "id": 1264,
    "category": "vocab",
    "en": "Lead Singer",
    "tr": "Solist (Müzik Grubunun)",
    "hintEn": "The main person who sings in a band.",
    "hintTr": "Müzik grubunda şarkı söyleyen ana kişi."
  },
  {
    "id": 1265,
    "category": "vocab",
    "en": "Concert",
    "tr": "Konser",
    "hintEn": "A show where people play live music.",
    "hintTr": "İnsanların canlı müzik çaldığı gösteri."
  },
  {
    "id": 1266,
    "category": "vocab",
    "en": "Conductor",
    "tr": "Orkestra Şefi",
    "hintEn": "The person who leads an orchestra.",
    "hintTr": "Bir orkestrayı yöneten kişi."
  },
  {
    "id": 1267,
    "category": "vocab",
    "en": "Violinist",
    "tr": "Kemancı",
    "hintEn": "A person who plays the violin.",
    "hintTr": "Keman çalan kişi."
  },
  {
    "id": 1268,
    "category": "vocab",
    "en": "Violin",
    "tr": "Keman",
    "hintEn": "A wooden instrument you play under your chin.",
    "hintTr": "Çeneni altında çaldığın ahşap enstrüman."
  },
  {
    "id": 1269,
    "category": "vocab",
    "en": "Composer",
    "tr": "Bestekar",
    "hintEn": "A person who writes music.",
    "hintTr": "Müzik yazan kişi."
  },
  {
    "id": 1270,
    "category": "vocab",
    "en": "Perform",
    "tr": "İcra Etmek",
    "hintEn": "To sing or act in front of people.",
    "hintTr": "İnsanların önünde şarkı söylemek veya oynamak."
  },
  {
    "id": 1271,
    "category": "vocab",
    "en": "Thriller",
    "tr": "Gerilim",
    "hintEn": "An exciting and scary movie or book.",
    "hintTr": "Heyecan verici ve korkutucu film veya kitap."
  },
  {
    "id": 1272,
    "category": "vocab",
    "en": "Exciting",
    "tr": "Heyecan Verici",
    "hintEn": "Making you feel very happy and active.",
    "hintTr": "Seni çok mutlu ve aktif hissettiren."
  },
  {
    "id": 1273,
    "category": "vocab",
    "en": "Comedy",
    "tr": "Komedi",
    "hintEn": "A funny movie that makes you laugh.",
    "hintTr": "Seni güldüren eğlenceli film."
  },
  {
    "id": 1274,
    "category": "vocab",
    "en": "Funny",
    "tr": "Eğlenceli",
    "hintEn": "Making you smile and laugh.",
    "hintTr": "Seni gülümseten ve güldüren."
  },
  {
    "id": 1275,
    "category": "vocab",
    "en": "Violent",
    "tr": "Şiddetli / Şiddet İçerikli",
    "hintEn": "Having fighting and hurting people.",
    "hintTr": "Dövüşme ve insanları incitme içeren."
  },
  {
    "id": 1276,
    "category": "vocab",
    "en": "Love Story",
    "tr": "Aşk Hikayesi",
    "hintEn": "A movie about two people in love.",
    "hintTr": "Aşık iki insan hakkında bir film."
  },
  {
    "id": 1277,
    "category": "vocab",
    "en": "Cinema",
    "tr": "Sinema",
    "hintEn": "A place where you watch movies on a big screen.",
    "hintTr": "Büyük ekranda film izlediğin yer."
  },
  {
    "id": 1278,
    "category": "vocab",
    "en": "Movie",
    "tr": "Film",
    "hintEn": "A moving picture you watch on TV or at the cinema.",
    "hintTr": "TV'de veya sinemada izlediğin hareketli resim."
  },
  {
    "id": 1279,
    "category": "vocab",
    "en": "Review",
    "tr": "İnceleme",
    "hintEn": "Writing what you think about a book or movie.",
    "hintTr": "Bir kitap veya film hakkında ne düşündüğünü yazmak."
  },
  {
    "id": 1280,
    "category": "vocab",
    "en": "Star",
    "tr": "Yıldız",
    "hintEn": "A very famous actor or singer.",
    "hintTr": "Çok ünlü bir aktör veya şarkıcı."
  },
  {
    "id": 1281,
    "category": "vocab",
    "en": "Actor",
    "tr": "Aktör",
    "hintEn": "A person who plays a character in a movie.",
    "hintTr": "Bir filmde bir karakteri oynayan kişi."
  },
  {
    "id": 1282,
    "category": "vocab",
    "en": "See a Film At the Cinema",
    "tr": "Sinemada Bir Film İzlemek",
    "hintEn": "To go out and watch a movie.",
    "hintTr": "Dışarı çıkıp bir film izlemek."
  },
  {
    "id": 1283,
    "category": "vocab",
    "en": "Media",
    "tr": "Medya",
    "hintEn": "\"TV, radio, and newspapers.\"",
    "hintTr": "\"TV, radyo ve gazeteler.\""
  },
  {
    "id": 1284,
    "category": "vocab",
    "en": "Magazine",
    "tr": "Dergi",
    "hintEn": "A thin book with pictures and stories you buy every week.",
    "hintTr": "Her hafta aldığın resimli ve hikayeli ince kitap."
  },
  {
    "id": 1285,
    "category": "vocab",
    "en": "Report",
    "tr": "Rapor",
    "hintEn": "A news story on TV or in a paper.",
    "hintTr": "TV'de veya gazetede bir haber."
  },
  {
    "id": 1286,
    "category": "vocab",
    "en": "Event",
    "tr": "Olay",
    "hintEn": "Something important that happens.",
    "hintTr": "Gerçekleşen önemli bir şey."
  },
  {
    "id": 1287,
    "category": "vocab",
    "en": "Die",
    "tr": "Ölmek",
    "hintEn": "To stop living.",
    "hintTr": "Yaşamayı bırakmak."
  },
  {
    "id": 1288,
    "category": "vocab",
    "en": "War",
    "tr": "Savaş",
    "hintEn": "Fighting between countries.",
    "hintTr": "Ülkeler arasındaki savaş/çatışma."
  },
  {
    "id": 1289,
    "category": "vocab",
    "en": "Peace",
    "tr": "Barış / Huzur",
    "hintEn": "No war; quiet and calm.",
    "hintTr": "Savaş olmaması; sessiz ve sakin."
  },
  {
    "id": 1290,
    "category": "vocab",
    "en": "Disaster",
    "tr": "Felaket",
    "hintEn": "A very bad event like a big fire.",
    "hintTr": "Büyük bir yangın gibi çok kötü bir olay."
  },
  {
    "id": 1291,
    "category": "vocab",
    "en": "Celebrity",
    "tr": "Ünlü (Kişi)",
    "hintEn": "A famous person.",
    "hintTr": "Ünlü bir insan."
  },
  {
    "id": 1292,
    "category": "vocab",
    "en": "Advert / Advertisement",
    "tr": "İlan / Reklam",
    "hintEn": "A picture or video selling something.",
    "hintTr": "Bir şey satan bir resim veya video."
  },
  {
    "id": 1293,
    "category": "vocab",
    "en": "Newspaper / Paper",
    "tr": "Gazete",
    "hintEn": "Large paper with daily news.",
    "hintTr": "Günlük haberleri olan büyük kağıt."
  },
  {
    "id": 1294,
    "category": "vocab",
    "en": "Find Out",
    "tr": "Bulmak",
    "hintEn": "To learn information.",
    "hintTr": "Bilgi öğrenmek."
  },
  {
    "id": 1295,
    "category": "vocab",
    "en": "Happen",
    "tr": "Olmak / Meydana Gelmek",
    "hintEn": "To take place.",
    "hintTr": "Gerçekleşmek."
  },
  {
    "id": 1296,
    "category": "vocab",
    "en": "Article",
    "tr": "Makale",
    "hintEn": "A piece of writing in a newspaper.",
    "hintTr": "Gazetedeki bir yazı parçası."
  },
  {
    "id": 1297,
    "category": "vocab",
    "en": "On TV",
    "tr": "Televizyonda",
    "hintEn": "Showing on television.",
    "hintTr": "Televizyonda gösterilen."
  },
  {
    "id": 1298,
    "category": "vocab",
    "en": "On the Radio",
    "tr": "Radyoda",
    "hintEn": "Playing on the radio.",
    "hintTr": "Radyoda çalan."
  },
  {
    "id": 1299,
    "category": "vocab",
    "en": "Nothing Much / Nothing Important",
    "tr": "Önemli Bir Şey Değil",
    "hintEn": "Not anything big or special.",
    "hintTr": "Büyük veya özel bir şey değil."
  },
  {
    "id": 1300,
    "category": "vocab",
    "en": "Weather Forecast",
    "tr": "Hava Durumu / Tahmini",
    "hintEn": "News about if it will rain or be sunny.",
    "hintTr": "Yağmur yağıp güneşli olacağı hakkındaki haber."
  },
  {
    "id": 1301,
    "category": "vocab",
    "en": "Believe",
    "tr": "İnanmak",
    "hintEn": "To think something is true.",
    "hintTr": "Bir şeyin doğru olduğunu düşünmek."
  },
  {
    "id": 1302,
    "category": "vocab",
    "en": "To Go Abroad",
    "tr": "Yurtdışına Gitmek",
    "hintEn": "To go to another country.",
    "hintTr": "Başka bir ülkeye gitmek."
  },
  {
    "id": 1303,
    "category": "vocab",
    "en": "To Book a Flight",
    "tr": "Bir Uçuş Rezervasyonu Yapmak",
    "hintEn": "To buy a ticket for a plane.",
    "hintTr": "Bir uçak için bilet almak."
  },
  {
    "id": 1304,
    "category": "vocab",
    "en": "Find Your Passport",
    "tr": "Pasaportunu Bulmak",
    "hintEn": "To look for your travel document.",
    "hintTr": "Seyahat belgeni aramak/bulmak."
  },
  {
    "id": 1305,
    "category": "vocab",
    "en": "To Get a Visa",
    "tr": "Vize Almak",
    "hintEn": "To get permission to enter a country.",
    "hintTr": "Bir ülkeye girmek için izin almak."
  },
  {
    "id": 1306,
    "category": "vocab",
    "en": "To Get Travel Insurance",
    "tr": "Seyahat Sigortası Almak",
    "hintEn": "To pay for help if you get sick on holiday.",
    "hintTr": "Tatilde hastalanırsan yardım almak için para ödemek."
  },
  {
    "id": 1307,
    "category": "vocab",
    "en": "To Get Foreign Currency",
    "tr": "Yabancı Ülke Parası Almak",
    "hintEn": "To buy the money used in another country.",
    "hintTr": "Başka bir ülkede kullanılan parayı almak."
  },
  {
    "id": 1308,
    "category": "vocab",
    "en": "To Pack Your Suitcase",
    "tr": "Valizini Toplamak",
    "hintEn": "To put clothes in your bag for a trip.",
    "hintTr": "Bir gezi için kıyafetleri çantana koymak."
  },
  {
    "id": 1309,
    "category": "vocab",
    "en": "To Hire a Car",
    "tr": "Araba Kiralamak",
    "hintEn": "To pay to use a car for a few days.",
    "hintTr": "Bir arabayı birkaç gün kullanmak için para ödemek."
  },
  {
    "id": 1310,
    "category": "vocab",
    "en": "To Arrange Something",
    "tr": "Bir Şey Ayarlamak",
    "hintEn": "To plan and prepare for something.",
    "hintTr": "Bir şey için plan yapmak ve hazırlanmak."
  },
  {
    "id": 1311,
    "category": "vocab",
    "en": "On Holiday",
    "tr": "Tatilde",
    "hintEn": "Away from work or school to rest.",
    "hintTr": "Dinlenmek için işten veya okuldan uzakta olmak."
  },
  {
    "id": 1312,
    "category": "vocab",
    "en": "Currency",
    "tr": "Döviz",
    "hintEn": "The money a country uses.",
    "hintTr": "Bir ülkenin kullandığı para."
  },
  {
    "id": 1313,
    "category": "vocab",
    "en": "To Stay in a Hotel",
    "tr": "Bir Otelde Kalmak",
    "hintEn": "To sleep in a hotel during a trip.",
    "hintTr": "Bir gezi sırasında otelde uyumak."
  },
  {
    "id": 1314,
    "category": "vocab",
    "en": "Facilities",
    "tr": "Özellikler",
    "hintEn": "\"Things a hotel has, like a pool or gym.\"",
    "hintTr": "Havuz veya spor salonu gibi otelin sahip olduğu şeyler."
  },
  {
    "id": 1315,
    "category": "vocab",
    "en": "Air Conditioning",
    "tr": "Klima",
    "hintEn": "A machine that makes the air cold.",
    "hintTr": "Havayı soğuk yapan makine."
  },
  {
    "id": 1316,
    "category": "vocab",
    "en": "Central Heating",
    "tr": "Merkezi Isıtma",
    "hintEn": "A system that makes a building warm.",
    "hintTr": "Bir binayı sıcak yapan sistem."
  },
  {
    "id": 1317,
    "category": "vocab",
    "en": "Staff",
    "tr": "Personel / Kadro",
    "hintEn": "The people who work in a place.",
    "hintTr": "Bir yerde çalışan insanlar."
  },
  {
    "id": 1318,
    "category": "vocab",
    "en": "Helpful",
    "tr": "Yardımcı / Yardımsever",
    "hintEn": "Happy to help you.",
    "hintTr": "Sana yardım etmekten mutlu olan."
  },
  {
    "id": 1319,
    "category": "vocab",
    "en": "Tourist",
    "tr": "Turist",
    "hintEn": "A person visiting a place on holiday.",
    "hintTr": "Tatilde bir yeri ziyaret eden kişi."
  },
  {
    "id": 1320,
    "category": "vocab",
    "en": "Delicious",
    "tr": "Lezzetli",
    "hintEn": "Tasting very good.",
    "hintTr": "Tadı çok güzel olan."
  },
  {
    "id": 1321,
    "category": "vocab",
    "en": "Recommend",
    "tr": "Önermek",
    "hintEn": "To say something is good to try.",
    "hintTr": "Bir şeyi denemenin iyi olduğunu söylemek."
  },
  {
    "id": 1322,
    "category": "vocab",
    "en": "To Book A Room",
    "tr": "Bir Oda Rezervasyonu Yapmak",
    "hintEn": "To save a room in a hotel for yourself.",
    "hintTr": "Kendin için bir otelde oda ayırtmak."
  },
  {
    "id": 1323,
    "category": "vocab",
    "en": "Included",
    "tr": "İçeren",
    "hintEn": "Part of the price.",
    "hintTr": "Fiyata dahil olan kısım."
  },
  {
    "id": 1324,
    "category": "vocab",
    "en": "Never Mind",
    "tr": "Dert Etme / Boşver",
    "hintEn": "It is not a problem.",
    "hintTr": "Bu bir problem değil."
  },
  {
    "id": 1325,
    "category": "vocab",
    "en": "Details",
    "tr": "Detaylar",
    "hintEn": "The small pieces of information.",
    "hintTr": "Küçük bilgi parçaları."
  },
  {
    "id": 1326,
    "category": "vocab",
    "en": "Double Room",
    "tr": "Çift Kişilik Oda",
    "hintEn": "A room with one big bed for two people.",
    "hintTr": "İki kişi için büyük bir yatağı olan oda."
  },
  {
    "id": 1327,
    "category": "vocab",
    "en": "Single Room",
    "tr": "Tek Kişilik Oda",
    "hintEn": "A room for one person to sleep in.",
    "hintTr": "Bir kişinin uyuması için olan oda."
  },
  {
    "id": 1328,
    "category": "vocab",
    "en": "Twin Room",
    "tr": "Çift Yataklı Oda",
    "hintEn": "A room with two single beds.",
    "hintTr": "İki tekli yatağı olan oda."
  },
  {
    "id": 1329,
    "category": "vocab",
    "en": "That's a Shame",
    "tr": "Bu Bir Utanç",
    "hintEn": "That is sad or unlucky.",
    "hintTr": "Bu üzücü veya şanssız bir durum."
  },
  {
    "id": 1330,
    "category": "vocab",
    "en": "What a Shame",
    "tr": "Ne Utanç Verici",
    "hintEn": "Used when something is disappointing.",
    "hintTr": "Bir şey hayal kırıklığı yarattığında söylenir."
  },
  {
    "id": 1331,
    "category": "vocab",
    "en": "Passengers",
    "tr": "Yolcular",
    "hintEn": "\"People travelling on a bus, train, or plane.\"",
    "hintTr": "\"Otobüs, tren veya uçakta seyahat eden insanlar.\""
  },
  {
    "id": 1332,
    "category": "vocab",
    "en": "Airport",
    "tr": "Havaalanı",
    "hintEn": "The place where planes fly from.",
    "hintTr": "Uçakların kalktığı yer."
  },
  {
    "id": 1333,
    "category": "vocab",
    "en": "Luggage / Suitcase / Bag",
    "tr": "Bagaj / Valiz / Çanta",
    "hintEn": "Bags you carry when you travel.",
    "hintTr": "Seyahat ederken taşıdığın çantalar."
  },
  {
    "id": 1334,
    "category": "vocab",
    "en": "Ticket",
    "tr": "Bilet",
    "hintEn": "A piece of paper that lets you travel.",
    "hintTr": "Seyahat etmeni sağlayan kağıt parçası."
  },
  {
    "id": 1335,
    "category": "vocab",
    "en": "Hand Luggage",
    "tr": "El Bagajı",
    "hintEn": "A small bag you take on the plane with you.",
    "hintTr": "\"Yanına, uçağa aldığın küçük çanta.\""
  },
  {
    "id": 1336,
    "category": "vocab",
    "en": "Window Seat",
    "tr": "Pencere Koltuğu",
    "hintEn": "A seat next to the window.",
    "hintTr": "Pencerenin yanındaki koltuk."
  },
  {
    "id": 1337,
    "category": "vocab",
    "en": "Aisle",
    "tr": "Koridor",
    "hintEn": "The walking space between seats.",
    "hintTr": "Koltuklar arasındaki yürüme alanı."
  },
  {
    "id": 1338,
    "category": "vocab",
    "en": "Have a Good Flight",
    "tr": "İyi Uçuşlar",
    "hintEn": "I hope your plane trip is nice.",
    "hintTr": "Umarım uçak gezin güzel geçer."
  },
  {
    "id": 1339,
    "category": "vocab",
    "en": "Departed",
    "tr": "Ayrılmış",
    "hintEn": "Already left.",
    "hintTr": "Çoktan ayrılmış."
  },
  {
    "id": 1340,
    "category": "vocab",
    "en": "Departure",
    "tr": "Havalanma / Kalkış",
    "hintEn": "The time the plane leaves.",
    "hintTr": "Uçağın ayrıldığı zaman."
  },
  {
    "id": 1341,
    "category": "vocab",
    "en": "Gate",
    "tr": "Kapı",
    "hintEn": "The door you go through to get on the plane.",
    "hintTr": "Uçağa binmek için geçtiğin kapı."
  },
  {
    "id": 1342,
    "category": "vocab",
    "en": "Delay",
    "tr": "Gecikme",
    "hintEn": "Being late.",
    "hintTr": "Geç kalmak / Gecikmek."
  },
  {
    "id": 1343,
    "category": "vocab",
    "en": "Fasten Seat Belt",
    "tr": "Emniyet Kemeri Takmak",
    "hintEn": "To click your belt closed in a plane or car.",
    "hintTr": "Uçakta veya arabada kemerini kapatmak."
  },
  {
    "id": 1344,
    "category": "vocab",
    "en": "Plane Takes Off",
    "tr": "Uçak Kalkar",
    "hintEn": "The plane goes up into the air.",
    "hintTr": "Uçak havaya yükselir."
  },
  {
    "id": 1345,
    "category": "vocab",
    "en": "Plane Lands",
    "tr": "Uçak İner",
    "hintEn": "The plane comes down to the ground.",
    "hintTr": "Uçak yere iner."
  },
  {
    "id": 1346,
    "category": "vocab",
    "en": "Baggage Reclaim",
    "tr": "Bagaj Teslim",
    "hintEn": "Where you pick up your bags after a flight.",
    "hintTr": "Uçuştan sonra çantalarını aldığın yer."
  },
  {
    "id": 1347,
    "category": "vocab",
    "en": "To Go Through Customs",
    "tr": "Gümrükten Geçmek",
    "hintEn": "To have your bags checked at an airport.",
    "hintTr": "Havaalanında çantalarını kontrol ettirmek."
  },
  {
    "id": 1348,
    "category": "vocab",
    "en": "Resort",
    "tr": "Tatil Yeri",
    "hintEn": "A place with hotels where people go for holidays.",
    "hintTr": "İnsanların tatil için gittiği otelleri olan yer."
  },
  {
    "id": 1349,
    "category": "vocab",
    "en": "Fly",
    "tr": "Uçuş Yapmak",
    "hintEn": "To travel by plane.",
    "hintTr": "Uçakla seyahat etmek."
  },
  {
    "id": 1350,
    "category": "vocab",
    "en": "Rent an Apartment",
    "tr": "Apartman Dairesi Kiralamak",
    "hintEn": "To pay to live in a flat for a short time.",
    "hintTr": "Kısa bir süre bir dairede yaşamak için para ödemek."
  },
  {
    "id": 1351,
    "category": "vocab",
    "en": "Sunbathe",
    "tr": "Güneşlenmek",
    "hintEn": "To sit in the sun to get brown.",
    "hintTr": "Esmerleşmek için güneşte oturmak."
  },
  {
    "id": 1352,
    "category": "vocab",
    "en": "Relax",
    "tr": "Rahatlamak",
    "hintEn": "To rest and be calm.",
    "hintTr": "Dinlenmek ve sakin olmak."
  },
  {
    "id": 1353,
    "category": "vocab",
    "en": "An Hour or So",
    "tr": "Bir Saate Kadar",
    "hintEn": "Around 60 minutes.",
    "hintTr": "Yaklaşık 60 dakika."
  },
  {
    "id": 1354,
    "category": "vocab",
    "en": "To Go For a Walk",
    "tr": "Yürüyüşe Çıkmak",
    "hintEn": "To walk outside for fun.",
    "hintTr": "Eğlence için dışarıda yürümek."
  },
  {
    "id": 1355,
    "category": "vocab",
    "en": "Perfect",
    "tr": "Mükemmel",
    "hintEn": "\"Very good, with no problems.\"",
    "hintTr": "\"Çok iyi, hiçbir sorunu yok.\""
  },
  {
    "id": 1356,
    "category": "vocab",
    "en": "Map",
    "tr": "Harita",
    "hintEn": "A paper showing roads and towns.",
    "hintTr": "Yolları ve kasabaları gösteren kağıt."
  },
  {
    "id": 1357,
    "category": "vocab",
    "en": "Guide",
    "tr": "Rehber",
    "hintEn": "A person who shows you places.",
    "hintTr": "Sana yerleri gösteren kişi."
  },
  {
    "id": 1358,
    "category": "vocab",
    "en": "Guide Book",
    "tr": "Rehber Kitap",
    "hintEn": "A book with information for tourists.",
    "hintTr": "Turistler için bilgi içeren kitap."
  },
  {
    "id": 1359,
    "category": "vocab",
    "en": "To Go Sightseeing",
    "tr": "Geziye Çıkmak / Bölge Turuna Çıkmak",
    "hintEn": "To visit famous places in a city.",
    "hintTr": "Bir şehirdeki ünlü yerleri ziyaret etmek."
  },
  {
    "id": 1360,
    "category": "vocab",
    "en": "Art Gallery",
    "tr": "Sanat Galerisi",
    "hintEn": "A building to see beautiful paintings.",
    "hintTr": "Güzel tabloları görmek için bir bina."
  },
  {
    "id": 1361,
    "category": "vocab",
    "en": "To Visit Museum",
    "tr": "Müze Ziyaret Etmek",
    "hintEn": "To go see old and important things.",
    "hintTr": "Eski ve önemli şeyleri görmeye gitmek."
  },
  {
    "id": 1362,
    "category": "vocab",
    "en": "To Look Around",
    "tr": "Bakınmak / Etrafı Seyretmek",
    "hintEn": "To walk around and see what is there.",
    "hintTr": "Etrafta yürümek ve ne olduğuna bakmak."
  },
  {
    "id": 1363,
    "category": "vocab",
    "en": "To Get Lost",
    "tr": "Kaybolmak",
    "hintEn": "Not knowing where you are.",
    "hintTr": "Nerede olduğunu bilmemek."
  },
  {
    "id": 1364,
    "category": "vocab",
    "en": "To Take Photos",
    "tr": "Fotoğraf Çekmek",
    "hintEn": "To use a camera to make pictures.",
    "hintTr": "Resim yapmak için bir kamera kullanmak."
  },
  {
    "id": 1365,
    "category": "vocab",
    "en": "Cash Machine",
    "tr": "Para Çekme Makinesi",
    "hintEn": "A machine in the street that gives money.",
    "hintTr": "Sokakta para veren makine (ATM)."
  },
  {
    "id": 1366,
    "category": "vocab",
    "en": "Change Dollars into Euro",
    "tr": "Doları Avroya Çevirmek",
    "hintEn": "To swap one money for another.",
    "hintTr": "Bir parayı diğeriyle takas etmek."
  },
  {
    "id": 1367,
    "category": "vocab",
    "en": "Exchange Rate",
    "tr": "Döviz Kuru",
    "hintEn": "How much one currency is worth in another.",
    "hintTr": "Bir para biriminin diğerinde ne kadar ettiği."
  },
  {
    "id": 1368,
    "category": "vocab",
    "en": "Commission",
    "tr": "Komisyon",
    "hintEn": "Extra money you pay for a service.",
    "hintTr": "Bir hizmet için ödediğin ekstra para."
  },
  {
    "id": 1369,
    "category": "vocab",
    "en": "To Charge Someone",
    "tr": "Birini Suçlamak",
    "hintEn": "To say someone did a bad thing.",
    "hintTr": "Birinin kötü bir şey yaptığını söylemek."
  },
  {
    "id": 1370,
    "category": "vocab",
    "en": "Envelope",
    "tr": "Zarf",
    "hintEn": "The paper cover for a letter.",
    "hintTr": "Bir mektup için kağıt kılıf."
  },
  {
    "id": 1371,
    "category": "vocab",
    "en": "Put a Stamp",
    "tr": "Posta Pulu Koymak",
    "hintEn": "To put a small sticker on a letter to send it.",
    "hintTr": "Göndermek için mektuba küçük bir etiket yapıştırmak."
  },
  {
    "id": 1372,
    "category": "vocab",
    "en": "Postman",
    "tr": "Postacı (Erkek)",
    "hintEn": "A man who brings letters to your house.",
    "hintTr": "Evinize mektupları getiren adam."
  },
  {
    "id": 1373,
    "category": "vocab",
    "en": "Postwoman",
    "tr": "Postacı (Kadın)",
    "hintEn": "A woman who brings letters to your house.",
    "hintTr": "Evinize mektupları getiren kadın."
  },
  {
    "id": 1374,
    "category": "vocab",
    "en": "A Parcel",
    "tr": "Posta / Parsel / Koli",
    "hintEn": "A box you send in the mail.",
    "hintTr": "Postada gönderdiğin kutu."
  },
  {
    "id": 1375,
    "category": "vocab",
    "en": "Have a Nice Day",
    "tr": "İyi Günler",
    "hintEn": "A nice way to say goodbye.",
    "hintTr": "Hoşçakal demenin güzel bir yolu."
  },
  {
    "id": 1376,
    "category": "vocab",
    "en": "Have a Good Day",
    "tr": "İyi Günler",
    "hintEn": "A friendly goodbye.",
    "hintTr": "Arkadaşça bir veda."
  },
  {
    "id": 1377,
    "category": "vocab",
    "en": "Well Done",
    "tr": "Aferin",
    "hintEn": "Good job.",
    "hintTr": "İyi iş / Tebrikler."
  },
  {
    "id": 1378,
    "category": "vocab",
    "en": "Congratulations",
    "tr": "Tebrikler",
    "hintEn": "What you say when someone does something great.",
    "hintTr": "Biri harika bir şey yaptığında söylediğin şey."
  },
  {
    "id": 1379,
    "category": "vocab",
    "en": "Good Luck",
    "tr": "İyi Şanslar",
    "hintEn": "Wishing good things for someone.",
    "hintTr": "Biri için iyi şeyler dilemek."
  },
  {
    "id": 1380,
    "category": "vocab",
    "en": "Cheers",
    "tr": "Şerefe",
    "hintEn": "Said before drinking with friends.",
    "hintTr": "Arkadaşlarla içki içmeden önce söylenir."
  },
  {
    "id": 1381,
    "category": "vocab",
    "en": "To Go Out For",
    "tr": "Dışarı Çıkmak",
    "hintEn": "To leave the house to do something fun.",
    "hintTr": "Eğlenceli bir şey yapmak için evden çıkmak."
  },
  {
    "id": 1382,
    "category": "vocab",
    "en": "Come Around For (a Drink)",
    "tr": "İçmek İçin Dışarıda Buluşmak",
    "hintEn": "To visit someone at their house or outside.",
    "hintTr": "Birini evinde veya dışarıda ziyaret etmek."
  },
  {
    "id": 1383,
    "category": "vocab",
    "en": "Invite",
    "tr": "Davet Etmek",
    "hintEn": "To ask someone to come to your party.",
    "hintTr": "Birinden partine gelmesini istemek."
  },
  {
    "id": 1384,
    "category": "vocab",
    "en": "Party",
    "tr": "Parti",
    "hintEn": "\"A fun meeting with friends, music, and food.\"",
    "hintTr": "\"Arkadaşlarla, müzik ve yemek olan eğlenceli buluşma.\""
  },
  {
    "id": 1385,
    "category": "vocab",
    "en": "Great",
    "tr": "Harika",
    "hintEn": "Very good.",
    "hintTr": "Çok iyi."
  },
  {
    "id": 1386,
    "category": "vocab",
    "en": "I'd Love To",
    "tr": "Çok İsterim",
    "hintEn": "\"Saying 'yes' to an invitation happily.\"",
    "hintTr": "\"Bir davete mutlu bir şekilde 'evet' demek.\""
  },
  {
    "id": 1387,
    "category": "vocab",
    "en": "That Sounds Lovely",
    "tr": "Kulağa Hoş Geliyor",
    "hintEn": "That seems like a very nice idea.",
    "hintTr": "Bu çok güzel bir fikir gibi görünüyor."
  },
  {
    "id": 1388,
    "category": "vocab",
    "en": "I'm Afraid I Can't",
    "tr": "Korkarım Yapamam",
    "hintEn": "\"A polite way to say 'no'.\"",
    "hintTr": "\"Hayır' demenin kibar bir yolu.\""
  },
  {
    "id": 1389,
    "category": "vocab",
    "en": "Suggest",
    "tr": "Önermek",
    "hintEn": "To give an idea.",
    "hintTr": "Bir fikir vermek."
  },
  {
    "id": 1390,
    "category": "vocab",
    "en": "Offer",
    "tr": "Ismarlamak",
    "hintEn": "To ask if someone wants something.",
    "hintTr": "Birinin bir şey isteyip istemediğini sormak."
  },
  {
    "id": 1391,
    "category": "vocab",
    "en": "Accept",
    "tr": "Kabul Etmek",
    "hintEn": "\"To say 'yes'.\"",
    "hintTr": "\"'Evet' demek.\""
  },
  {
    "id": 1392,
    "category": "vocab",
    "en": "Refuse",
    "tr": "Geri Çevirmek",
    "hintEn": "\"To say 'no'.\"",
    "hintTr": "\"'Hayır' demek.\""
  },
  {
    "id": 1393,
    "category": "vocab",
    "en": "Let Me Pay",
    "tr": "Bırak Ben Ödeyeyim",
    "hintEn": "I will give the money for this.",
    "hintTr": "Bunun için parayı ben vereceğim."
  },
  {
    "id": 1394,
    "category": "vocab",
    "en": "Let Me Give You a Lift",
    "tr": "Ben Seni Bırakayım",
    "hintEn": "I will drive you in my car.",
    "hintTr": "Seni arabamla götüreceğim."
  },
  {
    "id": 1395,
    "category": "vocab",
    "en": "Apologize To Something",
    "tr": "Bir Şey İçin Özür Dilemek",
    "hintEn": "To say sorry for doing something wrong.",
    "hintTr": "Yanlış bir şey yaptığın için üzgün olduğunu söylemek."
  },
  {
    "id": 1396,
    "category": "vocab",
    "en": "Rude",
    "tr": "Kaba",
    "hintEn": "Not polite; speaking badly.",
    "hintTr": "Kibar olmayan; kötü konuşan."
  },
  {
    "id": 1397,
    "category": "vocab",
    "en": "Lose",
    "tr": "Kaybetmek",
    "hintEn": "Not knowing where your thing is.",
    "hintTr": "Eşyanın nerede olduğunu bilmemek."
  },
  {
    "id": 1398,
    "category": "vocab",
    "en": "Excellent",
    "tr": "Harika",
    "hintEn": "Really perfect.",
    "hintTr": "Gerçekten mükemmel."
  },
  {
    "id": 1399,
    "category": "vocab",
    "en": "Think",
    "tr": "Düşünmek",
    "hintEn": "To use your mind.",
    "hintTr": "Zihnini kullanmak."
  },
  {
    "id": 1400,
    "category": "vocab",
    "en": "Thought",
    "tr": "Düşünce",
    "hintEn": "An idea in your head.",
    "hintTr": "Kafandaki bir fikir."
  },
  {
    "id": 1401,
    "category": "vocab",
    "en": "Agree With Someone",
    "tr": "Biriyle Aynı Fikirde Olmak",
    "hintEn": "To have the same idea as another person.",
    "hintTr": "Başka bir kişiyle aynı fikre sahip olmak."
  },
  {
    "id": 1402,
    "category": "vocab",
    "en": "Personally",
    "tr": "Kişisel Olarak",
    "hintEn": "My own opinion is...",
    "hintTr": "Benim kendi fikrim..."
  },
  {
    "id": 1403,
    "category": "vocab",
    "en": "A Waste of Money / Time",
    "tr": "Para İsrafı / Zaman Kaybı",
    "hintEn": "Using time for no good reason.",
    "hintTr": "Zamanı iyi bir neden olmadan kullanmak."
  },
  {
    "id": 1404,
    "category": "vocab",
    "en": "Take a Message",
    "tr": "Mesaj / Not Almak",
    "hintEn": "To write down words from someone on the phone.",
    "hintTr": "Telefondaki birinden gelen sözleri yazmak."
  },
  {
    "id": 1405,
    "category": "vocab",
    "en": "Leave a Message",
    "tr": "Mesaj Bırakmak",
    "hintEn": "To say words for someone who is not there.",
    "hintTr": "Orada olmayan biri için sözler söylemek."
  },
  {
    "id": 1406,
    "category": "vocab",
    "en": "Line is Busy / Engaged",
    "tr": "Hat Meşgul",
    "hintEn": "The person is already talking on the phone.",
    "hintTr": "Kişi zaten telefonda konuşuyor."
  },
  {
    "id": 1407,
    "category": "vocab",
    "en": "Wrong Number",
    "tr": "Yanlış Numara",
    "hintEn": "Calling a person you did not want to call.",
    "hintTr": "Aramak istemediğin bir kişiyi aramak."
  },
  {
    "id": 1408,
    "category": "vocab",
    "en": "Anniversaries",
    "tr": "Yıl dönümleri",
    "hintEn": "Special dates we remember every year.",
    "hintTr": "Her yıl hatırladığımız özel tarihler."
  },
  {
    "id": 1409,
    "category": "vocab",
    "en": "Beach",
    "tr": "Plaj / Kumsal",
    "hintEn": "A sandy place next to the sea.",
    "hintTr": "Deniz kenarındaki kumlu yer."
  },
  {
    "id": 1410,
    "category": "vocab",
    "en": "Beautiful",
    "tr": "Güzel",
    "hintEn": "Very nice to look at.",
    "hintTr": "Bakması çok hoş olan."
  },
  {
    "id": 1411,
    "category": "vocab",
    "en": "Border",
    "tr": "Sınır",
    "hintEn": "The line between two countries.",
    "hintTr": "İki ülke arasındaki çizgi."
  },
  {
    "id": 1412,
    "category": "vocab",
    "en": "Both",
    "tr": "İkisi de / Her ikisi",
    "hintEn": "The two things together.",
    "hintTr": "İki şeyin birden olması."
  },
  {
    "id": 1413,
    "category": "vocab",
    "en": "Bowl",
    "tr": "Kase",
    "hintEn": "A deep, round dish for food like soup.",
    "hintTr": "Çorba gibi yiyecekler için derin, yuvarlak kap."
  },
  {
    "id": 1414,
    "category": "vocab",
    "en": "Cheap",
    "tr": "Ucuz",
    "hintEn": "Not costing a lot of money.",
    "hintTr": "Çok para gerektirmeyen."
  },
  {
    "id": 1415,
    "category": "vocab",
    "en": "Cliffs",
    "tr": "Uçurumlar / Kayalıklar",
    "hintEn": "High, steep rocks next to the sea.",
    "hintTr": "Deniz kenarındaki yüksek, dik kayalar."
  },
  {
    "id": 1416,
    "category": "vocab",
    "en": "Climate",
    "tr": "İklim",
    "hintEn": "The normal weather in a place.",
    "hintTr": "Bir yerdeki normal hava durumu."
  },
  {
    "id": 1417,
    "category": "vocab",
    "en": "Coast",
    "tr": "Sahil / Kıyı",
    "hintEn": "The land next to the sea.",
    "hintTr": "Denizin yanındaki kara parçası."
  },
  {
    "id": 1418,
    "category": "vocab",
    "en": "Continent",
    "tr": "Kıta",
    "hintEn": "One of the very large land areas on Earth.",
    "hintTr": "Dünyadaki çok büyük kara parçalarından biri."
  },
  {
    "id": 1419,
    "category": "vocab",
    "en": "Cook Lunch",
    "tr": "Öğle Yemeği Pişirmek",
    "hintEn": "To prepare the middle-of-the-day meal.",
    "hintTr": "Gün ortası yemeğini hazırlamak."
  },
  {
    "id": 1420,
    "category": "vocab",
    "en": "Customers",
    "tr": "Müşteriler",
    "hintEn": "People who buy things in a shop.",
    "hintTr": "Bir dükkandan bir şeyler satın alan insanlar."
  },
  {
    "id": 1421,
    "category": "vocab",
    "en": "Discuss",
    "tr": "Tartışmak / Görüşmek",
    "hintEn": "To talk about something with someone.",
    "hintTr": "Biriyle bir konu hakkında konuşmak."
  },
  {
    "id": 1422,
    "category": "vocab",
    "en": "Domestic",
    "tr": "Yerli / Evcil",
    "hintEn": "About the home or the inside of a country.",
    "hintTr": "Evle veya bir ülkenin içiyle ilgili."
  },
  {
    "id": 1423,
    "category": "vocab",
    "en": "Dozens",
    "tr": "Düzinelerce",
    "hintEn": "Groups of twelve things, or just many things.",
    "hintTr": "On ikili gruplar veya çok sayıda olan şeyler."
  },
  {
    "id": 1424,
    "category": "vocab",
    "en": "Driest",
    "tr": "En kurak",
    "hintEn": "Having the least rain or water.",
    "hintTr": "En az yağmuru veya suyu olan."
  },
  {
    "id": 1425,
    "category": "vocab",
    "en": "Dystopic",
    "tr": "Distopik",
    "hintEn": "About a very bad future world.",
    "hintTr": "Gelecekteki çok kötü bir dünya ile ilgili."
  },
  {
    "id": 1426,
    "category": "vocab",
    "en": "East",
    "tr": "Doğu",
    "hintEn": "The direction where the sun comes up.",
    "hintTr": "Güneşin doğduğu yön."
  },
  {
    "id": 1427,
    "category": "vocab",
    "en": "Excitement",
    "tr": "Heyecan",
    "hintEn": "A feeling of being very happy and active.",
    "hintTr": "Çok mutlu ve aktif hissetme durumu."
  },
  {
    "id": 1428,
    "category": "vocab",
    "en": "Extensive",
    "tr": "Kapsamlı / Geniş çaplı",
    "hintEn": "Very large and having many details.",
    "hintTr": "Çok büyük ve birçok detayı olan."
  },
  {
    "id": 1429,
    "category": "vocab",
    "en": "Extremes",
    "tr": "Uç noktalar / Aşırılıklar",
    "hintEn": "The highest and lowest levels of something.",
    "hintTr": "Bir şeyin en yüksek ve en düşük seviyeleri."
  },
  {
    "id": 1430,
    "category": "vocab",
    "en": "Features",
    "tr": "Özellikler",
    "hintEn": "Important or interesting parts of something.",
    "hintTr": "Bir şeyin önemli veya ilginç kısımları."
  },
  {
    "id": 1431,
    "category": "vocab",
    "en": "Fjords",
    "tr": "Fiyortlar",
    "hintEn": "Long, narrow areas of sea between high rocks.",
    "hintTr": "Yüksek kayalar arasındaki uzun, dar deniz alanları."
  },
  {
    "id": 1432,
    "category": "vocab",
    "en": "Forest",
    "tr": "Orman",
    "hintEn": "A large place with many trees.",
    "hintTr": "Çok sayıda ağacın olduğu büyük yer."
  },
  {
    "id": 1433,
    "category": "vocab",
    "en": "Form",
    "tr": "Biçim / Şekillendirmek",
    "hintEn": "To make the shape of something.",
    "hintTr": "Bir şeyin şeklini oluşturmak."
  },
  {
    "id": 1434,
    "category": "vocab",
    "en": "Gaze",
    "tr": "Gözünü dikip bakmak / Bakış",
    "hintEn": "To look at something for a long time.",
    "hintTr": "Bir şeye uzun süre bakmak."
  },
  {
    "id": 1435,
    "category": "vocab",
    "en": "Geysers",
    "tr": "Gayzerler",
    "hintEn": "Holes in the ground that shoot hot water.",
    "hintTr": "Yerden sıcak su fırlatan delikler."
  },
  {
    "id": 1436,
    "category": "vocab",
    "en": "Glad",
    "tr": "Memnun",
    "hintEn": "Happy and pleased.",
    "hintTr": "Mutlu ve hoşnut olan."
  },
  {
    "id": 1437,
    "category": "vocab",
    "en": "Gold",
    "tr": "Altın",
    "hintEn": "A yellow, expensive metal.",
    "hintTr": "Sarı, pahalı bir metal."
  },
  {
    "id": 1438,
    "category": "vocab",
    "en": "Gravy",
    "tr": "Et suyu sosu",
    "hintEn": "A brown sauce made from meat juices.",
    "hintTr": "Et suyundan yapılan kahverengi sos."
  },
  {
    "id": 1439,
    "category": "vocab",
    "en": "Herb",
    "tr": "Bitki / Baharat otu",
    "hintEn": "A plant used to give food more flavor.",
    "hintTr": "Yemeğe tat vermek için kullanılan bitki."
  },
  {
    "id": 1440,
    "category": "vocab",
    "en": "Hospitality",
    "tr": "Misafirperverlik",
    "hintEn": "Being friendly and welcoming to guests.",
    "hintTr": "Misafirlere karşı dost canlısı ve sıcakkanlı olmak."
  },
  {
    "id": 1441,
    "category": "vocab",
    "en": "Idea",
    "tr": "Fikir",
    "hintEn": "A thought or a plan.",
    "hintTr": "Bir düşünce veya plan."
  },
  {
    "id": 1442,
    "category": "vocab",
    "en": "Impressive",
    "tr": "Etkileyici",
    "hintEn": "Making you say 'wow' because it is so good.",
    "hintTr": "Çok iyi olduğu için sana 'vay canına' dedirten."
  },
  {
    "id": 1443,
    "category": "vocab",
    "en": "Include",
    "tr": "İçermek / Dahil etmek",
    "hintEn": "To have something as a part.",
    "hintTr": "Bir şeyi kendi içinde parça olarak bulundurmak."
  },
  {
    "id": 1444,
    "category": "vocab",
    "en": "Incredible",
    "tr": "İnanılmaz",
    "hintEn": "Hard to believe because it is so great.",
    "hintTr": "Çok harika olduğu için inanması zor olan."
  },
  {
    "id": 1445,
    "category": "vocab",
    "en": "Internship",
    "tr": "Staj",
    "hintEn": "A short job to learn how to work.",
    "hintTr": "Nasıl çalışılacağını öğrenmek için kısa süreli iş."
  },
  {
    "id": 1446,
    "category": "vocab",
    "en": "Island",
    "tr": "Ada",
    "hintEn": "Land with water all around it.",
    "hintTr": "Etrafı tamamen suyla çevrili kara parçası."
  },
  {
    "id": 1447,
    "category": "vocab",
    "en": "Jewelry",
    "tr": "Mücevher / Takı",
    "hintEn": "Rings and necklaces you wear to look nice.",
    "hintTr": "Güzel görünmek için taktığın yüzükler ve kolyeler."
  },
  {
    "id": 1448,
    "category": "vocab",
    "en": "Landscape",
    "tr": "Manzara / Peyzaj",
    "hintEn": "All the things you see when you look across an area.",
    "hintTr": "Bir alana baktığında gördüğün her şey."
  },
  {
    "id": 1449,
    "category": "vocab",
    "en": "Long",
    "tr": "Uzun",
    "hintEn": "Not short.",
    "hintTr": "Kısa olmayan."
  },
  {
    "id": 1450,
    "category": "vocab",
    "en": "Magnificent",
    "tr": "Muhteşem / Görkemli",
    "hintEn": "Extremely beautiful or great.",
    "hintTr": "Son derece güzel veya harika."
  },
  {
    "id": 1451,
    "category": "vocab",
    "en": "Manager",
    "tr": "Yönetici / Müdür",
    "hintEn": "The boss of a shop or an office.",
    "hintTr": "Bir dükkanın veya ofisin yöneticisi/patronu."
  },
  {
    "id": 1452,
    "category": "vocab",
    "en": "Mash",
    "tr": "Püre / Ezmek",
    "hintEn": "To crush food until it is soft.",
    "hintTr": "Yiyecekleri yumuşayana kadar ezmek."
  },
  {
    "id": 1453,
    "category": "vocab",
    "en": "Mountains",
    "tr": "Dağlar",
    "hintEn": "Very high and big hills.",
    "hintTr": "Çok yüksek ve büyük tepeler."
  },
  {
    "id": 1454,
    "category": "vocab",
    "en": "Narrow",
    "tr": "Dar",
    "hintEn": "Not wide.",
    "hintTr": "Geniş olmayan."
  },
  {
    "id": 1455,
    "category": "vocab",
    "en": "Neighbor",
    "tr": "Komşu",
    "hintEn": "A person who lives near you.",
    "hintTr": "Senin yakınında/yanında yaşayan kişi."
  },
  {
    "id": 1456,
    "category": "vocab",
    "en": "North",
    "tr": "Kuzey",
    "hintEn": "The direction at the top of a map.",
    "hintTr": "Haritanın en üst tarafındaki yön."
  },
  {
    "id": 1457,
    "category": "vocab",
    "en": "Opportunity",
    "tr": "Fırsat",
    "hintEn": "A chance to do something good.",
    "hintTr": "İyi bir şey yapmak için bir şans."
  },
  {
    "id": 1458,
    "category": "vocab",
    "en": "Peak",
    "tr": "Zirve / Doruk",
    "hintEn": "The top part of a mountain.",
    "hintTr": "Bir dağın en üst kısmı."
  },
  {
    "id": 1459,
    "category": "vocab",
    "en": "Prepare",
    "tr": "Hazırlamak",
    "hintEn": "To get something ready.",
    "hintTr": "Bir şeyi hazır hale getirmek."
  },
  {
    "id": 1460,
    "category": "vocab",
    "en": "Rise",
    "tr": "Yükselmek / Artış",
    "hintEn": "To go up.",
    "hintTr": "Yukarı doğru çıkmak."
  },
  {
    "id": 1461,
    "category": "vocab",
    "en": "Sensational",
    "tr": "Sansasyonel / Çarpıcı",
    "hintEn": "Very exciting or surprising.",
    "hintTr": "Çok heyecan verici veya şaşırtıcı."
  },
  {
    "id": 1462,
    "category": "vocab",
    "en": "Shape",
    "tr": "Şekil",
    "hintEn": "The outer form of something.",
    "hintTr": "Bir şeyin dış görünüşü veya formu."
  },
  {
    "id": 1463,
    "category": "vocab",
    "en": "Shares",
    "tr": "Paylaşır / Paylar",
    "hintEn": "Gives a part of something to others.",
    "hintTr": "Bir şeyin bir kısmını başkalarına verir."
  },
  {
    "id": 1464,
    "category": "vocab",
    "en": "Short",
    "tr": "Kısa",
    "hintEn": "Not long or not tall.",
    "hintTr": "Uzun veya boylu olmayan."
  },
  {
    "id": 1465,
    "category": "vocab",
    "en": "Silver",
    "tr": "Gümüş",
    "hintEn": "A grey and white, expensive metal.",
    "hintTr": "Gri ve beyaz renkli, pahalı bir metal."
  },
  {
    "id": 1466,
    "category": "vocab",
    "en": "Slang",
    "tr": "Argo",
    "hintEn": "Informal words used by people.",
    "hintTr": "İnsanların kullandığı resmi olmayan günlük kelimeler."
  },
  {
    "id": 1467,
    "category": "vocab",
    "en": "Sophisticated",
    "tr": "Sofistike / Çok yönlü",
    "hintEn": "Knowing a lot about culture and style.",
    "hintTr": "Kültür ve stil hakkında çok şey bilen."
  },
  {
    "id": 1468,
    "category": "vocab",
    "en": "South",
    "tr": "Güney",
    "hintEn": "The direction at the bottom of a map.",
    "hintTr": "Haritanın en alt tarafındaki yön."
  },
  {
    "id": 1469,
    "category": "vocab",
    "en": "Special",
    "tr": "Özel",
    "hintEn": "Different from what is normal; important.",
    "hintTr": "Normalden farklı olan; önemli."
  },
  {
    "id": 1470,
    "category": "vocab",
    "en": "Surrounding",
    "tr": "Çevreleyen / Civar",
    "hintEn": "Being everywhere around something.",
    "hintTr": "Bir şeyin her tarafında olan."
  },
  {
    "id": 1471,
    "category": "vocab",
    "en": "Take-Away",
    "tr": "Al-götür (Paket servis)",
    "hintEn": "Food you buy at a restaurant and eat at home.",
    "hintTr": "Restorandan satın alıp evde yediğin yemek."
  },
  {
    "id": 1472,
    "category": "vocab",
    "en": "Topic",
    "tr": "Konu / Başlık",
    "hintEn": "The subject you are talking or writing about.",
    "hintTr": "Hakkında konuştuğun veya yazdığın şey."
  },
  {
    "id": 1473,
    "category": "vocab",
    "en": "Tourist Guide",
    "tr": "Turist Rehberi",
    "hintEn": "A person who shows interesting places to visitors.",
    "hintTr": "Ziyaretçilere ilginç yerleri gösteren kişi."
  },
  {
    "id": 1474,
    "category": "vocab",
    "en": "Trail",
    "tr": "Patika / İz",
    "hintEn": "A path in the countryside.",
    "hintTr": "Kırsal alandaki doğal yol."
  },
  {
    "id": 1475,
    "category": "vocab",
    "en": "Vast",
    "tr": "Uçsuz bucaksız / Çok geniş",
    "hintEn": "Very, very large.",
    "hintTr": "Çok ama çok büyük."
  },
  {
    "id": 1476,
    "category": "vocab",
    "en": "Very Beautiful",
    "tr": "Çok Güzel",
    "hintEn": "Looking extremely nice.",
    "hintTr": "Son derece hoş/güzel görünen."
  },
  {
    "id": 1477,
    "category": "vocab",
    "en": "Vinegar",
    "tr": "Sirke",
    "hintEn": "A sour liquid used with food.",
    "hintTr": "Yiyeceklerle birlikte kullanılan ekşi sıvı."
  },
  {
    "id": 1478,
    "category": "vocab",
    "en": "Volcanoes",
    "tr": "Volkanlar / Yanardağlar",
    "hintEn": "Mountains that can blow hot fire and rocks.",
    "hintTr": "Sıcak ateş ve taşlar püskürtebilen dağlar."
  },
  {
    "id": 1479,
    "category": "vocab",
    "en": "Waterfalls",
    "tr": "Şelaleler",
    "hintEn": "Places where water falls down from a high rock.",
    "hintTr": "Suyun yüksek bir kayadan aşağı düştüğü yerler."
  },
  {
    "id": 1480,
    "category": "vocab",
    "en": "Wave",
    "tr": "Dalga",
    "hintEn": "Water moving up and down in the sea.",
    "hintTr": "Denizde aşağı yukarı hareket eden su."
  },
  {
    "id": 1481,
    "category": "vocab",
    "en": "West",
    "tr": "Batı",
    "hintEn": "The direction where the sun goes down.",
    "hintTr": "Güneşin battığı yön."
  },
  {
    "id": 1482,
    "category": "vocab",
    "en": "Western",
    "tr": "Batılı / Batıya ait",
    "hintEn": "From the west part of the world.",
    "hintTr": "Dünyanın batı kısmından olan."
  },
  {
    "id": 1483,
    "category": "vocab",
    "en": "Wide",
    "tr": "Geniş",
    "hintEn": "Large from one side to the other.",
    "hintTr": "Bir taraftan diğer tarafa büyük/açık olan."
  },
  {
    "id": 1484,
    "category": "vocab",
    "en": "Woods",
    "tr": "Ormanlık alan / Koruluk",
    "hintEn": "A small forest with many trees.",
    "hintTr": "Çok sayıda ağacın olduğu küçük orman."
  },
  {
    "id": 1485,
    "category": "vocab",
    "en": "Yelling",
    "tr": "Bağırma / Haykırma",
    "hintEn": "Shouting very loudly.",
    "hintTr": "Çok yüksek sesle bağırmak."
  },
  {
    "id": 1486,
    "category": "vocab",
    "en": "Beaches",
    "tr": "Plajlar / Kumsallar",
    "hintEn": "Sandy places next to the sea.",
    "hintTr": "Deniz kenarındaki kumlu yerler."
  },
  {
    "id": 1487,
    "category": "vocab",
    "en": "Borders",
    "tr": "Sınırlar",
    "hintEn": "Lines between countries.",
    "hintTr": "Ülkeler arasındaki çizgiler."
  },
  {
    "id": 1488,
    "category": "vocab",
    "en": "Bowls",
    "tr": "Kaseler",
    "hintEn": "Deep, round dishes for food.",
    "hintTr": "Yemek için derin, yuvarlak kaplar."
  },
  {
    "id": 1489,
    "category": "vocab",
    "en": "Climates",
    "tr": "İklimler",
    "hintEn": "The normal weather in different places.",
    "hintTr": "Farklı yerlerdeki normal hava durumları."
  },
  {
    "id": 1490,
    "category": "vocab",
    "en": "Coasts",
    "tr": "Sahiller / Kıyılar",
    "hintEn": "Lands next to the sea.",
    "hintTr": "Deniz kenarındaki kara parçaları."
  },
  {
    "id": 1491,
    "category": "vocab",
    "en": "Continents",
    "tr": "Kıtalar",
    "hintEn": "The large land areas on Earth.",
    "hintTr": "Dünyadaki büyük kara parçaları."
  },
  {
    "id": 1492,
    "category": "vocab",
    "en": "Forests",
    "tr": "Ormanlar",
    "hintEn": "Large places with many trees.",
    "hintTr": "Çok ağacın olduğu büyük yerler."
  },
  {
    "id": 1493,
    "category": "vocab",
    "en": "Forms",
    "tr": "Biçimler / Şekiller",
    "hintEn": "Different shapes of things.",
    "hintTr": "Şeylerin farklı şekilleri."
  },
  {
    "id": 1494,
    "category": "vocab",
    "en": "Gazes",
    "tr": "Bakışlar",
    "hintEn": "Long looks at something.",
    "hintTr": "Bir şeye atılan uzun bakışlar."
  },
  {
    "id": 1495,
    "category": "vocab",
    "en": "Guides",
    "tr": "Rehberler",
    "hintEn": "People who show you places.",
    "hintTr": "Sana yerleri gösteren kişiler."
  },
  {
    "id": 1496,
    "category": "vocab",
    "en": "Herbs",
    "tr": "Bitkiler / Baharat otları",
    "hintEn": "Plants used to give food more flavor.",
    "hintTr": "Yemeğe tat vermek için kullanılan bitkiler."
  },
  {
    "id": 1497,
    "category": "vocab",
    "en": "Hills",
    "tr": "Tepeler",
    "hintEn": "Small mountains.",
    "hintTr": "Küçük dağlar."
  },
  {
    "id": 1498,
    "category": "vocab",
    "en": "Ideas",
    "tr": "Fikirler",
    "hintEn": "Thoughts or plans.",
    "hintTr": "Düşünceler veya planlar."
  },
  {
    "id": 1499,
    "category": "vocab",
    "en": "Internships",
    "tr": "Stajlar",
    "hintEn": "Short jobs to learn how to work.",
    "hintTr": "Nasıl çalışılacağını öğrenmek için kısa işler."
  },
  {
    "id": 1500,
    "category": "vocab",
    "en": "Islands",
    "tr": "Adalar",
    "hintEn": "Lands with water all around them.",
    "hintTr": "Etrafları tamamen suyla çevrili karalar."
  },
  {
    "id": 1501,
    "category": "vocab",
    "en": "Lakes",
    "tr": "Göller",
    "hintEn": "Large areas of water with land around them.",
    "hintTr": "Etraflarında kara olan büyük su alanları."
  },
  {
    "id": 1502,
    "category": "vocab",
    "en": "Landscapes",
    "tr": "Manzaralar / Peyzajlar",
    "hintEn": "The looks of the lands.",
    "hintTr": "Geniş arazilerin görünümleri."
  },
  {
    "id": 1503,
    "category": "vocab",
    "en": "Managers",
    "tr": "Yöneticiler / Müdürler",
    "hintEn": "Bosses of shops or offices.",
    "hintTr": "Dükkanların veya ofislerin patronları."
  },
  {
    "id": 1504,
    "category": "vocab",
    "en": "Neighbors",
    "tr": "Komşular",
    "hintEn": "People who live near you.",
    "hintTr": "Yakınında yaşayan insanlar."
  },
  {
    "id": 1505,
    "category": "vocab",
    "en": "Opportunities",
    "tr": "Fırsatlar",
    "hintEn": "Chances to do something good.",
    "hintTr": "İyi şeyler yapmak için eline geçen şanslar."
  },
  {
    "id": 1506,
    "category": "vocab",
    "en": "Peaks",
    "tr": "Zirveler / Doruklar",
    "hintEn": "The top parts of mountains.",
    "hintTr": "Dağların en üst kısımları."
  },
  {
    "id": 1507,
    "category": "vocab",
    "en": "Shapes",
    "tr": "Şekiller",
    "hintEn": "The outer forms of things.",
    "hintTr": "Nesnelerin dış formları."
  },
  {
    "id": 1508,
    "category": "vocab",
    "en": "Topics",
    "tr": "Konular / Başlıklar",
    "hintEn": "Subjects you talk or write about.",
    "hintTr": "Hakkında konuştuğun veya yazdığın şeyler."
  },
  {
    "id": 1509,
    "category": "vocab",
    "en": "Tourist Guides",
    "tr": "Turist Rehberleri",
    "hintEn": "People who show places to visitors.",
    "hintTr": "Ziyaretçilere ilginç yerleri gösteren kişiler."
  },
  {
    "id": 1510,
    "category": "vocab",
    "en": "Trails",
    "tr": "Patikalar / İzler",
    "hintEn": "Paths in the countryside.",
    "hintTr": "Kırsal alanlardaki doğal yollar."
  },
  {
    "id": 1511,
    "category": "vocab",
    "en": "Valleys",
    "tr": "Vadiler",
    "hintEn": "Low lands between mountains.",
    "hintTr": "Dağların arasındaki alçak araziler."
  },
  {
    "id": 1512,
    "category": "vocab",
    "en": "Waves",
    "tr": "Dalgalar",
    "hintEn": "Moving waters in the sea.",
    "hintTr": "Denizdeki hareketli sular."
  },
  {
    "id": 1513,
    "category": "vocab",
    "en": "Anniversary",
    "tr": "Yıl dönümü",
    "hintEn": "A special date we remember every year.",
    "hintTr": "Her yıl hatırladığımız özel gün."
  },
  {
    "id": 1514,
    "category": "vocab",
    "en": "Cliff",
    "tr": "Uçurum / Kayalık",
    "hintEn": "A high, steep rock next to the sea.",
    "hintTr": "Deniz kenarındaki yüksek, dik kaya."
  },
  {
    "id": 1515,
    "category": "vocab",
    "en": "Customer",
    "tr": "Müşteri",
    "hintEn": "A person who buys things in a shop.",
    "hintTr": "Bir dükkandan bir şeyler satın alan kişi."
  },
  {
    "id": 1516,
    "category": "vocab",
    "en": "Dozen",
    "tr": "Düzine",
    "hintEn": "A group of twelve things.",
    "hintTr": "On iki şeyden oluşan grup."
  },
  {
    "id": 1517,
    "category": "vocab",
    "en": "Extreme",
    "tr": "Uç nokta / Aşırılık",
    "hintEn": "The highest or lowest level of something.",
    "hintTr": "Bir şeyin en yüksek veya en düşük seviyesi."
  },
  {
    "id": 1518,
    "category": "vocab",
    "en": "Feature",
    "tr": "Özellik",
    "hintEn": "An important part of something.",
    "hintTr": "Bir şeyin önemli bir kısmı."
  },
  {
    "id": 1519,
    "category": "vocab",
    "en": "Fjord",
    "tr": "Fiyort",
    "hintEn": "A long, narrow area of sea between high rocks.",
    "hintTr": "Yüksek kayalar arasındaki uzun, dar deniz alanı."
  },
  {
    "id": 1520,
    "category": "vocab",
    "en": "Geyser",
    "tr": "Gayzer",
    "hintEn": "A hole in the ground that shoots hot water.",
    "hintTr": "Yerden sıcak su fırlatan delik."
  },
  {
    "id": 1521,
    "category": "vocab",
    "en": "Mountain",
    "tr": "Dağ",
    "hintEn": "A very high and big hill.",
    "hintTr": "Çok yüksek ve büyük tepe."
  },
  {
    "id": 1522,
    "category": "vocab",
    "en": "Share",
    "tr": "Paylaşmak / Pay",
    "hintEn": "To give a part of something to someone.",
    "hintTr": "Birine bir şeyin bir parçasını vermek."
  },
  {
    "id": 1523,
    "category": "vocab",
    "en": "Volcano",
    "tr": "Volkan / Yanardağ",
    "hintEn": "A mountain that can blow hot fire and rocks.",
    "hintTr": "Sıcak ateş ve taş fırlatan dağ."
  },
  {
    "id": 1524,
    "category": "vocab",
    "en": "Waterfall",
    "tr": "Şelale",
    "hintEn": "A place where water falls down from high up.",
    "hintTr": "Suyun yüksekten aşağı düştüğü yer."
  },
  {
    "id": 1525,
    "category": "vocab",
    "en": "Architect",
    "tr": "Mimar",
    "hintEn": "A person who draws plans for buildings.",
    "hintTr": "Binalar için plan çizen kişi."
  },
  {
    "id": 1526,
    "category": "vocab",
    "en": "Quiet",
    "tr": "Sessiz / Sakin",
    "hintEn": "Making very little noise.",
    "hintTr": "Çok az ses çıkaran."
  },
  {
    "id": 1527,
    "category": "vocab",
    "en": "Peaceful",
    "tr": "Huzurlu",
    "hintEn": "Calm, quiet and without problems.",
    "hintTr": "Sakin, sessiz ve sorunsuz."
  },
  {
    "id": 1528,
    "category": "vocab",
    "en": "Country",
    "tr": "Ülke",
    "hintEn": "A nation with its own land and rules.",
    "hintTr": "Kendi toprağı ve kuralları olan ulus."
  },
  {
    "id": 1529,
    "category": "vocab",
    "en": "Countries",
    "tr": "Ülkeler",
    "hintEn": "Nations with their own lands and rules.",
    "hintTr": "Kendi toprakları ve kuralları olan uluslar."
  },
  {
    "id": 1530,
    "category": "vocab",
    "en": "Holiday",
    "tr": "Tatil",
    "hintEn": "A day when you don't work or go to school.",
    "hintTr": "Çalışmadığın veya okula gitmediğin bir gün."
  },
  {
    "id": 1531,
    "category": "vocab",
    "en": "Holidays",
    "tr": "Tatiller",
    "hintEn": "Days when you don't work or go to school.",
    "hintTr": "Çalışmadığın veya okula gitmediğin günler."
  },
  {
    "id": 1532,
    "category": "vocab",
    "en": "Elderly",
    "tr": "Yaşlı / İhtiyar",
    "hintEn": "Older people.",
    "hintTr": "Yaşça daha büyük olan kişiler."
  },
  {
    "id": 1533,
    "category": "vocab",
    "en": "Reason",
    "tr": "Sebep / Neden",
    "hintEn": "Why something happens.",
    "hintTr": "Bir şeyin neden olduğu, sebebi."
  },
  {
    "id": 1534,
    "category": "vocab",
    "en": "Reasons",
    "tr": "Sebepler / Nedenler",
    "hintEn": "Why things happen.",
    "hintTr": "Olayların neden olduğu, sebepleri."
  },
  {
    "id": 1535,
    "category": "vocab",
    "en": "Addictive",
    "tr": "Bağımlılık yapan",
    "hintEn": "Making you want to do it more and more.",
    "hintTr": "Sana onu daha da çok yapma isteği veren."
  },
  {
    "id": 1536,
    "category": "vocab",
    "en": "Worse",
    "tr": "Daha kötü",
    "hintEn": "More bad than something else.",
    "hintTr": "Başka bir şeyden daha fena olan."
  },
  {
    "id": 1537,
    "category": "vocab",
    "en": "Whether",
    "tr": "Olup olmadığı / İster...",
    "hintEn": "Used to talk about two choices.",
    "hintTr": "İki seçenek hakkında konuşurken kullanılır."
  },
  {
    "id": 1538,
    "category": "vocab",
    "en": "Exhausted",
    "tr": "Çok yorgun / Tükenmiş",
    "hintEn": "Very, very tired.",
    "hintTr": "Çok ama çok yorgun hissetme."
  },
  {
    "id": 1539,
    "category": "vocab",
    "en": "Tinsel",
    "tr": "Süs şeridi / Simli süs",
    "hintEn": "Shiny string used for decoration on a tree.",
    "hintTr": "Ağaç vb. süslemek için kullanılan parlak ipler."
  },
  {
    "id": 1540,
    "category": "vocab",
    "en": "Scary Face",
    "tr": "Korkutucu yüz",
    "hintEn": "A look that makes you feel afraid.",
    "hintTr": "Seni korkutan bir ifade, görünüm."
  },
  {
    "id": 1541,
    "category": "vocab",
    "en": "Scary Faces",
    "tr": "Korkutucu yüzler",
    "hintEn": "Looks that make you feel afraid.",
    "hintTr": "Seni korkutan ifadeler."
  },
  {
    "id": 1542,
    "category": "vocab",
    "en": "Scary",
    "tr": "Korkunç / Korkutucu",
    "hintEn": "Making you feel afraid.",
    "hintTr": "Seni korkutan, ürküten."
  },
  {
    "id": 1543,
    "category": "vocab",
    "en": "Carve",
    "tr": "Oymak / Keserek şekil vermek",
    "hintEn": "To cut into wood or a pumpkin to make a shape.",
    "hintTr": "Şekil vermek için tahtayı veya balkabağını kesmek."
  },
  {
    "id": 1544,
    "category": "vocab",
    "en": "Pumpkin",
    "tr": "Balkabağı",
    "hintEn": "A large, round, orange vegetable.",
    "hintTr": "Büyük, yuvarlak, turuncu bir sebze."
  },
  {
    "id": 1545,
    "category": "vocab",
    "en": "Pumpkins",
    "tr": "Balkabakları",
    "hintEn": "Large, round, orange vegetables.",
    "hintTr": "Büyük, yuvarlak, turuncu sebzeler."
  },
  {
    "id": 1546,
    "category": "vocab",
    "en": "Child",
    "tr": "Çocuk",
    "hintEn": "A young boy or girl.",
    "hintTr": "Genç bir erkek veya kız."
  },
  {
    "id": 1547,
    "category": "vocab",
    "en": "Children",
    "tr": "Çocuklar",
    "hintEn": "Young boys and girls.",
    "hintTr": "Genç erkekler ve kızlar."
  },
  {
    "id": 1548,
    "category": "vocab",
    "en": "Halloween",
    "tr": "Cadılar Bayramı",
    "hintEn": "A spooky holiday in October.",
    "hintTr": "Ekim ayında kutlanan ürkütücü tatil."
  },
  {
    "id": 1549,
    "category": "vocab",
    "en": "Candle",
    "tr": "Mum",
    "hintEn": "A stick of wax that gives light.",
    "hintTr": "Yanarak ışık veren balmumu çubuğu."
  },
  {
    "id": 1550,
    "category": "vocab",
    "en": "Candles",
    "tr": "Mumlar",
    "hintEn": "Sticks of wax that give light.",
    "hintTr": "Yanarak ışık veren balmumu çubukları."
  },
  {
    "id": 1551,
    "category": "vocab",
    "en": "Celebrate",
    "tr": "Kutlamak",
    "hintEn": "To have a party for a special day.",
    "hintTr": "Özel bir gün için parti yapmak veya eğlenmek."
  },
  {
    "id": 1552,
    "category": "vocab",
    "en": "Piece",
    "tr": "Parça / Tane",
    "hintEn": "A part of something.",
    "hintTr": "Bir şeyin bir kısmı."
  },
  {
    "id": 1553,
    "category": "vocab",
    "en": "Pieces",
    "tr": "Parçalar / Taneler",
    "hintEn": "Parts of something.",
    "hintTr": "Bir şeyin kısımları."
  },
  {
    "id": 1554,
    "category": "vocab",
    "en": "Tremendous",
    "tr": "Muazzam / Kocaman",
    "hintEn": "Very big or very great.",
    "hintTr": "Çok büyük veya çok harika."
  },
  {
    "id": 1555,
    "category": "vocab",
    "en": "Religious",
    "tr": "Dini",
    "hintEn": "About God or beliefs.",
    "hintTr": "Tanrı veya inançlarla ilgili."
  },
  {
    "id": 1556,
    "category": "vocab",
    "en": "Street",
    "tr": "Sokak / Cadde",
    "hintEn": "A road in a city or town.",
    "hintTr": "Şehir veya kasabadaki binaların arasındaki yol."
  },
  {
    "id": 1557,
    "category": "vocab",
    "en": "Streets",
    "tr": "Sokaklar / Caddeler",
    "hintEn": "Roads in a city or town.",
    "hintTr": "Şehir veya kasabadaki yollar."
  },
  {
    "id": 1558,
    "category": "vocab",
    "en": "Endlessly",
    "tr": "Sonsuzca / Durmaksızın",
    "hintEn": "Never stopping.",
    "hintTr": "Hiç durmadan devam etme durumu."
  },
  {
    "id": 1559,
    "category": "vocab",
    "en": "Need",
    "tr": "İhtiyaç / İhtiyaç duymak",
    "hintEn": "Something you must have.",
    "hintTr": "Kesinlikle sahip olman gereken şey."
  },
  {
    "id": 1560,
    "category": "vocab",
    "en": "Needs",
    "tr": "İhtiyaçlar",
    "hintEn": "Things you must have.",
    "hintTr": "Kesinlikle sahip olman gereken şeyler."
  },
  {
    "id": 1561,
    "category": "vocab",
    "en": "Firstly",
    "tr": "İlk olarak / Öncelikle",
    "hintEn": "The first thing to say or do.",
    "hintTr": "Söylenecek veya yapılacak ilk şey."
  },
  {
    "id": 1562,
    "category": "vocab",
    "en": "Relaxed",
    "tr": "Rahatlamış",
    "hintEn": "Feeling calm and not stressed.",
    "hintTr": "Sakin ve stressiz hissetmek."
  },
  {
    "id": 1563,
    "category": "vocab",
    "en": "Companionship",
    "tr": "Arkadaşlık / Yoldaşlık",
    "hintEn": "The good feeling of being with someone.",
    "hintTr": "Biriyle birlikte olmanın verdiği iyi his."
  },
  {
    "id": 1564,
    "category": "vocab",
    "en": "Harmony",
    "tr": "Uyum / Ahenk",
    "hintEn": "People or things living together happily.",
    "hintTr": "Birlikte mutlu yaşayan insanlar veya şeyler."
  },
  {
    "id": 1565,
    "category": "vocab",
    "en": "Maximize",
    "tr": "En üst düzeye çıkarmak",
    "hintEn": "To make something as big as possible.",
    "hintTr": "Bir şeyi olabildiğince büyük veya çok yapmak."
  },
  {
    "id": 1566,
    "category": "vocab",
    "en": "Totally",
    "tr": "Tamamen / Bütünüyle",
    "hintEn": "Completely, 100 percent.",
    "hintTr": "Yüzde yüz, eksiksiz olarak."
  },
  {
    "id": 1567,
    "category": "vocab",
    "en": "Clarify",
    "tr": "Açıklığa kavuşturmak",
    "hintEn": "To make something easy to understand.",
    "hintTr": "Bir şeyi anlaşılması kolay hale getirmek."
  },
  {
    "id": 1568,
    "category": "vocab",
    "en": "Justify",
    "tr": "Haklı çıkarmak / Gerekçelendirmek",
    "hintEn": "To give a good reason for something.",
    "hintTr": "Bir şey için iyi bir neden veya mazeret sunmak."
  },
  {
    "id": 1569,
    "category": "vocab",
    "en": "Competition",
    "tr": "Yarışma / Rekabet",
    "hintEn": "A game to see who is the best.",
    "hintTr": "Kimin en iyi olduğunu görmek için yapılan oyun."
  },
  {
    "id": 1570,
    "category": "vocab",
    "en": "Competitions",
    "tr": "Yarışmalar",
    "hintEn": "Games to see who is the best.",
    "hintTr": "Kimin en iyi olduğunu görmek için yapılan oyunlar."
  },
  {
    "id": 1571,
    "category": "vocab",
    "en": "Friendship",
    "tr": "Arkadaşlık / Dostluk",
    "hintEn": "The relationship between friends.",
    "hintTr": "Arkadaşlar arasındaki ilişki bağı."
  },
  {
    "id": 1572,
    "category": "vocab",
    "en": "Friendships",
    "tr": "Arkadaşlıklar / Dostluklar",
    "hintEn": "The relationships between friends.",
    "hintTr": "Arkadaşlar arasındaki ilişki bağları."
  },
  {
    "id": 1573,
    "category": "vocab",
    "en": "Dimension",
    "tr": "Boyut / Ebat",
    "hintEn": "The size of something, like length or width.",
    "hintTr": "Bir şeyin uzunluk veya genişlik gibi ölçüsü."
  },
  {
    "id": 1574,
    "category": "vocab",
    "en": "Dimensions",
    "tr": "Boyutlar / Ebatlar",
    "hintEn": "The sizes of something.",
    "hintTr": "Bir şeyin ölçüleri."
  },
  {
    "id": 1575,
    "category": "vocab",
    "en": "Adjective",
    "tr": "Sıfat",
    "hintEn": "A word that describes a noun (like 'big' or 'red').",
    "hintTr": "Bir ismi tanımlayan kelime ('büyük' vb.)."
  },
  {
    "id": 1576,
    "category": "vocab",
    "en": "Adjectives",
    "tr": "Sıfatlar",
    "hintEn": "Words that describe nouns.",
    "hintTr": "İsimleri tanımlayan kelimeler."
  },
  {
    "id": 1577,
    "category": "vocab",
    "en": "Careful",
    "tr": "Dikkatli",
    "hintEn": "Thinking about what you do so you don't make a mistake.",
    "hintTr": "Hata yapmamak için ne yaptığına odaklanan."
  },
  {
    "id": 1578,
    "category": "vocab",
    "en": "Slow",
    "tr": "Yavaş",
    "hintEn": "Not fast.",
    "hintTr": "Hızlı hareket etmeyen."
  },
  {
    "id": 1579,
    "category": "vocab",
    "en": "Fast",
    "tr": "Hızlı",
    "hintEn": "Moving very quickly.",
    "hintTr": "Çok çabuk hareket eden."
  },
  {
    "id": 1580,
    "category": "vocab",
    "en": "Carnival",
    "tr": "Karnaval",
    "hintEn": "A big public party with music and dancing in the streets.",
    "hintTr": "Sokaklarda müzik ve dans olan büyük halk partisi."
  },
  {
    "id": 1581,
    "category": "vocab",
    "en": "Carnivals",
    "tr": "Karnavallar",
    "hintEn": "Big public parties in the streets.",
    "hintTr": "Sokaklardaki büyük halk partileri."
  },
  {
    "id": 1582,
    "category": "vocab",
    "en": "Custom",
    "tr": "Gelenek / Görenek",
    "hintEn": "A traditional way of acting in a society.",
    "hintTr": "Bir toplumdaki geleneksel davranış biçimi."
  },
  {
    "id": 1583,
    "category": "vocab",
    "en": "Customs",
    "tr": "Gelenekler / Görenekler",
    "hintEn": "Traditional ways of acting in a society.",
    "hintTr": "Bir toplumdaki geleneksel davranış biçimleri."
  },
  {
    "id": 1584,
    "category": "vocab",
    "en": "Dance",
    "tr": "Dans / Dans etmek",
    "hintEn": "Moving your body to music.",
    "hintTr": "Vücudunu müziğe göre hareket ettirmek."
  },
  {
    "id": 1585,
    "category": "vocab",
    "en": "Dances",
    "tr": "Danslar",
    "hintEn": "Different styles of moving to music.",
    "hintTr": "Müziğe göre hareket etmenin farklı stilleri."
  },
  {
    "id": 1586,
    "category": "vocab",
    "en": "Myself",
    "tr": "Kendim",
    "hintEn": "Used by the person speaking to talk about themself.",
    "hintTr": "Konuşan kişinin kendinden bahsetmesi."
  },
  {
    "id": 1587,
    "category": "vocab",
    "en": "Yourself",
    "tr": "Kendin",
    "hintEn": "Used to talk about the person you are speaking to.",
    "hintTr": "Konuştuğun tekil kişi hakkında kullanılır."
  },
  {
    "id": 1588,
    "category": "vocab",
    "en": "Himself",
    "tr": "Kendisi (Erkek)",
    "hintEn": "Used to talk about a man or boy.",
    "hintTr": "Bir adam veya erkek çocuğu hakkında konuşulur."
  },
  {
    "id": 1589,
    "category": "vocab",
    "en": "Herself",
    "tr": "Kendisi (Kadın)",
    "hintEn": "Used to talk about a woman or girl.",
    "hintTr": "Bir kadın veya kız çocuğu hakkında konuşulur."
  },
  {
    "id": 1590,
    "category": "vocab",
    "en": "Itself",
    "tr": "Kendisi (Hayvan/Eşya)",
    "hintEn": "Used to talk about a thing or animal.",
    "hintTr": "Bir nesne veya hayvan hakkında konuşulur."
  },
  {
    "id": 1591,
    "category": "vocab",
    "en": "Ourselves",
    "tr": "Kendimiz",
    "hintEn": "Used by a group to talk about their own group.",
    "hintTr": "Bir grubun (biz) kendinden bahsetmesi."
  },
  {
    "id": 1592,
    "category": "vocab",
    "en": "Yourselves",
    "tr": "Kendiniz",
    "hintEn": "Used to talk about a group of people you are speaking to.",
    "hintTr": "Konuştuğunuz bir grup insandan (siz) bahseder."
  },
  {
    "id": 1593,
    "category": "vocab",
    "en": "Themselves",
    "tr": "Kendileri",
    "hintEn": "Used to talk about other people (they).",
    "hintTr": "Başka insanlardan (onlar) bahsederken kullanılır."
  },
  {
    "id": 1594,
    "category": "vocab",
    "en": "Participate",
    "tr": "Katılmak / İştirak etmek",
    "hintEn": "To join in an activity or event.",
    "hintTr": "Bir etkinliğe veya olaya dahil olmak."
  },
  {
    "id": 1595,
    "category": "vocab",
    "en": "Occasion",
    "tr": "Fırsat / Özel durum",
    "hintEn": "A special event or time.",
    "hintTr": "Özel bir etkinlik veya zaman."
  },
  {
    "id": 1596,
    "category": "vocab",
    "en": "Occasions",
    "tr": "Fırsatlar / Özel durumlar",
    "hintEn": "Special events or times.",
    "hintTr": "Özel etkinlikler veya zamanlar."
  },
  {
    "id": 1597,
    "category": "vocab",
    "en": "Culture",
    "tr": "Kültür",
    "hintEn": "The art, beliefs, and ways of a group of people.",
    "hintTr": "Bir grup insanın sanatı, inançları ve yaşam tarzı."
  },
  {
    "id": 1598,
    "category": "vocab",
    "en": "Cultures",
    "tr": "Kültürler",
    "hintEn": "Different ways of life around the world.",
    "hintTr": "Dünyadaki farklı yaşam tarzları."
  },
  {
    "id": 1599,
    "category": "vocab",
    "en": "Preparation",
    "tr": "Hazırlık",
    "hintEn": "Getting ready for something.",
    "hintTr": "Bir şey için hazır olma işlemi."
  },
  {
    "id": 1600,
    "category": "vocab",
    "en": "Preparations",
    "tr": "Hazırlıklar",
    "hintEn": "Things you do to get ready.",
    "hintTr": "Hazır olmak için yaptığın şeyler."
  },
  {
    "id": 1601,
    "category": "vocab",
    "en": "Miss",
    "tr": "Özlemek / Kaçırmak",
    "hintEn": "To feel sad because someone is not there, or to not catch.",
    "hintTr": "Biri olmadığı için üzülmek veya bir şeyi yakalayamamak."
  },
  {
    "id": 1602,
    "category": "vocab",
    "en": "Throw",
    "tr": "Fırlatmak / Atmak",
    "hintEn": "To send something through the air with your hand.",
    "hintTr": "Bir şeyi elinle havaya doğru yollamak."
  },
  {
    "id": 1603,
    "category": "vocab",
    "en": "Admiration",
    "tr": "Hayranlık",
    "hintEn": "A feeling of respecting or liking someone very much.",
    "hintTr": "Birine çok saygı duyma veya onu çok beğenme hissi."
  },
  {
    "id": 1604,
    "category": "vocab",
    "en": "Wrestling",
    "tr": "Güreş",
    "hintEn": "A sport where two people try to throw each other to the ground.",
    "hintTr": "İki kişinin birbirini yere atmaya çalıştığı bir spor."
  },
  {
    "id": 1605,
    "category": "vocab",
    "en": "Entertain",
    "tr": "Eğlendirmek",
    "hintEn": "To make people have fun.",
    "hintTr": "İnsanların eğlenmesini sağlamak."
  },
  {
    "id": 1606,
    "category": "vocab",
    "en": "Time",
    "tr": "Zaman / Defa",
    "hintEn": "Minutes, hours, days, or occasions.",
    "hintTr": "Dakikalar, saatler, günler veya durumlar."
  },
  {
    "id": 1607,
    "category": "vocab",
    "en": "Times",
    "tr": "Zamanlar / Defalar",
    "hintEn": "Occasions or history periods.",
    "hintTr": "Durumlar, kere, defa veya geçmişteki dönemler."
  },
  {
    "id": 1608,
    "category": "vocab",
    "en": "Expression",
    "tr": "İfade",
    "hintEn": "Words used to show a feeling or idea.",
    "hintTr": "Bir hissi veya fikri göstermek için kullanılan söz."
  },
  {
    "id": 1609,
    "category": "vocab",
    "en": "Expressions",
    "tr": "İfadeler",
    "hintEn": "Many words used to show feelings or ideas.",
    "hintTr": "Hisleri veya fikirleri gösteren sözler."
  },
  {
    "id": 1610,
    "category": "vocab",
    "en": "Month",
    "tr": "Ay",
    "hintEn": "One of the 12 parts of a year.",
    "hintTr": "Bir yılın 12 bölümünden biri."
  },
  {
    "id": 1611,
    "category": "vocab",
    "en": "Months",
    "tr": "Aylar",
    "hintEn": "The 12 parts of a year.",
    "hintTr": "Bir yılın 12 bölümleri."
  },
  {
    "id": 1612,
    "category": "vocab",
    "en": "Before",
    "tr": "Önce / Öncesinde",
    "hintEn": "Earlier than a time.",
    "hintTr": "Belirli bir zamandan daha erken."
  },
  {
    "id": 1613,
    "category": "vocab",
    "en": "After",
    "tr": "Sonra / Sonrasında",
    "hintEn": "Later than a time.",
    "hintTr": "Belirli bir zamandan daha geç."
  },
  {
    "id": 1614,
    "category": "vocab",
    "en": "Now",
    "tr": "Şimdi / Şu an",
    "hintEn": "At this very moment.",
    "hintTr": "Tam olarak içinde bulunduğumuz an."
  },
  {
    "id": 1615,
    "category": "vocab",
    "en": "While",
    "tr": "İken / Sırasında",
    "hintEn": "At the same time as something else.",
    "hintTr": "Başka bir şeyle aynı anda olduğu vakit."
  },
  {
    "id": 1616,
    "category": "vocab",
    "en": "Every Year",
    "tr": "Her yıl / Her sene",
    "hintEn": "Happening all years.",
    "hintTr": "Bütün yıllarda olan şey."
  },
  {
    "id": 1617,
    "category": "vocab",
    "en": "Year",
    "tr": "Yıl / Sene",
    "hintEn": "365 days.",
    "hintTr": "365 gün süren zaman."
  },
  {
    "id": 1618,
    "category": "vocab",
    "en": "Years",
    "tr": "Yıllar / Seneler",
    "hintEn": "Many groups of 365 days.",
    "hintTr": "365 günden oluşan grupların çoğu."
  },
  {
    "id": 1619,
    "category": "vocab",
    "en": "Hopelessly",
    "tr": "Umutsuzca",
    "hintEn": "Without any hope.",
    "hintTr": "Hiç umut olmadan."
  },
  {
    "id": 1620,
    "category": "vocab",
    "en": "Appointment",
    "tr": "Randevu",
    "hintEn": "A time you agree to meet someone.",
    "hintTr": "Biriyle buluşmak için anlaştığın zaman."
  },
  {
    "id": 1621,
    "category": "vocab",
    "en": "Appointments",
    "tr": "Randevular",
    "hintEn": "Times you agree to meet people.",
    "hintTr": "İnsanlarla buluşmak için anlaştığın zamanlar."
  },
  {
    "id": 1622,
    "category": "vocab",
    "en": "Client",
    "tr": "Müşteri / Müvekkil",
    "hintEn": "A person who pays for a service.",
    "hintTr": "Bir hizmet için ödeme yapan kişi."
  },
  {
    "id": 1623,
    "category": "vocab",
    "en": "Clients",
    "tr": "Müşteriler / Müvekkiller",
    "hintEn": "People who pay for services.",
    "hintTr": "Hizmetler için ödeme yapan kişiler."
  },
  {
    "id": 1624,
    "category": "vocab",
    "en": "Colleagues",
    "tr": "İş arkadaşları",
    "hintEn": "People you work with.",
    "hintTr": "Birlikte çalıştığın kişiler."
  },
  {
    "id": 1625,
    "category": "vocab",
    "en": "Terrace",
    "tr": "Teras",
    "hintEn": "A flat area outside a building.",
    "hintTr": "Bir binanın dışındaki düz alan."
  },
  {
    "id": 1626,
    "category": "vocab",
    "en": "Terraces",
    "tr": "Teraslar",
    "hintEn": "Flat areas outside buildings.",
    "hintTr": "Binaların dışındaki düz alanlar."
  },
  {
    "id": 1627,
    "category": "vocab",
    "en": "Exchange",
    "tr": "Takas / Değişim",
    "hintEn": "Giving something to get something else.",
    "hintTr": "Başka bir şey almak için bir şey vermek."
  },
  {
    "id": 1628,
    "category": "vocab",
    "en": "Gossip",
    "tr": "Dedikodu",
    "hintEn": "Talking about other people's private lives.",
    "hintTr": "Başka insanların özel hayatları hakkında konuşmak."
  },
  {
    "id": 1629,
    "category": "vocab",
    "en": "Curious",
    "tr": "Meraklı",
    "hintEn": "Wanting to know or learn something.",
    "hintTr": "Bir şeyi bilmek veya öğrenmek istemek."
  },
  {
    "id": 1630,
    "category": "vocab",
    "en": "Jealous",
    "tr": "Kıskanç",
    "hintEn": "Feeling angry or sad because you want what someone else has.",
    "hintTr": "Başkasının sahip olduğu şeyi istediğin için üzgün hissetmek."
  },
  {
    "id": 1631,
    "category": "vocab",
    "en": "Jealousy",
    "tr": "Kıskançlık",
    "hintEn": "The feeling of being jealous.",
    "hintTr": "Kıskanç olma hissi."
  },
  {
    "id": 1632,
    "category": "vocab",
    "en": "Life",
    "tr": "Hayat / Yaşam",
    "hintEn": "The time a person is alive.",
    "hintTr": "Bir insanın hayatta olduğu zaman."
  },
  {
    "id": 1633,
    "category": "vocab",
    "en": "Lives",
    "tr": "Hayatlar / Yaşamlar",
    "hintEn": "The times people are alive.",
    "hintTr": "İnsanların hayatta olduğu zamanlar."
  },
  {
    "id": 1634,
    "category": "vocab",
    "en": "Live",
    "tr": "Yaşamak / Canlı",
    "hintEn": "To be alive or have a home somewhere.",
    "hintTr": "Hayatta olmak veya bir yerde evi olmak."
  },
  {
    "id": 1635,
    "category": "vocab",
    "en": "Shine",
    "tr": "Parlamak",
    "hintEn": "To give out bright light.",
    "hintTr": "Parlak ışık yaymak."
  },
  {
    "id": 1636,
    "category": "vocab",
    "en": "Mostly",
    "tr": "Çoğunlukla",
    "hintEn": "Almost all or most of the time.",
    "hintTr": "Neredeyse hepsi veya zamanın çoğu."
  },
  {
    "id": 1637,
    "category": "vocab",
    "en": "Cruelty",
    "tr": "Zulüm / Acımasızlık",
    "hintEn": "Doing bad things to hurt others.",
    "hintTr": "Başkalarını incitmek için kötü şeyler yapmak."
  },
  {
    "id": 1638,
    "category": "vocab",
    "en": "Violence",
    "tr": "Şiddet",
    "hintEn": "Action that hurts people or things.",
    "hintTr": "İnsanlara veya eşyalara zarar veren eylem."
  },
  {
    "id": 1639,
    "category": "vocab",
    "en": "Co-founder",
    "tr": "Kurucu ortak",
    "hintEn": "A person who starts a business with someone else.",
    "hintTr": "Başka biriyle iş kuran kişi."
  },
  {
    "id": 1640,
    "category": "vocab",
    "en": "Co-founders",
    "tr": "Kurucu ortaklar",
    "hintEn": "People who start a business together.",
    "hintTr": "Birlikte iş kuran kişiler."
  },
  {
    "id": 1641,
    "category": "vocab",
    "en": "Canvas",
    "tr": "Tuval / Kanvas",
    "hintEn": "A strong cloth used for painting.",
    "hintTr": "Resim yapmak için kullanılan güçlü kumaş."
  },
  {
    "id": 1642,
    "category": "vocab",
    "en": "Canvases",
    "tr": "Tuvaller",
    "hintEn": "Strong cloths used for painting.",
    "hintTr": "Resim yapmak için kullanılan güçlü kumaşlar."
  },
  {
    "id": 1643,
    "category": "vocab",
    "en": "Sculpture",
    "tr": "Heykel",
    "hintEn": "Art made from stone, wood, or metal.",
    "hintTr": "Taş, ahşap veya metalden yapılan sanat."
  },
  {
    "id": 1644,
    "category": "vocab",
    "en": "Sculptures",
    "tr": "Heykeller",
    "hintEn": "Art pieces made from stone, wood, or metal.",
    "hintTr": "Taş, ahşap veya metalden yapılan sanat eserleri."
  },
  {
    "id": 1645,
    "category": "vocab",
    "en": "Collage",
    "tr": "Kolaj",
    "hintEn": "Art made by putting pictures and paper together.",
    "hintTr": "Resim ve kağıtları bir araya getirerek yapılan sanat."
  },
  {
    "id": 1646,
    "category": "vocab",
    "en": "Collages",
    "tr": "Kolajlar",
    "hintEn": "Art pieces made by putting pictures and paper together.",
    "hintTr": "Resim ve kağıtları bir araya getirerek yapılan sanat eserleri."
  },
  {
    "id": 1647,
    "category": "vocab",
    "en": "Engraving",
    "tr": "Oyma / Gravür",
    "hintEn": "A picture made by cutting lines into metal or wood.",
    "hintTr": "Metal veya ahşaba çizgiler kesilerek yapılan resim."
  },
  {
    "id": 1648,
    "category": "vocab",
    "en": "Engravings",
    "tr": "Oymalar / Gravürler",
    "hintEn": "Pictures made by cutting lines into metal or wood.",
    "hintTr": "Metal veya ahşaba çizgiler kesilerek yapılan resimler."
  },
  {
    "id": 1649,
    "category": "vocab",
    "en": "Inhumanity",
    "tr": "İnsanlık dışı olma / Vahşet",
    "hintEn": "Very cruel acting without feeling sorry.",
    "hintTr": "Üzülmeden yapılan çok acımasız davranış."
  },
  {
    "id": 1650,
    "category": "vocab",
    "en": "Brutality",
    "tr": "Gaddarlık / Vahşet",
    "hintEn": "Cruel and violent behavior.",
    "hintTr": "Acımasız ve şiddet içeren davranış."
  },
  {
    "id": 1651,
    "category": "vocab",
    "en": "Talented",
    "tr": "Yetenekli",
    "hintEn": "Having a natural ability to do something well.",
    "hintTr": "Bir şeyi iyi yapmak için doğal bir yeteneğe sahip olmak."
  },
  {
    "id": 1652,
    "category": "vocab",
    "en": "Mainly",
    "tr": "Esasen / Çoğunlukla",
    "hintEn": "More than anything else.",
    "hintTr": "Başka her şeyden daha fazla."
  },
  {
    "id": 1653,
    "category": "vocab",
    "en": "Draw",
    "tr": "Çizmek",
    "hintEn": "To make a picture with a pen or pencil.",
    "hintTr": "Kalemle resim yapmak."
  },
  {
    "id": 1654,
    "category": "vocab",
    "en": "Drew",
    "tr": "Çizdi",
    "hintEn": "Past tense of draw.",
    "hintTr": "Çizmek fiilinin geçmiş zamanı."
  },
  {
    "id": 1655,
    "category": "vocab",
    "en": "Made",
    "tr": "Yaptı / Yapılmış",
    "hintEn": "Past tense of make.",
    "hintTr": "Yapmak fiilinin geçmiş zamanı."
  },
  {
    "id": 1656,
    "category": "vocab",
    "en": "Extremely",
    "tr": "Son derece / Aşırı",
    "hintEn": "Very, very much.",
    "hintTr": "Çok, çok fazla."
  },
  {
    "id": 1657,
    "category": "vocab",
    "en": "Express",
    "tr": "İfade etmek",
    "hintEn": "To show your feelings or thoughts.",
    "hintTr": "Hislerini veya düşüncelerini göstermek."
  },
  {
    "id": 1658,
    "category": "vocab",
    "en": "Expressed",
    "tr": "İfade etti",
    "hintEn": "Past tense of express.",
    "hintTr": "İfade etmek fiilinin geçmiş zamanı."
  },
  {
    "id": 1659,
    "category": "vocab",
    "en": "Earthquake",
    "tr": "Deprem",
    "hintEn": "A sudden, violent shaking of the ground.",
    "hintTr": "Yerin ani, şiddetli bir şekilde sallanması."
  },
  {
    "id": 1660,
    "category": "vocab",
    "en": "Earthquakes",
    "tr": "Depremler",
    "hintEn": "Sudden, violent shakings of the ground.",
    "hintTr": "Yerin ani, şiddetli sallantıları."
  },
  {
    "id": 1661,
    "category": "vocab",
    "en": "Avalanche",
    "tr": "Çığ",
    "hintEn": "A large amount of snow falling down a mountain.",
    "hintTr": "Dağdan aşağı düşen büyük miktarda kar."
  },
  {
    "id": 1662,
    "category": "vocab",
    "en": "Avalanches",
    "tr": "Çığlar",
    "hintEn": "Large amounts of snow falling down a mountain.",
    "hintTr": "Dağdan aşağı düşen büyük miktarda karlar."
  },
  {
    "id": 1663,
    "category": "vocab",
    "en": "Industry",
    "tr": "Endüstri / Sanayi",
    "hintEn": "The making of goods in factories.",
    "hintTr": "Fabrikalarda mal yapımı."
  },
  {
    "id": 1664,
    "category": "vocab",
    "en": "Industries",
    "tr": "Endüstriler / Sanayiler",
    "hintEn": "Different types of businesses making goods.",
    "hintTr": "Mal yapan farklı iş türleri."
  },
  {
    "id": 1665,
    "category": "vocab",
    "en": "Release",
    "tr": "Serbest bırakmak / Yayınlamak",
    "hintEn": "To let something go or make it ready for people.",
    "hintTr": "Bir şeyi bırakmak veya insanlar için hazır hale getirmek."
  },
  {
    "id": 1666,
    "category": "vocab",
    "en": "Leading",
    "tr": "Lider / Önde gelen",
    "hintEn": "Most important or best.",
    "hintTr": "En önemli veya en iyi olan."
  },
  {
    "id": 1667,
    "category": "vocab",
    "en": "Audience",
    "tr": "Seyirci / Dinleyici",
    "hintEn": "People who watch or listen to a show.",
    "hintTr": "Bir gösteriyi izleyen veya dinleyen insanlar."
  },
  {
    "id": 1668,
    "category": "vocab",
    "en": "Audiences",
    "tr": "Seyirciler / Dinleyiciler",
    "hintEn": "Groups of people who watch or listen to a show.",
    "hintTr": "Bir gösteriyi izleyen veya dinleyen insan grupları."
  },
  {
    "id": 1669,
    "category": "vocab",
    "en": "Drum",
    "tr": "Davul",
    "hintEn": "A musical instrument you hit to make a sound.",
    "hintTr": "Ses çıkarmak için vurduğun müzik aleti."
  },
  {
    "id": 1670,
    "category": "vocab",
    "en": "Drums",
    "tr": "Davullar",
    "hintEn": "Musical instruments you hit to make sounds.",
    "hintTr": "Ses çıkarmak için vurduğun müzik aletleri."
  },
  {
    "id": 1671,
    "category": "vocab",
    "en": "Beatles",
    "tr": "Beatles (Müzik Grubu)",
    "hintEn": "A very famous English rock band.",
    "hintTr": "Çok ünlü bir İngiliz rock grubu."
  },
  {
    "id": 1672,
    "category": "vocab",
    "en": "Authority",
    "tr": "Yetkili / Otorite",
    "hintEn": "The power to make rules or decisions.",
    "hintTr": "Kural veya karar verme gücü."
  },
  {
    "id": 1673,
    "category": "vocab",
    "en": "Authorities",
    "tr": "Yetkililer",
    "hintEn": "People who have the power to make decisions.",
    "hintTr": "Karar verme gücüne sahip olan insanlar."
  },
  {
    "id": 1674,
    "category": "vocab",
    "en": "Consider",
    "tr": "Dikkate almak / Düşünmek",
    "hintEn": "To think about something carefully.",
    "hintTr": "Bir şey hakkında dikkatlice düşünmek."
  },
  {
    "id": 1675,
    "category": "vocab",
    "en": "Exceed",
    "tr": "Aşmak / Geçmek",
    "hintEn": "To be more than a number or limit.",
    "hintTr": "Bir sayıdan veya sınırdan fazla olmak."
  },
  {
    "id": 1676,
    "category": "vocab",
    "en": "Exceeding",
    "tr": "Aşan / Geçen",
    "hintEn": "Being more than a limit.",
    "hintTr": "Bir sınırı aşma durumu."
  },
  {
    "id": 1677,
    "category": "vocab",
    "en": "Combination",
    "tr": "Birleşim / Kombinasyon",
    "hintEn": "Two or more things joined together.",
    "hintTr": "İki veya daha fazla şeyin birleşmesi."
  },
  {
    "id": 1678,
    "category": "vocab",
    "en": "Combinations",
    "tr": "Birleşimler",
    "hintEn": "Different groups of things joined together.",
    "hintTr": "Birlikte katılmış farklı şey grupları."
  },
  {
    "id": 1679,
    "category": "vocab",
    "en": "Dark",
    "tr": "Karanlık / Koyu",
    "hintEn": "Having very little light.",
    "hintTr": "Çok az ışığı olan."
  },
  {
    "id": 1680,
    "category": "vocab",
    "en": "Hysterical",
    "tr": "Histerik / Çok komik",
    "hintEn": "Extremely funny or losing control of feelings.",
    "hintTr": "Aşırı komik veya hislerin kontrolünü kaybetme."
  },
  {
    "id": 1681,
    "category": "vocab",
    "en": "Bands",
    "tr": "Müzik grupları",
    "hintEn": "Groups of people who play music together.",
    "hintTr": "Birlikte müzik çalan insan grupları."
  },
  {
    "id": 1682,
    "category": "vocab",
    "en": "Famous",
    "tr": "Ünlü / Meşhur",
    "hintEn": "Known by a lot of people.",
    "hintTr": "Birçok insan tarafından bilinen."
  },
  {
    "id": 1683,
    "category": "vocab",
    "en": "Church",
    "tr": "Kilise",
    "hintEn": "A building for Christian religious events.",
    "hintTr": "Hristiyan dini etkinlikleri için bir bina."
  },
  {
    "id": 1684,
    "category": "vocab",
    "en": "Churches",
    "tr": "Kiliseler",
    "hintEn": "Buildings for Christian religious events.",
    "hintTr": "Hristiyan dini etkinlikleri için binalar."
  },
  {
    "id": 1685,
    "category": "vocab",
    "en": "Masterpiece",
    "tr": "Başyapıt / Şaheser",
    "hintEn": "A very great piece of art.",
    "hintTr": "Çok harika bir sanat eseri."
  },
  {
    "id": 1686,
    "category": "vocab",
    "en": "Masterpieces",
    "tr": "Başyapıtlar / Şaheserler",
    "hintEn": "Very great pieces of art.",
    "hintTr": "Çok harika sanat eserleri."
  },
  {
    "id": 1687,
    "category": "vocab",
    "en": "Fashion",
    "tr": "Moda",
    "hintEn": "A popular style of clothes.",
    "hintTr": "Popüler bir giyim tarzı."
  },
  {
    "id": 1688,
    "category": "vocab",
    "en": "Building",
    "tr": "Bina / Yapı",
    "hintEn": "A place with a roof and walls, like a house.",
    "hintTr": "Ev gibi çatısı ve duvarları olan bir yer."
  },
  {
    "id": 1689,
    "category": "vocab",
    "en": "Buildings",
    "tr": "Binalar",
    "hintEn": "Places with roofs and walls.",
    "hintTr": "Çatıları ve duvarları olan yerler."
  },
  {
    "id": 1690,
    "category": "vocab",
    "en": "Museum",
    "tr": "Müze",
    "hintEn": "A building where you look at old or interesting things.",
    "hintTr": "Eski veya ilginç şeylere baktığın bina."
  },
  {
    "id": 1691,
    "category": "vocab",
    "en": "Museums",
    "tr": "Müzeler",
    "hintEn": "Buildings where you look at old or interesting things.",
    "hintTr": "Eski veya ilginç şeylere baktığın binalar."
  },
  {
    "id": 1692,
    "category": "vocab",
    "en": "Gallery",
    "tr": "Galeri",
    "hintEn": "A room or building for showing art.",
    "hintTr": "Sanatı göstermek için bir oda veya bina."
  },
  {
    "id": 1693,
    "category": "vocab",
    "en": "Galleries",
    "tr": "Galeriler",
    "hintEn": "Rooms or buildings for showing art.",
    "hintTr": "Sanatı göstermek için odalar veya binalar."
  },
  {
    "id": 1694,
    "category": "vocab",
    "en": "Therefore",
    "tr": "Bu nedenle / Dolayısıyla",
    "hintEn": "For that reason.",
    "hintTr": "O sebepten dolayı."
  },
  {
    "id": 1695,
    "category": "vocab",
    "en": "Contribute",
    "tr": "Katkıda bulunmak",
    "hintEn": "To give money, help, or an idea.",
    "hintTr": "Para, yardım veya bir fikir vermek."
  },
  {
    "id": 1696,
    "category": "vocab",
    "en": "Contributing",
    "tr": "Katkıda bulunan",
    "hintEn": "Giving money, help, or an idea.",
    "hintTr": "Para, yardım veya bir fikir verme durumu."
  },
  {
    "id": 1697,
    "category": "vocab",
    "en": "Safe",
    "tr": "Güvenli",
    "hintEn": "Not in danger.",
    "hintTr": "Tehlikede olmayan."
  },
  {
    "id": 1698,
    "category": "vocab",
    "en": "Expensive",
    "tr": "Pahalı",
    "hintEn": "Costing a lot of money.",
    "hintTr": "Çok paraya mal olan."
  },
  {
    "id": 1699,
    "category": "vocab",
    "en": "Fantastic",
    "tr": "Harika / Şahane",
    "hintEn": "Very good or beautiful.",
    "hintTr": "Çok iyi veya güzel."
  },
  {
    "id": 1700,
    "category": "vocab",
    "en": "However",
    "tr": "Ancak / Yine de",
    "hintEn": "But.",
    "hintTr": "Fakat, lakin."
  },
  {
    "id": 1701,
    "category": "vocab",
    "en": "Honour",
    "tr": "Onur / Şeref",
    "hintEn": "Great respect for someone.",
    "hintTr": "Birine duyulan büyük saygı."
  },
  {
    "id": 1702,
    "category": "vocab",
    "en": "Privilege",
    "tr": "Ayrıcalık",
    "hintEn": "A special right or advantage for a person.",
    "hintTr": "Bir kişi için özel hak veya avantaj."
  },
  {
    "id": 1703,
    "category": "vocab",
    "en": "Privileges",
    "tr": "Ayrıcalıklar",
    "hintEn": "Special rights or advantages.",
    "hintTr": "Özel haklar veya avantajlar."
  },
  {
    "id": 1704,
    "category": "vocab",
    "en": "Interview",
    "tr": "Röportaj / Mülakat",
    "hintEn": "A meeting where someone asks you questions.",
    "hintTr": "Birinin sana sorular sorduğu toplantı."
  },
  {
    "id": 1705,
    "category": "vocab",
    "en": "Interviews",
    "tr": "Röportajlar / Mülakatlar",
    "hintEn": "Meetings where people ask questions.",
    "hintTr": "İnsanların sorular sorduğu toplantılar."
  },
  {
    "id": 1706,
    "category": "vocab",
    "en": "Admire",
    "tr": "Hayran olmak / Beğenmek",
    "hintEn": "To respect and like someone or something.",
    "hintTr": "Birine veya bir şeye saygı duymak ve beğenmek."
  },
  {
    "id": 1707,
    "category": "vocab",
    "en": "Invaluable",
    "tr": "Paha biçilemez",
    "hintEn": "Extremely useful or important.",
    "hintTr": "Son derece yararlı veya önemli."
  },
  {
    "id": 1708,
    "category": "vocab",
    "en": "Significant",
    "tr": "Önemli / Anlamlı",
    "hintEn": "Important and easy to see.",
    "hintTr": "Önemli ve görülmesi kolay olan."
  },
  {
    "id": 1709,
    "category": "vocab",
    "en": "Carriage",
    "tr": "At arabası / Vagon",
    "hintEn": "A vehicle pulled by horses.",
    "hintTr": "Atlar tarafından çekilen bir araç."
  },
  {
    "id": 1710,
    "category": "vocab",
    "en": "Carriages",
    "tr": "At arabaları / Vagonlar",
    "hintEn": "Vehicles pulled by horses.",
    "hintTr": "Atlar tarafından çekilen araçlar."
  },
  {
    "id": 1711,
    "category": "vocab",
    "en": "Keep",
    "tr": "Tutmak / Saklamak",
    "hintEn": "To have and not give back.",
    "hintTr": "Sahip olmak ve geri vermemek."
  },
  {
    "id": 1712,
    "category": "vocab",
    "en": "Happy",
    "tr": "Mutlu",
    "hintEn": "Feeling good and smiling.",
    "hintTr": "İyi hissetmek ve gülümsemek."
  },
  {
    "id": 1713,
    "category": "vocab",
    "en": "Happier",
    "tr": "Daha mutlu",
    "hintEn": "Feeling more good than before.",
    "hintTr": "Eskisinden daha iyi hissetmek."
  },
  {
    "id": 1714,
    "category": "vocab",
    "en": "Elegant",
    "tr": "Zarif / Şık",
    "hintEn": "Beautiful and graceful.",
    "hintTr": "Güzel ve zarif olan."
  },
  {
    "id": 1715,
    "category": "vocab",
    "en": "National",
    "tr": "Ulusal / Milli",
    "hintEn": "About a whole country.",
    "hintTr": "Bütün bir ülke hakkında olan."
  },
  {
    "id": 1716,
    "category": "vocab",
    "en": "Anthem",
    "tr": "Marş",
    "hintEn": "A special song for a country or group.",
    "hintTr": "Bir ülke veya grup için özel bir şarkı."
  },
  {
    "id": 1717,
    "category": "vocab",
    "en": "Anthems",
    "tr": "Marşlar",
    "hintEn": "Special songs for countries or groups.",
    "hintTr": "Ülkeler veya gruplar için özel şarkılar."
  },
  {
    "id": 1718,
    "category": "vocab",
    "en": "Isolated",
    "tr": "İzole / Yalıtılmış",
    "hintEn": "Far away from other things or people.",
    "hintTr": "Başka şeylerden veya insanlardan çok uzakta olan."
  },
  {
    "id": 1719,
    "category": "vocab",
    "en": "Precious",
    "tr": "Değerli / Kıymetli",
    "hintEn": "Very expensive or important to you.",
    "hintTr": "Senin için çok pahalı veya önemli olan."
  },
  {
    "id": 1720,
    "category": "vocab",
    "en": "Ample",
    "tr": "Bol / Yeterince",
    "hintEn": "More than enough.",
    "hintTr": "Yeterinden daha fazla olan."
  },
  {
    "id": 1721,
    "category": "vocab",
    "en": "Souvenir",
    "tr": "Hediyelik eşya / Hatıra",
    "hintEn": "A thing you buy to remember a place.",
    "hintTr": "Bir yeri hatırlamak için satın aldığın şey."
  },
  {
    "id": 1722,
    "category": "vocab",
    "en": "Souvenirs",
    "tr": "Hediyelik eşyalar / Hatıralar",
    "hintEn": "Things you buy to remember places.",
    "hintTr": "Yerleri hatırlamak için satın aldığın şeyler."
  },
  {
    "id": 1723,
    "category": "vocab",
    "en": "Mosque",
    "tr": "Cami",
    "hintEn": "A building for Islamic religious events.",
    "hintTr": "İslami dini etkinlikler için bir bina."
  },
  {
    "id": 1724,
    "category": "vocab",
    "en": "Mosques",
    "tr": "Camiler",
    "hintEn": "Buildings for Islamic religious events.",
    "hintTr": "İslami dini etkinlikler için binalar."
  },
  {
    "id": 1725,
    "category": "vocab",
    "en": "Empire",
    "tr": "İmparatorluk",
    "hintEn": "A large group of countries ruled by one person.",
    "hintTr": "Bir kişi tarafından yönetilen büyük bir ülke grubu."
  },
  {
    "id": 1726,
    "category": "vocab",
    "en": "Empires",
    "tr": "İmparatorluklar",
    "hintEn": "Large groups of countries ruled by one person.",
    "hintTr": "Bir kişi tarafından yönetilen büyük ülke grupları."
  },
  {
    "id": 1727,
    "category": "vocab",
    "en": "Local",
    "tr": "Yerli / Bölgesel",
    "hintEn": "Belonging to a particular area or neighborhood.",
    "hintTr": "Belirli bir bölgeye veya mahalleye ait olan."
  },
  {
    "id": 1728,
    "category": "vocab",
    "en": "Locals",
    "tr": "Yerliler",
    "hintEn": "People who live in a particular area.",
    "hintTr": "Belirli bir bölgede yaşayan insanlar."
  },
  {
    "id": 1729,
    "category": "vocab",
    "en": "Chef",
    "tr": "Aşçı / Şef",
    "hintEn": "A professional cook.",
    "hintTr": "Profesyonel bir aşçı."
  },
  {
    "id": 1730,
    "category": "vocab",
    "en": "Chefs",
    "tr": "Aşçılar / Şefler",
    "hintEn": "Professional cooks.",
    "hintTr": "Profesyonel aşçılar."
  },
  {
    "id": 1731,
    "category": "vocab",
    "en": "Combine",
    "tr": "Birleştirmek / Karıştırmak",
    "hintEn": "To put two or more things together.",
    "hintTr": "İki veya daha fazla şeyi bir araya getirmek."
  },
  {
    "id": 1732,
    "category": "vocab",
    "en": "Ingredient",
    "tr": "İçerik / Malzeme",
    "hintEn": "One of the things used to make a food or dish.",
    "hintTr": "Bir yiyecek veya yemek yapmak için kullanılan şeylerden biri."
  },
  {
    "id": 1733,
    "category": "vocab",
    "en": "Ingredients",
    "tr": "İçerikler / Malzemeler",
    "hintEn": "The things used to make a food or dish.",
    "hintTr": "Bir yiyecek veya yemek yapmak için kullanılan şeyler."
  },
  {
    "id": 1734,
    "category": "vocab",
    "en": "Contemporary",
    "tr": "Çağdaş / Modern",
    "hintEn": "Belonging to the present time.",
    "hintTr": "Şimdiki zamana ait olan."
  },
  {
    "id": 1735,
    "category": "vocab",
    "en": "Technique",
    "tr": "Teknik / Yöntem",
    "hintEn": "A special way of doing something.",
    "hintTr": "Bir şeyi yapmanın özel bir yolu."
  },
  {
    "id": 1736,
    "category": "vocab",
    "en": "Techniques",
    "tr": "Teknikler / Yöntemler",
    "hintEn": "Special ways of doing things.",
    "hintTr": "Bir şeyleri yapmanın özel yolları."
  },
  {
    "id": 1737,
    "category": "vocab",
    "en": "Fundamental",
    "tr": "Temel / Esas",
    "hintEn": "Basic and very important.",
    "hintTr": "Temel ve çok önemli olan."
  },
  {
    "id": 1738,
    "category": "vocab",
    "en": "Fundamentals",
    "tr": "Temeller / Esaslar",
    "hintEn": "The basic and most important parts of something.",
    "hintTr": "Bir şeyin temel ve en önemli kısımları."
  },
  {
    "id": 1739,
    "category": "vocab",
    "en": "Cuisine",
    "tr": "Mutfak (Kültürü)",
    "hintEn": "A style of cooking.",
    "hintTr": "Bir yemek pişirme tarzı."
  },
  {
    "id": 1740,
    "category": "vocab",
    "en": "Cuisines",
    "tr": "Mutfaklar (Kültürleri)",
    "hintEn": "Different styles of cooking.",
    "hintTr": "Farklı yemek pişirme tarzları."
  },
  {
    "id": 1741,
    "category": "vocab",
    "en": "Field-to-table",
    "tr": "Tarladan sofraya",
    "hintEn": "Food brought directly from a farm to be eaten.",
    "hintTr": "Doğrudan çiftlikten getirilip yenen yiyecek."
  },
  {
    "id": 1742,
    "category": "vocab",
    "en": "Traditional",
    "tr": "Geleneksel",
    "hintEn": "Following older methods and ideas.",
    "hintTr": "Eski yöntemleri ve fikirleri takip eden."
  },
  {
    "id": 1743,
    "category": "vocab",
    "en": "Unique",
    "tr": "Eşsiz / Benzersiz",
    "hintEn": "Being the only one of its kind.",
    "hintTr": "Türünün tek örneği olan."
  },
  {
    "id": 1744,
    "category": "vocab",
    "en": "Purchase",
    "tr": "Satın almak / Alım",
    "hintEn": "To buy something.",
    "hintTr": "Bir şey satın almak."
  },
  {
    "id": 1745,
    "category": "vocab",
    "en": "Purchases",
    "tr": "Satın alımlar / Alışverişler",
    "hintEn": "Things that you have bought.",
    "hintTr": "Satın aldığın şeyler."
  },
  {
    "id": 1746,
    "category": "vocab",
    "en": "Unmissable",
    "tr": "Kaçırılmaması gereken",
    "hintEn": "So good that you must see or do it.",
    "hintTr": "O kadar iyi ki görmen veya yapman gereken."
  },
  {
    "id": 1747,
    "category": "vocab",
    "en": "Accommodation",
    "tr": "Konaklama (Yeri)",
    "hintEn": "A place to live, work, or stay in.",
    "hintTr": "Yaşamak, çalışmak veya kalmak için bir yer."
  },
  {
    "id": 1748,
    "category": "vocab",
    "en": "Accommodations",
    "tr": "Konaklama yerleri",
    "hintEn": "Places to live, work, or stay in.",
    "hintTr": "Yaşamak, çalışmak veya kalmak için yerler."
  },
  {
    "id": 1749,
    "category": "vocab",
    "en": "Tuition",
    "tr": "Okul taksiti / Öğretim ücreti",
    "hintEn": "Money paid to go to a school.",
    "hintTr": "Bir okula gitmek için ödenen para."
  },
  {
    "id": 1750,
    "category": "vocab",
    "en": "Evidence",
    "tr": "Kanıt / Delil",
    "hintEn": "Facts or signs that show something is true.",
    "hintTr": "Bir şeyin doğru olduğunu gösteren gerçekler veya işaretler."
  },
  {
    "id": 1751,
    "category": "vocab",
    "en": "Prediction",
    "tr": "Tahmin / Öngörü",
    "hintEn": "A guess about what will happen in the future.",
    "hintTr": "Gelecekte ne olacağına dair bir tahmin."
  },
  {
    "id": 1752,
    "category": "vocab",
    "en": "Predictions",
    "tr": "Tahminler / Öngörüler",
    "hintEn": "Guesses about what will happen in the future.",
    "hintTr": "Gelecekte ne olacağına dair tahminler."
  },
  {
    "id": 1753,
    "category": "vocab",
    "en": "Intention",
    "tr": "Niyet / Amaç",
    "hintEn": "Something that you want and plan to do.",
    "hintTr": "Yapmak istediğin ve planladığın şey."
  },
  {
    "id": 1754,
    "category": "vocab",
    "en": "Intentions",
    "tr": "Niyetler / Amaçlar",
    "hintEn": "Things that you want and plan to do.",
    "hintTr": "Yapmak istediğin ve planladığın şeyler."
  },
  {
    "id": 1755,
    "category": "vocab",
    "en": "Look out!",
    "tr": "Dikkat et!",
    "hintEn": "Said to warn someone of danger.",
    "hintTr": "Birini tehlikeye karşı uyarmak için söylenir."
  },
  {
    "id": 1756,
    "category": "vocab",
    "en": "Decision",
    "tr": "Karar",
    "hintEn": "A choice that you make.",
    "hintTr": "Yaptığın bir seçim."
  },
  {
    "id": 1757,
    "category": "vocab",
    "en": "Decisions",
    "tr": "Kararlar",
    "hintEn": "Choices that you make.",
    "hintTr": "Yaptığın seçimler."
  },
  {
    "id": 1758,
    "category": "vocab",
    "en": "Weak",
    "tr": "Zayıf / Güçsüz",
    "hintEn": "Not physically strong.",
    "hintTr": "Fiziksel olarak güçlü olmayan."
  },
  {
    "id": 1759,
    "category": "vocab",
    "en": "Instant",
    "tr": "Anlık / Hazır",
    "hintEn": "Happening immediately.",
    "hintTr": "Hemen gerçekleşen."
  },
  {
    "id": 1760,
    "category": "vocab",
    "en": "Instants",
    "tr": "Anlar / Lahzalar",
    "hintEn": "Very short periods of time.",
    "hintTr": "Çok kısa zaman dilimleri."
  },
  {
    "id": 1761,
    "category": "vocab",
    "en": "Suppose",
    "tr": "Varsaymak / Sanmak",
    "hintEn": "To think that something is likely to be true.",
    "hintTr": "Bir şeyin doğru olmasının muhtemel olduğunu düşünmek."
  },
  {
    "id": 1762,
    "category": "vocab",
    "en": "Virtual reality",
    "tr": "Sanal gerçeklik",
    "hintEn": "A world created by computers that looks and feels real.",
    "hintTr": "Bilgisayarlar tarafından yaratılan, gerçek gibi görünen dünya."
  },
  {
    "id": 1763,
    "category": "vocab",
    "en": "Planet",
    "tr": "Gezegen",
    "hintEn": "A large, round object in space that moves around a sun.",
    "hintTr": "Uzayda bir güneşin etrafında dönen büyük, yuvarlak nesne."
  },
  {
    "id": 1764,
    "category": "vocab",
    "en": "Planets",
    "tr": "Gezegenler",
    "hintEn": "Large, round objects in space that move around a sun.",
    "hintTr": "Uzayda bir güneşin etrafında dönen büyük, yuvarlak nesneler."
  },
  {
    "id": 1765,
    "category": "vocab",
    "en": "Crowded",
    "tr": "Kalabalık",
    "hintEn": "Full of people.",
    "hintTr": "İnsanlarla dolu."
  },
  {
    "id": 1766,
    "category": "vocab",
    "en": "Optimistic",
    "tr": "İyimser",
    "hintEn": "Hoping or believing that good things will happen.",
    "hintTr": "İyi şeylerin olacağını uman veya buna inanan."
  },
  {
    "id": 1767,
    "category": "vocab",
    "en": "Pessimist",
    "tr": "Kötümser (Kişi)",
    "hintEn": "A person who always expects bad things to happen.",
    "hintTr": "Her zaman kötü şeylerin olmasını bekleyen kişi."
  },
  {
    "id": 1768,
    "category": "vocab",
    "en": "Pessimists",
    "tr": "Kötümserler",
    "hintEn": "People who always expect bad things to happen.",
    "hintTr": "Her zaman kötü şeylerin olmasını bekleyen kişiler."
  },
  {
    "id": 1769,
    "category": "vocab",
    "en": "Introduction",
    "tr": "Tanıtım / Giriş",
    "hintEn": "The first part of a book or speech.",
    "hintTr": "Bir kitabın veya konuşmanın ilk kısmı."
  },
  {
    "id": 1770,
    "category": "vocab",
    "en": "Introductions",
    "tr": "Tanıtımlar / Girişler",
    "hintEn": "The first parts of books or speeches.",
    "hintTr": "Kitapların veya konuşmaların ilk kısımları."
  },
  {
    "id": 1771,
    "category": "vocab",
    "en": "Warm-up",
    "tr": "Isınma",
    "hintEn": "Exercises done before a sport or activity.",
    "hintTr": "Bir spor veya aktiviteden önce yapılan egzersizler."
  },
  {
    "id": 1772,
    "category": "vocab",
    "en": "Warm-ups",
    "tr": "Isınmalar",
    "hintEn": "Sets of exercises done before sports.",
    "hintTr": "Sporlardan önce yapılan egzersiz setleri."
  },
  {
    "id": 1773,
    "category": "vocab",
    "en": "Charger",
    "tr": "Şarj aleti",
    "hintEn": "A piece of equipment used to put electricity into a battery.",
    "hintTr": "Bataryaya elektrik yüklemek için kullanılan alet."
  },
  {
    "id": 1774,
    "category": "vocab",
    "en": "Chargers",
    "tr": "Şarj aletleri",
    "hintEn": "Pieces of equipment used to put electricity into batteries.",
    "hintTr": "Bataryalara elektrik yüklemek için kullanılan aletler."
  },
  {
    "id": 1775,
    "category": "vocab",
    "en": "Battery",
    "tr": "Pil / Batarya",
    "hintEn": "An object that provides electricity for things like radios.",
    "hintTr": "Radyo gibi şeylere elektrik sağlayan nesne."
  },
  {
    "id": 1776,
    "category": "vocab",
    "en": "Batteries",
    "tr": "Piller / Bataryalar",
    "hintEn": "Objects that provide electricity.",
    "hintTr": "Elektrik sağlayan nesneler."
  },
  {
    "id": 1777,
    "category": "vocab",
    "en": "Several",
    "tr": "Birkaç / Çeşitli",
    "hintEn": "More than two but not many.",
    "hintTr": "İkiden fazla ama çok değil."
  },
  {
    "id": 1778,
    "category": "vocab",
    "en": "Advice",
    "tr": "Tavsiye / Öğüt",
    "hintEn": "Ideas given to someone about what they should do.",
    "hintTr": "Birine ne yapması gerektiği hakkında verilen fikirler."
  },
  {
    "id": 1779,
    "category": "vocab",
    "en": "Fruit",
    "tr": "Meyve",
    "hintEn": "The sweet part of a plant or tree that contains seeds.",
    "hintTr": "Bitkinin veya ağacın tohum içeren tatlı kısmı."
  },
  {
    "id": 1780,
    "category": "vocab",
    "en": "Fruits",
    "tr": "Meyveler",
    "hintEn": "Sweet parts of plants or trees.",
    "hintTr": "Bitkilerin veya ağaçların tatlı kısımları."
  },
  {
    "id": 1781,
    "category": "vocab",
    "en": "Water",
    "tr": "Su",
    "hintEn": "The clear liquid that falls from the sky as rain.",
    "hintTr": "Gökten yağmur olarak düşen berrak sıvı."
  },
  {
    "id": 1782,
    "category": "vocab",
    "en": "Tea",
    "tr": "Çay",
    "hintEn": "A hot drink made by pouring boiling water onto dried leaves.",
    "hintTr": "Kurutulmuş yaprakların üzerine kaynar su dökülerek yapılan içecek."
  },
  {
    "id": 1783,
    "category": "vocab",
    "en": "Bread",
    "tr": "Ekmek",
    "hintEn": "A basic food made from flour, water, and yeast baked together.",
    "hintTr": "Un, su ve mayanın birlikte pişirilmesiyle yapılan temel yiyecek."
  },
  {
    "id": 1784,
    "category": "vocab",
    "en": "Fish",
    "tr": "Balık / Balıklar",
    "hintEn": "An animal that lives in water and swims.",
    "hintTr": "Suda yaşayan ve yüzen hayvan."
  },
  {
    "id": 1785,
    "category": "vocab",
    "en": "Pea",
    "tr": "Bezelye",
    "hintEn": "A round, green seed eaten as a vegetable.",
    "hintTr": "Sebze olarak yenen yuvarlak, yeşil tohum."
  },
  {
    "id": 1786,
    "category": "vocab",
    "en": "Peas",
    "tr": "Bezelyeler",
    "hintEn": "Round, green seeds eaten as vegetables.",
    "hintTr": "Sebze olarak yenen yuvarlak, yeşil tohumlar."
  },
  {
    "id": 1787,
    "category": "vocab",
    "en": "Soup",
    "tr": "Çorba",
    "hintEn": "A hot, liquid food made from meat or vegetables.",
    "hintTr": "Et veya sebzelerden yapılan sıcak, sıvı yiyecek."
  },
  {
    "id": 1788,
    "category": "vocab",
    "en": "Soups",
    "tr": "Çorbalar",
    "hintEn": "Hot, liquid foods made from meat or vegetables.",
    "hintTr": "Et veya sebzelerden yapılan sıcak, sıvı yiyecekler."
  },
  {
    "id": 1789,
    "category": "vocab",
    "en": "Soda",
    "tr": "Gazoz / Maden suyu",
    "hintEn": "A sweet drink with bubbles.",
    "hintTr": "Baloncuklu (gazlı) tatlı içecek."
  },
  {
    "id": 1790,
    "category": "vocab",
    "en": "Sodas",
    "tr": "Gazozlar / Maden suları",
    "hintEn": "Sweet drinks with bubbles.",
    "hintTr": "Baloncuklu (gazlı) tatlı içecekler."
  },
  {
    "id": 1791,
    "category": "vocab",
    "en": "Honey",
    "tr": "Bal",
    "hintEn": "A sweet, sticky, yellow food made by bees.",
    "hintTr": "Arılar tarafından yapılan tatlı, yapışkan, sarı yiyecek."
  },
  {
    "id": 1792,
    "category": "vocab",
    "en": "Sense",
    "tr": "Duyu / His",
    "hintEn": "One of the five powers (sight, hearing, etc.) of the body.",
    "hintTr": "Vücudun beş gücünden (görme, duyma vb.) biri."
  },
  {
    "id": 1793,
    "category": "vocab",
    "en": "Senses",
    "tr": "Duyular / Hisler",
    "hintEn": "The powers of the body to see, hear, smell, taste, and feel.",
    "hintTr": "Vücudun görme, duyma, koklama, tatma ve hissetme güçleri."
  },
  {
    "id": 1794,
    "category": "vocab",
    "en": "Information",
    "tr": "Bilgi",
    "hintEn": "Facts or details about a person, company, or event.",
    "hintTr": "Bir kişi, şirket veya olay hakkındaki gerçekler veya detaylar."
  },
  {
    "id": 1795,
    "category": "vocab",
    "en": "Pepper",
    "tr": "Karabiber / Biber",
    "hintEn": "A powder or vegetable used to give food a spicy flavor.",
    "hintTr": "Yemeğe baharatlı bir tat vermek için kullanılan toz veya sebze."
  },
  {
    "id": 1796,
    "category": "vocab",
    "en": "Peppers",
    "tr": "Biberler",
    "hintEn": "Vegetables used to give food flavor.",
    "hintTr": "Yemeğe tat vermek için kullanılan sebzeler."
  },
  {
    "id": 1797,
    "category": "vocab",
    "en": "Spice",
    "tr": "Baharat",
    "hintEn": "A substance made from a plant, used to give flavor to food.",
    "hintTr": "Yemeğe tat vermek için kullanılan, bitkiden yapılan madde."
  },
  {
    "id": 1798,
    "category": "vocab",
    "en": "Spices",
    "tr": "Baharatlar",
    "hintEn": "Substances made from plants, used to give flavor to food.",
    "hintTr": "Yemeğe tat vermek için kullanılan, bitkilerden yapılan maddeler."
  },
  {
    "id": 1799,
    "category": "vocab",
    "en": "Music",
    "tr": "Müzik",
    "hintEn": "Sounds that are sung or played on instruments.",
    "hintTr": "Söylenen veya enstrümanlarla çalınan sesler."
  },
  {
    "id": 1800,
    "category": "vocab",
    "en": "Soaps",
    "tr": "Sabunlar",
    "hintEn": "Substances used for washing.",
    "hintTr": "Yıkamak için kullanılan maddeler."
  },
  {
    "id": 1801,
    "category": "vocab",
    "en": "Meat",
    "tr": "Et",
    "hintEn": "The flesh of an animal used as food.",
    "hintTr": "Yiyecek olarak kullanılan hayvan eti."
  },
  {
    "id": 1802,
    "category": "vocab",
    "en": "Bean",
    "tr": "Fasulye",
    "hintEn": "A seed of various climbing plants, eaten as a vegetable.",
    "hintTr": "Sebze olarak yenen çeşitli tırmanıcı bitkilerin tohumu."
  },
  {
    "id": 1803,
    "category": "vocab",
    "en": "Beans",
    "tr": "Fasulyeler",
    "hintEn": "Seeds of climbing plants eaten as vegetables.",
    "hintTr": "Sebze olarak yenen tırmanıcı bitkilerin tohumları."
  },
  {
    "id": 1804,
    "category": "vocab",
    "en": "Wisdom",
    "tr": "Bilgelik / Akıl",
    "hintEn": "The ability to use your knowledge to make good decisions.",
    "hintTr": "İyi kararlar vermek için bilgini kullanma yeteneği."
  },
  {
    "id": 1805,
    "category": "vocab",
    "en": "Jam",
    "tr": "Reçel",
    "hintEn": "A sweet food made from fruit and sugar.",
    "hintTr": "Meyve ve şekerden yapılan tatlı yiyecek."
  },
  {
    "id": 1806,
    "category": "vocab",
    "en": "Jams",
    "tr": "Reçeller",
    "hintEn": "Sweet foods made from fruit and sugar.",
    "hintTr": "Meyve ve şekerden yapılan tatlı yiyecekler."
  },
  {
    "id": 1807,
    "category": "vocab",
    "en": "Juice",
    "tr": "Meyve suyu",
    "hintEn": "The liquid that comes from fruit or vegetables.",
    "hintTr": "Meyve veya sebzelerden elde edilen sıvı."
  },
  {
    "id": 1808,
    "category": "vocab",
    "en": "Juices",
    "tr": "Meyve suları",
    "hintEn": "Liquids that come from fruit or vegetables.",
    "hintTr": "Meyve veya sebzelerden elde edilen sıvılar."
  },
  {
    "id": 1809,
    "category": "vocab",
    "en": "Either",
    "tr": "İkisinden biri / Ya (o ya bu)",
    "hintEn": "One or the other of two people or things.",
    "hintTr": "İki kişi veya şeyden biri veya diğeri."
  },
  {
    "id": 1810,
    "category": "vocab",
    "en": "Neither",
    "tr": "İkisi de değil / Ne (o ne bu)",
    "hintEn": "Not one and not the other of two things.",
    "hintTr": "İki şeyden biri de değil, diğeri de değil."
  },
  {
    "id": 1811,
    "category": "vocab",
    "en": "Picnic",
    "tr": "Piknik",
    "hintEn": "A meal eaten outside, often in a park or forest.",
    "hintTr": "Genellikle parkta veya ormanda dışarıda yenen yemek."
  },
  {
    "id": 1812,
    "category": "vocab",
    "en": "Picnics",
    "tr": "Piknikler",
    "hintEn": "Meals eaten outside.",
    "hintTr": "Dışarıda yenen yemekler."
  },
  {
    "id": 1813,
    "category": "vocab",
    "en": "Egg",
    "tr": "Yumurta",
    "hintEn": "An oval object produced by a female bird, eaten as food.",
    "hintTr": "Dişi bir kuş tarafından üretilen, yiyecek olarak yenen oval nesne."
  },
  {
    "id": 1814,
    "category": "vocab",
    "en": "Eggs",
    "tr": "Yumurtalar",
    "hintEn": "Oval objects produced by female birds, eaten as food.",
    "hintTr": "Dişi kuşlar tarafından üretilen yiyecek olarak yenen nesneler."
  },
  {
    "id": 1815,
    "category": "vocab",
    "en": "Bag",
    "tr": "Çanta / Torba",
    "hintEn": "A soft container made out of paper or cloth.",
    "hintTr": "Kağıt veya kumaştan yapılmış yumuşak kap."
  },
  {
    "id": 1816,
    "category": "vocab",
    "en": "Bags",
    "tr": "Çantalar / Torbalar",
    "hintEn": "Soft containers made out of paper or cloth.",
    "hintTr": "Kağıt veya kumaştan yapılmış yumuşak kaplar."
  },
  {
    "id": 1817,
    "category": "vocab",
    "en": "Sugar",
    "tr": "Şeker",
    "hintEn": "A sweet, white or brown powder used to make food sweet.",
    "hintTr": "Yiyecekleri tatlandırmak için kullanılan tatlı toz."
  },
  {
    "id": 1818,
    "category": "vocab",
    "en": "Hardly",
    "tr": "Neredeyse hiç / Zar zor",
    "hintEn": "Almost not, or only a very small amount.",
    "hintTr": "Neredeyse hiç veya sadece çok küçük bir miktar."
  },
  {
    "id": 1819,
    "category": "vocab",
    "en": "Almost",
    "tr": "Neredeyse / Hemen hemen",
    "hintEn": "Nearly, but not completely.",
    "hintTr": "Neredeyse, ama tamamen değil."
  },
  {
    "id": 1820,
    "category": "vocab",
    "en": "Only",
    "tr": "Sadece / Yalnızca",
    "hintEn": "Nothing or no one else.",
    "hintTr": "Başka hiçbir şey veya hiç kimse."
  },
  {
    "id": 1821,
    "category": "vocab",
    "en": "Mistake",
    "tr": "Hata / Yanlış",
    "hintEn": "An action or decision that is wrong.",
    "hintTr": "Yanlış olan bir eylem veya karar."
  },
  {
    "id": 1822,
    "category": "vocab",
    "en": "Mistakes",
    "tr": "Hatalar / Yanlışlar",
    "hintEn": "Actions or decisions that are wrong.",
    "hintTr": "Yanlış olan eylemler veya kararlar."
  },
  {
    "id": 1823,
    "category": "vocab",
    "en": "Hard disc",
    "tr": "Sabit disk",
    "hintEn": "A part of a computer that stores information.",
    "hintTr": "Bilgisayarın bilgi depolayan kısmı."
  },
  {
    "id": 1824,
    "category": "vocab",
    "en": "Hard discs",
    "tr": "Sabit diskler",
    "hintEn": "Parts of computers that store information.",
    "hintTr": "Bilgisayarların bilgi depolayan kısımları."
  },
  {
    "id": 1825,
    "category": "vocab",
    "en": "Decide",
    "tr": "Karar vermek",
    "hintEn": "To choose something after thinking about it.",
    "hintTr": "Düşündükten sonra bir şeyi seçmek."
  },
  {
    "id": 1826,
    "category": "vocab",
    "en": "Quantifier",
    "tr": "Miktar belirteci",
    "hintEn": "A word or phrase that tells how much or how many.",
    "hintTr": "Ne kadar veya kaç tane olduğunu söyleyen kelime."
  },
  {
    "id": 1827,
    "category": "vocab",
    "en": "Quantifiers",
    "tr": "Miktar belirteçleri",
    "hintEn": "Words or phrases that tell how much or how many.",
    "hintTr": "Ne kadar veya kaç tane olduğunu söyleyen kelimeler."
  },
  {
    "id": 1828,
    "category": "vocab",
    "en": "Marathon",
    "tr": "Maraton",
    "hintEn": "A very long running race.",
    "hintTr": "Çok uzun bir koşu yarışı."
  },
  {
    "id": 1829,
    "category": "vocab",
    "en": "Marathons",
    "tr": "Maratonlar",
    "hintEn": "Very long running races.",
    "hintTr": "Çok uzun koşu yarışları."
  },
  {
    "id": 1830,
    "category": "vocab",
    "en": "Installation",
    "tr": "Kurulum / Tesisat",
    "hintEn": "The act of putting something into place so you can use it.",
    "hintTr": "Bir şeyi kullanabilmen için yerine yerleştirme eylemi."
  },
  {
    "id": 1831,
    "category": "vocab",
    "en": "Installations",
    "tr": "Kurulumlar / Tesisatlar",
    "hintEn": "Systems or things put in a place for use.",
    "hintTr": "Kullanım için bir yere yerleştirilen sistemler veya şeyler."
  },
  {
    "id": 1832,
    "category": "vocab",
    "en": "Pretty",
    "tr": "Hoş / Oldukça",
    "hintEn": "Nice to look at, or quite (much).",
    "hintTr": "Bakması hoş veya oldukça (fazla)."
  },
  {
    "id": 1833,
    "category": "vocab",
    "en": "Strong",
    "tr": "Güçlü / Kuvvetli",
    "hintEn": "Having a lot of physical power.",
    "hintTr": "Fiziksel olarak çok fazla güce sahip olan."
  },
  {
    "id": 1834,
    "category": "vocab",
    "en": "Treat",
    "tr": "İkram / Davranmak",
    "hintEn": "Something special that you give someone, or how you act.",
    "hintTr": "Birine verdiğin özel bir şey veya ona karşı davranış şeklin."
  },
  {
    "id": 1835,
    "category": "vocab",
    "en": "Treats",
    "tr": "İkramlar",
    "hintEn": "Special things that you give to someone.",
    "hintTr": "Birine verdiğin özel şeyler."
  },
  {
    "id": 1836,
    "category": "vocab",
    "en": "Choice",
    "tr": "Seçenek / Seçim",
    "hintEn": "An act of choosing between two or more possibilities.",
    "hintTr": "İki veya daha fazla olasılık arasından seçim yapma eylemi."
  },
  {
    "id": 1837,
    "category": "vocab",
    "en": "Choices",
    "tr": "Seçenekler / Seçimler",
    "hintEn": "Acts of choosing between possibilities.",
    "hintTr": "Olasılıklar arasından seçim yapma eylemleri."
  },
  {
    "id": 1838,
    "category": "vocab",
    "en": "Opposite",
    "tr": "Zıt / Karşısında",
    "hintEn": "Completely different, or on the other side.",
    "hintTr": "Tamamen farklı veya diğer tarafta olan."
  },
  {
    "id": 1839,
    "category": "vocab",
    "en": "In front of",
    "tr": "Önünde",
    "hintEn": "Further forward than someone or something.",
    "hintTr": "Birinden veya bir şeyden daha ileride/önde."
  },
  {
    "id": 1840,
    "category": "vocab",
    "en": "Next to",
    "tr": "Bitişiğinde / Yanında",
    "hintEn": "Beside someone or something.",
    "hintTr": "Birinin veya bir şeyin yanı."
  },
  {
    "id": 1841,
    "category": "vocab",
    "en": "On",
    "tr": "Üzerinde",
    "hintEn": "Touching a surface.",
    "hintTr": "Bir yüzeye temas eden/üzerinde."
  },
  {
    "id": 1842,
    "category": "vocab",
    "en": "Beside",
    "tr": "Yanında",
    "hintEn": "Next to or very close to something.",
    "hintTr": "Bir şeyin bitişiğinde veya çok yakınında."
  },
  {
    "id": 1843,
    "category": "vocab",
    "en": "Up",
    "tr": "Yukarı",
    "hintEn": "Toward a higher position.",
    "hintTr": "Daha yüksek bir konuma doğru."
  },
  {
    "id": 1844,
    "category": "vocab",
    "en": "From ... to",
    "tr": "...'den ...'e",
    "hintEn": "Used to show the start and end of something.",
    "hintTr": "Bir şeyin başlangıcını ve sonunu göstermek için kullanılır."
  },
  {
    "id": 1845,
    "category": "vocab",
    "en": "Forward",
    "tr": "İleriye",
    "hintEn": "Toward the direction that is in front of you.",
    "hintTr": "Önündeki yöne doğru."
  },
  {
    "id": 1846,
    "category": "vocab",
    "en": "Backward",
    "tr": "Geriye",
    "hintEn": "Toward the direction that is behind you.",
    "hintTr": "Arkandaki yöne doğru."
  },
  {
    "id": 1847,
    "category": "vocab",
    "en": "Down",
    "tr": "Aşağı",
    "hintEn": "Toward a lower position.",
    "hintTr": "Daha düşük bir konuma doğru."
  },
  {
    "id": 1848,
    "category": "vocab",
    "en": "Imperative",
    "tr": "Emir / Zorunluluk",
    "hintEn": "Extremely important or urgent, or a command.",
    "hintTr": "Son derece önemli veya acil, ya da bir emir."
  },
  {
    "id": 1849,
    "category": "vocab",
    "en": "Imperatives",
    "tr": "Emirler / Zorunluluklar",
    "hintEn": "Commands or extremely important things.",
    "hintTr": "Emirler veya son derece önemli olan şeyler."
  },
  {
    "id": 1850,
    "category": "vocab",
    "en": "Instruction",
    "tr": "Talimat / Yönerge",
    "hintEn": "Information about how to do or use something.",
    "hintTr": "Bir şeyin nasıl yapılacağı veya kullanılacağı hakkında bilgi."
  },
  {
    "id": 1851,
    "category": "vocab",
    "en": "Instructions",
    "tr": "Talimatlar / Yönergeler",
    "hintEn": "Detailed information about how to do or use something.",
    "hintTr": "Bir şeyin nasıl kullanılacağı hakkında detaylı bilgiler."
  },
  {
    "id": 1852,
    "category": "vocab",
    "en": "Quite",
    "tr": "Oldukça / Epey",
    "hintEn": "A little or a lot but not completely.",
    "hintTr": "Biraz veya çok ama tamamen değil."
  },
  {
    "id": 1853,
    "category": "vocab",
    "en": "Polite",
    "tr": "Kibar / Nazik",
    "hintEn": "Behaving in a way that is socially correct and shows respect.",
    "hintTr": "Sosyal olarak doğru olan ve saygı gösteren bir şekilde davranmak."
  },
  {
    "id": 1854,
    "category": "vocab",
    "en": "Knee",
    "tr": "Diz",
    "hintEn": "The middle joint of the leg.",
    "hintTr": "Bacağın orta eklemi."
  },
  {
    "id": 1855,
    "category": "vocab",
    "en": "Knees",
    "tr": "Dizler",
    "hintEn": "The middle joints of the legs.",
    "hintTr": "Bacakların orta eklemleri."
  },
  {
    "id": 1856,
    "category": "vocab",
    "en": "Arm",
    "tr": "Kol",
    "hintEn": "The long part of the body between the shoulder and the hand.",
    "hintTr": "Vücudun omuz ve el arasındaki uzun kısmı."
  },
  {
    "id": 1857,
    "category": "vocab",
    "en": "Arms",
    "tr": "Kollar",
    "hintEn": "The long parts of the body between the shoulders and the hands.",
    "hintTr": "Vücudun omuzlar ve eller arasındaki uzun kısımları."
  },
  {
    "id": 1858,
    "category": "vocab",
    "en": "Repeat",
    "tr": "Tekrar etmek",
    "hintEn": "To say or do something again.",
    "hintTr": "Bir şeyi tekrar söylemek veya yapmak."
  },
  {
    "id": 1859,
    "category": "vocab",
    "en": "Above",
    "tr": "Üzerinde / Yukarısında",
    "hintEn": "In a higher position than something else.",
    "hintTr": "Başka bir şeyden daha yüksek bir konumda."
  },
  {
    "id": 1860,
    "category": "vocab",
    "en": "Variety",
    "tr": "Çeşitlilik / Çeşit",
    "hintEn": "A lot of different things of the same type.",
    "hintTr": "Aynı türden birçok farklı şey."
  },
  {
    "id": 1861,
    "category": "vocab",
    "en": "Varieties",
    "tr": "Çeşitler",
    "hintEn": "Different types of things.",
    "hintTr": "Şeylerin farklı türleri."
  },
  {
    "id": 1862,
    "category": "vocab",
    "en": "Prompt decision",
    "tr": "Hızlı karar",
    "hintEn": "A choice made quickly without delay.",
    "hintTr": "Gecikmeden hızlıca yapılan seçim."
  },
  {
    "id": 1863,
    "category": "vocab",
    "en": "Prompt decisions",
    "tr": "Hızlı kararlar",
    "hintEn": "Choices made quickly without delay.",
    "hintTr": "Gecikmeden hızlıca yapılan seçimler."
  },
  {
    "id": 1864,
    "category": "vocab",
    "en": "Determined",
    "tr": "Kararlı / Azimli",
    "hintEn": "Wanting to do something very much.",
    "hintTr": "Bir şeyi yapmayı çok istemek ve pes etmemek."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = VOCAB_DATA;
}
