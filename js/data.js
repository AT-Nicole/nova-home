/* ==========================================================================
   data.js - seed content + localStorage persistence
   The admin panel (admin.html) edits this data via localStorage.
   Public pages read through store.loadSite() and fall back to DEFAULT_DATA.
   ========================================================================== */

const DEFAULT_DATA = {
  settings: {
    brand: "WECHGOOD",
    slogan: "Power your comfortable daily life",
    phone: "+86 183 2165 8916",
    whatsapp: "8613143339397",
    email: "harry_hou@wechgood.com",
    address: "5th Floor, Building No. 12, Phase One of Tianfulai International Zone, No. 39 Changbao West Road, Ronggui Sub-district, Shunde District, Foshan City, Guangdong Province, China",
    hours: "Monday - Saturday, 9:00 - 18:00 (GMT+8)",
    mapQuery: "Ronggui, Shunde, Foshan, Guangdong Province, China",
    analyticsId: "",
    tawkId: "",
    fbpixelId: "",
    aiApiKey: "",
    aiApiBase: "https://open.bigmodel.cn/api/paas/v4",
    aiModel: "glm-4v-plus",
    crmWebhook: "",
    crmWebhookType: "generic",
    samplePayLink: "",
    factoryVideo: "",
    facebook: "https://www.facebook.com/profile.php?id=61590714780155",
    facebookCn: "https://www.facebook.com/profile.php?id=61590159466072",
    adminPass: "admin123",
    replyHours: "12"
  },

  slides: [
    {
      id: "s1",
      img: "images/hero-factory.jpg",
      title_en: "Power your comfortable daily life",
      title_ar: "أضف الطاقة إلى حياتك اليومية المريحة",
      title_es: "Da energía a tu día a día con comodidad",
      title_th: "เติมพลังชีวิตประจำวันที่สะดวกสบายของคุณ",
      sub_en: "Factory-direct wholesale cooking appliances from China: induction cookers, infrared cookers, tea extractors and 2-in-1 coffee-tea machines, exported to 40+ countries.",
      sub_ar: "أجهزة طبخ مباشرة من المصنع الصيني: مواقد حث، مواقد الأشعة تحت الحمراء، أجهزة تحضير الشاي وأجهزة القهوة والشاي 2 في 1، مصدَّرة إلى أكثر من 40 دولة.",
      sub_es: "Aparatos de cocina directos de fábrica desde China: cocinas de inducción, cocinas de infrarrojos, extractores de té y cafeteras y teteras 2 en 1, exportados a más de 40 países.",
      sub_th: "เครื่องครัวจากโรงงานจีนโดยตรง: เตาแม่เหล็กไฟฟ้า เตาอินฟราเรด เครื่องชงชา และเครื่องชงกาแฟและชา 2-in-1 ส่งออกกว่า 40 ประเทศ"
    },
    {
      id: "s2",
      img: "images/hero-line.jpg",
      title_en: "Quality you can trace back to the source",
      title_ar: "جودة يمكنك تتبعها حتى المصدر",
      title_es: "Calidad que puedes rastrear hasta el origen",
      title_th: "คุณภาพที่ตรวจสอบย้อนกลับถึงต้นทางได้",
      sub_en: "Five production lines, 300+ skilled workers and a four-step QC system on every single batch.",
      sub_ar: "خمسة خطوط إنتاج، أكثر من 300 عامل ماهر، ونظام جودة من أربع خطوات لكل دفعة.",
      sub_es: "Cinco líneas de producción, más de 300 trabajadores cualificados y un sistema de control de calidad en cuatro pasos en cada lote.",
      sub_th: "สายการผลิต 5 สาย พนักงานฝีมือดีกว่า 300 คน และระบบ QC 4 ขั้นตอนในทุกชุดการผลิต"
    },
    {
      id: "s3",
      img: "images/hero-kitchen.jpg",
      title_en: "One factory, five product lines",
      title_ar: "مصنع واحد، خمسة خطوط منتجات",
      title_es: "Una fábrica, cinco líneas de producto",
      title_th: "โรงงานเดียว สายผลิตภัณฑ์ 5 สาย",
      sub_en: "A manufacturer with deep-processing capacity that produces PCBs in-house.",
      sub_ar: "شركة مصنعة بقدرة معالجة عميقة تُنتج لوحات PCB داخليًا.",
      sub_es: "Un fabricante con capacidad de procesamiento profundo que produce PCB internamente.",
      sub_th: "ผู้ผลิตที่มีความสามารถในการผลิตแบบเลิกลึกซึ่งผลิต PCB ภายในโรงงาน"
    }
  ],

  advantages: [
    {
      id: "a1",
      icon: "factory",
      title_en: "10+ years of manufacturing",
      title_ar: "أكثر من 10 عاماً من التصنيع",
      title_es: "Más de 10 años de fabricación",
      title_th: "ประสบการณ์ผลิตกว่า 10 ปี",
      desc_en: "A real factory in Foshan, China, built by engineers and export people who have worked with importers since day one.",
      desc_ar: "مصنع حقيقي في فوشان بالصين، أسسه مهندسون وخبراء تصدير عملوا مع المستوردين منذ اليوم الأول.",
      desc_es: "Una fábrica real en Foshan (China), construida por ingenieros y personal de exportación que trabajan con importadores desde el primer día.",
      desc_th: "โรงงานจริงในเมืองฝอซาน ประเทศจีน ก่อตั้งโดยวิศวกรและทีมส่งออกที่ทำงานกับผู้นำเข้ามาตั้งแต่วันแรก",
      stat1_en: "10+ years", stat1_ar: "+10 عاماً", stat1_es: "+10 años", stat1_th: "10+ ปี",
      stat2_en: "300+ workers", stat2_ar: "+300 عامل", stat2_es: "+300 trabajadores", stat2_th: "300+ คน"
    },
    {
      id: "a2",
      icon: "shield",
      title_en: "Certified for your market",
      title_ar: "معتمد لسوقك",
      title_es: "Certificado para tu mercado",
      title_th: "ได้มาตรฐานสำหรับตลาดของคุณ",
      desc_en: "CE, RoHS, ErP and UKCA. Products are tested to the standards of the markets we ship to.",
      desc_ar: "CE وRoHS وErP وUKCA. المنتجات مُختبَرة وفق معايير الأسواق التي نشحن إليها.",
      desc_es: "CE, RoHS, ErP y UKCA. Los productos se prueban según los estándares de los mercados a los que enviamos.",
      desc_th: "CE, RoHS, ErP และ UKCA ผลิตภัณฑ์ได้รับการทดสอบตามมาตรฐานของตลาดที่เราส่งออก",
      stat1_en: "CE · RoHS · UKCA", stat1_ar: "CE · RoHS · UKCA", stat1_es: "CE · RoHS · UKCA", stat1_th: "CE · RoHS · UKCA",
      stat2_en: "ErP Certified", stat2_ar: "ErP Certified", stat2_es: "ErP Certified", stat2_th: "ErP Certified"
    },
    {
      id: "a3",
      icon: "gear",
      title_en: "OEM / ODM flexibility",
      title_ar: "مرونة OEM / ODM",
      title_es: "Flexibilidad OEM / ODM",
      title_th: "ความยืดหยุ่น OEM / ODM",
      desc_en: "Your logo, your colors, your voltage, your packaging. Private label programs from 500 pcs per model.",
      desc_ar: "شعارك، ألوانك، جهدك، تغليفك. برامج علامة خاصة تبدأ من 300 قطعة للموديل.",
      desc_es: "Tu logotipo, tus colores, tu voltaje, tu embalaje. Programas de marca propia desde 500 unidades por modelo.",
      desc_th: "โลโก้ของคุณ สีของคุณ แรงดันไฟของคุณ บรรจุภัณฑ์ของคุณ โปรแกรมแบรนด์ส่วนตัวเริ่มต้น 300 ชิ้นต่อรุ่น",
      stat1_en: "MOQ from 500 pcs", stat1_ar: "الحد الأدنى 500 قطعة", stat1_es: "MOQ desde 500 uds.", stat1_th: "MOQ เริ่ม 500 ชิ้น",
      stat2_en: "Private label", stat2_ar: "علامة خاصة", stat2_es: "Marca propia", stat2_th: "แบรนด์ส่วนตัว"
    }
  ],

  whyUs: [
    {
      id: "w1", icon: "price",
      title_en: "Factory-direct pricing",
      title_ar: "أسعار مباشرة من المصنع",
      title_es: "Precio directo de fábrica",
      title_th: "ราคาโรงงานโดยตรง",
      desc_en: "No trading company in between. You pay the factory price, not the middleman price.",
      desc_ar: "لا شركة وساطة بيننا. تدفع سعر المصنع لا سعر الوسيط.",
      desc_es: "Sin empresas intermediarias. Pagas el precio de fábrica, no el del intermediario.",
      desc_th: "ไม่มีบริษัทเทรดดิ้งคั่นกลาง คุณจ่ายราคาโรงงาน ไม่ใช่ราคานายหน้า"
    },
    {
      id: "w2", icon: "qc",
      title_en: "Four-step QC on every batch",
      title_ar: "جودة من أربع خطوات لكل دفعة",
      title_es: "Control de calidad en cuatro pasos",
      title_th: "QC 4 ขั้นตอนทุกชุดการผลิต",
      desc_en: "Incoming inspection, in-line checks, aging tests and final inspection before packing.",
      desc_ar: "فحص الوارد، فحص أثناء الخط، اختبارات تشغيل، وفحص نهائي قبل التغليف.",
      desc_es: "Inspección de entrada, controles en línea, pruebas de envejecimiento e inspección final antes del embalaje.",
      desc_th: "ตรวจวัตถุดิบ ตรวจระหว่างสายการผลิต ทดสอบการใช้งาน และตรวจขั้นสุดท้ายก่อนบรรจุ"
    },
    {
      id: "w3", icon: "box",
      title_en: "Small MOQ, honest lead time",
      title_ar: "حد أدنى صغير للطلب ومدة تسليم صادقة",
      title_es: "MOQ bajo y plazos honestos",
      title_th: "MOQ ต่ำ ระยะเวลาจัดส่งตรงไปตรงมา",
      desc_en: "Start with 500 pcs per model and scale up as your market grows.",
      desc_ar: "ابدأ بـ 300 قطعة لكل موديل وزد الكمية مع نمو سوقك.",
      desc_es: "Empieza con 500 unidades por modelo y escala según crezca tu mercado.",
      desc_th: "เริ่มต้น 300 ชิ้นต่อรุ่น แล้วเพิ่มตามการเติบโตของตลาด"
    },
    {
      id: "w4", icon: "clock",
      title_en: "12-hour response guarantee",
      title_ar: "ضمان الرد خلال 12 ساعة",
      title_es: "Respuesta garantizada en 12 horas",
      title_th: "รับประกันตอบกลับภายใน 12 ชั่วโมง",
      desc_en: "Every inquiry answered by a real export sales engineer within 12 hours.",
      desc_ar: "كل استفسار يجيب عنه مهندس مبيعات تصدير حقيقي خلال 12 ساعة.",
      desc_es: "Cada consulta es respondida por un ingeniero real de ventas de exportación en 12 horas.",
      desc_th: "ทุกคำถามตอบโดยวิศวกรฝ่ายขายส่งออกตัวจริงภายใน 12 ชั่วโมง"
    },
    {
      id: "w5", icon: "sample",
      title_en: "Samples within 7 days",
      title_ar: "عينات خلال 7 أيام",
      title_es: "Muestras en 7 días",
      title_th: "ตัวอย่างสินค้าภายใน 7 วัน",
      desc_en: "Stock samples ship in 2-3 days; custom samples in about a week.",
      desc_ar: "عينات جاهزة خلال 2-3 أيام، وعينات مخصصة خلال أسبوع تقريباً.",
      desc_es: "Las muestras en stock se envían en 2-3 días; las personalizadas en aproximadamente una semana.",
      desc_th: "ตัวอย่างสต็อกจัดส่งใน 2-3 วัน ตัวอย่างสั่งทำประมาณ 1 สัปดาห์"
    },
    {
      id: "w6", icon: "truck",
      title_en: "On-time delivery & after-sales",
      title_ar: "تسليم في الموعد وخدمة ما بعد البيع",
      title_es: "Entrega puntual y servicio postventa",
      title_th: "จัดส่งตรงเวลาและบริการหลังการขาย",
      desc_en: "Fixed production slots, weekly shipment updates, and spare parts support for your market.",
      desc_ar: "مواعيد إنتاج ثابتة، تحديثات شحن أسبوعية، ودعم قطع غيار لسوقك.",
      desc_es: "Cuotas de producción fijas, actualizaciones semanales de envío y soporte de repuestos para tu mercado.",
      desc_th: "รอบการผลิตที่แน่นอน อัปเดตการจัดส่งรายสัปดาห์ และอะไหล่สำหรับตลาดของคุณ"
    }
  ],

  stats: [
    { id: "st1", num: "10", suffix: "+", label_en: "Years of manufacturing", label_ar: "سنة تصنيع", label_es: "Años de fabricación", label_th: "ปีผลิต" },
    { id: "st2", num: "40", suffix: "+", label_en: "Countries served", label_ar: "دولة", label_es: "Países servidos", label_th: "ประเทศ" },
    { id: "st3", num: "200", suffix: "+", label_en: "Product models", label_ar: "موديل", label_es: "Modelos", label_th: "รุ่นสินค้า" },
    { id: "st4", num: "12", suffix: "h", label_en: "Reply commitment", label_ar: "ساعة للرد", label_es: "Horas de respuesta", label_th: "ชั่วโมงตอบกลับ" }
  ],

  categories: [
    {
        "id": "induction-cooker",
        "img": "images/cat-induction.jpg",
        "name_ar": "مواقد الحث",
        "name_en": "Induction Cookers",
        "name_es": "Cocinas de inducción",
        "name_th": "เตาแม่เหล็กไฟฟ้า"
    },
    {
        "id": "infrared-cooker",
        "img": "images/cat-infrared.jpg",
        "name_ar": "مواقد الأشعة تحت الحمراء",
        "name_en": "Infrared Cookers",
        "name_es": "Cocinas de infrarrojos",
        "name_th": "เตาอินฟราเรด"
    },
    {
        "id": "tea-extractor",
        "img": "images/cat-tea.jpg",
        "name_ar": "أجهزة تحضير الشاي",
        "name_en": "Tea Extractors",
        "name_es": "Extractores de té",
        "name_th": "เครื่องชงชา"
    },
    {
        "id": "coffee-tea-maker",
        "img": "images/products/wp-wq-yd006.jpg",
        "name_ar": "أجهزة القهوة والشاي 2 في 1",
        "name_en": "2-in-1 Coffee & Tea Makers",
        "name_es": "Cafeteras y teteras 2 en 1",
        "name_th": "เครื่องชงกาแฟและชา 2-in-1"
    }
    ],

    products: [
    {
        "id": "wp-wq-2835a",
        "cat": "induction-cooker",
        "img": "images/products/wp-wq-2835a.jpg",
        "model": "WQ-2835A",
        "name_en": "2100W Single-Burner Induction Cooker",
        "desc_en": "Universal voltage (AC 220-240V) single-burner induction cooker, 2100W fast heating, 9 power gears, 180-min timer, touch control, A+ microcrystal panel, CE & RoHS certified.",
        "name_ar": "موقد حثي أحادي العين بقدرة 2100 واط",
        "desc_ar": "جهد عالمي 220-240 فولت، 9 مستويات طاقة، مؤقت 180 دقيقة، تحكم باللمس، لوح زجاجي A+، معتمد CE وRoHS.",
        "name_es": "Cocina de inducción de un quemador 2100W",
        "desc_es": "Voltaje universal AC 220-240V, 9 niveles de potencia, temporizador 180 min, control táctil, panel microcristalino A+, certificado CE y RoHS.",
        "name_th": "เตาแม่เหล็กไฟฟ้าหัวเดียว 2100W",
        "desc_th": "แรงดันสากล 220-240V กำลังไฟ 2100W ระดับกำลัง 9 ระดับ ตั้งเวลา 180 นาที ควบคุมแบบสัมผัส แผ่นไมโครคริสตัล A+ ผ่าน CE และ RoHS",
        "specs": [
            {
                "k": "power",
                "v": "2100W",
    "featured": true
            },
            {
                "k": "voltage",
                "v": "AC 220-240V"
            },
            {
                "k": "gears",
                "v": "9 Heating Gears"
            },
            {
                "k": "timer",
                "v": "180 mins"
            },
            {
                "k": "control",
                "v": "Touch"
            },
            {
                "k": "panel",
                "v": "A+ Microcrystal Panel"
            },
            {
                "k": "weight",
                "v": "Approx. 2 KG"
            },
            {
                "k": "dimension",
                "v": "350 x 280 x 52 mm"
            },
            {
                "k": "packaging",
                "v": "Gift 432x90x320 / Carton 475x335x453 mm, 5 pcs"
            },
            {
                "k": "container",
                "v": "20' 2020 / 40' 4500 / 40'HQ 4750 pcs"
            },
            {
                "k": "certification",
                "v": "CE, RoHS"
            },
            {
                "k": "option",
                "v": "EMC version available"
            }
        ],
        "active": true
    },
    {
        "id": "wp-wq-2835b",
        "cat": "induction-cooker",
        "img": "images/products/wp-wq-2835b.jpg",
        "model": "WQ-2835B",
        "name_en": "2100W Single-Burner Induction Cooker",
        "desc_en": "Universal voltage (AC 220-240V) induction cooker with 2100W fast heating, 9 gears, 180-min timer, touch control, child lock and A+ microcrystal panel.",
        "name_ar": "موقد حثي أحادي العين بقدرة 2100 واط",
        "desc_ar": "جهد عالمي، 9 مستويات طاقة، مؤقت 180 دقيقة، قفل أمان للأطفال، تحكم باللمس، لوح زجاجي A+.",
        "name_es": "Cocina de inducción de un quemador 2100W",
        "desc_es": "Voltaje universal, 9 niveles, temporizador 180 min, bloqueo infantil, control táctil, panel microcristalino A+.",
        "name_th": "เตาแม่เหล็กไฟฟ้าหัวเดียว 2100W",
        "desc_th": "แรงดันสากล ระดับกำลัง 9 ระดับ ตั้งเวลา 180 นาที ระบบล็อคเด็ก ควบคุมแบบสัมผัส แผ่น A+",
        "specs": [
            {
                "k": "power",
                "v": "2100W"
            },
            {
                "k": "voltage",
                "v": "AC 220-240V"
            },
            {
                "k": "gears",
                "v": "9 Heating Gears"
            },
            {
                "k": "timer",
                "v": "180 mins"
            },
            {
                "k": "control",
                "v": "Touch"
            },
            {
                "k": "functions",
                "v": "Child lock"
            },
            {
                "k": "panel",
                "v": "A+ Microcrystal Panel"
            },
            {
                "k": "weight",
                "v": "Approx. 2 KG"
            },
            {
                "k": "dimension",
                "v": "350 x 280 x 52 mm"
            },
            {
                "k": "packaging",
                "v": "5 pcs / carton 475x335x453 mm"
            },
            {
                "k": "container",
                "v": "20' 2020 / 40' 4500 / 40'HQ 4750 pcs"
            },
            {
                "k": "certification",
                "v": "CE, RoHS"
            }
        ],
        "active": true
    },
    {
        "id": "wp-wq-2835g",
        "cat": "induction-cooker",
        "img": "images/products/wp-wq-2835g.jpg",
        "model": "WQ-2835G",
        "name_en": "2100W Single-Burner Induction Cooker",
        "desc_en": "220V/50Hz induction cooker, 2100W with 9 gears, touch control, raised heating plate, timer setting and intelligent temperature control.",
        "name_ar": "موقد حثي أحادي العين بقدرة 2100 واط",
        "desc_ar": "220 فولت/50 هرتز، 2100 واط، 9 مستويات، تحكم باللمس، لوح تسخين بارز، تحكم ذكي بدرجة الحرارة.",
        "name_es": "Cocina de inducción de un quemador 2100W",
        "desc_es": "220V/50Hz, 2100W, 9 niveles, control táctil, placa calefactora elevada, control inteligente de temperatura.",
        "name_th": "เตาแม่เหล็กไฟฟ้าหัวเดียว 2100W",
        "desc_th": "220V/50Hz กำลังไฟ 2100W ระดับกำลัง 9 ระดับ แผ่นทำความร้อนยกสูง ควบคุมอุณหภูมิอัจฉริยะ",
        "specs": [
            {
                "k": "power",
                "v": "2100W"
            },
            {
                "k": "voltage",
                "v": "220V/50Hz"
            },
            {
                "k": "gears",
                "v": "9 Heating Gears"
            },
            {
                "k": "control",
                "v": "Touch"
            },
            {
                "k": "dimension",
                "v": "280 x 350 x 52 mm"
            },
            {
                "k": "material",
                "v": "Plastic caseback / Microcrystal Glass"
            },
            {
                "k": "functions",
                "v": "Timer, well-distributed heating zone, overheating protection, intelligent temperature control, turbo key"
            }
        ],
        "active": true
    },
    {
        "id": "wp-wq-2835e",
        "cat": "induction-cooker",
        "img": "images/products/wp-wq-2835e.jpg",
        "model": "WQ-2835E",
        "name_en": "2100W Single-Burner Induction Cooker (EMC)",
        "desc_en": "AC 220-240V single-burner induction cooker, 2100W max power, 9 heating levels, 180-min timer, touch control with A+ round microcrystalline panel, CE & RoHS.",
        "name_ar": "موقد حثي أحادي العين 2100 واط",
        "desc_ar": "220-240 فولت، 2100 واط، 9 مستويات، مؤقت 180 دقيقة، تحكم باللمس، لوح دائري A+، معتمد CE وRoHS.",
        "name_es": "Cocina de inducción de un quemador 2100W",
        "desc_es": "AC 220-240V, 2100W, 9 niveles, temporizador 180 min, control táctil, panel microcristalino redondo A+, CE y RoHS.",
        "name_th": "เตาแม่เหล็กไฟฟ้าหัวเดียว 2100W (EMC)",
        "desc_th": "220-240V กำลังไฟ 2100W ระดับความร้อน 9 ระดับ ตั้งเวลา 180 นาที ควบคุมแบบสัมผัส แผ่นกลม A+ ผ่าน CE และ RoHS",
        "specs": [
            {
                "k": "power",
                "v": "2100W"
            },
            {
                "k": "voltage",
                "v": "AC 220-240V"
            },
            {
                "k": "gears",
                "v": "9 Heating Levels"
            },
            {
                "k": "timer",
                "v": "180 mins"
            },
            {
                "k": "control",
                "v": "Touch Control"
            },
            {
                "k": "panel",
                "v": "A+ Round Microcrystalline Panel"
            },
            {
                "k": "weight",
                "v": "Approx. 2 KG"
            },
            {
                "k": "dimension",
                "v": "350 x 280 x 52 mm"
            },
            {
                "k": "colors",
                "v": "1 color option"
            },
            {
                "k": "certification",
                "v": "CE, RoHS"
            }
        ],
        "active": true
    },
    {
        "id": "wp-wq-3137",
        "cat": "induction-cooker",
        "img": "images/products/wp-wq-3137.jpg",
        "model": "WQ-3137",
        "name_en": "3500W Commercial Induction Cooker",
        "desc_en": "Commercial induction cooker, 3500W max power, 10 heating gears, 180-min timer, touch & knob control, A+ microcrystal panel, lightweight 2.5KG.",
        "name_ar": "موقد حثي تجاري بقدرة 3500 واط",
        "desc_ar": "3500 واط، 10 مستويات طاقة، مؤقت 180 دقيقة، تحكم باللمس والمقبض، لوح A+، وزن خفيف 2.5 كجم.",
        "name_es": "Cocina de inducción comercial 3500W",
        "desc_es": "3500W, 10 niveles, temporizador 180 min, control táctil y perilla, panel microcristalino A+, 2,5 kg.",
        "name_th": "เตาแม่เหล็กไฟฟ้าเชิงพาณิชย์ 3500W",
        "desc_th": "กำลังไฟ 3500W ระดับความร้อน 10 ระดับ ตั้งเวลา 180 นาที ควบคุมแบบสัมผัสและปุ่มหมุน แผ่น A+ น้ำหนักเบา 2.5 กก.",
        "specs": [
            {
                "k": "power",
                "v": "3500W",
    "featured": true
            },
            {
                "k": "voltage",
                "v": "AC 220-240V"
            },
            {
                "k": "gears",
                "v": "10 Heating Gears"
            },
            {
                "k": "timer",
                "v": "180 mins"
            },
            {
                "k": "control",
                "v": "Touch & Knob"
            },
            {
                "k": "panel",
                "v": "A+ Microcrystalline Panel"
            },
            {
                "k": "weight",
                "v": "Approx. 2.5 KG"
            },
            {
                "k": "dimension",
                "v": "310 x 399 x 65 mm"
            },
            {
                "k": "packaging",
                "v": "Carton 485x107x345 mm, 1 pc"
            },
            {
                "k": "container",
                "v": "20' 1770 / 40' 3630 / 40'HQ 4160 pcs"
            },
            {
                "k": "certification",
                "v": "CE, RoHS"
            }
        ],
        "active": true
    },
    {
        "id": "wp-wq-3137c",
        "cat": "induction-cooker",
        "img": "images/products/wp-wq-3137c.jpg",
        "model": "WQ-3137 CONCAVE",
        "name_en": "3500W Commercial Concave Induction Cooker",
        "desc_en": "Commercial concave induction cooker with wok-friendly design, 3500W, 10 gears, 180-min timer, touch & knob control, 2.5KG lightweight.",
        "name_ar": "موقد حثي تجاري مقعر 3500 واط",
        "desc_ar": "تصميم مقعر مناسب للقلاية، 3500 واط، 10 مستويات، مؤقت 180 دقيقة، تحكم باللمس والمقبض، 2.5 كجم.",
        "name_es": "Cocina de inducción cóncava comercial 3500W",
        "desc_es": "Diseño cóncavo para wok, 3500W, 10 niveles, temporizador 180 min, control táctil y perilla, 2,5 kg.",
        "name_th": "เตาแม่เหล็กไฟฟ้าเชิงพาณิชย์แบบก้นเว้า 3500W",
        "desc_th": "ดีไซน์ก้นเว้าเหมาะกับกระทะจีน กำลังไฟ 3500W ระดับความร้อน 10 ระดับ ตั้งเวลา 180 นาที น้ำหนัก 2.5 กก.",
        "specs": [
            {
                "k": "power",
                "v": "3500W"
            },
            {
                "k": "voltage",
                "v": "AC 220-240V"
            },
            {
                "k": "gears",
                "v": "10 Heating Gears"
            },
            {
                "k": "timer",
                "v": "180 mins"
            },
            {
                "k": "control",
                "v": "Touch & Knob"
            },
            {
                "k": "panel",
                "v": "A+ Microcrystalline Panel"
            },
            {
                "k": "weight",
                "v": "Approx. 2.5 KG"
            },
            {
                "k": "dimension",
                "v": "310 x 399 x 77 mm"
            },
            {
                "k": "packaging",
                "v": "Carton 485x130x345 mm, 1 pc"
            },
            {
                "k": "container",
                "v": "20' 1300 / 40' 3000 / 40'HQ 3400 pcs"
            }
        ],
        "active": true
    },
    {
        "id": "wp-wq-a730",
        "cat": "induction-cooker",
        "img": "images/products/wp-wq-a730.jpg",
        "model": "WQ-A730",
        "name_en": "3500W Concave Induction Cooker with Wok",
        "desc_en": "Concave induction cooker complete with wok, 3500W, 10 power levels, touch & knob control, 8-hour timer, high & low voltage protection, auto standby.",
        "name_ar": "موقد حثي مقعر مع قدر 3500 واط",
        "desc_ar": "يشمل قدر، 3500 واط، 10 مستويات، تحكم باللمس والمقبض، مؤقت 8 ساعات، حماية الجهد العالي والمنخفض.",
        "name_es": "Cocina de inducción cóncava con wok 3500W",
        "desc_es": "Incluye wok, 3500W, 10 niveles, control táctil y perilla, temporizador 8 h, protección de voltaje, modo de espera.",
        "name_th": "เตาแม่เหล็กไฟฟ้าก้นเว้าพร้อมกระทะ 3500W",
        "desc_th": "มาพร้อมกระทะจีน กำลังไฟ 3500W ระดับกำลัง 10 ระดับ ตั้งเวลา 8 ชั่วโมง ระบบป้องกันไฟกระชากและไฟตก",
        "specs": [
            {
                "k": "power",
                "v": "3500W"
            },
            {
                "k": "voltage",
                "v": "220V/50Hz"
            },
            {
                "k": "gears",
                "v": "10 Power Levels"
            },
            {
                "k": "timer",
                "v": "8-Hour Timer"
            },
            {
                "k": "control",
                "v": "Touch + Knob"
            },
            {
                "k": "dimension",
                "v": "454 x 369 x 135 mm"
            },
            {
                "k": "packaging",
                "v": "530x310x440 mm (with wok)"
            },
            {
                "k": "material",
                "v": "Microcrystalline Panel / Tempered Glass / PP / ABS"
            },
            {
                "k": "functions",
                "v": "High & low voltage protection, overheat protection, auto standby"
            }
        ],
        "active": true
    },
    {
        "id": "wp-wq-400",
        "cat": "induction-cooker",
        "img": "images/products/wp-wq-400.jpg",
        "model": "WQ-400",
        "name_en": "Built-in Multi-zone Induction Cooker 5500W (4 Burners)",
        "desc_en": "Built-in 4-zone induction cooker, 5500W total power (1500+2000+1500+2000W), 9 power levels, 180-min timer, touch & knob control, pan detection. 3-zone variant available.",
        "name_ar": "موقد حثي مدمج متعدد المناطق 5500 واط",
        "desc_ar": "4 مناطق طهي مستقلة، 5500 واط، 9 مستويات، مؤقت 180 دقيقة، تحكم باللمس والمقبض، كشف الأواني. يتوفر إصدار 3 مناطق.",
        "name_es": "Cocina de inducción integrada multizona 5500W",
        "desc_es": "4 zonas independientes, 5500W, 9 niveles, temporizador 180 min, control táctil y perilla, detección de ollas. Variante de 3 zonas disponible.",
        "name_th": "เตาแม่เหล็กไฟฟ้าแบบบิลท์อิน 4 หัว 5500W",
        "desc_th": "4 หัวทำความร้อนอิสระ กำลังรวม 5500W ระดับกำลัง 9 ระดับ ตั้งเวลา 180 นาที ระบบตรวจจับหม้อ มีรุ่น 3 หัว",
        "specs": [
            {
                "k": "power",
                "v": "5500W (1500+2000+1500+2000W)",
    "featured": true
            },
            {
                "k": "voltage",
                "v": "AC 220-240V, 50/60Hz"
            },
            {
                "k": "gears",
                "v": "9 Levels"
            },
            {
                "k": "timer",
                "v": "180 mins"
            },
            {
                "k": "control",
                "v": "Touch & Knob Control"
            },
            {
                "k": "panel",
                "v": "A+ Microcrystal Panel + Plastic Frame"
            },
            {
                "k": "dimension",
                "v": "590 x 520 x 62 mm"
            },
            {
                "k": "cutout",
                "v": "560 x 490 mm"
            },
            {
                "k": "weight",
                "v": "8.7 KG"
            },
            {
                "k": "packaging",
                "v": "Carton 670x580x115 mm, 1 pc"
            },
            {
                "k": "container",
                "v": "20' 665 / 40' 1368 / 40'HQ 1583 pcs"
            },
            {
                "k": "functions",
                "v": "4 independent cooking zones, pan detection, double LED display"
            },
            {
                "k": "variant",
                "v": "3-zone 1500+2000+2300W available"
            }
        ],
        "active": true
    },
    {
        "id": "wp-wqy-x11",
        "cat": "infrared-cooker",
        "img": "images/products/wp-wqy-x11.jpg",
        "model": "WQY-X11",
        "name_en": "3000W Concave Ceramic Cooker",
        "desc_en": "Concave ceramic cooker, 3000W, 10 heating levels, touch & knob control, 8-hour timer, overheat protection, auto standby.",
        "name_ar": "موقد سيراميك مقعر 3000 واط",
        "desc_ar": "3000 واط، 10 مستويات حرارة، تحكم باللمس والمقبض، مؤقت 8 ساعات، حماية من السخونة الزائدة.",
        "name_es": "Cocina cerámica cóncava 3000W",
        "desc_es": "3000W, 10 niveles, control táctil y perilla, temporizador 8 h, protección contra sobrecalentamiento.",
        "name_th": "เตาเซรามิกก้นเว้า 3000W",
        "desc_th": "กำลังไฟ 3000W ระดับความร้อน 10 ระดับ ควบคุมแบบสัมผัสและปุ่มหมุน ตั้งเวลา 8 ชั่วโมง ระบบป้องกันความร้อนสูงเกิน",
        "specs": [
            {
                "k": "power",
                "v": "3000W"
            },
            {
                "k": "voltage",
                "v": "220-240V / 50Hz"
            },
            {
                "k": "gears",
                "v": "10 Heating Levels"
            },
            {
                "k": "timer",
                "v": "8-Hour Timer"
            },
            {
                "k": "control",
                "v": "Touch + Knob"
            },
            {
                "k": "dimension",
                "v": "454 x 369 x 135 mm"
            },
            {
                "k": "material",
                "v": "Microcrystal Plate / Tempered Glass / PP / ABS"
            },
            {
                "k": "functions",
                "v": "Overheat protection, auto standby"
            }
        ],
        "active": true
    },
    {
        "id": "wp-wq-x2",
        "cat": "infrared-cooker",
        "img": "images/products/wp-wq-x2.jpg",
        "model": "WQ-X2",
        "name_en": "2200W Infrared Cooker Electric Ceramic Hob",
        "desc_en": "2200W infrared ceramic hob, inner & outer circle heating, 9 heating levels, 180-min timer, touch + knob dual control, metal frame, suitable for all pots. 2 color options.",
        "name_ar": "موقد الأشعة تحت الحمراء 2200 واط",
        "desc_ar": "تسخين الدائرة الداخلية والخارجية، 9 مستويات، مؤقت 180 دقيقة، تحكم مزدوج باللمس والمقبض، إطار معدني، مناسب لجميع الأواني.",
        "name_es": "Cocina infrarroja de cerámica 2200W",
        "desc_es": "Calentamiento de círculo interior y exterior, 9 niveles, temporizador 180 min, doble control táctil y perilla, marco metálico, apta para todas las ollas.",
        "name_th": "เตาอินฟราเรดเซรามิก 2200W",
        "desc_th": "ระบบทำความร้อนวงในวงนอก ระดับความร้อน 9 ระดับ ตั้งเวลา 180 นาที ควบคุมแบบสัมผัสและปุ่มหมุน โครงโลหะ ใช้ได้กับหม้อทุกชนิด มี 2 สี",
        "specs": [
            {
                "k": "power",
                "v": "2200W",
    "featured": true
            },
            {
                "k": "voltage",
                "v": "AC 220-240V"
            },
            {
                "k": "gears",
                "v": "9 Heating Levels"
            },
            {
                "k": "timer",
                "v": "180 mins"
            },
            {
                "k": "control",
                "v": "Touch Control + Knob"
            },
            {
                "k": "panel",
                "v": "A+ Microcrystalline Panel"
            },
            {
                "k": "dimension",
                "v": "407 x 270 x 63 mm"
            },
            {
                "k": "structure",
                "v": "Metal Frame"
            },
            {
                "k": "colors",
                "v": "Black / Red (2 color options)"
            },
            {
                "k": "packaging",
                "v": "Gift 442x106x342 / Carton 555x462x367 mm, 5 pcs"
            },
            {
                "k": "container",
                "v": "20' 1500 / 40' 3300 / 40'HQ 3700 pcs"
            },
            {
                "k": "functions",
                "v": "Inner & outer circle heating, suitable for all pots"
            }
        ],
        "active": true
    },
    {
        "id": "wp-wq-x10",
        "cat": "infrared-cooker",
        "img": "images/products/wp-wq-x10.jpg",
        "model": "WQ-X10",
        "name_en": "2200W Infrared Cooker",
        "desc_en": "Universal voltage (AC 220-240V) infrared cooker, 2200W, 9 heating gears, 180-min timer, touch control, A+ microcrystal panel, approx. 2KG.",
        "name_ar": "موقد الأشعة تحت الحمراء 2200 واط",
        "desc_ar": "جهد عالمي، 2200 واط، 9 مستويات، مؤقت 180 دقيقة، تحكم باللمس، لوح A+، حوالي 2 كجم.",
        "name_es": "Cocina infrarroja 2200W",
        "desc_es": "Voltaje universal, 2200W, 9 niveles, temporizador 180 min, control táctil, panel A+, aprox. 2 kg.",
        "name_th": "เตาอินฟราเรด 2200W",
        "desc_th": "แรงดันสากล กำลังไฟ 2200W ระดับความร้อน 9 ระดับ ตั้งเวลา 180 นาที ควบคุมแบบสัมผัส แผ่น A+ น้ำหนักประมาณ 2 กก.",
        "specs": [
            {
                "k": "power",
                "v": "2200W"
            },
            {
                "k": "voltage",
                "v": "AC 220-240V"
            },
            {
                "k": "gears",
                "v": "9 Heating Gears"
            },
            {
                "k": "timer",
                "v": "180 mins"
            },
            {
                "k": "control",
                "v": "Touch"
            },
            {
                "k": "panel",
                "v": "A+ Microcrystal Panel"
            },
            {
                "k": "weight",
                "v": "Approx. 2 KG"
            },
            {
                "k": "dimension",
                "v": "280 x 360 x 57 mm"
            },
            {
                "k": "packaging",
                "v": "Gift 370x110x455 / Carton 605x465x420 mm, 5 pcs"
            },
            {
                "k": "container",
                "v": "20' 1400 / 40' 3000 / 40'HQ 3400 pcs"
            }
        ],
        "active": true
    },
    {
        "id": "wp-wq-x9",
        "cat": "infrared-cooker",
        "img": "images/products/wp-wq-x9.jpg",
        "model": "WQ-X9",
        "name_en": "2200W Infrared Cooker Electric Ceramic Hob",
        "desc_en": "2200W infrared ceramic hob, inner & outer circle heating, 9 heating levels, touch + knob control, A+ panel, plastic frame, approx. 2.2KG.",
        "name_ar": "موقد الأشعة تحت الحمراء 2200 واط",
        "desc_ar": "تسخين الدائرة الداخلية والخارجية، 9 مستويات، تحكم باللمس والمقبض، لوح A+، إطار بلاستيكي، 2.2 كجم.",
        "name_es": "Cocina infrarroja de cerámica 2200W",
        "desc_es": "Calentamiento de doble círculo, 9 niveles, control táctil y perilla, panel A+, marco plástico, aprox. 2,2 kg.",
        "name_th": "เตาอินฟราเรดเซรามิก 2200W",
        "desc_th": "ระบบทำความร้อนวงในวงนอก ระดับความร้อน 9 ระดับ ควบคุมแบบสัมผัสและปุ่มหมุน แผ่น A+ โครงพลาสติก น้ำหนักประมาณ 2.2 กก.",
        "specs": [
            {
                "k": "power",
                "v": "2200W"
            },
            {
                "k": "voltage",
                "v": "AC 220-240V"
            },
            {
                "k": "gears",
                "v": "9 Heating Levels"
            },
            {
                "k": "timer",
                "v": "180 mins"
            },
            {
                "k": "control",
                "v": "Touch Control + Knob"
            },
            {
                "k": "panel",
                "v": "A+ Microcrystalline Panel"
            },
            {
                "k": "structure",
                "v": "Plastic Frame"
            },
            {
                "k": "weight",
                "v": "Approx. 2.2 KG"
            },
            {
                "k": "dimension",
                "v": "356 x 283 x 63 mm"
            },
            {
                "k": "packaging",
                "v": "Gift 370x105x445 / Carton 555x465x394 mm, 5 pcs"
            },
            {
                "k": "container",
                "v": "20' 1500 / 40' 3300 / 40'HQ 3700 pcs"
            }
        ],
        "active": true
    },
    {
        "id": "wp-dbl-infrared",
        "cat": "infrared-cooker",
        "img": "images/products/wp-dbl-infrared.jpg",
        "model": "2 Burners Infrared",
        "name_en": "3400-3500W 2 Burners Infrared Cooker",
        "desc_en": "Double-burner infrared cooker, 3400-3500W, 10 heating gears, 180-min timer, touch & slide control, safety child lock, polished microcrystal glass, inverter function.",
        "name_ar": "موقد الأشعة تحت الحمراء ثنائي الموقد 3400-3500 واط",
        "desc_ar": "موقدان، 3400-3500 واط، 10 مستويات، مؤقت 180 دقيقة، تحكم باللمس والانزلاق، قفل أطفال، زجاج مصقول.",
        "name_es": "Cocina infrarroja de dos quemadores 3400-3500W",
        "desc_es": "Dos quemadores, 3400-3500W, 10 niveles, temporizador 180 min, control táctil y deslizante, bloqueo infantil, vidrio microcristalino pulido.",
        "name_th": "เตาอินฟราเรดสองหัว 3400-3500W",
        "desc_th": "สองหัวทำความร้อน กำลังไฟ 3400-3500W ระดับความร้อน 10 ระดับ ตั้งเวลา 180 นาที ควบคุมแบบสัมผัส ระบบล็อคเด็ก แผ่นแก้วขัดเงา",
        "specs": [
            {
                "k": "power",
                "v": "3400-3500W"
            },
            {
                "k": "voltage",
                "v": "AC 220-240V"
            },
            {
                "k": "gears",
                "v": "10 Heating Gears"
            },
            {
                "k": "timer",
                "v": "180 mins"
            },
            {
                "k": "control",
                "v": "Touch & Slide Control"
            },
            {
                "k": "panel",
                "v": "Polished Microcrystal Glass"
            },
            {
                "k": "dimension",
                "v": "588 x 340 x 65 mm"
            },
            {
                "k": "functions",
                "v": "Child lock, residual heat indicator, overflow protection, pause, keep-warm, inverter (imported IGBT)"
            }
        ],
        "active": true
    },
    {
        "id": "wp-wq-yd006",
        "cat": "coffee-tea-maker",
        "img": "images/products/wp-wq-yd006.jpg",
        "model": "WQ-YD006",
        "name_en": "Tea Extractor & Coffee Maker",
        "desc_en": "Tea extractor & coffee maker, 1320W, digital control with color screen, capsule coffee head, automatic water supply, 304 stainless steel tea infuser, multi-temperature control, boil-dry protection. MOQ 500 pcs.",
        "name_ar": "جهاز استخلاص الشاي وصنع القهوة",
        "desc_ar": "1320 واط، تحكم رقمي بشاشة ملونة، رأس قهوة كبسولات، تعبئة مياه تلقائية، مصفاة شاي من الفولاذ 304، تحكم متعدد الحرارة. الحد الأدنى 500 قطعة.",
        "name_es": "Extractor de té y cafetera",
        "desc_es": "1320W, control digital con pantalla a color, cabezal de café en cápsulas, suministro automático de agua, infusor de acero 304, control multi-temperatura. MOQ 500 uds.",
        "name_th": "เครื่องสกัดชาและชงกาแฟ",
        "desc_th": "กำลังไฟ 1320W จอสีแสดงผลแบบดิจิทัล หัวชงกาแฟแบบแคปซูล ระบบเติมน้ำอัตโนมัติ ตะแกรงชาสแตนเลส 304 ควบคุมอุณหภูมิหลายระดับ MOQ 500 ชิ้น",
        "specs": [
            {
                "k": "power",
                "v": "220-240V 50Hz 1320W",
    "featured": true
            },
            {
                "k": "dimension",
                "v": "270 x 205 x 345 mm"
            },
            {
                "k": "moq",
                "v": "500 pcs"
            },
            {
                "k": "packaging",
                "v": "Gift/Carton 491x287x270 mm, 1 pc"
            },
            {
                "k": "container",
                "v": "20' 640 / 40' 1312 / 40'HQ 1640 pcs"
            },
            {
                "k": "functions",
                "v": "Color screen display, capsule coffee head, automatic water supply, 304 stainless infuser, keep warm, multi-temperature, boil-dry protection, one-click coffee extraction"
            }
        ],
        "active": true
    },
    {
        "id": "wp-tea-auto",
        "cat": "tea-extractor",
        "img": "images/products/wp-tea-auto.jpg",
        "model": "Automatic Tea Maker",
        "name_en": "Automatic Tea Maker 1200W",
        "desc_en": "Automatic tea maker, 1200W fast boiling, reverse-flow spray extraction, pure titanium tea infuser & heating plate, 800ml upper kettle + 600ml fair cup, dual-layer keep warm, dry-burn protection. MOQ 500 pcs.",
        "name_ar": "صانع شاي أوتوماتيكي 1200 واط",
        "desc_ar": "غلي سريع 1200 واط، استخلاص رش عكسي، مصفاة ولوح تسخين من التيتانيوم النقي، غلاية 800 مل + كوب 600 مل، حافظ حرارة مزدوج. الحد الأدنى 500 قطعة.",
        "name_es": "Máquina de té automática 1200W",
        "desc_es": "Hervido rápido 1200W, extracción por rociado inverso, infusor de titanio puro, tetera 800 ml + taza 600 ml, doble conservación de calor. MOQ 500 uds.",
        "name_th": "เครื่องชงชาอัตโนมัติ 1200W",
        "desc_th": "ต้มเร็ว 1200W ระบบสกัดแบบพ่นย้อนกลับ ตะแกรงชาและแผ่นทำความร้อนไทเทเนียมบริสุทธิ์ กาต้มน้ำ 800ml + ถ้วย 600ml เก็บความร้อน 2 ชั้น MOQ 500 ชิ้น",
        "specs": [
            {
                "k": "power",
                "v": "220-240V 50Hz 1200W"
            },
            {
                "k": "dimension",
                "v": "198 x 187 x 313 mm"
            },
            {
                "k": "capacity",
                "v": "Upper kettle 800 ml / Fair cup 600 ml"
            },
            {
                "k": "moq",
                "v": "500 pcs"
            },
            {
                "k": "packaging",
                "v": "491x287x270 mm, 1 pc"
            },
            {
                "k": "container",
                "v": "20' 640 / 40' 1312 / 40'HQ 1640 pcs"
            },
            {
                "k": "functions",
                "v": "Reverse-flow spray extraction, automatic bottom water supply, pure titanium infuser, 12 wellness functions, dual-layer keep warm, dry-burn protection, food-grade borosilicate glass"
            }
        ],
        "active": true
    },
    {
        "id": "wp-tea-steam",
        "cat": "tea-extractor",
        "img": "images/products/wp-tea-steam.jpg",
        "model": "Steam Spray Tea Maker",
        "name_en": "Automatic Tea Maker (Steam Spray)",
        "desc_en": "Steam spray tea brewer & sterilizer, dual power 600W sterilization + 1200W tea extraction, automatic dual-bottom water supply, pure titanium components, 800ml + 600ml, dry-burn protection.",
        "name_ar": "صانع شاي بالبخار",
        "desc_ar": "قوة مزدوجة 600 واط تعقيم + 1200 واط استخلاص، تعبئة مياه تلقائية، مكونات تيتانيوم نقي، 800 مل + 600 مل، حماية من الاحتراق.",
        "name_es": "Tetera de vapor automática",
        "desc_es": "Doble potencia: 600W esterilización + 1200W extracción, suministro automático de agua, componentes de titanio puro, 800 ml + 600 ml, protección contra quemado en seco.",
        "name_th": "เครื่องชงชาไอน้ำ",
        "desc_th": "กำลังคู่ 600W ฆ่าเชื้อ + 1200W สกัดชา ระบบเติมน้ำอัตโนมัติ ชิ้นส่วนไทเทเนียมบริสุทธิ์ 800ml + 600ml ระบบป้องกันการเผาแห้ง",
        "specs": [
            {
                "k": "power",
                "v": "600W sterilization + 1200W tea extraction"
            },
            {
                "k": "dimension",
                "v": "370 x 195 x 310 mm"
            },
            {
                "k": "capacity",
                "v": "Upper kettle 800 ml / Fair cup 600 ml"
            },
            {
                "k": "functions",
                "v": "Dual power system, automatic dual-bottom water supply, reverse-flow steam spray extraction, customizable water level, smart digital display, dual-layer keep warm, dry-burn & overheat protection, pure titanium infuser, food-grade borosilicate glass"
            }
        ],
        "active": true
    },
    {
        "id": "wp-builtin-5200",
        "cat": "induction-cooker",
        "img": "images/products/wp-builtin-5200.jpg",
        "model": "Built-in 5200W",
        "name_en": "5200W Built-in Induction Cooker",
        "desc_en": "Built-in induction cooker, 5200W high power with boost function, 9 heating gears, 180-min timer, touch & slide control, safety child lock, residual heat indicator, overflow protection, noise less than 60 dB.",
        "name_ar": "موقد حثي مدمج 5200 واط",
        "desc_ar": "5200 واط مع وظيفة التعزيز، 9 مستويات، مؤقت 180 دقيقة، تحكم باللمس والانزلاق، قفل أطفال، مؤشر الحرارة المتبقية، حماية الفائض، ضوضاء أقل من 60 ديسيبل.",
        "name_es": "Cocina de inducción integrada 5200W",
        "desc_es": "5200W con función boost, 9 niveles, temporizador 180 min, control táctil y deslizante, bloqueo infantil, indicador de calor residual, protección de desbordamiento, ruido < 60 dB.",
        "name_th": "เตาแม่เหล็กไฟฟ้าแบบบิลท์อิน 5200W",
        "desc_th": "กำลังไฟ 5200W ฟังก์ชันบูสต์ ระดับความร้อน 9 ระดับ ตั้งเวลา 180 นาที ควบคุมแบบสัมผัสและสไลด์ ระบบล็อคเด็ก เสียงน้อยกว่า 60 เดซิเบล",
        "specs": [
            {
                "k": "power",
                "v": "5200W",
    "featured": true
            },
            {
                "k": "voltage",
                "v": "AC 220-240V, 50/60Hz"
            },
            {
                "k": "gears",
                "v": "9 Levels"
            },
            {
                "k": "timer",
                "v": "180 Minutes"
            },
            {
                "k": "control",
                "v": "Touch & Slide Control"
            },
            {
                "k": "panel",
                "v": "Polished Microcrystal Glass"
            },
            {
                "k": "dimension",
                "v": "730 x 430 x 62 mm"
            },
            {
                "k": "weight",
                "v": "Approx. 7.0 KG"
            },
            {
                "k": "packaging",
                "v": "1 pc"
            },
            {
                "k": "container",
                "v": "20' 532 / 40' 1064 / 40'HQ 1176 pcs"
            },
            {
                "k": "functions",
                "v": "Boost function, safety child lock, residual heat indicator, overflow protection, pause, keep-warm, noise < 60 dB, inverter with imported IGBT, all cookware compatible"
            }
        ],
        "active": true
    },
    {
        "id": "wp-builtin-double",
        "cat": "induction-cooker",
        "img": "images/products/wp-builtin-double.jpg",
        "model": "Built-in Double Burner",
        "name_en": "Built-in Double Burner Induction Cooker 3500W",
        "desc_en": "Built-in double-burner induction cooker, 1500W + 2000W, 9 heating gears, 180-min timer, touch control, A+ microcrystal panel, 4.77KG, cut-out 268x500mm.",
        "name_ar": "موقد حثي مدمج ثنائي الموقد 3500 واط",
        "desc_ar": "1500 واط + 2000 واط، 9 مستويات، مؤقت 180 دقيقة، تحكم باللمس، لوح A+، 4.77 كجم، فتحة 268×500 ملم.",
        "name_es": "Cocina de inducción integrada de dos quemadores 3500W",
        "desc_es": "1500W + 2000W, 9 niveles, temporizador 180 min, control táctil, panel A+, 4,77 kg, recorte 268x500 mm.",
        "name_th": "เตาแม่เหล็กไฟฟ้าแบบบิลท์อินสองหัว 3500W",
        "desc_th": "1500W + 2000W ระดับความร้อน 9 ระดับ ตั้งเวลา 180 นาที ควบคุมแบบสัมผัส แผ่น A+ น้ำหนัก 4.77 กก. ขนาดตัดช่อง 268x500 มม.",
        "specs": [
            {
                "k": "power",
                "v": "1500W + 2000W"
            },
            {
                "k": "voltage",
                "v": "AC 220-240V, 50/60Hz"
            },
            {
                "k": "gears",
                "v": "9 Levels"
            },
            {
                "k": "timer",
                "v": "180 Minutes"
            },
            {
                "k": "control",
                "v": "Touch Control"
            },
            {
                "k": "panel",
                "v": "A+ Microcrystal Panel + Plastic Frame"
            },
            {
                "k": "dimension",
                "v": "290 x 520 x 62 mm"
            },
            {
                "k": "cutout",
                "v": "268 x 500 mm"
            },
            {
                "k": "weight",
                "v": "Approx. 4.77 KG"
            },
            {
                "k": "packaging",
                "v": "Carton 600x330x115 mm, 1 pc"
            },
            {
                "k": "container",
                "v": "20' 1140 / 40' 2280 / 40'HQ 2639 pcs"
            },
            {
                "k": "functions",
                "v": "Inverter with imported IGBT, noise < 60 dB"
            }
        ],
        "active": true
    },
  ],

  testimonials: [],

  milestones: [
    {
      id: "m1", year: "2008",
      title_en: "Xinke founded — PCBA roots", title_ar: "تأسيس Xinke — جذور PCBA", title_es: "Fundación de Xinke — raíces en PCBA", title_th: "ก่อตั้ง Xinke — จุดเริ่มต้น PCBA",
      desc_en: "Xinke factory established in Foshan as a PCBA manufacturer, the technology backbone of the group.", desc_ar: "تأسس مصنع Xinke في فوشان كمصنع للوحات PCBA، العمود الفقري التقني للمجموعة.", desc_es: "La fábrica Xinke se establece en Foshan como fabricante de PCBA, la columna vertebral tecnológica del grupo.", desc_th: "โรงงาน Xinke ก่อตั้งที่เมืองฝอซานในฐานะผู้ผลิต PCBA ซึ่งเป็นแกนหลักด้านเทคนิคของกลุ่ม"
    },
    {
      id: "m2", year: "2015",
      title_en: "Wechgood Appliance founded", title_ar: "تأسيس Wechgood", title_es: "Fundación de Wechgood", title_th: "ก่อตั้ง Wechgood",
      desc_en: "Wechgood established in Foshan to assemble induction cookers for domestic and export markets.", desc_ar: "تأسست Wechgood في فوشان لتجميع مواقد الحث للأسواق المحلية والتصدير.", desc_es: "Wechgood se establece en Foshan para ensamblar cocinas de inducción para los mercados nacional y de exportación.", desc_th: "Wechgood ก่อตั้งที่ฝอซานเพื่อประกอบเตาแม่เหล็กไฟฟ้าสำหรับตลาดภายในและส่งออก"
    },
    {
      id: "m3", year: "2018",
      title_en: "Own factory & first top-brand partnership", title_ar: "مصنعنا الخاص وأول شراكة مع علامة رائدة", title_es: "Fábrica propia y primera gran alianza", title_th: "โรงงานของเราเองและพันธมิตรแบรนด์แรก",
      desc_en: "Became a long-term OEM partner of Joyoung and purchased our own 18,000+ m² factory building.", desc_ar: "أصبحنا شريك OEM طويل الأمد لشركة Joyoung واشترينا مبنى مصنعنا الخاص بمساحة 18,000+ م2.", desc_es: "Nos convertimos en socio OEM a largo plazo de Joyoung y compramos nuestro propio edificio de fábrica de más de 18.000 m².", desc_th: "เรากลายเป็นพันธมิตร OEM ระยะยาวของ Joyoung และซื้ออาคารโรงงานของเราเองขนาด 18,000+ ตร.ม."
    },
    {
      id: "m4", year: "2021",
      title_en: "Top-brand OEM/ODM partnerships", title_ar: "شراكات OEM/ODM مع علامات رائدة", title_es: "Alianzas OEM/ODM con grandes marcas", title_th: "พันธมิตร OEM/ODM แบรนด์ชั้นนำ",
      desc_en: "Serving Mi, Haier, Royalstar, ASD and Airmate as a trusted source factory.", desc_ar: "نخدم Mi وHaier وRoyalstar وASD وAirmate كمصنع مصدر موثوق.", desc_es: "Damos servicio a Mi, Haier, Royalstar, ASD y Airmate como fábrica de origen de confianza.", desc_th: "ให้บริการ Mi, Haier, Royalstar, ASD และ Airmate ในฐานะโรงงานต้นทางที่เชื่อถือได้"
    },
    {
      id: "m5", year: "2022",
      title_en: "North America & Oceania", title_ar: "أمريكا الشمالية وأوقيانوسيا", title_es: "Norteamérica y Oceanía", title_th: "อเมริกาเหนือและโอเชียเนีย",
      desc_en: "CE and RoHS certified; certifications for target markets available on request.", desc_ar: "معتمد CE وRoHS؛ شهادات الأسواق المستهدفة متاحة عند الطلب.", desc_es: "Certificado CE y RoHS; certificaciones para los mercados objetivo disponibles bajo petición.", desc_th: "ได้รับการรับรอง CE และ RoHS; ใบรับรองสำหรับตลาดเป้าหมายสามารถขอได้"
    },
    {
      id: "m6", year: "2025",
      title_en: "40+ countries served", title_ar: "أكثر من 40 دولة", title_es: "Más de 40 países", title_th: "ให้บริการ 40+ ประเทศ",
      desc_en: "200+ models shipped to importers and distributors worldwide.", desc_ar: "أكثر من 200 موديل شُحنت إلى مستوردين وموزعين حول العالم.", desc_es: "Más de 200 modelos enviados a importadores y distribuidores en todo el mundo.", desc_th: "ส่งออก 200+ รุ่นให้ผู้นำเข้าและตัวแทนจำหน่ายทั่วโลก"
    }
  ],

  qcSteps: [
    {
      id: "q1", icon: "inspect",
      title_en: "Incoming inspection", title_ar: "فحص المواد الواردة", title_es: "Inspección de entrada", title_th: "ตรวจสอบวัตถุดิบขาเข้า",
      desc_en: "Every batch of raw material and components is checked against our supplier standard.", desc_ar: "كل دفعة مواد خام ومكونات تُفحص وفق معيار موردينا.", desc_es: "Cada lote de materia prima y componentes se verifica según nuestro estándar de proveedores.", desc_th: "ตรวจวัตถุดิบและชิ้นส่วนทุกชุดตามมาตรฐานซัพพลายเออร์"
    },
    {
      id: "q2", icon: "lineqc",
      title_en: "In-line QC", title_ar: "فحص أثناء الخط", title_es: "Control en línea", title_th: "ตรวจระหว่างสายการผลิต",
      desc_en: "Station checks every 10 units during assembly, covering wiring, screws and fittings.", desc_ar: "فحص محطات كل 10 وحدات أثناء التجميع يغطي الأسلاك والبراغي والتركيبات.", desc_es: "Controles de estación cada 10 unidades durante el ensamblaje: cableado, tornillos y ajustes.", desc_th: "ตรวจทุก 10 ชิ้นระหว่างประกอบ ครอบคลุมสายไฟ สกรู และชิ้นส่วน"
    },
    {
      id: "q3", icon: "aging",
      title_en: "Aging test", title_ar: "اختبار التشغيل المستمر", title_es: "Prueba de envejecimiento", title_th: "ทดสอบการใช้งานต่อเนื่อง",
      desc_en: "Finished units run continuously for 2-4 hours to catch early failures before packing.", desc_ar: "الوحدات النهائية تعمل باستمرار 2-4 ساعات لكشف الأعطال المبكرة قبل التغليف.", desc_es: "Las unidades terminadas funcionan 2-4 horas seguidas para detectar fallos tempranos antes del embalaje.", desc_th: "ทดสอบเดินเครื่องต่อเนื่อง 2-4 ชั่วโมงเพื่อจับข้อบกพร่องก่อนบรรจุ"
    },
    {
      id: "q4", icon: "final",
      title_en: "Final inspection", title_ar: "الفحص النهائي", title_es: "Inspección final", title_th: "ตรวจขั้นสุดท้าย",
      desc_en: "AQL 1.5 sampling on appearance, functions and safety before carton sealing.", desc_ar: "عينات AQL 1.5 للمظهر والوظائف والسلامة قبل إغلاق الكرتون.", desc_es: "Muestreo AQL 1.5 de apariencia, funciones y seguridad antes del sellado.", desc_th: "สุ่มตรวจ AQL 1.5 ด้านรูปลักษณ์ ฟังก์ชัน และความปลอดภัยก่อนปิดกล่อง"
    },
    {
      id: "q5", icon: "pack",
      title_en: "Packing & loading check", title_ar: "فحص التغليف والتحميل", title_es: "Control de embalaje y carga", title_th: "ตรวจบรรจุภัณฑ์และการโหลดตู้",
      desc_en: "Drop test, carton printing check and container loading photos for every shipment.", desc_ar: "اختبار السقوط وفحص طباعة الكرتون وصور تحميل الحاوية لكل شحنة.", desc_es: "Prueba de caída, verificación de impresión de cajas y fotos de carga para cada envío.", desc_th: "ทดสอบการตก ตรวจลายพิมพ์กล่อง และถ่ายรูปการโหลดตู้ทุกเที่ยว"
    }
  ],

  oemPoints: [
    {
      id: "o1", icon: "tag",
      title_en: "Private label & logo", title_ar: "علامة خاصة وشعار", title_es: "Marca propia y logotipo", title_th: "แบรนด์ส่วนตัวและโลโก้",
      desc_en: "Your brand on the product, carton and manual. Silkscreen or sticker logo at your choice.", desc_ar: "علامتك على المنتج والكرتون والدليل. شعار بالطباعة أو الملصق حسب اختيارك.", desc_es: "Tu marca en el producto, caja y manual. Logotipo serigrafiado o en pegatina.", desc_th: "แบรนด์ของคุณบนสินค้า กล่อง และคู่มือ เลือกโลโก้แบบพิมพ์หรือสติกเกอร์"
    },
    {
      id: "o2", icon: "palette",
      title_en: "Custom color & panel design", title_ar: "لون وتصميم لوحة مخصص", title_es: "Color y panel personalizados", title_th: "สีและดีไซน์แผงควบคุมตามต้องการ",
      desc_en: "Color options and control panel layouts adapted to your market preferences.", desc_ar: "خيارات ألوان وتصاميم لوحة تحكم تتوافق مع تفضيلات سوقك.", desc_es: "Opciones de color y diseños de panel adaptados a tu mercado.", desc_th: "ตัวเลือกสีและรูปแบบแผงควบคุมตามความนิยมของตลาดคุณ"
    },
    {
      id: "o3", icon: "plug",
      title_en: "Voltage & plug per market", title_ar: "جهد وقابس حسب السوق", title_es: "Voltaje y enchufe por mercado", title_th: "แรงดันไฟและปลั๊กตามตลาด",
      desc_en: "110V / 220-240V, US, EU, UK, AU and Middle East plugs, with local certifications support.", desc_ar: "110V / 220-240V وقوابس أمريكية وأوروبية وبريطانية وأسترالية وشرق أوسطية مع دعم الشهادات المحلية.", desc_es: "110V / 220-240V, enchufes US, EU, UK, AU y de Oriente Medio, con soporte de certificaciones locales.", desc_th: "110V / 220-240V ปลั๊กอเมริกา ยุโรป อังกฤษ ออสเตรเลีย ตะวันออกกลาง พร้อมสนับสนุนใบรับรองท้องถิ่น"
    },
    {
      id: "o4", icon: "box",
      title_en: "Custom packaging & manual", title_ar: "تغليف ودليل مخصص", title_es: "Embalaje y manual personalizados", title_th: "บรรจุภัณฑ์และคู่มือตามต้องการ",
      desc_en: "Carton size, printing and multilingual manuals made for your market.", desc_ar: "حجم الكرتون والطباعة وأدلة متعددة اللغات لسوقك.", desc_es: "Tamaño de caja, impresión y manuales multilingües para tu mercado.", desc_th: "ขนาดกล่อง ลายพิมพ์ และคู่มือหลายภาษาสำหรับตลาดคุณ"
    },
    {
      id: "o5", icon: "layers",
      title_en: "Small MOQ to start", title_ar: "حد أدنى صغير للبدء", title_es: "MOQ bajo para empezar", title_th: "MOQ ต่ำสำหรับการเริ่มต้น",
      desc_en: "From 500 pcs per model for private label, growing with your order history.", desc_ar: "من 500 قطعة لكل موديل للعلامة الخاصة، ويزيد مع تاريخ طلباتك.", desc_es: "Desde 500 unidades por modelo para marca propia, creciendo con tu historial.", desc_th: "เริ่ม 500 ชิ้นต่อรุ่นสำหรับแบรนด์ส่วนตัว เพิ่มตามประวัติออเดอร์"
    },
    {
      id: "o6", icon: "mold",
      title_en: "Sample & mold service", title_ar: "خدمة العينات والقوالب", title_es: "Servicio de muestras y moldes", title_th: "บริการตัวอย่างและแม่พิมพ์",
      desc_en: "Stock samples in 2-3 days, custom samples in about 7 days, new mold development on request.", desc_ar: "عينات جاهزة خلال 2-3 أيام، وعينات مخصصة خلال 7 أيام، وتطوير قوالب جديدة عند الطلب.", desc_es: "Muestras en stock en 2-3 días, personalizadas en unos 7 días y desarrollo de nuevos moldes bajo petición.", desc_th: "ตัวอย่างสต็อก 2-3 วัน ตัวอย่างสั่งทำประมาณ 7 วัน พัฒนาแม่พิมพ์ใหม่ตามคำขอ"
    }
  ],

  certs: [
    { id: "c1", mark: "CE", name: "CE", scope: "EU LVD 2014/35/EU + EMC 2014/30/EU (2025)" },
    { id: "c2", mark: "RoHS", name: "RoHS", scope: "EU RoHS 2011/65/EU + (EU) 2015/863 \u00b7 Cert. No. CCI251100448ENCER (Nov 2025)" },
    { id: "c9", mark: "ErP", name: "ErP", scope: "Standby & off-mode (EC 1275/2008)" },
    { id: "c10", mark: "UKCA", name: "UKCA", scope: "UK Electrical Equipment (Safety) Regs 2016" }
  ]
};

