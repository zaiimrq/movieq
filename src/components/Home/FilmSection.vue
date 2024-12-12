<script setup>
import { ref, computed } from 'vue'
import FilmCard from '../Cards/FilmCard.vue'
import LineDrawing from '../Text/Animations/LineDrawing.vue'
import FilmModal from '../Modals/FilmModal.vue'
import { vInfiniteScroll } from '@vueuse/components'

const data = ref([]) // Data asli
const searchQuery = ref('') // Query pencarian
const selectedFilm = ref(null)
const page = ref(1)
const isLoading = ref(false)
const hasMore = ref(true)

const getData = async (currentPage) => {
  if (isLoading.value || !hasMore.value) return []

  isLoading.value = true
  try {
    const url = `${import.meta.env.VITE_API_URL}/movie/now_playing?language=en-US&page=${currentPage}&adult=false`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_API_TOKEN,
      },
    }

    const response = await fetch(url, options)
    const jsonData = await response.json()

    if (jsonData.results.length === 0) {
      hasMore.value = false
    }

    isLoading.value = false
    return jsonData.results
  } catch (err) {
    console.error('Error fetching movies:', err)
    isLoading.value = false
    hasMore.value = false
    return []
  }
}

const loadMore = async () => {
  if (!hasMore.value || page.value === 4) return
  page.value++
  const newMovies = await getData(page.value)
  data.value.push(...newMovies)
}

const showModal = (film) => (selectedFilm.value = film)
const closeModal = () => (selectedFilm.value = null)

// Filtered data based on search query
const filteredData = computed(() =>
  data.value.filter((item) => item.title.toLowerCase().includes(searchQuery.value.toLowerCase())),
)

getData(1).then((initialMovies) => {
  data.value = initialMovies
})
</script>

<template>
  <div
    class="px-10 mt-3 min-h-dvh"
    v-infinite-scroll="loadMore"
    :infinite-scroll-disabled="!hasMore || isLoading"
    :infinite-scroll-distance="10"
  >
    <div class="flex flex-col items-start justify-between md:tems-end md:flex-row">
      <LineDrawing />
      <input
        v-model="searchQuery"
        class="bg-black px-4 py-3 outline-none w-full md:w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-red-600 border-red-600/50"
        name="text"
        placeholder="Search movies..."
        type="search"
      />
    </div>

    <div v-if="filteredData.length === 0" class="mt-5 text-center text-white">
      <p class="text-xl">No movies found. Try another search term!</p>
    </div>
    <div v-else class="grid grid-cols-2 gap-5 mt-5 md:grid-cols-3 lg:grid-cols-5">
      <template v-for="(item, index) in filteredData" :key="`${item.id}-${index}`">
        <FilmCard :item="item" @click="showModal(item)" @dblclick="showModal(item)" />
      </template>
    </div>

    <!-- Modal -->
    <FilmModal v-if="selectedFilm !== null" :id="selectedFilm.id" @close="closeModal" />
  </div>
</template>
