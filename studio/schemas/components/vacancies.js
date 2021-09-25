import Vacancies from './renderers/Vacancies';

export default {
  title: 'Vacancies',
  name: 'vacancies',
  type: 'object',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Component Header',
    },
    {
      name: 'vacanciesList',
      title: 'Vacancies List',
      description: 'List of the job vacancies',
      type: 'array',
      of: [{ type: 'vacancyItem' }],
    },
  ],
  preview: {
    select: {
      header: 'header',
      vacanciesList: 'vacanciesList',
    },
    prepare(selection) {
      return selection;
    },
    component: Vacancies,
  },
};
