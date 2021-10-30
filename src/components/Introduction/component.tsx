import React, { FC } from 'react';

import * as S from './style';
import { IntroductionProps } from './type';

const Introduction: FC<IntroductionProps> = ({ children, className }) => (
  <S.Container className={className}>{children}</S.Container>
);

export default Introduction;
