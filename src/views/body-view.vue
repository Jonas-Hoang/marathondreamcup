<template>
  <div id="body">
    <div id="video-youtube">
      <BannerVid />
    </div>
    <div id="about">
      <AdvertiseSection />
    </div>
    <div id="purpose-section">
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
    <div id="news">
      <News />
    </div>
    <div id="partner">
      <Partner />
    </div>
    <div class="footer" id="partner">
      <Footter />
    </div>
    <div id="bullet-menu">
      <div class="scroll-to-bullets hide-for-medium">
        <a v-for="(section, index) in sections" :key="index" :href="section.href" :aria-label="`Go to ${section.title}`" @click.prevent="scrollToSection(section)" :data-title="section.title" class="tooltipstered" :class="{active: activeLinkId === section.id,inactive: activeLinkId !== section.id,} "></a>
      </div>
    </div>
    <div id="contact-menu-button">
      <ContactMenuButton />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, defineAsyncComponent } from "vue";
import { ElTooltip } from "element-plus";
import router from "@/router";

const loggedElements = new Set();
const activeLinkId = ref("");
const selectedLink = ref("");
const selectedRouter = ref("");

const sections = ref([
  { title: "Thông tin chung", href: "#about", id: "about" },
  { title: "Quy định và điều lệ", href: "#term-section", id: "term-section" },
  { title: "Lịch trình & sơ đồ", href: "#event-map", id: "event-map" },
  { title: "Đăng ký", href: "#sign-up", id: "sign-up" },
  { title: "Tin tức", href: "#news", id: "news" },
  { title: "Đối tác", href: "#partner", id: "partner" },
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

const scrollToSection = (link) => {
  // Assuming link.href is an ID selector (e.g., "#about")
  const sectionId = link.href.substring(1); // Remove the '#' from the href
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    const topPosition =
      sectionElement.getBoundingClientRect().top + window.pageYOffset - 84;
    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  }
  if (
    router.currentRoute.value.path === "/tim-anh" ||
    router.currentRoute.value.path === "/ket-qua"
  ) {
    selectedLink.value = link.text;
    selectedRouter.value = "";
    router.replace({ path: "/" + router.replace({ path: "/home" }) + "" });
  } else {
    selectedLink.value = link.text;
    selectedRouter.value = "";
  }
};

const sectionInView = (sectionTitle) => {};
</script>

<style lang="scss" scoped>
#bullet-menu {
  @media (max-width: 550px) {
    display: none;
  }
}
.scroll-to-bullets {
  max-height: 100vh;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
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
    @media (max-width: 1024px) {
      margin: 10px;
    }
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
