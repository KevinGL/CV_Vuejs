<script setup>
const skills = ['Autonomie','Rigueur','Persévérance','Initiatives','Travail en équipe', "Force de proposition"];
</script>

<template>
    <aside class="w-1/4 bg-gradient-to-b from-indigo-50 to-indigo-100 rounded-2xl shadow px-2 py-6">
        <div class="flex flex-col items-center text-center">
          <img
            src="/img/20230829_132432.jpg"
            alt="Votre photo"
            class="w-32 h-32 rounded-full object-cover ring-4 ring-indigo-200"
          />
          <h1 class="mt-4 text-xl font-semibold text-indigo-800">Kévin Gay</h1>
          <p class="text-sm text-gray-700">Réparateur en électrotechnique</p>
          <p class="mt-2 inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs font-medium">
            Contrat recherché : CDD / CDI
          </p>
        </div>

        <div class="mt-6 space-y-5">
          <section aria-labelledby="coordonnees">
            <h2 id="coordonnees" class="text-sm font-semibold tracking-wide text-indigo-700 uppercase">
              Coordonnées
            </h2>
            <ul class="mt-2 text-sm leading-6">
              <li>📍 Marseille, France (Mobilité région PACA)</li>
              <li>✉️ <a class="text-indigo-600 hover:underline break-words" href="mailto:gaykevin.gay448@gmail.com">gaykevin.gay448@ gmail.com</a></li>
              <li>📱 +33 6 42 42 75 21</li>
            </ul>
          </section>

          <section aria-labelledby="infos">
            <h2 id="infos" class="text-sm font-semibold tracking-wide text-indigo-700 uppercase">
              Infos diverses
            </h2>
            <ul class="mt-2 text-sm text-left list-disc list-inside">
              <li>Permis B, véhiculé</li>
            </ul>
          </section>

          <section aria-labelledby="softskills">
            <h2 id="softskills" class="text-sm font-semibold tracking-wide text-indigo-700 uppercase">
              Soft skills
            </h2>
            <ul class="mt-2 text-sm flex flex-wrap gap-2">
              <li v-for="(skill, idx) in skills" class="bg-amber-100">
                {{ skill }}
              </li>
            </ul>
          </section>
        </div>
    </aside>
</template>