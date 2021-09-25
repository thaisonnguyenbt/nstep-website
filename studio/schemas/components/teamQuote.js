export default {
  name: 'teamQuote',
  title: 'teamQuote',
  type: 'object',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'name',
      title: 'Person Name',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Person Position',
      type: 'string',
    },
    {
      name: 'picture',
      title: 'Picture',
      type: 'nstepImage',
    },
  ],
};
