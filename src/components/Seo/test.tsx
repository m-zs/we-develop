import { render } from '@testing-library/react';
import { Helmet } from 'react-helmet';

import Seo from './component';

describe('Seo - component', () => {
  it('should create proper metadata', () => {
    const props = { title: 'title', description: 'description' };

    render(<Seo {...props} />);

    const { title, metaTags } = Helmet.peek();

    expect(title?.includes(props.title)).toBeTruthy();
    expect(metaTags).toEqual(
      expect.arrayContaining([
        { name: 'description', content: props.description },
      ]),
    );
  });
});
