/* ==========================================================================
   admin.js - website admin panel (Chinese UI)
   Full CRUD for slides, advantages, why-us, stats, testimonials, categories,
   products, milestones, QC steps, OEM points, certs + settings + inquiries.
   Data persists in localStorage (demo mode) - see README for server upgrade.
   ========================================================================== */

const LANGS = ["en", "ar", "es", "th"];
const LANG_NAMES = { en: "英文 EN", ar: "阿拉伯语 AR", es: "西班牙语 ES", th: "泰语 TH" };

const AICONS = {
  factory: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M4 20V9l7 3V9l7 3V4h2v16"/><path d="M7 20v-4h3v4"/><path d="M14 20v-4h3v4"/></svg>',
  shield: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 3.5V11c0 5.2-3.4 9.4-8 11-4.6-1.6-8-5.8-8-11V5.5L12 2z"/><path d="M8.5 11.5l2.5 2.5 4.5-4.5"/></svg>',
  gear: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 00.34 1.87l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.7 1.7 0 00-1.87-.34 1.7 1.7 0 00-1.03 1.56V21a2 2 0 11-4 0v-.09A1.7 1.7 0 008.9 19.4a1.7 1.7 0 00-1.87.34l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.7 1.7 0 00.34-1.87 1.7 1.7 0 00-1.56-1.03H3a2 2 0 110-4h.09A1.7 1.7 0 004.6 8.9a1.7 1.7 0 00-.34-1.87l-.06-.06a2 2 0 112.83-2.83l.06.06a1.7 1.7 0 001.87.34h.01a1.7 1.7 0 001.03-1.56V3a2 2 0 114 0v.09c0 .68.4 1.29 1.03 1.56a1.7 1.7 0 001.87-.34l.06-.06a2 2 0 112.83 2.83l-.06.06a1.7 1.7 0 00-.34 1.87v.01c.27.62.88 1.03 1.56 1.03H21a2 2 0 110 4h-.09c-.68 0-1.29.4-1.56 1.03z"/></svg>',
  price: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L11 3.8H3.8V11l9.6 9.6a2 2 0 002.8 0l4.4-4.4a2 2 0 000-2.8z"/><circle cx="7.5" cy="7.5" r="1.4"/></svg>',
  qc: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 3.5V11c0 5.2-3.4 9.4-8 11-4.6-1.6-8-5.8-8-11V5.5L12 2z"/><path d="M8.5 11.5l2.5 2.5 4.5-4.5"/></svg>',
  box: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/></svg>',
  clock: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  sample: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"/><path d="M12 11L4 6.5M12 11l8-4.5M12 11v9"/></svg>',
  truck: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4h14v12H1z"/><path d="M15 8h4l4 4v4h-8V8z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>',
  inspect: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 6.5a3.5 3.5 0 10-7 0"/><path d="M11 10v6"/><path d="M3 21c0-4 3.6-6 8-6s8 2 8 6"/><circle cx="18.5" cy="5" r="2.5"/></svg>',
  lineqc: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h12M3 12h9M3 17h6"/><circle cx="19" cy="17" r="3"/><path d="M19 14v6"/></svg>',
  aging: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z"/></svg>',
  final: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 3.5V11c0 5.2-3.4 9.4-8 11-4.6-1.6-8-5.8-8-11V5.5L12 2z"/><path d="M8.5 11.5l2.5 2.5 4.5-4.5"/></svg>',
  pack: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/><path d="M7 5.5l10 5.7"/></svg>',
  tag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L11 3.8H3.8V11l9.6 9.6a2 2 0 002.8 0l4.4-4.4a2 2 0 000-2.8z"/><circle cx="7.5" cy="7.5" r="1.4"/></svg>',
  palette: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 100 20c1.2 0 2-.8 2-1.9 0-.5-.2-.9-.5-1.3-.3-.3-.5-.8-.5-1.2 0-1 .9-1.9 2-1.9h2.6A3.4 3.4 0 0022 12.4 10.4 10.4 0 0012 2z"/><circle cx="7.5" cy="10.5" r="1.2"/><circle cx="12" cy="7.5" r="1.2"/><circle cx="16.5" cy="10.5" r="1.2"/></svg>',
  plug: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 01-12 0V7zM12 17v5"/></svg>',
  layers: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l10 5-10 5L2 7l10-5z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></svg>',
  mold: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M9 9h6v6H9z"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>'
};

const SPEC_KEYS = [
  ["power", "功率 Power"], ["voltage", "电压 Voltage"], ["frequency", "频率 Frequency"],
  ["size", "尺寸 Size"], ["weight", "重量 Weight"], ["material", "材质 Material"],
  ["warranty", "保修 Warranty"], ["moq", "MOQ"], ["colors", "颜色 Colors"],
  ["control", "控制 Control"], ["noise", "噪音 Noise"], ["heating", "加热 Heating"],
  ["airflow", "风量 Airflow"], ["speeds", "速度档位 Speeds"], ["battery", "电池 Battery"],
  ["runtime", "续航 Runtime"], ["waterproof", "防水 Waterproof"], ["certification", "认证 Certification"],
  ["blades", "扇叶 Blades"], ["timer", "定时 Timer"], ["levels", "功率档位 Levels"],
  ["dimension", "尺寸 Dimension"], ["netweight", "净重 Net weight"], ["grossweight", "毛重 Gross weight"],
  ["packsize", "包装尺寸 Pack size"], ["loading", "装柜量 Loading"], ["display", "显示屏 Display"],
  ["cookware", "锅具 Cookware"], ["oscillation", "摆头 Oscillation"], ["remote", "遥控 Remote"],
  ["ion", "负离子 Ion"], ["voltageRange", "电压范围 Voltage range"]
];

let site = store.loadSite();
let currentView = "dashboard";

/* ---------------- helpers ---------------- */
const $ = function (s, r) { return (r || document).querySelector(s); };
const $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

