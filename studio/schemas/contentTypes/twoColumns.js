import TwoColumns from '../components/renderers/TwoColmuns';

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
    {
      name: 'leftPercentage',
      title: 'Left Column Percentage',
      description:
        'In case 2 columns are not equal together. Blank is considered 50/50',
      type: 'string',
      options: {
        list: ['1/2', '1/3', '1/4', '1/5', '1/6', '2/3', '3/4', '4/5', '5/6'],
      },
    },
    {
      name: 'dropColumnScreenSize',
      title: 'Display Into 1 Column At Screen Size',
      description: 'SM: 640px, MD: 768px, LG: 1024px, XL: 1280px, 2XL: 1536px',
      type: 'string',
      options: {
        list: ['SM', 'MD', 'LG', 'XL', '2XL'],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      leftContent: 'leftContent',
      rightContent: 'rightContent',
      leftPercentage: 'leftPercentage',
      dropColumnScreenSize: 'dropColumnScreenSize',
    },
    prepare(selection) {
      return selection;
    },
    component: TwoColumns,
  },
};
