<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ headerTitle: string }>();

const count = ref(0);
</script>

<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ headerTitle }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="control">
          <button type="button" class="button is-primary" @click="count++">count is {{ count }}</button>
        </div>
      </div>
    </div>
    <footer class="card-footer"></footer>
  </div>
</template>

<style lang="scss" scoped></style>
