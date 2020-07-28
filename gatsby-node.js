const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    createNodeField({
      node,
      name: `isWork`,
      value: !!slug.match(/^\/work\/.*$/),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/(work)/.*/" } }
        sort: { fields: frontmatter___order }
      ) {
        edges {
          node {
            fields {
              slug
              isWork
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const workItems = result.data.allMdx.edges;
  workItems.forEach(({ node }, index) => {
    if (!node.fields.isWork) {
      return;
    }
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/work.js`),
      context: {
        slug: node.fields.slug,
        prev:
          index === 0
            ? workItems[workItems.length - 1].node
            : workItems[index - 1].node,
        next:
          index === workItems.length - 1
            ? workItems[0].node
            : workItems[index + 1].node,
      },
    });
  });
};
