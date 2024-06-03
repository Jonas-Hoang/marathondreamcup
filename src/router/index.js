import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        name: "Body",
        component: () =>
            import ("@/views/body-view.vue"),
    },
    {
        path: "/tim-anh",
        name: "FindPicture",
        component: () =>
            import ("@/views/find-picture.vue"),
    },
    {
        path: "/ket-qua",
        name: "ResultRunning",
        component: () =>
            import ("@/views/result-running.vue"),
    },
    // {
    //     path: "/admin",
    //     name: "AdminPage",
    //     component: () =>
    //         import ("@/views/admin.vue"),
    // },
    {
        path: "/tim-kiem",
        name: "SearchSection",
        component: () =>
            import ("@/views/search-section.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/",
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    // console.log(`Navigating to: ${to.name}`);
    next();
});

export default router;