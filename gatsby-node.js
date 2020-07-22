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
      name: `isProject`,
      value: !!slug.match(/^\/projects\/.*$/),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
              isProject
            }
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach(({ node }) => {
    if (!node.fields.isProject) {
      return;
    }
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
