import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import CounterDemo from '@/components/CounterDemo.vue';

describe('CounterDemo', () => {
  const wrapper = mount(CounterDemo, {
    props: {
      headerTitle: 'Hello world',
    },
  });

  test('Displays the header title', () => {
    expect(wrapper.text()).toContain('Hello world');
  });

  test('Increment the counter', async () => {
    const button = wrapper.find('button');
    await button.trigger('click');

    expect(wrapper.vm.count).toBe(1);
  });
});
