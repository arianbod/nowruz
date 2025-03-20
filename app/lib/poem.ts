// /app/lib/poems.ts
interface Verse {
  fa: string;
  en?: string;
  ru?: string;
  tr?: string;
}

export interface Poem {
  id: number;
  title: {
    fa: string;
    en: string;
    ru: string;
    tr: string;
  };
  verses: Verse[];
  interpretation: {
    fa: string;
    en: string;
    ru: string;
    tr: string;
  };
  // اطمینان از اینکه این اشعار مرتبط با بهار و نوروز هستند
  tags: string[];
}

// اشعار حافظ مرتبط با بهار و نوروز
export const poems: Poem[] = [
  {
    id: 1,
    title: {
      fa: "مژده‌ی بهار",
      en: "Spring Tidings",
      ru: "Весенние вести",
      tr: "Bahar Müjdesi"
    },
    verses: [
      {
        fa: "مژده ای دل که مسیحا نفسی می‌آید",
        en: "Good news, O heart! A breath like the Messiah is coming",
        ru: "Радостная весть, о сердце! Дыхание, подобное Мессии, приближается",
        tr: "Müjde, ey gönül! Mesih'in nefesi gibi bir nefes geliyor"
      },
      {
        fa: "که ز انفاس خوشش بوی کسی می‌آید",
        en: "From whose pleasant breaths, the fragrance of someone is coming",
        ru: "От чьего приятного дыхания исходит аромат возлюбленной",
        tr: "Ki hoş nefesinden birinin kokusu geliyor"
      },
      {
        fa: "از صبا در چمن لاله سحر می‌شنوم",
        en: "From the morning breeze in the tulip garden, I hear at dawn",
        ru: "От утреннего ветерка в саду тюльпанов я слышу на рассвете",
        tr: "Sabah rüzgarından lale bahçesinde şafakta duyuyorum"
      },
      {
        fa: "که ز دلبستگی زلف تو خبری می‌آید",
        en: "News of the captivation of your tresses is coming",
        ru: "Весть о пленительности твоих локонов приближается",
        tr: "Ki senin saçının bağlılığından bir haber geliyor"
      }
    ],
    interpretation: {
      fa: "این فال به شما می‌گوید که بهار زندگی شما در راه است. امید و شادی به سوی شما می‌آید و تغییرات مثبتی در زندگی شما رخ خواهد داد. مانند نفس مسیحا که زندگی می‌بخشد، دوره جدیدی از شادکامی و سرزندگی برای شما آغاز می‌شود.",
      en: "This fortune tells you that the spring of your life is on its way. Hope and joy are coming to you, and positive changes will happen in your life. Like the breath of the Messiah that gives life, a new period of happiness and vitality begins for you.",
      ru: "Это предсказание говорит вам, что весна вашей жизни на пути. Надежда и радость приходят к вам, и в вашей жизни произойдут положительные изменения. Подобно дыханию Мессии, дающему жизнь, для вас начинается новый период счастья и жизненной силы.",
      tr: "Bu fal, hayatınızın baharının yolda olduğunu söylüyor. Umut ve neşe size doğru geliyor ve hayatınızda olumlu değişiklikler olacak. Hayat veren Mesih'in nefesi gibi, sizin için mutluluk ve canlılık dolu yeni bir dönem başlıyor."
    },
    tags: ["spring", "hope", "renewal", "nowruz"]
  },
  {
    id: 2,
    title: {
      fa: "بهار و نوروز",
      en: "Spring and Nowruz",
      ru: "Весна и Навруз",
      tr: "Bahar ve Nevruz"
    },
    verses: [
      {
        fa: "بهار و گل طرب‌انگیز گشت و توبه شکن",
        en: "Spring and flowers have become joy-arousing and vow-breaking",
        ru: "Весна и цветы стали радостными и нарушающими обеты",
        tr: "Bahar ve çiçekler neşe verici ve söz bozucu oldu"
      },
      {
        fa: "به شادی روی بتان می‌دهیم دل چو چمن",
        en: "In joy, we give our hearts like a garden to the face of idols",
        ru: "В радости мы отдаем наши сердца, как сад, лицу кумиров",
        tr: "Neşeyle putların yüzüne çimen gibi gönül veriyoruz"
      },
      {
        fa: "چو غنچه گرچه فروبستگی است کار جهان",
        en: "Although the world's work is closed like a bud",
        ru: "Хотя работа мира закрыта, как бутон",
        tr: "Tomurcuk gibi kapalı olsa da dünyanın işi"
      },
      {
        fa: "تو همچو باد بهاری گره‌گشا می‌باش",
        en: "Be a knot-opener like the spring breeze",
        ru: "Будь развязывающим узлы, как весенний ветерок",
        tr: "Sen bahar rüzgarı gibi düğüm çözen ol"
      }
    ],
    interpretation: {
      fa: "این فال شما را به گشایش و رهایی از دشواری‌ها دعوت می‌کند. مانند نسیم بهاری که گره‌ها را باز می‌کند، شما نیز باید راه حل مشکلات را پیدا کنید. زمان شادی و طراوت فرا رسیده و باید با گشاده‌رویی به استقبال تغییرات مثبت بروید.",
      en: "This fortune invites you to openness and liberation from difficulties. Like the spring breeze that unties knots, you should also find solutions to problems. The time for joy and freshness has arrived, and you should welcome positive changes with openness.",
      ru: "Это предсказание приглашает вас к открытости и освобождению от трудностей. Как весенний ветерок, развязывающий узлы, вы тоже должны найти решения проблем. Наступило время радости и свежести, и вы должны с открытостью встречать положительные изменения.",
      tr: "Bu fal sizi zorluklardan açıklığa ve özgürleşmeye davet ediyor. Düğümleri çözen bahar rüzgarı gibi, siz de sorunlara çözümler bulmalısınız. Neşe ve tazelik zamanı geldi ve olumlu değişimleri açık yüreklilikle karşılamalısınız."
    },
    tags: ["spring", "joy", "solution", "nowruz"]
  },
  {
    id: 3,
    title: {
      fa: "نوای تازه",
      en: "Fresh Melody",
      ru: "Свежая мелодия",
      tr: "Taze Ezgi"
    },
    verses: [
      {
        fa: "ز کوی یار می‌آید نسیم باد نوروزی",
        en: "From the beloved's lane comes the breeze of Nowruz wind",
        ru: "Из переулка возлюбленной приходит дуновение новрузского ветра",
        tr: "Sevgilinin mahallesinden geliyor nevruz rüzgarının esintisi"
      },
      {
        fa: "از این باد ار مدد خواهی چراغ دل برافروزی",
        en: "If you seek help from this wind, you'll light up the lamp of the heart",
        ru: "Если ты ищешь помощи от этого ветра, ты зажжешь лампу сердца",
        tr: "Bu rüzgardan yardım istersen gönül kandilini alevlendirirsin"
      },
      {
        fa: "چو گل گر خرده‌ای داری خدا را صرف عشرت کن",
        en: "If you have a bit like the flower, for God's sake spend it on pleasure",
        ru: "Если у тебя есть немного, как у цветка, ради Бога, потрать это на удовольствие",
        tr: "Çiçek gibi biraz varsa, Allah için zevke harca"
      },
      {
        fa: "که قارون را غلط‌ها داد سودای زراندوزی",
        en: "For the greed for gold led Qarun to errors",
        ru: "Ибо жадность к золоту привела Каруна к ошибкам",
        tr: "Çünkü altın hırsı Karun'a hatalar yaptırdı"
      }
    ],
    interpretation: {
      fa: "این فال به شما می‌گوید که نسیم تازه‌ای وارد زندگی شما می‌شود و فرصت تازه‌ای برای شادی و روشنی دل فراهم می‌کند. از لحظات زندگی لذت ببرید و به جای جمع‌آوری مال و ثروت، به دنبال شادی و معنا باشید. درس حافظ این است که زندگی کوتاه است و باید از آن لذت برد.",
      en: "This fortune tells you that a fresh breeze is entering your life, providing a new opportunity for joy and heart enlightenment. Enjoy the moments of life and instead of accumulating wealth, seek happiness and meaning. Hafez's lesson is that life is short and should be enjoyed.",
      ru: "Это предсказание говорит вам, что свежий ветерок входит в вашу жизнь, предоставляя новую возможность для радости и просветления сердца. Наслаждайтесь моментами жизни и вместо накопления богатства ищите счастье и смысл. Урок Хафиза в том, что жизнь коротка, и ею нужно наслаждаться.",
      tr: "Bu fal size taze bir esintinin hayatınıza girdiğini, neşe ve gönül aydınlığı için yeni bir fırsat sunduğunu söylüyor. Hayatın anlarının tadını çıkarın ve servet biriktirmek yerine mutluluk ve anlam arayın. Hafız'ın dersi, hayatın kısa olduğu ve ondan zevk alınması gerektiğidir."
    },
    tags: ["nowruz", "joy", "presence", "moment"]
  },
  {
    id: 4,
    title: {
      fa: "باد بهاری",
      en: "Spring Wind",
      ru: "Весенний ветер",
      tr: "Bahar Rüzgarı"
    },
    verses: [
      {
        fa: "صبا به تهنیت پیر می‌فروش آمد",
        en: "The morning breeze came to congratulate the old wine-seller",
        ru: "Утренний ветерок пришел поздравить старого продавца вина",
        tr: "Sabah rüzgarı yaşlı şarap satıcısını kutlamaya geldi"
      },
      {
        fa: "که موسم طرب و عیش و ناز و نوش آمد",
        en: "That the season of joy, pleasure, delight and drinking has come",
        ru: "Что пришел сезон радости, удовольствия, наслаждения и питья",
        tr: "Ki neşe, zevk, naz ve içki mevsimi geldi"
      },
      {
        fa: "هوا مسیح‌نفس گشت و باد نافه‌گشای",
        en: "The air has become Messiah-breathed and the wind a musk-pod opener",
        ru: "Воздух стал с дыханием Мессии, а ветер - раскрывающим мускусный мешочек",
        tr: "Hava Mesih nefesli oldu ve rüzgar misk kesesi açıcısı"
      },
      {
        fa: "درخت سبز شد و مرغ در خروش آمد",
        en: "The tree turned green and the bird came into song",
        ru: "Дерево стало зеленым, и птица запела",
        tr: "Ağaç yeşillendi ve kuş ötmeye başladı"
      }
    ],
    interpretation: {
      fa: "این فال نشان‌دهنده فرا رسیدن زمان شادی و طراوت در زندگی شماست. همانطور که بهار طبیعت را زنده می‌کند، بهاری تازه در زندگی شما آغاز می‌شود. زمان آن است که از سرزندگی و نشاط بهره‌مند شوید و با روحیه‌ای تازه به استقبال آینده بروید.",
      en: "This fortune indicates the arrival of a time of joy and freshness in your life. Just as spring revives nature, a new spring begins in your life. It is time to benefit from vitality and exuberance and to welcome the future with a fresh spirit.",
      ru: "Это предсказание указывает на наступление времени радости и свежести в вашей жизни. Как весна оживляет природу, так и новая весна начинается в вашей жизни. Пришло время воспользоваться жизненной силой и энергией и встретить будущее со свежим духом.",
      tr: "Bu fal, hayatınızda bir neşe ve tazelik zamanının gelişini gösteriyor. Bahar doğayı canlandırdığı gibi, hayatınızda da yeni bir bahar başlıyor. Canlılık ve coşkudan faydalanma ve geleceği taze bir ruhla karşılama zamanıdır."
    },
    tags: ["spring", "renewal", "joy", "freshness"]
  },
  {
    id: 5,
    title: {
      fa: "بشارت بهار",
      en: "Spring Announcement",
      ru: "Весеннее объявление",
      tr: "Bahar Müjdesi"
    },
    verses: [
      {
        fa: "آمد بهار خرم با رنگ و بوی طیب",
        en: "Joyful spring has come with pleasant colors and scents",
        ru: "Радостная весна пришла с приятными красками и ароматами",
        tr: "Neşeli bahar hoş renkler ve kokularla geldi"
      },
      {
        fa: "با صد هزار نزهت و آرایش عجیب",
        en: "With a hundred thousand pleasures and strange adornments",
        ru: "С сотней тысяч удовольствий и удивительных украшений",
        tr: "Yüz bin zevk ve acayip süslemelerle"
      },
      {
        fa: "وقت است کز میانه مستان ز می نصیب",
        en: "It is time to benefit from wine among the intoxicated ones",
        ru: "Пришло время наслаждаться вином среди опьяненных",
        tr: "Sarhoşlar arasında şaraptan nasiplenme zamanıdır"
      },
      {
        fa: "درویش بی نوا برسد با خدای خویش",
        en: "The poor dervish will reach his God",
        ru: "Бедный дервиш достигнет своего Бога",
        tr: "Yoksul derviş kendi Tanrısına kavuşacak"
      }
    ],
    interpretation: {
      fa: "این فال مژده‌ی زیبایی و شادی را به شما می‌دهد. همانطور که بهار با رنگ‌ها و عطرهای خوش می‌آید، زندگی شما نیز پر از زیبایی و شادمانی خواهد شد. زمان آن است که از لحظات خوش زندگی بهره‌مند شوید و به معنویت و ارتباط با درون خود توجه بیشتری کنید.",
      en: "This fortune gives you the good news of beauty and joy. Just as spring comes with nice colors and fragrances, your life will also be full of beauty and joy. It is time to benefit from the good moments of life and pay more attention to spirituality and connection with your inner self.",
      ru: "Это предсказание дает вам добрую весть о красоте и радости. Как весна приходит с красивыми красками и ароматами, так и ваша жизнь будет полна красоты и радости. Пришло время наслаждаться хорошими моментами жизни и уделять больше внимания духовности и связи с вашим внутренним я.",
      tr: "Bu fal size güzellik ve neşe müjdesi veriyor. Bahar güzel renkler ve kokularla geldiği gibi, hayatınız da güzellik ve neşeyle dolacak. Hayatın güzel anlarından faydalanma ve maneviyata ve iç benliğinizle bağlantıya daha fazla dikkat etme zamanıdır."
    },
    tags: ["spring", "joy", "beauty", "spirituality"]
  },
  {
    id: 6,
    title: {
      fa: "شکوفایی",
      en: "Blossoming",
      ru: "Цветение",
      tr: "Çiçeklenme"
    },
    verses: [
      {
        fa: "درخت دوستی بنشان که کام دل به بار آرد",
        en: "Plant the tree of friendship to yield the heart's desire",
        ru: "Посади дерево дружбы, чтобы оно принесло желание сердца",
        tr: "Dostluk ağacını dik ki gönül arzusunu versin"
      },
      {
        fa: "نهال دشمنی برکن که رنج بی‌شمار آرد",
        en: "Uproot the sapling of enmity for it yields countless hardships",
        ru: "Вырви саженец вражды, ибо он приносит бесчисленные трудности",
        tr: "Düşmanlık fidanını sök ki sayısız sıkıntı getirir"
      },
      {
        fa: "طمع از هستی انسان چو خار ره نشستن گیر",
        en: "Greed for human existence is like a thorn sitting on the path",
        ru: "Жадность к человеческому существованию подобна шипу, сидящему на пути",
        tr: "İnsan varlığına tamah, yolda oturan diken gibidir"
      },
      {
        fa: "که تا ماند تنت در ره چو خار راه را بار آرد",
        en: "As long as your body remains on the path like a thorn, it burdens the path",
        ru: "Пока твое тело остается на пути, как шип, оно обременяет путь",
        tr: "Bedenin yolda diken gibi kaldıkça yola yük olur"
      }
    ],
    interpretation: {
      fa: "این فال به شما می‌گوید که با کاشتن بذر دوستی و محبت در زندگی، به کام دل خواهید رسید. دشمنی و کینه را کنار بگذارید، زیرا جز رنج چیزی به همراه ندارد. طمع و حرص مانند خاری است که راه شادی و آرامش را می‌بندد. با گذشت و بخشندگی، مسیر زندگی خود را هموار کنید.",
      en: "This fortune tells you that by planting the seed of friendship and love in life, you will achieve heart's desire. Put aside enmity and grudge, as they bring nothing but suffering. Greed and avarice are like thorns that block the path to joy and peace. With forgiveness and generosity, smooth your life path.",
      ru: "Это предсказание говорит вам, что, посеяв семя дружбы и любви в жизни, вы достигнете желания сердца. Отложите вражду и обиду, так как они приносят только страдания. Жадность и алчность подобны шипам, которые блокируют путь к радости и миру. С прощением и щедростью сделайте свой жизненный путь гладким.",
      tr: "Bu fal size hayatta dostluk ve sevgi tohumu ekerek gönül arzusuna ulaşacağınızı söylüyor. Düşmanlık ve kini bir kenara bırakın, çünkü acıdan başka bir şey getirmezler. Açgözlülük ve hırs, neşe ve huzur yolunu kapatan dikenler gibidir. Affetme ve cömertlikle hayat yolunuzu düzleştirin."
    },
    tags: ["renewal", "friendship", "growth", "spring"]
  },
  {
    id: 7,
    title: {
      fa: "آغاز تازه",
      en: "New Beginning",
      ru: "Новое начало",
      tr: "Yeni Başlangıç"
    },
    verses: [
      {
        fa: "سال نو و ماه نو و روز نو و عید نو",
        en: "New year and new month and new day and new festival",
        ru: "Новый год и новый месяц и новый день и новый праздник",
        tr: "Yeni yıl ve yeni ay ve yeni gün ve yeni bayram"
      },
      {
        fa: "بخت نو و تخت نو و مُلک نو و شاه نو",
        en: "New fortune and new throne and new kingdom and new king",
        ru: "Новая судьба и новый трон и новое царство и новый король",
        tr: "Yeni talih ve yeni taht ve yeni ülke ve yeni şah"
      },
      {
        fa: "باده کهن بیار تا ملک و مال نو کنیم",
        en: "Bring old wine to make new possessions and wealth",
        ru: "Принеси старое вино, чтобы создать новые владения и богатство",
        tr: "Eski şarap getir ki yeni mülk ve mal yapalım"
      },
      {
        fa: "خرقهٔ کهنه بسوز آتش در مرحله زن",
        en: "Burn the old cloak, set fire to the stage",
        ru: "Сожги старый плащ, подожги сцену",
        tr: "Eski hırkayı yak, merhaleye ateş ver"
      }
    ],
    interpretation: {
      fa: "این فال نشان‌دهنده آغازی تازه در زندگی شماست. همه چیز در حال تجدید شدن است و شما فرصت دارید که با تکیه بر تجربیات گذشته، آینده‌ای درخشان بسازید. زمان آن است که از گذشته درس بگیرید و برای آینده برنامه‌ریزی کنید. به استقبال تغییرات مثبت بروید و از فرصت‌های جدید استفاده کنید.",
      en: "This fortune indicates a fresh start in your life. Everything is being renewed, and you have the opportunity to build a bright future by relying on past experiences. It is time to learn from the past and plan for the future. Welcome positive changes and use new opportunities.",
      ru: "Это предсказание указывает на новое начало в вашей жизни. Все обновляется, и у вас есть возможность построить яркое будущее, опираясь на прошлый опыт. Пришло время учиться у прошлого и планировать будущее. Приветствуйте положительные изменения и используйте новые возможности.",
      tr: "Bu fal, hayatınızda taze bir başlangıcı işaret ediyor. Her şey yenileniyor ve geçmiş deneyimlere dayanarak parlak bir gelecek inşa etme fırsatınız var. Geçmişten ders alma ve gelecek için planlama zamanı. Olumlu değişimleri karşılayın ve yeni fırsatları kullanın."
    },
    tags: ["nowruz", "new beginning", "renewal", "opportunity"]
  }
];