function toast(msg) {
  let el = $(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(function () { el.classList.remove("show"); }, 3000);
}

function save() { store.saveSite(site); }
function uid(prefix) { return prefix + "-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
function catNameOf(id) {
  const c = site.categories.find(function (x) { return x.id === id; });
  return c ? (c.name_en || id) : id;
}

/* ---------------- auth ---------------- */
function checkAuth() { return sessionStorage.getItem("hw_admin") === "1"; }
function showLogin() {
  $("#login-view").style.display = "flex";
  $("#adm-shell").style.display = "none";
}
function showShell() {
  $("#login-view").style.display = "none";
  $("#adm-shell").style.display = "grid";
  updateNavCounts();
  navigate("dashboard");
}

/* ---------------- navigation ---------------- */
const VIEWS = {
  dashboard: { title: "仪表盘", sub: "网站数据总览与常用操作", render: renderDashboard },
  slides: { title: "首页轮播图", sub: "首页大图轮播内容（3 张左右最佳，图片建议 16:9）", tools: addBtn("slides"), render: function () { renderList("slides"); } },
  advantages: { title: "三大优势", sub: "首页「我们的优势」三个模块", tools: addBtn("advantages"), render: function () { renderList("advantages"); } },
  whyus: { title: "为什么选我们", sub: "首页「为什么选我们」清单条目", tools: addBtn("whyUs"), render: function () { renderList("whyUs"); } },
  stats: { title: "数据统计", sub: "首页深色统计条的 4 个数字", tools: addBtn("stats"), render: function () { renderList("stats"); } },
  testimonials: { title: "客户见证", sub: "首页与客户评价展示", tools: addBtn("testimonials"), render: function () { renderList("testimonials"); } },
  categories: { title: "产品分类", sub: "4 个产品大类（删除分类会同时隐藏其下产品）", tools: addBtn("categories"), render: function () { renderList("categories"); } },
  products: { title: "产品管理", sub: "产品增删改查：名称、参数、图片、多语言；可导出翻译表交母语客户校对", tools: '<button class="btn btn-outline btn-sm" id="export-langs">导出翻译表 CSV</button> <button class="btn btn-primary btn-sm" data-add="products">+ 新增</button>', render: renderProducts },
  milestones: { title: "发展历程", sub: "关于页时间轴", tools: addBtn("milestones"), render: function () { renderList("milestones"); } },
  qcsteps: { title: "质控流程", sub: "关于页「四个检查」步骤", tools: addBtn("qcSteps"), render: function () { renderList("qcSteps"); } },
  oem: { title: "OEM/ODM 能力", sub: "关于页 OEM 能力清单", tools: addBtn("oemPoints"), render: function () { renderList("oemPoints"); } },
  certs: { title: "认证展示", sub: "关于页认证徽章", tools: addBtn("certs"), render: function () { renderList("certs"); } },
  settings: { title: "网站设置", sub: "公司信息、联系方式、统计分析", render: renderSettings },
  inquiries: { title: "询盘管理", sub: "前台表单收到的询盘（保存在本浏览器）", tools: '<button class="btn btn-outline btn-sm" id="inq-export">导出 CSV</button>', render: renderInquiries }
};

function addBtn(key) {
  return '<button class="btn btn-primary btn-sm" data-add="' + key + '">+ 新增</button>';
}

function navigate(view) {
  currentView = view;
  const cfg = VIEWS[view];
  $("#view-title").textContent = cfg.title;
  $("#view-sub").textContent = cfg.sub;
  $("#view-tools").innerHTML = cfg.tools || "";
  $$(".adm-nav-item[data-view]").forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-view") === view); });
  const tools = $("#view-tools");
  const addBtnEl = tools.querySelector("[data-add]");
  if (addBtnEl) addBtnEl.addEventListener("click", function () { openCollectionModal(addBtnEl.getAttribute("data-add"), null); });
  if (view === "products") {
    const expL = $("#export-langs");
    if (expL) expL.addEventListener("click", exportTranslations);
  }
  if (view === "inquiries") {
    const exp = $("#inq-export");
    if (exp) exp.addEventListener("click", exportInquiries);
  }
  cfg.render($("#view-content"));
}

function updateNavCounts() {
  $("#nav-prod-count").textContent = site.products.length;
  const dc = $("#nav-draft-count");
  if (dc) dc.textContent = loadDrafts().length;
  const inqs = store.loadInquiries();
  $("#nav-inq-count").textContent = inqs.filter(function (i) { return !i.read; }).length;
}

/* ---------------- collection CRUD config ---------------- */
const COLL = {
  slides: {
    key: "slides", label: "轮播图",
    fields: [
      { name: "img", label: "图片地址 / 上传", type: "img" },
      { name: "title", label: "主标题", lang: true },
      { name: "sub", label: "副标题", lang: true, type: "textarea" }
    ],
    row: function (it) {
      return '<img class="thumb" src="' + esc(it.img) + '" alt="">' +
        '<div style="display:grid;gap:2px;"><span class="row-title">' + esc(it.title_en || "") + '</span><span class="muted">' + esc((it.sub_en || "").slice(0, 60)) + "</span></div>";
    }
  },
  advantages: {
    key: "advantages", label: "优势",
    fields: [
      { name: "icon", label: "图标", type: "icon" },
      { name: "title", label: "标题", lang: true },
      { name: "desc", label: "描述", lang: true, type: "textarea" },
      { name: "stat1", label: "统计标签 1", lang: true },
      { name: "stat2", label: "统计标签 2", lang: true }
    ],
    row: function (it) {
      return '<span style="width:40px;height:40px;border-radius:11px;background:var(--accent-soft);color:var(--accent);display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;">' + (AICONS[it.icon] || "") + "</span>" +
        '<div><span class="row-title">' + esc(it.title_en || "") + '</span><div class="muted">' + esc(it.stat1_en || "") + " · " + esc(it.stat2_en || "") + "</div></div>";
    }
  },
  whyUs: {
    key: "whyUs", label: "条目",
    fields: [
      { name: "icon", label: "图标", type: "icon" },
      { name: "title", label: "标题", lang: true },
      { name: "desc", label: "描述", lang: true, type: "textarea" }
    ],
    row: function (it) {
      return '<span style="width:40px;height:40px;border-radius:11px;background:var(--accent-soft);color:var(--accent);display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;">' + (AICONS[it.icon] || "") + "</span>" +
        '<div><span class="row-title">' + esc(it.title_en || "") + '</span><div class="muted">' + esc((it.desc_en || "").slice(0, 70)) + "</div></div>";
    }
  },
  stats: {
    key: "stats", label: "统计项",
    fields: [
      { name: "num", label: "数字（如 15）" },
      { name: "suffix", label: "后缀（如 + / % / h）" },
      { name: "label", label: "说明文字", lang: true }
    ],
    row: function (it) {
      return '<div><span class="row-title" style="font-size:1.2rem;">' + esc(it.num + it.suffix) + '</span><div class="muted">' + esc(it.label_en || "") + "</div></div>";
    }
  },
  testimonials: {
    key: "testimonials", label: "见证",
    fields: [
      { name: "name", label: "姓名" },
      { name: "role", label: "职位" },
      { name: "country", label: "国家 / 地区" },
      { name: "rating", label: "评分（1-5）", type: "number" },
      { name: "text", label: "评价内容", type: "textarea" }
    ],
    row: function (it) {
      return '<div><span class="row-title">' + esc(it.name) + '</span><div class="muted">' + esc(it.role) + " · " + esc(it.country) + " · " + "★".repeat(it.rating || 5) + "</div>" +
        '<div class="muted" style="margin-top:4px;">"' + esc((it.text || "").slice(0, 80)) + '"</div></div>';
    }
  },
  categories: {
    key: "categories", label: "分类",
    fields: [
      { name: "img", label: "分类图片", type: "img" },
      { name: "name", label: "分类名称", lang: true }
    ],
    row: function (it) {
      const n = site.products.filter(function (p) { return p.cat === it.id; }).length;
      return '<img class="thumb" src="' + esc(it.img) + '" alt="">' +
        '<div><span class="row-title">' + esc(it.name_en || "") + '</span><div class="muted">' + n + " 个产品</div></div>";
    }
  },
  milestones: {
    key: "milestones", label: "节点",
    fields: [
      { name: "year", label: "年份" },
      { name: "title", label: "标题", lang: true },
      { name: "desc", label: "描述", lang: true, type: "textarea" }
    ],
    row: function (it) {
      return '<div><span class="row-title">' + esc(it.year) + " · " + esc(it.title_en || "") + '</span><div class="muted">' + esc((it.desc_en || "").slice(0, 70)) + "</div></div>";
    }
  },
  qcSteps: {
    key: "qcSteps", label: "步骤",
    fields: [
      { name: "icon", label: "图标", type: "icon" },
      { name: "title", label: "标题", lang: true },
      { name: "desc", label: "描述", lang: true, type: "textarea" }
    ],
    row: function (it) {
      return '<span style="width:40px;height:40px;border-radius:11px;background:var(--accent-soft);color:var(--accent);display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;">' + (AICONS[it.icon] || "") + "</span>" +
        '<div><span class="row-title">' + esc(it.title_en || "") + '</span><div class="muted">' + esc((it.desc_en || "").slice(0, 70)) + "</div></div>";
    }
  },
  oemPoints: {
    key: "oemPoints", label: "能力点",
    fields: [
      { name: "icon", label: "图标", type: "icon" },
      { name: "title", label: "标题", lang: true },
      { name: "desc", label: "描述", lang: true, type: "textarea" }
    ],
    row: function (it) {
      return '<span style="width:40px;height:40px;border-radius:11px;background:var(--accent-soft);color:var(--accent);display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;">' + (AICONS[it.icon] || "") + "</span>" +
        '<div><span class="row-title">' + esc(it.title_en || "") + '</span><div class="muted">' + esc((it.desc_en || "").slice(0, 70)) + "</div></div>";
    }
  },
  certs: {
    key: "certs", label: "认证",
    fields: [
      { name: "mark", label: "缩写（如 CE）" },
      { name: "name", label: "名称" },
      { name: "scope", label: "范围说明" }
    ],
    row: function (it) {
      return '<div><span class="row-title">' + esc(it.name) + '</span><div class="muted">' + esc(it.scope || "") + "</div></div>";
    }
  }
};

/* ---------------- list rendering ---------------- */
function renderList(key) {
  const cfg = COLL[key];
  const items = site[cfg.key] || [];
  const el = $("#view-content");
  if (!items.length) {
    el.innerHTML = '<div class="adm-card" style="text-align:center;color:var(--ink-3);padding:60px 20px;">暂无数据，点击右上角「新增」添加。</div>';
    return;
  }
  el.innerHTML = '<div class="adm-card"><div class="adm-table-wrap"><table class="adm-table"><thead><tr><th style="width:44px;">#</th><th>内容</th><th style="width:150px;">操作</th></tr></thead><tbody>' +
    items.map(function (it, i) {
      return "<tr><td class='muted'>" + (i + 1) + "</td><td>" + cfg.row(it) + '</td><td><div class="row-actions">' +
        '<button class="btn btn-outline btn-sm" data-edit="' + esc(it.id) + '">编辑</button>' +
        '<button class="btn btn-sm" style="background:#F1E4E4;color:#A04040;" data-del="' + esc(it.id) + '">删除</button>' +
        "</div></td></tr>";
    }).join("") + "</tbody></table></div></div>";
  $$("[data-edit]", el).forEach(function (b) {
    b.addEventListener("click", function () { openCollectionModal(key, b.getAttribute("data-edit")); });
  });
  $$("[data-del]", el).forEach(function (b) {
    b.addEventListener("click", function () { delItem(key, b.getAttribute("data-del")); });
  });
}

function delItem(key, id) {
  if (!confirm("确定删除这条数据吗？")) return;
  site[key] = site[key].filter(function (x) { return x.id !== id; });
  save();
  toast("已删除");
  VIEWS[currentView].render($("#view-content"));
  updateNavCounts();
}

/* ---------------- modal form ---------------- */
function openModal(html, wide) {
  const box = $("#adm-modal-box");
  box.className = "adm-modal" + (wide ? " wide" : "");
  box.innerHTML = html;
  $("#adm-modal").classList.add("open");
  const close = box.querySelector(".adm-modal-close");
  if (close) close.addEventListener("click", closeModal);
  $("#adm-modal").addEventListener("click", function (e) { if (e.target === this) closeModal(); });
}

function closeModal() {
  $("#adm-modal").classList.remove("open");
  $("#adm-modal-box").innerHTML = "";
}

function langTabBar(active) {
  return '<div class="lang-tabs">' + LANGS.map(function (l) {
    return '<button type="button" class="lang-tab' + (l === active ? " active" : "") + '" data-ltab="' + l + '">' + LANG_NAMES[l] + "</button>";
  }).join("") + "</div>";
}

function fieldHtml(name, label, value, type, lang) {
  const id = "f-" + name;
  if (type === "textarea") {
    return '<div class="field ' + (lang ? "flang" : "") + '" data-lang="' + (lang || "") + '"><label for="' + id + '">' + label + "</label>" +
      '<textarea id="' + id + '" name="' + name + '" rows="3">' + esc(value || "") + "</textarea></div>";
  }
  if (type === "number") {
    return '<div class="field ' + (lang ? "flang" : "") + '" data-lang="' + (lang || "") + '"><label for="' + id + '">' + label + "</label>" +
      '<input id="' + id + '" name="' + name + '" type="number" value="' + esc(value || "") + '"></div>';
  }
  return '<div class="field ' + (lang ? "flang" : "") + '" data-lang="' + (lang || "") + '"><label for="' + id + '">' + label + "</label>" +
    '<input id="' + id + '" name="' + name + '" type="text" value="' + esc(value || "") + '"></div>';
}

function imageFieldHtml(name, value) {
  return '<div class="field full"><label>' + "图片（填 URL 或上传本地图，建议 ≤ 300KB）" + '</label><div class="img-field">' +
    '<img class="preview" id="prev-' + name + '" src="' + esc(value || "") + '" alt="" onerror="this.style.opacity=0.25">' +
    '<div class="controls"><input type="text" name="' + name + '" value="' + esc(value || "") + '" placeholder="https://... 或 images/xxx.jpg">' +
    '<input type="file" accept="image/*" data-upload="' + name + '">' +
    '<span class="hint">提示：上传的图片会转为 base64 存入浏览器存储，单张过大可能超出容量；正式服务器建议用 FTP 上传图片后填 URL。</span></div></div></div>';
}

function iconFieldHtml(name, value) {
  return '<div class="field"><label>图标</label><select name="' + name + '" id="f-icon">' +
    Object.keys(AICONS).map(function (k) {
      return '<option value="' + k + '"' + (value === k ? " selected" : "") + ">" + k + "</option>";
    }).join("") +
    '</select><div id="icon-preview" style="margin-top:8px;width:44px;height:44px;border-radius:12px;background:var(--accent-soft);color:var(--accent);display:inline-flex;align-items:center;justify-content:center;">' + (AICONS[value] || "") + "</div></div>";
}

function openCollectionModal(key, id) {
  const cfg = COLL[key];
  const list = site[cfg.key];
  const item = id ? list.find(function (x) { return x.id === id; }) : { id: uid("n"), icon: "box" };
  const editing = !!id;
  let activeLang = "en";
  let html = '<button type="button" class="btn btn-outline btn-sm adm-modal-close">✕</button>' +
    "<h2>" + (editing ? "编辑" : "新增") + cfg.label + "</h2>" +
    '<div class="modal-sub">带语言标签的字段支持 4 种语言，不填则前台显示英文。</div>';
  const hasLang = cfg.fields.some(function (f) { return f.lang; });
  if (hasLang) html += langTabBar(activeLang);
  html += '<form class="adm-form">';
  cfg.fields.forEach(function (f) {
    if (f.type === "img") html += imageFieldHtml(f.name, item[f.name]);
    else if (f.type === "icon") html += iconFieldHtml(f.name, item[f.name]);
    else if (f.lang) {
      LANGS.forEach(function (l) {
        html += fieldHtml(f.name + "_" + l, f.label + "（" + LANG_NAMES[l].split(" ")[0] + "）", item[f.name + "_" + l], f.type, l);
      });
    } else {
      html += fieldHtml(f.name, f.label, item[f.name], f.type);
    }
  });
  html += '<div class="adm-form-actions">' +
    '<button type="submit" class="btn btn-primary">保存</button>' +
    '<button type="button" class="btn btn-outline" data-cancel>取消</button></div></form>';
  openModal(html);
  if (hasLang) initLangTabs(activeLang);
  initImageUploads();
  const iconSel = $("#f-icon");
  if (iconSel) {
    iconSel.addEventListener("change", function () {
      $("#icon-preview").innerHTML = AICONS[iconSel.value] || "";
    });
  }
  const form = $("#adm-modal-box form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const fd = new FormData(form);
    const out = {};
    cfg.fields.forEach(function (f) {
      if (f.lang) {
        LANGS.forEach(function (l) { out[f.name + "_" + l] = (fd.get(f.name + "_" + l) || "").trim(); });
      } else if (f.type === "img") {
        out[f.name] = (fd.get(f.name) || "").trim();
      } else {
        out[f.name] = (fd.get(f.name) || "").trim();
      }
    });
    out.id = item.id;
    if (editing) {
      const idx = list.findIndex(function (x) { return x.id === id; });
      list[idx] = Object.assign({}, list[idx], out);
    } else {
      list.push(out);
    }
    save();
    toast("已保存");
    closeModal();
    VIEWS[currentView].render($("#view-content"));
    updateNavCounts();
  });
  const cancel = $("#adm-modal-box [data-cancel]");
  if (cancel) cancel.addEventListener("click", closeModal);
}

function initLangTabs(active) {
  $$(".lang-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      const l = tab.getAttribute("data-ltab");
      $$(".lang-tab").forEach(function (x) { x.classList.toggle("active", x === tab); });
      $$(".flang", $("#adm-modal-box")).forEach(function (fld) {
        fld.style.display = fld.getAttribute("data-lang") === l ? "" : "none";
      });
    });
  });
  $$(".flang", $("#adm-modal-box")).forEach(function (fld) {
    fld.style.display = fld.getAttribute("data-lang") === active ? "" : "none";
  });
}

