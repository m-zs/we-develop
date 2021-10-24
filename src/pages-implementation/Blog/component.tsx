import React, { FC, useState } from 'react';

import { BlogProps } from './type';
import Seo from 'components/Seo';
import Filters from './components/Filters';
import ArticlesList from 'components/ArticlesList';

const Blog: FC<BlogProps> = ({
  data: {
    allMdx: { articles, tags },
  },
}) => {
  const mappedTags = tags.map((tag) => tag.fieldValue);
  const [activeTags, setActiveTags] = useState(mappedTags);
  const [currentArticles, setCurrentArticles] = useState(articles);

  return (
    <>
      <Seo title="Blog" description="All articles in one place." />

      <Filters
        setActiveTags={(tags) => {
          setActiveTags(tags);
          // filter articles after tags change
          setCurrentArticles(
            articles.filter((article) =>
              article.node.frontmatter.tags.some((tag) => tags.includes(tag)),
            ),
          );
        }}
        mappedTags={mappedTags}
        activeTags={activeTags}
      />

      <ArticlesList articles={currentArticles} />
    </>
  );
};

export default Blog;
