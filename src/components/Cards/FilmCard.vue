<template>
  <div data-aos="fade" data-aos-duration="700" class="cursor-pointer flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front" :style="{ backgroundImage: `url(${tmdbImageUrl + item.poster_path})` }">
      <span class="py-3 rounded-tr-xl rounded-tl-xl bg-black/80" >
        <p class="font-bold text-gray-100" >{{ item.title }}</p>
        <p class="font-medium text-red-600" >{{ new Date(item.release_date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
      </span>
      </div>
      <div
      @click="openModal"
       class="flip-card-back" :style="{ backgroundImage: `url(${tmdbImageUrl + item.poster_path})` }">
        <span class="p-3 bg-black rounded-tr-xl rounded-tl-xl" >
        <p class="text-sm text-gray-100 line-clamp-3" > {{ item.overview }}</p>
      </span>
      </div>
    </div>
  </div>
</template>

<script setup >
const tmdbImageUrl = "https://image.tmdb.org/t/p/w200"

defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(["showModal"])

const openModal = () => emit("showModal")
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 100%;
  /* height: 100%; */
  /* width: 190px; */
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid red;
  border-radius: 1rem;
  background-size: cover;
  background-position: center;
}

.flip-card-front {
  background: linear-gradient(
    120deg,
    #0f0f0f 60%,
    #171717 88%,
    #1c1c1c 40%,
    rgba(0, 0, 0, 0.8) 48%
  );

  color: white;
}

.flip-card-back {
  background: linear-gradient(
    120deg,
    rgb(185, 28, 28) 30%,
    coral 88%,
    bisque 40%,
    rgb(185, 28, 28) 78%
  );

  color: white;
  transform: rotateY(180deg);
}
</style>
