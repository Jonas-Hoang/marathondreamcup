import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import AOS from "aos";
import router from "./router";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router).mount("#app");

app.config.globalProperties.$isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
};

AOS.init();