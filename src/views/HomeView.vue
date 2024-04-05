<script setup lang="ts">
import SimpleCard from '@/components/_shared/SimpleCard.vue';
import LocalCounterDemo from '@/components/LocalCounterDemo.vue';
import StoreCounterDemo from '@/components/StoreCounterDemo.vue';
import ApiCallDemo from '@/components/ApiCallDemo.vue';

const { VITE_APP_NAME } = import.meta.env;
</script>

<template>
  <div class="columns">
    <div class="column has-text-centered">
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="major vue" alt="Vue logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img src="@/assets/vite.svg" class="major vite" alt="Vite logo" />
      </a>
      <a href="https://typescriptlang.org/" target="_blank">
        <img src="@/assets/typescript.svg" class="major typescript" alt="TypeScript logo" />
      </a>

      <h1 class="title is-1">{{ VITE_APP_NAME }}</h1>
      <p>With some tools</p>

      <a href="https://pinia.vuejs.org" target="_blank">
        <img src="@/assets/pinia.svg" class="minor pinia" alt="Pinia logo" />
      </a>
      <a href="https://sass-lang.com" target="_blank">
        <img src="@/assets/sass.svg" class="minor sass" alt="Sass logo" />
      </a>
      <a href="https://bulma.io" target="_blank">
        <img src="@/assets/bulma.svg" class="minor bulma" alt="Bulma logo" />
      </a>
      <a href="https://axios-http.com/" target="_blank">
        <img src="@/assets/axios.svg" class="minor axios" alt="Axios logo" />
      </a>
      <a href="https://vitest.dev" target="_blank">
        <img src="@/assets/vitest.svg" class="minor vitest" alt="Vitest logo" />
      </a>

      <p>And tooling</p>

      <a href="https://eslint.org" target="_blank">
        <img src="@/assets/eslint.svg" class="minor eslint" alt="ESLint logo" />
      </a>
      <a href="https://prettier.io" target="_blank">
        <img src="@/assets/prettier.svg" class="minor prettier" alt="Prettier logo" />
      </a>
      <a href="https://code.visualstudio.com" target="_blank">
        <img src="@/assets/vscode.svg" class="minor vscode" alt="VSCode logo" />
      </a>
    </div>
  </div>
  <div class="columns">
    <div class="column is-one-third">
      <SimpleCard header-title="Local Counter Demo">
        <LocalCounterDemo />
      </SimpleCard>
    </div>
    <div class="column is-one-third">
      <SimpleCard header-title="Store Counter Demo (1)">
        <StoreCounterDemo />
      </SimpleCard>
    </div>
    <div class="column is-one-third">
      <SimpleCard header-title="Store Counter Demo (2)">
        <StoreCounterDemo />
      </SimpleCard>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <SimpleCard header-title="Api Call">
        <ApiCallDemo />
      </SimpleCard>
    </div>
  </div>
  <div class="columns">
    <div class="column has-text-centered">
      <h4 class="title is-4">Documentation</h4>

      <p class="documentation">
        <a href="https://router.vuejs.org" target="_blank">Vue Router</a> |
        <a href="https://test-utils.vuejs.org" target="_blank">Vue Test Utils</a> |
        <a href="https://axios-http.com/" target="_blank">Axios</a> |
        <a href="https://ajv.js.org/" target="_blank">AVJ</a> |
        <a href="https://json-schema.org/" target="_blank">JSON Schema</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.major {
  height: 5em;
  margin: 2em;
  will-change: filter;
  transition: filter 300ms;

  &.vite:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  &.typescript:hover {
    filter: drop-shadow(0 0 2em #3178c6aa);
  }
}
.minor {
  height: 3em;
  margin: 1em;
}

/*
.documentation {
  a {
    &::after {
      content: ' |';
    }
    &:last-child {
      &::after {
        content: '';
      }
    }
  }
}
*/
</style>
