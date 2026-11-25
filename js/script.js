/* The Old Stone House Guesthouse
   ---------------------------------------------------------------
   EDIT HERE: everything the owner may need to change lives in the
   CONFIG block below. Nothing else in this file needs touching.
   --------------------------------------------------------------- */
(() => {
"use strict";

const CONFIG = {
  businessName: "The Old Stone House Guesthouse",

  /* Contact numbers (local format; converted to 27… for WhatsApp).
     `defaultContact` is used by every enquiry button except the two
     number-specific buttons in the "Book your stay" section. */
  contacts: { primary: "0712607773", secondary: "0714749811" },
  defaultContact: "primary",
  email: "oldstonehouse36@outlook.com",

  /* Floating WhatsApp button.
     OWNER TO CONFIRM: this number was hard-coded separately in the original
     site and does NOT match either published contact number above. It is kept
     exactly as it was so no enquiry is silently redirected.
     To send the floating button to a published number instead, replace the
     value with "primary" or "secondary". */
  floatingWhatsApp: "0833804971",

  /* Booking platform listing URLs. Leave "" to hide a platform; the link
     appears automatically once a full https:// URL is added. */
  bookingLinks: {
    bookingCom: "https://www.booking.com/Share-ozJnhyo",
    lekkerSlaap: "https://www.lekkeslaap.co.za/akkommodasie/the-old-stone-house-91",
    airbnb: "https://www.airbnb.co.uk/rooms/1795618180566762064"
  },

  /* Social media URLs. Leave "" to hide an icon. */
  socialLinks: { facebook: "", instagram: "", tiktok: "" },

  /* Private direct-booking overnight rates (rand per night).
     This is the only place prices are stored.
     `lead` is the main photograph, `second` an optional supporting one,
     `photos` the set shown in the details overlay (see IMG / ALT below). */
  accommodation: [
    {
      id: "nguni", name: "Nguni Luxury Lodge", rate: 1600, layout: "feature", number: "01",
      description: "Our luxurious accommodation option offers a relaxing retreat, featuring an outdoor entertainment area and hot tub, perfect for unwinding after a busy day.",
      features: ["Outdoor entertainment area", "Hot tub", "Wood for the hot tub is available as an additional service (please enquire for the price)"],
      lead: "nguni1", photos: ["nguni1", "nguni5", "nguni4", "nguni3", "nguni2", "nguni6", "nguni7", "hottub"]
    },
    {
      id: "southern", name: "Southern Cottage", rate: 1400, layout: "split", number: "02",
      description: "A cosy and charming cottage featuring an outdoor fire pit and fairy lights, ideal for guests looking for a peaceful and inviting stay.",
      features: ["Outdoor fire pit", "Fairy lights"],
      lead: "southern1", second: "southern5", photos: ["southern1", "southern2", "southern5", "southern3", "southern4", "southern6"]
    },
    {
      id: "stone", name: "Stone Cottage", rate: 950, layout: "cinema", number: "03",
      description: "A comfortable and affordable accommodation option for guests seeking excellent value and a welcoming environment.",
      features: [],
      lead: "stonecottage1", photos: ["stonecottage1", "stonecottage4", "stonecottage3", "stonecottage2"]
    }
  ],

  /* Hero slider: first photograph is the opening image (also in the HTML so it
     paints immediately). Autoplay is off for visitors who prefer reduced motion. */
  heroSlides: ["hero3", "hero1", "hero2"],
  heroInterval: 9000, /* milliseconds per slide */

  /* Photographs used in fixed places on the page. */
  images: { about: "southern6", pool: "pool", hottub: "hottub", corporate: "nguni3", final: "nguni5" },

  /* Team photographs. */
  staff: [
    { name: "Angelique Enslin and Jannes du Plessis", role: "Your hosts", img: "team_host", alt: "Angelique Enslin and Jannes du Plessis, the hosts" },
    { name: "Sinikiwe Mkhulisi", role: "House keeping", img: "team_cleaner", alt: "Sinikiwe Mkhulisi, house keeping" },
    { name: "Moses Lungu", role: "Maintenance and gardener", img: "team_gardener", alt: "Moses Lungu, maintenance and gardener" }
  ],

  /* Guest reviews: stars is a number from 1 to 5. Original wording. */
  reviews: [
    { stars: 5, name: "Angie",
      title: "Beautiful furnishings, comfy luxurious accommodation, attentive hosts, convenient location",
      text: "Everything! We didn't want to leave. The pictures don't even do it justice. Book it, you won't be disappointed! This was the best B&B we stayed at in our travels of SA." },
    { stars: 5, name: "Khalipha",
      title: "My partner and I are definitely going to come back again to this wonderful place",
      text: "I liked everything about this place. The place is clean. The host was very welcoming and friendly. The hot tub was definitely the star of the show. My partner and I enjoyed the hot tub so much! Pictures are not doing justice for this place, this place is beautiful. I also like that we had privacy." },
    { stars: 5, name: "Eugene", title: "Fantastic", text: "Great host, great venue. What more could one want?" }
  ],

  /* Gallery categories: lists of image ids (see IMG below). */
  gallery: {
    "Nguni Luxury Lodge": ["nguni1", "nguni2", "nguni3", "nguni4", "nguni5", "nguni6", "nguni7"],
    "Southern Cottage": ["southern1", "southern2", "southern3", "southern4", "southern5", "southern6"],
    "Stone Cottage": ["stonecottage1", "stonecottage2", "stonecottage3", "stonecottage4"],
    "Communal Facilities": ["pool"]
  },

  /* WhatsApp message templates. {unit} is replaced by the unit name. */
  messages: {
    general: "Good day, I would like to enquire about a stay at The Old Stone House Guesthouse. Please let me know about availability and rates.",
    unit: "Good day, I would like to enquire about {unit} at The Old Stone House Guesthouse. Please let me know the availability and current rate for my dates.",
    dayUse: "Good day, I would like to enquire about day-use accommodation at The Old Stone House Guesthouse. Please let me know which units are available, the available times and the rates.",
    corporate: "Good day, I would like to enquire about corporate accommodation at The Old Stone House Guesthouse. Please let me know the available options and how I can request a quotation for our accommodation requirements.",
    emailSubject: "Enquiry: The Old Stone House Guesthouse"
  }
};

/* Optimised files live in images/web (WebP + JPEG, several widths); the
   original full-size photographs are untouched in their own folders.
   Format: id: [file prefix, width, height, available widths]
   Alt text describes only what is visible in each photograph. */
const IMG = {
  nguni1: ["accommodation-nguni1", 1600, 1070, [640, 1280, 1920]],
  nguni2: ["accommodation-nguni2", 1600, 1068, [640, 1280, 1920]],
  nguni3: ["accommodation-nguni3", 1600, 1066, [640, 1280, 1920]],
  nguni4: ["accommodation-nguni4", 1600, 1066, [640, 1280, 1920]],
  nguni5: ["accommodation-nguni5", 1600, 1066, [640, 1280, 1920]],
  nguni6: ["accommodation-nguni6", 1600, 1067, [640, 1280, 1920]],
  nguni7: ["accommodation-nguni7", 1600, 1067, [640, 1280, 1920]],
  southern1: ["accommodation-southern1", 1600, 1067, [640, 1280, 1920]],
  southern2: ["accommodation-southern2", 1600, 1067, [640, 1280, 1920]],
  southern3: ["accommodation-southern3", 1600, 1067, [640, 1280, 1920]],
  southern4: ["accommodation-southern4", 1600, 1067, [640, 1280, 1920]],
  southern5: ["accommodation-southern5", 1600, 1067, [640, 1280, 1920]],
  southern6: ["accommodation-southern6", 1600, 1066, [640, 1280, 1920]],
  stonecottage1: ["accommodation-stonecottage1", 1600, 1200, [640, 1280]],
  stonecottage2: ["accommodation-stonecottage2", 1200, 1600, [640, 1280]],
  stonecottage3: ["accommodation-stonecottage3", 1600, 1200, [640, 1280]],
  stonecottage4: ["accommodation-stonecottage4", 1600, 1200, [640, 1280]],
  hottub: ["facilities-hottub", 1600, 1066, [640, 1280, 1600]],
  pool: ["facilities-pool", 1600, 1066, [640, 1280, 1600]],
  hero1: ["hero-01", 1600, 1067, [640, 1280, 1600]],
  hero2: ["hero-02", 1600, 1066, [640, 1280, 1600]],
  hero3: ["hero-03", 1600, 1066, [640, 1280, 1600]],
  team_cleaner: ["team-cleaner", 1160, 1544, [640, 1280]],
  team_gardener: ["team-gardener", 941, 1672, [640, 900]],
  team_host: ["team-host", 1086, 1448, [640, 960]]
};
const ALT = {
  nguni1: "Nguni Luxury Lodge living area with a grey corner sofa and sliding doors to the garden",
  nguni2: "Nguni Luxury Lodge kitchen with white cupboards and a long passage toward the dining area",
  nguni3: "Nguni Luxury Lodge dining table with grey chairs, beside the lounge",
  nguni4: "Nguni Luxury Lodge lounge with a corner sofa, coffee table and framed artwork",
  nguni5: "Nguni Luxury Lodge bedroom with a white double bed and a carved wooden bench",
  nguni6: "Nguni Luxury Lodge bathroom with a shower, bath and wooden shelving",
  nguni7: "Covered outdoor entertainment area at the Nguni Luxury Lodge with a table and chairs",
  southern1: "Southern Cottage bedroom with a white double bed and a wood-panelled wall",
  southern2: "Southern Cottage bedroom seen from the sliding door that opens to the garden",
  southern3: "Southern Cottage kitchenette with a hob, sink and kettle",
  southern4: "Southern Cottage bathroom with a shower and basin",
  southern5: "Southern Cottage wall-mounted television and kitchenette beside a sliding door",
  southern6: "Covered garden patio with a stone table, benches and chairs, surrounded by greenery",
  stonecottage1: "Stone Cottage bedroom with a double bed, blue-grey walls and a kitchenette",
  stonecottage2: "Stone Cottage bathroom with a shower and basin",
  stonecottage3: "Stone Cottage bedroom with a wooden dressing table and wardrobe",
  stonecottage4: "Stone Cottage double bed with calla lily artwork and a kitchenette",
  hottub: "Wooden hot tub in a gravel courtyard with hedges, belonging to the Nguni Luxury Lodge",
  pool: "Swimming pool set in natural rock, with thatched roofs and gardens behind it",
  hero1: "Bedroom with a white double bed, built-in desk and wardrobes",
  hero2: "Kitchen with white cupboards and a wooden door"
};

/* ---------------- Helpers ---------------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const rand = n => "R" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const intl = n => "27" + String(n).replace(/\D/g, "").replace(/^0/, "");
const waUrl = (msg, number) => `https://wa.me/${intl(number)}?text=${encodeURIComponent(msg)}`;
const mailUrl = msg => `mailto:${CONFIG.email}?subject=${encodeURIComponent(CONFIG.messages.emailSubject)}&body=${encodeURIComponent(msg)}`;
const validUrl = u => /^https:\/\/\S+$/i.test((u || "").trim());
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const contactNumber = key => CONFIG.contacts[key] || key;

/* Builds a <picture> with WebP + JPEG sources at every available width. */
function picture(id, { alt, sizes = "100vw", eager = false, widthCap } = {}) {
  const m = IMG[id]; if (!m) return null;
  const [file, w, h] = m;
  const ws = m[3].filter(x => !widthCap || x <= widthCap);
  const set = ext => ws.map(x => `images/web/${file}-${x}.${ext} ${x}w`).join(", ");
  const mid = ws[Math.min(1, ws.length - 1)];
  const pic = document.createElement("picture");
  const src = document.createElement("source");
  src.type = "image/webp"; src.srcset = set("webp"); src.sizes = sizes;
  const img = new Image();
  img.src = `images/web/${file}-${mid}.jpg`; img.srcset = set("jpg"); img.sizes = sizes;
  img.width = w; img.height = h; img.alt = alt === undefined ? (ALT[id] || "") : alt;
  img.decoding = "async"; img.loading = eager ? "eager" : "lazy";
  pic.append(src, img);
  return pic;
}
const biggest = id => { const m = IMG[id]; return `images/web/${m[0]}-${m[3][m[3].length - 1]}.jpg`; };

function placeholder(box, label) {
  box.textContent = "";
  const p = el("div", "ph", "<span>Photograph to be added</span>");
  p.setAttribute("role", "img"); p.setAttribute("aria-label", `Photograph to be added: ${label}`);
  box.append(p);
}
function fillFrame(box, id, opts) {
  box.textContent = "";
  const p = picture(id, opts);
  if (!p) return placeholder(box, id);
  p.lastChild.addEventListener("error", () => placeholder(box, opts && opts.alt || ALT[id] || id));
  box.append(p);
}

/* Static slots in the HTML */
const slotIds = { southern6: CONFIG.images.about, pool: CONFIG.images.pool, hottub: CONFIG.images.hottub, nguni3: CONFIG.images.corporate, nguni5: CONFIG.images.final };
$$("[data-slot]").forEach(b => {
  const id = slotIds[b.dataset.slot] || b.dataset.slot;
  if (b.dataset.ratio) b.style.setProperty("--ratio", b.dataset.ratio);
  fillFrame(b, id, { sizes: b.dataset.sizes || "100vw", alt: b.hasAttribute("data-decor") ? "" : undefined });
});

/* ---------------- Scroll reveal ---------------- */
let io = null;
if ("IntersectionObserver" in window && !reduced) {
  io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.01, rootMargin: "0px 0px -8% 0px" });
}
function observe(root = document) {
  $$(".rv, .rv-img", root).forEach(n => { if (io) io.observe(n); else n.classList.add("in"); });
}

