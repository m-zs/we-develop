import React, { FC } from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface Props extends PageProps {
  data: {
    mdx: any;
  };
}

const shortcodes = { Link };

const BlogPost: FC<Props> = ({ data: { mdx } }) => {
  return (
    <MDXProvider components={shortcodes}>
      <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
    </MDXProvider>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;
