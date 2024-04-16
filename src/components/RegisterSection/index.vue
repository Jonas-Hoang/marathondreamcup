<template>
  <div id="register">
    <div class="advertise-section text-[#f1f1f1] relative">
      <section class="pt-[65px]">
        <div class="bg section-bg fill">
          <div class="section-bg-overlay absolute fill"></div>
        </div>
        <div class="section-content relative">
          <div class="row align-middle">
            <div
              class="col medium-5 small-12 large-6"
              data-aos="fade-right"
              data-aos-duration="1300"
              data-aos-delay="200"
            >
              <img
                width="1280"
                height="1280"
                :src="register_bg"
                alt="register_image"
              />
            </div>
            <div
              class="col medium-5 small-12 large-6"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div class="flex flex-col justify-center">
                <h3 class="earlybird_ticket" style="text-align: center">
                  <span>Vé sớm</span>
                </h3>
                <h6 class="time_early" style="text-align: center">
                  <span>(đến ngày 30/04/2024)</span>
                </h6>
                <div class="row row-small flex mb-[7px]">
                  <div class="col medium-6 small-12 large-6">
                    <a
                      class=""
                      href="https://ticket.irace.vn/running-diamond-cup-2024"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="1920"
                        height="1080"
                        :src="ticket01"
                        alt="ticket200"
                      />
                    </a>
                  </div>
                  <div class="col medium-6 small-12 large-6">
                    <a
                      class=""
                      href="https://ticket.irace.vn/running-diamond-cup-2024"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="1920"
                        height="1080"
                        :src="ticket02"
                        alt="ticket300"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-center">
                <h3 class="normal_ticket" style="text-align: center">
                  <span>Vé thường</span>
                </h3>
                <h6 class="time_normal" style="text-align: center">
                  <span>(01/05/2024 – 01/06/2024)</span>
                </h6>
                <div class="row row-small flex">
                  <div class="col medium-6 small-12 large-6">
                    <a
                      class=""
                      href="https://ticket.irace.vn/running-diamond-cup-2024"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="1920"
                        height="1080"
                        :src="ticket03"
                        alt="ticket250"
                      />
                    </a>
                  </div>
                  <div class="col medium-6 small-12 large-6">
                    <a
                      class=""
                      href="https://ticket.irace.vn/running-diamond-cup-2024"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="1920"
                        height="1080"
                        :src="ticket04"
                        alt="ticket400"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <button @click="openForm">
                <div class="button-content">Đăng ký ngay</div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import register_bg from "../../../assets/images/register-bg.jpeg";
import ticket01 from "../../../assets/images/ticket-01.png";
import ticket02 from "../../../assets/images/ticket-02.png";
import ticket03 from "../../../assets/images/ticket-03.png";
import ticket04 from "../../../assets/images/ticket-04.png";
</script>

<script>
export default {
  name: "TermSection",
  props: {
    msg: String,
  },
  methods: {
    openForm() {
      window.open("https://ticket.irace.vn/running-diamond-cup-2024", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped src="./index.vue.scss"></style>
