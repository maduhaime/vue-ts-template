import { ref } from 'vue';
import type { Ref } from 'vue';

type counterComposable = {
  count: Ref<number>;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

export function useCounter(integer: number = 0): counterComposable {
  const count = ref(integer);

  function increase(qty: number = 1): void {
    count.value = count.value + qty;
  }

  function decrease(qty: number = 1): void {
    count.value = count.value - qty;
  }

  function reset(): void {
    count.value = 0;
  }

  return {
    count,
    increase,
    decrease,
    reset,
  };
}