/* ---------------- Hero slider ---------------- */
(function hero() {
  const box = $("#hero-slides"); if (!box) return;
  const ids = CONFIG.heroSlides;
  const first = $(".slide", box);
  const nodes = [first];
  let i = 0, timer = null, paused = reduced;
  const pb = $("#hero-pause"), count = $("#hero-count"), controls = $("#hero-controls");
  const pad = n => String(n).padStart(2, "0");
  const show = n => {
    i = (n + nodes.length) % nodes.length;
    nodes.forEach((d, k) => { d.classList.toggle("is-active", k === i); d.setAttribute("aria-hidden", String(k !== i)); });
    count.textContent = `${pad(i + 1)} / ${pad(nodes.length)}`;
  };
  const stop = () => { clearInterval(timer); timer = null; };
  const go = () => { stop(); if (!paused && nodes.length > 1) timer = setInterval(() => show(i + 1), CONFIG.heroInterval); };
  const sync = () => {
    pb.setAttribute("aria-pressed", String(paused));
    pb.setAttribute("aria-label", paused ? "Play slideshow" : "Pause slideshow");
    box.setAttribute("aria-live", paused ? "polite" : "off");
  };
  sync();
  pb.addEventListener("click", () => { paused = !paused; sync(); go(); });
  $("#hero-prev").addEventListener("click", () => { show(i - 1); go(); });
  $("#hero-next").addEventListener("click", () => { show(i + 1); go(); });

  /* The remaining photographs are added after the page has loaded so they
     never compete with the opening image. */
  const addRest = () => {
    ids.slice(1).forEach(id => {
      const d = el("div", "slide"); d.setAttribute("role", "group"); d.setAttribute("aria-roledescription", "slide");
      d.setAttribute("aria-hidden", "true");
      const p = picture(id, { sizes: "100vw", eager: true }); if (!p) return;
      const img = p.lastChild;
      const join = () => { nodes.push(d); box.append(d); nodes.forEach((n, k) => n.setAttribute("aria-label", `${k + 1} of ${nodes.length}`)); controls.hidden = nodes.length < 2; show(i); go(); };
      img.addEventListener("load", join, { once: true });
      img.addEventListener("error", () => console.warn("Hero photo not found: " + id), { once: true });
      d.append(p);
    });
  };
  first.setAttribute("aria-label", "1 of 1");
  if (document.readyState === "complete") addRest(); else addEventListener("load", addRest, { once: true });
})();

