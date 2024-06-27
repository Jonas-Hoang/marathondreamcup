<template>
  <div class="bg-gray-800 text-gray-100 relative">
    <div class="bg section-bg fill ">
      <div class="section-bg-overlay absolute fill">
        <div class="content">
          <div class="row">
            <h1 class="marathon_dream_cup">Đối tác - Nhà tài trợ</h1>
            <Carousel v-bind="settings" :breakpoints="breakpoints">
              <Slide v-for="slide in slides" :key="slide.id" class="draggable">
                <div class="col" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200">
                  <div @click.prevent="handleClick(slide.url)" @mousedown="startDrag" @mousemove="whileDragging" @mouseup="stopDrag">
                    <img v-lazy="slide.img" alt="so do duong chay" />
                  </div>
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
import { ref, onUnmounted } from "vue";

import bnsc from "../../../assets/images/partners/bnsc.png";
import cellar from "../../../assets/images/partners/cellar.png";
import cellar2 from "../../../assets/images/partners/cellar2.png";
import ewh from "../../../assets/images/partners/ewh.jpg";
import finifer from "../../../assets/images/partners/finifer.png";
import hgp from "../../../assets/images/partners/hgp.png";
import jeep from "../../../assets/images/partners/jeep.jpg";
import jess from "../../../assets/images/partners/jess.png";
import tanphat from "../../../assets/images/partners/tanphat.jpg";
import walla from "../../../assets/images/partners/walla.png";
import APOCALYPSE from "../../../assets/images/partners/APOCALYPSE.jpg";
import citadines from "../../../assets/images/partners/citadines.jpg";
import cochinsang from "../../../assets/images/partners/cochinsang.jpg";
import cochinzen from "../../../assets/images/partners/cochinzen.jpg";
import curves from "../../../assets/images/partners/curves.png";
import dreamsport from "../../../assets/images/partners/dreamsport.png";
import faifo from "../../../assets/images/partners/faifo.png";
import fit365 from "../../../assets/images/partners/fit365.png";
import haian from "../../../assets/images/partners/haian.png";
import hinthair from "../../../assets/images/partners/hinthair.jpg";
import Intercontiental from "../../../assets/images/partners/Intercontiental.png";
import karakingdom from "../../../assets/images/partners/kara-kingdom.png";
import sheraton from "../../../assets/images/partners/sheraton.png";
import soispa from "../../../assets/images/partners/soispa.png";
import ttc from "../../../assets/images/partners/ttc.jpg";
import arth from "../../../assets/images/partners/arth.jpg";
import asanoha from "../../../assets/images/partners/asanoha.jpg";
import barcodes from "../../../assets/images/partners/barcodes.png";
import bastahiro from "../../../assets/images/partners/bastahiro.jpg";
import cajun from "../../../assets/images/partners/cajun.png";
import chay from "../../../assets/images/partners/chay.png";
import cheerhouse from "../../../assets/images/partners/cheerhouse.png";
import co from "../../../assets/images/partners/co.png";
import diamondloung from "../../../assets/images/partners/diamondloung.jpg";
import ibuki from "../../../assets/images/partners/ibuki.png";
import ikugai from "../../../assets/images/partners/ikugai.jpg";
import laang from "../../../assets/images/partners/laang.jpg";
import lai from "../../../assets/images/partners/lai.jpg";
import lua from "../../../assets/images/partners/lua.jpg";
import lux68 from "../../../assets/images/partners/lux68.png";
import maquan from "../../../assets/images/partners/maquan.jpg";
import qbg from "../../../assets/images/partners/qbg.png";
import qui from "../../../assets/images/partners/qui.jpg";
import ros from "../../../assets/images/partners/ros.jpg";
import son from "../../../assets/images/partners/son.png";
import towa from "../../../assets/images/partners/towa.jpg";
import wann from "../../../assets/images/partners/wann.png";

let id = 0;
const hasMoved = ref(false);
const isDragging = ref(false);
const dragStartX = ref(0);

// :items-to-show="5"
// snapAlign="start"
// :wrap-around="true"
// :autoplay="2000"
// :transition="1000"
const settings = ref({
  itemsToShow: 5,
  snapAlign: "start",
  wrapAround: true,
  autoplay: 5000,
  transition: 1000,
});

const breakpoints = ref({
  // 300px and up
  300: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  // 600px and up
  600: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  // 800px and up
  800: {
    itemsToShow: 4,
    snapAlign: "start",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: "start",
  },
});

const slides = [
  {
    url: "#",
    img: bnsc,
  },
  {
    url: "#",
    img: cellar,
  },
  {
    url: "#",
    img: cellar2,
  },
  {
    url: "#",
    img: ewh,
  },
  {
    url: "#",
    img: finifer,
  },
  {
    url: "#",
    img: hgp,
  },
  {
    url: "#",
    img: jeep,
  },
  {
    url: "#",
    img: jess,
  },
  {
    url: "#",
    img: tanphat,
  },
  {
    url: "#",
    img: walla,
  },
  {
    url: "#",
    img: APOCALYPSE,
  },
  {
    url: "#",
    img: citadines,
  },
  {
    url: "#",
    img: cochinsang,
  },
  {
    url: "#",
    img: cochinzen,
  },
  {
    url: "#",
    img: curves,
  },
  {
    url: "#",
    img: dreamsport,
  },
  {
    url: "#",
    img: faifo,
  },
  {
    url: "#",
    img: fit365,
  },
  {
    url: "#",
    img: haian,
  },
  {
    url: "#",
    img: hinthair,
  },
  {
    url: "#",
    img: Intercontiental,
  },
  {
    url: "#",
    img: karakingdom,
  },
  {
    url: "#",
    img: sheraton,
  },
  {
    url: "#",
    img: soispa,
  },
  {
    url: "#",
    img: ttc,
  },
  {
    url: "#",
    img: arth,
  },
  {
    url: "#",
    img: asanoha,
  },
  {
    url: "#",
    img: barcodes,
  },
  {
    url: "#",
    img: bastahiro,
  },
  {
    url: "#",
    img: cajun,
  },
  {
    url: "#",
    img: chay,
  },
  {
    url: "#",
    img: cheerhouse,
  },
  {
    url: "#",
    img: co,
  },
  {
    url: "#",
    img: diamondloung,
  },
  {
    url: "#",
    img: ibuki,
  },
  {
    url: "#",
    img: ikugai,
  },
  {
    url: "#",
    img: laang,
  },
  {
    url: "#",
    img: lai,
  },
  {
    url: "#",
    img: lua,
  },
  {
    url: "#",
    img: lux68,
  },
  {
    url: "#",
    img: maquan,
  },
  {
    url: "#",
    img: qbg,
  },
  {
    url: "#",
    img: qui,
  },
  {
    url: "#",
    img: ros,
  },
  {
    url: "#",
    img: son,
  },
  {
    url: "#",
    img: towa,
  },
  {
    url: "#",
    img: wann,
  },
];

const startDrag = (event) => {
  isDragging.value = false; // Reset to ensure fresh drag action
  dragStartX.value = event.clientX; // Record the start position of the drag
};

const whileDragging = (event) => {
  if (!isDragging.value && Math.abs(event.clientX - dragStartX.value) > 10) {
    isDragging.value = true;
  }
};

const stopDrag = () => {
  if (isDragging.value) {
    // Perform actions upon drag end if necessary
    console.log("Drag ended");
  }
  isDragging.value = false;
};

function handleClick(link) {
  if (!isDragging.value) {
    window.open(link, "_blank");
    isDragging.value = false;
  }
}
</script>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "News",
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
