import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/sign-up", component: SignUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
