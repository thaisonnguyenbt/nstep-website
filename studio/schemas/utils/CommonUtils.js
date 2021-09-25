import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
  projectId: '5m100bpx',
  dataset: 'production',
});

export const imageUrlFor = source => builder.image(source);

export const imageUrlPathFor = image =>
  image?.asset ? imageUrlFor(image.asset).url() || '' : '';

export const imageAltPathFor = image => image?.alt || 'nstep image';
