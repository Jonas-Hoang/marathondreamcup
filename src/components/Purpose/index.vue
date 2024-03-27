<template>
  <div class="purpose-join bg-red-100 w-auto section-content py-[60px]  relative">
    <div class="flex items-center justify-center flex-col  bg-black">
      <div>
        <h2 class="mb-[30px] italic text-[#f1f1f1] text-[36px]">
          <span>MỤC ĐÍCH <br><span style="color: #d6b571;">MARATHON DREAM CUP</span></span>
        </h2>
        <div class="flex flex-row justify-center items-center">
          <div class="tabbed-content w-[36%]">
            <ul class="nav nav-line nav-vertical nav-normal nav-size-normal nav-left" role="tablist">
              <li id="tab-gây-quỹ-từ-thiện" class="tab has-icon active" role="presentation"><a href="#tab_gây-quỹ-từ-thiện" role="tab" aria-selected="true" aria-controls="tab_gây-quỹ-từ-thiện"><span>Gây quỹ từ thiện</span></a></li>
              <li id="tab-chinh-phục-giới-hạn-của-bản-thân" class="tab has-icon" role="presentation"><a href="#tab_chinh-phục-giới-hạn-của-bản-thân" role="tab" aria-selected="false" aria-controls="tab_chinh-phục-giới-hạn-của-bản-thân" tabindex="-1"><span>Chinh phục giới hạn của bản thân</span></a></li>
              <li id="tab-trải-nghiệm-thể-thao-thú-vị" class="tab has-icon" role="presentation"><a href="#tab_trải-nghiệm-thể-thao-thú-vị" role="tab" aria-selected="false" aria-controls="tab_trải-nghiệm-thể-thao-thú-vị" tabindex="-1"><span>Trải nghiệm thể thao thú vị</span></a></li>
              <li id="tab-giải-thưởng-vinh-danh-cao-quý" class="tab has-icon" role="presentation"><a href="#tab_giải-thưởng-vinh-danh-cao-quý" role="tab" aria-selected="false" aria-controls="tab_giải-thưởng-vinh-danh-cao-quý" tabindex="-1"><span>Giải thưởng vinh danh cao quý</span></a></li>
            </ul>
          </div>
          <div class="tab-panels w-[100%] flex-1">
            <div id="tab_gây-quỹ-từ-thiện" class="panel entry-content active" role="tabpanel" aria-labelledby="tab-gây-quỹ-từ-thiện">
              <div class="img has-hover x md-x lg-x y md-y lg-y" id="image_1465066806">
                <div data-animate="bounceInRight" data-animated="true">
                  <div class="img-inner image-cover dark">
                    <img width="720" height="542" src="https://marathondreamcup.vn/wp-content/uploads/2023/06/chay-maraton-la-gi-5.jpg" data-src="https://marathondreamcup.vn/wp-content/uploads/2023/06/chay-maraton-la-gi-5.jpg" class="attachment-original size-original lazy-load-active" alt="" decoding="async" srcset="https://marathondreamcup.vn/wp-content/uploads/2023/06/chay-maraton-la-gi-5.jpg 720w, https://marathondreamcup.vn/wp-content/uploads/2023/06/chay-maraton-la-gi-5-300x226.jpg 300w" data-srcset="https://marathondreamcup.vn/wp-content/uploads/2023/06/chay-maraton-la-gi-5.jpg 720w, https://marathondreamcup.vn/wp-content/uploads/2023/06/chay-maraton-la-gi-5-300x226.jpg 300w" sizes="(max-width: 720px) 100vw, 720px">
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PurposeJ",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped src="./index.vue.scss"></style>
