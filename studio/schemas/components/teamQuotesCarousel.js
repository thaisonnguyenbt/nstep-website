import TeamQuotesCarousel from './renderers/TeamQuotesCarousel';

export default {
  name: 'teamQuotesCarousel',
  title: 'Team Quotes Carousel',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      descriotion: 'Component Title',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      title: 'Component background image',
      type: 'nstepImage',
    },
    {
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      of: [{ type: 'teamQuote' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      backgroundImage: 'backgroundImage',
      quotes: 'quotes',
    },
    prepare(selection) {
      return selection;
    },
    component: TeamQuotesCarousel,
  },
};
