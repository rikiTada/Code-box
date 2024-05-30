<script setup>
import { useCounterStore } from "../store/pinia";
const store = useCounterStore();

defineProps({
  msg: String,
});

//↓が書かれているページが描画されたら、countに5が代入される。
// store.count = 5;
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="store.increment">
      count is {{ store.count }}
    </button>
    <p>doubleCount : count is {{ store.doubleCount }}</p>
  </div>
</template>
