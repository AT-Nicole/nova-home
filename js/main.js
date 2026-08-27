/* ==========================================================================
   main.js - public site behaviour
   Renders dynamic sections, handles forms, carousel, i18n wiring, cookie
   consent, analytics placeholder and floating widgets.
   ========================================================================== */

/* ---------------- icons (inline SVG, consistent 24px stroke style) ---------------- */
const ICONS = {
  fb: '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.5l.5-3h-3V8.7c0-.9.3-1.5 1.6-1.5h1.5V4.5c-.3 0-1.1-.1-2-.1-2.1 0-3.6 1.3-3.6 3.7V10.5H8v3h2.5V21h3z"/></svg>',
  factory: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 20h20"/><path d="M4 20V9l7 3V9l7 3V4h2v16"/><path d="M7 20v-4h3v4"/><path d="M14 20v-4h3v4"/></svg>',
  shield: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l8 3.5V11c0 5.2-3.4 9.4-8 11-4.6-1.6-8-5.8-8-11V5.5L12 2z"/><path d="M8.5 11.5l2.5 2.5 4.5-4.5"/></svg>',
  gear: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 00.34 1.87l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.7 1.7 0 00-1.87-.34 1.7 1.7 0 00-1.03 1.56V21a2 2 0 11-4 0v-.09A1.7 1.7 0 008.9 19.4a1.7 1.7 0 00-1.87.34l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.7 1.7 0 00.34-1.87 1.7 1.7 0 00-1.56-1.03H3a2 2 0 110-4h.09A1.7 1.7 0 004.6 8.9a1.7 1.7 0 00-.34-1.87l-.06-.06a2 2 0 112.83-2.83l.06.06a1.7 1.7 0 001.87.34h.01a1.7 1.7 0 001.03-1.56V3a2 2 0 114 0v.09c0 .68.4 1.29 1.03 1.56a1.7 1.7 0 001.87-.34l.06-.06a2 2 0 112.83 2.83l-.06.06a1.7 1.7 0 00-.34 1.87v.01c.27.62.88 1.03 1.56 1.03H21a2 2 0 110 4h-.09c-.68 0-1.29.4-1.56 1.03z"/></svg>',
  price: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 13.4L11 3.8H3.8V11l9.6 9.6a2 2 0 002.8 0l4.4-4.4a2 2 0 000-2.8z"/><circle cx="7.5" cy="7.5" r="1.4"/></svg>',
  qc: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l8 3.5V11c0 5.2-3.4 9.4-8 11-4.6-1.6-8-5.8-8-11V5.5L12 2z"/><path d="M8.5 11.5l2.5 2.5 4.5-4.5"/></svg>',
  box: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/></svg>',
  clock: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  sample: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"/><path d="M12 11L4 6.5M12 11l8-4.5M12 11v9"/></svg>',
  truck: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 4h14v12H1z"/><path d="M15 8h4l4 4v4h-8V8z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>',
  check: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>',
  pin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.13.96.36 1.9.7 2.8a2 2 0 01-.45 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.45c.9.34 1.84.57 2.8.7a2 2 0 011.7 2.05z"/></svg>',
  mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6L22 7"/></svg>',
  globe: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/></svg>',
  arrow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  search: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  close: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  up: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
  whatsapp: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  inspect: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 6.5a3.5 3.5 0 10-7 0"/><path d="M11 10v6"/><path d="M3 21c0-4 3.6-6 8-6s8 2 8 6"/><circle cx="18.5" cy="5" r="2.5"/></svg>',
  lineqc: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7h12M3 12h9M3 17h6"/><circle cx="19" cy="17" r="3"/><path d="M19 14v6"/></svg>',
  aging: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z"/></svg>',
  final: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l8 3.5V11c0 5.2-3.4 9.4-8 11-4.6-1.6-8-5.8-8-11V5.5L12 2z"/><path d="M8.5 11.5l2.5 2.5 4.5-4.5"/></svg>',
  pack: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/><path d="M7 5.5l10 5.7"/></svg>',
  tag: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.6 13.4L11 3.8H3.8V11l9.6 9.6a2 2 0 002.8 0l4.4-4.4a2 2 0 000-2.8z"/><circle cx="7.5" cy="7.5" r="1.4"/></svg>',
  palette: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 100 20c1.2 0 2-.8 2-1.9 0-.5-.2-.9-.5-1.3-.3-.3-.5-.8-.5-1.2 0-1 .9-1.9 2-1.9h2.6A3.4 3.4 0 0022 12.4 10.4 10.4 0 0012 2z"/><circle cx="7.5" cy="10.5" r="1.2"/><circle cx="12" cy="7.5" r="1.2"/><circle cx="16.5" cy="10.5" r="1.2"/></svg>',
  plug: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 01-12 0V7zM12 17v5"/></svg>',
  layers: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l10 5-10 5L2 7l10-5z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></svg>',
  mold: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16v16H4z"/><path d="M9 9h6v6H9z"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>',
  send: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
  upload: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 16V4M6 10l6-6 6 6"/><path d="M4 20h16"/></svg>'
};

function icon(name) { return ICONS[name] || ""; }

/* ---------------- shared state ---------------- */
let site = store.loadSite();
let currentFilter = { cat: "all", q: "" };

