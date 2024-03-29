import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import LocalCounterDemo from '@/components/LocalCounterDemo.vue';

describe('CounterDemo', () => {
  const wrapper = mount(LocalCounterDemo, {
    props: {
      headerTitle: 'Hello world',
    },
  });

  test('Displays the header title', () => {
    expect(wrapper.text()).toContain('Hello world');
  });

  test('Increment the counter', async () => {
    const btn = wrapper.find('[data-test="btn"]');
    await btn.trigger('click');

    expect(btn.text()).toContain(1);
  });
});
