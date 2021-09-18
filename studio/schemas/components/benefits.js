export default {
  name: 'benefits',
  title: 'Benefits',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      descriotion: 'Component Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'benefitItems',
      title: 'Benefit Items',
      type: 'array',
      of: [{ type: 'benefitItem' }],
    },
  ],
};
