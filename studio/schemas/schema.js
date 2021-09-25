// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import localePage from './documents/localePage';

import richText from './contentTypes/richText';
import twoColumns from './contentTypes/twoColumns';
import nstepImage from './contentTypes/nstepImage';
import headerMenuItem from './contentTypes/headerMenuItem';

import { translateTypes, translateFields } from './fieldTranslation';
import lineBreak from './contentTypes/lineBreak';
import partnerLogos from './components/partnerLogos';
import partnerLogoItem from './components/partnerLogoItem';
import fullWidthImage from './components/fullWidthImage';
import sectionHeader from './components/sectionHeader';
import imageTilesGrid from './components/imageTilesGrid';
import imageTileWithDesc from './components/imageTileWithDesc';
import benefitItem from './components/benefitItem';
import benefits from './components/benefits';
import teamQuotesCarousel from './components/teamQuotesCarousel';
import teamQuote from './components/teamQuote';
import imageWithInfoBox from './components/imageWithInfoBox';
import vacancies from './components/vacancies';
import vacancyItem from './components/vacancyItem';
import iconsBanner from './components/iconsBanner';
import iconBannerItem from './components/iconBannerItem';
import approachPhases from './components/approachPhases';
import approachPhase from './components/approachPhase';
import highlightBoxesBanner from './components/highlightBoxesBanner';
import section from './contentTypes/section';
import contentBox from './components/contentBox';
import carousel from './components/carousel';
import carouselItem from './components/carouselItem';

const nonLocolizedDocs = [
  richText,
  section,
  lineBreak,
  twoColumns,
  fullWidthImage,
  sectionHeader,
  nstepImage,
  partnerLogoItem,
  partnerLogos,
  imageTilesGrid,
  imageTileWithDesc,
  benefitItem,
  benefits,
  teamQuote,
  teamQuotesCarousel,
  imageWithInfoBox,
  vacancies,
  vacancyItem,
  iconsBanner,
  iconBannerItem,
  approachPhase,
  approachPhases,
  contentBox,
  highlightBoxesBanner,
  carouselItem,
  carousel,

  // uncomment this line before running codegen
  // { ...localePage, title: 'Page', name: 'page' },
];

const locolizedDocs = [localePage, headerMenuItem];

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    // Add localized types declaration
    // bofre adding other types
    .concat(translateTypes(locolizedDocs))
    // Any base object you've defined,
    // or document type that should not have
    // field-level validations
    // Include documents with field translation support.
    .concat(nonLocolizedDocs)
    // This changes their structure, transforming
    // simple fields like 'string' into 'object'
    // with multiple string properties, one per
    // language.
    //
    // Any document definition that does
    // not set localize: true on root level, or
    // set localize: true on any field level will
    // not be changed.
    .concat(translateFields(locolizedDocs)),
});
