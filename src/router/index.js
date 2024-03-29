import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/index.vue";
import Meals from "../views/Meals/index.vue";
import MealDetail from "../views/Meals/components/MealDetail.vue";
import MealByLetter from "../views/Meals/components/MealByLetter.vue";
import MealByIngredient from "../views/Meals/components/MealByIngredient.vue";

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
    path: "/meals/by-letter/:letter?",
    name: "MealByLetter",
    component: MealByLetter,
  },
  {
    path: "/meals/by-ingredient/:ingredient?",
    name: "MealByIngredient",
    component: MealByIngredient,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
