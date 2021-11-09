import { customRender, screen } from 'shared/tests/test-utils';

import Footer from './component';

describe('Footer - component', () => {
  it('should render withour crash', () => {
    const props = {
      selectedTheme: 'light' as const,
      toggleThemeCallback: jest.fn(),
    };

    customRender(<Footer {...props} />);

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
