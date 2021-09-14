import React from 'react';
import Helmet from 'react-helmet';
import siteMetadata from 'config/SiteMetaData';

interface SEOProps {
  description: string;
  lang?: string;
  meta?: any;
  title: string;
}

const SEO: React.FunctionComponent<SEOProps> = ({
  description,
  lang,
  meta,
  title,
}: SEOProps) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
