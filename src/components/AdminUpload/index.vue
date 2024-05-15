<template>
  <div id="about">
    <div class="advertise-section text-[#f1f1f1] relative">
      <section class="py-[65px]">
        <div class="section-bg fill ">
          <div class="section-bg-overlay absolute fill"></div>
        </div>
        <div class="section-content relative">
          <div class="row align-middle">
            <div class=" flex content-center justify-center col medium-5 small-12 large-5" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200">
              <img :src="imageName" alt="adtervise-image" width="300" height="500" />
              <input class="w-full h-full absolute opacity-0" type="file" accept="image/jpeg" @change="uploadImage">
            </div>
            <div v-if="!$isMobile()" class="col medium-5 small-12 large-7" data-aos="fade-left" data-aos-duration="1000">
              <div class="flex flex-col justify-center text-[#214184]">
                <h2 class="font-bold uppercase size italic text-4xl text-start mb-4 !text-[#fdb912]">
                  Sải bước chiến thắng cùng
                </h2>
                <div class="flex items-center justify-center mb-6 px-[30px]">
                  <span class="text-[#214184] my-[15px] text-3xl font-bold">Running Diamond Cup 2024</span>
                </div>
                <span class="text-[#214184] font-[400] text-lg mb-6" style="font-size: 110%">
                  Running Diamond Cup 2024 sẽ có 02 cự ly, gồm 5km và 10km dành
                  cho các vận động viên phong trào nam và nữ. Cung đường chạy
                  của giải đấu với những con đường mang vẻ đẹp nên thơ, vừa chất
                  chứa dấu ấn xưa cổ, hoà cùng vẻ đẹp phồn hoa, hiện đại chắc
                  chắn sẽ gợi nên những rung cảm và tạo được những dấu ấn khó
                  quên cho Runners.
                </span>
                <span class="font-[400] text-[#214184] text-lg" style="font-size: 110%">
                  Khi đăng ký Running Diamond Cup 2024 là bạn đang góp thêm hạnh
                  phúc đến mọi người, vì với lệ phí từ mỗi một thành viên tham
                  gia, Diamond Network sẽ trao đến Hội Liên hiệp Thanh niên Việt
                  Nam Thành Phố Hồ Chí Minh số tiền 100.000 VND để hỗ trợ cho
                  những hoàn cảnh khó khăn.
                </span>
              </div>
            </div>
            <div v-if="$isMobile()" class="col medium-5 small-12 large-7" data-aos="fade-up" data-aos-duration="1000">
              <div class="flex flex-col justify-center">
                <h2 class="font-semibold uppercase size italic text-4xl mb-4 text-[#fdb912] text-center">
                  Sải bước chiến thắng cùng
                </h2>
                <div class="flex items-center justify-center mb-6 px-[30px]">
                  <span class="text-center text-[#214184] my-[15px] text-3xl font-semibold">Running Diamond Cup 2024</span>
                </div>
                <span class="text-[#214184] font-[300] text-lg mb-6" style="font-size: 110%">
                  Running Diamond Cup 2024 sẽ có 02 cự ly, gồm 5km và 10km dành
                  cho các vận động viên phong trào nam và nữ. Cung đường chạy
                  của giải đấu với những con đường mang vẻ đẹp nên thơ, vừa chất
                  chứa dấu ấn xưa cổ, hoà cùng vẻ đẹp phồn hoa, hiện đại chắc
                  chắn sẽ gợi nên những rung cảm và tạo được những dấu ấn khó
                  quên cho Runners.
                </span>
                <span class="text-[#214184] font-[300] text-lg" style="font-size: 110%">
                  Khi đăng ký Running Diamond Cup 2024 là bạn đang góp thêm hạnh
                  phúc đến mọi người, vì với lệ phí từ mỗi một thành viên tham
                  gia, Diamond Network sẽ trao đến Hội Liên hiệp Thanh niên Việt
                  Nam Thành Phố Hồ Chí Minh số tiền 100.000 VND để hỗ trợ cho
                  những hoàn cảnh khó khăn.
                </span>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <button class=" inline-flex max-w-[200px] items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none" data-id="14" @click="upload">Upload</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isUploadImage = ref(false);
</script>

<script>
export default {
  name: "AdminUpload",
  props: {
    msg: String,
  },
  data() {
    return {
      imageName: String,
    };
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      this.imageName = URL.createObjectURL(image);
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    },
  },
};
</script>


<style lang="scss" scoped src="./index.vue.scss"></style>
