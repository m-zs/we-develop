import React, { FC } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { ArticleHeaderProps } from './type';
import * as S from './style';
import Tag from 'components/Tag';
import { formatDate } from './utils';

const ArticleHeader: FC<ArticleHeaderProps> = ({
  date,
  readingTime,
  title,
  tags,
  summary,
  className,
  ...bannerData
}) => (
  <S.Container className={className} data-testid="article-header">
    {bannerData.banner && (
      <GatsbyImage
        image={getImage(bannerData.banner)!}
        alt={bannerData.bannerAlt}
      />
    )}

    <S.PostInfo>
      {formatDate(date)} - {readingTime}
    </S.PostInfo>

    <S.Title>{title}</S.Title>

    {tags && (
      <S.Tags>
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </S.Tags>
    )}

    {summary && <S.Summary>{summary}</S.Summary>}
  </S.Container>
);

export default ArticleHeader;
