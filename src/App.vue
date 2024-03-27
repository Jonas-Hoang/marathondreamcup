<template>
  <Header />
  <BannerVid />
  <EventE />
  <PurposeJ />
</template>

<script>
import Header from "./components/Header/index";
import BannerVid from "./components/Banner/index";
import EventE from "./components/Event/index";
import PurposeJ from "./components/Purpose/index";

export default {
  name: "App",
  components: {
    Header,
    BannerVid,
    EventE,
    PurposeJ,
  },
};
</script>

<style lang="scss" scoped src="../assets/css/main.scss"></style>
