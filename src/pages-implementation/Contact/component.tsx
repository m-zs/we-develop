import React, { FC } from 'react';

import Seo from 'components/Seo';
import HighlightedLink from 'components/HighlightedLink';
import Introduction from 'components/Introduction';

const Contact: FC = () => (
  <>
    <Seo title="Contact" description="Get in touch." />

    <Introduction>
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
    </Introduction>
  </>
);

export default Contact;
