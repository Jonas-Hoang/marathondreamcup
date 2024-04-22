<template>
  <div class="bg-gray-800 text-gray-100 relative">
    <div class="bg section-bg fill">
      <div class="section-bg-overlay absolute fill">
        <div class="content">
          <div class="row">
            <h1 class="marathon_dream_cup !text-[#2d63f7]">
              Tin Tức - Sự Kiện
            </h1>
            <Carousel v-bind="settings" :breakpoints="breakpoints">
              <Slide v-for="slide in slides" :key="slide.id" class="draggable">
                <div class="col" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200">
                  <div @click.prevent="handleClick(slide.url)" @mousedown="startDrag" @mousemove="whileDragging" @mouseup="stopDrag">
                    <img :src="slide.img" alt="so do duong chay" />
                  </div>
                  <div @click.prevent="handleClick(slide.url)" @mousedown="startDrag" @mousemove="whileDragging" @mouseup="stopDrag">
                    <h2 class="marathon_dream_cup_text">{{ slide.title }}</h2>
                  </div>
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
import { ref, onUnmounted } from "vue";

import news1 from "../../../assets/images/news/news1.jpeg";
import news2 from "../../../assets/images/news/news2.jpeg";
import news3 from "../../../assets/images/news/news3.jpeg";
import news4 from "../../../assets/images/news/news4.jpeg";
import news5 from "../../../assets/images/news/news5.jpeg";
import news6 from "../../../assets/images/news/news6.webp";
import news7 from "../../../assets/images/running-banner.jpeg";
import news8 from "../../../assets/images/news/news8.jpeg";
import news9 from "../../../assets/images/map10km.jpg";
import news10 from "../../../assets/images/news/news10.jpg";
import news11 from "../../../assets/images/news/news11.jpeg";
import news12 from "../../../assets/images/news/news12.jpeg";
import news13 from "../../../assets/images/news/news13.jpeg";

let id = 0;
const hasMoved = ref(false);
const isDragging = ref(false);
const dragStartX = ref(0);

const settings = ref({
  itemsToShow: 3,
  snapAlign: "start",
  wrapAround: true,
  autoplay: 5000,
  transition: 1000,
});

const breakpoints = ref({
  // 300px and up
  300: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  // 600px and up
  600: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
});