/* ---------------- helpers ---------------- */
function fmtWa(n) { const d = (n || "").replace(/[^0-9]/g, ""); if (d.length === 13 && d.startsWith("86")) { return "+86 " + d.slice(2, 5) + " " + d.slice(5, 9) + " " + d.slice(9); } return "+" + d; }
function waLink(text) {
  const num = (site.settings.whatsapp || "").replace(/[^0-9]/g, "");
  return "https://wa.me/" + num + "?text=" + encodeURIComponent(text || t("wa.defaultMsg"));
}
function openWA(text) {
  window.open(waLink(text), "_blank", "noopener");
}
function toast(msg) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._timer);
  el._timer = setTimeout(function () { el.classList.remove("show"); }, 4200);
}
function categoryOf(id) {
  return site.categories.find(function (c) { return c.id === id; }) || null;
}
function specLabel(key) {
  const v = t("specs." + key);
  return v !== "specs." + key ? v : key;
}
function productName(p) { return localizeField(p, "name"); }
function productDesc(p) { return localizeField(p, "desc"); }
function productBadge(p) { return localizeField(p, "badge"); }
function catName(c) { return localizeField(c, "name"); }

/* ---------------- header / lang / mobile ---------------- */
function buildLangMenu() {
  document.querySelectorAll(".lang-switch").forEach(function (wrap) {
    if (wrap.querySelector(".lang-menu")) return;
    const menu = document.createElement("div");
    menu.className = "lang-menu";
    Object.keys(LANG_META).forEach(function (code) {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("data-lang", code);
      b.innerHTML = '<span class="lang-native">' + esc(LANG_META[code].native) + '</span><span class="lang-code">' + code.toUpperCase() + "</span>";
      menu.appendChild(b);
    });
    wrap.appendChild(menu);
    const btn = wrap.querySelector(".lang-btn");
    if (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        menu.classList.toggle("open");
      });
    }
  });
  document.querySelectorAll(".lang-menu button").forEach(function (b) {
    b.addEventListener("click", function () {
      setLang(b.getAttribute("data-lang"));
      document.querySelectorAll(".lang-menu").forEach(function (m) { m.classList.remove("open"); });
      renderDynamic();
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".lang-switch")) {
      document.querySelectorAll(".lang-menu").forEach(function (m) { m.classList.remove("open"); });
    }
  });
}

