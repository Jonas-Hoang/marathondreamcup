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
import news9 from "../../../assets/images/roadmap.jpg";
import news10 from "../../../assets/images/news/news10.jpg";
import news11 from "../../../assets/images/news/news11.jpeg";

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
      "Sau mùa 1 đầy thành công với tên gọi giải chạy Dream Cup 2023, Hội Liên hiệp Thanh niên Việt Nam TP.HCM phối hợp với Diamond Network tổ chức giải Running Diamond Cup 2024 diễn ra vào ngày 7.7.2024 nhằm giúp đỡ những hoàn cảnh khó khăn.",
    img: news10,
    url: "https://thanhnien.vn/khoi-dong-giai-chay-cung-duong-kim-cuong-voi-so-luong-vdv-tang-gap-doi-185240416095412899.htm",
  },
  {
    id: id++,
    title:
      "Cô gái truyền cảm hứng Phạm Thị Hồng Lệ làm đại sứ giải Running Diamond Cup 2024",
    content:
      "Giải chạy Running Diamond Cup 2024 đang nhận được sự quan tâm từ những ai yêu thích bộ môn điền kinh, nhất là khi VĐV cự ly 10 km Phạm Thị Hồng Lệ từng đoạt HCV SEA Games 31 được chọn làm đại sứ giải đấu.",
    img: news1,
    url: "https://thanhnien.vn/nu-hoang-sea-games-pham-thi-hong-le-lam-dai-su-giai-marathon-dream-cup-2023-1852306291024291.htm#",
  },
  {
    id: id++,
    title: "Khởi động giải chạy từ thiện khu vực trung tâm TP. Hồ Chí Minh",
    content:
      "VTV.vn - Giải Running Diamond Cup 2024 sẽ diễn ra ngày 7/7/2024 nhằm giúp đỡ những hoàn cảnh khó khăn. Hội Liên hiệp Thanh niên Việt Nam TP. Hồ Chí Minh phối hợp với Diamond Network tổ chức giải Running Diamond Cup 2024 nhằm giúp đỡ những hoàn cảnh khó khăn. Giải chạy với quy mô với hơn 5.000 người, theo đó công dân Việt Nam đủ 18 tuổi trở lên, yêu thích chạy bộ, có đầy đủ sức khoẻ, đều có thể đăng ký tham gia.",
    img: news2,
    url: "https://vtv.vn/news-20240416144249834.htm",
  },
  {
    id: id++,
    title: 'Giải Marathon thiện nguyện với tiền thưởng "khủng"',
    content:
      "(NLĐO) - Hội Liên hiệp Thanh niên Việt Nam TP HCM phối hợp với Diamond Entertainment tổ chức Giải Running Diamond Cup 2024 từ ngày 30-7 nhằm giúp đỡ những hoàn cảnh khó khăn",
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
  {
    id: id++,
    title:
      "Running Diamond Cup 2024 - Reach Your Dream: Tổng giá trị giải thưởng lên đến gần 150 triệu đồng",
    content:
      "Diamond Entertainment do siêu mẫu Hồ Đức Vĩnh làm đại diện phối hợp cùng Hội Liên hiệp Thanh niên Việt Nam TPHCM tổ chức giải chạy Running Diamond Cup 2024.",
    img: news5,
    url: "https://thethao.sggp.org.vn/marathon-dream-cup-2023-reach-your-dream-tong-gia-tri-giai-thuong-len-den-gan-150-trieu-dong-post694749.html",
  },
  {
    id: id++,
    title:
      "Siêu mẫu Hồ Đức Vĩnh và loạt sao Việt tham gia giải chạy gây quỹ thiện nguyện",
    content:
      "Mới đây, siêu mẫu Hồ Đức Vĩnh đã phối hợp cùng Hội Liên hiệp Thanh niên Việt Nam TP.HCM phát động giải chạy Running Diamond Cup 2024 vì cộng đồng.",
    img: news6,
    url: "https://soha.vn/sieu-mau-ho-duc-vinh-va-loat-sao-viet-tham-gia-giai-chay-gay-quy-thien-nguyen-20230623105225775.htm",
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
    title: "Siêu mẫu Hồ Đức Vĩnh: ‘Chạy bộ giúp tôi vượt qua những lúc bế tắc’",
    content:
      "Nam siêu mẫu tổ chức giải chạy từ thiện có tên “Running Diamond Cup 2024” để lan tỏa những nguồn năng lượng tích cực từ hoạt động chạy bộ.",
    img: news8,
    url: "https://vtcnews.vn/sieu-mau-ho-duc-vinh-chay-bo-giup-toi-vuot-qua-nhung-luc-be-tac-ar801419.html",
  },
  {
    id: id++,
    title: "Tổ chức giải chạy từ thiện qua cung đường đẹp nhất TPHCM",
    content:
      "Hội Liên hiệp Thanh niên Việt Nam TPHCM tổ chức giải chạy Running Diamond Cup 2024. Đây là hoạt động nhằm thúc đẩy tinh thần thể dục thể thao rèn luyện thể chất lẫn của cộng đồng với thông điệp “Reach Your Dream – Chinh phục ước mơ”. Thông qua đó, chương trình mong đóng góp quỹ từ thiện cho những mảnh đời khó khăn.",
    img: news9,
    url: "https://laodongtre.laodong.vn/the-thao/to-chuc-giai-chay-tu-thien-qua-cung-duong-dep-nhat-tphcm-1207973.ldo",
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