/* ================= storage helpers ================= */
/* Supabase backend: site data + inquiries live in a remote PostgreSQL database. */
const SUPABASE_URL = "https://zmhvarnrdnsimkkhrlol.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptaHZhcm5yZG5zaW1ra2hybG9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwMjMwNzAsImV4cCI6MjEwMjU5OTA3MH0.AIEkHsNaNO1MRkGdIbhHGdUqvMtcMg1KJfqpFDnkYiU";

let _sb = null;
function sb() {
  if (_sb) return _sb;
  if (window.supabase) _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
  return _sb;
}

let _cache = { site: null, inquiries: null };
let _initPromise = null;

function deepMerge(base, extra) {
  if (extra === null || extra === undefined) return base;
  if (typeof extra !== "object") return extra;
  if (Array.isArray(extra)) return extra;
  var out = {};
  var k;
  for (k in base) out[k] = base[k];
  for (k in extra) {
    if (out[k] && typeof out[k] === "object" && typeof extra[k] === "object" && !Array.isArray(out[k]) && !Array.isArray(extra[k])) {
      out[k] = deepMerge(out[k], extra[k]);
    } else {
      out[k] = extra[k];
    }
  }
  return out;
}

function initStore() {
  if (_initPromise) return _initPromise;
  _initPromise = (function () {
    return Promise.resolve().then(function () {
      _cache.site = JSON.parse(JSON.stringify(DEFAULT_DATA));
      _cache.inquiries = [];
      var c = sb();
      if (!c) return _cache;
      return c.from("site_data").select("data").eq("id", 1).maybeSingle().then(function (r) {
        if (r && r.data && r.data.data && Object.keys(r.data.data).length) {
          _cache.site = deepMerge(DEFAULT_DATA, r.data.data);
        } else {
          c.from("site_data").upsert({ id: 1, data: _cache.site }).then(function () {}, function () {});
        }
        return _cache;
      }).catch(function () { return _cache; });
    });
  })();
  return _initPromise;
}