function initImageUploads() {
  $$("[data-upload]").forEach(function (input) {
    input.addEventListener("change", function () {
      const file = input.files && input.files[0];
      if (!file) return;
      if (file.size > 400 * 1024) { toast("图片超过 400KB，建议压缩后再上传"); return; }
      const name = input.getAttribute("data-upload");
      const reader = new FileReader();
      reader.onload = function () {
        const textInput = $("#adm-modal-box input[name='" + name + "']");
        if (textInput) textInput.value = reader.result;
        const prev = $("#prev-" + name);
        if (prev) prev.src = reader.result;
        toast("图片已载入，保存后生效");
      };
      reader.readAsDataURL(file);
    });
  });
}

/* ---------------- products (special CRUD) ---------------- */
function renderProducts() {
  const el = $("#view-content");
  const items = site.products;
  el.innerHTML = '<div class="adm-card"><div class="adm-table-wrap"><table class="adm-table"><thead><tr>' +
    "<th>产品</th><th>分类</th><th>状态</th><th>参数数</th><th style='width:190px;'>操作</th></tr></thead><tbody>" +
    items.map(function (p) {
      return "<tr><td><div style='display:flex;gap:12px;align-items:center;'>" +
        '<img class="thumb" src="' + esc(p.img) + '" alt="">' +
        '<div><span class="row-title">' + esc(p.name_en || "") + '</span><div class="muted">' + esc((p.desc_en || "").slice(0, 60)) + "</div></div></div></td>" +
        "<td>" + esc(catNameOf(p.cat)) + "</td>" +
        "<td><span class='pill " + (p.active === false ? "pill-off" : "pill-on") + "'>" + (p.active === false ? "隐藏" : "显示") + "</span> " +
        (p.featured ? '<span class="pill pill-feat">推荐</span>' : "") + "</td>" +
        "<td class='muted'>" + (p.specs || []).length + "</td>" +
        '<td><div class="row-actions">' +
        '<button class="btn btn-outline btn-sm" data-edit="' + esc(p.id) + '">编辑</button>' +
        '<button class="btn btn-outline btn-sm" data-copy="' + esc(p.id) + '">复制</button>' +
        '<button class="btn btn-sm" style="background:#F1E4E4;color:#A04040;" data-del="' + esc(p.id) + '">删除</button>' +
        "</div></td></tr>";
    }).join("") + "</tbody></table></div></div>";
  $$("[data-edit]", el).forEach(function (b) {
    b.addEventListener("click", function () { openProductModal(b.getAttribute("data-edit")); });
  });
  $$("[data-copy]", el).forEach(function (b) {
    b.addEventListener("click", function () { copyProduct(b.getAttribute("data-copy")); });
  });
  $$("[data-del]", el).forEach(function (b) {
    b.addEventListener("click", function () { delItem("products", b.getAttribute("data-del")); });
  });
}

function copyProduct(id) {
  const src = site.products.find(function (x) { return x.id === id; });
  if (!src) return;
  const copy = JSON.parse(JSON.stringify(src));
  copy.id = uid("p");
  copy.name_en = (copy.name_en || "") + " (Copy)";
  site.products.push(copy);
  save();
  toast("已复制，请编辑名称");
  renderProducts();
}

function specRowsHtml(specs) {
  const datalist = '<datalist id="spec-keys">' + SPEC_KEYS.map(function (s) { return '<option value="' + s[0] + '">' + s[1] + "</option>"; }).join("") + "</datalist>";
  const rows = (specs || []).map(function (s, i) {
    return '<div class="spec-row" data-idx="' + i + '">' +
      '<input name="spec-k" list="spec-keys" placeholder="参数名（如 power）" value="' + esc(s.k) + '">' +
      '<input name="spec-v" placeholder="参数值（如 2000W）" value="' + esc(s.v) + '">' +
      '<button type="button" class="spec-del" title="删除">✕</button></div>';
  }).join("") +
    '<div class="spec-row" data-idx="new"><input name="spec-k" list="spec-keys" placeholder="参数名"><input name="spec-v" placeholder="参数值"></div>';
  return '<div class="specs-editor"><label style="font-size:0.84rem;font-weight:600;color:var(--brown-deep);display:block;margin-bottom:8px;">规格参数（键值对，键可用英文 key，前台自动翻译标签）</label>' + datalist + rows + "</div>";
}

function openProductModal(id) {
  const list = site.products;
  const p = id ? list.find(function (x) { return x.id === id; }) : { id: uid("p"), cat: site.categories[0] ? site.categories[0].id : "", specs: [], featured: false, active: true };
  const editing = !!id;
  let activeLang = "en";
  let html = '<button type="button" class="btn btn-outline btn-sm adm-modal-close">✕</button>' +
    "<h2>" + (editing ? "编辑产品" : "新增产品") + "</h2>" +
    '<div class="modal-sub">名称 / 描述 / 角标支持 4 种语言；不填则前台显示英文。</div>' +
    langTabBar(activeLang) +
    '<form class="adm-form">' +
    imageFieldHtml("img", p.img) +
    '<div class="field full"><label>所属分类</label><select name="cat">' +
    site.categories.map(function (c) { return '<option value="' + c.id + '"' + (p.cat === c.id ? " selected" : "") + ">" + esc(c.name_en) + "</option>"; }).join("") +
    "</select></div>";
  LANGS.forEach(function (l) {
    html += fieldHtml("name_" + l, "产品名称（" + LANG_NAMES[l].split(" ")[0] + "）", p["name_" + l], "text", l);
  });
  LANGS.forEach(function (l) {
    html += fieldHtml("badge_" + l, "角标（" + LANG_NAMES[l].split(" ")[0] + "，如 Hot/New，可留空）", p["badge_" + l], "text", l);
  });
  LANGS.forEach(function (l) {
    html += fieldHtml("desc_" + l, "描述（" + LANG_NAMES[l].split(" ")[0] + "）", p["desc_" + l], "textarea", l);
  });
  html += '<div class="field"><label>设为首页推荐</label><span class="switch"><input type="checkbox" name="featured" id="f-featured"' + (p.featured ? " checked" : "") + '><span class="slider"></span></span></div>' +
    '<div class="field"><label>前台显示</label><span class="switch"><input type="checkbox" name="active" id="f-active"' + (p.active !== false ? " checked" : "") + '><span class="slider"></span></span></div>' +
    specRowsHtml(p.specs) +
    '<div class="adm-form-actions">' +
    '<button type="submit" class="btn btn-primary">保存</button>' +
    '<button type="button" class="btn btn-outline" data-cancel>取消</button></div></form>';
  openModal(html, true);
  initLangTabs(activeLang);
  initImageUploads();
  /* spec rows: remove + add blank row */
  const box = $("#adm-modal-box");
  box.addEventListener("click", function (e) {
    if (e.target.classList.contains("spec-del")) {
      const row = e.target.closest(".spec-row");
      if (row && row.getAttribute("data-idx") !== "new") row.remove();
      else if (row) { row.querySelector("input").value = ""; row.querySelectorAll("input")[1].value = ""; }
    }
  });
  const form = box.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const fd = new FormData(form);
    const out = { id: p.id };
    out.img = (fd.get("img") || "").trim();
    out.cat = fd.get("cat") || "";
    out.featured = fd.get("featured") === "on";
    out.active = fd.get("active") === "on";
    LANGS.forEach(function (l) {
      out["name_" + l] = (fd.get("name_" + l) || "").trim();
      out["badge_" + l] = (fd.get("badge_" + l) || "").trim();
      out["desc_" + l] = (fd.get("desc_" + l) || "").trim();
    });
    const specs = [];
    const ks = fd.getAll("spec-k");
    const vs = fd.getAll("spec-v");
    for (let i = 0; i < ks.length; i++) {
      if (ks[i] && ks[i].trim() && vs[i] && vs[i].trim()) specs.push({ k: ks[i].trim(), v: vs[i].trim() });
    }
    out.specs = specs;
    if (editing) {
      const idx = list.findIndex(function (x) { return x.id === id; });
      list[idx] = Object.assign({}, list[idx], out);
    } else {
      list.push(out);
    }
    save();
    toast("产品已保存");
    closeModal();
    renderProducts();
    updateNavCounts();
  });
  const cancel = box.querySelector("[data-cancel]");
  if (cancel) cancel.addEventListener("click", closeModal);
}

