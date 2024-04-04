<script setup lang="ts">
import MainNavigation from '@/components/_shared/MainNavigation.vue';
import PageFooter from '@/components/_shared/PageFooter.vue';
import { computed } from 'vue';

const year = new Date().getFullYear();
</script>

<template>
  <MainNavigation></MainNavigation>
  <div class="container my-6">
    <main>
      <RouterView />
    </main>
  </div>
  <PageFooter>&copy {{ year }} - Marc-Antoine Duhaime</PageFooter>
</template>

<style lang="scss" scoped></style>
