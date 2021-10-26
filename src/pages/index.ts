import { graphql } from 'gatsby';

export { default } from 'pages-implementation/Home';

export const pageQuery = graphql`
  query PageQuery($skipArticleSummary: Boolean = true) {
    # latest articles
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      ...Article
    }
  }
`;
