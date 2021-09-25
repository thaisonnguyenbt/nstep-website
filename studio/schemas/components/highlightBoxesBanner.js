import HighlightBoxesBannerComponent from './renderers/HighlightBoxesBanner';

export default {
  title: 'Highlight Boxes Banner',
  name: 'highlightBoxesBanner',
  type: 'object',
  fields: [
    {
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Title used to referenced in CMS only',
      type: 'string',
    },
    {
      name: 'contentBoxes',
      title: 'Content Boxes',
      type: 'array',
      of: [{ type: 'contentBox' }],
    },
  ],
  preview: {
    select: {
      componentTitle: 'componentTitle',
      contentBoxes: 'contentBoxes',
    },
    prepare(selection) {
      return selection;
    },
    component: HighlightBoxesBannerComponent,
  },
};
