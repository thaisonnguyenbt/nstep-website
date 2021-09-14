import Layout from 'components/structure/Layout';
import React, { ReactElement } from 'react';
import SEO from 'components/structure/Seo';
import PortableText from 'components/structure/PortableText';
import { CreatePageProps } from 'types/types';

const PageOneCol: React.FunctionComponent<CreatePageProps> = ({
  pageContext,
}: CreatePageProps): ReactElement => {
  const { page } = pageContext;
  return (
    <Layout pageContext={pageContext}>
      <SEO
        title={page.title}
        description={page.description}
        image={page.seoMetaImage}
      />
      <PortableText blocks={page._rawBody} />
    </Layout>
  );
};

export default PageOneCol;
