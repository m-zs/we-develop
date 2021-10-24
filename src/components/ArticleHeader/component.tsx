import React, { FC } from 'react';

import { ArticleProps } from './type';
import * as S from './style';
import Tag from 'components/Tag';

const ArticleHeader: FC<ArticleProps> = ({
  date,
  readingTime,
  title,
  tags,
  summary,
  link,
  className,
}) => (
  <S.Container className={className} data-testid="article-header">
    {link && <S.BlogLink to={link.href}>{link.text}</S.BlogLink>}
    <S.InfoContainer>
      <span>📆 {date.split('T')[0]}</span>
      <span>📖 {readingTime}</span>
    </S.InfoContainer>
    <S.Title>{title}</S.Title>
    <S.Tags>
      {tags.map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
    </S.Tags>
    {summary && <S.Summary>{summary}</S.Summary>}
  </S.Container>
);

export default ArticleHeader;
