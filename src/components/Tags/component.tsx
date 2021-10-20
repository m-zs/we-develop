import React, { FC } from 'react';

import { TagsProps } from './type';
import * as S from './style';

const Tags: FC<TagsProps> = ({ tags, className }) => (
  <S.Tags className={className}>
    {tags.map((tag) => (
      <S.Tag key={tag}>{tag}</S.Tag>
    ))}
  </S.Tags>
);

export default Tags;
