<template>
  <div class="bg-gray-800 text-gray-100 relative">
    <div class="bg section-bg fill bg-fill bg-loaded">
      <div class="section-bg-overlay absolute fill">
        <div class="content">
          <div class="row">
            <Carousel :items-to-show="2" :wrap-around="true" :autoplay="3000" :transition="1000" v-model="currentSlide">
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
import imgPrize5 from "../../../assets/images/prize5.jpeg";
import imgPrize10 from "../../../assets/images/prize10.jpeg";
import imgExtraPrize from "../../../assets/images/extra_prize.jpeg";

let id = 0;
const slides = [
  {
    id: id++,
    title: "Giải thưởng\ncự ly 5km",
    url: imgPrize5,
  },
  {
    id: id++,
    title: "Giải thưởng\ncự ly 10km",
    url: imgPrize10,
  },
  {
    id: id++,
    title: "Giải phụ",
    url: imgExtraPrize,
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
