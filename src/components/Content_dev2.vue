<template>
  <!-- 1. PAGE ENTIÈRE (CONTENEUR PRINCIPAL CALIBRÉ A4) -->
  <div class="a4-page w-[210mm] min-h-[297mm] mx-auto bg-white p-7 text-gray-800 text-md font-sans overflow-hidden flex flex-col justify-between">
    
    <!-- 2. EN-TÊTE DYNAMIQUE AVEC PHOTO (HEADER) -->
    <header class="flex items-start gap-5 pb-5 border-b border-slate-200">
      
      <!-- Photo de profil -->
      <div class="shrink-0">
        <!-- Remplace 'src' par le chemin de ta photo de profil (ex: src="/ma-photo.jpg") -->
        <img 
          src="/img/20230829_132432.jpg" 
          alt="Photo de profil Kévin Gay" 
          class="w-32 h-32 rounded-full border-4 border-slate-100 shadow-inner object-cover"
        />
      </div>

      <!-- Nom, Titre et Coordonnées -->
      <div class="flex-1 space-y-2">
        <div class="flex items-baseline justify-between gap-4">
          <h1 class="text-3xl font-extrabold text-gray-950 tracking-tighter">Kévin Gay</h1>
          <span class="text-xs font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-full">
            Développeur Backend PHP / Fullstack PHP
          </span>
        </div>

        <!-- Coordonnées regroupées en blocs compacts -->
        <div class="text-[11px] text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
          <span>📍 Marseille (Mobilité PACA)</span>
          <span>📱 +33 6 42 42 75 21</span>
          <a href="mailto:gaykevin.gay448@gmail.com" class="hover:underline text-indigo-600">✉️ gaykevin.gay448@gmail.com</a>
          <a href="https://github.com/KevinGL" target="_blank" class="hover:underline font-mono">🔗 github.com/KevinGL</a>
          <a href="https://linkedin.com/in/kevin-gay-2aba47225" target="_blank" class="hover:underline font-mono">🔗 LinkedIn</a>
          <span>🚗 Permis B, véhiculé</span>
        </div>
      </div>
    </header>

    <!-- 3. CORPS PRINCIPAL EN 2 COLONNES (2/3 - 1/3) -->
    <div class="grid grid-cols-12 gap-6 mt-5 flex-1">
      
      <!-- COLONNE GAUCHE (7/12 = ~58% de largeur) : Projets & Expériences -->
      <main class="col-span-7 space-y-4">
        
        <!-- SECTION ACROCHE / PROFIL -->
        <section class="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <h2 class="text-xs font-bold text-indigo-800 uppercase tracking-widest mb-2">Profil & Objectif</h2>
          <p class="text-[11px] text-gray-700 leading-relaxed">
            Développeur PHP passionné par la conception logicielle et l'architecture MVC. Concepteur de <strong class="text-gray-950 font-bold">NovaPHP</strong>, un framework MVC complet sans dépendances externes. Rigoureux, autonome et force de proposition, je recherche une opportunité en tant que Développeur PHP / Web.
          </p>
        </section>

        <!-- SECTION PROJETS PERSONNELS PHARES -->
        <section>
          <h2 class="text-xs font-bold text-indigo-800 uppercase tracking-widest mb-3 pb-0.5 border-b border-indigo-200">
            Projets Personnels Phares
          </h2>
          <div class="grid grid-cols-1 gap-3">
            
            <!-- NovaPHP (Large Card) -->
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between gap-4 transition-all hover:bg-slate-100/70 hover:border-slate-200">
              <div class="flex-1 min-w-0">
                <h3 class="font-bold text-indigo-950 text-sm">NovaPHP — Framework MVC PHP 8+</h3>
                <ul class="mt-2.5 list-disc list-inside text-[11px] text-gray-700 space-y-1 text-left">
                  <li>Conception intégrale d'un framework MVC en PHP 8+ strict (Routing HTTP, ORM maison, moteur de templates "Prism")</li>
                  <li>Développement de l'outil CLI "nebula" pour la génération automatique de modèles, contrôleurs et migrations</li>
                  <li>Autoloading PSR-4 et architecture modulaire épurée</li>
                </ul>
                <a href="https://github.com/KevinGL/NovaPHP" target="_blank" class="text-[9.5px] text-indigo-600 underline font-mono shrink-0">github.com/KevinGL/NovaPHP ↗</a>
              </div>
              <!-- QR Code (Affiche un badge propre) -->
              <div class="shrink-0 text-center">
                <img src="/img/https_github_com_KevinGL_NovaPHP.png" alt="QR NovaPHP" class="w-14 h-14 border p-0.5 bg-white rounded shadow-inner" />
                <span class="text-[9px] text-gray-500 font-mono block mt-1">Scan GitHub</span>
              </div>
            </div>

            <!-- ChronoMatch -->
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between gap-4 transition-all hover:bg-slate-100/70 hover:border-slate-200">
              <div class="flex-1 min-w-0">
                <h3 class="font-bold text-indigo-950 text-sm">ChronoMatch — Speed dating par chat</h3>
                <ul class="mt-2 list-disc list-inside text-[11px] text-gray-700 space-y-1 text-left">
                  <li>Entièrement conçu en PHP natif</li>
                  <li>Sécurité : Requêtes SQL préparées, JWT, chiffrage de données, passwords hashés</li>
                  <li>Serveur Node.js pour matching et conversations en temps réel</li>
                </ul>
                <a href="https://github.com/KevinGL/ChronoMatch" target="_blank" class="text-[9.5px] text-indigo-600 underline font-mono mt-1 block">github.com/KevinGL/ChronoMatch ↗</a>
              </div>
              <div class="shrink-0 text-center">
                <img src="/img/https_github_com_KevinGL_Chrono-Match.png" alt="QR ChronoMatch" class="w-14 h-14 border p-0.5 bg-white rounded shadow-inner" />
                <span class="text-[9px] text-gray-500 font-mono block mt-1">Scan GitHub</span>
              </div>
            </div>

          </div>
        </section>

        <!-- EXPÉRIENCE PROFESSIONNELLE (Condensée) -->
        <section>
          <h2 class="text-xs font-bold text-indigo-800 uppercase tracking-widest mb-3 pb-0.5 border-b border-indigo-200">Expérience Professionnelle</h2>
          <div class="space-y-3.5 text-[11px]">
            
            <!-- SMSBOX -->
            <div class="flex items-start gap-2.5">
              <div class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0"></div>
              <div class="flex-1">
                <div class="flex justify-between font-bold text-gray-950">
                  <span class="text-gray-950 text-sm">SMSBOX</span>
                  <span class="text-gray-500 text-[10px] font-medium">02/2026 – 05/2026</span>
                </div>
                <p class="text-gray-900 font-semibold text-[10px] mt-0.5">Développeur Web — Carqueiranne (Toulon)</p>
                <p class="text-gray-700 mt-1 leading-snug">Maintenance d'applis SMS/RCS (Laravel, Vue.js), espace client PHP natif (MVC), dev solution PME (Vue.js, Figma).</p>
              </div>
            </div>

            <!-- Ennea Studio -->
            <div class="flex items-start gap-2.5">
              <div class="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1 shrink-0"></div>
              <div class="flex-1">
                <div class="flex justify-between font-bold text-gray-900">
                  <span>Ennea Studio</span>
                  <span class="text-gray-500 text-[10px] font-medium">12/2023 – 10/2024</span>
                </div>
                <p class="text-gray-800 font-medium text-[10px] mt-0.5">Développeur Next.js / WebGL — Full Remote</p>
                <p class="text-gray-600 mt-1 leading-snug">Jeu en ligne TypeScript, WebSockets. Marketplace Next.js & Firebase.</p>
              </div>
            </div>

            <!-- Sokeo -->
            <div class="flex items-start gap-2.5">
              <div class="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1 shrink-0"></div>
              <div class="flex-1">
                <div class="flex justify-between font-bold text-gray-900">
                  <span>Sokeo</span>
                  <span class="text-gray-500 text-[10px] font-medium">10/2022 – 04/2023</span>
                </div>
                <p class="text-gray-800 font-medium text-[10px] mt-0.5">Développeur PHP — Marseille</p>
                <p class="text-gray-600 mt-1 leading-snug">Site de rencontre CakePHP. Sécurisation requêtes SQL PHP natif.</p>
              </div>
            </div>
            
            <!-- Hors-IT -->
            <p class="text-[10px] text-gray-500 border-l-2 border-slate-200 pl-2 mt-3 leading-relaxed">
              Expériences techniques antérieures (2011–01/2026) : Ascensoriste (A+ Ascenseurs), techniques alarmes, vidéo-surveillance & électrotechnique. Gestion des urgences et rigueur opérationnelle.
            </p>
          </div>
        </section>

      </main>

      <!-- COLONNE DROITE (5/12 = ~42% de largeur) : Compétences, Expériences & Formations -->
      <aside class="col-span-5 space-y-4">
        
        <!-- COMPÉTENCES TECHNIQUES (TAGS CLÉS) -->
        <section class="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
          <h2 class="text-xs font-bold text-indigo-800 uppercase tracking-widest mb-3">Compétences Techniques</h2>
          
          <div class="space-y-3 text-[11px] text-gray-700">
            <div>
              <p class="font-bold text-gray-900 mb-1">Backend & BDD</p>
              <div class="flex flex-wrap gap-1">
                <span class="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">PHP 8+ (POO, typage strict, PDO)</span>
                <span class="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">Frameworks PHP (Symfony, Laravel concepts)</span>
                <span class="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">Architecture MVC et ORM</span>
                <span class="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">Bases de données SQL</span>
                <span class="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">Conceptions d'outils CLI</span>
              </div>
            </div>

            <div>
              <p class="font-bold text-gray-900 mb-1 mt-5">Frontend & Outillage</p>
              <div class="flex flex-wrap gap-1">
                <span class="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">Frontend (HTML5, CSS3, JavaScript ES6+)</span>
                <span class="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">Frameworks JS (Vue.js, React)</span>
                <span class="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">Versionning & Workflow (Git, GitHub, GitLab)</span>
                <span class="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">Environnement (Composer, node.js, Docker notions)</span>
              </div>
            </div>

            <div>
              <p class="font-bold text-gray-900 mb-1 mt-5">Sécurité & Bonnes Pratiques</p>
              <div class="flex flex-wrap gap-1">
                <span class="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">Sécurisation des données (Validation double niveau, PDO / Requêtes préparées)</span>
                <span class="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">Protection web (CSRF, Honeypots, Captchas, MFA)</span>
                <span class="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">Méthodes (Gitflow, Agile, Intégration continue CI/CD)</span>
                <span class="bg-white text-gray-800 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">Assistant IA (Optimisation du workflow de développement)</span>
              </div>
            </div>
          </div>
        </section>

        <!-- FORMATIONS & ATOUTS -->
        <section>
            <h2 class="text-xs font-bold text-indigo-800 uppercase tracking-widest mb-3 pb-0.5 border-b border-indigo-200">Formations / Diplômes</h2>
            <div class="space-y-3.5 text-[11px]">
            
                <div class="flex items-start gap-2.5">
                    <div class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0"></div>
                    <div class="flex-1">
                        <div class="flex justify-between font-bold text-gray-950">
                            <span class="text-gray-950 text-sm">Développeur Web</span>
                            <span class="text-gray-500 text-[10px] font-medium">2022</span>
                        </div>
                        <p class="text-gray-900 font-semibold text-[10px] mt-0.5">Epitech — Marseille</p>
                    </div>
                </div>

                <div class="flex items-start gap-2.5">
                    <div class="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1 shrink-0"></div>
                    <div class="flex-1">
                        <div class="flex justify-between font-bold text-gray-900">
                            <span>Ascensoriste</span>
                            <span class="text-gray-500 text-[10px] font-medium">2016</span>
                        </div>
                        <p class="text-gray-900 font-semibold text-[10px] mt-0.5">AFPA — Istres</p>
                    </div>
                </div>

                <div class="flex items-start gap-2.5">
                    <div class="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1 shrink-0"></div>
                    <div class="flex-1">
                        <div class="flex justify-between font-bold text-gray-900">
                            <span>BTS Electrotechnique</span>
                            <span class="text-gray-500 text-[10px] font-medium">2014</span>
                        </div>
                        <p class="text-gray-900 font-semibold text-[10px] mt-0.5">CFAI Provence — Istres</p>
                    </div>
                </div>

                <div class="flex items-start gap-2.5">
                    <div class="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1 shrink-0"></div>
                    <div class="flex-1">
                        <div class="flex justify-between font-bold text-gray-900">
                            <span>Niveau DUT GEII</span>
                            <span class="text-gray-500 text-[10px] font-medium">2011</span>
                        </div>
                        <p class="text-gray-900 font-semibold text-[10px] mt-0.5">IUT St-Jérôme — Marseille</p>
                    </div>
                </div>

                <div class="flex items-start gap-2.5">
                    <div class="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1 shrink-0"></div>
                    <div class="flex-1">
                        <div class="flex justify-between font-bold text-gray-900">
                            <span>Bac S</span>
                            <span class="text-gray-500 text-[10px] font-medium">2008</span>
                        </div>
                        <p class="text-gray-900 font-semibold text-[10px] mt-0.5">Lycée Cours Bastide — Marseille</p>
                    </div>
                </div>
            </div>
        </section>

      </aside>

    </div>
  </div>
</template>