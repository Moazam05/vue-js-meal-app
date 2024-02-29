<template>
  <div class="container rm-container">
    <div class="p-6">
      <div class="flex justify-center gap-2 sm:flex-wrap">
        <div
          v-for="letter in letters"
          :key="letter"
          class="text-2xl font-bold text-green"
        >
          <router-link :to="`/meals/by-letter/${letter}`">{{
            letter
          }}</router-link>
        </div>
      </div>
      <div
        :class="{
          'grid-cols-1': meals === null,
          'grid-cols-3': meals !== null,
        }"
        class="grid gap-6 py-6 sm:grid-cols-1"
      >
        <template v-if="meals === null">
          <div class="flex justify-center">
            <div class="bg-white shadow-lg rounded-md p-4">
              <p class="text-center">
                No meals found. Please try a different letter.
              </p>
            </div>
          </div>
        </template>

        <template v-else>
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
            <div class="p-2">
              <h3 class="font-semibold">{{ meal.strMeal }}</h3>
              <p class="mt-2">{{ meal.strInstructions.slice(0, 100) }}...</p>

              <a
                :href="meal.strYoutube"
                target="_blank"
                class="block w-fit h-fit bg-transparent rounded-md border border-[#eb0014] p-2 text-[#eb0014] hover:bg-[#eb0014] hover:text-white text-sm text-center my-3"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../../../redux/store";

const route = useRoute();
const meals = computed(() => store.state.mealsByLetter);

watch(
  () => route.params.letter,
  (newVal) => {
    store.dispatch("searchMealsByLetter", newVal);
  }
);

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
</script>

<script>
export default {
  name: "MealByLetter",
};
</script>
