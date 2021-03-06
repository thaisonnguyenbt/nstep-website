import SectionHeader from './renderers/SectionHeader';

export default {
  name: 'sectionHeader',
  title: 'Section Header',
  type: 'object',
  fields: [
    {
      name: 'header',
      title: 'Header Text',
      descriotion: 'Section header title text',
      type: 'string',
    },
    {
      name: 'sectionId',
      title: 'Section Id',
      descriotion: 'Id tag to use as a anchor for navigation',
      type: 'string',
    },
  ],
  preview: {
    select: {
      header: 'header',
      sectionId: 'sectionId',
    },
    prepare(selection) {
      return selection;
    },
    component: SectionHeader,
  },
};
