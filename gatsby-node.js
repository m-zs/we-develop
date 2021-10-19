const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === 'Mdx') {
    actions.createNodeField({
      name: 'slug',
      node,
      value: `/blog${createFilePath({ node, getNode })}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      // page template
      component: path.resolve('./src/templates/BlogPost/index.tsx'),
      context: { id: node.id },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions;

  // if path is different than index, max 1 level nested
  if (page.path.split('/')[2]) {
    return deletePage(page);
  }
};
