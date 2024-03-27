import { expect, test } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import HomeView from '@/views/HomeView.vue';

const { VITE_APP_NAME } = import.meta.env;

describe('App', () => {
  const wrapper = shallowMount(HomeView);

  test('is defined', () => {
    expect(HomeView).toBeDefined();
  });

  test('displays the header title', () => {
    expect(wrapper.find('h1').text()).toContain(VITE_APP_NAME);
  });
});
