import React, { FC } from 'react';
import { Link } from 'gatsby';

import { ArticlesListProps } from './type';
import * as S from './style';

const ArticlesList: FC<ArticlesListProps> = ({
  articles,
  skipTags,
  linkPrefix,
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
        <S.Article key={id}>
          <Link to={linkPrefix ? linkPrefix + slug : slug}>
            <S.StyledArticleHeader
              {...frontmatter}
              readingTime={readingTime.text}
              {...(skipTags && { tags: undefined })}
            />
          </Link>
        </S.Article>
      ),
    )}
  </S.Container>
);
export default ArticlesList;
