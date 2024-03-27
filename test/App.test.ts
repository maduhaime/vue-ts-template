import { describe, expect, test } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import App from '@/App.vue';

// const { VITE_APP_NAME } = import.meta.env;

// test('App is defined', () => {
//   expect(App).toBeDefined;
// });

const { VITE_APP_NAME } = import.meta.env;

describe('App', () => {
  const wrapper = shallowMount(App);

  test('has a container class', () => {
    expect(wrapper.html()).toContain('container');
  });
});
