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

      <div
        :class="{
          'grid-cols-1': meals === null,
          'grid-cols-3': meals !== null,
        }"
        class="grid gap-6 py-6"
      >
        <template v-if="meals === null">
          <div class="flex justify-center">
            <div class="bg-white shadow-lg rounded-md p-4">
              <p class="text-center">
                No meals found. Please try a different ingredient.
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
import InputText from "primevue/inputtext";
import { computed, onMounted, ref } from "vue";

// Custom
import store from "../../redux/store";
import { useRouter } from "vue-router";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
const route = useRouter();

console.log("meals", meals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.currentRoute._value.path.split("/")[3];
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<script>
export default {
  name: "Meal",
};
</script>
