const solutionSteps = [
  {
    title: "1. Audit & Diagnostic de Performance",
    text: "Nous identifions les points de friction communicationnels et les situations critiques pour cartographier les besoins réels de vos flux opérationnels.",
    image: "/assets/img/methode/analyse.png",
    alt: "Analyse de besoins"
  },
  {
    title: "2. Architecture du Dispositif",
    text: "Conception d'un écosystème d'apprentissage sur-mesure, aligné sur vos objectifs stratégiques et l'ingénierie neuro-cognitive.",
    image: "/assets/img/methode/conception.png",
    alt: "Conception pedagogique"
  },
  {
    title: "3. Déploiement & Intégration Flux",
    text: "Mise en œuvre de parcours actifs directement intégrés aux workflows des collaborateurs pour une mobilisation immédiate des compétences.",
    image: "/assets/img/methode/mise-en-oeuvre.png",
    alt: "Mise en oeuvre sur le terrain"
  },
  {
    title: "4. Mesure d'Impact & ROI",
    text: "Analyse data-driven de la montée en compétences : autonomie, fluidité des échanges et impact direct sur la performance métier.",
    image: "/assets/img/methode/evaluation.png",
    alt: "Evaluation de l'impact"
  }
];

const caseSteps = [
  {
    title: "1. Diagnostic Situationnel",
    text: "Identification des variables contextuelles et des indicateurs de performance (KPIs) qui nécessitaient une intervention structurelle."
  },
  {
    title: "2. Ingénierie de Solution",
    text: "Modélisation du dispositif pédagogique et sélection des leviers cognitifs activés pour répondre au challenge organisationnel."
  },
  {
    title: "3. Dynamique de Transfert",
    text: "Observation de l'appropriation des outils par les équipes et analyse de la transformation des usages en situation réelle."
  },
  {
    title: "4. Validation de la Performance",
    text: "Évaluation finale basée sur des preuves tangibles de transformation et de pérennisation des acquis au sein de l'organisation."
  }
];

const solutionPrinciples = [
  {
    title: "Engagement Cognitif Actif",
    text: "Nous privilégions l'action et la prise de décision pour transformer l'acquisition de connaissances en compétences immédiatement exploitables."
  },
  {
    title: "Régulation Métacognitive",
    text: "Accompagnement des collaborateurs dans la compréhension de leurs propres mécanismes d'apprentissage pour optimiser leur progression."
  },
  {
    title: "Ingénierie Neuro-Cognitive",
    text: "Nos architectures s'appuient sur les sciences de l'apprentissage pour maximiser la rétention d'information et l'ancrage mémoriel à long terme."
  },
  {
    title: "Écologie de l'Apprentissage",
    text: "Immersion totale dans des situations professionnelles authentiques pour garantir un transfert fluide entre la formation et le terrain."
  },
  {
    title: "Pilotage par la Performance",
    text: "Chaque dispositif est orienté vers des résultats tangibles : réduction des erreurs de communication et accélération de l'exécution."
  }
];

const casePrinciples = [
  {
    title: "Analyse Systémique",
    text: "Chaque étude de cas est traitée comme un écosystème unique, intégrant contraintes opérationnelles, culture d'entreprise et objectifs business."
  },
  {
    title: "Métriques de Transformation",
    text: "Évaluation rigoureuse de l'évolution des comportements professionnels et de l'optimisation des flux d'interaction."
  },
  {
    title: "Corrélation Cognition-Métier",
    text: "Démonstration scientifique du lien entre les choix d'ingénierie pédagogique et l'amélioration de l'efficience opérationnelle."
  },
  {
    title: "Analytics de l'Impact",
    text: "Traduction des résultats pédagogiques en données exploitables pour le management (ROI, rétention, qualité de production)."
  },
  {
    title: "Capitalisation Stratégique",
    text: "Extraction de leviers d'amélioration continue et de bonnes pratiques réutilisables pour renforcer la culture apprenante de l'organisation."
  }
];

