import Vue from "vue";
import VueRouter from "vue-router";
import Queue from "../views/Queue.vue";
import Stack from "../views/Stack.vue";
import Sort from "../views/Sort.vue";

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
        path: "/sort",
        name: "Sort",
        component: Sort
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
