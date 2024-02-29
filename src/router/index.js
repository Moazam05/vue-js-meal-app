import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/index.vue";
import Meals from "../views/Meals/index.vue";
import MealList from "../views/Meals/components/MealList.vue";
import MealDetail from "../views/Meals/components/MealDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/meals/by-name/:name?",
    name: "Meals",
    component: Meals,
  },
  {
    path: "/meal/:id",
    name: "MealDetail",
    component: MealDetail,
  },
  {
    path: "/meals/by-letter/:id",
    name: "MealList",
    component: MealList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
