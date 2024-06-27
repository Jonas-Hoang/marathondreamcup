<template>
  <div id="button-contact-vr" class="">
    <div id="list-button"><!-- v3 -->

      <!-- fanpage -->
      <div id="fanpage-vr" class="button-contact">
        <div class="phone-vr">
          <div class="phone-vr-circle-fill"></div>
          <div class="phone-vr-img-circle !bg-[#1877f2]">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61558016510583">
              <img v-lazy="fb_logo" alt="facbook-logo">
            </a>
          </div>
        </div>
      </div>
      <!-- end fanpage -->

      <!-- zalo -->
      <div id="zalo-vr" class="button-contact">
        <div class="phone-vr">
          <div class="phone-vr-circle-fill"></div>
          <div class="phone-vr-img-circle !bg-[#1877f2]">
            <a target="_blank" href="https://zalo.me/0367755266">
              <img v-lazy="zalo_logo" alt="zalo-logo">
            </a>
          </div>
        </div>
      </div>
      <!-- end zalo -->

      <!-- Phone3 -->
      <div id="phone-vr3" class="button-contact">
        <div class="phone-vr">
          <div class="phone-vr-circle-fill"></div>
          <div class="phone-vr-img-circle !bg-[#81d742]">
            <a href="tel:0367755266">
              <img v-lazy="numberphone_logo" alt="phone-logo">
            </a>
          </div>
        </div>
      </div>
      <!-- end phone 3-->

    </div><!-- end v3 class gom-all-in-one -->

  </div>
</template>

<script setup>
import fb_logo from "../../../assets/images/facebook-logo.png";
import zalo_logo from "../../../assets/images/zalo-logo.png";
import numberphone_logo from "../../../assets/images/phone-logo.png";
</script>

<script>
export default {
  name: "ContactMenuButton",
};
</script>

<style lang="scss" scoped src="./index.vue.scss"></style>