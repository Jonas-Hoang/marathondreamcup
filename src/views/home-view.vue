<template>
  <nav class="flex flex-wrap items-center justify-between px-2 py-3 bg-[#3055A6] text-gray-100 sticky top-0 z-50">
    <div class="w-[100%] px-4 mx-auto flex flex-wrap items-center justify-between">
      <div>
        <button @click=" isMobileMenuOpen=!isMobileMenuOpen" class="lg:hidden" aria-label="Toggle menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M3 12h18M3 18h18"></path>
          </svg>
        </button>
      </div>
      <div class="logo_main relative flex justify-between lg:w-auto  pr-4 lg:static lg:block lg:justify-start">
        <a href="/" @click="scrollTo"><img src="../../assets/images/logo_RDC2024.png" alt="logo" class="h-[60px]" /></a>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <nav :class="{ 'flex': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }" class="flex-col flex-grow lg:flex lg:flex-row lg:items-center lg:justify-around">
          <template v-for="link in links" :key="link.text">
            <router-link v-if="link.type === 'router-link'" :to="{ name: link.name }" class="text-[15px] mt-3 lg:mt-0 whitespace-nowrap font-bold text-[#fdb912] hover:text-gray-100" @click="selectRouter(link)" :class="{ 'text-gray-100': selectedRouter === link.text }">
              {{ link.text }}
            </router-link>
            <a v-else :href="link.href" class="mt-3 lg:mt-0 whitespace-nowrap font-bold text-[15px] text-[#fdb912] hover:text-gray-100" @click.prevent="scrollToSection(link)" :class="{ 'text-gray-100': selectedLink === link.text }">
              {{ link.text }}
            </a>
          </template>
        </nav>
      </div>
      <div>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <!-- <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> -->
        </svg>
      </div>
      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="fixed inset-0 lg:hidden bg-black text-white" style="background-color: rgba(0, 0, 0, .5);">
        <div class="w-2/3 h-full bg-black" data-aos="fade-right" data-aos-duration="400" data-aos-delay='0'>
          <nav class="menu-sidebar pt-[25px]">
            <template v-for="link in links" :key="link.text">
              <router-link v-if="link.type === 'router-link'" :to="{ name: link.name }" class="block text-[13px] font-[500] py-[15px] pl-[20px]" @click="isMobileMenuOpen = !isMobileMenuOpen">
                {{ link.text }}
              </router-link>
              <a v-else :href="link.href" class="block text-[13px] font-[500] py-[15px] pl-[20px]" @click="isMobileMenuOpen = !isMobileMenuOpen" @click.prevent="scrollToSection(link)">
                {{ link.text }}
              </a>
            </template>
          </nav>
        </div>
        <!-- Close (X) Icon -->
        <button @click="isMobileMenuOpen = false" class="mb-5 absolute right-[10px] top-[10px]" aria-label="Close menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
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

    const selectLink = (link) => {};

    const selectRouter = (router) => {
      selectedRouter.value = router.text;
      selectedLink.value = "";
    };

    const scrollTop = () => {
      window.scrollTo({ top: 80, behavior: "smooth" });
    };

    const closeMenu = () => {
      if (isMobileMenuOpen.value === true) isMobileMenuOpen.value = false;
    };

    const scrollToSection = (link) => {
      // Assuming link.href is an ID selector (e.g., "#about")
      const sectionId = link.href.substring(1); // Remove the '#' from the href
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const topPosition =
          sectionElement.getBoundingClientRect().top + window.pageYOffset - 84;
        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
      }
      if (
        router.currentRoute.value.path === "/tim-anh" ||
        router.currentRoute.value.path === "/ket-qua"
      ) {
        selectedLink.value = link.text;
        selectedRouter.value = "";
        router.replace({ path: "/" + router.replace({ path: "/" }) + "" });
      } else {
        selectedLink.value = link.text;
        selectedRouter.value = "";
      }
    };

    return {
      isMobileMenuOpen,
      links,
      selectedLink,
      selectedRouter,
      closeMenu,
      selectLink,
      selectRouter,
      scrollTop,
      scrollToSection,
    };
  },
};
</script>


<style lang="scss" scoped src="../../assets/css/main.scss"></style>

<style lang="scss" scoped>
.menu-sidebar {
  a {
    border-bottom: 1px #3b3a3a solid;
    color: hsla(0, 0%, 100%, 0.8);
  }
}
</style>
