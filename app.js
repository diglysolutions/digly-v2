import Router from "/core/router.js";
import { getContent } from "/core/data.js";

//
// 🚀 INIT SPA
//
document.addEventListener("DOMContentLoaded", async () => {
  try {
    window.siteContent = await getContent();
  } catch (error) {
    console.error("Unable to preload content:", error);
    window.siteContent = null;
  }

  window.setupSiteExperience?.();
  Router.init();
});

//
// 🌐 GLOBAL NAVIGATION
//
window.navigate = (path, hash = "") => {
  window.closeAllNavDropdowns?.();
  window.closeNavMenu?.();
  Router.navigate(path, hash);
};

//
// 📍 SMOOTH SCROLL (CONTACT)
//
window.scrollToContact = () => {
  const el = document.getElementById("contact-section");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// Define these globally or in a scope accessible by both functions
const sectorLabels = {
  enterprise: "Entreprise internationale",
  education: "Université / Éducation",
  training: "Centre de formation",
  association: "Association / Organisation"
};

const needLabels = {
  communication: "Flux de communication critiques",
  training: "Architecture de formation",
  performance: "ROI & Impact opérationnel",
  audit: "Diagnostic de friction métier",
  other: "Autre axe stratégique"
};

const DEFAULT_SITE_CONFIG = {
  baseUrl: "https://digly-solutions.com",
  contactEmail: "dhernandez@digly-solutions.com",
  seo: {
    defaultTitle: "DIGLY — Ingénierie pédagogique & performance internationale",
    defaultDescription: "DIGLY conçoit des systèmes d'apprentissage et des dispositifs de performance communicationnelle pour entreprises, universités, centres de formation et organisations.",
    keywords: "ingénierie pédagogique, anglais professionnel, communication internationale, formation sur mesure, performance opérationnelle",
    routes: {}
  },
  analytics: {
    enabled: false,
    provider: "",
    scriptUrl: "",
    domain: "",
    measurementId: ""
  },
  pdf: {
    filename: "DIGLY_Brief_Demande.pdf",
    title: "Brief de demande DIGLY",
    subtitle: "Récapitulatif de votre demande de diagnostic",
    nextStepsTitle: "Prochaines étapes",
    nextSteps: []
  }
};

//
// 🧠 FUNNEL STATE (GLOBAL MINIMAL STATE)
//

//
// 🧠 FUNNEL STATE (GLOBAL MINIMAL STATE)
//
window.funnel = {
  sector: null,
  need: null
};

window.lastLeadSubmission = null;

const siteConfig = () => ({
  ...DEFAULT_SITE_CONFIG,
  ...(window.siteContent?.site || {}),
  seo: {
    ...DEFAULT_SITE_CONFIG.seo,
    ...(window.siteContent?.site?.seo || {})
  },
  analytics: {
    ...DEFAULT_SITE_CONFIG.analytics,
    ...(window.siteContent?.site?.analytics || {})
  },
  pdf: {
    ...DEFAULT_SITE_CONFIG.pdf,
    ...(window.siteContent?.site?.pdf || {})
  }
});

const formEndpoint = () => `https://formsubmit.co/ajax/${siteConfig().contactEmail}`;

window.setupSiteExperience = () => {
  const config = siteConfig();

  document.documentElement.lang = "fr";
  const navToggle = document.querySelector(".nav-toggle");
  navToggle?.setAttribute("aria-expanded", "false");

  const nav = document.querySelector(".navbar");
  nav?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      window.closeAllNavDropdowns();
      window.closeNavMenu();
    }
  });

  document.addEventListener("click", (event) => {
    const navbar = document.querySelector(".navbar");
    if (!navbar?.contains(event.target)) {
      window.closeAllNavDropdowns();
    }

    const modal = document.getElementById("success-modal");
    if (event.target === modal) {
      window.hideSuccessModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if (document.getElementById("success-modal")?.classList.contains("visible")) {
      window.hideSuccessModal();
    }

    window.closeAllNavDropdowns();
    window.closeNavMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      window.closeNavMenu();
    }
  });

  if (config.analytics.enabled) {
    window.initAnalytics();
  }

  window.applyRouteMetadata?.(window.location.pathname);
};

