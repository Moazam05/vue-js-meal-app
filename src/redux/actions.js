import axiosClient from "../axiosClient";

export async function searchMeals({ commit }, query) {
  try {
    const response = await axiosClient.get(`search.php?s=${query}`);
    commit("setSearchedMeals", response?.data?.meals);
  } catch (error) {
    console.error("Error fetching meals:", error);
  }
}

export async function searchMealsByLetter({ commit }, letter) {
  try {
    const response = await axiosClient.get(`search.php?f=${letter}`);
    commit("setMealsByLetter", response?.data?.meals);
  } catch (error) {
    console.error("Error fetching meals by letter:", error);
  }
}
