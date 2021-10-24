import { graphql } from 'gatsby';

export const articleFragment = graphql`
  fragment Article on MdxConnection {
    articles: edges {
      node {
        id
        slug
        frontmatter {
          date
          tags
          title
          summary @skip(if: $skipArticleSummary)
        }
        fields {
          readingTime {
            text
          }
        }
      }
    }
  }
`;
