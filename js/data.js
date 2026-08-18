/* ==========================================================================
   data.js - seed content + localStorage persistence
   The admin panel (admin.html) edits this data via localStorage.
   Public pages read through store.loadSite() and fall back to DEFAULT_DATA.
   ========================================================================== */

const DEFAULT_DATA = {
  settings: {
    brand: "Foshan NovaHome Appliance",
    slogan: "Power your comfortable daily life",
    phone: "+86 757 8888 6666",
    whatsapp: "8615788886666",
    email: "sales@novahome-appliance.com",
    address: "No. 88 Huaxia Road, Ronggui, Shunde, Foshan, Guangdong, China",
    hours: "Monday - Saturday, 9:00 - 18:00 (GMT+8)",
    mapQuery: "Ronggui, Shunde, Foshan, Guangdong, China",
    analyticsId: "",
    tawkId: "",
    fbpixelId: "",
    aiApiKey: "",
    aiApiBase: "https://open.bigmodel.cn/api/paas/v4",
    aiModel: "glm-4v-plus",
    crmWebhook: "",
    crmWebhookType: "generic",
    samplePayLink: "",
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
      sub_en: "Factory-direct wholesale electric household appliances from China: induction cookers, hair dryers, razors, fans and heaters, exported to 40+ countries.",
      sub_ar: "أجهزة كهربائية منزلية مباشرة من المصنع الصيني: مواقد حث، مجففات شعر، أدوات حلاقة، مراوح ودفايات، مصدَّرة إلى أكثر من 40 دولة.",
      sub_es: "Electrodomésticos directos de fábrica desde China: cocinas de inducción, secadores, afeitadoras, ventiladores y calefactores, exportados a más de 40 países.",
      sub_th: "เครื่องใช้ไฟฟ้าจากโรงงานจีนโดยตรง: เตาแม่เหล็กไฟฟ้า ไดร์เป่าผม มีดโกนหนวด พัดลม เครื่องทำความร้อน ส่งออกกว่า 40 ประเทศ"
    },
    {
      id: "s2",
      img: "images/hero-line.jpg",
      title_en: "Quality you can trace back to the source",
      title_ar: "جودة يمكنك تتبعها حتى المصدر",
      title_es: "Calidad que puedes rastrear hasta el origen",
      title_th: "คุณภาพที่ตรวจสอบย้อนกลับถึงต้นทางได้",
      sub_en: "Five production lines, 200+ skilled workers and a four-step QC system on every single batch.",
      sub_ar: "خمسة خطوط إنتاج، أكثر من 200 عامل ماهر، ونظام جودة من أربع خطوات لكل دفعة.",
      sub_es: "Cinco líneas de producción, más de 200 trabajadores cualificados y un sistema de control de calidad en cuatro pasos en cada lote.",
      sub_th: "สายการผลิต 5 สาย พนักงานฝีมือดีกว่า 200 คน และระบบ QC 4 ขั้นตอนในทุกชุดการผลิต"
    },
    {
      id: "s3",
      img: "images/hero-kitchen.jpg",
      title_en: "One factory, five product lines",
      title_ar: "مصنع واحد، خمسة خطوط منتجات",
      title_es: "Una fábrica, cinco líneas de producto",
      title_th: "โรงงานเดียว สายผลิตภัณฑ์ 5 สาย",
      sub_en: "From kitchen to bathroom to bedroom comfort, your entire home appliance program from a single supplier.",
      sub_ar: "من المطبخ إلى الحمام إلى راحة غرفة النوم، برنامج أجهزتك المنزلية كاملاً من مورّد واحد.",
      sub_es: "De la cocina al baño y al confort del dormitorio, todo tu programa de electrodomésticos con un solo proveedor.",
      sub_th: "ตั้งแต่ห้องครัว ห้องน้ำ ถึงความสบายในห้องนอน โปรแกรมเครื่องใช้ไฟฟ้าทั้งหมดจากซัพพลายเออร์เดียว"
    }
  ],

  advantages: [
    {
      id: "a1",
      icon: "factory",
      title_en: "15+ years of manufacturing",
      title_ar: "أكثر من 15 عاماً من التصنيع",
      title_es: "Más de 15 años de fabricación",
      title_th: "ประสบการณ์ผลิตกว่า 15 ปี",
      desc_en: "A real factory in Foshan, China, built by engineers and export people who have worked with importers since day one.",
      desc_ar: "مصنع حقيقي في فوشان بالصين، أسسه مهندسون وخبراء تصدير عملوا مع المستوردين منذ اليوم الأول.",
      desc_es: "Una fábrica real en Foshan (China), construida por ingenieros y personal de exportación que trabajan con importadores desde el primer día.",
      desc_th: "โรงงานจริงในเมืองฝอซาน ประเทศจีน ก่อตั้งโดยวิศวกรและทีมส่งออกที่ทำงานกับผู้นำเข้ามาตั้งแต่วันแรก",
      stat1_en: "15+ years", stat1_ar: "+15 عاماً", stat1_es: "+15 años", stat1_th: "15+ ปี",
      stat2_en: "200+ workers", stat2_ar: "+200 عامل", stat2_es: "+200 trabajadores", stat2_th: "200+ คน"
    },
    {
      id: "a2",
      icon: "shield",
      title_en: "Certified for your market",
      title_ar: "معتمد لسوقك",
      title_es: "Certificado para tu mercado",
      title_th: "ได้มาตรฐานสำหรับตลาดของคุณ",
      desc_en: "CE, RoHS, CB, ETL, SAA and ISO 9001. Products are tested to the standards of the markets we ship to.",
      desc_ar: "CE وRoHS وCB وETL وSAA وISO 9001. المنتجات مجرّبة وفق معايير الأسواق التي نشحن إليها.",
      desc_es: "CE, RoHS, CB, ETL, SAA e ISO 9001. Los productos se prueban según los estándares de los mercados a los que enviamos.",
      desc_th: "CE, RoHS, CB, ETL, SAA และ ISO 9001 สินค้าผ่านการทดสอบตามมาตรฐานของตลาดที่เราส่งออก",
      stat1_en: "CE · RoHS · CB", stat1_ar: "CE · RoHS · CB", stat1_es: "CE · RoHS · CB", stat1_th: "CE · RoHS · CB",
      stat2_en: "ETL · SAA · ISO9001", stat2_ar: "ETL · SAA · ISO9001", stat2_es: "ETL · SAA · ISO9001", stat2_th: "ETL · SAA · ISO9001"
    },
    {
      id: "a3",
      icon: "gear",
      title_en: "OEM / ODM flexibility",
      title_ar: "مرونة OEM / ODM",
      title_es: "Flexibilidad OEM / ODM",
      title_th: "ความยืดหยุ่น OEM / ODM",
      desc_en: "Your logo, your colors, your voltage, your packaging. Private label programs from 300 pcs per model.",
      desc_ar: "شعارك، ألوانك، جهدك، تغليفك. برامج علامة خاصة تبدأ من 300 قطعة للموديل.",
      desc_es: "Tu logotipo, tus colores, tu voltaje, tu embalaje. Programas de marca propia desde 300 unidades por modelo.",
      desc_th: "โลโก้ของคุณ สีของคุณ แรงดันไฟของคุณ บรรจุภัณฑ์ของคุณ โปรแกรมแบรนด์ส่วนตัวเริ่มต้น 300 ชิ้นต่อรุ่น",
      stat1_en: "MOQ from 300 pcs", stat1_ar: "الحد الأدنى 300 قطعة", stat1_es: "MOQ desde 300 uds.", stat1_th: "MOQ เริ่ม 300 ชิ้น",
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
      desc_en: "Start with 300 pcs per model and scale up as your market grows.",
      desc_ar: "ابدأ بـ 300 قطعة لكل موديل وزد الكمية مع نمو سوقك.",
      desc_es: "Empieza con 300 unidades por modelo y escala según crezca tu mercado.",
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
    { id: "st1", num: "15", suffix: "+", label_en: "Years of manufacturing", label_ar: "سنة تصنيع", label_es: "Años de fabricación", label_th: "ปีผลิต" },
    { id: "st2", num: "40", suffix: "+", label_en: "Countries served", label_ar: "دولة", label_es: "Países servidos", label_th: "ประเทศ" },
    { id: "st3", num: "500", suffix: "+", label_en: "Product models", label_ar: "موديل", label_es: "Modelos", label_th: "รุ่นสินค้า" },
    { id: "st4", num: "12", suffix: "h", label_en: "Reply commitment", label_ar: "ساعة للرد", label_es: "Horas de respuesta", label_th: "ชั่วโมงตอบกลับ" }
  ],

  categories: [
    { id: "induction-cooker", img: "images/cat-induction.jpg", name_en: "Induction Cookers", name_ar: "مواقد الحث", name_es: "Cocinas de inducción", name_th: "เตาแม่เหล็กไฟฟ้า" },
    { id: "hair-dryer", img: "images/cat-dryer.jpg", name_en: "Hair Dryers", name_ar: "مجففات الشعر", name_es: "Secadores de pelo", name_th: "ไดร์เป่าผม" },
    { id: "fan", img: "images/cat-fan.jpg", name_en: "Electric Fans", name_ar: "المراوح", name_es: "Ventiladores", name_th: "พัดลม" },
    { id: "heater", img: "images/cat-heater.jpg", name_en: "Heaters", name_ar: "الدفايات", name_es: "Calefactores", name_th: "เครื่องทำความร้อน" },
    { id: "razor", img: "images/cat-razor.jpg", name_en: "Razors", name_ar: "أدوات الحلاقة", name_es: "Afeitadoras", name_th: "มีดโกนหนวด" }
  ],

  products: [
    {
      id: "p1", cat: "induction-cooker", img: "images/cat-induction.jpg", featured: true, badge_en: "Hot", badge_ar: "الأكثر طلباً", badge_es: "Popular", badge_th: "ขายดี",
      name_en: "Portable Induction Cooker 2000W", name_ar: "موقد حث محمول 2000 واط", name_es: "Cocina de inducción portátil 2000W", name_th: "เตาแม่เหล็กไฟฟ้าแบบพกพา 2000W",
      desc_en: "Our best-selling portable cooker with a black ceramic glass top, 8 power levels and 1-180 minute timer.",
      desc_ar: "أكثر مواقدنا مبيعاً بسطح زجاجي سيراميك أسود، 8 مستويات قدرة ومؤقت من 1 إلى 180 دقيقة.",
      desc_es: "Nuestra cocina portátil más vendida con superficie de vitrocerámica negra, 8 niveles de potencia y temporizador de 1-180 minutos.",
      desc_th: "เตาแบบพกพาขายดีที่สุด กระจกเซรามิกดำ 8 ระดับกำลังไฟ ตั้งเวลา 1-180 นาที",
      specs: [
        { k: "power", v: "2000W" }, { k: "voltage", v: "220-240V~ 50/60Hz" },
        { k: "levels", v: "8" }, { k: "timer", v: "180 min" },
        { k: "display", v: "LED" }, { k: "cookware", v: "Magnetic base" },
        { k: "warranty", v: "12 months" }, { k: "moq", v: "300 pcs" },
        { k: "certification", v: "CE, RoHS, CB" }
      ]
    },
    {
      id: "p2", cat: "induction-cooker", img: "images/cat-induction.jpg", featured: true,
      name_en: "Slim Induction Cooker 2200W", name_ar: "موقد حث رفيع 2200 واط", name_es: "Cocina de inducción fina 2200W", name_th: "เตาแม่เหล็กไฟฟ้าแบบบาง 2200W",
      desc_en: "Ultra-slim 38mm body with double-ring coil for even heating, suitable for home and camping.",
      desc_ar: "هيكل فائق النحافة 38 ملم مع ملف مزدوج لتسخين متساوٍ، مناسب للمنزل والتخييم.",
      desc_es: "Cuerpo ultrafino de 38 mm con bobina de doble anillo para un calentamiento uniforme, ideal para hogar y camping.",
      desc_th: "ตัวเครื่องบางเฉียบ 38 มม. ขดลวดวงแหวนคู่ให้ความร้อนสม่ำเสมอ ใช้ได้ทั้งบ้านและแคมป์ปิ้ง",
      specs: [
        { k: "power", v: "2200W" }, { k: "voltage", v: "220-240V~ 50/60Hz" },
        { k: "levels", v: "8" }, { k: "size", v: "290x360x38mm" },
        { k: "warranty", v: "12 months" }, { k: "moq", v: "300 pcs" },
        { k: "certification", v: "CE, RoHS" }
      ]
    },
    {
      id: "p3", cat: "induction-cooker", img: "images/cat-induction.jpg", featured: false,
      name_en: "Twin Zone Induction Hob 2800W", name_ar: "موقد حث بمنطقتين 2800 واط", name_es: "Placa de inducción de doble zona 2800W", name_th: "เตาหุงต้ม 2 โซน 2800W",
      desc_en: "Two-zone built-in hob with slide touch control, ideal for kitchen distributors and project buyers.",
      desc_ar: "موقد مدمج بمنطقتين مع تحكم لمسي منزلق، مثالي لموزعي المطابخ ومشتري المشاريع.",
      desc_es: "Placa empotrable de doble zona con control táctil deslizante, ideal para distribuidores de cocina.",
      desc_th: "เตาแบบบิลท์อิน 2 โซน ควบคุมแบบสไลด์ทัช เหมาะสำหรับตัวแทนจำหน่ายครัวและโปรเจกต์",
      specs: [
        { k: "power", v: "2800W (2 zones)" }, { k: "voltage", v: "220-240V~" },
        { k: "size", v: "520x280mm cut-out" }, { k: "control", v: "Slide touch" },
        { k: "timer", v: "99 min" }, { k: "warranty", v: "24 months" },
        { k: "moq", v: "200 pcs" }, { k: "certification", v: "CE, CB, RoHS" }
      ]
    },
    {
      id: "p4", cat: "hair-dryer", img: "images/cat-dryer.jpg", featured: true, badge_en: "New", badge_ar: "جديد", badge_es: "Nuevo", badge_th: "ใหม่",
      name_en: "Professional Hair Dryer 1800W", name_ar: "مجفف شعر احترافي 1800 واط", name_es: "Secador profesional 1800W", name_th: "ไดร์เป่าผมมืออาชีพ 1800W",
      desc_en: "AC motor dryer with 3 heat / 2 speed settings, cool shot and a 1.8m power cord. Salon-grade airflow.",
      desc_ar: "مجفف بمحرك AC مع 3 مستويات حرارة وسرعتين، هواء بارد وسلك 1.8 متر. تدفق هواء بجودة الصالونات.",
      desc_es: "Secador con motor AC, 3 temperaturas y 2 velocidades, botón de aire frío y cable de 1,8 m. Flujo de aire de nivel salón.",
      desc_th: "ไดร์มอเตอร์ AC ระดับความร้อน 3 ระดับ ความเร็ว 2 ระดับ ปุ่มลมเย็น สายไฟ 1.8 เมตร ลมแรงระดับร้านทำผม",
      specs: [
        { k: "power", v: "1800W" }, { k: "voltage", v: "220-240V~ 50/60Hz" },
        { k: "speeds", v: "2" }, { k: "heat", v: "3 + cool shot" },
        { k: "noise", v: "≤ 78 dB" }, { k: "material", v: "ABS + PC" },
        { k: "warranty", v: "12 months" }, { k: "moq", v: "500 pcs" },
        { k: "certification", v: "CE, RoHS" }
      ]
    },
    {
      id: "p5", cat: "hair-dryer", img: "images/cat-dryer.jpg", featured: true,
      name_en: "Ionic Hair Dryer 2000W", name_ar: "مجفف شعر أيوني 2000 واط", name_es: "Secador iónico 2000W", name_th: "ไดร์ไอออนิก 2000W",
      desc_en: "Negative ion technology reduces frizz and drying time. Foldable handle and dual voltage for travel.",
      desc_ar: "تقنية الأيونات السالبة تقلل الهيشان ووقت التجفيف. مقبض قابل للطي وجهد مزدوج للسفر.",
      desc_es: "Tecnología de iones negativos que reduce el encrespado y el tiempo de secado. Mango plegable y doble voltaje.",
      desc_th: "เทคโนโลยีไอออนลบช่วยลดชี้ฟูและลดเวลาอบแห้ง ด้ามพับได้ รองรับแรงดันไฟคู่สำหรับเดินทาง",
      specs: [
        { k: "power", v: "2000W" }, { k: "voltage", v: "110-240V~" },
        { k: "ion", v: "20 million/cm³" }, { k: "speeds", v: "2" },
        { k: "weight", v: "480g" }, { k: "warranty", v: "12 months" },
        { k: "moq", v: "500 pcs" }, { k: "certification", v: "CE, RoHS, ETL" }
      ]
    },
    {
      id: "p6", cat: "hair-dryer", img: "images/cat-dryer.jpg", featured: false,
      name_en: "Folding Travel Dryer 1600W", name_ar: "مجفف سفر قابل للطي 1600 واط", name_es: "Secador de viaje plegable 1600W", name_th: "ไดร์พับได้สำหรับเดินทาง 1600W",
      desc_en: "Compact 360g design with travel pouch, fits any suitcase. DC motor with quiet operation.",
      desc_ar: "تصميم مضغوط 360 غرام مع حقيبة سفر، يناسب أي حقيبة. محرك DC هادئ.",
      desc_es: "Diseño compacto de 360 g con bolsa de viaje, cabe en cualquier maleta. Motor DC silencioso.",
      desc_th: "น้ำหนักเบา 360 กรัม พร้อมกระเป๋าเดินทาง ใส่กระเป๋าเดินทางได้ทุกรุ่น มอเตอร์ DC เงียบ",
      specs: [
        { k: "power", v: "1600W" }, { k: "voltage", v: "220-240V~" },
        { k: "weight", v: "360g" }, { k: "noise", v: "≤ 70 dB" },
        { k: "warranty", v: "12 months" }, { k: "moq", v: "500 pcs" },
        { k: "certification", v: "CE, RoHS" }
      ]
    },
    {
      id: "p7", cat: "fan", img: "images/cat-fan.jpg", featured: true, badge_en: "Hot", badge_ar: "الأكثر طلباً", badge_es: "Popular", badge_th: "ขายดี",
      name_en: "16-inch Pedestal Fan", name_ar: "مروحة عمودية 16 بوصة", name_es: "Ventilador de pie 16\"", name_th: "พัดลมตั้งพื้น 16 นิ้ว",
      desc_en: "Three speeds, 60-minute timer and 90° oscillation. Strong airflow with low noise for home and shop use.",
      desc_ar: "ثلاث سرعات ومؤقت 60 دقيقة وترواح 90 درجة. تدفق هواء قوي وضوضاء منخفضة للمنزل والمحلات.",
      desc_es: "Tres velocidades, temporizador de 60 minutos y oscilación de 90°. Potente flujo de aire y bajo ruido.",
      desc_th: "3 ความเร็ว ตั้งเวลา 60 นาที ส่ายหัว 90 องศา ลมแรง เสียงเบา ใช้ได้ทั้งบ้านและร้านค้า",
      specs: [
        { k: "power", v: "55W" }, { k: "voltage", v: "220-240V~ 50/60Hz" },
        { k: "blades", v: "3 (AS)" }, { k: "speeds", v: "3" },
        { k: "timer", v: "60 min" }, { k: "oscillation", v: "90°" },
        { k: "warranty", v: "12 months" }, { k: "moq", v: "300 pcs" },
        { k: "certification", v: "CE, RoHS" }
      ]
    },
    {
      id: "p8", cat: "fan", img: "images/cat-fan.jpg", featured: false,
      name_en: "Tower Fan with Remote 40W", name_ar: "مروحة برجية مع ريموت 40 واط", name_es: "Ventilador torre con mando 40W", name_th: "พัดลมทาวเวอร์รีโมท 40W",
      desc_en: "Slim tower design with 8-hour timer, 3 modes and a remote control. Safe for homes with children.",
      desc_ar: "تصميم برجي نحيف مع مؤقت 8 ساعات و3 أوضاع وجهاز تحكم عن بعد. آمن للمنازل التي فيها أطفال.",
      desc_es: "Diseño torre fino con temporizador de 8 horas, 3 modos y mando a distancia. Seguro para hogares con niños.",
      desc_th: "ดีไซน์ทาวเวอร์บาง ตั้งเวลา 8 ชั่วโมง 3 โหมด พร้อมรีโมท ปลอดภัยสำหรับบ้านที่มีเด็ก",
      specs: [
        { k: "power", v: "40W" }, { k: "voltage", v: "220-240V~" },
        { k: "remote", v: "Yes" }, { k: "timer", v: "8 hours" },
        { k: "speeds", v: "3 modes" }, { k: "noise", v: "≤ 52 dB" },
        { k: "warranty", v: "12 months" }, { k: "moq", v: "300 pcs" },
        { k: "certification", v: "CE, RoHS" }
      ]
    },
    {
      id: "p9", cat: "fan", img: "images/cat-fan.jpg", featured: false,
      name_en: "Rechargeable Desk Fan 4000mAh", name_ar: "مروحة مكتبية قابلة للشحن 4000mAh", name_es: "Ventilador de escritorio recargable 4000mAh", name_th: "พัดลมตั้งโต๊ะชาร์จได้ 4000mAh",
      desc_en: "Cordless desk fan with 4-speed USB-C charging and 12-hour runtime. Great for summer promotions.",
      desc_ar: "مروحة مكتبية لاسلكية بشحن USB-C وأربع سرعات و12 ساعة تشغيل. رائعة للعروض الصيفية.",
      desc_es: "Ventilador de escritorio inalámbrico con carga USB-C, 4 velocidades y 12 horas de autonomía.",
      desc_th: "พัดลมตั้งโต๊ะไร้สาย ชาร์จ USB-C 4 ความเร็ว ใช้งานได้ 12 ชั่วโมง เหมาะสำหรับโปรโมชันหน้าร้อน",
      specs: [
        { k: "power", v: "6W" }, { k: "battery", v: "4000mAh" },
        { k: "runtime", v: "4-12 hours" }, { k: "speeds", v: "4" },
        { k: "size", v: "165x105x205mm" }, { k: "weight", v: "520g" },
        { k: "moq", v: "1000 pcs" }, { k: "certification", v: "CE, RoHS, FCC" }
      ]
    },
    {
      id: "p10", cat: "heater", img: "images/cat-heater.jpg", featured: true, badge_en: "New", badge_ar: "جديد", badge_es: "Nuevo", badge_th: "ใหม่",
      name_en: "PTC Ceramic Tower Heater 2000W", name_ar: "دفاية سيراميك برجية 2000 واط", name_es: "Calefactor torre cerámico 2000W", name_th: "เครื่องทำความร้อน PTC ทาวเวอร์ 2000W",
      desc_en: "PTC ceramic heating with 2 power settings, oscillation, remote control and overheat protection.",
      desc_ar: "تدفئة سيراميك PTC مع مستويين للقدرة، ترواح، ريموت وحماية من الحرارة الزائدة.",
      desc_es: "Calefacción cerámica PTC con 2 ajustes de potencia, oscilación, mando a distancia y protección contra sobrecalentamiento.",
      desc_th: "ระบบทำความร้อนเซรามิก PTC ระดับกำลัง 2 ระดับ ส่ายหัว รีโมท และระบบตัดไฟเมื่อร้อนเกิน",
      specs: [
        { k: "power", v: "2000W" }, { k: "voltage", v: "220-240V~" },
        { k: "heating", v: "PTC ceramic" }, { k: "timer", v: "12 hours" },
        { k: "remote", v: "Yes" }, { k: "oscillation", v: "70°" },
        { k: "warranty", v: "24 months" }, { k: "moq", v: "300 pcs" },
        { k: "certification", v: "CE, RoHS, GS" }
      ]
    },
    {
      id: "p11", cat: "heater", img: "images/cat-heater.jpg", featured: false,
      name_en: "Oil-filled Radiator Heater 1500W", name_ar: "دفاية زيت 1500 واط", name_es: "Radiador de aceite 1500W", name_th: "ฮีตเตอร์น้ำมัน 1500W",
      desc_en: "Silent oil-filled radiator with 3 heat settings, thermostat and tip-over switch. Whole-room warmth.",
      desc_ar: "دفاية زيت صامتة مع 3 مستويات حرارة ومنظم حرارة ومفتاح إيقاف عند السقوط. دفء للغرفة كاملة.",
      desc_es: "Radiador de aceite silencioso con 3 ajustes, termostato y apagado por vuelco. Calor para toda la habitación.",
      desc_th: "ฮีตเตอร์น้ำมันไร้เสียง ระดับความร้อน 3 ระดับ เทอร์โมสตัท ตัดไฟอัตโนมัติเมื่อล้ม ให้ความอบอุ่นทั้งห้อง",
      specs: [
        { k: "power", v: "1500W" }, { k: "voltage", v: "220-240V~" },
        { k: "heat", v: "3 settings" }, { k: "timer", v: "24 hours" },
        { k: "size", v: "7 fins" }, { k: "weight", v: "9.6kg" },
        { k: "warranty", v: "24 months" }, { k: "moq", v: "200 pcs" },
        { k: "certification", v: "CE, RoHS, GS" }
      ]
    },
    {
      id: "p12", cat: "heater", img: "images/cat-heater.jpg", featured: false,
      name_en: "Compact Fan Heater 1200W", name_ar: "سخان مروحة مضغوط 1200 واط", name_es: "Calefactor de ventilador compacto 1200W", name_th: "เครื่องทำความร้อนพัดลมขนาดเล็ก 1200W",
      desc_en: "Fast warm air in 3 seconds, tip-over and overheat protection. Ideal for bedrooms and offices.",
      desc_ar: "هواء دافئ خلال 3 ثوانٍ، وحماية من السقوط والحرارة الزائدة. مثالي لغرف النوم والمكاتب.",
      desc_es: "Aire caliente en 3 segundos, protección contra vuelco y sobrecalentamiento. Ideal para dormitorios y oficinas.",
      desc_th: "ลมอุ่นภายใน 3 วินาที ระบบตัดไฟเมื่อล้มและร้อนเกิน เหมาะสำหรับห้องนอนและออฟฟิศ",
      specs: [
        { k: "power", v: "1200W" }, { k: "voltage", v: "220-240V~" },
        { k: "heat", v: "2 settings" }, { k: "noise", v: "≤ 45 dB" },
        { k: "size", v: "140x110x190mm" }, { k: "warranty", v: "12 months" },
        { k: "moq", v: "500 pcs" }, { k: "certification", v: "CE, RoHS" }
      ]
    },
    {
      id: "p13", cat: "razor", img: "images/cat-razor.jpg", featured: true, badge_en: "Hot", badge_ar: "الأكثر طلباً", badge_es: "Popular", badge_th: "ขายดี",
      name_en: "Rotary 3-Head Shaver IPX7", name_ar: "ماكينة حلاقة دوارة بثلاثة رؤوس IPX7", name_es: "Afeitadora rotativa de 3 cabezales IPX7", name_th: "มีดโกนหนวด 3 หัวหมุน IPX7",
      desc_en: "Three floating heads, 90-minute runtime, USB-C charging and fully washable. Travel lock included.",
      desc_ar: "ثلاثة رؤوس عائمة، 90 دقيقة تشغيل، شحن USB-C وقابل للغسل بالكامل. مع قفل سفر.",
      desc_es: "Tres cabezales flotantes, 90 minutos de autonomía, carga USB-C y totalmente lavable. Incluye bloqueo de viaje.",
      desc_th: "หัวหมุนลอย 3 หัว ใช้งาน 90 นาที ชาร์จ USB-C ล้างน้ำได้ทั้งเครื่อง พร้อมล็อกสำหรับเดินทาง",
      specs: [
        { k: "battery", v: "Lithium 800mAh" }, { k: "runtime", v: "90 min" },
        { k: "waterproof", v: "IPX7" }, { k: "blades", v: "3 floating" },
        { k: "charging", v: "USB-C, 1.5h" }, { k: "warranty", v: "12 months" },
        { k: "moq", v: "500 pcs" }, { k: "certification", v: "CE, RoHS, FCC" }
      ]
    },
    {
      id: "p14", cat: "razor", img: "images/cat-razor.jpg", featured: false,
      name_en: "Foil Shaver with Pop-up Trimmer", name_ar: "ماكينة حلاقة بالرقائق مع مقص خفي", name_es: "Afeitadora de lámina con recortadora emergente", name_th: "มีดโกนแบบฟอยล์มีทรีมเมอร์ในตัว",
      desc_en: "Ultra-thin foil for a close shave plus a pop-up trimmer for sideburns and beard lines.",
      desc_ar: "رقاقة فائقة النحافة لحلاقة قريبة مع مقص خفي للشعر الجانبي وخطوط اللحية.",
      desc_es: "Lámina ultrafina para un afeitado apurado más recortadora emergente para patillas y contornos de barba.",
      desc_th: "ฟอยล์บางเฉียบโกนได้สนิท พร้อมทรีมเมอร์ในตัวสำหรับจอนและขอบเครา",
      specs: [
        { k: "battery", v: "Lithium 600mAh" }, { k: "runtime", v: "60 min" },
        { k: "waterproof", v: "IPX5" }, { k: "blades", v: "Foil + trimmer" },
        { k: "charging", v: "USB, 1.5h" }, { k: "warranty", v: "12 months" },
        { k: "moq", v: "500 pcs" }, { k: "certification", v: "CE, RoHS" }
      ]
    },
    {
      id: "p15", cat: "razor", img: "images/cat-razor.jpg", featured: false,
      name_en: "Men's Grooming Kit 6-in-1", name_ar: "طقم حلاقة رجالي 6 في 1", name_es: "Kit de cuidado personal 6 en 1", name_th: "ชุดดูแลหนวดเครา 6-in-1",
      desc_en: "Six interchangeable attachments for beard, hair, nose and body grooming. Rechargeable with LED display.",
      desc_ar: "ست ملحقات قابلة للتبديل للحية والشعر والأنف والجسم. قابل للشحن مع شاشة LED.",
      desc_es: "Seis accesorios intercambiables para barba, cabello, nariz y cuerpo. Recargable con pantalla LED.",
      desc_th: "หัวเปลี่ยนได้ 6 ชิ้น สำหรับเครา ผม จมูก และร่างกาย ชาร์จได้ พร้อมจอ LED",
      specs: [
        { k: "battery", v: "Lithium 900mAh" }, { k: "runtime", v: "120 min" },
        { k: "waterproof", v: "IPX5" }, { k: "blades", v: "6 attachments" },
        { k: "display", v: "LED" }, { k: "warranty", v: "12 months" },
        { k: "moq", v: "500 pcs" }, { k: "certification", v: "CE, RoHS, FCC" }
      ]
    }
  ],

  testimonials: [
    {
      id: "t1", name: "Ahmed Al-Rashid", role: "Importer, Home appliance trading", country: "Dubai, UAE", rating: 5,
      text: "We have been buying induction cookers from this factory for three years. Delivery is always on schedule and the after-sales support is genuinely fast."
    },
    {
      id: "t2", name: "María López", role: "Distributor, Small appliance division", country: "Madrid, Spain", rating: 5,
      text: "Their team understood our voltage and plug requirements without a single mistake. The OEM packaging came out exactly as designed."
    },
    {
      id: "t3", name: "Thanawat Srisuwan", role: "Category buyer, retail chain", country: "Bangkok, Thailand", rating: 5,
      text: "Quote requests are answered within hours, not days. Samples reached us in three days. That speed is rare in this industry."
    },
    {
      id: "t4", name: "Michael Weber", role: "Procurement manager", country: "Berlin, Germany", rating: 4,
      text: "The aging test reports they share with every batch gave us confidence to place our first order. Quality has been consistent since."
    },
    {
      id: "t5", name: "Sarah Mitchell", role: "E-commerce seller", country: "Miami, USA", rating: 5,
      text: "Started with a small MOQ and grew to full containers. Their ETL-certified hair dryers sell well and return rates are low."
    },
    {
      id: "t6", name: "Omar Hassan", role: "Brand owner", country: "Cairo, Egypt", rating: 5,
      text: "We launched our own brand with their ODM service. From logo to manual to carton design, everything was handled professionally."
    }
  ],

  milestones: [
    {
      id: "m1", year: "2010",
      title_en: "Workshop founded", title_ar: "تأسيس الورشة", title_es: "Fundación del taller", title_th: "ก่อตั้งโรงงานเล็ก",
      desc_en: "Started assembling induction cookers in a 800 m² workshop in Foshan.", desc_ar: "بدأنا تجميع مواقد الحث في ورشة 800 م² في فوشان.", desc_es: "Comenzamos ensamblando cocinas de inducción en un taller de 800 m² en Foshan.", desc_th: "เริ่มประกอบเตาแม่เหล็กไฟฟ้าในโรงงาน 800 ตร.ม. ที่เมืองฝอซาน"
    },
    {
      id: "m2", year: "2013",
      title_en: "First export orders", title_ar: "أول طلبات التصدير", title_es: "Primeros pedidos de exportación", title_th: "ออเดอร์ส่งออกแรก",
      desc_en: "First containers shipped to Southeast Asia.", desc_ar: "أول حاويات شُحنت إلى جنوب شرق آسيا.", desc_es: "Primeros contenedores enviados al Sudeste Asiático.", desc_th: "ตู้คอนเทนเนอร์แรกส่งออกไปเอเชียตะวันออกเฉียงใต้"
    },
    {
      id: "m3", year: "2016",
      title_en: "EU market entry", title_ar: "دخول السوق الأوروبية", title_es: "Entrada al mercado europeo", title_th: "เข้าสู่ตลาดยุโรป",
      desc_en: "CE and RoHS certified; began exporting to Germany, France and Poland.", desc_ar: "حصلنا على CE وRoHS وبدأنا التصدير إلى ألمانيا وفرنسا وبولندا.", desc_es: "Certificación CE y RoHS; comenzamos a exportar a Alemania, Francia y Polonia.", desc_th: "ได้รับรอง CE และ RoHS เริ่มส่งออกไปเยอรมนี ฝรั่งเศส และโปแลนด์"
    },
    {
      id: "m4", year: "2019",
      title_en: "New factory campus", title_ar: "مجمع المصنع الجديد", title_es: "Nuevo campus de fábrica", title_th: "โรงงานแห่งใหม่",
      desc_en: "Moved to a 12,000 m² facility with five production lines.", desc_ar: "انتقلنا إلى منشأة 12,000 م² بخمسة خطوط إنتاج.", desc_es: "Traslado a una planta de 12.000 m² con cinco líneas de producción.", desc_th: "ย้ายเข้าโรงงาน 12,000 ตร.ม. พร้อมสายการผลิต 5 สาย"
    },
    {
      id: "m5", year: "2022",
      title_en: "North America & Oceania", title_ar: "أمريكا الشمالية وأوقيانوسيا", title_es: "Norteamérica y Oceanía", title_th: "อเมริกาเหนือและโอเชียเนีย",
      desc_en: "ETL and SAA certified for the US, Canada and Australia markets.", desc_ar: "حصلنا على ETL وSAA لأسواق أمريكا وكندا وأستراليا.", desc_es: "Certificación ETL y SAA para los mercados de EE. UU., Canadá y Australia.", desc_th: "ได้รับรอง ETL และ SAA สำหรับตลาดสหรัฐฯ แคนาดา และออสเตรเลีย"
    },
    {
      id: "m6", year: "2025",
      title_en: "40+ countries served", title_ar: "أكثر من 40 دولة", title_es: "Más de 40 países", title_th: "ให้บริการ 40+ ประเทศ",
      desc_en: "500+ models shipped to importers and distributors worldwide.", desc_ar: "أكثر من 500 موديل شُحنت إلى مستوردين وموزعين حول العالم.", desc_es: "Más de 500 modelos enviados a importadores y distribuidores en todo el mundo.", desc_th: "ส่งออก 500+ รุ่นให้ผู้นำเข้าและตัวแทนจำหน่ายทั่วโลก"
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
      desc_en: "From 300 pcs per model for private label, growing with your order history.", desc_ar: "من 300 قطعة لكل موديل للعلامة الخاصة، ويزيد مع تاريخ طلباتك.", desc_es: "Desde 300 unidades por modelo para marca propia, creciendo con tu historial.", desc_th: "เริ่ม 300 ชิ้นต่อรุ่นสำหรับแบรนด์ส่วนตัว เพิ่มตามประวัติออเดอร์"
    },
    {
      id: "o6", icon: "mold",
      title_en: "Sample & mold service", title_ar: "خدمة العينات والقوالب", title_es: "Servicio de muestras y moldes", title_th: "บริการตัวอย่างและแม่พิมพ์",
      desc_en: "Stock samples in 2-3 days, custom samples in about 7 days, new mold development on request.", desc_ar: "عينات جاهزة خلال 2-3 أيام، وعينات مخصصة خلال 7 أيام، وتطوير قوالب جديدة عند الطلب.", desc_es: "Muestras en stock en 2-3 días, personalizadas en unos 7 días y desarrollo de nuevos moldes bajo petición.", desc_th: "ตัวอย่างสต็อก 2-3 วัน ตัวอย่างสั่งทำประมาณ 7 วัน พัฒนาแม่พิมพ์ใหม่ตามคำขอ"
    }
  ],

  certs: [
    { id: "c1", mark: "CE", name: "CE", scope: "EU safety & EMC" },
    { id: "c2", mark: "RoHS", name: "RoHS", scope: "EU hazardous substances" },
    { id: "c3", mark: "CB", name: "CB", scope: "IECEE international" },
    { id: "c4", mark: "ETL", name: "ETL", scope: "US & Canada safety" },
    { id: "c5", mark: "SAA", name: "SAA", scope: "Australia & NZ" },
    { id: "c6", mark: "GS", name: "GS", scope: "Germany safety" },
    { id: "c7", mark: "ISO", name: "ISO 9001", scope: "Quality management" },
    { id: "c8", mark: "BSCI", name: "BSCI", scope: "Social compliance" }
  ]
};

