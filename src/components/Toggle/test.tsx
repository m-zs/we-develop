import { customRender, screen } from 'shared/tests/test-utils';
import userEvent from '@testing-library/user-event';

import Toggle from './component';

describe('Toggle - component', () => {
  const props = {
    imageLeft: { src: 'src left', alt: 'alt left' },
    imageRight: { src: 'src right', alt: 'alt right' },
    toggleCallback: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not render images if related props ar not passed', () => {
    customRender(<Toggle toggleCallback={jest.fn()} />);

    expect(screen.queryAllByRole('img').length).toBe(0);
  });

  it('should render images if related props are passed', () => {
    customRender(<Toggle {...props} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });

  it('should trigger callback on click', () => {
    customRender(<Toggle {...props} />);

    userEvent.click(screen.getByRole('button'));

    expect(props.toggleCallback).toHaveBeenCalledWith();
  });

  it('should trigger callback on keydown', () => {
    customRender(<Toggle {...props} />);

    screen.getByRole('button').focus();
    // 2 valid keys, 1 invalid
    userEvent.keyboard('{Enter}{Spacebar}{o}');

    expect(props.toggleCallback).toHaveBeenCalledTimes(2);
  });
});
