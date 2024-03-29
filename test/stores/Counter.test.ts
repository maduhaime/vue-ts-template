// stores/counter.spec.ts
import { describe, expect, test } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '@/stores/Counter';

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('increase counter (default)', () => {
    const counterStore = useCounterStore();
    expect(counterStore.count).toBe(0);
    counterStore.increase();
    expect(counterStore.count).toBe(1);
  });

  test('increase by 10', () => {
    const counterStore = useCounterStore();
    expect(counterStore.count).toBe(0);
    counterStore.increase(10);
    expect(counterStore.count).toBe(10);
  });

  test('decrease counter (default)', () => {
    const counterStore = useCounterStore();
    expect(counterStore.count).toBe(0);
    counterStore.decrease();
    expect(counterStore.count).toBe(-1);
  });

  test('decrease counter by 10', () => {
    const counterStore = useCounterStore();
    expect(counterStore.count).toBe(0);
    counterStore.decrease(10);
    expect(counterStore.count).toBe(-10);
  });

  test('reset the counter', () => {
    const counterStore = useCounterStore();
    counterStore.increase();
    counterStore.reset();
    expect(counterStore.count).toBe(0);
  });
});
