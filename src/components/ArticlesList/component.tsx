import React, { FC } from 'react';

import { ArticlesListProps } from './type';
import * as S from './style';

const ArticlesList: FC<ArticlesListProps> = ({
  articles,
}: ArticlesListProps) => (
  <S.Container>
    {articles.map(
      ({
        node: {
          id,
          slug,
          frontmatter,
          fields: { readingTime },
        },
      }) => (
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
  </S.Container>
);
export default ArticlesList;
