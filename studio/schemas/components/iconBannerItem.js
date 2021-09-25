export default {
  title: 'Icon Banner Item',
  name: 'iconBannerItem',
  type: 'object',
  fields: [
    {
      name: 'iconText',
      title: 'Icon Text',
      description: 'Text to display below the Icon',
      type: 'string',
    },
    {
      name: 'showSeparator',
      title: 'Show Separator',
      description: 'Show red line separator below thee icon',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'image',
      title: 'Icon Image',
      type: 'nstepImage',
    },
  ],
};
