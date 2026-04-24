export default function solutions() {
  const categories = [
    {
      key: "enterprise",
      title: "Entreprises internationales",
      badge: "Entreprise"
    },
    {
      key: "university",
      title: "Universites & enseignement superieur",
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

  const solutions = [
    {
      id: "entreprises",
      category: "enterprise",
      title: "Performance des Organisations Globales",
      context: "Optimisation systémique des flux de communication et intégration de l'anglais opérationnel au cœur des processus métiers.",
      image: "/assets/img/solutions/corporate-learning.png",
      alt: "Equipes en environnement international"
    },
    {
      id: "universites",
      category: "university",
      title: "Ingénierie de l'Internationalisation Académique",
      context: "Développement de dispositifs pédagogiques innovants pour le rayonnement international et l'excellence des parcours d'enseignement supérieur.",
      image: "/assets/img/solutions/higher-education.png",
      alt: "Enseignement superieur et apprentissage academique"
    },
    {
      id: "centres-formation",
      category: "training",
      title: "Architecture & ROI des Centres de Formation",
      context: "Conception de programmes basés sur les sciences de l'apprentissage pour garantir un transfert de compétences immédiat et mesurable.",
      image: "/assets/img/solutions/centre-formation.png",
      alt: "Formation professionnelle pour adultes"
    },
    {
      id: "associations",
      category: "association",
      title: "Agilité Communicationnelle & Impact Systémique",
      context: "Ingénierie de dispositifs adaptatifs pour la coordination multi-acteurs et l'efficacité des interventions en contextes complexes.",
      image: "/assets/img/solutions/association.png",
      alt: "Organisation associative et impact social"
    }
  ];

  const renderAllSolutions = () => {
    return solutions.map((solution) => {
      const category = categories.find((cat) => cat.key === solution.category);
      const badge = category ? category.badge : "Solution";

      return `
        <div class="card hover-card case-card"
             data-section="${solution.category}"
             onclick="navigate('/solutions/${solution.id}')">

          <div class="card-media">
            <img src="${solution.image}" alt="${solution.alt}" loading="lazy">
          </div>

          <div class="card-body">
          <span class="badge">${badge}</span>

          <h3>${solution.title}</h3>

          <p>${solution.context}</p>

          <span class="card-cta">Voir la solution →</span>
          </div>

        </div>
      `;
    }).join("");
  };

  return `
    <section class="solutions-page">

      <!-- HERO -->
      <div class="section hero-dark center">

        <h1>Solutions d'Ingénierie — Architecture & Performance</h1>

        <p class="subtitle">
          Nous concevons des écosystèmes d'apprentissage robustes, adaptés aux exigences 
          stratégiques des organisations modernes. Expertise, diagnostic et mesure d'impact.
        </p>

        <p class="tags">
          Audit Stratégique • Architecture Apprenante • Impact Systémique
        </p>

      </div>

      <!-- INTRO -->
      <div class="section center">

        <h2>Toutes nos solutions</h2>

        <p class="subtitle">
          Une approche d'ingénierie spécifique pour chaque typologie d'organisation, 
          centrée sur la résolution des points de friction.
        </p>

      </div>

      <!-- FILTER BAR -->
      <div class="section center filter-bar">

        <button class="filter-btn active" data-filter="all" onclick="filterCases('all')">
          Tous
        </button>

        ${categories.map((category) => `
          <button class="filter-btn" data-filter="${category.key}" onclick="filterCases('${category.key}')">
            ${category.title}
          </button>
        `).join("")}

      </div>

      <!-- GRID -->
      <div class="section center">

        <div class="grid-2x2" id="solutions-grid">
          ${renderAllSolutions()}
        </div>

      </div>

      <!-- FILTER BAR (BOTTOM) -->
      <div class="section center filter-bar" style="margin-top: -40px; padding-bottom: 60px;">

        <button class="filter-btn active" data-filter="all" onclick="filterCases('all')">
          Tous
        </button>

        ${categories.map((category) => `
          <button class="filter-btn" data-filter="${category.key}" onclick="filterCases('${category.key}')">
            ${category.title}
          </button>
        `).join("")}

      </div>

      <!-- CTA -->
      <div class="section center conversion-block">

        <h2>Vous voulez identifier la bonne solution pour votre contexte ?</h2>

        <p>
          Nous analysons votre situation et vous orientons vers le dispositif le plus pertinent.
        </p>

        <button class="cta primary" onclick="navigate('/contact')">
          Analyser mon contexte
        </button>

      </div>

    </section>
  `;
}
