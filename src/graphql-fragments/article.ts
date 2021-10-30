import { graphql } from 'gatsby';

export const articleFragment = graphql`
  fragment Article on MdxConnection {
    articles: edges {
      node {
        id
        slug
        frontmatter {
          date
          title
          tags @skip(if: $skipArticleTags)
          summary @skip(if: $skipArticleSummary)
          bannerAlt
          banner {
            childImageSharp {
              gatsbyImageData(
                width: 420
                height: 500
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
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
