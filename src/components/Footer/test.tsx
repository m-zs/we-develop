import { customRender } from 'shared/tests/test-utils';

import Footer from './component';

describe('Footer - component', () => {
  it('should render withour crash', () => {
    const props = {
      selectedTheme: 'light' as const,
      toggleThemeCallback: jest.fn(),
    };

    const wrapper = customRender(<Footer {...props} />);

    expect(wrapper.getByTestId('footer')).toBeInTheDocument();
  });
});
