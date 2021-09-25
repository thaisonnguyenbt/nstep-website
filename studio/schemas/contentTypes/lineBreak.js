import LineBreakRenderer from '../renderers/LineBreakRenderer';

export default {
  name: 'lineBreak',
  type: 'object',
  title: 'Line Break',
  fields: [
    {
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: ['divider'],
      },
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
    },
    {
      name: 'size',
      title: 'Size (pixel)',
      type: 'number',
    },
    {
      name: 'isFullScreenWidth',
      title: 'Is Full Screen Width ?',
      description:
        'In case the body is limited in container but break for whole screen width',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      style: 'style',
      color: 'color.hex',
      size: 'size',
      isFullScreenWidth: 'isFullScreenWidth',
    },
    prepare(selection) {
      return selection;
    },
    component: LineBreakRenderer,
  },
};
