import Layout from 'components/structure/Layout';
import React, { ReactElement } from 'react';
import RichText from 'components/structure/RichText';
import { CreatePageProps } from 'types/types';

const PageOneCol: React.FunctionComponent<CreatePageProps> = ({
  pageContext,
}: CreatePageProps): ReactElement => {
  const { page } = pageContext;

  if (!page || !page._rawBody) {
    return <></>;
  }
  return (
    <Layout pageContext={pageContext}>
      <RichText blocks={page?._rawBody} />
    </Layout>
  );
};

export default PageOneCol;
