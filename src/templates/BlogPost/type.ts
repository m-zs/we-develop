import { PageProps } from 'gatsby';

import { DeepRequired } from 'shared/types/helpers';
import { ArticleBase } from 'shared/types/article';

export interface BlogProps extends PageProps {
  data: {
    mdx: DeepRequired<ArticleBase> & { body: string };
  };
}
