# Vue 3 + Pinia

```bash
npm add pinia
```

## src/main.js

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");

```

## src/store/pinia.js

```javascript
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useXxxxStore = defineStore("hogeId", () => {
 // state
 const count = ref(0);

 // getters
 const doubleCount = computed(() => count.value * 2);

 // actions
 const increment = () => {
  count.value++;
 };

 return { count, doubleCount, increment };
});

```

## src/components/Hoge.vue

```vue
<script setup>
 import { useXxxxStore } from "../store/pinia";
 const store = useXxxxStore();

 // stateの読み取り
 const count = store.count

 // stateの更新
 store.count = 5

 // gettersにアクセス
 const doubledCount = store.double

 // actionsを実行
 store.increment()
</script>
```
