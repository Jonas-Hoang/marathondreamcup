<template>
  <div class="bg-gray-800 text-gray-100 relative" id="sign-up">
    <div class="bg section-bg fill">
      <div class="section-bg-overlay absolute fill">
        <div class="content">
          <div class="row">
            <p>
              Lệ phí tham gia của người thi chạy marathon sẽ được
              <span class="hightlight-text text-[#214184]">trích 100K</span> và<br />được trao cho Hội Liên Hiệp Thanh Niên Việt Nam Thành Phố gửi đến<br />
              <span class="hightlight-text text-[#214184]">những người có hoàn cảnh khó khăn.</span>
            </p>
            <button @click="openForm">
              <div class="button-content">Đăng ký ngay</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
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
