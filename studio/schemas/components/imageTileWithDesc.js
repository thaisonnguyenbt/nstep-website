export default {
  name: 'imageTileWithDesc',
  title: 'Image Tile With Description',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'direction',
      title: 'Display Direction',
      type: 'string',
      options: {
        list: ['vertical', 'horizontal'],
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'nstepImage',
    },
  ],
};
