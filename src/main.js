import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import AOS from "aos";
import router from "./router";
import { createMetaManager } from "vue-meta";
import VueLazyload from "vue-lazyload";
import "aos/dist/aos.css";

const app = createApp(App);

app
    .use(router)
    .use(createMetaManager())
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