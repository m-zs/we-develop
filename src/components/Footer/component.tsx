import React, { FC } from 'react';

import sun from 'assets/images/sun.svg';
import moon from 'assets/images/moon.svg';
import { FooterProps } from './type';
import * as S from './style';
import Toggle from 'components/Toggle';

const Footer: FC<FooterProps> = ({ selectedTheme, toggleThemeCallback }) => (
  <S.Container data-testid="footer">
    <S.Socials>
      <S.SocialLink href="https://github.com/m-zs">github</S.SocialLink>
      <S.SocialLink href="https://www.linkedin.com/in/mateusz-zasada-329176117">
        linkedin
      </S.SocialLink>
    </S.Socials>

    <Toggle
      imageLeft={{ src: sun, alt: 'sun' }}
      imageRight={{ src: moon, alt: 'moon' }}
      toggleCallback={toggleThemeCallback}
      selectedSide={selectedTheme === 'light' ? 'left' : 'right'}
    />
  </S.Container>
);

export default Footer;
