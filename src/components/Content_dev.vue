<script setup>
const skills = [
    {
        title: "Backend & BDD",
        desc: [
            "PHP 8+ (POO, Typage strict, Reflection API, PDO)",
            "Frameworks PHP (Symfony, Laravel concepts)",
            "Architecture MVC & ORM",
            "Bases de données SQL (MySQL, MariaDB, PostgreSQL)",
            "Conception d'outils CLI"
        ]
    },
    {
        title: "Frontend & Outillage",
        desc: [
            "Frontend (HTML5, CSS3, JavaScript ES6+)",
            "Frameworks JS (Vue.js, React)",
            "Versionning & Workflow (Git, GitHub, GitLab)",
            "Environnement (Composer, node.js, Docker notions)"
        ]
    },
    {
        title: "Sécurité & Bonnes Pratiques",
        desc: [
            "Sécurisation des données (Validation double niveau, PDO / Requêtes préparées)",
            "Protection Web (Tokens CSRF, Honeypots, Captchas, MFA)",
            "Méthodes (Gitflow, Agile, Intégration continue CI/CD)",
            "Assistant IA (Optimisation du workflow de développement)"
        ]
    }
];

const jobs =
[
    {
        title: "Développeur web",
        society: "SMSBOX",
        city: "Carqueiranne",
        date: "02 - 05/2026",
        desc:
        [
            "Améliorations et corrections sur l'application de campagnes SMS/RCS (<strong>Laravel, Vue.js, JavaScript</strong>)",
            "Maintenance de l'espace client & CMS propriétaire en <strong>PHP natif (MVC)</strong> et BDD <strong>MySQL</strong>",
            "Développement d'une solution PME sur-mesure (<strong>Vue.js, TailwindCSS</strong>, maquettes Figma)",
            "Environnement & pratiques : <strong>Gitflow (CI/CD), Docker, Vitest, Agile/Daily</strong>"
        ]
    },

    {
        title: "Ascensoriste",
        society: "A+ Ascenseurs",
        city: "Marseille",
        date: "08/2025 - 01/2026",
        desc: []
    },

    {
        title: "Développeur Next.js / WebGL",
        society: "Ennea Studio",
        city: "Full remote",
        date: "12/2023 - 10/2024",
        desc:
        [
            "Développement d'un jeu en ligne ; <b>TypeScript, WebGL, web sockets</b>",
            "Participation à la market-place ; <b>Next.js</b>, développement des API, <b>BDD Firebase</b>"
        ]
    },

    {
        title: "Développeur PHP",
        society: "Sokeo",
        city: "Marseille",
        date: "10/2022 - 04/2023",
        desc:
        [
            "Création d'un site de rencontre en <b>CakePHP</b>",
            "Intégration de maquettes",
            "Reprises de projets en <b>PHP natif</b>, sécurisation des <b>requêtes SQL</b>"
        ]
    },

    {
        title: "Postes divers",
        society: "",
        city: "PACA, itinérant",
        date: "2011 - 2022",
        desc:
        [
            "Maintenance d'ascenseurs",
            "Technicien alarmes et vidéo-surveillance",
            "Maintenances station des eaux",
            "Travaux en électrotechnique"
        ]
    }
]

const trainings =
[
    {
        training: "Développeur web titre RNCP Bac+2",
        organism: "Epitech",
        year: "2022",
        city: "Marseille"
    },

    {
        training: "Maintenance des ascenseurs",
        organism: "AFPA",
        year: "2016",
        city: "Istres"
    },

    {
        training: "BTS Électrotechnique",
        organism: "CFAI Provence",
        year: "2014",
        city: "Istres"
    },

    {
        training: "Bac S",
        organism: "Lycée Cours Bastide",
        year: "2008",
        city: "Marseille"
    }
]

const homeProjects =
[
    {
        title: "NovaPHP — Framework MVC PHP 8+ (Zero dependency)",
        desc: [
            "Conception intégrale d'un framework MVC en PHP 8+ strict (Routing HTTP, ORM maison, moteur de templates \"Prism\")",
            "Développement de l'outil CLI \"nebula\" pour la génération automatique de modèles et contrôleurs",
            "Autoloading PSR-4 et architecture modulaire épurée"
        ],
        github: {title: "NovaPHP", link: "https://github.com/KevinGL/NovaPHP"},
        qrCode: "img/https_github_com_KevinGL_NovaPHP.png"
    },

    {
        title: "ChronoMatch — Application de speed dating par chat",
        desc: [
            "Entièrement conçu en PHP natif",
            "Sécurité : Requêtes SQL préparées, JWT, chiffrage de données, mots de passe hashés",
            "Serveurs node.js pour matching et conversations en temps réel",
        ],
        github: {title: "ChronoMatch", link: "https://github.com/KevinGL/Chrono-Match"},
        qrCode: "img/https_github_com_KevinGL_Chrono-Match.png"
    }
]
</script>

