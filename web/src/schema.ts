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
   * Is this a root page ? — `boolean`
   *
   * The pages hierarchy and sitemap will be generated from Root page. Only 1 root page allowed
   */
  isRoot?: boolean;

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
  children?: Array<SanityKeyed<Page>>;

  /**
   * Body — `bodyPortableText`
   *
   *
   */
  _rawBody?: BodyPortableText;
}

export type BodyPortableText = Array<SanityKeyed<SanityBlock>>;

export type NstepImage = {
  _type: 'nstepImage';
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
};

export type HeaderMenuItem = {
  _type: 'headerMenuItem';
  /**
   * Title — `string`
   *
   * Title to be displayed on UI.
   */
  title?: string;

  /**
   * Link To — `string`
   *
   * Target Location Link.
   */
  linkTo?: string;
};

export type WhoWeAre = {
  _type: 'whoWeAre';
  /**
   * Title — `string`
   *
   * Component title to be displyed in red
   */
  title?: string;

  /**
   * Left Content — `array`
   *
   * Content on the left column
   */
  leftContent?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Right Content — `array`
   *
   * Content on the right column
   */
  rightContent?: Array<SanityKeyed<SanityBlock>>;
};

export type Documents = Page;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
export type Tag = {
  label: string;
  value: string;
};
