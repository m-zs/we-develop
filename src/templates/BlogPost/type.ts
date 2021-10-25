import { PageProps } from 'gatsby';

import { ArticleBase } from 'shared/types/article';

export interface BlogProps extends PageProps {
  data: {
    mdx: ArticleBase & { body: string };
  };
}
