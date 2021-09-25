import { FaAtlas } from 'react-icons/fa';

export default {
  title: 'LocalePage',
  name: 'localePage',
  type: 'document',
  icon: FaAtlas,
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
      initialValue: false,
      localize: false,
      description: 'Enable this field to render page in dark color',
    },
    {
      name: 'backgroundColor',
      type: 'color',
      title: 'Page Background Color',
      description: 'Customize page background color in light mode',
      hidden: ({ document }) => document.darkTheme,
      localize: false,
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
      name: 'isMultiSectionsBoby',
      title: 'Is Multiple Sections Body',
      type: 'boolean',
      localize: false,
      initialValue: false,
      description:
        'Use this if page content body is complex and need to be split into many sections with different background horizontally',
    },
    {
      name: 'body',
      title: 'Page Content Body',
      description:
        'In case page content body is simple and can be managed in one container with left-right margin',
      type: 'richText',
      hidden: ({ document }) => document?.isMultiSectionsBoby,
    },
    {
      name: 'sections',
      title: 'Page Content Body By Sections',
      description:
        'In case body is complex and need to be devided into multiple sections with different background colors',
      type: 'array',
      of: [{ type: 'section' }],
      hidden: ({ document }) => !document?.isMultiSectionsBoby,
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
      subtitle: 'description',
      media: 'seoMetaImage',
    },
    prepare({ title = 'No title', subtitle, media }) {
      return {
        title,
        subtitle,
        media,
      };
    },
  },
};