window.handleSelectableKey = (event, type, value) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  event.preventDefault();

  if (type === "sector") window.selectSector(value);
  if (type === "need") window.selectNeed(value);
};

window.closeAllNavDropdowns = () => {
  document.querySelectorAll(".nav-dropdown.open").forEach((item) => {
    item.classList.remove("open");
  });

  document.querySelectorAll(".dropdown-toggle").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
};

window.toggleNavDropdown = (name, event) => {
  event?.preventDefault();
  event?.stopPropagation();

  const target = document.querySelector(`.nav-dropdown[data-dropdown="${name}"]`);
  if (!target) return;

  const shouldOpen = !target.classList.contains("open");
  window.closeAllNavDropdowns();

  if (shouldOpen) {
    target.classList.add("open");
    target.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "true");
  }
};

window.closeNavMenu = () => {
  const navbar = document.querySelector(".navbar");
  const navToggle = document.querySelector(".nav-toggle");

  navbar?.classList.remove("menu-open");
  document.body.classList.remove("menu-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Ouvrir le menu");
};

window.toggleNavMenu = () => {
  const navbar = document.querySelector(".navbar");
  const navToggle = document.querySelector(".nav-toggle");
  const willOpen = !navbar?.classList.contains("menu-open");

  navbar?.classList.toggle("menu-open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
  navToggle?.setAttribute("aria-expanded", String(willOpen));
  navToggle?.setAttribute("aria-label", willOpen ? "Fermer le menu" : "Ouvrir le menu");

  if (!willOpen) {
    window.closeAllNavDropdowns();
  }
};

window.initAnalytics = () => {
  const analytics = siteConfig().analytics;
  if (!analytics.enabled || window.analyticsInitialized) return;

  if (analytics.provider === "plausible" && analytics.scriptUrl && analytics.domain) {
    const script = document.createElement("script");
    script.defer = true;
    script.dataset.domain = analytics.domain;
    script.src = analytics.scriptUrl;
    document.head.appendChild(script);
    window.analyticsInitialized = true;
    return;
  }

  if (analytics.provider === "ga4" && analytics.measurementId) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", analytics.measurementId, { send_page_view: false });
    window.analyticsInitialized = true;
  }
};

window.trackPageView = (path) => {
  const analytics = siteConfig().analytics;
  if (!analytics.enabled) return;

  const fullUrl = `${siteConfig().baseUrl}${path}`;

  if (analytics.provider === "plausible" && typeof window.plausible === "function") {
    window.plausible("pageview", { u: fullUrl });
  }

  if (analytics.provider === "ga4" && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_location: fullUrl,
      page_path: path
    });
  }
};

window.trackConversion = (lead) => {
  const analytics = siteConfig().analytics;
  if (!analytics.enabled) return;

  if (analytics.provider === "plausible" && typeof window.plausible === "function") {
    window.plausible("lead_submit", {
      props: {
        sector: lead.sector,
        need: lead.need,
        priority: lead.priority
      }
    });
  }

  if (analytics.provider === "ga4" && typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      sector: lead.sector,
      need: lead.need,
      priority: lead.priority
    });
  }
};

window.applyRouteMetadata = (path) => {
  const config = siteConfig();
  const seo = config.seo;
  const currentPath = path || "/";
  const routeConfig = seo.routes[currentPath] || {};

  let title = routeConfig.title || seo.defaultTitle;
  let description = routeConfig.description || seo.defaultDescription;

  if (currentPath.startsWith("/cases/")) {
    const caseId = currentPath.split("/").pop();
    const caseItem = window.siteContent?.cases?.find((item) => item.id === caseId);
    if (caseItem) {
      title = `${caseItem.title} | DIGLY`;
      description = caseItem.subtitle || caseItem.result || seo.defaultDescription;
    }
  }

  if (currentPath.startsWith("/solutions/")) {
    const slug = currentPath.split("/").pop();
    const solutionTitles = {
      entreprises: "Entreprises internationales",
      universites: "Universités",
      "centres-formation": "Centres de formation",
      associations: "Associations & organisations"
    };

    if (solutionTitles[slug]) {
      title = `${solutionTitles[slug]} | DIGLY`;
      description = `Découvrez l'approche DIGLY pour ${solutionTitles[slug].toLowerCase()}.`;
    }
  }

  document.title = title;

  const canonicalUrl = `${config.baseUrl}${currentPath === "/" ? "/" : currentPath}`;
  const ogImage = config.ogImage.startsWith("http")
    ? config.ogImage
    : `${config.baseUrl}${config.ogImage}`;

  const setMeta = (selector, attribute, value) => {
    const node = document.querySelector(selector);
    if (node) node.setAttribute(attribute, value);
  };

  setMeta('meta[name="description"]', "content", description);
  setMeta('meta[name="keywords"]', "content", seo.keywords);
  setMeta('meta[property="og:title"]', "content", title);
  setMeta('meta[property="og:description"]', "content", description);
  setMeta('meta[property="og:url"]', "content", canonicalUrl);
  setMeta('meta[property="og:image"]', "content", ogImage);
  setMeta('meta[name="twitter:title"]', "content", title);
  setMeta('meta[name="twitter:description"]', "content", description);
  setMeta('meta[name="twitter:image"]', "content", ogImage);
  setMeta('link[rel="canonical"]', "href", canonicalUrl);

  window.trackPageView(currentPath);
};

