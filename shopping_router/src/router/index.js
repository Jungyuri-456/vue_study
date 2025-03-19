import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Event from "@/views/Event.vue";
import About from "@/views/About.vue";
import Review from "@/views/Review.vue";
import FnQ from "@/views/FnQ.vue";
import Reserbar from "@/views/Reserbar.vue";
const routes = [
    {path:"/", component:Home},
    {path:"/product/:id", component:ProductDetail},
    {path:"/event", component:Event},
    {path:"/about", component:About},
    {path:"/review", component:Review},
    {path:"/fnq", component:FnQ},
    {path:"/reserbar", component:Reserbar}
];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;