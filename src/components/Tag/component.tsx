import React, { FC } from 'react';

import { TagProps } from './type';
import * as S from './style';

const Tag: FC<TagProps> = ({ text, className, onClick }) => (
  <S.Tag
    className={className}
    {...(onClick && { onClick: () => onClick(text) })}
  >
    {text}
  </S.Tag>
);

export default Tag;
