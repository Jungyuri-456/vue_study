import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Review from "@/views/Review.vue";
import Check from "@/views/Check.vue";

const routes = [
    { path: "/", component:Home },
    { path: "/About", component:About },
    { path: "/Login", component:Login },
    { path: "/Signup", component:Signup },
    { path: "/Review", component:Review },
    { path: "/Check", component:Check }
]

const router = createRouter({
    history : createWebHashHistory(),
    routes,
})
export default router;