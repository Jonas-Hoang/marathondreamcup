<template>
  <div class="bg-gray-800 text-gray-100 relative">
    <div class="bg section-bg fill ">
      <div class="section-bg-overlay absolute fill">
        <div class="content">
          <div class="row">
            <Carousel :v-bind="settings" :breakpoints="breakpoints">
              <Slide v-for="slide in slides" :key="slide.id">
                <div class="col" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200">
                  <h2>{{ slide.title }}</h2>
                  <img :src="slide.url" alt="so do duong chay" />
                </div>
              </Slide>
              <template #addons>
                <!-- <Navigation /> -->
                <!-- <Pagination /> -->
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import map5 from "../../../assets/images/map5km.jpeg";
import map10 from "../../../assets/images/map10km.jpeg";
import schedule from "../../../assets/images/schedule.jpeg";

const settings = ref({
  itemsToShow: 2,
  snapAlign: "start",
  wrapAround: true,
  autoplay: 5000,
  transition: 1000,
});

const breakpoints = ref({
  // 300px and up
  300: {
    itemsToShow: 1,
    snapAlign: "center",
    wrapAround: true,
    autoplay: 5000,
    transition: 1000,
  },
  1000: {
    itemsToShow: 2,
    snapAlign: "start",
    wrapAround: true,
    autoplay: 5000,
    transition: 1000,
  },
});

let id = 0;
const slides = [
  {
    id: id++,
    title: "Chương trình",
    url: schedule,
  },
  {
    id: id++,
    title: "Sơ đồ đường chạy 5km",
    url: map5,
  },
  {
    id: id++,
    title: "Sơ đồ đường chạy 10km",
    url: map10,
  },
];
</script>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "PrizeSection",
  props: {
    msg: String,
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style lang="scss" scoped src="./index.vue.scss"></style>