function initHeader() {
  buildLangMenu();
  const toggle = document.querySelector(".nav-toggle");
  const mobile = document.querySelector(".mobile-nav");
  if (toggle && mobile) {
    toggle.addEventListener("click", function () { mobile.classList.add("open"); document.body.style.overflow = "hidden"; });
    mobile.addEventListener("click", function (e) {
      if (e.target === mobile || e.target.closest(".m-close")) {
        mobile.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }
  document.querySelectorAll(".lang-row button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); renderDynamic(); });
  });
}

function fillSettings() {
  const s = site.settings;
  document.querySelectorAll(".js-phone").forEach(function (el) { el.textContent = s.phone; });
  document.querySelectorAll(".js-email").forEach(function (el) { el.textContent = s.email; });
  document.querySelectorAll(".js-email[href]").forEach(function (el) { el.href = "mailto:" + s.email; });
  document.querySelectorAll(".js-address").forEach(function (el) { el.textContent = s.address; });
  document.querySelectorAll(".js-hours").forEach(function (el) { el.textContent = s.hours; });
  document.querySelectorAll(".js-wa-link, [data-wa-link]").forEach(function (el) { el.href = waLink(); });
  document.querySelectorAll(".js-wa-link.js-phone").forEach(function (el) { el.textContent = fmtWa(s.whatsapp); });
  document.querySelectorAll(".js-wa-number").forEach(function (el) { el.textContent = s.phone; });
  document.querySelectorAll(".js-brand").forEach(function (el) { el.textContent = s.brand; });
  document.querySelectorAll(".js-year").forEach(function (el) { el.textContent = new Date().getFullYear(); });
}

/* ---------------- carousel ---------------- */
let carousel = { index: 0, timer: null };

function renderCarousel() {
  const wrap = document.getElementById("hero-slides");
  if (!wrap) return;
  const slides = site.slides || [];
  if (!slides.length) return;
  if (carousel.index >= slides.length) carousel.index = 0;
  wrap.innerHTML = slides.map(function (s, i) {
    return '<div class="hero-slide' + (i === carousel.index ? " active" : "") + '">' +
      '<img src="' + esc(s.img) + '" alt="' + esc(localizeField(s, "title")) + '" loading="' + (i === 0 ? "eager" : "lazy") + '">' +
      '<div class="container"><div class="hero-content">' +
      '<span class="hero-eyebrow">' + esc(t("topbar.reply")) + "</span>" +
      "<h1>" + esc(localizeField(s, "title")) + "</h1>" +
      "<p class=\"hero-sub\">" + esc(localizeField(s, "sub")) + "</p>" +
      '<div class="hero-ctas">' +
      '<a class="btn btn-primary btn-lg" href="#quote">' + esc(t("hero.cta1")) + "</a>" +
      "</div></div></div></div>";
  }).join("");
  const dotsWrap = document.getElementById("hero-dots");
  if (dotsWrap) {
    dotsWrap.innerHTML = slides.map(function (s, i) {
      return '<button class="hero-dot' + (i === carousel.index ? " active" : "") + '" data-i18n-aria="common.close" aria-label="slide ' + (i + 1) + '" data-slide="' + i + '"></button>';
    }).join("");
    dotsWrap.querySelectorAll(".hero-dot").forEach(function (d) {
      d.addEventListener("click", function () { goSlide(parseInt(d.getAttribute("data-slide"), 10)); });
    });
  }
  const arrows = document.querySelectorAll(".hero-arrow");
  arrows.forEach(function (a) {
    a.onclick = null;
    a.addEventListener("click", function () {
      const dir = a.classList.contains("next") ? 1 : -1;
      goSlide((carousel.index + dir + slides.length) % slides.length);
    });
  });
}

function goSlide(i) {
  carousel.index = i;
  renderCarousel();
  restartCarousel();
}
function restartCarousel() {
  clearInterval(carousel.timer);
  carousel.timer = setInterval(function () {
    const slides = site.slides || [];
    if (slides.length > 1) goSlide((carousel.index + 1) % slides.length);
  }, 6500);
}

/* ---------------- home sections ---------------- */
function renderAdvantages() {
  const grid = document.getElementById("adv-grid");
  if (!grid) return;
  grid.innerHTML = site.advantages.map(function (a, i) {
    const feat = i === 1 ? " featured" : "";
    return '<div class="adv-card reveal' + feat + '">' +
      '<div class="adv-num">0' + (i + 1) + "</div>" +
      '<div class="adv-icon">' + icon(a.icon) + "</div>" +
      "<h3>" + esc(localizeField(a, "title")) + "</h3>" +
      "<p>" + esc(localizeField(a, "desc")) + "</p>" +
      '<div class="adv-stats"><span class="stat-chip">' + esc(localizeField(a, "stat1")) + '</span><span class="stat-chip">' + esc(localizeField(a, "stat2")) + "</span></div>" +
      "</div>";
  }).join("");
}

function renderWhyUs() {
  const list = document.getElementById("why-list");
  if (!list) return;
  list.innerHTML = site.whyUs.map(function (w) {
    return "<li>" + icon("check") + "<span><strong>" + esc(localizeField(w, "title")) + ".</strong> " + esc(localizeField(w, "desc")) + "</span></li>";
  }).join("");
}

function renderStats() {
  const grid = document.getElementById("stats-grid");
  if (!grid) return;
  grid.innerHTML = site.stats.map(function (s) {
    return '<div class="stat-item reveal"><div class="stat-num" data-count="' + esc(s.num) + '">0<em>' + esc(s.suffix) + "</em></div>" +
      '<div class="stat-label">' + esc(localizeField(s, "label")) + "</div></div>";
  }).join("");
  animateCounters();
}

function animateCounters() {
  const nums = document.querySelectorAll(".stat-num[data-count]");
  if (!nums.length) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseFloat(el.getAttribute("data-count"));
      if (reduce) { el.innerHTML = target + "<em>" + esc(el.getAttribute("data-count")) + "</em>"; return; }
      const start = performance.now();
      const dur = 1400;
      function step(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.innerHTML = Math.round(target * eased) + "<em></em>";
        if (p < 1) requestAnimationFrame(step);
        else el.innerHTML = el.getAttribute("data-count") + "<em></em>";
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.4 });
  nums.forEach(function (n) { io.observe(n); });
}

function renderCategories() {
  const grid = document.getElementById("cat-grid");
  if (!grid) return;
  grid.innerHTML = site.categories.map(function (c) {
    const count = site.products.filter(function (p) { return p.cat === c.id && p.active !== false; }).length;
    return '<a class="cat-tile reveal" href="products.html?cat=' + esc(c.id) + '">' +
      '<img src="' + esc(c.img) + '" alt="' + esc(catName(c)) + '" loading="lazy">' +
      '<div class="cat-body"><div class="cat-name">' + esc(catName(c)) + '</div><div class="cat-count">' + count + " " + esc(t("common.details")) + "</div></div>" +
      "</a>";
  }).join("");
}

function renderFeatured() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;
  const items = site.products.filter(function (p) { return p.featured && p.active !== false; }).slice(0, 4);
  grid.innerHTML = items.map(function (p) { return productCard(p); }).join("");
  bindProductCards(grid);
}

function productCard(p) {
  const cat = categoryOf(p.cat);
  const badge = productBadge(p);
  const specs = (p.specs || []).slice(0, 3).map(function (s) {
    return "<li><span>" + esc(specLabel(s.k)) + '</span><span>' + esc(s.v) + "</span></li>";
  }).join("");
  return '<article class="product-card reveal">' +
    '<div class="p-media">' +
    (badge ? '<span class="p-badge">' + esc(badge) + "</span>" : "") +
    '<a class="p-media-link" href="product.html?p=' + encodeURIComponent(p.id) + '" aria-label="' + esc(productName(p)) + '">' +
    '<img src="' + esc(p.img) + '" alt="' + esc(productName(p)) + '" loading="lazy">' +
    "</a>" +
    "</div>" +
    '<div class="p-body">' +
    '<div class="p-cat">' + esc(cat ? catName(cat) : "") + "</div>" +
    '<h3 class="p-name">' + esc(productName(p)) + "</h3>" +
    '<ul class="p-specs">' + specs + "</ul>" +
    '<div class="p-foot">' +
    '<a class="btn btn-outline" href="product.html?p=' + encodeURIComponent(p.id) + '">' + esc(t("common.details")) + "</a>" +
    '<button class="btn btn-primary" data-action="inquire" data-id="' + esc(p.id) + '">' + esc(t("common.inquire")) + "</button>" +
    "</div></div></article>";
}

function bindProductCards(root) {
  root.querySelectorAll("[data-action='inquire']").forEach(function (b) {
    b.addEventListener("click", function () { openInquiryModal(b.getAttribute("data-id")); });
  });
}

