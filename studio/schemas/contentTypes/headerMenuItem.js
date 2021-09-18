export default {
  name: 'headerMenuItem',
  type: 'object',
  title: 'Header Menu Item',
  localize: true,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title to be displayed on UI.',
    },
    {
      name: 'linkTo',
      type: 'string',
      title: 'Link To',
      description: 'Target Location Link.',
      validation: Rule => Rule.error('This field is required.').required(),
    },
    {
      name: 'isHighLight',
      type: 'boolean',
      title: 'High Light Button',
      localize: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
