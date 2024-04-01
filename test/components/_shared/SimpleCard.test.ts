import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import SimpleCard from '@/components/_shared/SimpleCard.vue';

describe('SimpleCard', () => {
  const wrapper = mount(SimpleCard, {
    props: {
      headerTitle: 'Hello world',
    },
    slots: {
      default: 'Main Content',
    },
  });

  test('displays the header title', () => {
    expect(wrapper.text()).toContain('Hello world');
  });

  test('renders the default slot', () => {
    expect(wrapper.html()).toContain('Main Content');
  });
});
