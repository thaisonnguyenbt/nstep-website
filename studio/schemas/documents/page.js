export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      description: "Page's title to be displayed in browser tab and for SEO",
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description:
        'Slug will be used to generate the page url and to uniquely identify the page',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'isRoot',
      type: 'boolean',
      title: 'Is this a root page ?',
      description:
        'The pages hierarchy and sitemap will be generated from Root page. Only 1 root page allowed',
    },
    {
      name: 'navigationTitle',
      type: 'string',
      title: 'Page Navigation Title',
      description: 'Page Navigation Title to be displayed in hyperlinks',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Page Description',
      description: "Page's short description for SEO",
    },
    {
      name: 'tags',
      type: 'tags',
      title: 'Tags',
    },
    {
      name: 'seoMetaImage',
      type: 'nstepImage',
      title: 'SEO Meta Image',
      description: 'Thumbnail image for SEO and social sharing',
    },
    {
      name: 'children',
      title: 'Chilren Pages',
      type: 'array',
      of: [
        {
          type: 'page',
        },
      ],
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
    },
  ],
  orderings: [
    {
      name: 'titleAsc',
      title: 'Title Ascending',
      by: [
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'titleDesc',
      title: 'Title Descending',
      by: [
        {
          field: 'title',
          direction: 'desc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      slug: 'slug',
      media: 'seoMetaImage',
    },
    prepare({ title = 'No title', description, media }) {
      return {
        title,
        media,
        description,
      };
    },
  },
};
