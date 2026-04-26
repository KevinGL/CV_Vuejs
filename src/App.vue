<script setup>
import Content from './components/Content.vue';
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <div class="mx-auto max-w-5xl p-6 print:p-0">
      <div class="flex flex-row gap-6 text-center">
        <Sidebar />
        <Content />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
