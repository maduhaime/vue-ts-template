import { expect, test } from 'vitest';

import { helloWorld } from '@/utils/helloWorld';

describe('helloWord', () => {
  const str = 'Hello World !';

  test(`returns ${str}`, () => {
    expect(helloWorld()).toBe(str);
  });
});
