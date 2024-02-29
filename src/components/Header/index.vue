<template>
  <div class="bg-green">
    <!-- Desktop -->
    <div class="container rm-container sm:hidden justify-between items-center">
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
            <router-link :to="`/meals/by-letter`">
              <div class="mx-2 text-white font-medium text-16px p-2">
                Meals By Letter
              </div>
            </router-link>
          </div>
          <div class="flex items-center cursor-pointer">
            <router-link :to="'/meals/by-ingredient'">
              <div class="mx-2 text-white font-medium text-16px p-2">
                Meals By Ingredients
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="container rm-container hidden sm:block">
      <div class="py-3 flex justify-between items-center sm:px-3">
        <router-link :to="{ name: 'Home' }">
          <div class="cursor-pointer" @click="navigateTo('/')">
            <i class="bx bx-bowl-rice text-2xl text-white"></i>
          </div>
        </router-link>
        <!-- Hamburger Menu Button -->
        <div class="flex items-center">
          <button @click="toggleMobileMenu" class="text-white">
            <i
              :class="{
                'bx bx-x text-2xl': isMobileMenuOpen,
                'bx bx-menu text-2xl': !isMobileMenuOpen,
              }"
            ></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="bg-green">
      <div class="container rm-container">
        <div class="flex flex-col items-center">
          <div class="flex items-center cursor-pointer my-2">
            <router-link
              :to="{ name: 'Meals' }"
              @click="
                toggleMobileMenu;
                scrollTo('meals');
              "
            >
              <div class="text-white font-medium text-16px p-2">
                Search Meals
              </div>
            </router-link>
          </div>
          <div class="flex items-center cursor-pointer my-2">
            <router-link
              :to="`/meals/by-letter`"
              @click="
                toggleMobileMenu;
                scrollTo('by-letter');
              "
            >
              <div class="text-white font-medium text-16px p-2">
                Meals By Letter
              </div>
            </router-link>
          </div>
          <div class="flex items-center cursor-pointer my-2">
            <router-link
              :to="'/meals/by-ingredient'"
              @click="
                toggleMobileMenu;
                scrollTo('by-ingredient');
              "
            >
              <div class="text-white font-medium text-16px p-2 mb-4">
                Meals By Ingredients
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function navigateTo(path) {
  // Add your navigation logic here
}
</script>

<script>
export default {
  name: "Header",
};
</script>
