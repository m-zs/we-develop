import { PageProps } from 'gatsby';

interface Post {
  node: {
    id: string;
    slug: string;
    frontmatter: {
      date: string;
      summary: string;
      tags: string[];
      title: string;
    };
    fields: {
      readingTime: {
        text: string;
      };
    };
  };
}

interface Tag {
  fieldValue: string;
}

export interface BlogProps extends PageProps {
  data: {
    allMdx: {
      tags: Tag[];
      posts: Post[];
    };
  };
}
