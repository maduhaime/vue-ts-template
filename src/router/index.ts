import { createWebHistory, createRouter } from 'vue-router';

import { routes } from '@/router/routes';

export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active',
  routes,
});
