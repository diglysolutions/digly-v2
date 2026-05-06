import { getContent } from "../../core/data.js";

export default async function casePage(id) {
  const data = await getContent();

  // 🧠 CASES SOURCE UNIQUE (future-proof system)
  const allCases = data.cases || [];

  const caseItem = allCases.find(c => c.id === id);

  if (!caseItem) {
    return `
      <section class="section center">

        <h1>Étude de cas introuvable</h1>

        <p class="subtitle">
          Le cas demandé n'existe pas ou a été déplacé.
        </p>

        <button class="cta primary" onclick="navigate('/cases')">
          Retour aux cas
        </button>

      </section>
    `;
  }

  const categoryLabels = {
    enterprise: "Entreprise",
    university: "Université",
    training: "Centre de formation",
    association: "Association"
  };

  return `
    <section class="case-page" style="font-size: 1.15rem; line-height: 1.6; color: #1e293b;">
      <style>
        .case-page h1 { font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem; }
        .case-page h2 { font-size: 2.25rem; margin-bottom: 2rem; color: #0f172a; font-weight: 700; }
        .case-page .subtitle { font-size: 1.5rem !important; max-width: 900px; margin: 0 auto 2rem; opacity: 0.9; line-height: 1.4; }
        
        .case-page .text-block { font-size: 1.3rem; max-width: 100%; margin: 0; color: #475569; }
        
        .highlight-card { background: #f8fafc; border-left: 5px solid #2563eb; padding: 40px !important; border-radius: 0 16px 16px 0; }
        .highlight-card p { font-size: 1.4rem; font-weight: 500; color: #1e293b; margin: 0; }

        .approach-card { padding: 32px !important; text-align: left; border-top: 4px solid #2563eb; height: 100%; }
        .approach-card h3 { font-size: 1.4rem; margin-bottom: 12px; color: #0f172a; }
        .approach-card p { font-size: 1.1rem; color: #475569; margin: 0; }

        .transformation-card { padding: 32px !important; text-align: left; border-radius: 20px; border: 1px solid rgba(0,0,0,0.05); }
        .before-card { background: #fffafa; border-bottom: 4px solid #ef4444; }
        .after-card { background: #f0fdf4; border-bottom: 4px solid #22c55e; }
        .transformation-card h3 { font-size: 1.25rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px; font-weight: 800; }
        .transformation-card ul li { margin-bottom: 12px; position: relative; padding-left: 5px; }
        .before-card h3 { color: #ef4444; }
        .after-card h3 { color: #16a34a; }

        .result-card { background: white; padding: 60px 40px !important; border-radius: 24px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
        .result-card .highlight { font-size: 1.75rem; font-weight: 700; color: #0f172a; line-height: 1.3; }

        .insight-box { background: #0f172a; color: white; padding: 60px 40px; border-radius: 32px; text-align: center; }
        .insight-box h3 { color: #3b82f6; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 20px; }
        .insight-box p { font-size: 1.8rem; font-weight: 600; line-height: 1.4; margin: 0; }

        .context-card { background: white; padding: 60px !important; border-radius: 32px; box-shadow: 0 20px 40px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.02); max-width: 1000px; margin: 0 auto; transition: all 0.3s ease; text-align: left; }
        .context-card:hover { transform: translateY(-5px); box-shadow: 0 30px 60px rgba(0,0,0,0.12); }

        @media (max-width: 768px) {
          .case-page h1 { font-size: 2.2rem; }
          .case-page h2 { font-size: 1.8rem; }
          .case-page .subtitle { font-size: 1.2rem !important; }
          .insight-box p { font-size: 1.4rem; }
          .metrics-bar { flex-direction: column; gap: 24px; padding: 30px 20px; }
        }
      </style>

      <!-- 🔵 HERO -->
      <div class="section hero-dark center fade-in">

        <span class="badge">${caseItem.type || categoryLabels[caseItem.category] || "Étude de cas"}</span>

        <h1>${caseItem.title}</h1>

        <p class="subtitle">
          ${caseItem.subtitle || "Transformation de la communication en performance mesurable en contexte réel"}
        </p>

        <!-- 📊 METRICS (DATA-DRIVEN READY) -->
        <div class="metrics-bar">

          <div class="metric">
            <h3 style="font-size: 3.5rem;">${caseItem.metrics?.m1 || "+32%"}</h3>
            <p>${caseItem.metrics?.m1_label || "de fluidité dans les échanges"}</p>
          </div>

          <div class="metric">
            <h3 style="font-size: 3.5rem;">${caseItem.metrics?.m2 || "-40%"}</h3>
            <p>${caseItem.metrics?.m2_label || "d'erreurs de compréhension"}</p>
          </div>

          <div class="metric">
            <h3 style="font-size: 3.5rem;">${caseItem.metrics?.m3 || "2x"}</h3>
            <p>${caseItem.metrics?.m3_label || "de rapidité de décision"}</p>
          </div>

        </div>

      </div>



      <!-- 🧠 CONTEXT -->
      <div class="section center fade-in">
        <div class="context-card">
          ${caseItem.partnerLogo ? `
            <div style="margin-bottom: 3.5rem; display: flex; justify-content: center;">
              <img src="${caseItem.partnerLogo}" alt="Logo ${caseItem.title}" style="max-height: 130px; width: auto; filter: grayscale(1) opacity(0.8); transition: all 0.4s ease;" onmouseover="this.style.filter='none'; this.style.opacity='1'; this.style.transform='scale(1.05)'" onmouseout="this.style.filter='grayscale(1) opacity(0.8)'; this.style.transform='scale(1)'">
            </div>
          ` : ""}

          <h2 style="margin-top: 0; text-align: center;">Contexte</h2>

          <p class="text-block">
            ${caseItem.context}
          </p>
        </div>
      </div>



      <!-- ⚠️ CHALLENGE -->
      <div class="section center fade-in">

        <h2>Enjeu</h2>

        <div class="card highlight-card">

          <p>
            ${caseItem.challenge}
          </p>

        </div>

      </div>



      <!-- ⚙️ APPROACH (DYNAMIC READY) -->
      <div class="section center fade-in">

        <h2>Approche</h2>

        <div class="grid-3">

          ${(caseItem.approach || [
            { title: "Analyse", text: "Identification des blocages de communication." },
            { title: "Conception", text: "Construction d’un dispositif adapté au contexte." },
            { title: "Déploiement", text: "Intégration du parcours dans les usages réels." }
          ]).map(step => `
            <div class="card hover-card approach-card">
              <h3>${step.title}</h3>
              <p>${step.text}</p>
            </div>
          `).join("")}

        </div>

      </div>



      <!-- 📊 TRANSFORMATION -->
      <div class="section center fade-in">

        <h2>Transformation</h2>

        <div class="grid-2x2">

          <div class="card transformation-card before-card">
            <h3>Avant</h3>

            <ul>
              ${(caseItem.before || [
                "Communication hésitante",
                "Usage limité de l'anglais",
                "Difficulté à se projeter"
              ]).map(i => `<li>❌ ${i}</li>`).join("")}
            </ul>

          </div>

          <div class="card transformation-card after-card">
            <h3>Après</h3>

            <ul>
              ${(caseItem.after || [
                "Communication fluide et structurée",
                "Réflexes professionnels acquis",
                "Capacité d'action réelle"
              ]).map(i => `<li>✅ ${i}</li>`).join("")}
            </ul>

          </div>

        </div>

      </div>



      <!-- 📈 RESULT -->
      <div class="section center fade-in">

        <h2>Résultat</h2>

        <div class="result-card">

          <p class="highlight">
            ${caseItem.result}
          </p>

        </div>

      </div>



      <!-- 🧠 INSIGHT -->
      <div class="section center fade-in">

        <div class="insight-box">

          <h3>Enseignement clé</h3>

          <p>
            ${caseItem.insight ||
              "La performance s'améliore quand la communication est travaillée comme un système intégré aux usages réels."}
          </p>

        </div>

      </div>



      <!-- 🚀 CTA -->
      <div class="section center conversion-block fade-in">

        <h2>Vous visez des résultats comparables ?</h2>

        <p>
          Nous pouvons analyser votre organisation et repérer les points de friction qui ralentissent la performance.
        </p>

        <button class="cta primary" onclick="navigate('/contact')">
          Demander une analyse
        </button>

      </div>



      <!-- 🔁 NAV -->
      <div class="section center fade-in">

        <button class="cta secondary" onclick="navigate('/cases')">
          ← Retour aux études de cas
        </button>

      </div>


    </section>



    <!-- ⚫ FOOTER -->
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
