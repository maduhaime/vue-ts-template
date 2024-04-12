<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n();

function activeClass(nextLocale: string): string {
  return locale.value === nextLocale ? 'current-locale' : '';
}

function change(nextLocale: string): void {
  locale.value = nextLocale;
}
</script>

<template>
  <a v-for="l in availableLocales" @click="change(l)" :data-test="l" :class="activeClass(l)" class="navbar-item">
    {{ l.toUpperCase() }}
  </a>
</template>

<style lang="scss" scoped>
a.current-locale {
  font-weight: 700;
  color: green;
}
</style>