function renderTestimonials() {
  const grid = document.getElementById("testi-grid");
  if (!grid) return;
  grid.innerHTML = (site.testimonials || []).map(function (tst) {
    const initials = tst.name.split(" ").map(function (w) { return w.charAt(0); }).slice(0, 2).join("").toUpperCase();
    const stars = "★★★★★".slice(0, tst.rating || 5);
    return '<div class="testi-card reveal">' +
      '<div class="testi-stars">' + stars + "</div>" +
      '<p class="testi-text">"' + esc(tst.text) + '"</p>' +
      '<div class="testi-who"><span class="testi-ava">' + esc(initials) + "</span>" +
      '<div><div class="name">' + esc(tst.name) + '</div><div class="role">' + esc(tst.role) + " · " + esc(tst.country) + "</div></div></div>" +
      "</div>";
  }).join("");
}

/* ---------------- product modal ---------------- */
function openProductModal(id) {
  const p = site.products.find(function (x) { return x.id === id; });
  if (!p) return;
  const cat = categoryOf(p.cat);
  const specCells = (p.specs || []).map(function (s) {
    return '<div class="spec-cell"><div class="k">' + esc(specLabel(s.k)) + '</div><div class="v">' + esc(s.v) + "</div></div>";
  }).join("");
  const modal = document.getElementById("modal");
  modal.innerHTML =
    '<button class="modal-close" data-i18n-aria="common.close" aria-label="Close">' + icon("close") + "</button>" +
    '<div class="modal-body">' +
    '<div class="m-media"><img src="' + esc(p.img) + '" alt="' + esc(productName(p)) + '"></div>' +
    '<div><div class="m-cat">' + esc(cat ? catName(cat) : "") + "</div>" +
    "<h3>" + esc(productName(p)) + "</h3>" +
    '<p class="m-desc">' + esc(productDesc(p)) + "</p>" +
    '<h4 style="margin:18px 0 10px;font-size:1.02rem;">' + esc(t("prod.specsTitle")) + "</h4>" +
    '<div class="spec-grid">' + specCells + "</div>" +
    '<div class="m-cta">' +
    '<button class="btn btn-primary" data-inquire="' + esc(p.id) + '">' + esc(t("common.inquire")) + "</button>" +
    '<a class="btn btn-wa" href="' + waLink(t("wa.defaultMsg") + " " + productName(p)) + '" target="_blank" rel="noopener">' + icon("whatsapp") + " WhatsApp</a>" +
    "</div></div></div>";
  modal.classList.add("open");
  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  const inq = modal.querySelector("[data-inquire]");
  if (inq) inq.addEventListener("click", function () { closeModal(); openInquiryModal(id); });
  document.addEventListener("keydown", escKey);
}

function openInquiryModal(id, prefillMsg) {
  const p = site.products.find(function (x) { return x.id === id; });
  const modal = document.getElementById("modal");
  modal.innerHTML =
    '<button class="modal-close" aria-label="Close">' + icon("close") + "</button>" +
    '<div class="modal-body" style="grid-template-columns:1fr;">' +
    '<div><div class="m-cat">' + esc(t("prod.inquiryTitle")) + "</div>" +
    "<h3>" + esc(p ? productName(p) : t("common.quote")) + "</h3>" +
    '<p class="m-desc">' + esc(t("prod.inquiryNote")) + "</p>" +
    '<form class="inq-form" data-product="' + esc(id) + '">' +
    '<div class="form-grid" style="margin-top:14px;">' +
    field("name", t("home.quote.name"), "text", true) +
    field("email", t("home.quote.email"), "email", true) +
    field("country", t("home.quote.country"), "text", true) +
    field("qty", t("home.quote.qty"), "text", false) +
    '<div class="field full"><label for="iq-msg">' + esc(t("home.quote.msg")) + '</label><textarea id="iq-msg" name="msg" rows="3">' + esc(prefillMsg || "") + '</textarea></div>' +
    "</div>" +
    '<div class="form-actions">' +
    '<button type="submit" class="btn btn-primary">' + icon("send") + esc(t("home.quote.submit")) + "</button>" +
    '<a class="btn btn-wa" data-wa-inline href="' + waLink() + '" target="_blank" rel="noopener">' + icon("whatsapp") + " WhatsApp</a>" +
    "</div>" +
    '<div class="form-success"></div></form></div></div>';
  modal.classList.add("open");
  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  bindInquiryForm(modal.querySelector(".inq-form"), { productId: id });
  document.addEventListener("keydown", escKey);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("open");
  modal.innerHTML = "";
  document.removeEventListener("keydown", escKey);
}
function escKey(e) {
  if (e.key === "Escape") closeModal();
}

function field(name, label, type, required) {
  const req = required ? ' <span class="req">*</span>' : "";
  const inp = type === "textarea"
    ? '<textarea id="f-' + name + '" name="' + name + '" rows="3"></textarea>'
    : '<input id="f-' + name + '" name="' + name + '" type="' + type + '" autocomplete="off">';
  return '<div class="field" data-field="' + name + '"><label for="f-' + name + '">' + esc(label) + req + "</label>" +
    inp + '<span class="err">' + esc(t("common.required")) + "</span></div>";
}

