import { customRender, screen } from 'shared/tests/test-utils';
import userEvent from '@testing-library/user-event';

import Filters from './component';

describe('Blog/Filters - component', () => {
  const props = {
    mappedTags: ['1', '2'],
    activeTags: ['1', '2'],
    setActiveTags: jest.fn(),
  };

  const setup = () => {
    customRender(<Filters {...props} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render proper structure', () => {
    setup();

    expect(screen.getAllByRole('button').length).toBe(props.mappedTags.length);
  });

  it('should trigger callback function on click', () => {
    setup();

    screen.getAllByRole('button').forEach((button, i) => {
      userEvent.click(button);
      expect(props.setActiveTags).toHaveBeenCalledTimes(i + 1);
    });
  });
});
