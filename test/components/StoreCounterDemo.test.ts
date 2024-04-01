import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';

import StoreCounterDemo from '@/components/StoreCounterDemo.vue';

describe('StoreCounterDemo', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('decrements the store counter on click', async () => {
    const wrapper = mount(StoreCounterDemo);
    await wrapper.findAll('button')[0].trigger('click');
    expect(wrapper.find('input').element.value).toBe(String('-1'));
  });

  test('increments the store counter on click', async () => {
    const wrapper = mount(StoreCounterDemo);
    await wrapper.findAll('button')[1].trigger('click');
    expect(wrapper.find('input').element.value).toBe(String('1'));
  });
});
