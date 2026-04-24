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
    <section class="case-page">


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
            <h3>${caseItem.metrics?.m1 || "+32%"}</h3>
            <p>${caseItem.metrics?.m1_label || "de fluidité dans les échanges"}</p>
          </div>

          <div class="metric">
            <h3>${caseItem.metrics?.m2 || "-40%"}</h3>
            <p>${caseItem.metrics?.m2_label || "d'erreurs de compréhension"}</p>
          </div>

          <div class="metric">
            <h3>${caseItem.metrics?.m3 || "2x"}</h3>
            <p>${caseItem.metrics?.m3_label || "de rapidité de décision"}</p>
          </div>

        </div>

      </div>



      <!-- 🧠 CONTEXT -->
      <div class="section center fade-in">

        <h2>Contexte</h2>

        <p class="text-block">
          ${caseItem.context}
        </p>

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
            <div class="card hover-card">
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

          <div class="card hover-card before-card">

            <h3>Avant</h3>

            <ul>
              ${(caseItem.before || [
                "Communication fragmentée",
                "Décisions ralenties",
                "Manque de clarté"
              ]).map(i => `<li>${i}</li>`).join("")}
            </ul>

          </div>

          <div class="card hover-card after-card">

            <h3>Après</h3>

            <ul>
              ${(caseItem.after || [
                "Échanges plus structurés",
                "Exécution plus rapide",
                "Équipes mieux alignées"
              ]).map(i => `<li>${i}</li>`).join("")}
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
