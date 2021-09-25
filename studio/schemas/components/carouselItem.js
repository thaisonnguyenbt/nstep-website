export default {
  name: 'carouselItem',
  title: 'Carousel Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      descriotion: 'Component Title - Not rendered in UI',
      type: 'string',
    },
    {
      name: 'isSingleColumn',
      title: 'Single Colum',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'richText',
      hidden: ({ parent }) => !parent.isSingleColumn,
    },
    {
      name: 'twoColumnsContent',
      title: '2 Columns Content',
      type: 'twoColums',
      hidden: ({ parent }) => parent.isSingleColumn,
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
