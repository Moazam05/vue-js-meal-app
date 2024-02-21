import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/index.vue";
import About from "../views/About/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
