<template>
  <p>{{ title }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Reactive state untuk data
const title = ref('');

// Simulasi fetch data
const fetchTitle = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, World!');
    }, 500); // Simulasi waktu fetch 2 detik
  });
};

// Ambil data saat komponen dimount
onMounted(async () => {
  title.value = await fetchTitle();
});
</script>

<style scoped>
/* Tambahkan styling jika diperlukan */
</style>
