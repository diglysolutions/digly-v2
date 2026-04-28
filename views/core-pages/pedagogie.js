const solutionSteps = [
  {
    title: "1. Audit & Diagnostic de Performance",
    text: "Nous analysons vos flux de travail, vos interactions clés et vos points de friction afin d’identifier les situations critiques où la compétence fait défaut.",
    detail: "Objectif : comprendre ce qui bloque réellement la performance — au-delà des besoins exprimés.",
    image: "/assets/img/methode/analyse.png",
    alt: "Analyse de besoins"
  },
  {
    title: "2. Architecture du Dispositif",
    text: "Nous concevons un écosystème d’apprentissage sur mesure, structuré autour des piliers opérationnels :",
    list: [
      "Situations professionnelles réelles",
      "Mécanismes cognitifs d’apprentissage",
      "Objectifs opérationnels"
    ],
    image: "/assets/img/methode/conception.png",
    alt: "Conception pedagogique"
  },
  {
    title: "3. Déploiement & Intégration Flux",
    text: "Nous intégrons les parcours directement dans les pratiques de travail pour que l’apprentissage devienne une extension du métier :",
    list: [
      "Mises en situation",
      "Micro-apprentissages activables",
      "Scénarios contextualisés"
    ],
    image: "/assets/img/methode/mise-en-oeuvre.png",
    alt: "Mise en oeuvre sur le terrain"
  },
  {
    title: "4. Mesure d'Impact & ROI",
    text: "Nous évaluons l’efficacité du dispositif à partir d’indicateurs concrets et pilotés par la donnée :",
    list: [
      "Autonomie des collaborateurs",
      "Fluidité des interactions",
      "Réduction des erreurs",
      "Amélioration des performances métier"
    ],
    image: "/assets/img/methode/evaluation.png",
    alt: "Evaluation de l'impact"
  }
];

// Mantener caseSteps por coherencia del sistema, 
// aunque el usuario se enfocó en Solutions para esta iteración.
const caseSteps = [
  {
    title: "1. Diagnostic situationnel",
    text: "Analyse du contexte initial :",
    list: [
      "variables organisationnelles",
      "contraintes opérationnelles",
      "indicateurs de performance (KPIs)"
    ],
    detail: "Objectif : comprendre ce qui nécessite réellement une transformation.",
    image: "/assets/img/notre-pedagogie/etudes-cas/diagnostic-situationnel.png",
    alt: "Diagnostic situationnel"
  },
  {
    title: "2. Ingénierie de solution",
    text: "Modélisation du dispositif pédagogique :",
    list: [
      "choix des leviers cognitifs",
      "structuration des situations d’apprentissage",
      "alignement avec les enjeux métier"
    ],
    detail: "Objectif : relier conception pédagogique et performance opérationnelle.",
    image: "/assets/img/notre-pedagogie/etudes-cas/ingenierie-solution.png",
    alt: "Ingénierie de solution"
  },
  {
    title: "3. Dynamique de transfert",
    text: "Observation de l’usage réel sur le terrain :",
    list: [
      "appropriation des outils",
      "transformation des pratiques",
      "adaptation en situation"
    ],
    detail: "Objectif : analyser comment la compétence devient action.",
    image: "/assets/img/notre-pedagogie/etudes-cas/dynamique-transfert.png",
    alt: "Dynamique de transfert"
  },
  {
    title: "4. Validation de la performance",
    text: "Évaluation des effets du dispositif :",
    list: [
      "évolution des comportements",
      "amélioration des flux",
      "stabilisation des acquis"
    ],
    detail: "Objectif : mesurer une transformation réelle et durable.",
    image: "/assets/img/notre-pedagogie/etudes-cas/validation-performance.png",
    alt: "Validation de la performance"
  }
];

