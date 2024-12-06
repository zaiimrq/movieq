<script setup>
import { onMounted, ref } from 'vue'
import FilmCard from '../Cards/FilmCard.vue'
import LineDrawing from '../Text/Animations/LineDrawing.vue'
import VoteAverage from '@/components/Cards/VoteAverage.vue'

const loading = ref(true)
let data = ref([])
let selectedFilm = ref(null)

const tmdbImageUrl = 'https://image.tmdb.org/t/p/w500'

onMounted(async () => {
  data.value = await getData()
})

const getData = async () => {
  try {
    const url =
      import.meta.env.VITE_API_URL + '/movie/now_playing?language=en-US&page=1&adult=false'
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_API_TOKEN,
      },
    }

    const response = await fetch(url, options)
    const jsonData = await response.json()
    console.log(jsonData)
    return jsonData.results
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}

const showModal = (film) => (selectedFilm.value = film)
const closeModal = () => (selectedFilm.value = null)
</script>

<template>
  <div class="px-10 mt-3 min-h-dvh">
    <LineDrawing />
    <div class="grid grid-cols-2 gap-5 mt-5 md:grid-cols-3 lg:grid-cols-5">
      <template v-for="item in data" :key="item.id">
        <FilmCard :item="item" @click="showModal(item)" />
      </template>
    </div>

    <!-- Modal -->
    <div
      v-on:click.self="closeModal"
      v-if="selectedFilm"
      class="fixed inset-0 flex items-center justify-center backdrop-blur-xl z-100"
    >
      <div
          data-aos="flip-right"
    data-aos-duration="700"
        class="relative w-4/5 overflow-hidden bg-center bg-no-repeat bg-cover rounded-lg shadow shadow-red-600"
        :style="{ backgroundImage: `url(${tmdbImageUrl + selectedFilm.backdrop_path})` }"
      >
        <span
        class="absolute cursor-pointer top-2 right-4" @click="closeModal"
          >
          <svg class="text-red-600 fill-current"  width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            ></path></svg
        ></span>
        <div class="h-full p-5 md:p-10 bg-black/80">
          <h2 class="mb-5 text-3xl font-bold">
            {{ selectedFilm.title }} ({{
              new Date(selectedFilm.release_date).toLocaleDateString('id-ID', { year: 'numeric' })
            }})
          </h2>
          <div class="flex flex-col justify-center gap-2 md:gap-10 md:flex-row">
            <img
              :src="tmdbImageUrl + selectedFilm.poster_path"
              :alt="selectedFilm.title"
              class="rounded-lg shadow shadow-red-600 w-[200px] h-[250px]"
            />
            <div class="mt-3">
              <p class="my-3">{{ selectedFilm.overview }}</p>
              <VoteAverage :value="selectedFilm.vote_average" />
            </div>
          </div>

          <!-- <button
            class="px-3 py-1 mt-5 text-white bg-red-600 rounded cursor-pointer"
            @click="closeModal"
          >
            Close
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>
