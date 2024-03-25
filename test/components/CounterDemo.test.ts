import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import CounterDemo from '@/components/CounterDemo.vue';

test('Displays Header Title', () => {
  const wrapper = mount(CounterDemo, {
    props: {
      headerTitle: 'Hello world',
    },
  });

  expect(wrapper.text()).toContain('Hello world');
});
