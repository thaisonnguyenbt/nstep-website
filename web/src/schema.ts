import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen';

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: 'page';

  /**
   * Page Title — `string`
   *
   * Page's title to be displayed in browser tab and for SEO
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Slug will be used to generate the page url and to uniquely identify the page
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Dark Theme — `boolean`
   *
   * enable this field to render page in dark color
   */
  darkTheme?: boolean;

  /**
   * Page Navigation Title — `string`
   *
   * Page Navigation Title to be displayed in hyperlinks
   */
  navigationTitle?: string;

  /**
   * Page Description — `text`
   *
   * Page's short description for SEO
   */
  description?: string;

  /**
   * Tags — `tags`
   *
   *
   */
  tag?: Array<Tag>;

  /**
   * SEO Meta Image — `nstepImage`
   *
   * Thumbnail image for SEO and social sharing
   */
  seoMetaImage?: NstepImage;

  /**
   * Header Background Image — `nstepImage`
   *
   * Background image to be displayed in the header
   */
  headerBackgroundImage?: NstepImage;

  /**
   * menuItems — `array`
   *
   * Header menu items for the current page and its children
   */
  menuItems?: Array<SanityKeyed<HeaderMenuItem>>;

  /**
   * Chilren Pages — `array`
   *
   *
   */
  children?: Array<SanityKeyed<LocalePage>>;

  /**
   * Body — `richText`
   *
   *
   */
  _rawBody?: RichText;
}

/**
 * LocalePage
 *
 *
 */
export interface LocalePage extends SanityDocument {
  _type: 'localePage';

  /**
   * Page Title — `localeString`
   *
   * Page's title to be displayed in browser tab and for SEO
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * Slug will be used to generate the page url and to uniquely identify the page
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Dark Theme — `localeBoolean`
   *
   * enable this field to render page in dark color
   */
  darkTheme?: LocaleBoolean;

  /**
   * Page Navigation Title — `localeString`
   *
   * Page Navigation Title to be displayed in hyperlinks
   */
  navigationTitle?: LocaleString;

  /**
   * Page Description — `localeText`
   *
   * Page's short description for SEO
   */
  description?: LocaleText;

  /**
   * Tags — `tags`
   *
   *
   */
  tags?: Array<Tag>;

  /**
   * SEO Meta Image — `localeNstepImage`
   *
   * Thumbnail image for SEO and social sharing
   */
  seoMetaImage?: LocaleNstepImage;

  /**
   * Header Background Image — `localeNstepImage`
   *
   * Background image to be displayed in the header
   */
  headerBackgroundImage?: LocaleNstepImage;

  /**
   * menuItems — `array`
   *
   * Header menu items for the current page and its children
   */
  menuItems?: Array<SanityKeyed<HeaderMenuItem>>;

  /**
   * Chilren Pages — `array`
   *
   *
   */
  children?: Array<SanityKeyed<LocalePage>>;

  /**
   * Body — `localeRichText`
   *
   *
   */
  _rawBody?: LocaleRichText;
}

export type LocaleString = {
  _type: 'localeString';
  /**
   * English — `string`
   *
   * Page's title to be displayed in browser tab and for SEO
   */
  en?: string;

  /**
   * Vietnam — `string`
   *
   * Page's title to be displayed in browser tab and for SEO
   */
  vn?: string;
};

export type LocaleBoolean = {
  _type: 'localeBoolean';
  /**
   * English — `boolean`
   *
   * enable this field to render page in dark color
   */
  en?: boolean;

  /**
   * Vietnam — `boolean`
   *
   * enable this field to render page in dark color
   */
  vn?: boolean;
};

export type LocaleText = {
  _type: 'localeText';
  /**
   * English — `text`
   *
   * Page's short description for SEO
   */
  en?: string;

  /**
   * Vietnam — `text`
   *
   * Page's short description for SEO
   */
  vn?: string;
};

export type LocaleNstepImage = {
  _type: 'localeNstepImage';
  /**
   * English — `nstepImage`
   *
   * Thumbnail image for SEO and social sharing
   */
  en?: NstepImage;

  /**
   * Vietnam — `nstepImage`
   *
   * Thumbnail image for SEO and social sharing
   */
  vn?: NstepImage;
};