/* ---------------- Accommodation ---------------- */
const stays = $("#accommodation-list");
const unitById = Object.fromEntries(CONFIG.accommodation.map(u => [u.id, u]));
const featList = u => u.features.length
  ? `<ul class="ticks">${u.features.map(f => `<li>${f}</li>`).join("")}</ul>`
  : `<p class="muted">Please enquire for the full list of features.</p>`;

CONFIG.accommodation.forEach(u => {
  const art = el("article", `unit unit--${u.layout}`); art.id = "unit-" + u.id;
  art.setAttribute("aria-labelledby", `h-${u.id}`);

  const media = el("div", "unit-media rv-img");
  const open = el("button", "media-btn"); open.type = "button"; open.dataset.open = u.id;
  open.setAttribute("aria-label", `View photographs and details of ${u.name}`);
  const frame = el("div", "frame"); fillFrame(frame, u.lead, { sizes: u.layout === "cinema" ? "100vw" : "(min-width: 62em) 55vw, 100vw" });
  open.append(frame, el("span", "media-hint", "View photographs"));
  media.append(open);

  const copy = el("div", "unit-copy");
  copy.innerHTML = `
    <p class="eyebrow rv"><span class="num">${u.number}</span> Stay ${u.number}</p>
    <h3 id="h-${u.id}" class="unit-name rv">${u.name}</h3>
    <p class="rate rv"><strong>${rand(u.rate)}</strong> <span>per night &middot; private direct-booking rate</span></p>
    <p class="rv">${u.description}</p>
    <div class="rv">${featList(u)}</div>
    <div class="actions rv">
      <a class="btn btn-primary" data-wa="unit" data-unit="${u.name}" href="#location" target="_blank" rel="noopener noreferrer"><svg class="ico" aria-hidden="true"><use href="#i-wa"/></svg>Enquire about ${u.name}</a>
      <button class="btn btn-text" type="button" data-open="${u.id}">Details &amp; photographs<svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></button>
    </div>`;

  if (u.second) {
    const sec = el("div", "unit-second rv-img"); const f = el("div", "frame");
    fillFrame(f, u.second, { sizes: "(min-width: 62em) 24vw, 50vw" }); sec.append(f); art.append(media, sec, copy);
  } else art.append(media, copy);
  stays.append(art);
});

