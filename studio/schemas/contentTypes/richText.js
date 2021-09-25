import { FaAlignCenter, FaExpandArrowsAlt } from 'react-icons/fa';
import TextCenter from '../renderers/TextCenter';
import TextColor from '../renderers/TextColor';

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
          {
            title: 'Font Lato',
            value: 'font-lato',
            blockEditor: {
              icon: () => 'Font Lato',
            },
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: 'textColor',
            title: 'Text Color',
            type: 'color',
            blockEditor: {
              icon: () => 'Text Color',
              render: TextColor,
            },
          },
          {
            name: 'margin',
            type: 'object',
            title: 'Margin (px)',
            fields: [
              {
                name: 'top',
                title: 'Top',
                type: 'number',
              },
              {
                title: 'Bottom',
                name: 'bottom',
                type: 'number',
              },
              {
                name: 'left',
                title: 'Left',
                type: 'number',
              },
              {
                name: 'right',
                title: 'Right',
                type: 'number',
              },
            ],
            blockEditor: {
              icon: FaExpandArrowsAlt,
              // render: TextColor,
            },
          },
        ],
      },
      of: [
        { type: 'nstepImage' },
        { type: 'lineBreak' },
        { type: 'partnerLogos' },
        { type: 'twoColums' },
        { type: 'fullWidthImage' },
        { type: 'sectionHeader' },
        { type: 'imageTilesGrid' },
        { type: 'imageTileWithDesc' },
        { type: 'benefits' },
        { type: 'teamQuote' },
        { type: 'teamQuotesCarousel' },
        { type: 'imageWithInfoBox' },
        { type: 'vacancies' },
        { type: 'iconsBanner' },
        { type: 'approachPhases' },
        { type: 'highlightBoxesBanner' },
        { type: 'carousel' },
      ],
    },
  ],
};
