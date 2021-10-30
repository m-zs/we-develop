import { PageProps } from 'gatsby';

import { ArticleBase } from 'shared/types/article';
import { DeepRequired } from 'shared/types/helpers';

interface Tag {
  fieldValue: string;
}

export interface BlogProps extends PageProps {
  data: {
    allMdx: {
      tags: Tag[];
      articles: { node: DeepRequired<ArticleBase> & { slug: string } }[];
    };
  };
}
