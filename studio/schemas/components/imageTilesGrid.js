import ImageTilesGrid from './renderers/ImageTilesGrid';

export default {
  title: 'Image Tiles Grid',
  name: 'imageTilesGrid',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Component Title',
      description: 'Component Title - to be referenced in CMS only',
    },
    {
      name: 'imageTiles',
      title: 'Image Tiles List',
      description: 'List of the image tiles with title and description',
      type: 'array',
      of: [{ type: 'imageTileWithDesc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      imageTiles: 'imageTiles',
    },
    prepare({ title = 'No title', imageTiles = [] }) {
      return {
        title,
        imageTiles,
      };
    },
    component: ImageTilesGrid,
  },
};
