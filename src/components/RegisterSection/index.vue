<template>
  <div id="register">
    <div class="advertise-section text-[#f1f1f1] relative">
      <section class="pt-[65px]">
        <div class="bg section-bg fill bg-fill bg-loaded">
          <div class="section-bg-overlay absolute fill"></div>
        </div>
        <div class="section-content relative">
          <div class="row align-middle">
            <div class="col medium-5 small-12 large-6" data-aos="fade-right" data-aos-duration="1300" data-aos-delay="200">
              <img width="1280" height="1280" src="../../../assets/images/register-bg.jpeg" />
            </div>
            <div class="col medium-5 small-12 large-6" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
              <div class="flex flex-col justify-center">
                <h3 style="text-align: center">
                  <span style="font-size: 120%">Vé sớm</span>
                </h3>
                <h6 style="text-align: center">
                  <span style="font-size: 120%">(đến ngày 30/06/2023)</span>
                </h6>
                <div class="row row-small" id="row-1548907457">
                  <div class="col medium-6 small-12 large-6">
                    <a class="" href="https://forms.gle/VbiexwXmJJTp9f9XA" target="_blank" rel="noopener noreferrer">
                      <img width="1920" height="1080" src="../../../assets/images/ticket200.png" alt="ticket200" />
                    </a>
                  </div>
                  <div class="col medium-6 small-12 large-6">
                    <a class="" href="https://forms.gle/VbiexwXmJJTp9f9XA" target="_blank" rel="noopener noreferrer">
                      <img width="1920" height="1080" src="../../../assets/images/ticket300.png" alt="ticket300" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-center">
                <h3 style="text-align: center">
                  <span style="font-size: 120%">Vé thường</span>
                </h3>
                <h6 style="text-align: center">
                  <span style="font-size: 120%">(01/07/2023 – 20/07/2023)</span>
                </h6>
                <div class="row row-small" id="row-1548907457">
                  <div class="col medium-6 small-12 large-6">
                    <a class="" href="https://forms.gle/VbiexwXmJJTp9f9XA" target="_blank" rel="noopener noreferrer">
                      <img width="1920" height="1080" src="../../../assets/images/ticket250.png" alt="ticket250" />
                    </a>
                  </div>
                  <div class="col medium-6 small-12 large-6">
                    <a class="" href="https://forms.gle/VbiexwXmJJTp9f9XA" target="_blank" rel="noopener noreferrer">
                      <img width="1920" height="1080" src="../../../assets/images/ticket400.png" alt="ticket400" />
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

<script>
export default {
  name: "TermSection",
  props: {
    msg: String,
  },
  methods: {
    openForm() {
      window.open("https://forms.gle/X77gRWWHBweG4bB28", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped src="./index.vue.scss"></style>
