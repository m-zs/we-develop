import React, { FC, useState } from 'react';

import { BlogProps } from './type';
import * as S from './style';
import Seo from 'components/Seo';
import Filters from './components/Filters';

const Blog: FC<BlogProps> = ({
  data: {
    allMdx: { posts, tags },
  },
}) => {
  const mappedTags = tags.map((tag) => tag.fieldValue);
  const [activeTags, setActiveTags] = useState(mappedTags);

  return (
    <>
      <Seo title="Blog" description="All articles in one place." />

      <Filters
        setActiveTags={setActiveTags}
        mappedTags={mappedTags}
        activeTags={activeTags}
      />

      <S.BlogsContainer>
        {posts.map(
          ({
            node: {
              id,
              slug,
              frontmatter,
              fields: { readingTime },
            },
          }) =>
            activeTags.some((tag) => frontmatter.tags.includes(tag)) && (
              <S.StyledLink key={id} to={slug}>
                <article>
                  <S.StyledArticleHeader
                    {...frontmatter}
                    readingTime={readingTime.text}
                  />
                </article>
              </S.StyledLink>
            ),
        )}
      </S.BlogsContainer>
    </>
  );
};

export default Blog;
