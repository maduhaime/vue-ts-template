import { describe, test, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import PageFooter from '@/components/_shared/PageFooter.vue';

describe('PageFooter', () => {
  const wrapper = shallowMount(PageFooter, {
    global: {
      mocks: {
        $t: (msg: string) => msg,
      },
    },
  });

  test('Is defined', () => {
    expect(wrapper).toBeDefined();
  });

  // TODO: Add more test.  i.e. Trademarks
});
