<template>
  <header class="bg-gray-800 text-gray-100">
    <div class="container p-4 flex justify-between items-center">
      <img
        src="../../../assets/images/logo_RDC2024_page.png"
        alt="Logo"
        class="h-[100px]"
      />

      <!-- Mobile Menu Button -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="lg:hidden">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <!-- Navigation Links -->
      <nav
        :class="{ flex: isMobileMenuOpen, hidden: !isMobileMenuOpen }"
        class="flex-col flex-grow lg:flex lg:flex-row lg:items-center lg:justify-end lg"
      >
        <a href="#" class="mt-3 lg:mt-0 lg:ml-6 whitespace-nowrap">TÌM ẢNH</a>
        <a href="#" class="mt-3 lg:mt-0 lg:ml-6 whitespace-nowrap">KẾT QUẢ</a>
        <a href="#" class="mt-3 lg:mt-0 lg:ml-6 whitespace-nowrap"
          >THÔNG TIN CHUNG</a
        >
        <a href="#" class="mt-3 lg:mt-0 lg:ml-6 whitespace-nowrap"
          >QUY ĐỊNH VÀ ĐIỀU LỆ</a
        >
        <a href="#" class="mt-3 lg:mt-0 lg:ml-6 whitespace-nowrap"
          >LỊCH TRÌNH & SƠ ĐỒ</a
        >
        <a href="#" class="mt-3 lg:mt-0 lg:ml-6 whitespace-nowrap">ĐĂNG KÝ</a>
        <a href="#" class="mt-3 lg:mt-0 lg:ml-6 whitespace-nowrap">TIN TỨC</a>
        <a href="#" class="mt-3 lg:mt-0 lg:ml-6 whitespace-nowrap">ĐỐI TÁC</a>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="lg:hidden">
      <div class="container mx-auto p-4 flex flex-col">
        <!-- Add mobile menu content here -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped src="./index.vue.scss"></style>
