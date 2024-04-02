<template>
  <Header />
  <BannerVid />
  <AdterviseSection />
  <PurposeJ />
  <SignUp />
  <EventMap />
  <TermSection />
  <RegisterSection />

</template>

<script>
import Header from "./components/HeaderBar/index.vue";
import BannerVid from "./components/BannerSection/index.vue";
import AdterviseSection from "./components/AdvertiseSection/index.vue";
import PurposeJ from "./components/PurposeJoin/index.vue";
import SignUp from "./components/SignUp/index.vue";
import EventMap from "./components/EventMap/index.vue";
import TermSection from "./components/TermSection/index.vue";
import RegisterSection from "./components/RegisterSection/index.vue";

export default {
  name: "App",
  components: {
    Header,
    BannerVid,
    AdterviseSection,
    PurposeJ,
    SignUp,
    EventMap,
    TermSection,
    RegisterSection,
  },
};
</script>

<style lang="scss" scoped src="../assets/css/main.scss"></style>
