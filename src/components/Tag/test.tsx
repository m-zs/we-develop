import { customRender, screen } from 'shared/tests/test-utils';

import Tag from './component';

describe('Tag - component', () => {
  const text = 'text';

  it('should render base structure', () => {
    customRender(<Tag text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should render additional class', () => {
    const className = 'class';

    customRender(<Tag text={text} className={className} />);

    expect(screen.getByText(text).classList.contains(className)).toBe(true);
  });

  it('should trigger provided onClick callback on click event', () => {
    const onClick = jest.fn();

    customRender(<Tag text={text} onClick={onClick} />);

    screen.getByText(text).click();

    expect(onClick).toHaveBeenCalledWith(text);
  });

  it('should reder as button', () => {
    customRender(<Tag text={text} role="button" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
