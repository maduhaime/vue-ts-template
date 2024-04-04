import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import { router } from '@/router';

import en_US from '@/locales/en_US';
import fr_CA from '@/locales/fr_CA';

const app = createApp(App);
const pinia = createPinia();

const i18n = createI18n({
  locale: 'en_US',
  messages: { en_US, fr_CA },
});

app.use(router);
app.use(pinia);
app.use(i18n);
app.mount('#app');
