<script setup lang="ts">
import { useCounterStore } from '@/stores/Counter';

type Props = {
  headerTitle: string | null;
};

const props = defineProps<Props>();

const counterStore = useCounterStore();
</script>

<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ headerTitle }}</p>
    </header>
    <div class="card-content">
      <div class="content">
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
      </div>
    </div>
    <footer class="card-footer"></footer>
  </div>
</template>

<style lang="scss" scoped></style>
