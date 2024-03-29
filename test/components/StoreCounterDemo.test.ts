import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';

import StoreCounterDemo from '@/components/StoreCounterDemo.vue';

describe('CounterDemo', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('Displays the header title', () => {
    const wrapper = mount(StoreCounterDemo, {
      props: {
        headerTitle: 'Hello world',
      },
    });
    expect(wrapper.text()).toContain('Hello world');
  });

  test('decrements the counter on click', async () => {
    const wrapper = mount(StoreCounterDemo, {
      props: {
        headerTitle: '',
      },
    });
    await wrapper.findAll('button')[0].trigger('click');
    expect(wrapper.find('input').element.value).toBe(String('-1'));
  });

  test('increments the counter on click', async () => {
    const wrapper = mount(StoreCounterDemo, {
      props: {
        headerTitle: '',
      },
    });
    await wrapper.findAll('button')[1].trigger('click');
    expect(wrapper.find('input').element.value).toBe(String('1'));
  });
});
