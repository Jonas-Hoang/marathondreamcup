<template>
  <nav class="flex flex-wrap items-center justify-between px-2 py-3 bg-[#3055A6] text-gray-100 sticky top-0 z-50">
    <div class="w-[100%] px-4 mx-auto flex flex-wrap items-center justify-between">
      <div>
        <button @click=" isMobileMenuOpen=!isMobileMenuOpen" class="lg:hidden">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div class=" relative flex justify-between lg:w-auto  pr-4 lg:static lg:block lg:justify-start">
        <a href="/" @click="scrollTo"><img src="../../assets/images/logo_RDC2024.png" alt="logo" class="h-[60px]" /></a>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <nav :class="{ 'flex': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }" class="flex-col flex-grow lg:flex lg:flex-row lg:items-center lg:justify-around">
          <template v-for="link in links" :key="link.text">
            <router-link v-if="link.type === 'router-link'" :to="{ name: link.name }" class="text-[15px] mt-3 lg:mt-0 whitespace-nowrap font-bold text-[#fdb912] hover:text-gray-100" @click="selectRouter(link)" :class="{ 'text-gray-100': selectedRouter === link.text }">
              {{ link.text }}
            </router-link>
            <a v-else :href="link.href" class="mt-3 lg:mt-0 whitespace-nowrap font-bold text-[15px] text-[#fdb912] hover:text-gray-100" @click="selectLink(link)" :class="{ 'text-gray-100': selectedLink === link.text }">
              {{ link.text }}
            </a>
          </template>
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
      <div v-if="isMobileMenuOpen" class="fixed inset-0 lg:hidden bg-black text-white">
        <div class="p-5">
          <!-- Close (X) Icon -->
          <button @click="isMobileMenuOpen = false" class="mb-5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Sidebar Links -->
          <nav>
            <template v-for="link in links" :key="link.text">
              <router-link v-if="link.type === 'router-link'" :to="{ name: link.name }" class="block mt-3" @click="isMobileMenuOpen = !isMobileMenuOpen">
                {{ link.text }}
              </router-link>
              <a v-else :href="link.href" class="block mt-3" @click="isMobileMenuOpen = !isMobileMenuOpen">
                {{ link.text }}
              </a>
            </template>
          </nav>
        </div>
      </div>
    </div>
  </nav>
  <!-- <BodyView /> -->
  <router-view />

</template>

<script>
import { ref } from "vue";
import BodyView from "./body-view.vue";
import router from "@/router";

export default {
  name: "HomeView",
  components: {
    BodyView,
  },
  setup() {
    const isMobileMenuOpen = ref(false);
    const selectedLink = ref("");
    const selectedRouter = ref("");
    const links = ref([
      { text: "GIỚI THIỆU SỰ KIỆN", href: "#about", type: "a" },
      { text: "QUY ĐỊNH VÀ ĐIỀU LỆ", href: "#term-section", type: "a" },
      { text: "LỊCH TRÌNH & SƠ ĐỒ", href: "#event-map", type: "a" },
      { text: "ĐĂNG KÝ", href: "#sign-up", type: "a" },
      { text: "TIN TỨC", href: "#news", type: "a" },
      { text: "ĐỐI TÁC", href: "#partner", type: "a" },
      { text: "TÌM ẢNH", name: "FindPicture", type: "router-link" },
      { text: "KẾT QUẢ", name: "ResultRunning", type: "router-link" },
    ]);

    const selectLink = (link) => {
      if (
        router.currentRoute.value.path === "/tim-anh" ||
        router.currentRoute.value.path === "/ket-qua"
      ) {
        selectedLink.value = link.text;
        selectedRouter.value = "";
        router.replace({ path: "/" + router.replace({ path: "/home" }) + "" });
      } else {
        selectedLink.value = link.text;
        selectedRouter.value = "";
      }
    };

    const selectRouter = (router) => {
      selectedRouter.value = router.text;
      selectedLink.value = "";
    };

    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return {
      isMobileMenuOpen,
      links,
      selectedLink,
      selectedRouter,
      selectLink,
      selectRouter,
      scrollTop,
    };
  },
};
</script>


<style lang="scss" scoped src="../../assets/css/main.scss"></style>