const solutionPrinciples = [
  {
    title: "Engagement Cognitif Actif",
    text: "Nous privilégions l’action, la résolution de problèmes et la prise de décision pour transformer les connaissances en compétences mobilisables immédiatement.",
    image: "/assets/img/notre-pedagogie/solutions/engagement-cognitif-actif.png"
  },
  {
    title: "Régulation Métacognitive",
    text: "Nous aidons les apprenants à comprendre comment ils apprennent, afin d’améliorer leur autonomie et leur capacité d’adaptation.",
    image: "/assets/img/notre-pedagogie/solutions/regulation-metacognitive.png"
  },
  {
    title: "Ingénierie Neuro-Cognitive",
    text: "Nos dispositifs sont conçus pour optimiser la rétention, l’ancrage mémoriel et le transfert des acquis à long terme.",
    image: "/assets/img/notre-pedagogie/solutions/ingenierie-neurocognitive.png"
  },
  {
    title: "Écologie de l'Apprentissage",
    text: "Les apprentissages sont immergés dans des contextes professionnels authentiques pour garantir leur utilisation réelle sur le terrain.",
    image: "/assets/img/notre-pedagogie/solutions/ecologie-apprentissage.png"
  },
  {
    title: "Pilotage par la Performance",
    text: "Chaque dispositif est orienté vers des résultats tangibles : réduction des erreurs de communication et accélération de l'exécution.",
    image: "/assets/img/notre-pedagogie/solutions/pilotage-performance.png"
  }
];

const casePrinciples = [
  {
    title: "Analyse systémique",
    text: "Chaque situation est considérée comme un écosystème intégrant contraintes, interactions et objectifs.",
    image: "/assets/img/notre-pedagogie/etudes-cas/analyse-systemique.png"
  },
  {
    title: "Métriques de transformation",
    text: "Nous observons l’évolution des pratiques à travers des indicateurs concrets et comparables.",
    image: "/assets/img/notre-pedagogie/etudes-cas/metriques-transformation.png"
  },
  {
    title: "Corrélation cognition–métier",
    text: "Nous analysons le lien entre les choix pédagogiques et leurs effets sur la performance opérationnelle.",
    image: "/assets/img/notre-pedagogie/etudes-cas/correlation-cognition-metier.png"
  },
  {
    title: "Analytics de l’impact",
    text: "Les résultats sont traduits en données exploitables pour le pilotage et la prise de décision.",
    image: "/assets/img/notre-pedagogie/etudes-cas/analytics-impact.png"
  },
  {
    title: "Capitalisation stratégique",
    text: "Chaque cas permet d’identifier des leviers réutilisables et d’alimenter une logique d’amélioration continue.",
    image: "/assets/img/notre-pedagogie/etudes-cas/capitalisation-strategique.png"
  }
];

