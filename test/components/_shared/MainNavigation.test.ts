import { describe, test, vi, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { RouterLink } from 'vue-router';

import MainNavigation from '@/components/_shared/MainNavigation.vue';

vi.mock('vue-router');

describe('MainNavigation', () => {
  const wrapper = shallowMount(MainNavigation);

  test('Is defined', () => {
    expect(wrapper).toBeDefined();
  });

  test('has at least one link', () => {
    expect(wrapper.findAll('.navbar-item').length).greaterThanOrEqual(1);
  });

  test('has the first link to the home page', async () => {
    const link = wrapper.findComponent(RouterLink);
    expect(link.props().to).toStrictEqual('/');
  });
});
