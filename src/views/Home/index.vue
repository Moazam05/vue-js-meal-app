<template>
  <div class="flex flex-col p-8">
    <div class="w-full justify-center">
      <InputText
        id="username"
        v-model="value"
        aria-describedby="username-help"
        class="w-full"
        placeholder="Search for Meals"
      />
    </div>

    <div class="flex justify-center gap-2 mt-2">
      <div
        v-for="letter in letters"
        :key="letter"
        class="text-2xl font-bold text-green"
      >
        <router-link :to="`/meals/${letter}`">{{ letter }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Library Imports
import { computed, onMounted } from "vue";
import InputText from "primevue/inputtext";
// Custom Imports
import store from "../../redux/store";
import axiosClient from "../../axiosClient";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");

  console.log("response", response?.data?.meals);
});
</script>

<script>
export default {
  name: "Home",
};
</script>