function renderSteps(steps) {
  return `
    <div class="grid-2x2 pedagogy-steps-grid">
      ${steps.map((step) => `
        <div class="card hover-card pedagogy-step-card fade-in" style="display: flex; flex-direction: column; padding: 0; overflow: hidden; text-align: left;">
          ${step.image ? `
            <div class="pedagogy-step-media" style="width: 100%; aspect-ratio: 16/10; overflow: hidden;">
              <img src="${step.image}" alt="${step.alt || step.title}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
            </div>
          ` : ""}
          <div class="pedagogy-step-content" style="padding: 24px;">
            <h3 style="margin-top: 0;">${step.title}</h3>
            <p>${step.text}</p>
            ${step.detail ? `<p class="step-objective" style="margin-top: 12px; font-weight: 600; font-size: 0.9em; color: #000000;">${step.detail}</p>` : ""}
            ${step.list ? `
              <ul style="margin-top: 12px; padding-left: 18px; font-size: 0.9em; opacity: 0.9;">
                ${step.list.map(item => `<li style="margin-bottom: 4px;">${item}</li>`).join("")}
              </ul>` : ""}
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
        <div class="card hover-card pedagogy-principle-card fade-in" style="display: flex; flex-direction: column; padding: 0; overflow: hidden; text-align: left;">
          ${principle.image ? `
            <div class="principle-media" style="width: 100%; aspect-ratio: 16/10; overflow: hidden;">
              <img src="${principle.image}" alt="${principle.title}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
            </div>
          ` : ""}
          <div class="principle-content" style="padding: 24px;">
            <h3 style="margin-top: 0; font-size: 1.25rem;">${principle.title}</h3>
            <p style="margin-bottom: 0; font-size: 0.95rem; line-height: 1.5; color: #475569;">${principle.text}</p>
          </div>
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

        <h1>Ingénierie & Sciences de l’Apprentissage</h1>

        <p class="subtitle">
          Une expertise en conception de dispositifs pédagogiques fondée sur les sciences cognitives, 
          l’ingénierie systémique et l’analyse de la performance terrain.
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
            Nous concevons des dispositifs pédagogiques comme des systèmes opérationnels, 
            pensés pour être utilisés dans l’action — et non comme des contenus à consommer.
          </p>
        </div>

        <div class="section center">
          <h2>Notre méthode en 4 étapes</h2>
          <p class="subtitle">
            Une feuille de route simple pour passer du besoin reel a un dispositif
            pédagogique concret, activable et orienté résultats.
          </p>
          ${renderSteps(solutionSteps)}
        </div>

        <div class="section center">
          <h2>Nos fondements pédagogiques</h2>
          <p class="subtitle">
            Notre approche s’appuie sur les sciences de l’apprentissage et l’observation des dynamiques réelles de travail.
          </p>
          ${renderPrinciples(solutionPrinciples)}
        </div>

        ${renderPedagogySwitch()}

      </div>

      <div class="pedagogy-panel" data-section="cases">

        <div class="section center pedagogy-intro">
          <h2>Études de cas</h2>
          <p class="subtitle" style="font-weight: 600; font-size: 1.4rem; color: #0f172a; margin-bottom: 20px;">
            Une lecture structurée de la transformation sur le terrain.
          </p>
          <p style="max-width: 800px; margin: 0 auto 40px; font-size: 1.1rem; opacity: 0.9;">
            Nous ne présentons pas uniquement des résultats : nous analysons comment une transformation se produit, se stabilise et devient mesurable dans un contexto réel.
          </p>

          <hr style="width: 50px; border: 1px solid #2563eb; margin: 40px auto; opacity: 0.3;">

          <h2 style="margin-top: 40px;">Comment nous analysons une transformation</h2>
          <p class="subtitle">
            Chaque étude de cas est construite comme une grille de lecture. 
            L’objectif n’est pas seulement de montrer un résultat, mais de rendre visible :
          </p>
          <ul style="list-style: none; padding: 0; display: inline-block; text-align: left; margin-top: 10px;">
            <li style="margin-bottom: 8px;">🔹 les mécanismes de transformation</li>
            <li style="margin-bottom: 8px;">🔹 les conditions d’appropriation</li>
            <li>🔹 la nature des effets observés</li>
          </ul>
        </div>

        <div class="section center">
          <h2>Notre grille d’analyse en 4 dimensions</h2>
          <p class="subtitle">
            Une structure claire pour comprendre un dispositif, sa mise en œuvre et ses effets réels sur le terrain.
          </p>
          ${renderSteps(caseSteps)}
        </div>

        <div class="section center">
          <h2>Nos repères d’analyse</h2>
          <p class="subtitle">
            Nous mobilisons plusieurs niveaux de lecture pour interpréter chaque transformation :
          </p>
          ${renderPrinciples(casePrinciples)}
        </div>

        ${renderPedagogySwitch()}

      </div>

      <div class="section center conversion-block fade-in">

        <h2>Discutons de votre contexte </h2>

        <p>
          Chaque organisation a ses propres contraintes, ses propres flux et ses propres enjeux.
        </p>

        <button class="cta primary" onclick="navigate('/contact')" style="min-width: 280px;">
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