const slides = [
  {
    id: id++,
    title:
      "Khởi động giải chạy 'Cung đường kim cương' với số lượng VĐV tăng gấp đôi",
    content:
      "ThanhNien.vn - Sau mùa 1 đầy thành công với tên gọi giải chạy Dream Cup 2023, Hội Liên hiệp Thanh niên Việt Nam TP.HCM phối hợp với Diamond Network tổ chức giải Running Diamond Cup 2024 diễn ra vào ngày 7.7.2024 nhằm giúp đỡ những hoàn cảnh khó khăn.",
    img: news10,
    url: "https://thanhnien.vn/khoi-dong-giai-chay-cung-duong-kim-cuong-voi-so-luong-vdv-tang-gap-doi-185240416095412899.htm",
  },
  {
    id: id++,
    title: "VĐV Phạm Thị Hồng Lệ đồng hành cùng Running Diamond Cup 2024",
    content:
      "ThanhNien.vn - Running Diamond Cup 2024 là giải chạy với quy mô hơn 5.000 người được Diamond Network và Hội Liên hiệp Thanh niên Việt Nam TP.HCM phối hợp cùng tổ chức vào ngày 07.07.2024. Mục tiêu của giải chạy đó chính là nâng cao ý thức bảo vệ sức khỏe, gắn kết các hoạt động giao lưu, kết nối thông qua chạy marathon và lan tỏa những giá trị tích cực cho cộng đồng.",
    img: news1,
    url: "https://thanhnien.vn/nu-hoang-sea-games-pham-thi-hong-le-lam-dai-su-giai-marathon-dream-cup-2023-1852306291024291.htm#",
  },
  {
    id: id++,
    title: "Khởi động giải chạy từ thiện khu vực trung tâm TP. Hồ Chí Minh",
    content:
      "VTV.vn - Giải Running Diamond Cup 2024 sẽ diễn ra ngày 7/7/2024 nhằm giúp đỡ những hoàn cảnh khó khăn. Hội Liên hiệp Thanh niên Việt Nam TP. Hồ Chí Minh phối hợp với Diamond Network tổ chức giải Running Diamond Cup 2024 nhằm giúp đỡ những hoàn cảnh khó khăn. Giải chạy với quy mô với hơn 5.000 người, theo đó công dân Việt Nam đủ 18 tuổi trở lên, yêu thích chạy bộ, có đầy đủ sức khoẻ, đều có thể đăng ký tham gia.",
    img: news12,
    url: "https://vtv.vn/news-20240416144249834.htm",
  },
  {
    id: id++,
    title:
      "Giải chạy Running Diamond Cup 2024 nhằm giúp đỡ những hoàn cảnh khó khăn",
    content:
      "TheThaoVanHoa.vn - Hội Liên hiệp Thanh niên Việt Nam TP.HCM phối hợp với Diamond Network tổ chức giải Running Diamond Cup 2024 nhằm giúp đỡ những hoàn cảnh khó khăn. Running Diamond Cup 2024 với quy mô với hơn 5.000 người, theo đó công dân Việt Nam đủ 18 tuổi trở lên, yêu thích chạy bộ, có đầy đủ sức khoẻ, đều có thể đăng ký tham gia.",
    img: news7,
    url: "https://thethaovanhoa.vn/giai-chay-running-diamond-cup-2024-nham-giup-do-nhung-hoan-canh-kho-khan-20240416150305629.htm",
  },
  {
    id: id++,
    title: "VĐV Phạm Thị Hồng Lệ làm đại sứ Running Diamond Cup 2024",
    content:
      "TheThaoNgayNay.com.vn - Siêu mẫu Hồ Đức Vĩnh – Trưởng Ban tổ chức (BTC) Giải “Running Diamond Cup 2024 – Bước chạy rực rỡ trên cung đường kim cương” vừa công bố Vận động viên Điền kinh Phạm Thị Hồng Lệ là Đại sứ của giải chạy.",
    img: news3,
    url: "https://thethaongaynay.com.vn/the-thao/vdv-pham-thi-hong-le-lam-dai-su-running-diamond-cup-2024.html",
  },
  {
    id: id++,
    title:
      "Đại sứ Running Diamond Cup 2024 VĐV Phạm Thị Hồng Lệ - Đồng hành gây quỹ san sẻ tình yêu thương",
    content:
      "TienPhong.vn - Nghị lực của Hồng Lệ được thể hiện ở việc cô vượt qua những khó khăn trong quá trình tập luyện. Năm 2016, cô gái quê Bình Định phải mổ ruột thừa, sau đó tăng hơn 5kg so với ban đầu. Chính điều này kéo theo thành tích của cô suy giảm. Tuy nhiên một năm sau, bằng sự nỗ lực của mình, Hồng Lệ trở về con số cũ nhờ ép cân và cải thiện được loạt thành tích đáng tự hào.",
    img: news13,
    url: "https://tienphong.vn/dai-su-running-diamond-cup-2024-vdv-pham-thi-hong-le-dong-hanh-gay-quy-san-se-tinh-yeu-thuong-post1630558.tpo",
  },
  {
    id: id++,
    title:
      "Giải chạy quy mô hơn 5.000 người - Running Diamond Cup 2024 đã chính thức khởi động",
    content:
      "TienPhong.vn - Hội Liên hiệp Thanh niên Việt Nam TP.HCM phối hợp với Diamond Network tổ chức giải Running Diamond Cup 2024, sau mùa 1 đầy thành công với tên gọi giải chạy Dream Cup 2023, diễn ra ngày 7.7.2024 nhằm giúp đỡ những hoàn cảnh khó khăn.",
    img: news11,
    url: "https://tienphong.vn/post-1629444.tpo",
  },
  {
    id: id++,
    title: "Kỷ lục gia Phạm Thị Hồng Lệ tham dự Giải Running Diamond Cup 2024",
    content:
      "BaoMoi.com - Giàu thành tích ở bộ môn Điền kinh và luôn khát khao chạm đến đỉnh cao khi thi đấu, VĐV Phạm Thị Hồng Lệ trở thành Đại sứ của Running Diamond Cup 2024.",
    img: news3,
    url: "https://baomoi.com/ky-luc-gia-pham-thi-hong-le-tham-du-giai-running-diamond-cup-2024-c48901248.epi",
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
