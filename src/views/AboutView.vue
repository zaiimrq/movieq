<template>
  <div>
    <Suspense>
      <!-- Komponen anak yang menangani data async -->
      <template>
        <AsyncComponent />
      </template>

      <!-- Fallback selama data dimuat -->
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncComponent from './AsyncComponent.vue';
</script>

<style scoped>
/* Tambahkan styling jika diperlukan */
</style>
