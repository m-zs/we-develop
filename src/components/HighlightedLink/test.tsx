import { customRender } from 'shared/tests/test-utils';

import HighlightedLink from './component';

describe('HighlightedLink - component', () => {
  it('should render valid structure', () => {
    const props = { text: 'text', href: 'href' };

    const wrapper = customRender(<HighlightedLink {...props} />);
    const link = wrapper.getByRole('link');

    expect(link.getAttribute('href')).toBe(props.href);
    expect(link.textContent).toBe(props.text);
  });
});
