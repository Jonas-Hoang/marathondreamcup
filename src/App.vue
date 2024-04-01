<template>
  <Header />
  <BannerVid />
  <EventE />
  <PurposeJ />
  <SignUp />
  <EventMap />
</template>

<script>
import Header from "./components/Header/index";
import BannerVid from "./components/Banner/index";
import EventE from "./components/Event/index";
import PurposeJ from "./components/Purpose/index";
import SignUp from "./components/SignUp/index.vue";
import EventMap from "./components/EventMap/index.vue";

export default {
  name: "App",
  components: {
    Header,
    BannerVid,
    EventE,
    PurposeJ,
    SignUp,
    EventMap,
  },
};
</script>

<style lang="scss" scoped src="../assets/css/main.scss"></style>
