import { getContent } from "/core/data.js";

export default async function cases() {

  let data = null;
  try {
    data = await getContent();
  } catch (err) {
    console.error("Error loading content:", err);
    data = { cases: [] };
  }

  const cases = data?.cases || [];

  const categories = [
    {
      key: "enterprise",
      title: "Entreprises internationales",
      badge: "Entreprise"
    },
    {
      key: "university",
      title: "Universités & enseignement supérieur",
      badge: "Université"
    },
    {
      key: "training",
      title: "Centres de formation",
      badge: "Formation"
    },
    {
      key: "association",
      title: "Associations & organisations",
      badge: "Association"
    }
  ];

  const caseImages = {
    enterprise: {
      src: "/assets/img/cases/entreprise.png",
      alt: "Cas d'entreprise internationale"
    },
    university: {
      src: "/assets/img/cases/university.png",
      alt: "Cas d'enseignement superieur"
    },
    training: {
      src: "/assets/img/cases/centre-formation.png",
      alt: "Cas de centre de formation"
    },
    association: {
      src: "/assets/img/cases/asso.png",
      alt: "Cas d'association"
    }
  };

  const renderAllCases = () => {

    if (!cases || cases.length === 0) {
      return `
        <div class="empty-state">
          <p>Nos premières études de cas arrivent bientôt.</p>
        </div>
      `;
    }

    return cases.map(c => {
      const category = categories.find(cat => cat.key === c.category);
      const badge = category ? category.badge : "Cas";
      const image = caseImages[c.category];

      return `
        <div class="card hover-card case-card"
             data-section="${c.category}"
             onclick="navigate('/cases/${c.id}')">

          ${image ? `
            <div class="card-media">
              <img src="${image.src}" alt="${image.alt}" loading="lazy">
            </div>
          ` : ""}

          <div class="card-body">
          <span class="badge">${badge}</span>

          <h3>${c.title || "Cas sans titre"}</h3>

          <p>${c.context || ""}</p>

          <span class="card-cta">Voir le cas →</span>
          </div>

        </div>
      `;
    }).join("");
  };

  return `
    <section class="cases-page">

      <!-- 🔵 HERO -->
      <div class="section hero-dark center">

        <h1>Études de cas — Performance réelle en contexte professionnel</h1>

        <p class="subtitle">
          Découvrez comment des organisations ont transformé leur communication
          en impact mesurable grâce à des systèmes de formation DIGLY.
        </p>

        <p class="tags">
          Cas réels • Résultats mesurés • Impact organisationnel
        </p>

      </div>

      <!-- 🧠 INTRO -->
      <div class="section center">

        <h2>Tous nos cas d'étude</h2>

        <p class="subtitle">
          Découvrez des projets concrets dans différents contextes organisationnels.
        </p>

      </div>

      <!-- 🧠 FILTER BAR -->
      <div class="section center filter-bar">

        <button class="filter-btn active" data-filter="all" onclick="filterCases('all')">
          Tous
        </button>

        ${categories.map(c => `
          <button class="filter-btn" data-filter="${c.key}" onclick="filterCases('${c.key}')">
            ${c.title}
          </button>
        `).join("")}

      </div>

      <!-- 📋 CASES GRID 2x2 -->
      <div class="section center">

        <div class="grid-2x2" id="cases-grid">
          ${renderAllCases()}
        </div>

      </div>

      <!-- 🧠 FILTER BAR (BOTTOM) -->
      <div class="section center filter-bar" style="margin-top: -40px; padding-bottom: 60px;">

        <button class="filter-btn active" data-filter="all" onclick="filterCases('all')">
          Tous
        </button>

        ${categories.map(c => `
          <button class="filter-btn" data-filter="${c.key}" onclick="filterCases('${c.key}')">
            ${c.title}
          </button>
        `).join("")}

      </div>

      <!-- 🔥 CTA -->
      <div class="section center conversion-block">

        <h2>Vous souhaitez des résultats similaires ?</h2>

        <p>
          Nous analysons votre contexte et identifions vos leviers de performance.
        </p>

        <button class="cta primary" onclick="navigate('/contact')">
          Analyser mon contexte
        </button>

      </div>

    </section>

    <footer class="footer fade-in">
      <p>© DIGLY — Learning that works.</p>
      <p>since 2025</p>

      <div class="footer-links">
        <a href="/mentions-legales.html">Conditions légales</a>
        <a href="/politique-confidentialite.html">Politique de confidentialité</a>
      </div>
    </footer>
  `;
}