/* ---------------- dashboard ---------------- */
function renderDashboard() {
  const inqs = store.loadInquiries();
  const unread = inqs.filter(function (i) { return !i.read; }).length;
  const el = $("#view-content");
  el.innerHTML =
    '<div class="stats-row">' +
    '<div class="stat-tile"><div class="n">' + site.products.length + '</div><div class="l">产品总数</div></div>' +
    '<div class="stat-tile"><div class="n">' + site.categories.length + '</div><div class="l">产品分类</div></div>' +
    '<div class="stat-tile"><div class="n">' + site.testimonials.length + '</div><div class="l">客户见证</div></div>' +
    '<div class="stat-tile"><div class="n">' + unread + '</div><div class="l">未读询盘</div></div>' +
    "</div>" +
    '<div class="adm-card"><h2>快速开始</h2><div class="card-sub">上线前建议按顺序完成：</div>' +
    "<ol style='margin:0 0 0 18px;color:var(--ink-2);display:grid;gap:8px;font-size:0.92rem;'>" +
    "<li>进入「网站设置」填写真实公司名、电话、WhatsApp 号码、邮箱、地址（前台所有位置自动同步）；</li>" +
    "<li>把 <code>images/</code> 里的占位图换成您的真实工厂与产品照片（尺寸建议：轮播 1600×900，产品 800×800）；</li>" +
    "<li>在「产品管理」完善每个产品的参数与多语言描述；</li>" +
    "<li>在「网站设置」填入 Google Analytics 4 的 Measurement ID（如 G-XXXXXXX），并在 <code>api/submit.php</code> 配置邮箱；</li>" +
    "<li>登录后台后，请及时修改并妥善保管密码。</li>" +
    "</ol></div>" +
    '<div class="adm-card"><h2>数据管理</h2><div class="card-sub">导出 / 导入全部网站内容（JSON），或一键恢复演示数据。</div>' +
    '<div style="display:flex;gap:10px;flex-wrap:wrap;">' +
    '<button class="btn btn-outline" id="data-export">导出数据 JSON</button>' +
    '<button class="btn btn-outline" id="data-import">导入数据 JSON</button>' +
    '<input type="file" id="data-import-file" accept="application/json" style="display:none;">' +
    '<button class="btn btn-sm" id="data-reset" style="background:#F1E4E4;color:#A04040;">恢复演示数据</button>' +
    "</div></div>";
  const exp = $("#data-export");
  if (exp) exp.addEventListener("click", function () {
    const blob = new Blob([JSON.stringify(site, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "site-backup-" + new Date().toISOString().slice(0, 10) + ".json";
    a.click();
  });
  const impBtn = $("#data-import");
  const impFile = $("#data-import-file");
  if (impBtn && impFile) {
    impBtn.addEventListener("click", function () { impFile.click(); });
    impFile.addEventListener("change", function () {
      const f = impFile.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = function () {
        try {
          const data = JSON.parse(reader.result);
          if (!data.settings || !data.products) throw new Error("bad");
          site = data;
          save();
          toast("导入成功");
          renderDashboard();
          updateNavCounts();
        } catch (err) {
          toast("文件格式不正确");
        }
      };
      reader.readAsText(f);
    });
  }
  const reset = $("#data-reset");
  if (reset) reset.addEventListener("click", function () {
    if (!confirm("确定恢复为演示数据吗？当前所有修改将丢失。")) return;
    store.resetSite();
    site = store.loadSite();
    save();
    toast("已恢复演示数据");
    renderDashboard();
    updateNavCounts();
  });
}

/* ---------------- settings ---------------- */
function renderSettings() {
  const s = site.settings;
  const el = $("#view-content");
  el.innerHTML =
    '<div class="adm-card"><h2>公司信息与联系方式</h2><div class="card-sub">以下内容会同步到全站页眉、页脚、联系页与 WhatsApp 链接。也可以用右下角的 AI 助手（🎤 语音 / 📷 图片识别 / 📄 上传目录）来智能填写。</div>' +
    '<form class="adm-form" id="settings-form">' +
    fieldHtml("brand", "公司名称（显示在 Logo）", s.brand) +
    fieldHtml("phone", "电话", s.phone) +
    fieldHtml("whatsapp", "WhatsApp 号码（纯数字含国家码，如 8613900000000）", s.whatsapp) +
    fieldHtml("email", "邮箱", s.email) +
    '<div class="field full">' + '<label>地址</label><input name="address" type="text" value="' + esc(s.address) + '"></div>' +
    fieldHtml("hours", "工作时间", s.hours) +
    fieldHtml("mapQuery", "谷歌地图定位（城市/地址，如 Ronggui, Shunde, Foshan）", s.mapQuery) +
    fieldHtml("analyticsId", "Google Analytics 4 测量 ID（如 G-XXXXXXX，留空则不加载）", s.analyticsId) +
    fieldHtml("tawkId", "Tawk.to 聊天插件 ID（登录 Tawk.to 后 Widget 代码里的 embed.tawk.to/ 后面那串，留空则不加载）", s.tawkId) +
    fieldHtml("fbpixelId", "Facebook Pixel ID（如 123456789012345，用于 Facebook 广告投放追踪，留空则不加载）", s.fbpixelId) +
    fieldHtml("klaviyoId", "Klaviyo Company ID（6 位大写字母，如 ABCDEF，留空则不加载）", s.klaviyoId) +
    fieldHtml("aiApiKey", "AI 解析 API Key（智谱开放平台或 OpenAI 的 Key，用于 PDF 目录智能录入；仅存于本浏览器）", s.aiApiKey) +
    fieldHtml("aiApiBase", "AI API 地址（智谱默认 https://open.bigmodel.cn/api/paas/v4；OpenAI 填 https://api.openai.com/v1）", s.aiApiBase) +
    fieldHtml("aiModel", "AI 视觉模型（智谱填 glm-4v-plus 或 glm-4v-flash；OpenAI 填 gpt-4o）", s.aiModel) +
    fieldHtml("crmWebhook", "新询盘推送地址（pushplus：填 pushplus.plus 的 token；飞书：填群机器人 Webhook；留空不启用）", s.crmWebhook) +
    fieldHtml("crmWebhookType", "推送类型（pushplus = 微信推送；feishu = 飞书群机器人；generic = 通用 JSON 接口）", s.crmWebhookType) +
    fieldHtml("samplePayLink", "样品支付链接（PayPal.Me 或 Stripe Payment Link，填写后产品详情页显示 Buy Sample 按钮）", s.samplePayLink) +
    fieldHtml("factoryVideo", "工厂视频链接（YouTube 或 B 站嵌入地址，填写后关于我们页显示验厂视频）", s.factoryVideo) +
    '<div class="adm-form-actions"><button type="submit" class="btn btn-primary">保存设置</button></div>' +
    "</form></div>" +
    '<div class="adm-card"><h2>修改后台密码</h2><div class="card-sub">请使用管理员账号登录；密码请妥善保管、定期更换。</div>' +
    '<form class="adm-form" id="pass-form">' +
    fieldHtml("oldpass", "当前密码", "", "password") +
    fieldHtml("newpass", "新密码（至少 6 位）", "", "password") +
    '<div class="adm-form-actions"><button type="submit" class="btn btn-primary">更新密码</button></div></form></div>';
  $("#settings-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const fd = new FormData(this);
    ["brand", "phone", "whatsapp", "email", "address", "hours", "mapQuery", "analyticsId", "klaviyoId", "tawkId", "fbpixelId", "aiApiKey", "aiApiBase", "aiModel", "crmWebhook", "crmWebhookType", "samplePayLink", "factoryVideo"].forEach(function (k) {
      s[k] = (fd.get(k) || "").trim();
    });
    save();
    toast("设置已保存");
  });
  $("#pass-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const fd = new FormData(this);
    const oldp = fd.get("oldpass") || "";
    const newp = (fd.get("newpass") || "").trim();
    if (oldp !== s.adminPass) { toast("当前密码不正确"); return; }
    if (newp.length < 6) { toast("新密码至少 6 位"); return; }
    s.adminPass = newp;
    save();
    toast("密码已更新");
    this.reset();
  });
}

/* ---------------- inquiries ---------------- */
function renderInquiries() {
  const el = $("#view-content");
  el.innerHTML = '<div class="adm-card" style="text-align:center;color:var(--ink-3);padding:60px 20px;">正在从云端加载询盘…</div>';
  store.fetchInquiries().then(function (list) {
    list = list || [];
    if (!list.length) {
      el.innerHTML = '<div class="adm-card" style="text-align:center;color:var(--ink-3);padding:60px 20px;">暂无询盘。前台客户提交后，数据会实时写入云端数据库，在这里即可看到。</div>';
      updateNavCounts();
      return;
    }
    el.innerHTML = list.map(function (q) {
      const d = new Date(q.ts || q.created_at);
      return '<div class="inq-item' + (q.read ? "" : " unread") + '" data-id="' + esc(q.id) + '">' +
        '<div class="inq-head"><span class="inq-who">' + esc(q.name || "?") + (q.company ? " · " + esc(q.company) : "") + "</span>" +
        '<span class="inq-time">' + d.toLocaleString("zh-CN") + " · " + esc(q.page || "") + "</span></div>" +
        '<div class="inq-meta">' +
        (q.email ? '<span>✉ ' + esc(q.email) + "</span>" : "") +
        (q.phone ? '<span>☎ ' + esc(q.phone) + "</span>" : "") +
        (q.whatsapp ? '<span>🟢 ' + esc(q.whatsapp) + "</span>" : "") +
        (q.country ? "<span>🌍 " + esc(q.country) + "</span>" : "") +
        (q.product ? "<span>📦 " + esc(q.product) + "</span>" : "") +
        (q.qty ? "<span>🔢 " + esc(q.qty) + "</span>" : "") +
        "</div>" +
        (q.msg ? '<div class="inq-msg">' + esc(q.msg) + "</div>" : "") +
        '<div class="inq-actions">' +
        '<a class="btn btn-wa btn-sm" href="https://wa.me/' + esc(site.settings.whatsapp.replace(/[^0-9]/g, "")) + '?text=' + encodeURIComponent("Hi " + (q.name || "") + ", thanks for your inquiry about " + (q.product || "our products") + ".") + '" target="_blank" rel="noopener">WhatsApp 回复</a>' +
        '<a class="btn btn-outline btn-sm" href="mailto:' + esc(q.email) + '?subject=Re: ' + encodeURIComponent("Your inquiry - " + (q.product || "Home appliances")) + '">邮件回复</a>' +
        '<button class="btn btn-outline btn-sm" data-read="' + esc(q.id) + '">' + (q.read ? "标为未读" : "标为已读") + "</button>" +
        '<button class="btn btn-sm" style="background:#F1E4E4;color:#A04040;" data-del="' + esc(q.id) + '">删除</button>' +
        "</div></div>";
    }).join("");
    $$("[data-read]", el).forEach(function (b) {
      b.addEventListener("click", function () {
        const id = b.getAttribute("data-read");
        const item = list.find(function (x) { return x.id === id; });
        if (!item) return;
        const newRead = !item.read;
        item.read = newRead;
        store.markInquiryRead(id, newRead);
        renderInquiries();
        updateNavCounts();
      });
    });
    $$("[data-del]", el).forEach(function (b) {
      b.addEventListener("click", function () {
        if (!confirm("删除这条询盘？")) return;
        const id = b.getAttribute("data-del");
        store.deleteInquiry(id);
        renderInquiries();
        updateNavCounts();
      });
    });
    updateNavCounts();
  });
}

function exportInquiries() {
  const list = store.loadInquiries();
  if (!list.length) { toast("暂无询盘可导出"); return; }
  const head = "时间,姓名,公司,邮箱,电话,WhatsApp,国家,产品,数量,页面,消息";
  const rows = list.map(function (q) {
    return [q.ts, q.name, q.company, q.email, q.phone, q.whatsapp, q.country, q.product, q.qty, q.page, (q.msg || "").replace(/\n/g, " ")].map(function (v) {
      return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"';
    }).join(",");
  });
  const blob = new Blob(["\uFEFF" + head + "\n" + rows.join("\n")], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "inquiries-" + new Date().toISOString().slice(0, 10) + ".csv";
  a.click();
}

/* ==========================================================================
   AI PDF product parsing - upload a catalog PDF, render pages to images,
   call a vision LLM (Zhipu GLM-4V / OpenAI compatible) to extract products,
   generate review drafts, then approve them into the live product list.
   ========================================================================== */
const LS_DRAFTS = "hw_drafts_v1";

function loadDrafts() { try { return JSON.parse(localStorage.getItem(LS_DRAFTS)) || []; } catch (e) { return []; } }
function saveDrafts(list) { localStorage.setItem(LS_DRAFTS, JSON.stringify(list)); }

const AI_SPEC_KEYS = ["power", "voltage", "frequency", "size", "weight", "material", "warranty", "moq", "colors", "control", "noise", "heating", "airflow", "speeds", "battery", "runtime", "waterproof", "certification", "blades", "timer", "levels", "dimension", "netweight", "grossweight", "packsize", "loading", "display", "cookware", "oscillation", "remote", "ion", "voltageRange", "safety", "giftbox", "cartonsize", "casepack"];
const AI_CATS = ["induction-cooker", "infrared-cooker", "tea-extractor", "coffee-tea-maker"];

function sanitizeAiItems(items) {
  if (!Array.isArray(items)) return [];
  const out = [];
  items.forEach(function (x) {
    if (!x || !x.name_en) return;
    const specs = (x.specs || [])
      .filter(function (s) { return s && AI_SPEC_KEYS.indexOf(s.k) !== -1 && String(s.v).trim(); })
      .slice(0, 14)
      .map(function (s) { return { k: s.k, v: String(s.v).trim().slice(0, 60) }; });
    out.push({
      name_en: String(x.name_en).trim().slice(0, 80),
      cat: AI_CATS.indexOf(x.cat) !== -1 ? x.cat : "other",
      specs: specs,
      desc_en: (x.desc_en || "").trim().slice(0, 160),
      img: x.img || ""
    });
  });
  return out;
}

const AI_PROMPT = [
  "You extract product data from a home-appliance catalog page image.",
  "Return a JSON array of ALL products visible on this page. Each item:",
  "{",
  '  "name_en": "product name in English - MUST include the model number (e.g. WQ-2835A) when visible on the page",',
  '  "cat": one of: "induction-cooker", "infrared-cooker", "tea-extractor", "coffee-tea-maker", "other",',
  '  "specs": [{"k": "...", "v": "..."}],  // k must be one of the allowed keys below',
  '  "desc_en": "one short English marketing sentence (model, key features)"',
  "}",
  "Allowed spec keys (exact match): power, voltage, frequency, size, weight, material, warranty, moq, colors, control, noise, heating, airflow, speeds, battery, runtime, waterproof, certification, blades, timer, levels, dimension, netweight, grossweight, packsize, loading, display, cookware, oscillation, remote, ion, voltageRange, safety, giftbox, cartonsize, casepack",
  "Extraction rules:",
  "1. Read EVERY specification row in the detail table (usually 15-18 rows): voltage, power, timer, heating gears, safety protections, materials, dimensions, certifications - extract them ALL.",
  "2. Packaging table: gift box size -> giftbox, carton size -> cartonsize, case pack qty -> casepack, container loading 20FT/40FT/40HQ -> loading.",
  "3. Model number (WQ-XXXX) is MANDATORY in name_en when printed on the page. Never omit it.",
  "4. If a spec value is marketing wording instead of a real number/parameter, skip that spec.",
  "5. On overview pages where products appear as small cards without technical data, still list the products by name (with model number if visible) with empty specs.",
  "No markdown, no explanation, ONLY the JSON array. If no product appears on this page, return [].",
  "Important: if a spec value is marketing wording instead of a real number/parameter (for example \"High power\"), do NOT create a spec entry - leave specs empty. Never invent spec keys outside the allowed list. On overview pages where products appear as small cards without technical data, still list the products by name with empty specs."
].join("\n");


function ensurePdfJs(cb) {
  if (window.pdfjsLib) return cb();
  const s = document.createElement("script");
  s.src = "js/vendor/pdf.min.js";
  s.onload = function () {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = "js/vendor/pdf.worker.min.js";
    cb();
  };
  s.onerror = function () { toast("pdf.js 加载失败，请检查 js/vendor 目录是否完整"); };
  document.head.appendChild(s);
}

function renderAiParse() {
  const el = $("#view-content");
  const s = site.settings;
  const hasKey = !!s.aiApiKey;
  const drafts = loadDrafts();
  el.innerHTML =
    '<div class="adm-card"><h2>AI 配置状态</h2><div class="card-sub">解析引擎：' + esc(s.aiModel || "未设置") + " · " + esc(s.aiApiBase || "未设置") + "</div>" +
    '<p style="font-size:0.9rem;margin:0;">' +
    (hasKey ? '<span class="pill pill-on">API Key 已配置，可直接解析</span>' : '<span class="pill pill-off">未配置 API Key</span> — 去「网站设置」填入智谱或 OpenAI 的 Key（免费注册智谱开放平台即可，glm-4v-flash 免费）') +
    "</p></div>" +
    '<div class="adm-card"><h2>上传产品目录 PDF</h2>' +
    '<div class="card-sub">支持扫描版 / 图片版目录：AI 把每一页转成图片后用视觉模型识别。建议一次传一个品类，识别更准；页数多时耐心等进度条走完。现支持同型号自动去重合并。</div>' +
    '<div class="ai-upload" id="ai-drop"><input type="file" id="ai-file" accept="application/pdf,.pdf" hidden>' +
    '<p style="margin:0 0 6px;"><button class="btn btn-outline btn-sm" id="ai-browse">选择 PDF 文件</button></p>' +
    '<span class="muted" style="font-size:0.82rem;">解析结果不会自动上架，全部生成「产品草稿」，由你审核通过后才出现在前台。</span></div>' +
    '<div class="ai-progress" id="ai-progress" hidden><div class="ai-bar"><div class="ai-bar-fill" id="ai-bar-fill"></div></div><div class="ai-msg" id="ai-msg">准备中...</div></div>' +
    '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;">' +
    '<button class="btn btn-outline btn-sm" id="ai-demo">载入演示草稿（无 Key 体验审核流程）</button>' +
    '<button class="btn btn-outline btn-sm" id="ai-import">从 JSON 文件导入草稿</button>' +
    '<input type="file" id="ai-import-file" accept="application/json,.json" hidden>' +
    "</div>" +
    "</div>" +
    '<div class="adm-card"><div class="adm-card-header"><h2>产品草稿（' + drafts.length + " 条待审核）</h2>" +
    '<div class="row-actions">' +
    (drafts.length ? '<button class="btn btn-primary btn-sm" id="ai-approve-all">全部通过上架</button><button class="btn btn-outline btn-sm" id="ai-clear">清空草稿</button>' : "") +
    "</div></div>" +
    '<div class="draft-grid" id="draft-grid">' +
    (drafts.length ? drafts.map(draftCardHtml).join("") : '<div style="grid-column:1/-1;text-align:center;color:var(--ink-3);padding:30px 10px;">暂无草稿。上传 PDF 或载入演示草稿。</div>') +
    "</div></div>";

  $("#ai-browse").addEventListener("click", function () { $("#ai-file").click(); });
  $("#ai-file").addEventListener("change", function () {
    const f = this.files && this.files[0];
    if (f) startAiParse(f);
  });
  const drop = $("#ai-drop");
  drop.addEventListener("dragover", function (e) { e.preventDefault(); drop.classList.add("over"); });
  drop.addEventListener("dragleave", function () { drop.classList.remove("over"); });
  drop.addEventListener("drop", function (e) {
    e.preventDefault();
    drop.classList.remove("over");
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    if (f && /pdf/i.test(f.name)) startAiParse(f);
    else if (f) toast("请上传 PDF 文件");
  });
  $("#ai-demo").addEventListener("click", loadDemoDrafts);
  $("#ai-import").addEventListener("click", function () { $("#ai-import-file").click(); });
  $("#ai-import-file").addEventListener("change", function () {
    const f = this.files && this.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = function () {
      try {
        const data = JSON.parse(reader.result);
        const arr = Array.isArray(data) ? data : (data.products || data.items || []);
        if (!arr.length) { toast("JSON 中未找到产品数组"); return; }
        const items = sanitizeAiItems(arr);
        if (!items.length) { toast("JSON 数据格式不匹配（需要 name_en 字段）"); return; }
        const drafts = loadDrafts();
        items.forEach(function (x) { x.id = uid("d"); x.ts = new Date().toISOString(); x.source = f.name; });
        saveDrafts(drafts.concat(items));
        toast("已导入 " + items.length + " 条草稿");
        renderAiParse();
        updateNavCounts();
      } catch (e) { toast("文件解析失败：" + (e && e.message ? e.message : e)); }
    };
    reader.readAsText(f);
    this.value = "";
  });
  const allBtn = $("#ai-approve-all");
  if (allBtn) allBtn.addEventListener("click", approveAllDrafts);
  const clearBtn = $("#ai-clear");
  if (clearBtn) clearBtn.addEventListener("click", function () {
    if (!confirm("确定清空全部草稿？")) return;
    saveDrafts([]);
    renderAiParse();
    updateNavCounts();
  });
  $$("[data-approve]", el).forEach(function (b) {
    b.addEventListener("click", function () { approveDraft(b.getAttribute("data-approve")); });
  });
  $$("[data-draft-del]", el).forEach(function (b) {
    b.addEventListener("click", function () {
      const id = b.getAttribute("data-draft-del");
      saveDrafts(loadDrafts().filter(function (x) { return x.id !== id; }));
      renderAiParse();
      updateNavCounts();
    });
  });
  $$("[data-draft-toggle]", el).forEach(function (b) {
    b.addEventListener("click", function () {
      const id = b.getAttribute("data-draft-toggle");
      const body = $("#draft-body-" + id);
      if (body) body.classList.toggle("open");
    });
  });
}

function catLabel(id) {
  const c = site.categories.find(function (x) { return x.id === id; });
  return c ? c.name_en : (id || "other");
}

function draftCardHtml(d) {
  const catImg = (site.categories.find(function (c) { return c.id === d.cat; }) || {}).img || "";
  const img = d.img || catImg;
  const specs = (d.specs || []).slice(0, 14);
  return '<div class="draft-card">' +
    '<img class="draft-thumb" src="' + esc(img) + '" alt="" onerror="this.style.opacity=0.25">' +
    '<div class="draft-main"><div class="draft-name">' + esc(d.name_en || "未命名产品") + "</div>" +
    '<div class="draft-meta"><span class="pill pill-feat">' + esc(catLabel(d.cat)) + '</span>' +
    '<span class="muted">' + esc(d.source || "") + "</span></div>" +
    (d.desc_en ? '<div class="draft-desc">' + esc(d.desc_en) + "</div>" : "") +
    '<button class="btn btn-outline btn-sm" data-draft-toggle="' + esc(d.id) + '">展开参数（' + specs.length + "）</button>" +
    '<div class="draft-body" id="draft-body-' + esc(d.id) + '"><ul class="draft-specs">' +
    specs.map(function (sp) { return "<li><span>" + esc(sp.k) + '</span><b>' + esc(sp.v) + "</b></li>"; }).join("") +
    "</ul></div></div>" +
    '<div class="draft-actions">' +
    '<button class="btn btn-primary btn-sm" data-approve="' + esc(d.id) + '">✓ 通过上架</button>' +
    '<button class="btn btn-sm" style="background:#F1E4E4;color:#A04040;" data-draft-del="' + esc(d.id) + '">删除</button>' +
    "</div></div>";
}

function approveDraft(id) {
  const drafts = loadDrafts();
  const d = drafts.find(function (x) { return x.id === id; });
  if (!d) return;
  const validCat = site.categories.some(function (c) { return c.id === d.cat; }) ? d.cat : (site.categories[0] ? site.categories[0].id : "");
  const catImg = (site.categories.find(function (c) { return c.id === validCat; }) || {}).img || "";
  site.products.unshift({
    id: uid("p"),
    cat: validCat,
    img: d.img || catImg,
    featured: false,
    active: true,
    name_en: d.name_en || "New product",
    desc_en: d.desc_en || "",
    specs: (d.specs || []).slice(0, 12).map(function (sp) { return { k: sp.k, v: sp.v }; })
  });
  save();
  saveDrafts(drafts.filter(function (x) { return x.id !== id; }));
  toast("已上架：" + (d.name_en || ""));
  renderAiParse();
  updateNavCounts();
}

function approveAllDrafts() {
  const drafts = loadDrafts();
  if (!drafts.length) return;
  if (!confirm("确定把全部 " + drafts.length + " 条草稿上架吗？")) return;
  drafts.forEach(function (d) {
    const validCat = site.categories.some(function (c) { return c.id === d.cat; }) ? d.cat : (site.categories[0] ? site.categories[0].id : "");
    const catImg = (site.categories.find(function (c) { return c.id === validCat; }) || {}).img || "";
    site.products.unshift({
      id: uid("p"), cat: validCat, img: d.img || catImg, featured: false, active: true,
      name_en: d.name_en || "New product", desc_en: d.desc_en || "",
      specs: (d.specs || []).slice(0, 12)
    });
  });
  save();
  saveDrafts([]);
  toast("已上架 " + drafts.length + " 个产品");
  renderAiParse();
  updateNavCounts();
}

function loadDemoDrafts() {
  const demo = [
    { id: uid("d"), name_en: "Demo Hair Dryer 2000W Ionic (Example)", cat: "hair-dryer", source: "演示数据",
      desc_en: "Demo entry: ionic hair dryer with 2000W AC motor, foldable handle.",
      specs: [{ k: "power", v: "2000W" }, { k: "ion", v: "Yes" }, { k: "warranty", v: "12 months" }] },
    { id: uid("d"), name_en: "Demo Pedestal Fan 16 inch (Example)", cat: "fan", source: "演示数据",
      desc_en: "Demo entry: 3-speed pedestal fan with 90 degree oscillation.",
      specs: [{ k: "power", v: "55W" }, { k: "speeds", v: "3" }, { k: "oscillation", v: "90°" }] },
    { id: uid("d"), name_en: "Demo Induction Cooker 2000W (Example)", cat: "induction-cooker", source: "演示数据",
      desc_en: "Demo entry: portable induction cooker with LED display and 8 power levels.",
      specs: [{ k: "power", v: "2000W" }, { k: "levels", v: "8" }, { k: "certification", v: "CE, RoHS" }] }
  ];
  const drafts = loadDrafts();
  demo.forEach(function (x) { x.ts = new Date().toISOString(); x.draft = true; });
  saveDrafts(drafts.concat(demo));
  toast("已载入 3 条演示草稿");
  renderAiParse();
  updateNavCounts();
}

function setAiProgress(pct, msg) {
  const bar = $("#ai-progress");
  if (!bar) return;
  bar.hidden = false;
  $("#ai-bar-fill").style.width = pct + "%";
  $("#ai-msg").textContent = msg;
}

function startAiParse(file) {
  if (!site.settings.aiApiKey) {
    toast("请先在「网站设置」填入 AI API Key（或点下方按钮体验演示流程）");
    return;
  }
  setAiProgress(1, "正在加载 PDF 解析引擎...");
  ensurePdfJs(function () {
    (async function () {
      try {
        const buf = await file.arrayBuffer();
        const doc = await window.pdfjsLib.getDocument({ data: buf }).promise;
        const n = doc.numPages;
        setAiProgress(4, "共 " + n + " 页，正在转成图片...");
        const pages = [];
        for (let i = 1; i <= n; i++) {
          const page = await doc.getPage(i);
          const base = page.getViewport({ scale: 1 });
          const scale = Math.max(1, Math.min(1500 / base.width, 2.2));
          const vp = page.getViewport({ scale: scale });
          const canvas = document.createElement("canvas");
          canvas.width = Math.round(vp.width);
          canvas.height = Math.round(vp.height);
          await page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
          pages.push(canvas.toDataURL("image/jpeg", 0.72));
          setAiProgress(4 + Math.round((i / n) * 18), "第 " + i + "/" + n + " 页转图完成");
        }
        const items = [];
        let done = 0;
        let idx = 0;
        async function worker() {
          while (idx < pages.length) {
            const i = idx++;
            setAiProgress(22 + Math.round((done / n) * 76), "AI 识别第 " + (i + 1) + "/" + n + " 页...");
            try {
              const res = await callVision(pages[i]);
              items.push.apply(items, sanitizeAiItems(res));
            } catch (err) {
              console.warn("page " + (i + 1) + " failed", err);
            }
            done++;
            setAiProgress(22 + Math.round((done / n) * 76), "已完成 " + done + "/" + n + " 页");
          }
        }
        await Promise.all([worker(), worker()]);
        if (!items.length) {
          setAiProgress(100, "未识别到产品，请检查 PDF 是否为产品目录，或更换 API/模型后重试");
          toast("未识别到产品");
          return;
        }
        const cleaned = dedupeAiItems(items);
        const drafts = loadDrafts();
        cleaned.forEach(function (it) {
          it.id = uid("d");
          it.ts = new Date().toISOString();
          it.source = file.name;
        });
        saveDrafts(drafts.concat(cleaned));
        setAiProgress(100, "完成！识别到 " + items.length + " 条，合并同型号重复后 " + cleaned.length + " 个产品草稿");
        toast("解析完成：" + cleaned.length + " 个产品草稿待审核（已自动合并同型号重复）");
        updateNavCounts();
        if ($("#aiPanel") && $("#aiPanel").classList.contains("open")) renderDraftsInChat();
      } catch (err) {
        console.error(err);
        setAiProgress(100, "解析失败");
        toast("解析失败：" + (err && err.message ? err.message : err));
      }
    })();
  });
}

async function callVision(img) {
  const s = site.settings;
  const resp = await fetch((s.aiApiBase || "").replace(/\/$/, "") + "/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer " + s.aiApiKey },
    body: JSON.stringify({
      model: s.aiModel || "glm-4v-plus",
      temperature: 0.1,
      messages: [{
        role: "user",
        content: [
          { type: "text", text: AI_PROMPT },
          { type: "image_url", image_url: { url: img } }
        ]
      }]
    })
  });
  if (!resp.ok) {
    const t = await resp.text();
    throw new Error("API " + resp.status + " " + t.slice(0, 160));
  }
  const data = await resp.json();
  const content = data && data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content : "";
  return parseJsonArray(content);
}

