import React, { FC } from 'react';

import { TIMELINE_ITEMS } from './data';
import * as S from './style';
import Seo from 'components/Seo';
import HighlightedLink from 'components/HighlightedLink';
import ExperienceEntry from './components/ExperienceEntry';

const About: FC = () => (
  <>
    <Seo title="About" description="A little bit about author." />

    <S.Introduction>
      Hey,{' '}
      <HighlightedLink
        href="https://www.linkedin.com/in/mateusz-zasada-329176117"
        text="I'm Matt"
        type="a"
      />
      ,<br />
      web developer based in Poland, and this is what I do lately...
    </S.Introduction>

    {TIMELINE_ITEMS.map((entry, i) => (
      <ExperienceEntry key={i} {...entry} />
    ))}
  </>
);

export default About;
