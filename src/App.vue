<template>
  <HomeView />
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const HomeView = defineAsyncComponent(() => import("./views/home-view.vue"));
</script>

<script>
import { useMeta } from "vue-meta";

export default {
  setup() {
    useMeta({
      title: "Running Diamond Cup",
      htmlAttrs: { lang: "en", amp: true },
    });
  },
};
</script>

<style lang="scss" scoped src="../assets/css/main.scss"></style>
