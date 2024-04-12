import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import { i18n } from '@/locales/i18n';

import { router } from '@/router';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(i18n);
app.mount('#app');