// این تابع یک فال تصادفی از لیست اشعار انتخاب می‌کند
export const getRandomFortune = (): Poem => {
  const randomIndex = Math.floor(Math.random() * poems.length);
  return poems[randomIndex];
};

// /app/locales/en/translation.json
{
  "app": {
    "title": "Nowruz Fortune",
    "subtitle": "Experience the wisdom of Hafez on Persian New Year",
    "language": "Language"
  },
  "home": {
    "welcome": "Welcome to Nowruz Fortune Telling",
    "intro": "Nowruz (Persian New Year) is an ancient celebration marking the arrival of spring. One of its beautiful traditions is seeking guidance through the poetry of Hafez, the renowned 14th-century Persian poet.",
    "instructions": "Click the button below to receive your Nowruz fortune from Hafez",
    "button": "Get Your Fortune",
    "about": "About Nowruz",
    "hafez": "About Hafez"
  },
  "fortune": {
    "title": "Your Nowruz Fortune",
    "loading": "Consulting the wisdom of Hafez...",
    "interpretation": "Interpretation",
    "new": "Get Another Fortune",
    "share": "Share Your Fortune",
    "languages": "Read in:"
  },
  "about": {
    "title": "About Nowruz",
    "intro": "Nowruz, the Persian New Year celebration, has been observed for over 3,000 years and marks the first day of spring.",
    "date": "It occurs precisely at the moment of the vernal equinox, which marks the beginning of spring in the Northern Hemisphere (usually on March 20 or 21).",
    "significance": "Nowruz is a time of renewal, hope, and joy. It symbolizes the triumph of light over darkness and good over evil.",
    "celebration": "Celebrations include:",
    "haftSin": "Haft-Sin (a table with seven symbolic items starting with the letter 'S' in Persian)",
    "visits": "Family visits and community gatherings",
    "food": "Special foods like Sabzi Polo Mahi (herbed rice with fish)",
    "clean": "Spring cleaning before the new year",
    "nowruzToday": "Today, Nowruz is celebrated by more than 300 million people worldwide, particularly in Iran, Afghanistan, the Kurdish regions, Central Asia, and the Caucasus.",
    "unesco": "In 2009, Nowruz was officially registered on the UNESCO List of the Intangible Cultural Heritage of Humanity."
  },
  "hafez": {
    "title": "About Hafez",
    "intro": "Khwāja Shams-ud-Dīn Muḥammad Ḥāfeẓ-e Shīrāzī, known by his pen name Hafez, was a Persian poet who lived in the 14th century (1315-1390).",
    "poetry": "His collected works (Divan) contain some of the most beloved poems in Persian literature. His ghazals (lyric poems) are marked by their beauty, depth, and spiritual insight.",
    "influence": "Hafez's influence extends far beyond Persian-speaking regions. His work has been translated into many languages and has inspired writers, poets, and thinkers worldwide.",
    "fortune": "One of the most enduring traditions associated with Hafez is bibliomancy or fāl-e Hāfez (Hafez fortune-telling). People consult his Divan for guidance and insight, especially during significant occasions like Nowruz.",
    "howTo": "To get a Hafez fortune, one traditionally focuses on a question or concern, opens the Divan at random, and interprets the poem found there as guidance."
  }
}
