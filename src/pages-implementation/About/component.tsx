import React, { FC } from 'react';

import { TIMELINE_ITEMS } from './data';
import Seo from 'components/Seo';
import HighlightedLink from 'components/HighlightedLink';
import ExperienceEntry from './components/ExperienceEntry';
import Introduction from 'components/Introduction';

const About: FC = () => (
  <>
    <Seo title="About" description="A little bit about author." />

    <section>
      <Introduction>
        Hey,{' '}
        <HighlightedLink
          href="https://www.linkedin.com/in/mateusz-zasada-329176117"
          text="I'm Matt"
          type="a"
        />
        ,<br />
        web developer based in Poland, and this is what I do lately...
      </Introduction>
    </section>

    <section>
      {TIMELINE_ITEMS.map((entry, i) => (
        <ExperienceEntry key={i} {...entry} />
      ))}
    </section>
  </>
);

export default About;
