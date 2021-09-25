import ApproachPhases from './renderers/ApproachPhases';

export default {
  name: 'approachPhases',
  title: 'Approach Phases',
  type: 'object',
  fields: [
    {
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Title used to referenced in CMS only',
      type: 'string',
    },
    {
      name: 'phases',
      title: 'Phases',
      type: 'array',
      of: [{ type: 'approachPhase' }],
    },
  ],
  preview: {
    select: {
      componentTitle: 'componentTitle',
      phases: 'phases',
    },
    prepare(selection) {
      return selection;
    },
    component: ApproachPhases,
  },
};
