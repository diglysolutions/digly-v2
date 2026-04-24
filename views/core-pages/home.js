import { getContent } from "/core/data.js";

export default async function home() {
  const data = await getContent();
  const homeContent = data?.home || {};

  return `
    <!-- 🔵 HERO -->
    <section class="hero-dark">

      <h1>
        ${homeContent.title || "L'ingénierie pédagogique au service de votre performance internationale"}
      </h1>

      <p class="subtitle">
        ${homeContent.subtitle || "Nous concevons des architectures d'apprentissage sur-mesure pour transformer la communication internationale en levier de croissance. Expertise, diagnostic et impact opérationnel."}
      </p>

      <p class="tags">
        Audit Stratégique • Ingénierie de Formation • Performance Opérationnelle
      </p>

      <button class="cta primary" onclick="scrollToContact()">
        ${homeContent.cta || "Discutons de votre contexte"}
      </button>

    </section>


    <!-- ⚪ PROBLÈME -->
    <section class="section center fade-in">

      <h2>Le coût de l'approximation communicationnelle</h2>

      <img src="/assets/img/home/communication-friction.png" class="section-img" />

      <p>
        Au sein des organisations globales, l'écart entre la connaissance théorique de l'anglais et sa 
        maîtrise situationnelle génère des coûts invisibles : délais de décision, erreurs d'exécution 
        et perte de leadership.
      </p>

      <p>
        Notre approche d'ingénierie intervient sur le point critique : transformer le savoir en capacité d'action immédiate dans vos workflows.
      </p>

    </section>


    <!-- 🔄 AVANT / APRÈS -->
    <section class="section center fade-in">

      <h2>Optimisation des flux de travail</h2>

      <div class="cards-2">

        <div class="card hover-card fade-in delay-1">
          <h3>État initial</h3>
          <p>
            Frictions opérationnelles, réunions sous-optimales, 
            rétention d'information et érosion de la crédibilité internationale.
          </p>
        </div>

        <div class="card hover-card fade-in delay-2">
          <h3>Impact DIGLY</h3>
          <p>
            Fluidité stratégique, alignement des équipes internationales 
            et accélération des cycles de décision.
          </p>
        </div>

      </div>

    </section>


    <!-- 🧩 PROGRAMMES -->
    <section class="section center fade-in">

      <h2>Champs d'expertise & Ingénierie</h2>

      <div class="grid-4">

        <div class="card hover-card fade-in delay-1">
          <img src="/assets/img/home/global-english-communication.png" />
          <p>Audit & Diagnostic de performance</p>
        </div>

        <div class="card hover-card fade-in delay-2">
          <img src="/assets/img/home/environnement-international.png" />
          <p>Architecture de dispositifs sur-mesure</p>
        </div>

        <div class="card hover-card fade-in delay-3">
          <img src="/assets/img/home/formation-adultos-reconversion.png" />
          <p>Accompagnement au changement</p>
        </div>

        <div class="card hover-card fade-in delay-3">
          <img src="/assets/img/home/business-meeting.png" />
          <p>Mesure d'impact & ROI pédagogique</p>
        </div>

      </div>

    </section>


    <!-- 📊 CASES CTS CTA -->
    <section class="section center fade-in">

      <h2>L'expérience du terrain</h2>

      <p>Analyse de nos interventions et résultats obtenus par secteur d'activité.</p>

      <div class="actions">

        <button class="cta primary" onclick="navigate('/solutions')">
          Consulter nos solutions
        </button>

        <button class="cta primary" onclick="navigate('/cases')">
          Analyses de cas
        </button>

      </div>

    </section>


    <!-- 📩 CONTACT -->
    <section class="section center fade-in" id="contact-section">

      <h2>Initier un diagnostic</h2>

      <button class="cta primary" onclick="navigate('/contact')">
        Prendre rendez-vous avec nous
      </button>

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
