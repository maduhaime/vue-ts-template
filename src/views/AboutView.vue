<script setup lang="ts">
import { computed, onMounted } from 'vue';

import { technologies } from '@/data/technologies';
import TechnologyBox from '@/components/TechnologyBox.vue';

const sorted = computed(() => {
  return technologies.sort((a, b) => {
    return a.name.localeCompare(b.name, 'en', { ignorePunctuation: true });
  });
});

onMounted(() => {});
</script>

<template>
  <div class="container my-6">
    <h1 class="title">About</h1>

    <div class="columns is-multiline is-mobile">
      <div v-for="t in sorted" class="column is-one-third">
        <TechnologyBox :brand="t.name" :tagline="t.tagline" :link="t.link" :thumb="t.thumb">
          {{ t.description }}
        </TechnologyBox>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
