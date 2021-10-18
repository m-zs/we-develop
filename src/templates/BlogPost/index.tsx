import React, { FC } from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { BlogProps } from './type';

const shortcodes = { Link };

const BlogPost: FC<BlogProps> = ({
  data: {
    mdx: {
      body,
      frontmatter: { title, tags, date },
      fields: { readingTime },
    },
  },
}) => {
  return (
    <article>
      <MDXProvider components={shortcodes}>
        <div>
          <h1>{title}</h1>
          <span>📆 {date}</span>
          <span>📖 {readingTime.text}</span>
          <ul>
            {tags.map((tag) => (
              <li key={tag}>tag</li>
            ))}
          </ul>
        </div>

        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </article>
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
