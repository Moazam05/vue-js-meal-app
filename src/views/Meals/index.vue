<template>
  <div class="container rm-container">
    <div class="p-6">
      <div class="w-full justify-center">
        <InputText
          id="username"
          v-model="keyword"
          aria-describedby="username-help"
          class="w-full"
          placeholder="Search for Meals"
          @change="searchMeals"
        />
      </div>

      <div class="grid grid-cols-3 sm:grid-cols-1 gap-6 py-6">
        <div
          v-for="meal in meals"
          :key="meal.idMeal"
          class="bg-white shadow-lg rounded-md"
        >
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-md h-64 w-full object-cover"
          />
          <div class="p-2">
            <h3 class="font-semibold">{{ meal.strMeal }}</h3>
            <div class="flex justify-between items-center my-3">
              <div class="bg-green text-white p-2 rounded-md text-sm">
                <router-link to="/">View</router-link>
              </div>
              <div class="p-2 rounded-md bg-[#fc0102] text-white w-fit text-sm">
                <a :href="meal.strYoutube" target="_blank">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputText from "primevue/inputtext";
import { computed, ref } from "vue";

// Custom
import store from "../../redux/store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

console.log("meals", meals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>

<script>
export default {
  name: "Meal",
};
</script>
