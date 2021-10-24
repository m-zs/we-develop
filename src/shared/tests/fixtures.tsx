export const createArticle = ({
  id,
  title,
}: {
  id: string;
  title: string;
}) => ({
  node: {
    id,
    slug: 'string',
    frontmatter: {
      date: 'string',
      summary: 'string',
      tags: ['1', '2'],
      title,
    },
    fields: {
      readingTime: {
        text: 'string',
      },
    },
  },
});
