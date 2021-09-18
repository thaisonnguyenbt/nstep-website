import { FaAlignCenter } from 'react-icons/fa';
import TextCenter from '../renderers/TextCenter';

export default {
  name: 'richText',
  type: 'array',
  title: 'Page body',
  of: [
    {
      type: 'block',
      title: 'Block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          {
            title: 'Center',
            value: 'text-center',
            blockEditor: {
              icon: FaAlignCenter,
              render: TextCenter,
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
      of: [
        { type: 'image' },
        { type: 'lineBreak' },
        { type: 'partnerLogos' },
        { type: 'twoColums' },
        { type: 'fullWidthImage' },
        { type: 'sectionHeader' },
        { type: 'imageTilesGrid' },
        { type: 'imageTileWithDesc' },
        { type: 'benefits' },
        { type: 'teamQuotesCarousel' },
        { type: 'imageWithInfoBox' },
      ],
    },
  ],
};
