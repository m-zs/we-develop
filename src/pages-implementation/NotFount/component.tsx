import React, { FC } from 'react';

import Seo from 'components/Seo';
import Introduction from 'components/Introduction';
import HighlightedLink from 'components/HighlightedLink';

const NotFound: FC = () => (
  <>
    <Seo title="Not fount" description="Page not found" />

    <section>
      <Introduction>
        Page not found. <br />
        Please, go back to the <HighlightedLink href="/" text="Homepage" />.
      </Introduction>
    </section>
  </>
);

export default NotFound;
