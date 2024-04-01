<script setup lang="ts">
import { useCounterStore } from '@/stores/Counter';

const counterStore = useCounterStore();
</script>

<template>
  <div class="field has-addons">
    <div class="control">
      <button class="button is-danger" @click="counterStore.decrease()">
        <span class="is-family-monospace">-</span>
      </button>
    </div>
    <div class="control is-expanded">
      <input class="input has-text-centered" type="text" :value="counterStore.count" disabled />
    </div>
    <div class="control">
      <button class="button is-success" @click="counterStore.increase()">
        <span class="is-family-monospace">+</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
