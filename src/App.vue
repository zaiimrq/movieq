<template>
  <main class="@container relative pb-20" v-bind:class="{ 'overflow-hidden max-h-dvh': loading }">
    <RouterView />
    <div v-if="loading" class="absolute inset-0 grid bg-black place-content-center z-9999">
      <GlobalLoader />
    </div>
  </main>
  <template v-if="!loading">
    <FooterSection />
  </template>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import GlobalLoader from './components/Loaders/GlobalLoader.vue'
import FooterSection from './components/Home/FooterSection.vue'

const loading = ref(true)

onMounted(async () => {
  setTimeout(() => {
    loading.value = false
  }, 5000)
})
</script>
