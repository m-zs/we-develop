import React, { FC } from 'react';

import * as S from './style';
import Seo from 'components/Seo';
import HighlightedLink from 'components/HighlightedLink';

const Contact: FC = () => (
  <>
    <Seo title="Contact" description="Get in touch." />

    <S.Introduction>
      You can contact me by{' '}
      <HighlightedLink
        href="mailto:mzasada93@gmail.com"
        text="Email"
        type="a"
      />
      , take a look at my private{' '}
      <HighlightedLink href="https://github.com/m-zs/" text="GitHub" type="a" />{' '}
      or add at{' '}
      <HighlightedLink
        href="https://www.linkedin.com/in/mateusz-zasada-329176117"
        text="LinkedIn"
        type="a"
      />
    </S.Introduction>
  </>
);

export default Contact;
