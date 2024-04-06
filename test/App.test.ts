import { describe, expect, test } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import { RouterView } from 'vue-router';
import App from '@/App.vue';

describe('App', () => {
  const wrapper = shallowMount(App);

  test('has a vue-router tag', () => {
    expect(wrapper.getComponent(RouterView)).toBeDefined();
  });
});
