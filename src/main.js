import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import AOS from "aos";
import router from "./router";
import VueLazyload from "vue-lazyload";
import "aos/dist/aos.css";
import LottieAnimation from "lottie-web-vue";

const app = createApp(App);

app
    .use(router)
    .use(LottieAnimation)
    .use(VueLazyload, {
        preLoad: 1.3,
        attempt: 1,
    })
    .mount("#app");

app.config.globalProperties.$isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
};

AOS.init();