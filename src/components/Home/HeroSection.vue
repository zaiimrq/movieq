<script setup>
import TrailerVideo from '../TrailerVideo.vue'

import QuietPlace from '@/assets/trailers/quiet-place.mp4'
import Gladiator from '@/assets/trailers/gladiator.mp4'
import Venom from '@/assets/trailers/venom.mp4'
import ExploreButton from '../Buttons/ExploreButton.vue'

</script>

<template>
  <div class="relative px-3 min-h-dvh">
    <!-- cover of spline watermark -->
    <div class="absolute bottom-5 p-5 blur bg-red-700 roulnded w-35 right-7.5"></div>
    <!-- <TimeText /> -->
    <iframe
      v-once
      class="w-full h-full min-h-dvh -z-10"
      src="https://my.spline.design/backlightbgeffect-f1da79cfdc2f719048f3d022c12c52ee/"
      frameborder="0"
      loading="lazy"
      decoding="async"
      sandbox="allow-scripts"
    >
    </iframe>
    <div class="absolute flex flex-col gap-3 top-1/4 left-10">
      <p
        data-aos="fade-up"
        data-aos-delay="3000"
        class="tracking-wider select-none text-7xl sm:text-8xl lg:text-9xl"
      >
        Movie Q
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="4000"
        class="text-3xl select-none sm:text-4xl lg:text-5xl"
      >
        Explore your favorite film.
      </p>
      <ExploreButton />
    </div>
    <div class="absolute bottom-0 flex-col justify-center hidden h-full gap-10 right-10 md:flex">
      <TrailerVideo key="video-1" id="quiet-place" :src="QuietPlace" />
      <TrailerVideo key="video-2" id="gladiator" :src="Gladiator" />
      <TrailerVideo key="video-3" id="venom" :src="Venom" />
    </div>
  </div>
</template>

<style scoped>
/* @media screen and (max-width: 1000px) {
  iframe {
    clip-path: inset(0 0 10% 0);
  }
} */
</style>
