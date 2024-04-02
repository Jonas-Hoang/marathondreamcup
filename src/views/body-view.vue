<template>
  <BannerVid />
  <AdterviseSection />
  <PurposeJ />
  <SignUp />
  <EventMap />
  <TermSection />
  <RegisterSection />
  <PrizeSection />

</template>

<script>
import BannerVid from "@/components/BannerSection/index.vue";
import AdterviseSection from "@/components/AdvertiseSection/index.vue";
import PurposeJ from "@/components/PurposeJoin/index.vue";
import SignUp from "@/components/SignUp/index.vue";
import EventMap from "@/components/EventMap/index.vue";
import TermSection from "@/components/TermSection/index.vue";
import RegisterSection from "@/components/RegisterSection/index.vue";
import PrizeSection from "@/components/Prize/index.vue";

export default {
  name: "BodyView",
  components: {
    BannerVid,
    AdterviseSection,
    PurposeJ,
    SignUp,
    EventMap,
    TermSection,
    RegisterSection,
    PrizeSection,
  },
};
</script>

<style lang="scss" scoped src="../../assets/css/main.scss"></style>
