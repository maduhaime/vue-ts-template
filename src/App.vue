<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainNavigation from '@/components/_shared/MainNavigation.vue';
import PageFooter from '@/components/_shared/PageFooter.vue';

const year = new Date().getFullYear();
</script>

<template>
  <MainNavigation></MainNavigation>
  <main>
    <RouterView />
  </main>
  <PageFooter>&copy {{ year }} - Marc-Antoine Duhaime</PageFooter>
</template>

<style lang="scss" scoped></style>
