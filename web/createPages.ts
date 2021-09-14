import { resolve } from 'path';
import { GatsbyCreatePages } from './src/types/types';

const createPages: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators,
}) => {
  const { createPage } = boundActionCreators;

  const result = await graphql(`
    {
      allPage(where: { slug: { current: { eq: "/" } } }) {
        title
        slug {
          current
        }
        navigationTitle
        description
        tags {
          label
          value
        }
        seoMetaImage {
          asset {
            url
            path
          }
          alt
          caption
        }
        bodyRaw
      }
    }
  `);

  result.data.allPage.forEach(page => {
    const { slug } = page;
    if (!slug) return;

    createPage({
      path: slug,
      component: resolve(__dirname, 'src/templates/PageOneCol.tsx'),
      context: {
        slug,
      },
    });
  });
};

export default createPages;
