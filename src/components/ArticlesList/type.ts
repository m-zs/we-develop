import { ArticleBase } from 'shared/types/article';

export interface ArticlesListProps {
  articles: { node: ArticleBase & { slug: string } }[];
  skipTags?: boolean;
  linkPrefix?: string;
}
