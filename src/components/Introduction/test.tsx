import { customRender } from 'shared/tests/test-utils';

import Introduction from './component';

describe('Introduction - component', () => {
  const props = {
    className: 'test-class',
  };

  it('should render valid structure', () => {
    const children = 'children text';

    const wrapper = customRender(
      <Introduction {...props}>{children}</Introduction>,
    );
    const text = wrapper.getByRole('heading', { level: 1 });

    expect(text.textContent).toBe(children);
    expect(text.classList.contains(props.className)).toBeTruthy();
  });
});
