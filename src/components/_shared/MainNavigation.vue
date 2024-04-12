<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import LocaleSwitch from '@/components/_shared/LocaleSwitch.vue';

const burger = ref<HTMLElement | null>(null);
const menu = ref<HTMLElement | null>(null);

function toggleMenu(event: MouseEvent): void {
  console.log('MainNavigation.vue toggleMenu() event.target:', event.target);
  event.preventDefault();

  burger.value?.classList.toggle('is-active');
  menu.value?.classList.toggle('is-active');
}
</script>

<template>
  <nav class="navbar is-light is-spaced has-shadow">
    <div class="navbar-brand">
      <a ref="burger" class="navbar-burger" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div ref="menu" class="navbar-menu">
      <div class="navbar-start">
        <RouterLink to="/" class="navbar-item">{{ $t('navigation.home') }}</RouterLink>
        <RouterLink to="/about" class="navbar-item">{{ $t('navigation.about') }}</RouterLink>
      </div>
      <div class="navbar-end">
        <LocaleSwitch></LocaleSwitch>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
a.router-link-active {
  font-weight: 700;
  color: red;
}

a.router-link-exact-active {
  font-weight: 700;
  color: blue;
}
</style>
