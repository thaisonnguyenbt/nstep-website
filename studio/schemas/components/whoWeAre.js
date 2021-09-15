export default {
  name: 'whoWeAre',
  type: 'object',
  title: 'Who We Are',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Component title to be displyed in red',
    },
    {
      name: 'leftContent',
      type: 'array',
      title: 'Left Content',
      description: 'Content on the left column',
      of: [{ type: 'block' }],
    },
    {
      name: 'rightContent',
      type: 'array',
      title: 'Right Content',
      description: 'Content on the right column',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
