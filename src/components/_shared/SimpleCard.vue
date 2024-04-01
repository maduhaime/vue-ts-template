<script setup lang="ts">
type Props = {
  headerTitle: string | null;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ headerTitle }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <slot></slot>
      </div>
    </div>
    <footer class="card-footer"></footer>
  </div>
</template>

<style lang="scss" scoped></style>
