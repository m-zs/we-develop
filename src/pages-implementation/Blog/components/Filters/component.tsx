import React, { FC } from 'react';

import { HeadingProps } from './types';
import * as S from './style';
import { toggleArrayElement } from 'shared/utils/array';

const Filters: FC<HeadingProps> = ({
  mappedTags,
  activeTags,
  setActiveTags,
}) => (
  <S.Container>
    <S.Header>Filter by tags:</S.Header>
    <S.Tags>
      {mappedTags.map((tag) => (
        <S.StyledTag
          key={tag}
          text={tag}
          role="button"
          active={activeTags.includes(tag)}
          onClick={(tag) => {
            setActiveTags(toggleArrayElement(activeTags, tag));
          }}
        />
      ))}
    </S.Tags>
  </S.Container>
);

export default Filters;
