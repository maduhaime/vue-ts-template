type Technology = {
  name: string;
  tagline?: string;
  description: string;
  link: string;
  thumb?: string;
};

export const technologies: Technology[] = [
  {
    name: 'Vue',
    tagline: 'The Progressive JavaScript Framework.',
    description: 'An approachable, performant and versatile framework for building web user interfaces.',
    link: 'https://vuejs.org',
    thumb: 'vue.svg',
  },
  {
    name: 'Vite',
    tagline: 'Next Generation Frontend Tooling.',
    description: 'Get ready for a development environment that can finally catch up with you.',
    link: 'https://vitejs.dev',
    thumb: 'vite.svg',
  },
  {
    name: 'TypeScript',
    tagline: 'TypeScript is JavaScript with syntax for types.',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    link: 'https://typescriptlang.org',
    thumb: 'typescript.svg',
  },
  {
    name: 'Pinia',
    tagline: 'The intuitive store for Vue.js.',
    description: 'Type Safe, Extensible, and Modular by design. Forget you are even using a store.',
    link: 'https://pinia.vuejs.org',
    thumb: 'pinia.svg',
  },
  {
    name: 'SASS',
    tagline: 'CSS with superpowers.',
    description:
      ' Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
    link: 'https://sass-lang.com',
    thumb: 'sass.svg',
  },
  {
    name: 'Bulma',
    tagline: 'The Modern CSS Framework.',
    description:
      'Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.',
    link: 'https://bulma.io',
    thumb: 'bulma.svg',
  },
  {
    name: 'Axios',
    tagline: 'Promise based HTTP client for the browser and node.js.',
    description:
      'Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface',
    link: 'https://axios-http.com',
    thumb: 'axios.svg',
  },
  {
    name: 'Vitest',
    tagline: 'Next Generation Testing Framework.',
    description: "A Vite-native testing framework. It's fast!",
    link: 'https://vitest.dev',
    thumb: 'vitest.svg',
  },
  {
    name: 'eslint',
    tagline: 'Find and fix problems in your JavaScript code.',
    description:
      'ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.',
    link: 'https://eslint.org',
    thumb: 'eslint.svg',
  },
  {
    name: 'Prettier',
    tagline: 'An opinionated code formatter.',
    description:
      'Supports many languages. Integrates with most editors. Your code is formatted on save. No need to discuss style in code review. Saves you time and energy',
    link: 'https://prettier.io',
    thumb: 'prettier.svg',
  },
  {
    name: 'Visual Studio',
    tagline: 'Code editing. Redefined.',
    description: 'Free. Built on open source. Runs everywhere.',
    link: 'https://code.visualstudio.com',
    thumb: 'vscode.svg',
  },
  {
    name: 'Vue Router',
    tagline: 'The official Router for Vue.js.',
    description: 'Expressive, configurable and convenient routing for Vue.js',
    link: 'https://router.vuejs.org',
    thumb: 'vue.svg',
  },
  {
    name: 'Vue Test Utils',
    tagline: 'Test Utils for Vue.js.',
    description: 'The official testing suite utils for Vue.js.',
    link: 'https://test-utils.vuejs.org',
    thumb: 'vue.svg',
  },
  {
    name: 'AVJ (JSON schema validator)',
    tagline: 'Security and reliability for JavaScript applications.',
    description:
      'It allows implementing complex data validation logic via declarative schemas for your JSON data, without writing code.',
    link: 'https://ajv.js.org',
    thumb: 'ajv.svg',
  },
  {
    name: 'JSON Schema',
    tagline: 'Build more. Break less. Empower others.',
    description: 'JSON Schema enables the confident and reliable use of the JSON data format.',
    link: 'https://json-schema.org',
    thumb: 'json-schema.svg',
  },
  {
    name: 'Vue I18n',
    tagline: 'Internationalization plugin for Vue.js.',
    description: 'Easy, powerful, and component-oriented for Vue.js',
    link: 'https://vue-i18n.intlify.dev',
    thumb: 'vue-i18n.svg',
  },
];