/* ================= storage helpers ================= */
const LS_SITE = "hw_site_v1";
const LS_INQUIRIES = "hw_inquiries_v1";

function deepMerge(base, over) {
  if (Array.isArray(base)) return over !== undefined ? over : base;
  if (base && typeof base === "object" && over && typeof over === "object") {
    const out = {};
    Object.keys(base).forEach(function (k) {
      out[k] = deepMerge(base[k], over[k]);
    });
    Object.keys(over).forEach(function (k) {
      if (!(k in base)) out[k] = over[k];
    });
    return out;
  }
  return over !== undefined ? over : base;
}

const store = {
  loadSite: function () {
    try {
      const raw = localStorage.getItem(LS_SITE);
      if (!raw) return JSON.parse(JSON.stringify(DEFAULT_DATA));
      return deepMerge(DEFAULT_DATA, JSON.parse(raw));
    } catch (e) {
      console.warn("store.loadSite fallback to defaults", e);
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  },
  saveSite: function (data) {
    localStorage.setItem(LS_SITE, JSON.stringify(data));
  },
  resetSite: function () {
    localStorage.removeItem(LS_SITE);
  },
  loadInquiries: function () {
    try { return JSON.parse(localStorage.getItem(LS_INQUIRIES)) || []; } catch (e) { return []; }
  },
  saveInquiries: function (list) {
    localStorage.setItem(LS_INQUIRIES, JSON.stringify(list));
  }
};

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
