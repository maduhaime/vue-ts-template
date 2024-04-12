import { createI18n } from 'vue-i18n';

import en_US from '@/locales/en_US.json';
import fr_CA from '@/locales/fr_CA.json';

export const i18n = createI18n({
  legacy: false,
  allowComposition: true,
  locale: 'en',
  messages: { en: en_US, fr: fr_CA },
});
