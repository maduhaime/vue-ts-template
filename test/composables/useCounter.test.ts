import { describe, expect, test } from 'vitest';
import { ref } from 'vue';

import { useCounter } from '@/composables/useCounter';

describe('useCounter', () => {
  const { count, increase, decrease, reset } = useCounter();

  test('has a default value of zero', () => {
    expect(count.value).toStrictEqual(0);
  });

  test('increments count', () => {
    increase();
    expect(count.value).toStrictEqual(1);
  });

  test('decrements count', () => {
    decrease();
    expect(count.value).toStrictEqual(0);
  });

  test('resets the counter', () => {
    reset();
    expect(count.value).toStrictEqual(0);
  });
});
