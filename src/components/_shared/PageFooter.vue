<script lang="ts" setup>
import { Tech } from '@/enums/technologies';
import { computed } from 'vue';

const technologies = computed(() => {
  const list: Array<Tech> = Object.values(Tech);
  return list.join(', ');
});
</script>

<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p class="is-size-6">
        <slot></slot>
      </p>
      <p class="is-size-7">
        <strong>{{ technologies }}</strong> and others trademarks are the property of their respective owners.
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
