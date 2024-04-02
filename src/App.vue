<template>
  <HomeView />
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const HomeView = defineAsyncComponent(() => import("./views/home-view.vue"));
</script>

<style lang="scss" scoped src="../assets/css/main.scss"></style>
