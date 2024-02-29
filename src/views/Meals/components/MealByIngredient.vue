<template>
  <div class="container rm-container">
    <div class="p-6">
      <div class="grid grid-cols-5 sm:grid-cols-1 gap-6 py-6 sm:py-0">
        <div
          v-for="(ingredient, index) in ingredients.slice(0, 30)"
          :key="ingredient.strIngredient"
          class="bg-white shadow-lg rounded-md"
        >
          <router-link :to="`/meals/by-name/${ingredient.strIngredient}`">
            <img
              :src="`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`"
              :alt="ingredient.strIngredient"
              class="rounded-t-md h-24 w-full object-cover cursor-pointer"
            />
          </router-link>
          <div class="p-2">
            <h3 class="font-semibold">{{ ingredient.strIngredient }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../../../axiosClient";

const ingredients = ref([]);

onMounted(async () => {
  try {
    const response = await axiosClient.get("list.php?i=list");
    ingredients.value = response.data.meals;
  } catch (error) {
    console.error(error);
  }
});
</script>

<script>
export default {
  name: "MealByIngredient",
};
</script>