function parseJsonArray(text) {
  if (!text) return [];
  let t = String(text).trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) t = fence[1].trim();
  const start = t.indexOf("[");
  const end = t.lastIndexOf("]");
  if (start === -1 || end === -1 || end <= start) return [];
  try {
    const arr = JSON.parse(t.slice(start, end + 1));
    if (!Array.isArray(arr)) return [];
    return arr.filter(function (x) { return x && x.name_en; });
  } catch (e) {
    return [];
  }
}

/* ---------------- export translations CSV ---------------- */
function exportTranslations() {
  const rows = [];
  const header = ["id", "cat", "name_en", "name_ar", "name_es", "name_th", "badge_en", "badge_ar", "badge_es", "badge_th", "desc_en", "desc_ar", "desc_es", "desc_th", "img", "featured", "active"];
  rows.push(header);
  site.products.forEach(function (p) {
    rows.push(header.map(function (k) {
      let v = p[k] === undefined ? "" : p[k];
      if (typeof v === "boolean") v = v ? "1" : "0";
      return v;
    }));
  });
  /* category names too */
  rows.push([]);
  rows.push(["--- categories ---"]);
  rows.push(["cat_id", "name_en", "name_ar", "name_es", "name_th"]);
  site.categories.forEach(function (c) {
    rows.push([c.id, c.name_en || "", c.name_ar || "", c.name_es || "", c.name_th || ""]);
  });
  const csv = rows.map(function (r) {
    return r.map(function (v) { return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"'; }).join(",");
  }).join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "translations-review-" + new Date().toISOString().slice(0, 10) + ".csv";
  a.click();
  toast("翻译表已导出：发给母语客户校对后，把校对结果发回即可批量更新");
}

/* merge duplicate SKUs extracted across pages: same model number / normalized name merges specs */
function catImgFor(cat) {
  const c = site.categories.find(function (x) { return x.id === cat; });
  return c && c.img ? c.img : "";
}

function dedupeAiItems(items) {
  const map = {};
  items.forEach(function (it) {
    const name = String(it.name_en || "").trim();
    const m = name.match(/WQ[\s-]?[A-Z0-9]+/i);
    const key = m
      ? "M:" + m[0].toUpperCase().replace(/[\s-]+/g, "")
      : "N:" + name.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    if (!map[key]) {
      map[key] = Object.assign({}, it, { img: it.img || catImgFor(it.cat) });
    } else {
      const ex = map[key];
      (it.specs || []).forEach(function (s) {
        if (!ex.specs.some(function (e) { return e.k === s.k; })) ex.specs.push(s);
      });
      if (m && !String(ex.name_en || "").match(/WQ/i)) ex.name_en = it.name_en;
      if (!ex.desc_en && it.desc_en) ex.desc_en = it.desc_en;
    }
  });
  return Object.keys(map).map(function (k) { return map[k]; });
}

/* ---------------- voice fill settings ---------------- */
function speakFillSettings(){
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){ toast("当前浏览器不支持语音识别，请用 Edge / Chrome", true); return; }
  var rec = new SR();
  rec.lang = "zh-CN";
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  toast("🎤 请开始说：公司名、电话、WhatsApp、邮箱、地址…");
  rec.onresult = function(e){
    var text = e.results && e.results[0] && e.results[0][0] ? e.results[0][0].transcript : "";
    if(!text){ toast("没有识别到内容，请重试", true); return; }
    toast("识别完成，AI 正在解析填入…");
    aiParseSettings(text);
  };
  rec.onerror = function(e){ toast("语音识别失败：" + (e.error || "unknown"), true); };
  try{ rec.start(); }catch(e){ toast("语音识别启动失败", true); }
}
function aiParseSettings(text){
  var c = site.settings;
  if(!c.aiApiKey){ toast("请先配置 AI API Key 才能语音录入", true); return; }
  var prompt = "从下面这段语音转录中提取网站设置信息，输出严格 JSON（只输出 JSON，不要解释，不要 markdown）："
    + '{"brand":"公司英文名(如无则空)","phone":"电话","whatsapp":"WhatsApp号码纯数字含国家码(如无则空)","email":"邮箱","address":"地址英文(如无则空)","hours":"工作时间(如无则空)","mapQuery":"地图定位城市(如无则空)"}'
    + "\n转录：" + text;
  fetch((c.aiApiBase || "https://open.bigmodel.cn/api/paas/v4").replace(/\/$/, "") + "/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Be" + "arer " + c.aiApiKey },
    body: JSON.stringify({ model: "glm-4-plus", temperature: 0.1, messages: [{ role: "user", content: prompt }] })
  }).then(function(r){ return r.json(); }).then(function(d){
    var content = d && d.choices && d.choices[0] && d.choices[0].message ? d.choices[0].message.content : "";
    fillSettingsFromJson(content);
  }).catch(function(){ toast("AI 调用失败，请检查 API Key", true); });
}
function fillSettingsFromJson(content){
  var m = String(content || "").match(/\{[\s\S]*\}/);
  if(!m){ toast("AI 解析失败，请重试或手动填写", true); return; }
  try{
    var o = JSON.parse(m[0]);
    var map = { brand: "brand", phone: "phone", whatsapp: "whatsapp", email: "email", address: "address", hours: "hours", mapQuery: "mapQuery" };
    var filled = 0;
    Object.keys(map).forEach(function(k){
      if(o[k] && String(o[k]).trim()){
        var el = document.querySelector('#settings-form [name="' + map[k] + '"]');
        if(el){ el.value = String(o[k]).trim(); filled++; }
      }
    });
    toast("已填入 " + filled + " 项，请核对后点「保存设置」");
  }catch(e){ toast("AI 解析失败：" + (e && e.message ? e.message : e), true); }
}
function uploadFillSettings(){
  var input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = function(){
    var f = input.files && input.files[0];
    if(!f) return;
    if(!site.settings.aiApiKey){ toast("请先配置 AI API Key 才能智能识别", true); return; }
    var reader = new FileReader();
    reader.onload = function(){
      toast("AI 正在识别图片中的联系信息…");
      aiParseSettingsImage(reader.result);
    };
    reader.readAsDataURL(f);
  };
  input.click();
}
function aiParseSettingsImage(img){
  var c = site.settings;
  var prompt = "这是一张截图（可能是微信/WhatsApp 聊天记录、名片、公司资料）。请仔细阅读图片中的每一行文字（包括消息气泡里的小字），把其中出现的联系信息全部提取出来。注意：电话号码可能写在一起（如 电话13800138000 或 +86 138 0013 8000），WhatsApp 号码和电话可能是同一个号，邮箱可能是 qq.com/163.com 等。输出严格 JSON（只输出 JSON，不要解释）："
    + '{"brand":"公司英文名(如无则空)","phone":"电话","whatsapp":"WhatsApp号码纯数字含国家码(如无则空)","email":"邮箱","address":"地址英文(如无则空)","hours":"工作时间(如无则空)","mapQuery":"地图定位城市(如无则空)"}';
  fetch((c.aiApiBase || "https://open.bigmodel.cn/api/paas/v4").replace(/\/$/, "") + "/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "***" + "arer " + c.aiApiKey },
    body: JSON.stringify({ model: (c.aiModel || "glm-4v-plus"), temperature: 0.1, messages: [{ role: "user", content: [{ type: "text", text: prompt }, { type: "image_url", image_url: { url: img } }] }] })
  }).then(function(r){ return r.json(); }).then(function(d){
    var content = d && d.choices && d.choices[0] && d.choices[0].message ? d.choices[0].message.content : "";
    fillSettingsFromJson(content);
  }).catch(function(){ toast("AI 调用失败，请检查 API Key", true); });
}
function pasteFillSettings(){
  openModal('<h2>粘贴文字 · AI 智能解析</h2><div class="modal-sub">把包含公司信息的文字粘贴进来（比如微信里别人发的公司资料、邮件签名、随便一段话），AI 会自动提取并填入表单。</div><div class="field"><textarea id="pasteText" rows="7" placeholder="例如：公司叫佛山市威固电器有限公司，电话 0757-88886666，WhatsApp +86 138 0013 8000，邮箱 sales@wechgood.com，地址在佛山顺德容桂…" style="width:100%;font-family:inherit;font-size:.92rem;border:1.5px solid var(--line-strong);border-radius:8px;padding:10px 12px;resize:vertical"></textarea></div><div class="adm-form-actions" style="margin-top:12px"><button type="button" class="btn btn-primary" id="parsePasteBtn">AI 解析并填入</button><button type="button" class="btn btn-outline" data-cancel>取消</button></div>', false);
  $("#parsePasteBtn").addEventListener("click", function(){
    var txt = $("#pasteText").value.trim();
    if(!txt){ toast("请先粘贴内容", true); return; }
    closeModal();
    toast("AI 正在解析…");
    aiParseSettings(txt);
  });
  const cancel = $("#adm-modal-box [data-cancel]");
  if (cancel) cancel.addEventListener("click", closeModal);
}

