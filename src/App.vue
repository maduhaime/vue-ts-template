<script setup lang="ts">
import MainNavigation from '@/components/_shared/MainNavigation.vue';
</script>

<template>
  <MainNavigation></MainNavigation>
  <div class="container my-6">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
