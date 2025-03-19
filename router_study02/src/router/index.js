import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Reservation from "@/views/Reservation.vue";
import Checkout from "@/views/Checkout.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ReviewView from "@/views/ReviewView.vue";
import Menu1 from "@/views/Menu1.vue";
import Menu2 from "@/views/Menu2.vue";
import Menu3 from "@/views/Menu3.vue";
import Menu4 from "@/views/Menu4.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/chekout", component: Checkout },
  { path: "/reservation", component: Reservation },
  { path: "/loginView", component: LoginView },
  { path: "/reviewView", component: ReviewView },
  { path: "/registerView", component: RegisterView },
  { path: "/menu1", component: Menu1 },
  { path: "/menu2", component: Menu2 },
  { path: "/menu3", component: Menu3 },
  { path: "/menu4", component: Menu4 },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