/* Details overlay */
const ud = $("#unit-dialog");
let udUnit = null, udPhotos = [], udPos = 0, udOpener = null;
function udShow(n) {
  udPos = (n + udPhotos.length) % udPhotos.length;
  const stage = $("#ud-stage"); stage.textContent = "";
  const p = picture(udPhotos[udPos], { sizes: "(min-width: 62em) 55vw, 100vw", eager: true });
  if (p) stage.append(p);
  $$("button", $("#ud-thumbs")).forEach((b, k) => b.setAttribute("aria-current", String(k === udPos)));
}
function udOpen(id, opener) {
  const u = unitById[id]; if (!u) return;
  udUnit = u; udOpener = opener; udPhotos = u.photos.filter(p => IMG[p]);
  $("#ud-eyebrow").textContent = `Stay ${u.number}`;
  $("#ud-title").textContent = u.name;
  $("#ud-rate").innerHTML = `<strong>${rand(u.rate)}</strong> per night <span>private direct-booking rate</span>`;
  $("#ud-desc").textContent = u.description;
  $("#ud-feats").innerHTML = featList(u);
  $("#ud-note").textContent = "Rates vary with season, availability and booking requirements, so please confirm before booking. Occupancy, bedding and other room details have not been listed here. Please enquire and we will gladly answer.";
  const a = $("#ud-enquire"); a.href = waUrl(CONFIG.messages.unit.replace("{unit}", u.name), contactNumber(CONFIG.defaultContact));
  $("span", a).textContent = `Enquire about ${u.name}`;
  const th = $("#ud-thumbs"); th.textContent = "";
  udPhotos.forEach((p, k) => {
    const b = el("button", "thumb"); b.type = "button";
    b.setAttribute("aria-label", `Show photograph ${k + 1} of ${udPhotos.length}`);
    const m = IMG[p]; const im = new Image(); im.alt = ""; im.loading = "lazy";
    im.src = `images/web/${m[0]}-640.jpg`; im.width = m[1]; im.height = m[2];
    b.append(im); b.addEventListener("click", () => udShow(k)); th.append(b);
  });
  udShow(0);
  ud.showModal(); document.documentElement.classList.add("lock");
}
stays.addEventListener("click", e => {
  const b = e.target.closest("[data-open]"); if (b) udOpen(b.dataset.open, b);
});
$("#ud-close").addEventListener("click", () => ud.close());
ud.addEventListener("click", e => { if (e.target === ud) ud.close(); });
ud.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") udShow(udPos - 1);
  if (e.key === "ArrowRight") udShow(udPos + 1);
});
ud.addEventListener("close", () => {
  document.documentElement.classList.remove("lock");
  if (udOpener && document.contains(udOpener)) udOpener.focus();
});

