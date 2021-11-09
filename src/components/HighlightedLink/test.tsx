import { customRender, screen } from 'shared/tests/test-utils';

import HighlightedLink from './component';

describe('HighlightedLink - component', () => {
  it('should render valid structure', () => {
    const props = { text: 'text', href: 'href' };

    customRender(<HighlightedLink {...props} />);

    const link = screen.getByRole('link');

    expect(link.getAttribute('href')).toBe(props.href);
    expect(link.textContent).toBe(props.text);
  });
});
