<script setup>
import { useCounterStore, useRecipeStore } from "../store/pinia";
const store = useCounterStore();
const recipe = useRecipeStore();
defineProps({
  msg: String,
});
</script>
<template>
  <h1>{{ msg }}</h1>
  <div class="flex">
    <h3>HOME:</h3>
    <h4>count is {{ store.count }}</h4>
  </div>
  <button @click="store.count = 0">Reset</button>
  <div>
    <code>{{ store }}</code>
  </div>
  <div>
    <code>{{ recipe }}</code>
  </div>
</template>