/* ---------------- inquiry form engine ---------------- */
function bindInquiryForm(formEl, opts) {
  if (!formEl) return;
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const fd = new FormData(formEl);
    const data = {};
    fd.forEach(function (v, k) { data[k] = String(v).trim(); });
    let ok = true;
    formEl.querySelectorAll("[data-field]").forEach(function (fld) {
      const fname = fld.getAttribute("data-field");
      const val = data[fname] || "";
      let bad = !val;
      if (fname === "email" && val) bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      if (fname === "phone" && val) bad = !/^[+0-9()\-\s]{6,20}$/.test(val);
      fld.classList.toggle("invalid", bad);
      if (bad) ok = false;
    });
    if (!ok) return;
    const productId = opts && opts.productId ? opts.productId : (formEl.getAttribute("data-product") || "");
    const p = site.products.find(function (x) { return x.id === productId; });
    const inquiry = {
      id: "q" + Date.now(),
      ts: new Date().toISOString(),
      page: opts && opts.page ? opts.page : location.pathname.split("/").pop(),
      product: p ? productName(p) : data.product || "",
      name: data.name, email: data.email, phone: data.phone || "",
      company: data.company || "", country: data.country || "",
      qty: data.qty || "", msg: data.msg || ""
    };
    const list = store.loadInquiries();
    list.unshift(inquiry);
    store.saveInquiries(list);
    store.insertInquiry(inquiry);
    /* CRM / team webhook forward (optional) */
    const hook = site.settings.crmWebhook;
    if (hook) {
      try {
        const type = site.settings.crmWebhookType || "generic";
        let url2 = hook;
        let payload = inquiry;
        if (type === "feishu") {
          payload = { msg_type: "text", content: { text: "[New Inquiry] " + (inquiry.product || "") + " | " + inquiry.name + " | " + inquiry.country + " | " + inquiry.email + " | " + (inquiry.msg || "") } };
        } else if (type === "pushplus") {
          url2 = (typeof SUPABASE_URL !== "undefined" ? SUPABASE_URL : "") + "/functions/v1/pushplus-notify";
          payload = {
            token: hook,
            title: "新询盘：" + (inquiry.product || "Home appliances"),
            content: "客户：" + inquiry.name + "\n国家：" + inquiry.country + "\n邮箱：" + inquiry.email + (inquiry.company ? "\n公司：" + inquiry.company : "") + "\n产品：" + (inquiry.product || "-") + (inquiry.qty ? "\n数量：" + inquiry.qty : "") + (inquiry.msg ? "\n留言：" + inquiry.msg : "")
          };
        }
        fetch(url2, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }).catch(function () {});
      } catch (e) {}
    }
    /* server-side email copy via api/submit.php (optional; silently skipped on failure
       or when previewing via file:// - the inquiry is already saved locally above) */
    try {
      if (window.fetch && location.protocol.indexOf("http") === 0) {
        fetch("api/submit.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inquiry)
        }).catch(function () {});
      }
    } catch (e) {}
    const success = formEl.querySelector(".form-success");
    if (success) {
      success.classList.add("show");
      const waMsg = (data.msg ? data.msg + "\n\n" : "") +
        "Name: " + data.name + "\nEmail: " + data.email +
        (data.country ? "\nCountry: " + data.country : "") +
        (data.qty ? "\nQty: " + data.qty : "") +
        (productId ? "\nProduct: " + productName(p) : "");
      success.innerHTML = esc(t(opts && opts.successKey || "home.quote.success")) +
        '<div class="wa-line"><a class="btn btn-wa btn-sm" href="' + waLink(waMsg) + '" target="_blank" rel="noopener">' +
        icon("whatsapp") + esc(t("home.quote.wa")) + "</a></div>";
      formEl.querySelector("button[type='submit']").disabled = true;
      formEl.querySelectorAll("input, textarea").forEach(function (i) { i.disabled = true; });
      try {
        if (window.gtag) gtag("event", "generate_lead", { event_category: "inquiry" });
        if (window.fbq) fbq("track", "Lead");
      } catch (err) {}
      toast(t("home.quote.success"));
    }
  });
}

