<template>
  <div class="bg-[#1D1D1D] w-auto section-content py-[60px] relative" id="purpose">
    <div class="flex items-center flex-col ">
      <div class="col ml-auto mr-0">
        <h2 class="mb-[30px] italic text-[#f1f1f1] text-[36px] font-[600]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay='500'>
          <span>MỤC ĐÍCH <br /><span style="color: #d6b571">RUNNING DIAMOND CUP</span></span>
        </h2>
        <div class="group-content flex lg:flex-row md:flex-col justify-between items-center">
          <div class="tabbed-content mr-6" data-aos="fade-right" data-aos-duration="1000" data-aos-delay='500'>
            <ul class="nav" role="tablist">
              <li v-for="link in links" :key="link.id" :class="{ 'active': activeLinkId === link.id, 'inactive': activeLinkId !== link.id }" class="tab has-icon p-2.5 border-l-4 border-indigo-500" @click="setActiveLink(link.id)">
                <span class="text-white text-[22px] font-[500]" role="button">{{ link.title }}</span>
                <p class="txt-content text-[16px] text-[#8d8d8d] font-[300]">{{ link.description }}</p>
              </li>
            </ul>
          </div>
          <img width="720" height="542" class="rounded-[15px] mobile:!h-[50%] mobile:mt-[20px]" :src="activeLink.imageUrl" :alt="activeLink.title" data-aos="fade-left" data-aos-duration="1000" data-aos-delay='500' ref="image" />
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
import { ref } from "vue";

let id = 0;
const activeLinkId = ref(null);

const links = ref([
  {
    id: id++,
    title: "Gây quỹ từ thiện",
    description:
      "Là dịp để các runner tham gia chiến dịch 'chạy vì cộng đồng' thông qua hoạt động gây quỹ từ thiện",
    imageUrl:
      "https://marathondreamcup.vn/wp-content/uploads/2023/06/chay-maraton-la-gi-5.jpg",
  },
  {
    id: id++,
    title: "Chinh phục giới hạn của bản thân",
    description:
      "Khơi dậy bản lĩnh và khát khao chinh phục, bứt phá giới hạn bản thân. Tận hưởng niềm vui sướng mỗi khi bứt phá kỷ lục của bản thân",
    imageUrl:
      "https://marathondreamcup.vn/wp-content/uploads/2023/06/20210204_062037_294591_chay-bo.max-1800x1800-1-e1687222979541.jpg",
  },
  {
    id: id++,
    title: "Trải nghiệm thể thao thú vị",
    description:
      "Trải nghiệm thể thao thú vị, bởi không khí nào nhiệt và khung cảnh đặc sắc trên đường chạy. Đừng quên tận hưởng những nét đặc sắc của các cung đường chạy.",
    imageUrl:
      "https://marathondreamcup.vn/wp-content/uploads/2023/06/Jfit-Blog-MarathonTraining-2.jpg",
  },
  {
    id: id++,
    title: "Giải thưởng vinh danh cao quý",
    description:
      "Giải thưởng của ban tổ chức chỉ là phần nhỏ so với giải thưởng của chính mình, là sự nổ lực không ngại vượt khó.",
    imageUrl:
      "https://marathondreamcup.vn/wp-content/uploads/2023/06/crossing_the_finish_line.jpg",
  },
]);

const setActiveLink = (id) => {
  const link = links.value.find((link) => link.id === id);
  activeLinkId.value = id;
  activeLink.value = link; // Set the active link
};

const activeLink = ref(links.value[0]);

setActiveLink(0);
</script>


<style lang="scss" scoped src="./index.vue.scss"></style>
