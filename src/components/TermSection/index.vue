<template>
  <div id="term-section">
    <div class="term-section text-[#f1f1f1] relative">
      <section class="section pt-[40px]">
        <div class="bg section-bg fill ">
          <div class="section-bg-overlay absolute fill"></div>
        </div>
        <div class="section-content relative">
          <div class="row align-middle">
            <div class="col medium-5 small-12 large-7" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="200">
              <h2 v-if="!$isMobile()" class="font-bold uppercase size italic text-4xl text-start mb-4 text-[#faab25]">ĐIỀU KHOẢN & ĐIỀU KIỆN</h2>
              <h2 v-if="$isMobile()" class="font-bold uppercase size italic text-4xl text-center mb-4 text-[#faab25]">ĐIỀU KHOẢN & ĐIỀU KIỆN</h2>
              <p class="text-center font-[600] !text-[27px] text-[#214184]">Running Diamond Cup 2024</p>
              <a class="button bg-[#ffbe4e] my-[20px] text-black px-[1em] max-w-[100%] hover:bg-[#f5ca66]" rel="noopener noreferrer" href="https://drive.google.com/file/d/1314JujSnObg_8tVDFhstFbHWASh7F2Ez/view" target="_blank" style="border-radius: 99px"><span>Đọc kỹ điều khoản &amp; điều kiện</span><i class="icon-angle-right" aria-hidden="true"></i></a>
              <div class="ux-timer">
                <span>{{days}}<br /><strong>ngày</strong></span>
                <span>{{hours}}<br /><strong>giờ</strong></span>
                <span>{{minutes}}<br /><strong>phút</strong></span>
                <span>{{seconds}}<br /><strong>giây</strong></span>
              </div>
              <span class="text-[400] mt-[15px] text-[22px] mb-[30px] text-[#214184]">Đếm ngược tới ngày sự kiện diễn ra với</span>
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

    const days = ref(Math.floor(diff / (1000 * 60 * 60 * 24)));
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
        days.value = 0;
        totalHours.value = 0;
        hours.value = 0;
        minutes.value = 0;
        seconds.value = "00";
        return;
      }
      days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
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

    return { raceday, days, totalHours, hours, minutes, seconds };
  },
};
</script>


<style lang="scss" scoped src="./index.vue.scss"></style>
