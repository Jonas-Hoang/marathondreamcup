import { createApp } from "vue";
import App from "./App.vue";

import "./index.css";
import AOS from "aos";
import router from "./router";
import "aos/dist/aos.css";

createApp(App).use(router).mount("#app");
AOS.init();