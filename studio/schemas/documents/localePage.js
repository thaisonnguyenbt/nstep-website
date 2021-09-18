export default {
  title: 'LocalePage',
  name: 'localePage',
  type: 'document',
  // This property says we should have all fields localized,
  // except any field that explicitly says localize: false
  localize: true,
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
      localize: false,
    },
    {
      name: 'darkTheme',
      type: 'boolean',
      title: 'Dark Theme',
      description: 'enable this field to render page in dark color',
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
      localize: false,
    },
    {
      name: 'seoMetaImage',
      type: 'nstepImage',
      title: 'SEO Meta Image',
      description: 'Thumbnail image for SEO and social sharing',
    },
    {
      name: 'headerBackgroundImage',
      type: 'nstepImage',
      title: 'Header Background Image',
      description: 'Background image to be displayed in the header',
    },
    {
      name: 'menuItems',
      type: 'array',
      description: 'Header menu items for the current page and its children',
      of: [
        {
          type: 'headerMenuItem',
        },
      ],
      localize: false,
    },
    {
      name: 'children',
      title: 'Chilren Pages',
      type: 'array',
      of: [
        {
          type: 'localePage',
        },
      ],
      localize: false,
    },
    {
      name: 'body',
      type: 'richText',
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
