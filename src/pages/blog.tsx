import { graphql } from 'gatsby';

export { default } from 'pages-implementation/Blog';

export const pageQuery = graphql`
  query BlogQuery($skipArticleSummary: Boolean = false) {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      # tags for filtering
      tags: group(field: frontmatter___tags) {
        fieldValue
      }
      # articles
      ...Article
    }
  }
`;
