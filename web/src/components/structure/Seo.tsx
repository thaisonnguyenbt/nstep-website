import React from 'react';
import Helmet from 'react-helmet';
import siteMetadata from 'config/SiteMetaData';
import { NstepImage } from 'schema';
import { buildImageObj, imageUrlFor } from 'utils/CommonUtils';

interface SEOProps {
  description?: string;
  title?: string;
  lang?: string;
  meta?: any;
  image?: NstepImage;
}

const SEO: React.FunctionComponent<SEOProps> = ({
  description,
  lang,
  meta,
  title,
  image,
}: SEOProps) => {
  const metaDescription = description || siteMetadata.description;
  const metaImage = image?.asset
    ? imageUrlFor(buildImageObj(image)).width(1200).url() || undefined
    : undefined;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta || [])}
    >
      <link rel="image_src" href={metaImage} />
    </Helmet>
  );
};

export default SEO;
