export default {
  name: 'contentBox',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Component Title',
      description: 'Title used to referenced in CMS only',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'richText',
    },
  ],
};
