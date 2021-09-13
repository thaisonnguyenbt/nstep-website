export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "613da2639b3eb4c52e2d7532",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ghkoe8jr",
                  apiId: "697a87cf-263c-4a7f-baba-1a4092850fbe",
                },
                {
                  buildHookId: "613da2639919b42da242028f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-nyvhdff2",
                  apiId: "05f04c50-0a11-4e64-b014-0153dfb55dbf",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/thaisonnguyenbt/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-nyvhdff2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