function renderSteps(steps) {
  return `
    <div class="grid-2x2 pedagogy-steps-grid">
      ${steps.map((step) => `
        <div class="card hover-card pedagogy-step-card fade-in">
          ${step.image ? `
            <div class="pedagogy-step-media">
              <img src="${step.image}" alt="${step.alt || step.title}" loading="lazy">
            </div>
          ` : ""}
          <div class="pedagogy-step-content">
            <h3>${step.title}</h3>
            <p>${step.text}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderPrinciples(principles) {
  return `
    <div class="grid-2x2 pedagogy-principles-grid">
      ${principles.map((principle) => `
        <div class="card hover-card pedagogy-principle-card fade-in">
          <h3>${principle.title}</h3>
          <p>${principle.text}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderPedagogySwitch() {
  return `
    <div class="section center filter-bar pedagogy-filter-bar pedagogy-filter-bar-bottom">

      <button class="filter-btn pedagogy-filter-btn active" data-filter="solutions" onclick="filterPedagogy('solutions')">
        Solutions
      </button>

      <button class="filter-btn pedagogy-filter-btn" data-filter="cases" onclick="filterPedagogy('cases')">
        Études de cas
      </button>

    </div>
  `;
}

export default function pedagogie() {
  return `
    <section class="pedagogy-page">

      <div class="section hero-dark center">

        <h1>Ingénierie & Sciences de l'Apprentissage</h1>

        <p class="subtitle">
          Une expertise en conception de dispositifs fondée sur la psychologie cognitive, 
          l'ingénierie systémique et la mesure d'impact opérationnel.
        </p>

        <p class="tags">
          Ingénierie Pédagogique • Neurosciences • Performance Data-Driven
        </p>

      </div>

      <div class="section center filter-bar pedagogy-filter-bar">

        <button class="filter-btn pedagogy-filter-btn active" data-filter="solutions" onclick="filterPedagogy('solutions')">
          Solutions
        </button>

        <button class="filter-btn pedagogy-filter-btn" data-filter="cases" onclick="filterPedagogy('cases')">
          Études de cas
        </button>

      </div>

      <div class="pedagogy-panel active" data-section="solutions">

        <div class="section center pedagogy-intro">
          <h2>Comment nous concevons un dispositif d'apprentissage</h2>
          <p class="subtitle">
            Nous concevons des solutions pedagogiques comme des systemes utiles,
            activables et directement relies aux usages reels des apprenants.
          </p>
        </div>

        <div class="section center">
          <h2>Notre méthode en 4 étapes</h2>
          <p class="subtitle">
            Une feuille de route simple pour passer du besoin reel a un dispositif
            pedagogique qui produit des effets visibles.
          </p>
          ${renderSteps(solutionSteps)}
        </div>

        <div class="section center">
          <h2>Nos fondements pédagogiques</h2>
          <p class="subtitle">
            Notre conception s'appuie sur des principes issus des sciences de
            l'apprentissage et de l'observation fine des contextes humains.
          </p>
          ${renderPrinciples(solutionPrinciples)}
        </div>

        ${renderPedagogySwitch()}

      </div>

      <div class="pedagogy-panel" data-section="cases">

        <div class="section center pedagogy-intro">
          <h2>Comment nous lisons une transformation sur le terrain</h2>
          <p class="subtitle">
            Nos etudes de cas ne sont pas de simples recits de projet:
            elles montrent comment une progression devient lisible, transferable et interpretable.
          </p>
        </div>

        <div class="section center">
          <h2>Notre méthode en 4 étapes</h2>
          <p class="subtitle">
            Une grille d'analyse qui permet de comprendre le contexte, le dispositif,
            la mise en oeuvre et la nature des effets observes.
          </p>
          ${renderSteps(caseSteps)}
        </div>

        <div class="section center">
          <h2>Nos repères d'analyse</h2>
          <p class="subtitle">
            Nous analysons les cas avec une lecture exigeante de l'apprentissage,
            de la cognition et de la transformation en situation.
          </p>
          ${renderPrinciples(casePrinciples)}
        </div>

        ${renderPedagogySwitch()}

      </div>

      <div class="section center conversion-block fade-in">

        <h2>Discutons de votre contexte</h2>

        <p>
          Nous pouvons analyser votre besoin, clarifier votre dispositif et identifier
          la bonne logique pedagogique pour votre situation.
        </p>

        <button class="cta primary" onclick="navigate('/contact')">
          Prendre contact
        </button>

      </div>

      <footer class="footer fade-in">

        <p>© DIGLY — Learning that works.</p>
        <p>since 2025</p>

        <div class="footer-links">
          <a href="/mentions-legales.html">Conditions légales</a>
          <a href="/politique-confidentialite.html">Politique de confidentialité</a>
        </div>

      </footer>

    </section>
  `;
}
