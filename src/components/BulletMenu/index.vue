<template>
  <div class="scroll-to-bullets hide-for-medium">
    <a v-for="(section, index) in sections" :key="index" :href="section.href" @click="scrollToSection" :data-title="section.title" class="tooltipstered">
      <el-tooltip :content="section.title" placement="top"></el-tooltip>
    </a>
  </div>
</template>

<script setup>
import { ElTooltip } from "element-plus";

import { ref, onMounted } from "vue";

const sections = ref([
  { title: "Thông tin chung", href: "#about" },
  { title: "Lịch trình & sơ đồ", href: "#event-map" },
  { title: "Quy định và điều lệ", href: "#term-section" },
  { title: "Đăng ký", href: "#sign-up" },
  { title: "Tin tức", href: "#tin-tuc" },
  { title: "Đối tác", href: "#doi-tac" },
]);

const scrollToSection = (event) => {
  // Implement your scrollToSection logic here
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Logic when a section is in view
        }
      });
    },

    { threshold: 0.5 }
  );

  // Assuming you have a way to reference the actual DOM elements
  // sectionRefs.value.forEach((section) => {
  //   observer.observe(section);
  // });
});
</script>

<style lang="scss" scoped src="./index.vue.scss"></style>
