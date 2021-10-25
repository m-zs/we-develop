import { PageProps } from 'gatsby';

import { ArticleBase } from 'shared/types/article';

interface Tag {
  fieldValue: string;
}

export interface BlogProps extends PageProps {
  data: {
    allMdx: {
      tags: Tag[];
      articles: { node: ArticleBase & { slug: string } }[];
    };
  };
}
