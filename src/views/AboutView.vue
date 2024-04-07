<script setup lang="ts"></script>

<template>
  <div class="container my-6">
    <div class="columns">
      <div class="column has-text-centered">
        <h1 class="title">About</h1>

        <a href="https://vuejs.org/" target="_blank">
          <img src="@/assets/vue.svg" class="minor vue" alt="Vue logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src="@/assets/vite.svg" class="minor vite" alt="Vite logo" />
        </a>
        <a href="https://typescriptlang.org/" target="_blank">
          <img src="@/assets/typescript.svg" class="minor typescript" alt="TypeScript logo" />
        </a>
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
      <div class="column has-text-centered">
        <h4 class="title is-4">Additional Documentation</h4>

        <p class="documentation">
          <a href="https://router.vuejs.org" target="_blank">Vue Router</a> |
          <a href="https://test-utils.vuejs.org" target="_blank">Vue Test Utils</a> |
          <a href="https://ajv.js.org/" target="_blank">AVJ</a> |
          <a href="https://json-schema.org/" target="_blank">JSON Schema</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.minor {
  height: 3em;
  margin: 1em;
}
</style>