/* ---------------- Team and reviews ---------------- */
const staffBox = $("#staff-list");
CONFIG.staff.forEach((p, k) => {
  const f = el("figure", `person person--${k + 1} rv-img`), frame = el("div", "frame");
  fillFrame(frame, p.img, { alt: p.alt, sizes: k === 0 ? "(min-width: 62em) 45vw, 100vw" : "(min-width: 62em) 28vw, 50vw" });
  f.append(frame, el("figcaption", "", `<strong>${p.name}</strong><span>${p.role}</span>`));
  staffBox.append(f);
});
const revBox = $("#review-list");
const star = '<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-star"/></svg>';
CONFIG.reviews.forEach((r, k) => {
  const n = Math.max(1, Math.min(5, r.stars));
  const q = el("figure", "review rv");
  q.innerHTML = `<div class="rev-meta"><span class="num">0${k + 1}</span><div class="stars" role="img" aria-label="${n} out of 5 stars">${star.repeat(n)}</div><figcaption>${r.name}</figcaption></div>
    <div class="rev-body"><h3>${r.title}</h3><blockquote><p>${r.text}</p></blockquote></div>`;
  revBox.append(q);
});

/* ---------------- WhatsApp / email / telephone links ---------------- */
$$("[data-wa]").forEach(a => {
  const m = CONFIG.messages;
  const msg = a.dataset.wa === "unit" ? m.unit.replace("{unit}", a.dataset.unit) : m[a.dataset.wa];
  a.href = waUrl(msg, contactNumber(a.dataset.number || CONFIG.defaultContact));
  a.target = "_blank"; a.rel = "noopener noreferrer";
});
$$("[data-mail]").forEach(a => { a.href = mailUrl(CONFIG.messages[a.dataset.mail] || CONFIG.messages.general); });
$$("[data-tel]").forEach(a => {
  const n = CONFIG.contacts[a.dataset.tel];
  a.href = "tel:+" + intl(n);
  if (a.dataset.show !== undefined) a.textContent = n.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
});
$$("[data-email]").forEach(a => { a.href = "mailto:" + CONFIG.email; a.textContent = CONFIG.email; });
{
  const f = $("#float-wa");
  if (f) { f.href = waUrl(CONFIG.messages.general, contactNumber(CONFIG.floatingWhatsApp)); }
}

