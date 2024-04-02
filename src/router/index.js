// router/index.js
import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
} from "vue-router";
import Body from "@/views/body-view.vue";
import FindPicture from "@/views/find-picture.vue";
import ResultRunning from "@/views/result-running.vue";

const routes = [{
        path: "/",
        name: "Body",
        component: Body,
    },
    {
        path: "/tim-anh",
        name: "FindPicture",
        component: FindPicture,
    },
    {
        path: "/ket-qua",
        name: "ResultRunning",
        component: ResultRunning,
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/",
    },
];

const router = createRouter({
    //history: createWebHistory(),
    history: createWebHistory(process.env.BASE_URL), // This line is key

    routes,
});

router.beforeEach((to, from, next) => {
    console.log(`Navigating to: ${to.name}`);
    next();
});

export default router;