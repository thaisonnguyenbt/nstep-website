const env = process.env.NODE_ENV || 'development';

export default function resolvePreviewUrl(document) {
  const baseUrl =
    env === 'development'
      ? 'http://localhost:8000'
      : process.env.SANITY_STUDIO_PREVIEW_ENDPOINT ||
        'https://nstep.gatsbyjs.io/';
  switch (document._type) {
    case 'localePage':
      return `${baseUrl}/${document?.slug?.current || ''}`;
    case 'siteSettings':
      return baseUrl;
    default:
      return null;
  }
}
