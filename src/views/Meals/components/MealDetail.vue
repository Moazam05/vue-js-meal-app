<template>
  <div class="container rm-container">
    <div class="p-6">
      <div class="grid grid-cols-1 sm:grid-cols-1 gap-6 py-6 sm:py-0">
        <div class="bg-white shadow-lg rounded-md">
          <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="rounded-t-md h-96 w-full object-cover"
          />
          <div class="p-3">
            <div
              class="flex justify-between items-center sm:flex-col sm:items-start"
            >
              <h3 class="font-semibold">
                <span class="font-normal mr-1">Name:</span> {{ meal?.strMeal }}
              </h3>
              <h3 class="font-semibold">
                <span class="font-normal mr-1">Food Type:</span
                >{{ meal?.strCategory }}
              </h3>

              <h3 class="font-semibold">
                <span class="font-normal mr-1">Area:</span> {{ meal?.strArea }}
              </h3>
            </div>
            <p class="mt-2">{{ meal?.strInstructions?.slice(0, 500) }}</p>
            <div class="mt-4">
              <div class="flex gap-20 sm:flex-col sm:gap-4">
                <div class="min-w-40 sm:min-w-0">
                  <h3 class="font-semibold mb-2 items-center flex gap-1">
                    <i class="bx bx-bowl-hot"></i>

                    Ingredients
                  </h3>
                  <ul class="list-inside list-none mb-2">
                    <template v-for="(el, index) in 20" :key="i">
                      <li v-if="meal[`strIngredient${el}`]">
                        <span class="text-sm">{{ index + 1 }}.</span>
                        <span class="ml-1">{{
                          meal[`strIngredient${el}`]
                        }}</span>
                      </li>
                    </template>
                  </ul>
                </div>
                <div class="min-w-40 sm:min-w-0">
                  <h3 class="font-semibold items-center flex mb-2 gap-1">
                    <i class="bx bx-knife"></i>
                    Measures
                  </h3>
                  <ul class="list-inside list-none mb-2">
                    <template v-for="(el, index) in 20" :key="i">
                      <li
                        v-if="
                          meal[`strMeasure${el}`] &&
                          meal[`strMeasure${el}`].trim() !== ''
                        "
                      >
                        <span class="text-sm">{{ index + 1 }}.</span>
                        <span class="ml-1">{{ meal[`strMeasure${el}`] }}</span>
                      </li>
                    </template>
                  </ul>
                </div>

                <div class="flex w-full gap-4 sm:mb-4 sm:flex-col">
                  <a
                    :href="meal.strYoutube"
                    target="_blank"
                    class="block w-fit h-fit bg-transparent rounded-md border border-[#eb0014] p-2 text-[#eb0014] hover:bg-[#eb0014] hover:text-white text-sm text-center"
                  >
                    Watch on YouTube
                  </a>

                  <a
                    :href="meal.strSource"
                    target="_blank"
                    class="block w-fit h-fit bg-green rounded-md text-white p-2 text-sm text-center"
                  >
                    View Original Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../../../axiosClient";

const route = useRoute();
const meal = ref({});

onMounted(async () => {
  try {
    const res = await axiosClient.get(`lookup.php?i=${route.params.id}`);
    meal.value = res.data.meals[0];
  } catch (err) {
    console.error(err);
  }
});
</script>

<script>
export default {
  name: "MealDetail",
};
</script>
