<template>
  <p
    v-text="new Date().toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })"
    data-aos="fade-down"
    data-aos-delay="1000"
    class="absolute p-3 font-semibold transition duration-700 ease-in-out bg-red-700 rounded cursor-default select-none top-7 hover:rotate-5 hover:scale-105 ring-1 ring-red-700 hover:ring-2"
  ></p>
</template>
