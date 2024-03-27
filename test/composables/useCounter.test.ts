import { describe, expect, test } from 'vitest';
import { ref } from 'vue';

import { useCounter } from '@/composables/useCounter';

describe('useCounter', () => {
  const { count, increase, decrease } = useCounter();

  test('counter has a default value of zero', () => {
    expect(count.value).toStrictEqual(0);
  });

  test('count increments', () => {
    increase();
    expect(count.value).toStrictEqual(1);
  });

  test('counter decrements', () => {
    decrease();
    expect(count.value).toStrictEqual(0);
  });
});
