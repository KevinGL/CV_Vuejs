<script setup>
const skills =
[
    {
        title: "Diagnostic et recherche de pannes",
        desc:
        [
            "Méthodologie de dépannage",
            "Analyse de schémas électriques",
            "Lecture de plans et notices techniques",
            "Utilisation d'appareils de mesure (Multimètres)"
        ]
    },

    {
        title: "Électrotechnique et électromécanique",
        desc:
        [
            "Maîtrise des bases scientifiques",
            "Câblage, raccordement",
            "Manipulation de composants électriques (Disjoncteurs, fusibles, variateurs de fréquence)"
        ]
    },

    {
        title: "Maintenance et réparation",
        desc:
        [
            "Démontage, remontage",
            "Remplacement de pièces"
        ]
    },

    {
        title: "Sécurité",
        desc:
        [
            "Application stricte des consignes de sécurité",
            "Port des EPI"
        ]
    },

    {
        title: "Autres",
        desc:
        [
            "Algorithmie et programmation",
            "Connaissances mathématiques et géométriques"
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
        desc: "Améliorations et débuggage d'applications web"
    },

    {
        title: "Ascensoriste",
        society: "A+ Ascenseurs",
        city: "Marseille",
        date: "08/2025 - 01/2026",
        desc: "Maintenance et dépannage d'ascenseurs"
    },

    {
        title: "Développeur Next.js / WebGL",
        society: "Ennea Studio",
        city: "Marseille",
        date: "12/2023 - 10/2024",
        desc: "Développement d'un jeu en ligne"
    },

    {
        title: "Développeur PHP",
        society: "Sokeo",
        city: "Marseille",
        date: "10/2022 - 04/2023",
        desc: "Développement d'un site de rencontres"
    },

    {
        title: "Postes divers",
        society: "",
        city: "PACA, itinérant",
        date: "2011 - 2022",
        desc: "Maintenance d'ascenseurs, technicien alarmes et vidéo-surveillance, maintenances station des eaux, travaux en électrotechnique"
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
</script>

<template>
    <main class="space-y-3 w-3/4">
        <section class="bg-white rounded-2xl shadow p-6 border-l-4 border-indigo-400">
            <p  class="text-3xl font-semibold tracking-wide text-indigo-700 uppercase">
                Réparateur en électrotechnique
            </p>
        </section>

        <section class="bg-white rounded-2xl shadow p-6 border-l-4 border-emerald-400">
            <h2 class="text-base font-semibold tracking-wide text-indigo-700 uppercase">Compétences</h2>
            <div class="mt-3 grid gap-4 sm:grid-cols-2 text-gray-700">
                <div v-for="skill in skills" class="p-2 bg-gray-50 rounded-lg border border-gray-200">
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
                            {{ job.desc }}
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