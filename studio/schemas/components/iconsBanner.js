import IconsBanner from './renderers/IconsBanner';

export default {
  title: 'Icons Banner',
  name: 'iconsBanner',
  type: 'object',
  fields: [
    {
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Title used to referenced in CMS only',
      type: 'string',
    },
    {
      name: 'bannerItems',
      title: 'Banner Items',
      type: 'array',
      of: [{ type: 'iconBannerItem' }],
    },
  ],
  preview: {
    select: {
      componentTitle: 'componentTitle',
      bannerItems: 'bannerItems',
    },
    prepare(selection) {
      return selection;
    },
    component: IconsBanner,
  },
};
