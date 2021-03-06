export default {
  name: 'partnerLogoItem',
  title: 'partnerLogoItem',
  type: 'object',
  fields: [
    {
      name: 'targetLink',
      title: 'Target Link',
      type: 'string',
      description: 'URL link to when user click',
    },
    {
      name: 'image',
      title: 'Logo Image',
      type: 'nstepImage',
    },
    {
      name: 'hoverImage',
      title: 'Hover Image',
      description: 'Image displyed when hover mouse on',
      type: 'nstepImage',
    },
  ],
};
