import { graphql } from 'gatsby';

export { default } from 'pages-implementation/Blog';

export const pageQuery = graphql`
  query BlogQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      # tags for filtering
      tags: group(field: frontmatter___tags) {
        fieldValue
      }
      # data
      posts: edges {
        node {
          id
          slug
          frontmatter {
            date
            summary
            tags
            title
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;
