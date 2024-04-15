<template>
  <div id="term-section">
    <div class="term-section text-[#f1f1f1] relative">
      <section class="section pt-[65px]">
        <div class="bg section-bg fill ">
          <div class="section-bg-overlay absolute fill"></div>
        </div>
        <div class="section-content relative">
          <div class="row align-middle">
            <div class="col medium-5 small-12 large-7" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="200">
              <h2 v-if="!$isMobile()" class="font-bold uppercase size italic text-4xl text-start mb-4">ĐIỀU KHOẢN & ĐIỀU KIỆN</h2>
              <h2 v-if="$isMobile()" class="font-bold uppercase size italic text-4xl text-center mb-4">ĐIỀU KHOẢN & ĐIỀU KIỆN</h2>
              <p class="text-[19px] font-[300]">Running Diamond Cup 2024</p>
              <a class="button bg-[#ddc180] my-[20px] text-black px-[1.2em] max-w-[100%] text-[1.12em]" rel="noopener noreferrer" href="https://drive.google.com/file/d/1SVUsMCFWrEGW6PjaXa3WlL-VS21sKH8S/view" target="_blank" style="border-radius: 99px"><span>Đọc kỹ điều khoản &amp; điều kiện</span><i class="icon-angle-right" aria-hidden="true"></i></a>
              <div class="ux-timer">
                <span>{{totalHours}}<br /><strong>giờ</strong></span><span>{{minutes}}<br /><strong>phút</strong></span><span>{{seconds}}<br /><strong>giây</strong></span>
              </div>
              <span class="text-[400] mt-[15px] text-[22px] mb-[15px]">Đếm ngược tới ngày sự kiện diễn ra với</span>
              <div class="flex items-center justify-center lg:w-[80%] md:w-[90%] sm:[100%] px-[30px] mt-[10px]">
                <span class="text-[60px] font-bold">5.000+</span>
              </div>
              <span class="mt-[10px] text-[400] text-[22px]">vận động viên (dự kiến)</span>
            </div>
            <div class="col medium-5 small-12 large-5 " style="paddingp-bottom: 0 !important;" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
              <div class="flex flex-col justify-center">
                <img width="816" height="929" :src="raceday" :data-src="raceday" v-lazy="raceday" alt="term-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import { ref, onMounted, onUnmounted } from "vue";
import race_day from "../../../assets/images/race_day.png";

export default {
  name: "TermSection",
  props: {
    msg: String,
  },
  setup() {
    const targetDate = new Date("2024-07-07T00:00:00"); // Set your target date here
    const now = new Date();
    const diff = targetDate - now;

    const totalHours = ref(Math.floor(diff / (1000 * 60 * 60)));
    const hours = ref(Math.floor((diff / (1000 * 60 * 60)) % 24));
    const minutes = ref(Math.floor((diff / (1000 * 60)) % 60));
    const seconds = ref(Math.floor((diff / 1000) % 60));

    let interval = null;
    const raceday = ref(race_day);

    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        totalHours.value = 0;
        hours.value = 0;
        minutes.value = 0;
        seconds.value = "00";
        return;
      }

      totalHours.value = Math.floor(diff / (1000 * 60 * 60));
      hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24);
      minutes.value = Math.floor((diff / (1000 * 60)) % 60);
      seconds.value = formatSeconds(Math.floor((diff / 1000) % 60));
    }

    function formatSeconds(sec) {
      return sec < 10 ? `0${sec}` : `${sec}`;
    }

    onMounted(() => {
      interval = setInterval(updateCountdown, 1000);
    });

    onMounted(() => {
      interval = setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    return { raceday, totalHours, hours, minutes, seconds };
  },
};
</script>


<style lang="scss" scoped src="./index.vue.scss"></style>
