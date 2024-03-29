import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  const doubleCount = computed(() => count.value * 2);

  function increase(qty: number = 1): void {
    count.value = count.value + qty;
  }

  function decrease(qty: number = 1): void {
    count.value = count.value - qty;
  }

  function reset(): void {
    count.value = 0;
  }

  return { count, doubleCount, increase, decrease, reset };
});
