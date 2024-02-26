<template>
  <div class="bg-green">
    <div class="container rm-container">
      <div class="py-3 flex justify-between items-center sm:px-3">
        <router-link :to="{ name: 'Home' }">
          <div class="cursor-pointer" @click="navigateTo('/')">
            <i class="bx bx-bowl-rice text-2xl text-white"></i>
          </div>
        </router-link>
        <div class="flex">
          <div class="flex items-center cursor-pointer">
            <router-link :to="{ name: 'Meals' }">
              <div class="mx-2 text-white font-medium text-16px p-2">
                Search Meals
              </div>
            </router-link>
          </div>
          <div class="flex items-center cursor-pointer">
            <router-link :to="`/meals/${letter}`">
              <div class="mx-2 text-white font-medium text-16px p-2">
                Meals By Letter
              </div>
            </router-link>
          </div>
          <div class="flex items-center cursor-pointer">
            <router-link :to="{}">
              <div class="mx-2 text-white font-medium text-16px p-2">
                Meals By Ingredients
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<script>
export default {
  name: "Header",
};
</script>
