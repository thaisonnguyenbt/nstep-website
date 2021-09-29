const env = process.env.NODE_ENV || 'development';

export default function resolveProductionUrl(document) {
  const baseUrl =
    env === 'development'
      ? 'http://localhost:8000'
      : process.env.SANITY_STUDIO_PREVIEW_ENDPOINT ||
        'https://nstep.gatsbyjs.io/';

  return `${baseUrl}/${document?.slug?.current || ''}`;
}
