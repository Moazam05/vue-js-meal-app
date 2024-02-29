<template>
  <div class="flex flex-col p-8"></div>
</template>

<script setup>
// Library Imports
import { computed, onMounted } from "vue";
// Custom Imports
import store from "../../redux/store";
import axiosClient from "../../axiosClient";

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
