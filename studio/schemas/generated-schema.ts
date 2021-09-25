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
   * Enable this field to render page in dark color
   */
  darkTheme?: boolean;

  /**
   * Page Background Color — `color`
   *
   * Customize page background color in light mode
   */
  backgroundColor?: Color;

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
   * Is Multiple Sections Body — `boolean`
   *
   * Use this if page content body is complex and need to be split into many sections with different background horizontally
   */
  isMultiSectionsBoby?: boolean;

  /**
   * Page Content Body — `richText`
   *
   * In case page content body is simple and can be managed in one container with left-right margin
   */
  _rawBody?: RichText;

  /**
   * Page Content Body By Sections — `array`
   *
   * In case body is complex and need to be devided into multiple sections with different background colors
   */
  _rawSections?: Array<SanityKeyed<Section>>;
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
   * Dark Theme — `boolean`
   *
   * Enable this field to render page in dark color
   */
  darkTheme?: boolean;

  /**
   * Page Background Color — `color`
   *
   * Customize page background color in light mode
   */
  backgroundColor?: Color;

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
   * Is Multiple Sections Body — `boolean`
   *
   * Use this if page content body is complex and need to be split into many sections with different background horizontally
   */
  isMultiSectionsBoby?: boolean;

  /**
   * Page Content Body — `localeRichText`
   *
   * In case page content body is simple and can be managed in one container with left-right margin
   */
  body?: LocaleRichText;

  /**
   * Page Content Body By Sections — `localeArray`
   *
   * In case body is complex and need to be devided into multiple sections with different background colors
   */
  sections?: LocaleArray;
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
   * In case page content body is simple and can be managed in one container with left-right margin
   */
  en?: RichText;

  /**
   * Vietnam — `richText`
   *
   * In case page content body is simple and can be managed in one container with left-right margin
   */
  vn?: RichText;
};

export type LocaleArray = {
  _type: 'localeArray';
  /**
   * English — `array`
   *
   * In case body is complex and need to be devided into multiple sections with different background colors
   */
  en?: Array<SanityKeyed<Section>>;

  /**
   * Vietnam — `array`
   *
   * In case body is complex and need to be devided into multiple sections with different background colors
   */
  vn?: Array<SanityKeyed<Section>>;
};

export type RichText = Array<SanityKeyed<SanityBlock>>;

export type Section = {
  _type: 'section';
  /**
   * Title — `string`
   *
   * Section title - referenced in studio only - not used in UI
   */
  title?: string;

  /**
   * Display in full screen width ? — `boolean`
   *
   *
   */
  isFullScreenWidth?: boolean;

  /**
   * With nested container ? — `boolean`
   *
   * Only apply background in full screen but still display inner content within left-right margin
   */
  withNestedContainer?: boolean;

  /**
   * Section Background color — `color`
   *
   * Leave it blank to use current theme background
   */
  backgroundColor?: Color;

  /**
   * Section Content Body — `richText`
   *
   * Content in either free text or embed other components
   */
  body?: RichText;
};

export type LineBreak = {
  _type: 'lineBreak';
  /**
   * Style — `string`
   *
   *
   */
  style?: 'divider';

  /**
   * Color — `color`
   *
   *
   */
  color?: Color;

  /**
   * Size (pixel) — `number`
   *
   *
   */
  size?: number;

  /**
   * Is Full Screen Width ? — `boolean`
   *
   * In case the body is limited in container but break for whole screen width
   */
  isFullScreenWidth?: boolean;
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

  /**
   * Left Column Percentage — `string`
   *
   * In case 2 columns are not equal together. Blank is considered 50/50
   */
  leftPercentage?:
    | '1/2'
    | '1/3'
    | '1/4'
    | '1/5'
    | '1/6'
    | '2/3'
    | '3/4'
    | '4/5'
    | '5/6';

  /**
   * Display Into 1 Column At Screen Size — `string`
   *
   * SM: 640px, MD: 768px, LG: 1024px, XL: 1280px, 2XL: 1536px
   */
  dropColumnScreenSize?: 'SM' | 'MD' | 'LG' | 'XL' | '2XL';
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

  /**
   * Hover Image — `nstepImage`
   *
   * Image displyed when hover mouse on
   */
  hoverImage?: NstepImage;
};

export type PartnerLogos = {
  _type: 'partnerLogos';
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

  /**
   * Picture — `nstepImage`
   *
   *
   */
  picture?: NstepImage;
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
   * Header — `string`
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
   * Button Text — `string`
   *
   *
   */
  buttonText?: string;

  /**
   * Button Link — `string`
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

export type Vacancies = {
  _type: 'vacancies';
  /**
   * Component Header — `string`
   *
   *
   */
  header?: string;

  /**
   * Vacancies List — `array`
   *
   * List of the job vacancies
   */
  vacanciesList?: Array<SanityKeyed<VacancyItem>>;
};

export type VacancyItem = {
  _type: 'vacancyItem';
  /**
   * Job Title — `string`
   *
   *
   */
  jobTitle?: string;

  /**
   * Employment Type — `string`
   *
   *
   */
  employmentType?: 'Fulltime' | 'Part Time';

  /**
   * Country — `string`
   *
   *
   */
  country?: string;
};

export type IconsBanner = {
  _type: 'iconsBanner';
  /**
   * Component Title — `string`
   *
   * Title used to referenced in CMS only
   */
  componentTitle?: string;

  /**
   * Banner Items — `array`
   *
   *
   */
  bannerItems?: Array<SanityKeyed<IconBannerItem>>;
};

export type IconBannerItem = {
  _type: 'iconBannerItem';
  /**
   * Icon Text — `string`
   *
   * Text to display below the Icon
   */
  iconText?: string;

  /**
   * Show Separator — `boolean`
   *
   * Show red line separator below thee icon
   */
  showSeparator?: boolean;

  /**
   * Icon Image — `nstepImage`
   *
   *
   */
  image?: NstepImage;
};

export type ApproachPhase = {
  _type: 'approachPhase';
  /**
   * Header — `string`
   *
   *
   */
  header?: string;

  /**
   * Action — `string`
   *
   *
   */
  action?: string;

  /**
   * description — `text`
   *
   *
   */
  description?: string;
};

export type ApproachPhases = {
  _type: 'approachPhases';
  /**
   * Component Title — `string`
   *
   * Title used to referenced in CMS only
   */
  componentTitle?: string;

  /**
   * Phases — `array`
   *
   *
   */
  phases?: Array<SanityKeyed<ApproachPhase>>;
};

export type ContentBox = {
  _type: 'contentBox';
  /**
   * content — `array`
   *
   *
   */
  content?: Array<SanityKeyed<SanityBlock>>;
};

export type HighlightBoxesBanner = {
  _type: 'highlightBoxesBanner';
  /**
   * Component Title — `string`
   *
   * Title used to referenced in CMS only
   */
  componentTitle?: string;

  /**
   * Content Boxes — `array`
   *
   *
   */
  contentBoxes?: Array<SanityKeyed<ContentBox>>;
};

export type CarouselItem = {
  _type: 'carouselItem';
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Single Colum — `boolean`
   *
   *
   */
  isSingleColumn?: boolean;

  /**
   * Content — `richText`
   *
   *
   */
  content?: RichText;

  /**
   * 2 Columns Content — `twoColums`
   *
   *
   */
  twoColumnsContent?: TwoColums;
};

export type Carousel = {
  _type: 'carousel';
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Content — `array`
   *
   *
   */
  content?: Array<SanityKeyed<CarouselItem>>;
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

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
export type Color = {
  _type: 'color';
  alpha: number;
  hex: string;
};
