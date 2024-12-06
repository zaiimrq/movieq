<template>
  <div
    @click.self="close"
    class="fixed inset-0 flex items-center justify-center backdrop-blur-2xl z-100"
  >
    <div
      data-aos="flip-right"
      data-aos-duration="700"
      class="relative w-4/5 overflow-hidden bg-center bg-no-repeat bg-cover rounded-lg shadow shadow-red-600"
      :style="{ backgroundImage: `url(${tmdbImgUrl + item.backdrop_path})` }"
    >
      <span @click="close" class="absolute cursor-pointer top-2 right-4">
        <svg
          class="text-red-600 fill-current"
          width="24"
          viewBox="0 0 24 24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
          ></path></svg
      ></span>
      <div class="h-full p-5 md:p-10 bg-black/80">
        <template v-if="loading">
          <GlobalLoader />
        </template>
        <template v-else>
          <h2 class="mb-5 text-3xl font-bold">
            {{ item.title }} ({{
              new Date(item.release_date).toLocaleDateString('id-ID', { year: 'numeric' })
            }})
          </h2>
          <div class="flex flex-col justify-center gap-2 md:gap-10 md:flex-row">
            <img
              :src="tmdbImgUrl + item.poster_path"
              :alt="item.title"
              class="rounded-lg shadow shadow-red-600 w-[200px] h-[250px]"
              loading="lazy"
            />
            <div class="flex flex-col gap-2">
              <p
                class="first-letter:text-4xl first-letter:text-red-600 first-letter:font-bold first-letter:mr-1"
              >
                {{ item.overview }}
              </p>
              <span class="flex gap-3 my-3">
                <template v-for="i in item.genres" :key="i">
                  <p
                    v-text="i.name"
                    class="px-2 py-1 text-red-600 bg-black border border-red-600 rounded"
                  ></p>
                </template>
              </span>
              <VoteAverage :value="item.vote_average" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import VoteAverage from '../Cards/VoteAverage.vue'
import GlobalLoader from '../Loaders/GlobalLoader.vue'

const props = defineProps({
  id: {},
})
const emit = defineEmits(['close'])
const close = () => emit('close')

const tmdbImgUrl = import.meta.env.VITE_API_IMG_URL

let item = ref({})
let loading = ref(true)

const getDetail = async () => {
  try {
    const apiUrl = `${import.meta.env.VITE_API_URL}/movie/${props.id}?language=en-US`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_API_TOKEN,
      },
    }
    const res = await fetch(apiUrl, options)
    const json = await res.json()

    console.log(json)
    return json
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  item.value = await getDetail()
})
</script>
