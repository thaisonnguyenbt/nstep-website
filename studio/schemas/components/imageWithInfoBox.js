import ImageWithInfoBox from './renderers/ImageWithInfoBox';

export default {
  name: 'imageWithInfoBox',
  title: 'Image With Info Box',
  type: 'object',
  fields: [
    {
      name: 'header',
      title: 'Header',
      descriotion: 'Info Box Header',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      descriotion: 'Info Box description text',
      type: 'text',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'nstepImage',
    },
  ],
  preview: {
    select: {
      header: 'header',
      description: 'description',
      buttonText: 'buttonText',
      buttonLink: 'buttonLink',
      backgroundImage: 'backgroundImage',
    },
    prepare(selection) {
      return selection;
    },
    component: ImageWithInfoBox,
  },
};