const store = {
  loadSite: function () {
    return _cache.site || JSON.parse(JSON.stringify(DEFAULT_DATA));
  },
  saveSite: function (data) {
    _cache.site = data;
    var c = sb();
    if (c) { c.from("site_data").upsert({ id: 1, data: data }).then(function () {}, function () {}); }
  },
  resetSite: function () {
    var d = JSON.parse(JSON.stringify(DEFAULT_DATA));
    store.saveSite(d);
  },
  loadInquiries: function () {
    return _cache.inquiries || [];
  },
  saveInquiries: function (list) {
    _cache.inquiries = list;
  },
  fetchInquiries: function () {
    var c = sb();
    if (!c) return Promise.resolve([]);
    return c.from("inquiries").select("*").order("created_at", { ascending: false }).then(function (r) {
      _cache.inquiries = (r && r.data) || [];
      return _cache.inquiries;
    }).catch(function () { return _cache.inquiries || []; });
  },
  insertInquiry: function (q) {
    var c = sb();
    if (c) { c.from("inquiries").insert(q).then(function () {}, function () {}); }
  },
  markInquiryRead: function (id, read) {
    var c = sb();
    if (c) { c.from("inquiries").update({ read: read }).eq("id", id).then(function () {}, function () {}); }
  },
  deleteInquiry: function (id) {
    var c = sb();
    if (c) { c.from("inquiries").delete().eq("id", id).then(function () {}, function () {}); }
  }
};

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
