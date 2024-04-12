import { describe, test, vi, expect } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import { RouterLink } from 'vue-router';

import { i18n } from '@/locales/i18n';
import { router } from '@/router/index';

import LocalSwitch from '@/components/_shared/LocaleSwitch.vue';

describe('LocalSwitch', () => {
  const wrapper = shallowMount(LocalSwitch, {
    global: {
      plugins: [router, i18n],
    },
  });

  test('Is defined', () => {
    expect(wrapper).toBeDefined();
  });

  test('changes locale on menu click', async () => {
    const en = wrapper.find('[data-test=en]');
    const fr = wrapper.find('[data-test=fr]');

    en.trigger('click');
    expect(i18n.global.locale.value).toBe('en');

    fr.trigger('click');
    expect(i18n.global.locale.value).toBe('fr');
  });
});
