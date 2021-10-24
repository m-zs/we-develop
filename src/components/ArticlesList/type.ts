import { PostBase } from 'shared/types/post';

export interface ArticlesListProps {
  articles: { node: PostBase & { slug: string } }[];
}
