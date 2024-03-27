<template>
  <Header />
  <BannerVid />
  <EventE />
  <EventMap />
</template>

<script>
import Header from "./components/Header/index.vue";
import BannerVid from "./components/Banner/index.vue";
import EventE from "./components/Event/index.vue";
import EventMap from "./components/EventMap/index.vue";

export default {
  name: "App",
  components: {
    Header,
    BannerVid,
    EventE,
    EventMap,
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
