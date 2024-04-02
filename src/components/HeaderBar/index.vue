<template>
  <nav class="flex flex-wrap items-center justify-between px-2 py-3 pb-[20px] bg-[#3055A6] text-gray-100 sticky top-0 z-50">
    <div class="w-[100%] h-[70px] px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class=" relative flex justify-between lg:w-auto  pr-4 lg:static lg:block lg:justify-start">
        <a href="#"><img src="../../../assets/images/logo_RDC2024.png" alt="Logo" class="h-[80px]" /></a>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <nav :class="{ 'flex': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }" class="flex-col flex-grow lg:flex lg:flex-row lg:items-center lg:justify-around">
          <a v-for="link in links" :key="link.text" :href="link.href" class="mt-3 lg:mt-0 whitespace-nowrap font-bold text-[#fdb912] hover:text-gray-100" @click="selectLink(link)" :class="{ 'text-gray-100': selectedLink === link.text }">
            {{ link.text }}
          </a>
        </nav>
      </div>
      <div>
        <button @click=" isMobileMenuOpen=!isMobileMenuOpen" class="lg:hidden">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="lg:hidden">
        <div class="container mx-auto p-4 flex flex-col">
          <!-- Add mobile menu content here -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const slides = ref([
  { id: "1", url: "../../../assets/images/roapmap.jpg™ }" },
  { id: "2", url: "../../../assets/images/roapmap.jpg™ }" },
  { id: "3", url: "../../../assets/images/roapmap.jpg™ }" },
]);
</script>