/* ---------------- Booking platforms and social links ---------------- */
function enable(a, url) {
  if (validUrl(url)) { a.href = url.trim(); a.target = "_blank"; a.rel = "noopener noreferrer"; return true; }
  const li = a.closest("li"); (li || a).remove(); return false;
}
{
  const on = $$("[data-platform]").map(a => enable(a, CONFIG.bookingLinks[a.dataset.platform])).filter(Boolean).length;
  if (!on) { const w = $("#platforms-wrap"); if (w) w.remove(); }
  const soc = $$("[data-social]").map(a => enable(a, CONFIG.socialLinks[a.dataset.social])).filter(Boolean).length;
  if (!soc) { const s = $("#social"); if (s) s.remove(); }
}

/* ---------------- Header: solid on scroll, active link, mobile menu ---------------- */
const header = $("#site-header"), toggle = $("#nav-toggle"), nav = $("#site-nav");
let ticking = false;
const onScroll = () => {
  if (ticking) return; ticking = true;
  requestAnimationFrame(() => { header.classList.toggle("is-solid", scrollY > 40); ticking = false; });
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();

if ("IntersectionObserver" in window) {
  const links = $$("#site-nav a[href^='#']:not(.btn)");
  const map = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    links.forEach(l => l.removeAttribute("aria-current"));
    const l = map.get(e.target.id); if (l) l.setAttribute("aria-current", "true");
  }), { rootMargin: "-45% 0px -50% 0px" });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
}