/* ---------------- products page ---------------- */
function renderProductsPage() {
  const grid = document.getElementById("product-grid");
  const empty = document.getElementById("grid-empty");
  if (!grid) return;
  const cat = currentFilter.cat;
  const q = currentFilter.q.toLowerCase();
  const items = site.products.filter(function (p) {
    if (p.active === false) return false;
    if (cat !== "all" && p.cat !== cat) return false;
    if (q) {
      const hay = (productName(p) + " " + productDesc(p) + " " + (p.specs || []).map(function (s) { return s.v; }).join(" ")).toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  });
  grid.innerHTML = items.map(function (p) { return productCard(p); }).join("");
  if (empty) empty.classList.toggle("show", items.length === 0);
  bindProductCards(grid);
  observeReveals();
}

function initProductsFilters() {
  const pillsWrap = document.getElementById("filter-pills");
  if (!pillsWrap) return;
  const params = new URLSearchParams(window.location.search);
  if (params.get("cat")) currentFilter.cat = params.get("cat");
  const allPill = '<button class="filter-pill' + (currentFilter.cat === "all" ? " active" : "") + '" data-cat="all">' + esc(t("prod.filterAll")) + "</button>";
  const pills = allPill + site.categories.map(function (c) {
    return '<button class="filter-pill' + (currentFilter.cat === c.id ? " active" : "") + '" data-cat="' + esc(c.id) + '">' + esc(catName(c)) + "</button>";
  }).join("");
  pillsWrap.innerHTML = pills;
  pillsWrap.querySelectorAll(".filter-pill").forEach(function (b) {
    b.addEventListener("click", function () {
      currentFilter.cat = b.getAttribute("data-cat");
      pillsWrap.querySelectorAll(".filter-pill").forEach(function (x) { x.classList.toggle("active", x === b); });
      renderProductsPage();
    });
  });
  const search = document.getElementById("product-search");
  if (search) {
    search.addEventListener("input", function () {
      currentFilter.q = search.value;
      renderProductsPage();
    });
  }
}

/* ---------------- about page ---------------- */
function renderMilestones() {
  const wrap = document.getElementById("timeline");
  if (!wrap) return;
  wrap.innerHTML = site.milestones.map(function (m) {
    return '<div class="tl-item"><div class="tl-year">' + esc(m.year) + "</div>" +
      "<h4>" + esc(localizeField(m, "title")) + "</h4><p>" + esc(localizeField(m, "desc")) + "</p></div>";
  }).join("");
}

function renderQcSteps() {
  const grid = document.getElementById("qc-grid");
  if (!grid) return;
  grid.innerHTML = site.qcSteps.map(function (s, i) {
    return '<div class="qc-card reveal"><span class="qc-num">' + String(i + 1).padStart(2, "0") + "</span>" +
      '<div class="qc-icon">' + icon(s.icon) + "</div>" +
      "<h3>" + esc(localizeField(s, "title")) + "</h3><p>" + esc(localizeField(s, "desc")) + "</p></div>";
  }).join("");
}

function renderCerts() {
  const grid = document.getElementById("cert-grid");
  if (!grid) return;
  grid.innerHTML = site.certs.map(function (c) {
    return '<div class="cert-card reveal"><div class="cert-mark">' + esc(c.mark) + "</div>" +
      '<div class="cert-name">' + esc(c.name) + '</div><div class="cert-scope">' + esc(c.scope) + "</div></div>";
  }).join("");
}

function renderOem() {
  const grid = document.getElementById("oem-grid");
  if (!grid) return;
  grid.innerHTML = site.oemPoints.map(function (o) {
    return '<div class="qc-card reveal"><div class="qc-icon">' + icon(o.icon) + "</div>" +
      "<h3>" + esc(localizeField(o, "title")) + "</h3><p>" + esc(localizeField(o, "desc")) + "</p></div>";
  }).join("");
}

/* ---------------- contact page ---------------- */
function renderContact() {
  const s = site.settings;
  const cards = document.getElementById("contact-cards");
  if (cards) {
    cards.innerHTML =
      '<div class="contact-card reveal"><div class="cc-icon">' + icon("pin") + "</div><h3>" + esc(t("contact.card.address")) + '</h3><p class="js-address">' + esc(s.address) + "</p></div>" +
      '<div class="contact-card reveal"><div class="cc-icon">' + icon("phone") + "</div><h3>" + esc(t("contact.card.phone")) + '</h3><p><a href="tel:' + esc(s.phone.replace(/[^0-9+]/g, "")) + '" class="js-phone">' + esc(s.phone) + "</a></p></div>" +
      '<div class="contact-card reveal"><div class="cc-icon">' + icon("mail") + "</div><h3>" + esc(t("contact.card.email")) + '</h3><p><a href="mailto:' + esc(s.email) + '" class="js-email">' + esc(s.email) + "</a></p></div>" +
      '<div class="contact-card reveal"><div class="cc-icon">' + icon("clock") + "</div><h3>" + esc(t("contact.card.hours")) + '</h3><p class="js-hours">' + esc(s.hours) + "</p></div>" +
      '<div class="contact-card reveal"><div class="cc-icon">' + icon("fb") + "</div><h3>" + esc(t("contact.card.social")) + '</h3><p class="js-social"><a href="' + esc(s.facebook || "#") + '" target="_blank" rel="noopener">Facebook · Weiqiwude</a><br><a href="' + esc(s.facebookCn || "#") + '" target="_blank" rel="noopener">Facebook · 伟奇伍德</a></p></div>';
  }
  const map = document.getElementById("map-frame");
  if (map) {
    map.src = "https://www.google.com/maps?q=" + encodeURIComponent(s.mapQuery) + "&output=embed";
  }
  const form = document.getElementById("contact-form");
  if (form) bindInquiryForm(form, { page: "contact" });
}

/* ---------------- cookie consent + analytics ---------------- */
function initCookieBanner() {
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;
  const choice = localStorage.getItem("hw_cookie_choice");
  if (choice) return;
  banner.classList.add("show");
  banner.querySelectorAll("[data-cookie]").forEach(function (b) {
    b.addEventListener("click", function () {
      localStorage.setItem("hw_cookie_choice", b.getAttribute("data-cookie"));
      banner.classList.remove("show");
      if (b.getAttribute("data-cookie") === "accept") loadAnalytics();
    });
  });
}

function loadAnalytics() {
  const id = site.settings.analyticsId;
  if (!id) {
    console.info("[analytics] No GA4 ID configured - set it in admin > Settings > Analytics ID");
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", id);
  const sc = document.createElement("script");
  sc.async = true;
  sc.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
  document.head.appendChild(sc);
}

/* ---------------- floating widgets ---------------- */
function initFloating() {
  const top = document.getElementById("float-top");
  if (top) {
    top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    window.addEventListener("scroll", function () {
      top.classList.toggle("show", window.scrollY > 600);
    }, { passive: true });
  }
  const waFloat = document.getElementById("float-wa");
  if (waFloat) waFloat.href = waLink();
}

/* ---------------- reveals ---------------- */
function observeReveals() {
  const els = document.querySelectorAll(".reveal:not(.in)");
  if (!els.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
}

/* ---------------- footer categories ---------------- */
function renderFooterCats() {
  const wrap = document.getElementById("footer-cats");
  if (!wrap) return;
  wrap.innerHTML = site.categories.map(function (c) {
    return '<li><a href="products.html?cat=' + esc(c.id) + '">' + esc(catName(c)) + "</a></li>";
  }).join("");
}

/* ---------------- product selects in forms ---------------- */
function renderProductSelects() {
  const opts = '<option value="">' + esc(t("form.selectProduct")) + "</option>" +
    site.categories.map(function (c) {
      return '<option value="' + esc(c.id) + '">' + esc(catName(c)) + "</option>";
    }).join("") +
    '<option value="other">' + esc(t("form.other")) + "</option>";
  document.querySelectorAll(".js-product-select").forEach(function (sel) {
    const prev = sel.value;
    sel.innerHTML = opts;
    if (prev) sel.value = prev;
  });
}

/* ---------------- online chat (Tawk.to) ---------------- */
function initChat() {
  const id = site.settings.tawkId;
  if (!id) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://embed.tawk.to/" + id;
  s.charset = "UTF-8";
  s.setAttribute("crossorigin", "*");
  document.body.appendChild(s);
}

/* ---------------- facebook pixel ---------------- */
function initFacebookPixel() {
  const id = site.settings.fbpixelId;
  if (!id) return;
  if (window.fbq) return;
  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
    t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", id);
  fbq("track", "PageView");
}

/* ---------------- product detail page ---------------- */
function renderProductPage() {
  const box = document.getElementById("pd-content");
  if (!box) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("p") || params.get("id");
  const p = site.products.find(function (x) { return x.id === id && x.active !== false; });
  const crumbsName = document.getElementById("pd-name");
  const relatedWrap = document.getElementById("pd-related-wrap");
  if (!p) {
    box.innerHTML = '<div style="text-align:center;padding:60px 20px;color:var(--ink-3);"><p data-i18n="prod.notfound">Product not found. It may have been removed.</p>' +
      '<a class="btn btn-primary" href="products.html" data-i18n="common.viewAll">View all products</a></div>';
    if (relatedWrap) relatedWrap.style.display = "none";
    return;
  }
  const cat = categoryOf(p.cat);
  const name = productName(p);
  const desc = productDesc(p);
  if (crumbsName) crumbsName.textContent = name;
  const specCells = (p.specs || []).map(function (s) {
    return '<div class="spec-cell"><div class="k">' + esc(specLabel(s.k)) + '</div><div class="v">' + esc(s.v) + "</div></div>";
  }).join("");
  const sampleLink = site.settings.samplePayLink;
  box.innerHTML =
    '<div class="pd-layout">' +
    '<div class="pd-media"><img src="' + esc(p.img) + '" alt="' + esc(name) + '"></div>' +
    '<div class="pd-info">' +
    '<div class="m-cat">' + esc(cat ? catName(cat) : "") + "</div>" +
    "<h1>" + esc(name) + "</h1>" +
    '<p class="m-desc" style="font-size:1.02rem;">' + esc(desc) + "</p>" +
    '<h4 style="margin:22px 0 12px;font-size:1.02rem;">' + esc(t("prod.specsTitle")) + "</h4>" +
    '<div class="spec-grid">' + specCells + "</div>" +
    '<div class="factory-note">' + icon("factory") + "<span>" + esc(t("prod.factoryNote")) + "</span></div>" +
    '<div class="m-cta" style="margin-top:22px;">' +
    '<button class="btn btn-primary btn-lg" data-pd-inquire="' + esc(p.id) + '">' + esc(t("common.inquire")) + "</button>" +
    '<button class="btn btn-outline btn-lg" data-pd-sample="' + esc(p.id) + '">' + esc(t("prod.reqSample")) + "</button>" +
    '<a class="btn btn-wa btn-lg" href="' + waLink(t("wa.defaultMsg") + " " + name) + '" target="_blank" rel="noopener">' + icon("whatsapp") + " WhatsApp</a>" +
    (sampleLink ? '<a class="btn btn-outline btn-lg" href="' + esc(sampleLink) + '" target="_blank" rel="noopener">' + esc(t("prod.buySample")) + "</a>" : "") +
    "</div>" +
    (sampleLink ? '<p style="font-size:0.84rem;color:var(--ink-3);margin-top:10px;" data-i18n="prod.sampleNote">Sample fee will be deducted from your first bulk order. Payment handled securely by PayPal/Stripe.</p>' : "") +
    "</div></div>";
  const inqBtn = box.querySelector("[data-pd-inquire]");
  if (inqBtn) inqBtn.addEventListener("click", function () { openInquiryModal(p.id); });
  const smpBtn = box.querySelector("[data-pd-sample]");
  if (smpBtn) smpBtn.addEventListener("click", function () { openInquiryModal(p.id, "Sample request: " + name + "\n"); });
  /* SEO: dynamic meta + structured data */
  document.title = name + " | " + (cat ? catName(cat) + " | " : "") + "WECHGOOD";
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", "Wholesale " + name + " from China factory. " + (desc || "").slice(0, 140) + " OEM/ODM, MOQ from 500 pcs, reply within 12 Working Hours.");
  const canon = document.querySelector('link[rel="canonical"]');
  if (canon) canon.setAttribute("href", location.href.split("?")[0] + "?p=" + encodeURIComponent(id));
  let ld = document.getElementById("pd-jsonld");
  if (!ld) { ld = document.createElement("script"); ld.type = "application/ld+json"; ld.id = "pd-jsonld"; document.head.appendChild(ld); }
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: desc || "",
    image: new URL(p.img, location.href).href,
    category: cat ? catName(cat) : "",
    brand: { "@type": "Brand", name: site.settings.brand },
    offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "USD", price: "0.00" }
  });
  /* D24: hero Get a Quote -> inquiry modal with model context */
  const heroQ = document.getElementById("pd-hero-quote");
  if (heroQ) heroQ.addEventListener("click", function (e) { e.preventDefault(); openInquiryModal(p.id); });
  /* related products */
  const relGrid = document.getElementById("pd-related");
  if (relGrid && relatedWrap) {
    const rel = site.products.filter(function (x) { return x.id !== p.id && x.cat === p.cat && x.active !== false; }).slice(0, 4);
    if (rel.length) {
      relGrid.innerHTML = rel.map(function (r) { return productCard(r); }).join("");
      bindProductCards(relGrid);
      relatedWrap.style.display = "";
    } else {
      relatedWrap.style.display = "none";
    }
  }
}

