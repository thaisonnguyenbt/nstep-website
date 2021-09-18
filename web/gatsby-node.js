const locales = ['en', 'vn'];

async function createNstepPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    query allPagesQuery {
      allSanityLocalePage(filter: { slug: { current: { eq: null } } }) {
        edges {
          node {
            title {
              en
              vn
            }
            slug {
              current
            }
            darkTheme {
              en
              vn
            }
            navigationTitle {
              en
              vn
            }
            description {
              en
              vn
            }
            tags {
              label
              value
            }
            menuItems {
              title {
                en
                vn
              }
              linkTo {
                en
                vn
              }
              isHighLight
            }
            seoMetaImage {
              en {
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
              }
              vn {
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
              }
            }
            headerBackgroundImage {
              en {
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
              }
              vn {
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
              }
            }
            _rawBody
          }
        }
      }
    }
  `);
  if (result.errors) throw result.errors;
  const pageEdges = (result.data.allSanityLocalePage || {}).edges || [];
  pageEdges
    .map(page => page.node)
    .forEach(localePage => {
      locales.forEach(locale => {
        const page = flattenByLanguage({ ...localePage }, locale);
        createPage({
          path: '/' + locale,
          component: require.resolve('./src/templates/PageOneCol.tsx'),
          context: {
            page: page,
          },
        });
      });

      createPage({
        path: '/',
        component: require.resolve('./src/templates/PageOneCol.tsx'),
        context: {
          page: flattenByLanguage(localePage, 'en'),
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

/**
 * Flatten object to remove the layer of locale
 *
 * @param {*} obj
 *  "title": {
 *    "en": "Home",
 *    "vn": "Trang Chủ"
 *  }
 * @param {*} locale
 *      "en"
 * @returns
 *    ===> title: "Home"
 */
const flattenByLanguage = (obj, locale) => {
  if (!obj) return obj;

  if (Array.isArray(obj))
    return obj.map(item => flattenByLanguage(item, locale));

  if (typeof obj !== 'object') return obj;

  if (Object.keys(obj).includes(locale)) {
    return flattenByLanguage(obj[locale], locale);
  }

  const result = {};
  for (const key in obj) {
    result[key] = flattenByLanguage(obj[key], locale);
  }

  return result;
};
