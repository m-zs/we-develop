import React, { FC } from 'react';

import { ArticleProps } from './type';
import * as S from './style';
import Tags from 'components/Tags';

const ArticleHeader: FC<ArticleProps> = ({
  date,
  readingTime,
  title,
  tags,
  summary,
  link,
  className,
}) => (
  <S.Header className={className}>
    {link && <S.BlogLink to={link.href}>{link.text}</S.BlogLink>}
    <S.InfoContainer>
      <span>📆 {date.split('T')[0]}</span>
      <span>📖 {readingTime}</span>
    </S.InfoContainer>
    <S.Title>{title}</S.Title>
    <Tags tags={tags} />
    <S.Summary>{summary}</S.Summary>
  </S.Header>
);

export default ArticleHeader;
