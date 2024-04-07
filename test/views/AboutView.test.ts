import { expect, test } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import AboutView from '@/views/AboutView.vue';

describe('App', () => {
  const wrapper = shallowMount(AboutView);

  test('is defined', () => {
    expect(AboutView).toBeDefined();
  });

  test('displays the header title', () => {
    expect(wrapper.find('h1').text()).toContain('About');
  });
});
