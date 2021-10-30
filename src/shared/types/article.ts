import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ArticleBase {
  id: string;
  frontmatter: {
    date: string;
    summary?: string;
    tags?: string[];
    title: string;
    banner?: IGatsbyImageData;
    bannerAlt?: string;
  };
  fields: {
    readingTime: {
      text: string;
    };
  };
}
