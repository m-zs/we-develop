import { customRender } from 'shared/tests/test-utils';
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
    const wrapper = customRender(<Toggle toggleCallback={jest.fn()} />);

    expect(wrapper.queryAllByRole('img').length).toBe(0);
  });

  it('should render images if related props are passed', () => {
    const wrapper = customRender(<Toggle {...props} />);

    expect(wrapper.getAllByRole('img').length).toBe(2);
  });

  it('should trigger callback on click', () => {
    const wrapper = customRender(<Toggle {...props} />);

    userEvent.click(wrapper.getByRole('button'));

    expect(props.toggleCallback).toHaveBeenCalledWith();
  });

  it('should trigger callback on keydown', () => {
    const wrapper = customRender(<Toggle {...props} />);

    wrapper.getByRole('button').focus();
    // 2 valid keys, 1 invalid
    userEvent.keyboard('{Enter}{Spacebar}{o}');

    expect(props.toggleCallback).toHaveBeenCalledTimes(2);
  });
});
