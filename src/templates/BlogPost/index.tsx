import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { BlogProps } from './type';
import * as S from './style';
import Seo from 'components/Seo';
import Tags from 'components/Tags';
import HighlightWrapper from './components/HighlightWrapper';

const shortcodes = { Link, pre: HighlightWrapper };

const BlogPost: FC<BlogProps> = ({
  data: {
    mdx: {
      body,
      frontmatter: { title, tags, date, summary },
      fields: { readingTime },
    },
  },
}) => {
  return (
    <>
      <Seo title={title} description={summary} />

      <S.Container>
        <MDXProvider components={shortcodes}>
          <S.Header>
            <S.BlogLink to="/blog">Go back to Blog</S.BlogLink>
            <S.InfoContainer>
              <span>📆 {date}</span>
              <span>📖 {readingTime.text}</span>
            </S.InfoContainer>
            <S.Title>{title}</S.Title>
            <Tags tags={tags} />
            {summary && <S.Summary>{summary}</S.Summary>}
          </S.Header>

          <S.Content>
            <MDXRenderer>{body}</MDXRenderer>
          </S.Content>
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
