<template>
  <div class="container rm-container">
    <div class="p-6">
      <h1 class="text-green font-bold text-3xl">Random Meals</h1>
      <div class="grid grid-cols-3 sm:grid-cols-1 gap-6 py-6">
        <div
          v-for="meal in meals"
          :key="meal.idMeal"
          class="bg-white shadow-lg rounded-md"
        >
          <router-link :to="`/meal/${meal.idMeal}`">
            <img
              :src="meal.strMealThumb"
              :alt="meal.strMeal"
              class="rounded-t-md h-64 w-full object-cover cursor-pointer"
            />
          </router-link>
          <div class="p-3">
            <h3 class="font-semibold">{{ meal.strMeal }}</h3>
            <p class="mt-2">{{ meal.strInstructions.slice(0, 100) }}...</p>

            <a
              :href="meal.strYoutube"
              target="_blank"
              class="block w-fit h-fit bg-transparent rounded-md border border-[#eb0014] p-2 text-[#eb0014] hover:bg-[#eb0014] hover:text-white text-sm text-center mt-3 mb-2"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Library Imports
import { onMounted, ref } from "vue";
// Custom Imports
import axiosClient from "../../axiosClient";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    const response = await axiosClient.get("/random.php");
    meals.value.push(response.data.meals[0]);
  }
});
</script>

<script>
export default {
  name: "Home",
};
</script>
