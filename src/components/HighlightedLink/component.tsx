import React, { FC } from 'react';

import { HighlightedLinkProps } from './type';
import * as S from './style';

const HighlightedLink: FC<HighlightedLinkProps> = ({ text, href }) => (
  <S.Container to={href}>{text}</S.Container>
);

export default HighlightedLink;
