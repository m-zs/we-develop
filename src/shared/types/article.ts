export interface ArticleBase {
  id: string;
  frontmatter: {
    date: string;
    summary?: string;
    tags: string[];
    title: string;
  };
  fields: {
    readingTime: {
      text: string;
    };
  };
}
