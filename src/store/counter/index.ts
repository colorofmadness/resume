import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0);
  const doubleCount = computed<number>(() => count.value * 2);

  const increment = () => {
    count.value++;
  };

  return { count, doubleCount, increment };
});

export default useCounterStore;