//
// 🎯 STEP 1 — SECTOR SELECTION
//
window.selectSector = (sector) => {
  window.funnel.sector = sector;
  window.funnel.need = null;

  document.querySelectorAll("[data-sector]").forEach(el => {
    el.classList.remove("selected");
    el.setAttribute("aria-pressed", "false");
  });

  document.querySelectorAll("[data-need]").forEach(el => {
    el.classList.remove("selected");
    el.setAttribute("aria-pressed", "false");
  });

  const active = document.querySelector(`[data-sector="${sector}"]`);
  if (active) {
    active.classList.add("selected");
    active.setAttribute("aria-pressed", "true");
  }

  const step2 = document.getElementById("step2");
  if (step2) {
    step2.classList.add("visible");
    step2.scrollIntoView({ behavior: "smooth" });
  }

  renderNeeds();
  document.querySelector("[data-need]")?.focus();

  const form = document.getElementById("final-form");
  form?.classList.remove("visible");
};

//
// ⚙️ STEP 2 — NEEDS RENDER
//
function renderNeeds() {
  const container = document.getElementById("needs-container");
  if (!container) return;

  const needs = [
    { id: "communication", label: "Flux de communication critiques" },
    { id: "training", label: "Architecture de formation" },
    { id: "performance", label: "ROI & Impact opérationnel" },
    { id: "audit", label: "Diagnostic de friction métier" },
    { id: "other", label: "Autre axe stratégique" }
  ];

  container.innerHTML = needs.map(n => `
    <div
      class="card hover-card selectable"
      data-need="${n.id}"
      role="button"
      tabindex="0"
      aria-pressed="false"
      onkeydown="handleSelectableKey(event, 'need', '${n.id}')"
    >
      <p>${n.label}</p>
    </div>
  `).join("");

  // attach events safely (no inline onclick)
  container.querySelectorAll("[data-need]").forEach(el => {
    el.addEventListener("click", () => {
      window.selectNeed(el.dataset.need);
    });
  });
}

//
// 🎯 STEP 2 — NEED SELECTION
//
window.selectNeed = (need) => {
  window.funnel.need = need;

  document.querySelectorAll("[data-need]").forEach(el => {
    el.classList.remove("selected");
    el.setAttribute("aria-pressed", "false");
  });

  const active = document.querySelector(`[data-need="${need}"]`);
  if (active) {
    active.classList.add("selected");
    active.setAttribute("aria-pressed", "true");
  }

  const form = document.getElementById("final-form");
  if (form) {
    form.classList.add("visible");
    form.scrollIntoView({ behavior: "smooth" });
    form.querySelector("input, textarea, button")?.focus();
  }
};

//
// 📩 LEAD SUBMIT SYSTEM
//
window.resetFunnelUI = () => {
  window.funnel = { sector: null, need: null };

  document.querySelectorAll(".selected").forEach(el => {
    el.classList.remove("selected");
  });

  document.getElementById("step2")?.classList.remove("visible");
  document.getElementById("final-form")?.classList.remove("visible");

  const needsContainer = document.getElementById("needs-container");
  if (needsContainer) needsContainer.innerHTML = "";
};

