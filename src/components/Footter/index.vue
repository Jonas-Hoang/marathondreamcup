<template>
  <div id="footer">
    <div class="footer text-[#f1f1f1] relative py-[60px]">
      <div class="bg section-bg section-bg-overlay fill "></div>
      <div class="section-content relative">
        <div class="row flex" id="row-1367639483">
          <div class="col medium-4 small-12 flex-basis-1/3 max-w-[33.3333333%]">
            <div class="col-inner">
              <div class="founder text ml-[40px]">
                <h4 class="partner">Đơn vị tổ chức</h4>
              </div>
              <div class="img has-hover x md-x lg-x y md-y lg-y w-[53%]">
                <div class="img-inner dark"><img width="701" height="450" v-lazy="logo_diamondnetwork" :data-src="logo_diamondnetwork" class="attachment-original size-original lazy-load-active" alt="logo_doanh-nghiep" decoding="async"></div>
              </div>
            </div>
          </div>
          <div class="col medium-4 small-12 flex-basis-1/3 max-w-[33.3333333%]">
            <div class="col-inner">
              <h4>Thông tin liên hệ</h4>
              <p><span style="font-s2ize: 90%; color: #999999;">Tầng 15, Tòa nhà Vincom Center, 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, Tp. Hồ Chí Minh.</span></p>
              <p><span style="color: #999999; font-size: 90%;">036 77 55 266</span></p>
              <p><span style="color: #999999; font-size: 90%;">admin@diamondentertainment.vn</span></p>
            </div>
          </div>
          <div class="col medium-4 small-12 flex-basis-1/3 max-w-[33.3333333%]">
            <div class="col-inner">
              <h4>Bảo trợ truyền thông</h4>
              <div class="img has-hover x md-x lg-x y md-y lg-y">
                <div class="img-inner dark"><img width="1020" height="517" v-lazy="bao_tro_truyen_thong" :data-src="bao_tro_truyen_thong" :data-srcset="bao_tro_truyen_thong" alt="logo_truyen_thong"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo_diamondnetwork from "../../../assets/images/logo_DN_DiamondNetwork.png";
import bao_tro_truyen_thong from "../../../assets/images/bao-tro-truyen-thong.png";
</script>

<script>
export default {
  name: "Footter",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped src="./index.vue.scss"></style>
