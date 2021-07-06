import Vue from "vue";
import VueRouter from "vue-router";
import Queue from "../views/Queue.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/queue",
        name: "Queue",
        component: Queue
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