/* ---------------- AI chat assistant ---------------- */
let aiHistory = [];
function chatAddMsg(role, text, done){
  const box = $("#aiChatBody");
  if(!box) return;
  const div = document.createElement("div");
  div.className = "chat-msg " + (role === "user" ? "user" : "ai");
  div.innerHTML = (role === "ai" && done ? '<span class="done-tag">✓ 已执行</span>' : "") + esc(text);
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}
function renderAiChat(){
  const box = $("#aiChatBody");
  if(!box) return;
  if(box.dataset.inited) return;
  box.dataset.inited = "1";
  const hasKey = !!(site.settings.aiApiKey && String(site.settings.aiApiKey).trim());
  box.innerHTML =
    (hasKey ? "" :
      '<div class="chat-msg ai">⚠ 还没检测到 AI API Key。把你的智谱 API Key 粘贴到下面输入框，点「保存并启用」即可（只需配置一次）：' +
      '<div style="display:flex;gap:8px;margin-top:10px;"><input id="aiKeyInput" placeholder="粘贴智谱 API Key，如 ea26099c..." style="flex:1;font-family:inherit;font-size:.88rem;border:1.5px solid var(--line-strong);border-radius:8px;padding:8px 10px;"><button type="button" class="btn btn-primary btn-sm" id="aiKeySave">保存并启用</button></div>' +
      '<div style="font-size:.8rem;color:var(--ink-3);margin-top:8px;">如何获取：打开 open.bigmodel.cn 注册后，在「API Keys」页面复制（glm-4v-flash 免费 / glm-4v-plus 更准）。</div></div>') +
    '<div class="chat-msg ai">你好！我是你的 AI 助手，像聊天一样就能管理全站～<br><br>' +
    '📝 点下面「开始填写网站信息」，我会一项一项问你，你回答就行，我帮你全部填好：' +
    '<div style="margin-top:10px;"><button type="button" class="btn btn-primary btn-sm" id="aiStartFill">📝 开始填写网站信息</button></div>' +
    '<br>也可以直接聊：<br>· 加产品："加一个产品 WQ-9999，电磁炉，2000W"<br>' +
    '· 删产品："删除 WQ-X2"　· 查数据："有多少条询盘？"<br>' +
    '· 或点右上角 📄 上传目录 / 📷 传名片 / 🎤 说话</div>';
  const startFill = $("#aiStartFill");
  if (startFill) startFill.addEventListener("click", function(){
    sendRawChat("开始填写网站信息，按顺序逐项问我");
  });
  const keySave = $("#aiKeySave");
  if (keySave) keySave.addEventListener("click", function(){
    const v = ($("#aiKeyInput").value || "").trim();
    if(!v){ toast("请先粘贴 API Key", true); return; }
    site.settings.aiApiKey = v;
    save();
    toast("API Key 已保存并启用");
    box.dataset.inited = "";
    renderAiChat();
  });
  $("#aiChatSend").addEventListener("click", sendAiChat);
  $("#aiChatInput").addEventListener("keydown", function(e){ if(e.key === "Enter") sendAiChat(); });
  $("#aiToolMic").addEventListener("click", function(){ if(typeof speakFillSettings === "function") speakFillSettings(); });
  $("#aiToolImg").addEventListener("click", function(){ if(typeof uploadFillSettings === "function") uploadFillSettings(); });
  $("#aiToolPdf").addEventListener("click", function(){
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "application/pdf,.pdf";
    input.onchange = function(){
      var f = input.files && input.files[0];
      if(f) startAiParse(f);
    };
    input.click();
  });
  if (typeof store.fetchInquiries === "function") { store.fetchInquiries().then(function(){}).catch(function(){}); }
}
function openAiPanel(){
  renderAiChat();
  $("#aiPanel").classList.add("open");
}
function closeAiPanel(){
  $("#aiPanel").classList.remove("open");
}
function initAiFab(){
  const fab = $("#aiFab");
  if(!fab) return;
  let dragging = false, moved = false, dx = 0, dy = 0;
  const start = function(e){
    dragging = true; moved = false;
    const t = e.touches ? e.touches[0] : e;
    const r = fab.getBoundingClientRect();
    dx = t.clientX - r.left;
    dy = t.clientY - r.top;
    fab.classList.add("dragging");
    if(e.cancelable) e.preventDefault();
  };
  const move = function(e){
    if(!dragging) return;
    const t = e.touches ? e.touches[0] : e;
    const x = t.clientX - dx;
    const y = t.clientY - dy;
    if(Math.abs(x - (parseFloat(fab.style.left) || 0)) > 2 || Math.abs(y - (parseFloat(fab.style.top) || 0)) > 2) moved = true;
    fab.style.left = x + "px";
    fab.style.top = y + "px";
    fab.style.right = "auto";
    fab.style.bottom = "auto";
  };
  const end = function(){
    dragging = false;
    fab.classList.remove("dragging");
  };
  fab.addEventListener("mousedown", start);
  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", end);
  fab.addEventListener("touchstart", start, { passive: false });
  document.addEventListener("touchmove", move, { passive: false });
  document.addEventListener("touchend", end);
  fab.addEventListener("click", function(){
    if(moved) return;
    const panel = $("#aiPanel");
    if(panel.classList.contains("open")) closeAiPanel();
    else openAiPanel();
  });
  $("#aiPanelClose").addEventListener("click", closeAiPanel);
}

