<script setup lang="ts">
import { useCounter } from '@/composables/useCounter';

const { count, increase } = useCounter(0);

// Required for testing
// defineExpose({ count });
</script>

<template>
  <div class="control">
    <button data-test="btn" type="button" class="button is-primary" @click="increase()">count is {{ count }}</button>
  </div>
</template>

<style lang="scss" scoped></style>
