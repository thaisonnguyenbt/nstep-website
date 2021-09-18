export default {
  name: 'lineBreak',
  type: 'object',
  title: 'Line Break',
  fields: [
    {
      name: 'style',
      type: 'string',
      options: {
        list: ['break', 'divider'],
      },
    },
  ],
};
