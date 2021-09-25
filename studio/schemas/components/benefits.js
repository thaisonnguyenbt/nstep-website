import Benefits from './renderers/Benefits';

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
  preview: {
    select: {
      title: 'title',
      description: 'description',
      benefitItems: 'benefitItems',
    },
    prepare(selection) {
      return selection;
    },
    component: Benefits,
  },
};
