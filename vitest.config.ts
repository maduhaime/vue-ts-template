import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

// DOC: https://vitest.dev/config/file.html#managing-vitest-config-file
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      coverage: {
        exclude: ['src/main.ts', 'src/router/**'],
      },
    },
  }),
);