const mq = matchMedia("(min-width: 62em)");
function setNav(open, returnFocus) {
  header.classList.toggle("nav-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.documentElement.classList.toggle("lock", open);
  if (open) { const f = $("a", nav); if (f) f.focus(); } else if (returnFocus) toggle.focus();
}
toggle.addEventListener("click", () => setNav(toggle.getAttribute("aria-expanded") !== "true", true));
nav.addEventListener("click", e => { if (e.target.closest("a")) setNav(false); });
document.addEventListener("keydown", e => {
  if (!header.classList.contains("nav-open")) return;
  if (e.key === "Escape") { setNav(false, true); return; }
  if (e.key === "Tab") { /* keep focus inside the open menu */
    const f = [toggle, ...$$("a", nav)];
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
mq.addEventListener("change", () => { if (header.classList.contains("nav-open")) setNav(false); });

/* ---------------- Gallery and lightbox ---------------- */
const tabs = $("#gallery-tabs"), grid = $("#gallery-grid"), dlg = $("#lightbox");
const cats = Object.keys(CONFIG.gallery);
let current = cats[0], shown = [], pos = 0, lbOpener = null;

cats.forEach(cat => {
  const b = el("button", "tab", cat); b.type = "button"; b.dataset.cat = cat; tabs.append(b);
});

/* Asymmetric layout on a 6-column grid, built from fully filled two-row blocks */
function spans(n) {
  const out = []; let flip = false, rem = n;
  while (rem > 0) {
    if (rem === 1) { out.push([6, 2]); rem -= 1; }
    else if (rem === 3) { out.push([2, 2], [2, 2], [2, 2]); rem -= 3; }
    else { out.push(flip ? [2, 2] : [4, 2], flip ? [4, 2] : [2, 2]); flip = !flip; rem -= 2; }
  }
  return out;
}
function drawGallery() {
  $$(".tab", tabs).forEach(t => t.setAttribute("aria-pressed", String(t.dataset.cat === current)));
  grid.textContent = ""; shown = CONFIG.gallery[current].filter(id => IMG[id]);
  grid.classList.toggle("is-single", shown.length === 1);
  if (!shown.length) {
    for (let i = 0; i < 3; i++) { const f = el("div", "tile"); placeholder(f, `${current}, photograph ${i + 1}`); grid.append(f); }
    return;
  }
  const sp = spans(shown.length);
  shown.forEach((id, i) => {
    const b = el("button", "tile rv-img"); b.type = "button";
    b.style.setProperty("--c", sp[i][0]); b.style.setProperty("--r", sp[i][1]);
    b.style.setProperty("--d", `${(i % 4) * 70}ms`);
    b.setAttribute("aria-label", `Enlarge photograph: ${ALT[id] || id}`);
    const p = picture(id, { sizes: sp[i][0] > 3 ? "(min-width: 62em) 60vw, 50vw" : "(min-width: 62em) 30vw, 50vw" });
    b.append(p); b.addEventListener("click", () => openBox(i, b)); grid.append(b);
  });
  observe(grid);
}
tabs.addEventListener("click", e => { const t = e.target.closest(".tab"); if (t && t.dataset.cat !== current) { current = t.dataset.cat; drawGallery(); } });

function showBox() {
  const id = shown[pos]; const im = $("img", dlg);
  im.src = biggest(id); im.alt = ALT[id] || ""; im.hidden = false;
  $("figcaption", dlg).textContent = ALT[id] || "";
  $("#lb-count").textContent = `${pos + 1} / ${shown.length}`;
  $$(".lb-nav", dlg).forEach(b => b.hidden = shown.length < 2);
  [1, -1].forEach(d => { if (shown.length > 1) new Image().src = biggest(shown[(pos + d + shown.length) % shown.length]); });
}
function openBox(i, opener) { pos = i; lbOpener = opener; showBox(); dlg.showModal(); document.documentElement.classList.add("lock"); }
function step(d) { if (shown.length < 2) return; pos = (pos + d + shown.length) % shown.length; showBox(); }
$("#lb-close").addEventListener("click", () => dlg.close());
$("#lb-prev").addEventListener("click", () => step(-1));
$("#lb-next").addEventListener("click", () => step(1));
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener("keydown", e => { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
dlg.addEventListener("close", () => {
  document.documentElement.classList.remove("lock");
  if (lbOpener && document.contains(lbOpener)) lbOpener.focus();
});
{ /* swipe on touch screens */
  let x0 = null;
  dlg.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  dlg.addEventListener("touchend", e => {
    if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  }, { passive: true });
}
drawGallery();

/* ---------------- Footer year, reveals ---------------- */
$("#year").textContent = new Date().getFullYear();
observe();
requestAnimationFrame(() => document.documentElement.classList.add("ready"));
})();
