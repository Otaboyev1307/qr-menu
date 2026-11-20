// Menyu ma'lumotlari. Google Sheets ulangan bo'lsa (sheet), menyu o'sha jadvaldan olinadi; bu yerdagi taomlar zaxira.
window.MENU = {
  "cafe": {
    "name": "Choyxona Navro'z",
    "tagline": "Mazali taomlar, iliq muhit",
    "phone": "",
    "wifi": ""
  },
  "categories": [
    {
      "name": "Taomlar",
      "icon": "🍲",
      "items": [
        {
          "name": "Osh (to'y oshi)",
          "desc": "Devzira guruch, qo'y go'shti, sariq sabzi, no'xat va bedana tuxumi",
          "price": 45000,
          "emoji": "🍛",
          "weight": "400 g",
          "popular": true,
          "available": true,
          "image": ""
        },
        {
          "name": "Lag'mon",
          "desc": "Qo'lda cho'zilgan xamir, mol go'shti va sabzavotli sous",
          "price": 38000,
          "emoji": "🍜",
          "weight": "450 g",
          "popular": true,
          "available": true,
          "image": ""
        },
        {
          "name": "Manti",
          "desc": "Qo'y go'shti va piyozli bug'da pishgan manti, qatiq bilan",
          "price": 35000,
          "emoji": "🥟",
          "weight": "5 dona",
          "popular": false,
          "available": true,
          "image": ""
        },
        {
          "name": "Shashlik (qo'y)",
          "desc": "Ko'mirda pishirilgan yumshoq qo'y go'shti, piyoz va ko'kat bilan",
          "price": 28000,
          "emoji": "🍢",
          "weight": "1 six",
          "popular": true,
          "available": true,
          "image": ""
        },
        {
          "name": "Qozon kabob",
          "desc": "Qozonda qovurilgan go'sht va kartoshka, ziravorlar bilan",
          "price": 55000,
          "emoji": "🥘",
          "weight": "500 g",
          "popular": false,
          "available": false,
          "image": ""
        },
        {
          "name": "Shurva",
          "desc": "Qo'y go'shtidan tayyorlangan quyuq sho'rva, sabzavotlar bilan",
          "price": 30000,
          "emoji": "🍲",
          "weight": "400 ml",
          "popular": false,
          "available": true,
          "image": ""
        },
        {
          "name": "Chuchvara",
          "desc": "Mol go'shtili kichik chuchvara, qaymoq bilan",
          "price": 32000,
          "emoji": "🥟",
          "weight": "350 g",
          "popular": false,
          "available": true,
          "image": ""
        },
        {
          "name": "Burger klassik",
          "desc": "Mol go'shti kotleti, cheddar, pomidor, bodring, maxsus sous",
          "price": 42000,
          "emoji": "🍔",
          "weight": "320 g",
          "popular": false,
          "available": true,
          "image": ""
        },
        {
          "name": "Pitsa Margarita",
          "desc": "Pomidor sousi, motsarella, rayhon",
          "price": 65000,
          "emoji": "🍕",
          "weight": "30 sm",
          "popular": false,
          "available": true,
          "image": ""
        }
      ]
    },
    {
      "name": "Salatlar",
      "icon": "🥗",
      "items": [
        {
          "name": "Achchiq-chuchuk",
          "desc": "Pomidor, piyoz, achchiq qalampir va rayhon",
          "price": 15000,
          "emoji": "🍅",
          "weight": "250 g",
          "popular": true,
          "available": true,
          "image": ""
        },
        {
          "name": "Sezar tovuq bilan",
          "desc": "Aysberg, grilda tovuq, parmezan, kruton, sezar sousi",
          "price": 38000,
          "emoji": "🥗",
          "weight": "280 g",
          "popular": true,
          "available": true,
          "image": ""
        },
        {
          "name": "Grek salati",
          "desc": "Pomidor, bodring, bolgar qalampiri, zaytun, feta pishlog'i",
          "price": 34000,
          "emoji": "🫒",
          "weight": "270 g",
          "popular": false,
          "available": true,
          "image": ""
        },
        {
          "name": "Olivye",
          "desc": "Klassik retsept: kartoshka, tuxum, bodring, kolbasa, mayonez",
          "price": 25000,
          "emoji": "🥔",
          "weight": "250 g",
          "popular": false,
          "available": true,
          "image": ""
        },
        {
          "name": "Toshkent salati",
          "desc": "Mol go'shti, turp, tuxum va qovurilgan piyoz",
          "price": 30000,
          "emoji": "🥩",
          "weight": "260 g",
          "popular": false,
          "available": true,
          "image": ""
        }
      ]
    },
    {
      "name": "Ichimliklar",
      "icon": "🥤",
      "items": [
        {
          "name": "Ko'k choy (choynak)",
          "desc": "Klassik o'zbek ko'k choyi",
          "price": 8000,
          "emoji": "🍵",
          "weight": "800 ml",
          "popular": false,
          "available": true,
          "image": ""
        },
        {
          "name": "Qora choy limon bilan",
          "desc": "Limon va asal bilan",
          "price": 10000,
          "emoji": "🫖",
          "weight": "800 ml",
          "popular": false,
          "available": true,
          "image": ""
        },
        {
          "name": "Kapuchino",
          "desc": "Espresso va ko'pikli sut",
          "price": 22000,
          "emoji": "☕",
          "weight": "300 ml",
          "popular": true,
          "available": true,
          "image": ""
        },
        {
          "name": "Limonad (uy)",
          "desc": "Yangi limon, yalpiz va gazli suv",
          "price": 20000,
          "emoji": "🍋",
          "weight": "500 ml",
          "popular": true,
          "available": true,
          "image": ""
        },
        {
          "name": "Apelsin fresh",
          "desc": "Yangi siqilgan apelsin sharbati",
          "price": 28000,
          "emoji": "🍊",
          "weight": "300 ml",
          "popular": false,
          "available": true,
          "image": ""
        },
        {
          "name": "Moxito (alkogolsiz)",
          "desc": "Laym, yalpiz, shakar sharbati, soda",
          "price": 25000,
          "emoji": "🍹",
          "weight": "400 ml",
          "popular": false,
          "available": true,
          "image": ""
        },
        {
          "name": "Coca-Cola",
          "desc": "Shisha idishda",
          "price": 12000,
          "emoji": "🥤",
          "weight": "500 ml",
          "popular": false,
          "available": true,
          "image": ""
        },
        {
          "name": "Mineral suv",
          "desc": "Gazli / gazsiz",
          "price": 7000,
          "emoji": "💧",
          "weight": "500 ml",
          "popular": false,
          "available": true,
          "image": ""
        }
      ]
    },
    {
      "name": "Shirinliklar",
      "icon": "🍰",
      "items": [
        {
          "name": "Chizkeyk",
          "desc": "Nyu-York chizkeyki, rezavor sousi bilan",
          "price": 32000,
          "emoji": "🍰",
          "weight": "150 g",
          "popular": true,
          "available": true,
          "image": ""
        },
        {
          "name": "Shokoladli fondan",
          "desc": "Ichi oqib turuvchi shokolad keki, muzqaymoq bilan",
          "price": 35000,
          "emoji": "🍫",
          "weight": "180 g",
          "popular": false,
          "available": true,
          "image": ""
        },
        {
          "name": "Muzqaymoq",
          "desc": "3 shar: vanil, shokolad, qulupnay",
          "price": 20000,
          "emoji": "🍨",
          "weight": "3 shar",
          "popular": false,
          "available": true,
          "image": ""
        },
        {
          "name": "Paxlava",
          "desc": "Yong'oq va asalli qatlamli shirinlik",
          "price": 18000,
          "emoji": "🥮",
          "weight": "4 dona",
          "popular": false,
          "available": true,
          "image": ""
        }
      ]
    }
  ],
  "sheet": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTwBVLYbP4GT1oA5iPUTjwhKsf4gQhWs8wq8GRk7MpDOqbSWRI5KK7t3gXubW2U6O_CcnjST3tL8vTI/pub?gid=0&single=true&output=csv"
};
