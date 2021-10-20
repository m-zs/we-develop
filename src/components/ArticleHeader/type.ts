export interface ArticleProps {
  date: string;
  readingTime: string;
  title: string;
  tags: string[];
  summary: string;
  link?: {
    href: string;
    text: string;
  };
  className?: string;
}