/* ---------------- factory tour video (about page) ---------------- */
function renderFactoryVideo() {
  const box = document.getElementById("factory-video");
  if (!box) return;
  const v = (site.settings.factoryVideo || "").trim();
  if (!v) return;
  let html = "";
  if (/youtube|youtu\.be/i.test(v)) {
    const m = v.match(/(?:v=|youtu\.be\/)([\w-]{6,})/);
    if (m) html = '<iframe src="https://www.youtube.com/embed/' + m[1] + '" title="Factory tour" allowfullscreen loading="lazy"></iframe>';
  } else if (/bilibili/i.test(v)) {
    const m = v.match(/BV[\w]+/);
    if (m) html = '<iframe src="https://player.bilibili.com/player.html?bvid=' + m[0] + '&autoplay=0" title="Factory tour" allowfullscreen loading="lazy"></iframe>';
  } else {
    html = '<video controls preload="none" src="' + esc(v) + '"></video>';
  }
  if (html) box.innerHTML = '<h2 style="margin:0 0 14px;font-size:1.4rem;">' + esc(t("about.video")) + "</h2>" + html;
}

/* ---------------- page dispatch ---------------- */
function renderDynamic() {
  const page = document.body.getAttribute("data-page");
  if (page === "home") {
    renderCarousel(); renderAdvantages(); renderWhyUs(); renderStats();
    renderCategories(); renderFeatured(); renderTestimonials();
  } else if (page === "products") {
    renderProductsPage(); renderTestimonials();
  } else if (page === "about") {
    renderMilestones(); renderQcSteps(); renderCerts(); renderOem(); renderFactoryVideo();
  } else if (page === "contact") {
    renderContact();
  } else if (page === "product") {
    renderProductPage();
  }
  observeReveals();
}

