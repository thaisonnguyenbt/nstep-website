export default {
  title: 'Vacancy Item',
  name: 'vacancyItem',
  type: 'object',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: ['Fulltime', 'Part Time'],
      },
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
  ],
};
