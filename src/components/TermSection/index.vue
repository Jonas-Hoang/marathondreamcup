<template>
  <div id="term-section">
    <div class="advertise-section text-[#f1f1f1] relative">
      <section class="pt-[65px]">
        <div class="bg section-bg fill bg-fill bg-loaded">
          <div class="section-bg-overlay absolute fill"></div>
        </div>
        <div class="section-content relative">
          <div class="row align-middle">
            <div class="col medium-5 small-12 large-7" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="200">
              <h2 class="font-bold uppercase size italic text-4xl text-start mb-4">ĐIỀU KHOẢN & ĐIỀU KIỆN</h2>
              <p class="text-[19px] font-[300]">Running Diamond Cup 2024</p>
              <a class="button bg-[#ddc180] my-[20px] text-black px-[1.2em] max-w-[100%] text-[1.12em]" rel="noopener noreferrer" href="https://drive.google.com/file/d/1JgNWajG0Ic7oPdpE4PSE_zCyfR0LZixx/view?usp=sharing" target="_blank" style="border-radius: 99px"><span>Đọc kỹ điều khoản &amp; điều kiện</span><i class="icon-angle-right" aria-hidden="true"></i></a>
              <div id="timer-1036666101" class="ux-timer">
                <span>0<br /><strong>giờ</strong></span><span>0<br /><strong>phút</strong></span><span>0<br /><strong>giây</strong></span>
              </div>
              <span class="text-[400] mt-[15px] text-[22px] mb-[15px]">Đếm ngược tới ngày sự kiện diễn ra với</span>
              <div class="flex items-center justify-center lg:w-[80%] md:w-[90%] sm:[100%] px-[30px] mt-[10px]">
                <span class="text-[60px] font-bold">5.000+</span>
              </div>
              <span class="mt-[10px] text-[400] text-[22px]">vận động viên (dự kiến)</span>
            </div>
            <div class="col medium-5 small-12 large-5 " style="paddingp-bottom: 0 !important;" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
              <div class="flex flex-col justify-center">
                <img width="816" height="929" src="https://marathondreamcup.vn/wp-content/uploads/2023/06/dat-ve-ngay-23.png" alt="term-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "TermSection",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped src="./index.vue.scss"></style>
