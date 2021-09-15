export default {
  name: 'headerMenuItem',
  type: 'object',
  title: 'Header Menu Item',
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
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
