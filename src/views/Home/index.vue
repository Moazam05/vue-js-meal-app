<template>
  <div>Home</div>

  <pre>{{ meals }}</pre>
</template>

<script setup>
import { computed } from "vue";
import store from "../../redux/store";

const meals = computed(() => store.state.meals);
</script>

<script>
export default {
  name: "Home",
};
</script>
