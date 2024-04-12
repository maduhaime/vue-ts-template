export const schema = {
  type: 'object',
  properties: {
    footer: {
      type: 'object',
      properties: {
        trademarks: { type: 'string' },
      },
      required: ['trademarks'],
    },
    navigation: {
      type: 'object',
      properties: {
        home: { type: 'string' },
        about: { type: 'string' },
      },
    },
  },
  required: ['footer'],
  additionalProperties: false,
};
