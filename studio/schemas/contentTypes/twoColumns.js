export default {
  name: 'twoColums',
  type: 'object',
  title: 'Two Colmuns',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description:
        'Component title - used to reference in studio only - not displayed in UI',
    },
    {
      name: 'leftContent',
      type: 'richText',
      title: 'Left Content',
      description: 'Content on the left column',
    },
    {
      name: 'rightContent',
      type: 'richText',
      title: 'Right Content',
      description: 'Content on the right column',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
