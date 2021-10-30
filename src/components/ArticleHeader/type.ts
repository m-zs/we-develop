import { IGatsbyImageData } from 'gatsby-plugin-image';

export type ArticleHeaderProps = {
  date: string;
  readingTime?: string;
  title: string;
  tags?: string[];
  summary?: string;
  className?: string;
} & (
  | {
      banner: IGatsbyImageData;
      bannerAlt: string;
    }
  | {
      banner?: never;
      bannerAlt?: never;
    }
);
