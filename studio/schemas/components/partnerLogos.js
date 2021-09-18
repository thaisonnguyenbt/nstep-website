export default {
  title: 'Partner Logos',
  name: 'partnerLogos',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Component Title',
    },
    {
      name: 'logos',
      title: 'Logos',
      description: 'List of the logo items',
      type: 'array',
      of: [{ type: 'partnerLogoItem' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'No title' }) {
      return {
        title,
      };
    },
  },
};
