export default function contact() {
  return `
    <section class="contact-page">

      <!-- 🔵 HERO -->
      <div class="section hero-dark center fade-in">

        <h1>
          Audit Flash : Diagnostic de Performance
        </h1>

        <p class="subtitle">
          Identifiez les points de friction de votre organisation et recevez une première cartographie de vos leviers de performance communicationnelle.
        </p>

      </div>


      <!-- 🧠 STEP 1 — SECTOR -->
      <div class="section center fade-in" id="step1">

        <h2>1. Périmètre d'analyse</h2>

        <p class="subtitle">
          Sélectionnez le secteur d'intervention pour lequel vous souhaitez un diagnostic.
        </p>

        <div class="grid-2x2">

          <div
            class="card hover-card selectable"
            onclick="selectSector('enterprise')"
            onkeydown="handleSelectableKey(event, 'sector', 'enterprise')"
            data-sector="enterprise"
            role="button"
            tabindex="0"
            aria-pressed="false"
          >
            <h3>Entreprise internationale</h3>
            <p>Équipes globales, communication en anglais, performance opérationnelle.</p>
          </div>

          <div
            class="card hover-card selectable"
            onclick="selectSector('education')"
            onkeydown="handleSelectableKey(event, 'sector', 'education')"
            data-sector="education"
            role="button"
            tabindex="0"
            aria-pressed="false"
          >
            <h3>Université / Éducation</h3>
            <p>Formation académique, communication pédagogique, internationalisation.</p>
          </div>

          <div
            class="card hover-card selectable"
            onclick="selectSector('training')"
            onkeydown="handleSelectableKey(event, 'sector', 'training')"
            data-sector="training"
            role="button"
            tabindex="0"
            aria-pressed="false"
          >
            <h3>Centre de formation</h3>
            <p>Programmes professionnels, montée en compétences, formation continue.</p>
          </div>

          <div
            class="card hover-card selectable"
            onclick="selectSector('association')"
            onkeydown="handleSelectableKey(event, 'sector', 'association')"
            data-sector="association"
            role="button"
            tabindex="0"
            aria-pressed="false"
          >
            <h3>Association / Organisation</h3>
            <p>Structures flexibles, projets sociaux, besoins adaptatifs.</p>
          </div>

        </div>

      </div>


      <!-- ⚙️ STEP 2 — NEEDS -->
      <div class="section center fade-in funnel-step" id="step2">

        <h2>2. Axe de diagnostic prioritaire</h2>

        <p class="subtitle">
          Définissez l'indicateur que vous souhaitez optimiser en priorité.
        </p>

        <div class="grid-2x2" id="needs-container" role="group" aria-label="Axes de diagnostic"></div>

      </div>


      <!-- 📩 STEP 3 — FORM -->
      <div class="section center fade-in funnel-step" id="final-form">

        <h2>3. Validation du diagnostic</h2>

        <p class="subtitle">
          Soumettez vos informations pour recevoir votre rapport d'Audit Flash sous 48h.
        </p>

        <form class="contact-form" id="contact-form" onsubmit="handleLeadSubmit(event)">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="sector" id="form-sector" />
          <input type="hidden" name="need" id="form-need" />
          <input type="hidden" name="priority" id="form-priority" />
          <input type="hidden" name="tag" id="form-tag" />
          <label class="field-label" for="contact-name">Nom complet</label>
          <input id="contact-name" type="text" name="name" placeholder="Nom complet" autocomplete="name" required />

          <label class="field-label" for="contact-email">Email professionnel</label>
          <input id="contact-email" type="email" name="email" placeholder="Email professionnel" autocomplete="email" required />

          <label class="field-label" for="contact-company">Organisation</label>
          <input id="contact-company" type="text" name="company" placeholder="Organisation" autocomplete="organization" />
          <input
            type="text"
            name="website"
            class="hp-field"
            tabindex="-1"
            autocomplete="off"
            aria-hidden="true"
          />

          <label class="field-label" for="contact-message">Décrivez votre contexte</label>
          <textarea id="contact-message" name="message" placeholder="Décrivez votre contexte..."></textarea>

          <button class="cta primary" type="submit">
            Obtenir mon diagnostic stratégique
          </button>

        </form>

      </div>


      <!-- 🔥 FINAL CTA -->
      <div class="section center conversion-block fade-in">

        <h2>Analyse experte garantie</h2>

        <p>
          Votre demande sera traitée par un consultant en ingénierie pédagogique pour garantir la pertinence des préconisations.
        </p>

      </div>


      <!-- ⚫ FOOTER -->
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
