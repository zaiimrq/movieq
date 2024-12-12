<template>
  <video
    :id="'video-' + id"
    data-aos="fade"
    data-aos-delay="700"
    :src="src"
    autoplay
    muted
    controls="false"
    loop
    playsinline
    preload="auto"
    class="rounded-md shadow-sm w-80 shadow-red-500 aspect-video"
  ></video>
</template>


<script setup>
defineProps({
  src: {
    required: true,
  },
  id: {
    required: true,
  },
})
</script>
