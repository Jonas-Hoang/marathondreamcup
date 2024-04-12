<template>
  <div class="bg-[#1D1D1D] w-auto section-content py-[60px] relative" id="purpose">
    <div class="flex items-center flex-col ">
      <div class="col ml-auto mr-0">
        <h2 v-if="!$isMobile()" class="mb-[30px] italic text-[#f1f1f1] text-[36px] font-[600]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay='500'>
          <span>MỤC ĐÍCH <br /><span style="color: #d6b571">RUNNING DIAMOND CUP</span></span>
        </h2>
        <h2 v-if="$isMobile()" class="mb-[30px] text-center italic text-[#f1f1f1] text-[36px] font-[600]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay='500'>
          <span>MỤC ĐÍCH <br /><span style="color: #d6b571">RUNNING DIAMOND CUP</span></span>
        </h2>
        <div class="group-content flex lg:flex-row md:flex-col justify-between items-center">
          <div class="tabbed-content mr-6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay='500'>
            <ul class="nav" role="tablist">
              <li v-for="link in links" :key="link.id" :class="{ 'active': activeLinkId === link.id, 'inactive': activeLinkId !== link.id }" class="tab has-icon p-2.5 border-l-4 border-indigo-500" @click="setActiveLink(link.id)" role="tab" :aria-selected="activeLinkId === link.id" :tabindex="activeLinkId === link.id ? 0 : -1">
                <span class="text-white text-[22px] font-[500]" role="button">{{ link.title }}</span>
                <p class="txt-content text-[16px] text-[#8d8d8d] font-[300]">{{ link.description }}</p>
              </li>
            </ul>
          </div>
          <div v-if="!$isMobile()" class="rounded-[15px]" data-aos="fade-left" data-aos-duration="1000" data-aos-delay='500'>
            <Carousel :modelValue="currentSlideIndex" @update:modelValue="handleSlideChange" @init="handleInit" @slide-start="handleSlideStart" :items-to-show="1" snapAlign="center" :wrap-around="false" :autoplay="7000" :transition="1000">
              <Slide v-for="link in links" :key="link.id" class="draggable">
                <div class="rounded-[15px]" data-aos="fade-left" data-aos-duration="1000" data-aos-delay='500'>
                  <img :src="link.imageUrl" alt="so do duong chay" />
                </div>
              </Slide>
            </Carousel>
          </div>
          <div v-if="$isMobile()" class="rounded-[15px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay='500'>
            <Carousel :modelValue="currentSlideIndex" @update:modelValue="handleSlideChange" @init="handleInit" @slide-start="handleSlideStart" :items-to-show="1" snapAlign="center" :wrap-around="false" :autoplay="7000" :transition="1000">
              <Slide v-for="link in links" :key="link.id" class="draggable">
                <div class="rounded-[15px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay='500'>
                  <img :src="link.imageUrl" alt="so do duong chay" />
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "PurposeJ",
  props: {
    msg: String,
  },
};
</script>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import picture1 from "../../../assets/images/picture1.jpeg";
import picture2 from "../../../assets/images/picture2.jpg";
import picture3 from "../../../assets/images/picture3.jpeg";
import picture4 from "../../../assets/images/picture4.jpeg";

let id = 0;
const activeLinkId = ref(null);
const currentSlideIndex = ref(0);

const links = ref([
  {
    id: id++,
    title: "Gây quỹ từ thiện",
    description:
      "Là dịp để các runner tham gia chiến dịch 'chạy vì cộng đồng' thông qua hoạt động gây quỹ từ thiện",
    imageUrl: picture1,
  },
  {
    id: id++,
    title: "Chinh phục giới hạn của bản thân",
    description:
      "Khơi dậy bản lĩnh và khát khao chinh phục, bứt phá giới hạn bản thân. Tận hưởng niềm vui sướng mỗi khi bứt phá kỷ lục của bản thân",
    imageUrl: picture2,
  },
  {
    id: id++,
    title: "Trải nghiệm thể thao thú vị",
    description:
      "Trải nghiệm thể thao thú vị, bởi không khí nào nhiệt và khung cảnh đặc sắc trên đường chạy. Đừng quên tận hưởng những nét đặc sắc của các cung đường chạy.",
    imageUrl: picture3,
  },
  {
    id: id++,
    title: "Giải thưởng vinh danh cao quý",
    description:
      "Giải thưởng của ban tổ chức chỉ là phần nhỏ so với giải thưởng của chính mình, là sự nổ lực không ngại vượt khó.",
    imageUrl: picture4,
  },
]);

const activeLink = ref(links.value[0]);

const setActiveLink = (id) => {
  const linkIndex = links.value.findIndex((link) => link.id === id);
  if (linkIndex !== -1) {
    currentSlideIndex.value = linkIndex;
    activeLinkId.value = id;
    activeLink.value = links.value[linkIndex];
  }
};

const handleSlideChange = (newIndex) => {
  currentSlideIndex.value = newIndex;
  setActiveLink(links.value[newIndex].id);
};

const handleInit = () => {
  // console.log("created");
};

const handleSlideStart = (data) => {
  activeLinkId.value = data.slidingToIndex;
};

setActiveLink(0);
</script>


<style lang="scss" scoped src="./index.vue.scss"></style>
