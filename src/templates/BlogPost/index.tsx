import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { getImage } from 'gatsby-plugin-image';

import { BlogProps } from './type';
import * as S from './style';
import Seo from 'components/Seo';
import HighlightWrapper from './components/HighlightWrapper';
import ArticleHeader from 'components/ArticleHeader';

const shortcodes = { Link, pre: HighlightWrapper };

const BlogPost: FC<BlogProps> = ({
  data: {
    mdx: {
      body,
      frontmatter: { title, tags, date, summary, banner, bannerAlt },
      fields: { readingTime },
    },
  },
}) => {
  return (
    <>
      <Seo title={title} description={summary} />

      <S.Container>
        <S.BlogLink to="/blog">Go back to Blog</S.BlogLink>

        <ArticleHeader
          date={date}
          readingTime={readingTime.text}
          title={title}
          tags={tags}
          summary={summary}
        />

        <S.FeaturedImage image={getImage(banner)!} alt={bannerAlt} />

        <MDXProvider components={shortcodes}>
          <S.Main>
            <MDXRenderer>{body}</MDXRenderer>
          </S.Main>
        </MDXProvider>
      </S.Container>
    </>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        tags
        summary
        bannerAlt
        banner {
          childImageSharp {
            gatsbyImageData(
              width: 900
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
`;

export default BlogPost;
