<script setup>
import { onMounted } from 'vue'
import Aos from 'aos'
import HeroSection from '@/components/Home/HeroSection.vue'
import FilmSection from '@/components/Home/FilmSection.vue'
onMounted(() => {
  Aos.refresh()
})
</script>

<template>
  <HeroSection />
  <FilmSection />
</template>
