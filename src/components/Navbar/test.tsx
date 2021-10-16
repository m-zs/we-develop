import { customRender, waitFor } from 'shared/tests/test-utils';
import userEvent from '@testing-library/user-event';

import { useMatchMedia } from 'shared/hooks/useMatchMedia';
import Navbar from './component';

jest.mock('shared/hooks/useMatchMedia');

describe('Navbar - component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render desktop navbar', () => {
    (useMatchMedia as jest.Mock).mockReturnValueOnce(false);

    const wrapper = customRender(<Navbar />);

    expect(wrapper.queryByTestId('navbar-hamburger')).toBeNull();
  });

  it('should render mobile navbar', () => {
    (useMatchMedia as jest.Mock).mockReturnValueOnce(true);

    const wrapper = customRender(<Navbar />);

    expect(wrapper.queryByTestId('navbar-hamburger')).toBeInTheDocument();
  });

  it('should trigger onClick hamburger function', async () => {
    (useMatchMedia as jest.Mock).mockReturnValue(true);

    const wrapper = customRender(<Navbar />);
    const links = wrapper.getByTestId('navbar-links');

    expect(links.getAttribute('aria-hidden')).toBe('true');

    userEvent.click(wrapper.getByTestId('navbar-hamburger'));

    await waitFor(() => {
      expect(links.getAttribute('aria-hidden')).toBe('false');
    });
  });
});
