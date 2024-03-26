<template>
  <div class="banner has-hover banner1" :id="bannerId">
    <div class="banner-inner fill">
      <div class="banner-bg fill">
        <div class="bg fill bg-fill bg-loaded"></div>
        <div class="video-overlay no-click fill"></div>
        <iframe
          width="100%"
          height="100%"
          class="ux-youtube fill object-fit visible"
          src="https://www.youtube.com/embed/hE2PI74ulzI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
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
