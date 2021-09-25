import FullWidthImage from './renderers/FullWidthImage';

export default {
  name: 'fullWidthImage',
  title: 'Full Width Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      descriotion: 'Image to be displyed in full screen width',
      type: 'nstepImage',
    },
  ],
  preview: {
    select: {
      image: 'image',
    },
    prepare(selection) {
      return selection;
    },
    component: FullWidthImage,
  },
};
