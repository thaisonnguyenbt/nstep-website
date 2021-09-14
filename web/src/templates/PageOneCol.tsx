import Layout from 'components/structure/Layout';
import React, { ReactElement } from 'react';
// import SEO from 'components/structure/Seo';

const PageOneCol: React.FunctionComponent = ({
  pageContext,
}: any): ReactElement => {
  console.log(pageContext);

  return (
    <Layout pageContext={pageContext}>
      {/* <SEO title={page.pageTitle ? page.pageTitle : page.title} /> */}
      <div>XXXXXX</div>
    </Layout>
  );
};

export default PageOneCol;