function aiChatBusy(){
  return $("#aiChatSend") && $("#aiChatSend").disabled;
}
function sendAiChat(){
  const input = $("#aiChatInput");
  const text = (input.value || "").trim();
  if(!text) return;
  input.value = "";
  sendRawChat(text);
}
function sendRawChat(text){
  if(!text) return;
  if(aiChatBusy()) return;
  if(!site.settings.aiApiKey){ chatAddMsg("ai", "请先在「网站设置」里配置 AI API Key（智谱），我才能帮你操作。", false); return; }
  chatAddMsg("user", text, false);
  const sendBtn = $("#aiChatSend");
  sendBtn.disabled = true;
  sendBtn.textContent = "执行中…";
  chatAddMsg("ai", "正在理解并执行…", false);
  const thinkingEl = $("#aiChatBody").lastElementChild;

  const sysPrompt = buildAiAdminPrompt();
  const c = site.settings;
  fetch((c.aiApiBase || "https://open.bigmodel.cn/api/paas/v4").replace(/\/$/, "") + "/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "***" + "arer " + c.aiApiKey },
    body: JSON.stringify({
      model: "glm-4-plus",
      temperature: 0.2,
      messages: [
        { role: "system", content: sysPrompt }
      ].concat(aiHistory).concat([{ role: "user", content: text }])
    })
  }).then(function(r){ return r.json(); }).then(function(d){
    sendBtn.disabled = false;
    sendBtn.textContent = "发送";
    const content = d && d.choices && d.choices[0] && d.choices[0].message ? d.choices[0].message.content : "";
    const m = String(content).match(/\{[\s\S]*\}/);
    if(!m){ thinkingEl.remove(); chatAddMsg("ai", "AI 返回格式异常，请换个说法试试。", false); return; }
    let o;
    try{ o = JSON.parse(m[0]); }catch(e){ thinkingEl.remove(); chatAddMsg("ai", "AI 解析失败，请重试。", false); return; }
    const reply = o.reply || "已完成。";
    const actions = Array.isArray(o.actions) ? o.actions : [];
    let doneMsg = "";
    try{
      doneMsg = executeAiActions(actions);
    }catch(e){
      doneMsg = "";
      thinkingEl.remove();
      chatAddMsg("ai", "执行出错：" + (e && e.message ? e.message : e), false);
      return;
    }
    thinkingEl.remove();
    if(actions.length){ chatAddMsg("ai", doneMsg ? (reply + "\n\n" + doneMsg) : reply, true); }
    else { chatAddMsg("ai", reply, false); }
    aiHistory.push({ role: "user", content: text });
    aiHistory.push({ role: "assistant", content: content });
    if(aiHistory.length > 20) aiHistory = aiHistory.slice(-20);
    save();
    updateNavCounts();
  }).catch(function(){
    sendBtn.disabled = false;
    sendBtn.textContent = "发送";
    thinkingEl.remove();
    chatAddMsg("ai", "AI 调用失败，请检查网络和 API Key。", false);
  });
}
function buildAiAdminPrompt(){
  const s = site.settings;
  const prodList = site.products.slice(0, 60).map(function(p){
    return p.name_en + (p.model ? "（型号 " + p.model + "）" : "") + "｜分类 " + p.cat;
  }).join("\n");
  return [
    "你是外贸独立站后台的 AI 管理员助手。用户用中文下达指令，你判断意图并输出 JSON 操作指令。",
    "当前网站设置：" + JSON.stringify({
      brand: s.brand, slogan: s.slogan, phone: s.phone, whatsapp: s.whatsapp, email: s.email,
      address: s.address, hours: s.hours, mapQuery: s.mapQuery, analyticsId: s.analyticsId,
      tawkId: s.tawkId, fbpixelId: s.fbpixelId, samplePayLink: s.samplePayLink, factoryVideo: s.factoryVideo
    }),
    "当前产品列表（共 " + site.products.length + " 款）：\n" + prodList,
    "分类只能是：induction-cooker / infrared-cooker / tea-extractor / coffee-tea-maker",
    "当前分类列表：" + site.categories.map(function(c){ return c.id + "（" + (c.name_en || "") + "）"; }).join("、"),
    "当前客户见证：" + site.testimonials.map(function(tst){ return tst.name + "｜" + tst.country; }).join("、"),
    "云端询盘数量：" + (store.loadInquiries() || []).length + " 条",
    "规格参数 key 只能是：power, voltage, frequency, size, weight, material, warranty, moq, colors, control, noise, heating, airflow, speeds, battery, runtime, waterproof, certification, blades, timer, levels, dimension, netweight, grossweight, packsize, loading, display, cookware, oscillation, remote, ion, voltageRange, safety, giftbox, cartonsize, casepack",
    '输出严格 JSON，格式：{"reply":"给用户的中文回复","actions":[操作数组]}',
    "支持的操作类型：",
    '1. 改设置：{"type":"set_setting","key":"brand|phone|whatsapp|email|address|hours|mapQuery|analyticsId|tawkId|fbpixelId|samplePayLink|factoryVideo|slogan","value":"新值"}',
    '2. 加产品：{"type":"add_product","product":{"name_en":"英文产品名","model":"型号(如无则空)","cat":"分类","specs":[{"k":"power","v":"2000W"}],"desc_en":"一句英文描述"}}',
    '3. 改产品：{"type":"update_product","match":"型号或产品名片段","changes":{"name_en":"新名"}}（changes 可含 name_en/desc_en/specs/cat）',
    '4. 删产品：{"type":"delete_product","match":"型号或产品名片段"}',
    '5. 加分类：{"type":"add_category","category":{"id":"英文小写id如 electric-kettle","name_en":"分类英文名","name_ar":"阿拉伯语名(可空)","name_es":"西语名(可空)","name_th":"泰语名(可空)"}}',
    '6. 删分类：{"type":"delete_category","match":"分类名或id"}',
    '7. 加客户见证：{"type":"add_testimonial","testimonial":{"name":"客户名","role":"职位(可空)","country":"国家","text":"评价内容英文","rating":5}}',
    '8. 删客户见证：{"type":"delete_testimonial","match":"客户名"}',
    "规则：用户说改什么就改什么；加产品时把用户提到的参数都填进 specs；不知道的字段不要编造；询盘数量等信息已经在上下文中，直接回答即可；如果没有可执行的操作，actions 输出空数组 []，reply 里回答问题。",
    "引导式填写规则：当用户说「开始填写网站信息」或类似意思时，进入引导模式——按顺序逐项询问并记录：1公司名称 2电话 3WhatsApp 4邮箱 5地址 6工作时间。每收到一项，立即用 set_setting 执行保存，并在 reply 里确认（如：好的，公司名已更新为 xxx。接下来请告诉我电话）。全部问完后回复：网站信息已全部填写完成！你可以去前台刷新查看。",
    "粘贴解析规则：当用户直接粘贴一段包含联系信息的文字（比如'公司叫xxx，电话是xxx，邮箱是xxx，地址在xxx'这种一整段话），自动从中提取所有能识别的字段，每个字段用一条 set_setting 执行，并在 reply 里汇报提取并保存了几项。不要反问用户，直接提取执行。"
    + "引导模式下如果用户回答的内容能匹配多项（比如一句话里包含电话和邮箱），就全部提取执行，然后继续问下一项。始终用中文回复，语气自然亲切。"
  ].join("\n");
}
function executeAiActions(actions){
  const results = [];
  actions.forEach(function(a){
    if(a.type === "set_setting"){
      const key = a.key;
      if(!(key in site.settings)){ results.push("未知设置项 " + key); return; }
      site.settings[key] = String(a.value == null ? "" : a.value);
      results.push("已更新「" + key + "」");
    } else if(a.type === "add_product"){
      const pr = a.product || {};
      if(!pr.name_en){ results.push("加产品缺少名称"); return; }
      const cat = site.categories.some(function(x){ return x.id === pr.cat; }) ? pr.cat : (site.categories[0] ? site.categories[0].id : "induction-cooker");
      const catImg = (site.categories.find(function(x){ return x.id === cat; }) || {}).img || "";
      site.products.unshift({
        id: uid("p"),
        cat: cat,
        img: pr.img || catImg,
        featured: !!pr.featured,
        active: true,
        name_en: String(pr.name_en).trim(),
        model: pr.model || "",
        desc_en: pr.desc_en || "",
        specs: (pr.specs || []).slice(0, 14)
      });
      results.push("已添加产品「" + pr.name_en + "」");
    } else if(a.type === "update_product"){
      const match = String(a.match || "").toLowerCase();
      const p = site.products.find(function(x){
        return (x.model && x.model.toLowerCase().indexOf(match) >= 0) || (x.name_en && x.name_en.toLowerCase().indexOf(match) >= 0);
      });
      if(!p){ results.push("没找到产品「" + a.match + "」"); return; }
      const ch = a.changes || {};
      if(ch.name_en) p.name_en = ch.name_en;
      if(ch.desc_en) p.desc_en = ch.desc_en;
      if(ch.model) p.model = ch.model;
      if(ch.cat && site.categories.some(function(x){ return x.id === ch.cat; })) p.cat = ch.cat;
      if(Array.isArray(ch.specs)) p.specs = ch.specs.slice(0, 14);
      results.push("已更新产品「" + (p.name_en || p.model) + "」");
    } else if(a.type === "delete_product"){
      const match = String(a.match || "").toLowerCase();
      const idx = site.products.findIndex(function(x){
        return (x.model && x.model.toLowerCase().indexOf(match) >= 0) || (x.name_en && x.name_en.toLowerCase().indexOf(match) >= 0);
      });
      if(idx < 0){ results.push("没找到产品「" + a.match + "」"); return; }
      const name = site.products[idx].name_en;
      site.products.splice(idx, 1);
      results.push("已删除产品「" + name + "」");
    } else if(a.type === "add_category"){
      const c = a.category || {};
      if(!c.id || !c.name_en){ results.push("加分类缺少信息"); return; }
      const exists = site.categories.some(function(x){ return x.id === c.id; });
      if(exists){ results.push("分类「" + c.id + "」已存在"); return; }
      site.categories.push({
        id: c.id,
        img: c.img || (site.categories[0] ? site.categories[0].img : ""),
        name_en: c.name_en || "",
        name_ar: c.name_ar || "",
        name_es: c.name_es || "",
        name_th: c.name_th || ""
      });
      results.push("已添加分类「" + c.name_en + "」");
    } else if(a.type === "delete_category"){
      const match = String(a.match || "").toLowerCase();
      const idx = site.categories.findIndex(function(x){
        return (x.name_en && x.name_en.toLowerCase().indexOf(match) >= 0) || (x.id && x.id.toLowerCase().indexOf(match) >= 0);
      });
      if(idx < 0){ results.push("没找到分类「" + a.match + "」"); return; }
      const cname = site.categories[idx].name_en;
      site.categories.splice(idx, 1);
      results.push("已删除分类「" + cname + "」");
    } else if(a.type === "add_testimonial"){
      const ts = a.testimonial || {};
      if(!ts.name || !ts.text){ results.push("加见证缺少姓名或内容"); return; }
      site.testimonials.push({
        id: uid("t"),
        name: ts.name || "",
        role: ts.role || "",
        country: ts.country || "",
        rating: Number(ts.rating) || 5,
        text: ts.text || ""
      });
      results.push("已添加客户见证「" + ts.name + "」");
    } else if(a.type === "delete_testimonial"){
      const match = String(a.match || "").toLowerCase();
      const idx = site.testimonials.findIndex(function(x){ return (x.name || "").toLowerCase().indexOf(match) >= 0; });
      if(idx < 0){ results.push("没找到见证「" + a.match + "」"); return; }
      const tname = site.testimonials[idx].name;
      site.testimonials.splice(idx, 1);
      results.push("已删除客户见证「" + tname + "」");
    }
  });
  return results.join("；");
}

