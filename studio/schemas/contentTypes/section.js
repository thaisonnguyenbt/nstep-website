export default {
  name: 'section',
  description: 'One section to be displayed in full screen width',
  type: 'object',
  title: 'Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Section title - referenced in studio only - not used in UI',
    },
    {
      name: 'isFullScreenWidth',
      type: 'boolean',
      title: 'Display in full screen width ?',
      initialValue: false,
    },
    {
      name: 'withNestedContainer',
      type: 'boolean',
      initialValue: true,
      title: 'With nested container ?',
      description:
        'Only apply background in full screen but still display inner content within left-right margin',
      hidden: ({ parent }) => !parent?.isFullScreenWidth,
    },
    {
      name: 'backgroundColor',
      title: 'Section Background color',
      description: `Leave it blank to use current theme background`,
      type: 'color',
    },
    {
      name: 'body',
      type: 'richText',
      title: 'Section Content Body',
      description: 'Content in either free text or embed other components',
    },
  ],
};