document.addEventListener("DOMContentLoaded", function () {
  initStore().then(function () {
  site = store.loadSite();
  initHeader();
  fillSettings();
  renderFooterCats();
  renderProductSelects();
  renderDynamic();
  if (document.body.getAttribute("data-page") === "products") initProductsFilters();
  const homeQuote = document.getElementById("home-quote-form");
  if (homeQuote) bindInquiryForm(homeQuote, { page: "home" });
  const scrollHint = document.getElementById("hero-scroll-hint");
  if (scrollHint) {
    scrollHint.addEventListener("click", function () {
      document.getElementById("trust-strip").scrollIntoView({ behavior: "smooth" });
    });
  }
  initCookieBanner();
  initFloating();
  initChat();
  initFacebookPixel();
  observeReveals();
  /* D24: contact page ?model= prefill */
  if (document.body.getAttribute("data-page") === "contact") {
    const pm = new URLSearchParams(window.location.search).get("model");
    if (pm) {
      const msgBox = document.getElementById("ct-msg");
      if (msgBox && !msgBox.value) msgBox.value = "Hi, I'm interested in " + pm + ".\n";
    }
  }
  /* URL param preselect for products */
  if (document.body.getAttribute("data-page") === "products") {
    const params = new URLSearchParams(window.location.search);
    if (params.get("cat")) {
      const pills = document.getElementById("filter-pills");
      if (pills) {
        const target = pills.querySelector('[data-cat="' + params.get("cat") + '"]');
        if (target) target.click();
      }
    }
  }
  });
});

/* re-render dynamic text when language changes (static [data-i18n] handled in i18n.js) */
document.addEventListener("langchange", function () {
  renderDynamic();
  if (document.body.getAttribute("data-page") === "products") {
    const pillsWrap = document.getElementById("filter-pills");
    if (pillsWrap) {
      /* re-render pill labels keeping current selection */
      const current = currentFilter.cat;
      const allPill = '<button class="filter-pill' + (current === "all" ? " active" : "") + '" data-cat="all">' + esc(t("prod.filterAll")) + "</button>";
      pillsWrap.innerHTML = allPill + site.categories.map(function (c) {
        return '<button class="filter-pill' + (current === c.id ? " active" : "") + '" data-cat="' + esc(c.id) + '">' + esc(catName(c)) + "</button>";
      }).join("");
      pillsWrap.querySelectorAll(".filter-pill").forEach(function (b) {
        b.addEventListener("click", function () {
          currentFilter.cat = b.getAttribute("data-cat");
          pillsWrap.querySelectorAll(".filter-pill").forEach(function (x) { x.classList.toggle("active", x === b); });
          renderProductsPage();
        });
      });
    }
  }
});
