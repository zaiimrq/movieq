<template>
  <main class="@container relative" v-bind:class="{ 'overflow-hidden max-h-dvh': loading }">
    <RouterView />
    <div v-if="loading" class="absolute inset-0 grid bg-black place-content-center z-9999">
      <GlobalLoader />
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import GlobalLoader from './components/Loaders/GlobalLoader.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)
})
</script>
