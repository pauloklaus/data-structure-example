import Vue from "vue";
import VueRouter from "vue-router";
import Queue from "../views/Queue.vue";
import Stack from "../views/Stack.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/queue",
        name: "Queue",
        component: Queue
    },
    {
        path: "/stack",
        name: "Stack",
        component: Stack
    },
    {
        path: "*",
        redirect: "/queue"
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
