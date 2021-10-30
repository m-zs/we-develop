import React, { FC } from 'react';

import { TagProps } from './type';
import * as S from './style';

const Tag: FC<TagProps> = ({ text, className, onClick, role = 'default' }) => (
  <S.Tag
    data-testid="tag"
    {...(role === 'button' && { as: role })}
    className={className}
    {...(onClick && { onClick: () => onClick(text) })}
  >
    {text}
  </S.Tag>
);

export default Tag;