window.handleLeadSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');

  // Verrouillage de l'interface et retour visuel
  if (submitBtn) submitBtn.disabled = true;
  const originalBtnText = submitBtn ? submitBtn.innerHTML : "";
  if (submitBtn) submitBtn.innerHTML = "Traitement...";
  window.showLoader("Transmission sécurisée de votre demande...");
  window.updateProgressBar(20);

  // Populate hidden fields with funnel data
  const sectorField = form.querySelector('#form-sector');
  const needField = form.querySelector('#form-need');
  const priorityField = form.querySelector('#form-priority');
  const tagField = form.querySelector('#form-tag');

  const sector = window.funnel.sector || "unknown";
  const need = window.funnel.need || "unknown";

  let tag = "lead_generic";
  if (sector === "enterprise") tag = "lead_enterprise_high_value";
  if (sector === "education") tag = "lead_education";
  if (sector === "training") tag = "lead_training_center";
  if (sector === "association") tag = "lead_association";

  let priority = "medium";
  if (sector === "enterprise") priority = "high";
  if (need === "audit") priority = "high";

  if (sectorField) sectorField.value = sectorLabels[sector] || sector;
  if (needField) needField.value = needLabels[need] || need;
  if (priorityField) priorityField.value = priority;
  if (tagField) tagField.value = tag;

  const processedLead = {
    name: form.name.value,
    email: form.email.value,
    company: form.company.value || "",
    message: form.message.value || "",
    sector: sector,
    need: need,
    priority: priority,
    tag: tag,
    timestamp: new Date().toISOString()
  };

  // Check for honeypot field (anti-spam)
  if (form.website && form.website.value) {
    window.hideLoader();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
    return;
  }

  try {
    window.updateLoaderText("Analyse du dossier et routage du lead...");
    window.updateProgressBar(55);

    // For Netlify Forms, we need to submit the form data
    // Netlify will handle the email sending automatically
    const formData = new FormData();

    // Add form fields
    formData.append("form-name", "contact");
    formData.append("name", form.name.value);
    formData.append("email", form.email.value);
    formData.append("company", form.company.value || "");
    formData.append("message", form.message.value || "");

    // Add funnel data
    formData.append("sector", sectorLabels[sector] || sector);
    formData.append("priority_need", needLabels[need] || need);
    formData.append("priority", priority);
    formData.append("tag", tag);
    formData.append("timestamp", new Date().toISOString());

    const response = await fetch("/", {
      method: "POST",
      body: formData
    });

    // Netlify Forms typically returns a success response
    if (response.ok) {
      window.lastLeadSubmission = processedLead;
      window.trackConversion(processedLead);
      window.updateLoaderText("Demande enregistrée avec succès.");
      window.updateProgressBar(100);

      setTimeout(() => {
        window.hideLoader();
        window.showSuccessModal();
        form.reset();
        window.resetFunnelUI();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }, 350);
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    console.error("Lead submission error:", error);
    window.hideLoader();

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }

    alert(`Impossible d'envoyer votre demande pour le moment. Vous pouvez réessayer dans quelques instants ou écrire à ${siteConfig().contactEmail}.`);
  }
};

//
// 🎬 ANIMATION SYSTEM
//
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

window.initAnimations = () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
  });
};

//
// 🔥 NAVBAR EFFECT
//
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (!nav) return;

  nav.classList.toggle("scrolled", window.scrollY > 10);
});

//
// ⏳ LOADER
//
window.showLoader = (message = "") => {
  const loader = document.getElementById("loader");
  const text = document.getElementById("loader-text");
  const bar = document.getElementById("progress-bar");

  if (bar) bar.style.width = "0%";

  if (text) {
    text.style.transition = "none";
    text.style.opacity = "1";
    text.innerText = message;
  }
  loader?.classList.remove("hidden");
  loader?.setAttribute("aria-hidden", "false");
};

window.updateLoaderText = (message) => {
  const text = document.getElementById("loader-text");
  if (!text) return;

  text.style.transition = "opacity 0.3s ease";
  text.style.opacity = "0";

  setTimeout(() => {
    text.innerText = message;
    text.style.opacity = "1";
  }, 300);
};

window.updateProgressBar = (percent) => {
  const bar = document.getElementById("progress-bar");
  if (bar) bar.style.width = `${percent}%`;
};