<template>
    <main class="space-y-2 w-3/4">
        <section class="bg-white rounded-2xl shadow p-6 border-l-4 border-indigo-400">
            <p class="text-2xl font-medium">
                Développeur Backend PHP / Fullstack PHP
            </p>
            <p class="text-sm mt-2">
                Développeur PHP passionné par la conception logicielle et l'architecture MVC. Spécialisé en PHP 8+ strict, j'ai récemment conçu <span class="font-bold">NovaPHP</span>, un framework MVC complet et sans dépendances externes. Rigoureux et autonome je recherche une opportunité en tant que Développeur PHP / Web
            </p>
        </section>

        <section class="bg-white rounded-2xl shadow p-4 border-l-4 border-emerald-400">
            <h2 class="text-base font-semibold tracking-wide text-indigo-700 uppercase">
                Projets Personnels & Réalisations
            </h2>
            <div class="mt-3 grid gap-3 sm:grid-cols-1 text-gray-700">
                <div 
                    v-for="project in homeProjects" 
                    :key="project.title" 
                    class="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between gap-4"
                >
                    <div class="flex-1 min-w-0">
                        <h3 class="text-sm font-semibold text-indigo-800">{{ project.title }}</h3>
                        <ul class="mt-1 text-xs text-left list-disc list-inside space-y-0.5">
                            <li v-for="d in project.desc" :key="d">{{ d }}</li>
                        </ul>
                        <div class="mt-2 text-left ml-5">
                            <a 
                                class="text-xs text-indigo-600 hover:underline font-mono break-all" 
                                :href="project.github.link" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                🔗 {{ project.github.title }}
                            </a>
                        </div>
                    </div>

                    <div v-if="project.qrCode" class="shrink-0 text-center">
                        <img 
                            :src="project.qrCode" 
                            alt="QR Code" 
                            class="w-16 h-16 border rounded p-1 bg-white shadow-sm" 
                        />
                        <span class="text-[9px] text-gray-500 block mt-0.5 font-mono">Scan GitHub</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white rounded-2xl shadow p-6 border-l-4 border-emerald-400">
            <h2 class="text-base font-semibold tracking-wide text-indigo-700 uppercase">Compétences</h2>
            <div class="mt-3 grid gap-4 sm:grid-cols-3 text-gray-700">
                <div v-for="skill in skills" class="p-2 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 class="text-sm font-semibold text-indigo-800">{{ skill.title }}</h3>
                    <ul class="mt-2 text-xs text-left list-disc list-inside">
                        <li v-for="d in skill.desc">{{ d }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="bg-white rounded-2xl shadow p-6 border-l-4 border-amber-400">
            <h2 class="text-base font-semibold tracking-wide text-indigo-700 uppercase">Expérience professionnelle</h2>
            <div class="mt-4 space-y-2">
                <article v-for="job in jobs" class="p-2 bg-gray-50 rounded-lg border border-gray-200">
                    <header class="flex flex-col justify-between gap-2">
                        <div class="flex flex-row justify-between">
                            <h3 class="text-sm font-bold text-indigo-800">{{ job.title }} — {{ job.society }}</h3>
                            <span class="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                                {{ job.date }} • {{ job.city }}
                            </span>
                        </div>
                        <p class="mt-1 text-sm text-gray-700 text-left">
                            <ul class="mt-2 text-xs list-disc list-inside space-y-1 text-gray-700">
                                <li v-for="d in job.desc" v-html="d"></li>
                            </ul>
                        </p>
                    </header>
                </article>
            </div>
        </section>

        <section class="bg-white rounded-2xl shadow p-6 border-l-4 border-indigo-400">
            <h2 class="text-base font-semibold tracking-wide text-indigo-700 uppercase">Diplômes / Formations</h2>
            <div class="mt-4 space-y-6">
                <article v-for="training in trainings" class="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <header class="flex flex-wrap items-center justify-between gap-2">
                        <h3 class="text-sm font-bold text-indigo-800">{{ training.training }} — {{ training.organism }}</h3>
                        <span class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                            {{ training.year }} • {{ training.city }}
                        </span>
                    </header>
                </article>
            </div>
        </section>
    </main>
</template>