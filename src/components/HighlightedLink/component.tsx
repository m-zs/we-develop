import React, { FC } from 'react';

import { HighlightedLinkProps } from './type';
import * as S from './style';

const HighlightedLink: FC<HighlightedLinkProps> = ({
  text,
  href,
  type = 'link',
  hreflang,
  className,
}) => (
  <S.Container
    className={className}
    hrefLang={hreflang}
    {...(type === 'a' ? { as: 'a', href } : { to: href })}
  >
    {text}
  </S.Container>
);

export default HighlightedLink;