window.hideLoader = () => {
  const loader = document.getElementById("loader");
  loader?.classList.add("hidden");
  loader?.setAttribute("aria-hidden", "true");
};

//
// ✅ SUCCESS MODAL
//
window.showSuccessModal = () => {
  const modal = document.getElementById("success-modal");
  const sectorEl = document.getElementById("summary-sector");
  const needEl = document.getElementById("summary-need");
  const currentLead = window.lastLeadSubmission || window.funnel;

  if (sectorEl) {
    sectorEl.innerText = sectorLabels[currentLead.sector] || "Non spécifié";
  }
  if (needEl) {
    needEl.innerText = needLabels[currentLead.need] || "Non spécifié";
  }

  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    modal.setAttribute("aria-hidden", "false");
    modal.querySelector(".modal-actions .cta")?.focus();
  }
};

window.hideSuccessModal = () => {
  const modal = document.getElementById("success-modal");
  modal?.classList.remove("visible");
  modal?.classList.add("hidden");
  modal?.setAttribute("aria-hidden", "true");
};

//
// 📄 PDF DOWNLOAD
//
window.downloadSummaryPDF = () => {
  // Check if jsPDF is loaded
  if (typeof window.jspdf === 'undefined' || typeof window.jspdf.jsPDF === 'undefined') {
    console.error("jsPDF library not loaded. Please include it in your index.html.");
    alert("Impossible de générer le PDF. La bibliothèque de PDF n'est pas chargée.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const config = siteConfig();
  const pdfConfig = config.pdf;

  const currentLead = window.lastLeadSubmission || window.funnel;
  const sectorText = sectorLabels[currentLead.sector] || "Non spécifié";
  const needText = needLabels[currentLead.need] || "Non spécifié";
  const submissionDate = currentLead.timestamp
    ? new Date(currentLead.timestamp).toLocaleString("fr-FR")
    : new Date().toLocaleString("fr-FR");
  const messageLines = doc.splitTextToSize(
    currentLead.message || "Aucun contexte complémentaire fourni.",
    180
  );

  doc.setFontSize(18);
  doc.text(pdfConfig.title, 14, 22);
  doc.setFontSize(12);
  doc.text(pdfConfig.subtitle, 14, 32);
  doc.setFontSize(14);
  doc.text("Informations transmises", 14, 45);
  doc.setFontSize(12);
  doc.text(`Nom : ${currentLead.name || "Non spécifié"}`, 14, 55);
  doc.text(`Email : ${currentLead.email || "Non spécifié"}`, 14, 63);
  doc.text(`Organisation : ${currentLead.company || "Non spécifiée"}`, 14, 71);
  doc.text(`Secteur : ${sectorText}`, 14, 79);
  doc.text(`Axe prioritaire : ${needText}`, 14, 87);
  doc.text(`Date d'envoi : ${submissionDate}`, 14, 95);
  doc.text("Contexte communiqué :", 14, 107);
  doc.text(messageLines, 14, 115);

  const nextBlockY = 125 + (messageLines.length * 6);
  doc.setFontSize(14);
  doc.text(pdfConfig.nextStepsTitle, 14, nextBlockY);
  doc.setFontSize(12);

  pdfConfig.nextSteps.forEach((step, index) => {
    doc.text(`- ${step}`, 14, nextBlockY + 10 + (index * 8));
  });

  doc.save(pdfConfig.filename);
};

//
// 🧠 CASE FILTER (REFINED + SAFE)
//
window.filterCases = (category) => {

  const cases = document.querySelectorAll(".case-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove("active"));

  // activate current buttons safely (handles multiple filter bars)
  buttons.forEach(btn => {
    if (btn.dataset.filter === category) {
      btn.classList.add("active");
    }
  });

  if (category === "all") {
    cases.forEach(c => c.style.display = "block");
    return;
  }

  cases.forEach(caseCard => {
    caseCard.style.display =
      caseCard.dataset.section === category ? "block" : "none";
  });
};

//
// 🧭 PEDAGOGY FILTER
//
window.filterPedagogy = (section) => {
  const panels = document.querySelectorAll(".pedagogy-panel");
  const buttons = document.querySelectorAll(".pedagogy-filter-btn");

  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === section);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.section === section);
  });
};
