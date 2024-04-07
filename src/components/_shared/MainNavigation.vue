<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

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
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <a ref="burger" class="navbar-burger" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div ref="menu" class="navbar-menu">
      <RouterLink to="/" class="navbar-item">Go to Home</RouterLink>
      <RouterLink to="/about" class="navbar-item">About</RouterLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
