import { ref } from 'vue';
import type { Ref } from 'vue';

// export function useCounter(integer: number = 0): Ref<number> {
//   const count = ref(integer);
//   return count;
// }

type useCounterReturn = {
  count: Ref<number>;
  increase: () => void;
  decrease: () => void;
};

export function useCounter(integer: number = 0): useCounterReturn {
  const count = ref(integer);

  function increase(): void {
    count.value++;
  }

  function decrease(): void {
    count.value--;
  }

  return {
    count,
    increase,
    decrease,
  };
}
