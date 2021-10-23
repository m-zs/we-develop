import { PageProps } from 'gatsby';

import { PostBase } from 'shared/types/post';

interface Tag {
  fieldValue: string;
}

export interface BlogProps extends PageProps {
  data: {
    allMdx: {
      tags: Tag[];
      posts: { node: PostBase & { slug: string } }[];
    };
  };
}
