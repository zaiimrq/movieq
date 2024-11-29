<template>
  <video
    :id="'video-' + id"
    data-aos="fade"
    data-aos-delay="3700"
    :src="src"
    autoplay
    muted
    controls="false"
    loop
    class="rounded-md shadow-sm w-80 shadow-red-500 aspect-video"
  ></video>
</template>

<script setup>
import Aos from 'aos'
import { defineProps, onMounted } from 'vue'

defineProps({
  src: {
    required: true,
  },
  id: {
    required: true,
  },
})

onMounted(() => {
  Aos.refresh()
})
</script>
