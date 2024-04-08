<template>
  <div class="bg-gray-800 text-gray-100 relative" id="event-map">
    <div class="bg section-bg fill bg-fill bg-loaded">
      <div class="section-bg-overlay absolute fill">
        <div class="content">
          <div class="row">
            <div class="col" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200">
              <h2>Chương trình</h2>
              <img src="../../../assets/images/lich_trinh.jpeg" alt="lich trinh su kien" />
            </div>
            <div class="devider"></div>
            <div v-if="!this.$isMobile()" class="col" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200">
              <h2>Sơ đồ Đường chạy</h2>
              <img src="../../../assets/images/roadmap.jpg" data-src="../../../assets/images/roadmap.jpg" alt="so do duong chay" />
            </div>
            <div v-if="this.$isMobile()" class="col" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
              <h2>Sơ đồ Đường chạy</h2>
              <img src="../../../assets/images/roadmap.jpg" data-src="../../../assets/images/roadmap.jpg" alt="so do duong chay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventMap",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped src="./index.vue.scss"></style>
