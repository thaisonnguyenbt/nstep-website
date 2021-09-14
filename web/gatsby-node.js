async function createNstepPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      allSanityPage(filter: { slug: { current: { eq: "/" } } }) {
        edges {
          node {
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
                _id
                originalFilename
                description
                altText
                label
                title
                url
                path
                altText
              }
              alt
              caption
            }
            _rawBody
          }
        }
      }
    }
  `);
  if (result.errors) throw result.errors;

  const pageEdges = (result.data.allSanityPage || {}).edges || [];
  pageEdges
    .map(page => page.node)
    .forEach(page => {
      const { slug } = page;
      if (!slug) return;

      createPage({
        path: '/',
        component: require.resolve('./src/templates/PageOneCol.tsx'),
        context: {
          page: page,
        },
      });
    });

  createPage({
    path: '404',
    component: require.resolve('./src/templates/404.tsx'),
    context: {},
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createNstepPages(graphql, actions);
};
