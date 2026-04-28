export default function businessEnglish() {
  return `
    <section class="solution-detail">

      <!-- 🔵 HERO: Enfoque en el Problema/Solución -->
      <div class="section hero-dark center fade-in">
        <span class="badge" style="border-color: rgba(255,255,255,0.3); color: #fff;">Solution Entreprise</span>
        <h1>Business English for Real Workplace Interaction</h1>
        <p class="subtitle">
          Stop avoiding English at work. Train your teams to interact, react and contribute confidently in real professional situations.
        </p>
        <p class="tags">Small groups • Hybrid delivery • Impact focused</p>
        <button class="cta primary" onclick="navigate('/contact')">Request a training proposal</button>
      </div>

      <!-- 🧠 EL "POR QUÉ": Enfoque en Neurociencias y Realidad -->
      <div class="section center fade-in">
        <h2>Why this training?</h2>
        <p class="subtitle">Most professionals don’t struggle with grammar. They struggle with <strong>real interaction</strong> under pressure.</p>
        
        <div class="grid-3" style="margin-top: 40px;">
          <div class="card insight-box">
            <h3 style="color: #e11d48;">The Pain</h3>
            <p>Avoiding speaking in meetings, switching back to French, and losing leadership presence due to communication friction.</p>
          </div>
          <div class="card insight-box" style="border-top: 4px solid #2563eb;">
            <h3>The Focus</h3>
            <p>Cognitive-based training. We simulate high-pressure scenarios to build neural reflexes, not just vocabulary lists.</p>
          </div>
          <div class="card insight-box" style="border-top: 4px solid #059669;">
            <h3>The Goal</h3>
            <p>Maintain strategic interaction even with partial understanding. Turning English from a barrier into a tool for execution.</p>
          </div>
        </div>
      </div>

      <!-- ⚙️ ESTRUCTURA: Los 4 Módulos como Pasos -->
      <div class="section center fade-in" style="background: #f8fbff;">
        <h2>Training structure</h2>
        <p class="subtitle">A progressive architecture designed for cognitive anchoring.</p>
        
        <div class="grid-4" style="margin-top: 40px; text-align: left;">
          <div class="card hover-card">
            <span class="badge">Module 1</span>
            <h3>Speak & survive</h3>
            <p>Breaking the inhibition barrier. Focus on immediate survival tools for professional contexts.</p>
          </div>
          <div class="card hover-card">
            <span class="badge">Module 2</span>
            <h3>Participate in meetings</h3>
            <p>Structure ideas in real-time. Reacting, contributing, and staying engaged in fast-paced conversations.</p>
          </div>
          <div class="card hover-card">
            <span class="badge">Module 3</span>
            <h3>Write clearly</h3>
            <p>Efficient asynchronous communication. Reducing misunderstandings in emails and technical reports.</p>
          </div>
          <div class="card hover-card">
            <span class="badge">Module 4</span>
            <h3>High-Pressure</h3>
            <p>Strategic communication. Handling complex negotiations, calls, and conflict resolution in English.</p>
          </div>
        </div>
      </div>

      <!-- 💰 PRICING: Diseño de Tarjetas Comparativas -->
      <div class="section center fade-in">
        <h2>Pricing & Formats</h2>
        <p class="subtitle">Flexible delivery: On-site, Remote, or Hybrid.</p>

        <div class="grid-3" style="margin-top: 50px; align-items: stretch;">
          
          <!-- Plan Essential -->
          <div class="card" style="display: flex; flex-direction: column; border: 1px solid #e2e8f0;">
            <h3 style="font-size: 1.2rem; color: #64748b;">Essential</h3>
            <p style="font-size: 0.9rem; margin-bottom: 20px;">1 to 3 targeted sessions</p>
            <div style="font-size: 1.8rem; font-weight: 800; margin-bottom: 20px;">1100€ <span style="font-size: 0.9rem; font-weight: 400; color: #64748b;">/ session</span></div>
            <ul style="text-align: left; list-style: none; padding: 0; flex-grow: 1; font-size: 0.95rem;">
              <li style="margin-bottom: 10px;">✓ Up to 10 participants</li>
              <li style="margin-bottom: 10px;">✓ 6h full training day</li>
              <li style="margin-bottom: 10px;">✓ Professional scenarios</li>
            </ul>
            <button class="cta secondary" onclick="navigate('/contact')" style="width: 100%; margin: 20px 0 0;">Select Essential</button>
          </div>

          <!-- Plan Classic (Featured) -->
          <div class="card" style="display: flex; flex-direction: column; border: 2px solid #2563eb; transform: scale(1.05); position: relative; z-index: 2; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
            <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #2563eb; color: #fff; padding: 4px 12px; border-radius: 999px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">Most Popular</div>
            <h3 style="font-size: 1.2rem; color: #0f172a;">Classic ⭐</h3>
            <p style="font-size: 0.9rem; margin-bottom: 20px;">Complete program (4 sessions)</p>
            <div style="font-size: 1.8rem; font-weight: 800; margin-bottom: 20px;">3600€</div>
            <ul style="text-align: left; list-style: none; padding: 0; flex-grow: 1; font-size: 0.95rem;">
              <li style="margin-bottom: 10px;">✓ <strong>Recommended for real impact</strong></li>
              <li style="margin-bottom: 10px;">✓ Full module coverage (1 to 4)</li>
              <li style="margin-bottom: 10px;">✓ Progress tracking & data</li>
              <li style="margin-bottom: 10px;">✓ Situational simulations</li>
            </ul>
            <button class="cta primary" onclick="navigate('/contact')" style="width: 100%; margin: 20px 0 0;">Select Classic</button>
          </div>

          <!-- Plan Premium -->
          <div class="card" style="display: flex; flex-direction: column; border: 1px solid #e2e8f0;">
            <h3 style="font-size: 1.2rem; color: #64748b;">Premium</h3>
            <p style="font-size: 0.9rem; margin-bottom: 20px;">Program + Certification</p>
            <div style="font-size: 1.8rem; font-weight: 800; margin-bottom: 20px;">4900€</div>
            <ul style="text-align: left; list-style: none; padding: 0; flex-grow: 1; font-size: 0.95rem;">
              <li style="margin-bottom: 10px;">✓ Includes LinguaSkill cert</li>
              <li style="margin-bottom: 10px;">✓ Preparation & Exam fees</li>
              <li style="margin-bottom: 10px;">✓ Measurable outcomes report</li>
              <li style="margin-bottom: 10px;">✓ Personal performance review</li>
            </ul>
            <button class="cta secondary" onclick="navigate('/contact')" style="width: 100%; margin: 20px 0 0;">Select Premium</button>
          </div>

        </div>
      </div>

      <!-- 🏆 CERTIFICATION BOX: Destacado visual -->
      <div class="section center fade-in">
        <div class="card" style="max-width: 900px; margin: 0 auto; background: #0f172a; color: #fff; text-align: left; display: grid; grid-template-columns: 1fr 250px; gap: 30px; align-items: center; padding: 40px;">
          <div>
            <h2 style="color: #fff; margin-bottom: 15px;">Optional Certification Pathway</h2>
            <p style="opacity: 0.9;">
              Upgrade your training with an official certification pathway: preparation for LinguaSkill, 
              certification included, and a complete performance report via Cambridge Assessment English.
            </p>
          </div>
          <div style="text-align: center;">
            <img src="/assets/img/solutions/cambridge-logo.png" alt="Cambridge" style="width: 100%; max-width: 180px; filter: brightness(0) invert(1);">
          </div>
        </div>
      </div>

      <!-- 🚀 FINAL CTA -->
      <div class="section center conversion-block fade-in">
        <h2>Ready to improve your team’s communication?</h2>
        <p>Custom pricing available based on your specific needs and team size.</p>
        <div class="actions">
          <button class="cta primary" onclick="navigate('/contact')">Request a tailored proposal</button>
          <button class="cta secondary" onclick="scrollToContact()" style="border: 1px solid #eee;">Book a discovery call</button>
        </div>
      </div>

      <footer class="footer fade-in">
        <p>© DIGLY — Learning that works.</p>
        <p>since 2025</p>
        <div class="footer-links">
          <a href="/mentions-legales.html">Conditions legales</a>
          <a href="/politique-confidentialite.html">Politique de confidentialité</a>
        </div>
      </footer>

    </section>
  `;
}