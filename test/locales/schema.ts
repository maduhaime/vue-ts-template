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
  },
  required: ['footer'],
  additionalProperties: false,
};
