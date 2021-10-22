import { customRender } from 'shared/tests/test-utils';

import Tag from './component';

describe('Tag - component', () => {
  const text = 'text';

  it('should render base structure', () => {
    const wrapper = customRender(<Tag text={text} />);

    expect(wrapper.getByText(text)).toBeInTheDocument();
  });

  it('should render additional class', () => {
    const className = 'class';

    const wrapper = customRender(<Tag text={text} className={className} />);

    expect(wrapper.getByText(text).classList.contains(className)).toBe(true);
  });

  it('should trigger provided onClick callback on click event', () => {
    const onClick = jest.fn();

    const wrapper = customRender(<Tag text={text} onClick={onClick} />);

    wrapper.getByText(text).click();

    expect(onClick).toHaveBeenCalledWith(text);
  });

  it('should reder as button', () => {
    const wrapper = customRender(<Tag text={text} role="button" />);

    expect(wrapper.getByRole('button')).toBeInTheDocument();
  });
});
