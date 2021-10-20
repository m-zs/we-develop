import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

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
          <ArticleHeader
            date={date}
            readingTime={readingTime.text}
            title={title}
            tags={tags}
            summary={summary}
            link={{ href: '/blog', text: 'Go back to Blog' }}
          />

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
