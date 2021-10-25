import { PageProps } from 'gatsby';

import { ArticleBase } from 'shared/types/article';

export interface HomeProps extends PageProps {
  data: {
    allMdx: { articles: { node: ArticleBase & { slug: string } }[] };
  };
}
