import { PageProps } from 'gatsby';

import { PostBase } from 'shared/types/post';

interface Tag {
  fieldValue: string;
}

export interface BlogProps extends PageProps {
  data: {
    allMdx: {
      tags: Tag[];
      articles: { node: PostBase & { slug: string } }[];
    };
  };
}
