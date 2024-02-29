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
          <router-link to="/">
            <img
              :src="meal.strMealThumb"
              :alt="meal.strMeal"
              class="rounded-t-md h-64 w-full object-cover cursor-pointer"
            />
          </router-link>
          <div class="p-2">
            <h3 class="font-semibold">{{ meal.strMeal }}</h3>
            <p class="mt-2">{{ meal.strInstructions.slice(0, 100) }}...</p>

            <div class="flex justify-between items-center my-3">
              <div
                class="py-2 px-3 rounded-md bg-[#eb0014] text-white w-fit text-sm"
              >
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
import { computed, onMounted, ref } from "vue";

// Custom
import store from "../../redux/store";
import { useRouter } from "vue-router";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
const route = useRouter();

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
