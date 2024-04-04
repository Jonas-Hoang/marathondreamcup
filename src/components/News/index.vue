<template>
  <div class="bg-gray-800 text-gray-100 relative">
    <div class="bg section-bg fill bg-fill bg-loaded">
      <div class="section-bg-overlay absolute fill">
        <div class="content">
          <div class="row">
            <h1>Tin Tức - Sự Kiện</h1>
            <Carousel
              :items-to-show="3"
              snapAlign="start"
              :wrap-around="true"
              :autoplay="5000"
              :transition="1000"
            >
              <Slide v-for="slide in slides" :key="slide.id">
                <div
                  class="col"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="200"
                >
                  <a :href="slide.url" target="_blank"
                    ><img :src="slide.img" alt="so do duong chay"
                  /></a>
                  <a :href="slide.url" target="_blank"
                    ><h2>{{ slide.title }}</h2></a
                  >
                  <p>
                    {{ slide.content }}
                  </p>
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
import news1 from "../../../assets/images/news/news1.jpeg";
import news2 from "../../../assets/images/news/news2.jpeg";
import news3 from "../../../assets/images/news/news3.jpeg";
import news4 from "../../../assets/images/news/news4.jpeg";

let id = 0;
const slides = [
  {
    id: id++,
    title:
      "Cô gái truyền cảm hứng Phạm Thị Hồng Lệ làm đại sứ giải marathon Dream Cup 2023",
    content:
      "Giải chạy marathon Dream Cup 2023 đang nhận được sự quan tâm từ những ai yêu thích bộ môn điền kinh, nhất là khi VĐV cự ly 10 km Phạm Thị Hồng Lệ từng đoạt HCV SEA Games 31 được chọn làm đại sứ giải đấu.",
    img: news1,
    url: "https://thanhnien.vn/nu-hoang-sea-games-pham-thi-hong-le-lam-dai-su-giai-marathon-dream-cup-2023-1852306291024291.htm#",
  },
  {
    id: id++,
    title:
      "Cung đường đẹp nhất TP Hồ Chí Minh trở thành đường chạy cho Runners của Marathon Dream Cup 2023",
    content:
      "VTV.vn - Marathon Dream Cup 2023 nhằm thúc đẩy tinh thần thể dục thể thao rèn luyện thể chất lẫn của cộng đồng với thông điệp “Reach Your Dream - Chinh phục ước mơ”.",
    img: news2,
    url: "https://vtv.vn/the-thao/cung-duong-dep-nhat-tp-ho-chi-minh-tro-thanh-duong-chay-cho-runners-cua-marathon-dream-cup-2023-20230623095257109.htm",
  },
  {
    id: id++,
    title: 'Giải Marathon thiện nguyện với tiền thưởng "khủng"',
    content:
      "(NLĐO) - Hội Liên hiệp Thanh niên Việt Nam TP HCM phối hợp với Diamond Entertainment tổ chức Giải Marathon Dream Cup 2023 từ ngày 30-7 nhằm giúp đỡ những hoàn cảnh khó khăn",
    img: news3,
    url: "https://nld.com.vn/the-thao/giai-marathon-thien-nguyen-voi-tien-thuong-khung-20230623132610498.htm",
  },
  {
    id: id++,
    title: "Ca sĩ Đức Tuấn tham gia giải marathon cùng Hồ Đức Vĩnh",
    content:
      "Hồ Đức Vĩnh tiết lộ ca sĩ Đức Tuấn sẽ góp mặt trong giải marathon do anh tổ chức. Đây là một dự án tâm huyết của nam người mẫu nhằm nâng cao tinh thần rèn luyện thể thao của mọi người.",
    img: news4,
    url: "https://thanhnien.vn/ca-si-duc-tuan-tham-gia-giai-marathon-cung-ho-duc-vinh-185230623101519483.htm",
  },
];
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
