import Ajv from 'ajv';
import { schema } from '@/locales/schema';

import en_US from '@/locales/en_US.json';
import fr_CA from '@/locales/fr_CA.json';

const ajv = new Ajv({ allErrors: true });

describe('i18n', () => {
  test('has all english translation keys', () => {
    const validate = ajv.compile(schema);
    const valid = validate(en_US);
    if (!valid) console.log(validate.errors);

    expect(valid).toBeTruthy();
  });
  test('has all french translation keys', () => {
    const validate = ajv.compile(schema);
    const valid = validate(fr_CA);
    if (!valid) console.log(validate.errors);

    expect(valid).toBeTruthy();
  });
});
