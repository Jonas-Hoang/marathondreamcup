<template>
  <div class="bg-gray-800 text-gray-100 relative">
    <div class="bg section-bg fill bg-fill bg-loaded">
      <div class="section-bg-overlay absolute fill"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventE",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped src="./index.vue.scss"></style>
