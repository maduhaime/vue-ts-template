import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import SimpleCard from '@/components/_shared/SimpleCard.vue';

describe('SimpleCard', () => {
  const wrapper = mount(SimpleCard, {
    props: {
      headerTitle: 'Hello world',
    },
  });

  test('Displays the header title', () => {
    expect(wrapper.text()).toContain('Hello world');
  });
});
