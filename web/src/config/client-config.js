module.exports = {
  sanity: {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID || 'e03pjj6q',
    dataset: process.env.GATSBY_SANITY_DATASET || 'production',
    token: process.env.SANITY_READ_TOKEN,
  },
};
