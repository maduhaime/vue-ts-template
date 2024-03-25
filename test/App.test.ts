import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import App from '@/App.vue';

const { VITE_APP_NAME } = import.meta.env;

test('App is defined', () => {
  expect(App).toBeDefined;
});

test('Displays Header Title', () => {
  const wrapper = mount(App);
  expect(wrapper.find('h1').text()).toContain(VITE_APP_NAME);
});
