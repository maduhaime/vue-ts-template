import { expect, test } from 'vitest';

import { helloWorld } from '@/utils/helloWorld.ts';

test('helloWord is Hello World !', () => {
  expect(helloWorld()).toBe('Hello World !');
});
