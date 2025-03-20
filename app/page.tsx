// /app/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './layout';

export default function Home() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [showInfo, setShowInfo] = useState(false);
  const [showHaftSin, setShowHaftSin] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isRtl = language === 'fa';

  // Preload image and initialize animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleGetFortune = () => {
    router.push('/fortune');
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" as const }
  };

  // Haft Sin items with detailed multilingual explanations
  const getHaftSinDetails = () => {
    switch(language) {
      case 'fa':
        return [
          {
            name: 'سیب',
            symbol: '🍎',
            meaning: 'نماد زیبایی و سلامتی',
            description: 'سیب نشان‌دهنده زیبایی و سلامتی است. در فرهنگ ایرانی، سیب میوه‌ای است که دارای خواص درمانی متعددی بوده و برای سلامتی مفید است. همچنین به دلیل شکل کروی و رنگ قرمز زیبای آن، نماد کمال و زیبایی نیز محسوب می‌شود. قرار دادن سیب در سفره هفت‌سین برای جذب سلامتی و زیبایی در سال جدید است.',
            color: 'from-red-400 to-red-500',
            bgColor: 'bg-red-50',
            borderColor: 'border-red-200',
          },
          {
            name: 'سبزه',
            symbol: '🌱',
            meaning: 'نماد تجدید حیات و باروری',
            description: 'سبزه که از رویاندن گندم، عدس یا سایر دانه‌ها تهیه می‌شود، نماد تجدید حیات، رشد و باروری است. با آغاز بهار و شروع رویش گیاهان، سبزه نشان‌دهنده شروع دوباره زندگی و جوانه‌زدن امید است. پس از پایان جشن‌های نوروز، معمولاً سبزه را به آب جاری می‌سپارند تا نشانه‌ای از تداوم جریان زندگی باشد.',
            color: 'from-green-400 to-green-500',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
          },
          {
            name: 'سمنو',
            symbol: '🍯',
            meaning: 'نماد قدرت و برکت',
            description: 'سمنو شیرینی مقدسی است که از جوانه‌های گندم تهیه می‌شود و نماد قدرت، برکت و فراوانی است. تهیه سمنو مراسمی خاص دارد که معمولاً زنان در شب‌های پایانی سال دور هم جمع می‌شوند و با خواندن اشعار و دعاهای مخصوص، آن را تهیه می‌کنند. سمنو بیانگر برکت غذایی و امید به فراوانی نعمت در سال جدید است.',
            color: 'from-amber-400 to-amber-500',
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-200',
          },
          {
            name: 'سنجد',
            symbol: '🌰',
            meaning: 'نماد عشق و محبت',
            description: 'سنجد، میوه درخت سنجد، نماد عشق و محبت است. بر اساس باورهای کهن، سنجد با رایحه مطبوع خود، دل‌ها را شیفته و عاشق می‌کند. حضور سنجد در سفره هفت‌سین، آرزوی عشق و مهر در زندگی و دلبستگی عمیق به خانواده و اجتماع را نشان می‌دهد. علاوه بر این، این میوه به دلیل خواص دارویی‌اش در طب سنتی ارزشمند است.',
            color: 'from-orange-400 to-orange-500',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200',
          },
          {
            name: 'سیر',
            symbol: '🧄',
            meaning: 'نماد محافظت و سلامتی',
            description: 'سیر به عنوان نماد محافظت، سلامتی و دفع ارواح خبیثه در سفره هفت‌سین قرار می‌گیرد. از گذشته‌های دور، سیر به خاطر خواص دارویی و ضدعفونی‌کننده‌اش شناخته شده بود. ایرانیان باستان بر این باور بودند که سیر قدرت دفع انرژی‌های منفی و محافظت از خانواده را دارد. امروزه نیز، سیر به عنوان تقویت‌کننده سیستم ایمنی و سلامت قلب شناخته می‌شود.',
            color: 'from-purple-400 to-purple-500',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200',
          },
          {
            name: 'سرکه',
            symbol: '🧪',
            meaning: 'نماد صبر و شکیبایی',
            description: 'سرکه که از تخمیر مواد قندی حاصل می‌شود، نمادی از صبر، شکیبایی و عمر طولانی است. فرآیند تولید سرکه زمان‌بر است و این یادآور اهمیت صبر در زندگی است. همچنین، سرکه به دلیل خاصیت محافظتی‌اش از فساد غذا، نماد پایداری و ماندگاری نیز هست. وجود سرکه در سفره هفت‌سین یادآور ضرورت صبر و بردباری در مواجهه با سختی‌های زندگی است.',
            color: 'from-yellow-400 to-yellow-500',
            bgColor: 'bg-yellow-50',
            borderColor: 'border-yellow-200',
          },
          {
            name: 'سماق',
            symbol: '🌶️',
            meaning: 'نماد طلوع خورشید و تازگی',
            description: 'سماق با رنگ قرمز درخشانش، نماد طلوع خورشید، نشاط و تازگی است. این ادویه خوش‌طعم که از میوه خشک‌شده گیاه سماق به دست می‌آید، در غذاهای ایرانی استفاده می‌شود و طعمی ترش‌مزه دارد. رنگ سرخ سماق یادآور خون و زندگی است. قرار دادن سماق در سفره هفت‌سین نشان‌دهنده آرزوی رنگارنگی و شادابی در زندگی سال نو است.',
            color: 'from-rose-400 to-rose-500',
            bgColor: 'bg-rose-50',
            borderColor: 'border-rose-200',
          },
        ];
      case 'ru':
        return [
          {
            name: 'Сиб (Яблоко)',
            symbol: '🍎',
            meaning: 'Символ красоты и здоровья',
            description: 'Яблоко символизирует красоту и здоровье. В иранской культуре яблоко - это фрукт с многочисленными лечебными свойствами, полезный для здоровья. Из-за своей сферической формы и красивого красного цвета оно также считается символом совершенства и красоты. Размещение яблока на столе Хафт-Син предназначено для привлечения здоровья и красоты в новом году.',
            color: 'from-red-400 to-red-500',
            bgColor: 'bg-red-50',
            borderColor: 'border-red-200',
          },
          {
            name: 'Сабзе (Ростки)',
            symbol: '🌱',
            meaning: 'Символ возрождения и плодородия',
            description: 'Сабзе, выращенный из пшеницы, чечевицы или других семян, символизирует обновление, рост и плодородие. С началом весны и началом роста растений Сабзе представляет собой новое начало жизни и распускание надежды. После окончания праздника Навруз Сабзе обычно бросают в проточную воду как символ продолжения жизни.',
            color: 'from-green-400 to-green-500',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
          },
          {
            name: 'Саману (Пшеничный пудинг)',
            symbol: '🍯',
            meaning: 'Символ силы и изобилия',
            description: 'Саману - это священная сладость, приготовленная из пророщенной пшеницы, символизирующая силу, благословение и изобилие. Приготовление Саману - особый ритуал, когда женщины обычно собираются вместе в последние ночи года и готовят его, читая специальные стихи и молитвы. Саману выражает благословение пищи и надежду на изобилие в новом году.',
            color: 'from-amber-400 to-amber-500',
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-200',
          },
          {
            name: 'Сенджед (Лох)',
            symbol: '🌰',
            meaning: 'Символ любви и привязанности',
            description: 'Сенджед, плод дерева лох, символизирует любовь и привязанность. Согласно древним верованиям, Сенджед своим приятным ароматом очаровывает и влюбляет сердца. Присутствие Сенджеда на столе Хафт-Син выражает желание любви и привязанности в жизни, а также глубокую привязанность к семье и обществу. Кроме того, этот фрукт ценится в традиционной медицине за свои лечебные свойства.',
            color: 'from-orange-400 to-orange-500',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200',
          },
          {
            name: 'Сир (Чеснок)',
            symbol: '🧄',
            meaning: 'Символ защиты и здоровья',
            description: 'Чеснок помещается на стол Хафт-Син как символ защиты, здоровья и отпугивания злых духов. С древних времен чеснок был известен своими лечебными и дезинфицирующими свойствами. Древние иранцы верили, что чеснок обладает силой отражать отрицательную энергию и защищать семью. Сегодня чеснок известен как укрепляющее иммунную систему и здоровье сердца средство.',
            color: 'from-purple-400 to-purple-500',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200',
          },
          {
            name: 'Серке (Уксус)',
            symbol: '🧪',
            meaning: 'Символ терпения и выносливости',
            description: 'Уксус, полученный путем ферментации сахаристых веществ, символизирует терпение, выносливость и долголетие. Процесс производства уксуса занимает много времени, что напоминает о важности терпения в жизни. Кроме того, уксус, благодаря своему свойству предохранять пищу от порчи, также является символом устойчивости и долговечности. Присутствие уксуса на столе Хафт-Син напоминает о необходимости терпения и настойчивости перед лицом жизненных трудностей.',
            color: 'from-yellow-400 to-yellow-500',
            bgColor: 'bg-yellow-50',
            borderColor: 'border-yellow-200',
          },
          {
            name: 'Сомаг (Сумах)',
            symbol: '🌶️',
            meaning: 'Символ восхода солнца и обновления',
            description: 'Сумах со своим ярким красным цветом символизирует восход солнца, жизненную силу и свежесть. Эта вкусная специя, получаемая из сушеных плодов растения сумах, используется в иранской кухне и имеет кисловатый вкус. Красный цвет сумаха напоминает о крови и жизни. Размещение сумаха на столе Хафт-Син выражает желание красочности и бодрости в жизни в новом году.',
            color: 'from-rose-400 to-rose-500',
            bgColor: 'bg-rose-50',
            borderColor: 'border-rose-200',
          },
        ];
      case 'tr':
        return [
          {
            name: 'Sib (Elma)',
            symbol: '🍎',
            meaning: 'Güzellik ve sağlık sembolü',
            description: 'Elma güzellik ve sağlığı simgeler. İran kültüründe elma, sağlık için faydalı olan çok sayıda tıbbi özelliğe sahip bir meyvedir. Küresel şekli ve güzel kırmızı rengi nedeniyle aynı zamanda mükemmellik ve güzelliğin sembolü olarak da kabul edilir. Haft-Sin sofrasına elma koymak, yeni yılda sağlık ve güzelliği çekmek içindir.',
            color: 'from-red-400 to-red-500',
            bgColor: 'bg-red-50',
            borderColor: 'border-red-200',
          },
          {
            name: 'Sabzeh (Filizler)',
            symbol: '🌱',
            meaning: 'Yeniden doğuş ve bereket sembolü',
            description: 'Buğday, mercimek veya diğer tohumların filizlenmesiyle hazırlanan Sabzeh, yenilenme, büyüme ve bereketin sembolüdür. Baharın başlangıcı ve bitkilerin büyümeye başlamasıyla Sabzeh, hayatın yeni bir başlangıcını ve umudun filizlenmesini temsil eder. Nevruz kutlamaları sona erdikten sonra, Sabzeh genellikle yaşamın akışının devam ettiğinin bir işareti olarak akan suya bırakılır.',
            color: 'from-green-400 to-green-500',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
          },
          {
            name: 'Samanu (Buğday pudingi)',
            symbol: '🍯',
            meaning: 'Güç ve bolluk sembolü',
            description: 'Samanu, filizlenmiş buğdaydan hazırlanan, gücü, bereketi ve bolluğu simgeleyen kutsal bir tatlıdır. Samanu hazırlamak, kadınların genellikle yılın son gecelerinde bir araya gelerek özel şiirler ve dualar okuyarak hazırladıkları özel bir törendir. Samanu, yiyecek bereketini ve yeni yılda bolluk umudunu ifade eder.',
            color: 'from-amber-400 to-amber-500',
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-200',
          },
          {
            name: 'Senjed (İğde)',
            symbol: '🌰',
            meaning: 'Aşk ve sevgi sembolü',
            description: `İğde ağacının meyvesi olan Senjed, aşk ve sevginin sembolüdür. Eski inançlara göre Senjed, hoş kokusuyla kalpleri büyüler ve âşık eder. Haft-Sin sofrasında Senjed'in varlığı, yaşamda aşk ve sevgi ile aile ve topluma derin bağlılık arzusunu gösterir. Ayrıca bu meyve, geleneksel tıpta tıbbi özellikleri nedeniyle değerlidir.`,
            color: 'from-orange-400 to-orange-500',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200',
          },
          {
            name: 'Sir (Sarımsak)',
            symbol: '🧄',
            meaning: 'Koruma ve sağlık sembolü',
            description: 'Sarımsak, Haft-Sin sofrasına koruma, sağlık ve kötü ruhları kovma sembolü olarak yerleştirilir. Antik çağlardan beri sarımsak, tıbbi ve dezenfekte edici özellikleri ile biliniyordu. Antik İranlılar, sarımsağın olumsuz enerjiyi uzaklaştırma ve aileyi koruma gücüne sahip olduğuna inanıyorlardı. Bugün sarımsak, bağışıklık sistemini ve kalp sağlığını güçlendirici olarak bilinmektedir.',
            color: 'from-purple-400 to-purple-500',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200',
          },
          {
            name: 'Serkeh (Sirke)',
            symbol: '🧪',
            meaning: 'Sabır ve hoşgörü sembolü',
            description: 'Şekerli maddelerin fermantasyonuyla üretilen sirke, sabır, dayanıklılık ve uzun ömrün sembolüdür. Sirke üretim süreci zaman alır ve bu, hayatta sabrın önemini hatırlatır. Ayrıca sirke, yiyeceklerin bozulmasını önleme özelliği nedeniyle dayanıklılık ve kalıcılığın da sembolüdür. Haft-Sin sofrasında sirkenin varlığı, yaşamın zorluklarıyla karşı karşıya kalındığında sabır ve sebatın gerekliliğini hatırlatır.',
            color: 'from-yellow-400 to-yellow-500',
            bgColor: 'bg-yellow-50',
            borderColor: 'border-yellow-200',
          },
          {
            name: 'Somagh (Sumak)',
            symbol: '🌶️',
            meaning: 'Gün doğumu ve yenilenme sembolü',
            description: 'Parlak kırmızı rengiyle Sumak, gün doğumu, canlılık ve tazeliğin sembolüdür. Sumak bitkisinin kurutulmuş meyvesinden elde edilen bu lezzetli baharat, İran mutfağında kullanılır ve ekşimsi bir tada sahiptir. Sumak\'ın kırmızı rengi kan ve yaşamı hatırlatır. Haft-Sin sofrasına sumak koymak, yeni yılda hayatta renk ve canlılık arzusunu ifade eder.',
            color: 'from-rose-400 to-rose-500',
            bgColor: 'bg-rose-50',
            borderColor: 'border-rose-200',
          },
        ];
      default: // English
        return [
          {
            name: 'Sib (Apple)',
            symbol: '🍎',
            meaning: 'Symbol of beauty and health',
            description: 'The apple represents beauty and health. In Iranian culture, the apple is a fruit with numerous medicinal properties that are beneficial for health. Due to its spherical shape and beautiful red color, it is also considered a symbol of perfection and beauty. Placing an apple on the Haft-Sin table is for attracting health and beauty in the new year.',
            color: 'from-red-400 to-red-500',
            bgColor: 'bg-red-50',
            borderColor: 'border-red-200',
          },
          {
            name: 'Sabzeh (Sprouts)',
            symbol: '🌱',
            meaning: 'Symbol of rebirth and fertility',
            description: 'Sabzeh, grown from wheat, lentils, or other seeds, symbolizes renewal, growth, and fertility. With the beginning of spring and the start of plant growth, Sabzeh represents a new beginning of life and the sprouting of hope. After the end of Nowruz celebrations, Sabzeh is usually thrown into flowing water as a sign of the continuation of life.',
            color: 'from-green-400 to-green-500',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200',
          },
          {
            name: 'Samanu (Wheat pudding)',
            symbol: '🍯',
            meaning: 'Symbol of power and abundance',
            description: 'Samanu is a sacred sweet made from sprouted wheat, symbolizing power, blessing, and abundance. Preparing Samanu is a special ceremony where women usually gather together in the last nights of the year and prepare it while reciting special poems and prayers. Samanu expresses the blessing of food and hope for abundance in the new year.',
            color: 'from-amber-400 to-amber-500',
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-200',
          },
          {
            name: 'Senjed (Oleaster)',
            symbol: '🌰',
            meaning: 'Symbol of love and affection',
            description: 'Senjed, the fruit of the oleaster tree, symbolizes love and affection. According to ancient beliefs, Senjed with its pleasant fragrance enchants hearts and makes them fall in love. The presence of Senjed on the Haft-Sin table expresses the desire for love and affection in life, as well as deep attachment to family and society. Additionally, this fruit is valued in traditional medicine for its medicinal properties.',
            color: 'from-orange-400 to-orange-500',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200',
          },
          {
            name: 'Sir (Garlic)',
            symbol: '🧄',
            meaning: 'Symbol of protection and health',
            description: 'Garlic is placed on the Haft-Sin table as a symbol of protection, health, and warding off evil spirits. Since ancient times, garlic was known for its medicinal and disinfectant properties. Ancient Iranians believed that garlic has the power to repel negative energy and protect the family. Today, garlic is known as an immune system and heart health enhancer.',
            color: 'from-purple-400 to-purple-500',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200',
          },
          {
            name: 'Serkeh (Vinegar)',
            symbol: '🧪',
            meaning: 'Symbol of patience and tolerance',
            description: 'Vinegar, produced by fermenting sugary substances, symbolizes patience, endurance, and longevity. The process of producing vinegar takes time, which is reminiscent of the importance of patience in life. Additionally, vinegar, due to its property of preserving food from spoilage, is also a symbol of durability and permanence. The presence of vinegar on the Haft-Sin table reminds of the necessity of patience and perseverance in the face of life\'s difficulties.',
            color: 'from-yellow-400 to-yellow-500',
            bgColor: 'bg-yellow-50',
            borderColor: 'border-yellow-200',
          },
          {
            name: 'Somagh (Sumac)',
            symbol: '🌶️',
            meaning: 'Symbol of sunrise and renewal',
            description: 'Sumac with its bright red color symbolizes sunrise, vitality, and freshness. This tasty spice, obtained from the dried fruit of the sumac plant, is used in Iranian cuisine and has a tangy taste. The red color of sumac is reminiscent of blood and life. Placing sumac on the Haft-Sin table expresses the desire for colorfulness and vibrancy in life in the new year.',
            color: 'from-rose-400 to-rose-500',
            bgColor: 'bg-rose-50',
            borderColor: 'border-rose-200',
          },
        ];
    }
  };

  const haftSinItems = getHaftSinDetails();

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 to-emerald-50"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-t-amber-500 border-r-emerald-500 border-b-red-500 border-l-blue-500 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating decorative elements */}
      <div className="fixed -z-10 top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Small floating circles */}
        <motion.div 
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[10%] left-[20%] w-8 h-8 rounded-full bg-gradient-to-r from-emerald-300/20 to-amber-300/20"
        />
        <motion.div 
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[60%] right-[15%] w-12 h-12 rounded-full bg-gradient-to-r from-amber-300/20 to-rose-300/20"
        />
        <motion.div 
          animate={{
            y: [0, -20, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[40%] left-[10%] w-6 h-6 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20"
        />
        
        {/* Decorative patterns */}
        <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-amber-100/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-emerald-100/20 to-transparent" />
        
        {/* Spring theme elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-contain bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/flower-pattern.png')" }}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute -bottom-10 -left-10 w-40 h-40 bg-contain bg-no-repeat rotate-180 opacity-20"
          style={{ backgroundImage: "url('/images/flower-pattern.png')" }}
        />
      </div>

      <div className='max-w-4xl mx-auto px-4 py-4 overflow-x-hidden'>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-6'>
          <h1
            className={`text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent ${
              isRtl ? 'font-vazirmatn' : ''
            }`}>
            {t('home.welcome')}
          </h1>
          <p
            className={`text-base mb-3 text-gray-700 max-w-md mx-auto ${
              isRtl ? 'font-vazirmatn' : ''
            }`}>
            {t('home.intro')}
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center w-full my-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            <div className="mx-2 text-amber-400">✿</div>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
          </div>
        </motion.div>

        {/* Main card with Haft-Sin image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='mb-6 relative'>
          <div className='bg-white/90 backdrop-blur-lg rounded-2xl p-5 shadow-lg overflow-hidden border border-amber-100'>
            {/* Card decorative elements */}
            <div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500/50 via-amber-500/50 to-emerald-500/50'></div>
            <div className='absolute bottom-0 right-0 w-full h-2 bg-gradient-to-l from-red-500/50 via-amber-500/50 to-emerald-500/50'></div>
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12 bg-contain bg-no-repeat opacity-30"
              style={{ backgroundImage: "url('/images/nowruz-corner.png')" }}></div>
            <div className="absolute top-0 right-0 w-12 h-12 bg-contain bg-no-repeat opacity-30 rotate-90"
              style={{ backgroundImage: "url('/images/nowruz-corner.png')" }}></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-contain bg-no-repeat opacity-30 rotate-180"
              style={{ backgroundImage: "url('/images/nowruz-corner.png')" }}></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-contain bg-no-repeat opacity-30 rotate-270"
              style={{ backgroundImage: "url('/images/nowruz-corner.png')" }}></div>

            <div className={`flex flex-col items-center gap-5 ${isRtl ? 'items-end' : ''}`}>
              {/* Haft-Sin Image with enhanced treatment */}
              <div className='w-full'>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-56 w-full overflow-hidden rounded-xl shadow-lg border-2 border-amber-200 group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-emerald-500/10 to-transparent z-10"></div>
                  <Image
                    src='/images/haft-sin.jpg'
                    alt='Haft-Sin Table'
                    fill
                    style={{ objectFit: 'cover' }}
                    className='transition-transform duration-700 group-hover:scale-105'
                    priority
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
                  <motion.div 
                    animate={pulseAnimation}
                    className={`absolute bottom-0 left-0 right-0 p-4 text-white font-medium text-base ${
                      isRtl ? 'text-right font-vazirmatn' : ''
                    }`}>
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm shadow-md">
                      {isRtl ? 'سفره هفت‌سین نوروزی' : 'Traditional Haft-Sin Table'}
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Get Fortune Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetFortune}
                className="relative w-full py-4 px-6 rounded-full text-white font-medium text-lg shadow-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 group-hover:from-red-500 group-hover:to-amber-500 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-nowruz-pattern mix-blend-soft-light opacity-30"></div>
                <div className="absolute inset-y-0 left-0 w-1/3 bg-white/20 skew-x-[45deg] group-hover:animate-shimmer"></div>
                <span className="relative flex items-center justify-center gap-3">
                  <span>{t('home.button')}</span>
                  <motion.span 
                    animate={{ rotate: [0, 15, 0, -15, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    className="text-xl"
                  >
                    ✨
                  </motion.span>
                </span>
              </motion.button>

              {/* Info Accordion */}
              <div className='w-full space-y-3 mt-3'>
                {/* About Nowruz */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className='p-4 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl border border-amber-200 shadow-sm'
                >
                  <button
                    onClick={() => setShowInfo(!showInfo)}
                    className={`flex items-center justify-between w-full text-left ${isRtl ? 'flex-row-reverse' : ''}`}
                  >
                    <span className='font-medium text-amber-800 flex items-center gap-2'>
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-200/70 text-amber-700">🌞</span>
                      <span>{language === 'fa' ? 'درباره نوروز' : 'About Nowruz'}</span>
                    </span>
                    <motion.div
                      animate={{ rotate: showInfo ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-200/50 text-amber-700"
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {showInfo && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`mt-3 text-sm text-gray-700 overflow-hidden ${
                          isRtl ? 'font-vazirmatn text-right' : ''
                        }`}
                      >
                        <p className="leading-relaxed">{t('home.info')}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* What is Haft-Sin */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className='p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl border border-emerald-200 shadow-sm'
                >
                  <button
                    onClick={() => setShowHaftSin(!showHaftSin)}
                    className={`flex items-center justify-between w-full text-left ${isRtl ? 'flex-row-reverse' : ''}`}
                  >
                    <span className='font-medium text-emerald-800 flex items-center gap-2'>
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-200/70 text-emerald-700">🌱</span>
                      <span>{language === 'fa' ? 'سفره هفت‌سین چیست؟' : 'What is Haft-Sin?'}</span>
                    </span>
                    <motion.div
                      animate={{ rotate: showHaftSin ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-200/50 text-emerald-700"
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {showHaftSin && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`mt-3 overflow-hidden ${
                          isRtl ? 'font-vazirmatn text-right' : ''
                        }`}
                      >
                        <p className='mb-4 text-sm text-gray-700 leading-relaxed'>
                          {isRtl
                            ? 'سفره هفت‌سین بخش مهمی از جشن نوروز است. "هفت" به عدد ۷ اشاره دارد که در فرهنگ ایرانی عددی مقدس است، و "سین" حرف «س» در الفبای فارسی است. هفت‌سین شامل هفت چیز است که همگی با حرف «س» شروع می‌شوند و هر کدام نمادی از باززایی، امید و خوشبختی هستند.'
                            : 'Haft-Sin is an essential part of the Nowruz celebration. "Haft" refers to the number 7 which is sacred in Iranian culture, and "Sin" is the letter "س" (S) in the Persian alphabet. Haft-Sin consists of seven items all starting with the letter "س", each symbolizing rebirth, hope, and prosperity.'}
                        </p>

                        {/* Enhanced Interactive Haft-Sin Items */}
                        <motion.div
                          variants={containerVariants}
                          initial='hidden'
                          animate='show'
                          className='grid grid-cols-1 gap-2'
                        >
                          {haftSinItems.map((item, index) => (
                            <motion.div
                              key={index}
                              variants={itemVariants}
                              onClick={() => setActiveItem(activeItem === index ? null : index)}
                              className={`rounded-lg ${item.bgColor} ${item.borderColor} border p-3 cursor-pointer transition-all duration-300 ${
                                activeItem === index ? 'shadow-md' : ''
                              } ${isRtl ? 'text-right' : ''}`}
                            >
                              <div className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                                <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm ${item.borderColor}`}>
                                  <motion.span 
                                    className='text-xl'
                                    animate={activeItem === index ? { 
                                      scale: [1, 1.2, 1],
                                      rotate: [0, 10, 0, -10, 0]
                                    } : {}}
                                    transition={{ duration: 0.5 }}
                                  >
                                    {item.symbol}
                                  </motion.span>
                                </div>
                                <div className={`flex-1 ${isRtl ? 'font-vazirmatn' : ''}`}>
                                  <span className='font-medium text-sm'>{item.name}</span>
                                  <AnimatePresence>
                                    {activeItem === index && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                      >
                                        <div className={`mt-1 text-xs text-gray-600 bg-white/50 rounded-md p-2 ${item.borderColor} border`}>
                                          <div className="font-medium mb-1">{item.meaning}</div>
                                          <div className="text-xs mt-2 leading-relaxed">{item.description}</div>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                                <motion.div
                                  animate={{ rotate: activeItem === index ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                  className={`bg-white/70 w-5 h-5 rounded-full flex items-center justify-center text-gray-500 ${item.borderColor} border`}
                                >
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-3 w-3'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                  >
                                    <path
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      strokeWidth={2}
                                      d='M19 9l-7 7-7-7'
                                    />
                                  </svg>
                                </motion.div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer greeting */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className='text-center mt-8 mb-4'
        >
          <motion.div 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={`inline-block p-4 bg-gradient-to-r from-amber-50 to-emerald-50 rounded-xl border border-amber-200 shadow-sm ${
              isRtl ? 'font-vazirmatn' : ''
            }`}
          >
            <p className='bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 bg-clip-text text-transparent text-sm font-medium'>
              {language === 'fa'
                ? '🌷 نوروز باستانی، جشن بهار و نو شدن طبیعت، بر شما مبارک باد 🌱'
                : '🌷 Happy Nowruz! Ancient celebration of spring and renewal of nature 🌱'}
            </p>
          </motion.div>
        </motion.div>

        {/* Floating action button for mobile */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetFortune}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-20 lg:hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-red-500 rounded-full"></div>
          <motion.span 
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center text-white text-2xl"
          >
            ✨
          </motion.span>
        </motion.button>
      </div>
    </>
  );
}