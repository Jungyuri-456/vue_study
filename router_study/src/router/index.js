import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";
import ReserView from "@/views/Reser.vue";
import AboutView from "@/views/About.vue";
const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/reser", component: ReserView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
