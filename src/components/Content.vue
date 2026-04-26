<script setup>
const skills =
[
    {
        title: "Techniques",
        desc:
        [
            "Frontend (HTML/CSS, JS, React, Vue.js)",
            "Backend (PHP, Symfony, Laravel, Next.js)",
            "BDD (MySQL, PostgreSQL, Firebase)",
            "Versionning (Git, GitHub, GitLab)",
            "Logiciels (C/C++, algorithmes)",
            "3D (OpenGL, Blender)"
        ]
    },

    {
        title: "Méthodes de travail",
        desc:
        [
            "Agile",
            "CI/CD",
            "Workflow Git",
            "IA"
        ]
    },

    {
        title: "Sécurité",
        desc:
        [
            "Protections frontend et backend",
            "Honeypots",
            "Tokens CSRF",
            "Captchas"
        ]
    },

    {
        title: "Réflexes de sécurité",
        desc:
        [
            "Mises à jour régulières PC",
            "Sensibilisation aux méthodes de phishing (Faux mails ...)"
        ]
    }
];

const jobs =
[
    {
        title: "Développeur web",
        society: "SMSBOX",
        city: "Carqueiranne",
        date: "02 - 04/2026",
        desc:
        [
            {
                title: "Réalisations techniques",
                list:
                [
                    "Améliorations et corrections d'une application de créations de campagnes RCS ; <b>JavaScript, Vue.js, Laravel</b>",
                    "Maintenances de la vitrine et de l'espace client de la société ; <b>PHP natif</b>, applications organisées en <b>MVC</b>, CMS faits maison, BDD MySQL",
                    "Développement d'une solution pour PME ; <b>Vue.js, TailwindCSS</b>, intégration de maquettes <b>Figma</b>"
                ]
            },

            {
                title: "Environnement et méthodologie",
                list:
                [
                    "<b>Agile, Daily scrums</b>",
                    "Gestion <b>conflits Git</b>",
                    "<b>Merge requests</b>",
                    "Collaborations avec le <b>lead dev</b>",
                    "Gitflow <b>CI/CD</b>",
                    "<b>Dockerisation</b> des projets",
                    "<b>Tests unitaires avec Vitest</b>",
                    "Utilisation de <b>l'IA</b> comme gain de temps et optimisation"
                ]
            }
        ]
    },

    {
        title: "Travail alimentaire",
        society: "A+ Ascenseurs",
        city: "Marseille",
        date: "08/2025 - 01/2026",
        desc: []
    },

    {
        title: "Développeur Next.js / WebGL",
        society: "Ennea Studio",
        city: "Marseille",
        date: "12/2023 - 10/2024",
        desc:
        [
            {
                title: "",
                list:
                [
                    "Développement d'un jeu en ligne ; <b>TypeScript, WebGL, web sockets</b>",
                    "Participation à la market-place ; <b>Next.js</b>, développement des API, <b>BDD Firebase</b>"
                ]
            },
        ]
    },

    {
        title: "Développeur PHP",
        society: "Sokeo",
        city: "Marseille",
        date: "10/2022 - 04/2023",
        desc:
        [
            {
                title: "",
                list:
                [
                    "Création d'un site de rencontre en <b>CakePHP</b>",
                    "Intégration de maquettes",
                    "Reprises de projets en <b>PHP natif</b>, sécurisation des <b>requêtes SQL</b>"
                ]
            },
        ]
    },

    {
        title: "Postes divers",
        society: "",
        city: "PACA, itinérant",
        date: "2011 - 2022",
        desc:
        [
            {
                title: "",
                list:
                [
                    "Maintenance d'ascenseurs",
                    "Technicien alarmes et vidéo-surveillance",
                    "Maintenances station des eaux",
                    "Travaux en électrotechnique"
                ]
            },
        ]
    }
]

const trainings =
[
    {
        training: "Développeur web niveau Bac+2",
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
</script>

<template>
    <main class="space-y-3 w-3/4">
        <section class="bg-white rounded-2xl shadow p-6 border-l-4 border-indigo-400">
            <p class="text-base font-medium">
                Passionné par le métier de développeur web, attiré par les challenges toujours plus intéressants, aimant le travail en équipe et participer au développement de solutions
            </p>
        </section>

        <section class="bg-white rounded-2xl shadow p-6 border-l-4 border-emerald-400">
            <h2 class="text-base font-semibold tracking-wide text-indigo-700 uppercase">Compétences</h2>
            <div class="mt-3 grid gap-4 sm:grid-cols-2">
                <div v-for="skill in skills">
                    <h3 class="text-sm font-semibold text-indigo-800">{{ skill.title }}</h3>
                    <ul class="mt-2 text-sm text-left list-disc list-inside">
                        <li v-for="d in skill.desc">{{ d }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="bg-white rounded-2xl shadow p-6 border-l-4 border-amber-400">
            <h2 class="text-base font-semibold tracking-wide text-indigo-700 uppercase">Expérience professionnelle</h2>
            <div class="mt-4 space-y-6">
                <article v-for="job in jobs" class="p-2 bg-gray-50 rounded-lg border border-gray-200">
                    <header class="flex flex-col justify-between gap-2">
                        <div class="flex flex-row justify-between">
                            <h3 class="text-sm font-bold text-indigo-800">{{ job.title }} — {{ job.society }}</h3>
                            <span class="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                                {{ job.date }} • {{ job.city }}
                            </span>
                        </div>
                        <p class="mt-1 text-sm text-gray-700 text-left">
                            <div v-for="desc in job.desc">
                                <h4 class="font-bold mt-6">{{ desc.title }}</h4>
                                <ul class="mt-2 text-sm text-left list-disc list-inside">
                                    <li v-for="l in desc.list" v-html="l"></li>
                                </ul>
                            </div>
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