import React, { FC } from 'react';

import sun from 'assets/images/sun.svg';
import moon from 'assets/images/moon.svg';
import * as S from './style';
import Toggle from 'components/Toggle';

const Footer: FC = () => {
  return (
    <S.Container>
      <S.Socials>
        <S.SocialLink to="https://github.com/m-zs">github</S.SocialLink>
        <S.SocialLink to="https://www.linkedin.com/in/mateusz-zasada-329176117">
          linkedin
        </S.SocialLink>
      </S.Socials>

      <Toggle
        imageLeft={{ src: sun, alt: '' }}
        imageRight={{ src: moon, alt: '' }}
        toggleCallback={() => {}}
      />
    </S.Container>
  );
};

export default Footer;
