export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      name: 'isExternalLink',
      type: 'boolean',
      initialValue: false,
      title: 'Is This An External Link ?',
    },
    {
      name: 'externalLink',
      type: 'url',
      title: 'External Link',
      hidden: ({ parent }) => !parent.isExternalLink,
    },
    {
      name: 'internalPage',
      type: 'reference',
      title: 'Internal Page',
      to: [{ type: 'localePage' }],
      hidden: ({ parent }) => parent.isExternalLink,
    },
    {
      name: 'language',
      type: 'string',
      title: 'Target Page Language',
      options: {
        list: ['en', 'vn'],
      },
      hidden: ({ parent }) => parent.isExternalLink,
    },
    {
      name: 'anchor',
      type: 'string',
      title: 'Target Page Anchor',
      hidden: ({ parent }) => parent.isExternalLink,
    },
  ],
};
