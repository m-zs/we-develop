import { PageProps } from 'gatsby';

export interface BlogProps extends PageProps {
  data: {
    mdx: {
      id: string;
      body: string;
      frontmatter: {
        title: string;
        date: string;
        tags: string[];
      };
      fields: {
        readingTime: {
          text: string;
        };
      };
    };
  };
}
