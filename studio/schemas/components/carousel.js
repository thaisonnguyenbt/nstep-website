export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      descriotion: 'Component Title - Not rendered in UI',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'carouselItem' }],
    },
  ],
};