export type LocaleRichText = {
  _type: 'localeRichText';
  /**
   * English — `richText`
   *
   *
   */
  en?: RichText;

  /**
   * Vietnam — `richText`
   *
   *
   */
  vn?: RichText;
};

export type RichText = Array<SanityKeyed<SanityBlock>>;

export type LineBreak = {
  _type: 'lineBreak';
  /**
   * style — `string`
   *
   *
   */
  style?: 'break' | 'divider';
};

export type TwoColums = {
  _type: 'twoColums';
  /**
   * Title — `string`
   *
   * Component title - used to reference in studio only - not displayed in UI
   */
  title?: string;

  /**
   * Left Content — `richText`
   *
   * Content on the left column
   */
  leftContent?: RichText;

  /**
   * Right Content — `richText`
   *
   * Content on the right column
   */
  rightContent?: RichText;
};

export type FullWidthImage = {
  _type: 'fullWidthImage';
  /**
   * Image — `nstepImage`
   *
   *
   */
  image?: NstepImage;
};

export type SectionHeader = {
  _type: 'sectionHeader';
  /**
   * Header Text — `string`
   *
   *
   */
  header?: string;

  /**
   * Section Id — `string`
   *
   *
   */
  sectionId?: string;
};

export type NstepImage = {
  _type: 'nstepImage';
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
};

export type PartnerLogoItem = {
  _type: 'partnerLogoItem';
  /**
   * Target Link — `string`
   *
   * URL link to when user click
   */
  targetLink?: string;

  /**
   * Logo Image — `nstepImage`
   *
   *
   */
  image?: NstepImage;
};

export type PatnerLogos = {
  _type: 'patnerLogos';
  /**
   * Component Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Logos — `array`
   *
   * List of the logo items
   */
  logos?: Array<SanityKeyed<PartnerLogoItem>>;
};

export type ImageTilesGrid = {
  _type: 'imageTilesGrid';
  /**
   * Component Title — `string`
   *
   * Component Title - to be referenced in CMS only
   */
  title?: string;

  /**
   * Image Tiles List — `array`
   *
   * List of the image tiles with title and description
   */
  imageTiles?: Array<SanityKeyed<ImageTileWithDesc>>;
};

export type ImageTileWithDesc = {
  _type: 'imageTileWithDesc';
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Display Direction — `string`
   *
   *
   */
  direction?: 'vertical' | 'horizontal';

  /**
   * Image — `nstepImage`
   *
   *
   */
  image?: NstepImage;
};

export type BenefitItem = {
  _type: 'benefitItem';
  /**
   * Short Description — `string`
   *
   *
   */
  shortDesc?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
};

export type Benefits = {
  _type: 'benefits';
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Benefit Items — `array`
   *
   *
   */
  benefitItems?: Array<SanityKeyed<BenefitItem>>;
};

export type TeamQuote = {
  _type: 'teamQuote';
  /**
   * Quote — `array`
   *
   *
   */
  quote?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Person Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Person Position — `string`
   *
   *
   */
  position?: string;
};

export type TeamQuotesCarousel = {
  _type: 'teamQuotesCarousel';
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Component background image — `nstepImage`
   *
   *
   */
  backgroundImage?: NstepImage;

  /**
   * Quotes — `array`
   *
   *
   */
  quotes?: Array<SanityKeyed<TeamQuote>>;
};

export type ImageWithInfoBox = {
  _type: 'imageWithInfoBox';
  /**
   * Header — `text`
   *
   *
   */
  header?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Button Text — `text`
   *
   *
   */
  buttonText?: string;

  /**
   * Button Link — `text`
   *
   *
   */
  buttonLink?: string;

  /**
   * Background Image — `nstepImage`
   *
   *
   */
  backgroundImage?: NstepImage;
};

export type HeaderMenuItem = {
  _type: 'headerMenuItem';
  /**
   * Title — `localeString`
   *
   * Title to be displayed on UI.
   */
  title?: string;

  /**
   * Link To — `localeString`
   *
   * Target Location Link.
   */
  linkTo?: string;

  /**
   * High Light Button — `boolean`
   *
   *
   */
  isHighLight?: boolean;
};

export type Documents = Page | LocalePage;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
export type Tag = {
  label: string;
  value: string;
};
