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
      id: "business-english",
      category: "enterprise",
      isProduct: true,
      title: "Business English for Real Workplace Interaction",
      context: "Stop avoiding English at work. Speak with confidence in real professional situations.",
      results: ["Speak in meetings without freezing", "Handle misunderstandings naturally", "Contribute under pressure"],
      format: "Small groups (max. 10)<br>On-site • Remote • Hybrid",
      duration: "1 session = 6h • Flexible (1 to 4)",
      price: "À partir de 1100€ / session",
      pills: ["Entreprise", "Business English", "Communication"],
      image: "/assets/img/solutions/corporate-learning.png",
      alt: "Formation Business English DIGLY"
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

      if (solution.isProduct) {
        return `
          <div class="card hover-card case-card product-card"
               data-section="${solution.category}"
               onclick="navigate('/solutions/${solution.id}')"
               style="display: flex; flex-direction: column; text-align: left; border-top: 4px solid #6b21a8; padding: 0; overflow: hidden;">
            
            <div class="card-media" style="aspect-ratio: 16/10;">
              <img src="${solution.image}" alt="${solution.alt}" loading="lazy">
            </div>

            <div class="card-body" style="gap: 12px; flex-grow: 1;">
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                ${solution.pills.map(tag => `<span class="badge" style="margin: 0; font-size: 11px; padding: 2px 8px; background: rgba(107, 33, 168, 0.05); color: #6b21a8; border-color: rgba(107, 33, 168, 0.2);">${tag}</span>`).join('')}
              </div>

              <h3 style="color: #0f172a; font-size: 1.45rem; margin: 4px 0;">${solution.title}</h3>
              <p style="font-weight: 400; font-size: 1rem; color: #475569; line-height: 1.5;">${solution.context}</p>

              <div style="font-size: 0.85rem; border-top: 1px solid #f1f5f9; padding-top: 12px; display: grid; gap: 12px; margin-top: auto;">
                <div>
                  <strong style="display: block; margin-bottom: 6px; color: #0f172a; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.03em;">🎯 Resultado clave</strong>
                  <ul style="padding-left: 18px; margin: 0; list-style: none;">
                    ${solution.results.map(r => `<li style="position: relative; margin-bottom: 4px; color: #334155; font-size: 0.9rem;"><span style="position: absolute; left: -14px; color: #22c55e; font-weight: bold;">✓</span>${r}</li>`).join('')}
                  </ul>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 10px 0; border-top: 1px dashed #eee;">
                  <div><strong style="font-size: 0.7rem; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 2px;">👥 Format</strong><p style="margin: 0; font-size: 0.85rem; line-height: 1.3; color: #1e293b; font-weight: 500;">${solution.format}</p></div>
                  <div><strong style="font-size: 0.7rem; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 2px;">⏱️ Duration</strong><p style="margin: 0; font-size: 0.85rem; line-height: 1.3; color: #1e293b; font-weight: 500;">${solution.duration}</p></div>
                </div>

                <div style="background: #f1f5f9; padding: 12px 16px; border-radius: 12px; border: 1px solid #e2e8f0;">
                  <strong style="font-size: 0.7rem; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 2px;">💰 Pricing</strong>
                  <span style="font-size: 1.1rem; font-weight: 700; color: #0f172a;">${solution.price}</span>
                </div>
              </div>

              <span class="card-cta product-cta" style="margin-top: 12px; color: #2563eb; display: flex; align-items: center; gap: 6px;">
                View program details <span style="transition: transform 0.2s ease;">→</span>
              </span>
            </div>
          </div>
        `;
      }

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
