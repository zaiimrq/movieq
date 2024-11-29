<script setup>
import FilmCard from '../Cards/FilmCard.vue'
import LineDrawing from '../Text/Animations/LineDrawing.vue'
</script>

<template>
  <div class="px-10 mt-3 min-h-dvh">
    <LineDrawing />
    <div class="grid grid-cols-2 gap-5 mt-5 md:grid-cols-3 lg:grid-cols-5">
      <template v-for="i in 20" :key="i">
        <FilmCard />
      </template>
    </div>
  </div>
</template>
