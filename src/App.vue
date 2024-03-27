<template>
  <Header />
  <BannerVid />
  <EventE />
</template>

<script>
import Header from "./components/Header/index.vue";
import BannerVid from "./components/Banner/index.vue";
import EventE from "./components/Event/index.vue";

export default {
  name: "App",
  components: {
    Header,
    BannerVid,
    EventE,
  },
};
</script>

<style lang="scss" scoped src="../assets/css/main.scss"></style>