/* ---------------- drafts review inside AI chat ---------------- */
function renderDraftsInChat(){
  const drafts = loadDrafts();
  if(!drafts.length){
    chatAddMsg("ai", "解析完成，但没有生成草稿。请检查 PDF 是否为产品目录，或更换 AI 模型后重试。", false);
    return;
  }
  chatAddMsg("ai", "📄 解析完成！共 " + drafts.length + " 条产品草稿，请在下面审核（通过 = 上架到产品管理，删除 = 丢弃）：", false);
  const box = $("#aiChatBody");
  const wrap = document.createElement("div");
  wrap.className = "chat-msg ai";
  wrap.style.maxWidth = "94%";
  wrap.innerHTML =
    '<div style="margin-bottom:8px;"><button type="button" class="btn btn-primary btn-sm" id="cdApproveAll">全部通过上架</button></div>' +
    drafts.map(function(d, i){
    return '<div class="chat-draft-item" data-id="' + esc(d.id) + '">' +
      '<span class="cd-name">' + esc(d.name_en || "未命名") + '</span>' +
      '<span class="cd-actions">' +
      '<button type="button" class="btn btn-primary btn-sm" data-cd-approve="' + esc(d.id) + '">✓ 通过</button>' +
      '<button type="button" class="btn btn-sm" style="background:#F1E4E4;color:#A04040;" data-cd-del="' + esc(d.id) + '">删除</button>' +
      '</span></div>';
  }).join("");
  box.appendChild(wrap);
  box.scrollTop = box.scrollHeight;
  const approveAll = wrap.querySelector("#cdApproveAll");
  if (approveAll) approveAll.addEventListener("click", function(){
    if(!confirm("确定把全部 " + drafts.length + " 条草稿上架吗？")) return;
    drafts.forEach(function(d){ approveDraft(d.id); });
    wrap.remove();
    toast("已全部上架");
    updateNavCounts();
  });
  wrap.querySelectorAll("[data-cd-approve]").forEach(function(b){
    b.addEventListener("click", function(){
      const id = b.getAttribute("data-cd-approve");
      approveDraft(id);
      const item = wrap.querySelector('[data-id="' + id + '"]');
      if(item) item.remove();
    });
  });
  wrap.querySelectorAll("[data-cd-del]").forEach(function(b){
    b.addEventListener("click", function(){
      const id = b.getAttribute("data-cd-del");
      saveDrafts(loadDrafts().filter(function(x){ return x.id !== id; }));
      const item = wrap.querySelector('[data-id="' + id + '"]');
      if(item) item.remove();
      toast("已删除草稿");
      updateNavCounts();
    });
  });
  updateNavCounts();
}

/* ---------------- init ---------------- */
document.addEventListener("DOMContentLoaded", function () {
  
if (location.search.indexOf("diag=1") >= 0) {
  setTimeout(function () {
    var d = document.createElement("div");
    d.id = "diag-box";
    d.style.cssText = "position:fixed;bottom:0;left:0;right:0;background:#111;color:#0f0;z-index:99999;font:12px monospace;padding:8px;white-space:pre-wrap;";
    d.textContent = "site.products=" + (site.products ? site.products.length : "undef")
      + " | defaults=" + (typeof DEFAULT_DATA !== "undefined" ? DEFAULT_DATA.products.length : "undef")
      + " | cache=" + (typeof _cache !== "undefined" && _cache.site ? _cache.site.products.length : "null")
      + " | deepMerge=" + (typeof deepMerge !== "undefined" ? "def" : "MISSING")
      + " | sb=" + (typeof sb !== "undefined" ? "def" : "MISSING")
      + " | scripts=" + Array.prototype.map.call(document.scripts, function (s) { return s.src.split("/").pop(); }).join(",");
    document.body.appendChild(d);
  }, 9000);
}

initStore().then(function () {
  $$(".js-brand").forEach(function (el) { el.textContent = site.settings.brand; });
  $("#login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const pass = $("#adm-pass").value;
    const email = (site.settings.adminEmail || "").trim() || "harry_hou@wechgood.com";
    /* security: no hardcoded password — login requires valid Supabase credentials */
    const c2 = sb();
    if (!c2) {
      const er = $("#login-err");
      er.textContent = "后端未连接，请检查网络后重试";
      er.classList.add("show");
      return;
    }
    c2.auth.signInWithPassword({ email: email, password: pass }).then(function (res) {
      if (res && res.error) {
        const er = $("#login-err");
        er.textContent = res.error.message || "登录失败，请检查账号密码";
        er.classList.add("show");
        return;
      }
      sessionStorage.setItem("hw_admin", "1");
      showShell();
    }).catch(function () {
      const er = $("#login-err");
      er.textContent = "登录请求失败，请检查网络";
      er.classList.add("show");
    });
  });
  $("#btn-logout").addEventListener("click", function () {
    sessionStorage.removeItem("hw_admin");
    showLogin();
  });
  $$(".adm-nav-item[data-view]").forEach(function (b) {
    b.addEventListener("click", function () { navigate(b.getAttribute("data-view")); });
  });
  initAiFab();
  if (checkAuth()) showShell();
  else {
    showLogin();
  }
  });
});
