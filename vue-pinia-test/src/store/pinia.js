import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipeStore", () => {
  const recipes = ref([]);
  const recipe = {
    id: 1,
    title: "First recipe",
    time: 20,
    price: 500,
    filename: "20230531_cNj3iaOi7Gq8xUZ.jpg",
  };
  return { recipes, recipe };
});

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
