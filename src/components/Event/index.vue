<template>
  <div class="bg-gray-800 text-gray-100 relative">
    <section class="py-[65px]">
      <div class="bg section-bg fill bg-fill bg-loaded">
        <div class="section-bg-overlay absolute fill"></div>
      </div>
      <div class="section-content relative">
        <div class="row align-middle">
          <div class="col medium-5 small-12 large-5">
            <img width="1138" height="1894" src="https://marathondreamcup.vn/wp-content/uploads/2023/07/hang-muc-chinh-F_standee-0m8x1m8-scaled-e1690425687244.jpg" data-src="https://marathondreamcup.vn/wp-content/uploads/2023/07/hang-muc-chinh-F_standee-0m8x1m8-scaled-e1690425687244.jpg" />
          </div>
          <div class="col medium-5 small-12 large-7">
            <div class="flex flex-col justify-center">
              <h2 class="font-bold uppercase size italic text-4xl text-start mb-4">
                Sải bước chiến thắng cùng
              </h2>
              <div class="flex bg-blue-600 items-center justify-center w-[80%] mb-6 px-[30px]">
                <span class="my-[15px] text-xl font-bold">Running Diamond Cup 2024</span>
              </div>
              <span class="font-extralight text-lg mb-6" style="font-size: 110%">
                Với sức khỏe, ý chí, niềm tin và sự nhiệt huyết, vượt qua giới
                hạn bản thân bằng những bước chân bền bỉ, vươn tới khát khao
                chiến thắng chính mình.
              </span>
              <span class="font-extralight text-lg" style="font-size: 110%">
                Giải chạy với hai cự ly chính, 5 km và 10 km dành cho công
                dân Việt Nam từ đủ 18 tuổi trở lên, có sức khỏe và yêu thích
                chạy bộ. Toàn bộ doanh thu từ lệ phí tham gia sẽ được trao cho
                Hội Liên hiệp Thanh niên Việt Nam TP.HCM, để giúp đỡ những
                hoàn cảnh khó khăn.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "EventE",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped src="./index.vue.scss"></style>
