<script setup lang="ts">
import { useCounter } from '@/composables/useCounter';

type Props = {
  headerTitle: string | null;
};

const props = defineProps<Props>();

const { count, increase } = useCounter(0);

// Required for testing
defineExpose({ count });
</script>

<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ headerTitle }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="control">
          <button data-test="btn" type="button" class="button is-primary" @click="increase()">
            count is {{ count }}
          </button>
        </div>
      </div>
    </div>
    <footer class="card-footer"></footer>
  </div>
</template>

<style lang="scss" scoped></style>
