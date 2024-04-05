<template>
  <div id="body">
    <div id="video-youtube">
      <BannerVid />
    </div>
    <div id="advertise-section">
      <AdvertiseSection />
    </div>
    <div id="term-section">
      <PurposeJoin />
    </div>
    <div id="term-section">
      <TermSection />
    </div>
    <div id="event-map">
      <EventMap />
    </div>
    <div id="event-map">
      <SignUp />
    </div>
    <div id="sign-up">
      <RegisterSection />
    </div>
    <div id="sign-up">
      <PrizeSection />
    </div>
    <div id="bullet-menu">
      <div class="scroll-to-bullets hide-for-medium">
        <a
          v-for="(section, index) in sections"
          :key="index"
          :href="section.href"
          @click="scrollToSection"
          :data-title="section.title"
          class="tooltipstered"
          :class="{
            active: activeLinkId === section.id,
            inactive: activeLinkId !== section.id,
          }"
        ></a>
      </div>
    </div>
    <div id="contact-menu-button">
      <ContactMenuButton />
    </div>
    <div id="contact-menu-button">
      <News />
    </div>
    <div id="contact-menu-button">
      <Partner />
    </div>
    <div id="partner">
      <Footter />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, defineAsyncComponent } from "vue";
import { ElTooltip } from "element-plus";

const loggedElements = new Set();
const activeLinkId = ref("");

const sections = ref([
  {
    title: "Thông tin chung",
    href: "#advertise-section",
    id: "advertise-section",
  },
  { title: "Quy định và điều lệ", href: "#term-section", id: "term-section" },
  { title: "Lịch trình & sơ đồ", href: "#event-map", id: "event-map" },
  { title: "Đăng ký", href: "#sign-up", id: "sign-up" },
  { title: "Tin tức", href: "#tin-tuc", id: "news" },
  { title: "Đối tác", href: "#doi-tac", id: "partner" },
]);

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});

const BannerVid = defineAsyncComponent(() =>
  import("@/components/BannerSection/index.vue")
);
const AdvertiseSection = defineAsyncComponent(() =>
  import("@/components/AdvertiseSection/index.vue")
);
const PurposeJoin = defineAsyncComponent(() =>
  import("@/components/PurposeJoin/index.vue")
);
const SignUp = defineAsyncComponent(() =>
  import("@/components/SignUp/index.vue")
);
const EventMap = defineAsyncComponent(() =>
  import("@/components/EventMap/index.vue")
);
const TermSection = defineAsyncComponent(() =>
  import("@/components/TermSection/index.vue")
);
const RegisterSection = defineAsyncComponent(() =>
  import("@/components/RegisterSection/index.vue")
);
const PrizeSection = defineAsyncComponent(() =>
  import("@/components/Prize/index.vue")
);
const ContactMenuButton = defineAsyncComponent(() =>
  import("@/components/ContactMenuButton/index.vue")
);
const Footter = defineAsyncComponent(() =>
  import("@/components/Footter/index.vue")
);

const News = defineAsyncComponent(() => import("@/components/News/index.vue"));
const Partner = defineAsyncComponent(() =>
  import("@/components/Partner/index.vue")
);

const checkScroll = () => {
  const elements = document.querySelectorAll("#body > div");

  elements.forEach((element, index) => {
    const rect = element.getBoundingClientRect();
    const isVisible =
      rect.top < window.innerHeight && rect.bottom >= 0 && rect.top >= 0;

    if (isVisible) {
      if (!loggedElements.has(element.id)) {
        activeLinkId.value = element.id;
        console.log(`topppp is ${rect.top}`);
        console.log(`window innerHeight is ${window.innerHeight}`);
        console.log(`bottom is ${rect.bottom}`);
        if (index + 1 < elements.length) {
          const nextElement = elements[index + 1];
        }
        loggedElements.add(element.id);
      }
    } else {
      loggedElements.delete(element.id);
    }
  });
};

const sectionInView = (sectionTitle) => {
  print(`click vision alo : ${sectionTitle}`);
};
</script>

<style lang="scss" scoped>
.scroll-to-bullets {
  max-height: 100vh;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  a {
    border: 3px solid transparent;
    border-radius: 30px;
    background-color: #141414;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    display: block;
    height: 15px;
    margin: 10px 15px;
    transition: all 0.3s;
    width: 15px;
    &:hover,
    &.active {
      background-color: #fff;
      opacity: 1;
      outline-width: 2px;
      border-color: #141414;
    }
  }
}

.tooltipstered {
  position: relative;
}

.tooltipstered:hover::after {
  content: attr(data-title);
  position: absolute;
  top: 50%;
  right: 190%;
  transform: translateY(-50%);
  background-color: black;
  color: white;
  padding: 5px;
  font-size: 14px;
  border-radius: 5px;
  white-space: nowrap;
  z-index: 999;
}
</style>
