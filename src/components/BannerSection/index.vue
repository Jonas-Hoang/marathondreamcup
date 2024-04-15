<template>
  <div class="banner has-hover banner1" :id="bannerId">
    <div class="banner-inner fill">
      <div class="banner-bg fill">
        <div class="bg fill "></div>
        <div class="video-overlay no-click fill"></div>
        <!-- <iframe width="100%" height="100%" class="ux-youtube fill object-fit visible" src="https://www.youtube.com/embed/hE2PI74ulzI?autoplay=1&cc_load_policy=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
        <iframe width="100%" height="100%" class="ux-youtube fill object-fit visible" src="https://www.youtube.com/embed/hE2PI74ulzI?autoplay=1&start=0&mute=1&controls=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="banner-layers container">
        <div class="fill banner-link"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerVideo",
  props: {
    bannerId: {
      type: String,
      default: "banner-1819239240",
    },
    iframeId: {
      type: String,
      default: "ytplayer-349",
    },
    youtubeVideoId: {
      type: String,
      default: "hE2PI74ulzI",
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped src="./index.vue.scss"></style>
