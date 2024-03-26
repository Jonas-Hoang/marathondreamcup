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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
