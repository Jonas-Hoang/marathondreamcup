<template>
  <BannerVid />
  <AdvertiseSection />
  <PurposeJoin />
  <SignUp />
  <EventMap />
  <TermSection />
  <RegisterSection />
  <PrizeSection />

</template>

<script setup>
import { defineAsyncComponent } from "vue";

const BannerVid = defineAsyncComponent(() =>
  import("@/components/BannerSection/index.vue")
);
const AdvertiseSection = defineAsyncComponent(() =>
  import("@/components/AdvertiseSection/index.vue")
);
const PurposeJoin = defineAsyncComponent(() =>
  import("@/components/PurposeJoin/index.vue")
);
const SignUp = defineAsyncComponent(() =>
  import("@/components/SignUp/index.vue")
);
const EventMap = defineAsyncComponent(() =>
  import("@/components/EventMap/index.vue")
);
const TermSection = defineAsyncComponent(() =>
  import("@/components/TermSection/index.vue")
);
const RegisterSection = defineAsyncComponent(() =>
  import("@/components/RegisterSection/index.vue")
);
const PrizeSection = defineAsyncComponent(() =>
  import("@/components/Prize/index.vue")
);
</script>

<style lang="scss" scoped src="../../assets/css/main.scss"></style>
