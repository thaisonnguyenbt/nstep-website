import clientConfig from 'config/client-config';
import imageUrlBuilder from '@sanity/image-url';
import { NstepImage, SanityImageAsset, SanityReference } from 'schema';

const builder = imageUrlBuilder({
  projectId: clientConfig.sanity.projectId,
  dataset: clientConfig.sanity.dataset,
});

export const imageUrlFor = (source: SanityReference<SanityImageAsset>) =>
  builder.image(source);

export const imageUrlPathFor = (image: NstepImage | undefined) =>
  image?.asset ? imageUrlFor(image.asset).url() || '' : '';

export const imageAltPathFor = (image: NstepImage | undefined) =>
  image?.alt || 'nstep image';

export const buildImageObj = (
  source: NstepImage
): SanityReference<SanityImageAsset> => ({
  _type: 'reference',
  _ref: source.asset?._ref,
});
