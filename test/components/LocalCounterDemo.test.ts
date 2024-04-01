import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import LocalCounterDemo from '@/components/LocalCounterDemo.vue';

describe('LocalCounterDemo', () => {
  const wrapper = mount(LocalCounterDemo);

  test('increments the local counter', async () => {
    const btn = wrapper.find('[data-test="btn"]');
    await btn.trigger('click');

    expect(btn.text()).toContain(1);
  });
});
