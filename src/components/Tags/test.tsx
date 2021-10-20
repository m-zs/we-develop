import { customRender } from 'shared/tests/test-utils';

import Tags from './component';

describe('Tags - component', () => {
  it('should render proper taglist', () => {
    const props = { tags: ['a', 'b', 'c', 'd'] };

    const wrapper = customRender(<Tags {...props} />);

    expect(wrapper.getAllByRole('listitem').length).toBe(props.tags.length);
  });

  it('should render proper taglist', () => {
    const props = { tags: ['a'], className: 'extra-class' };

    const wrapper = customRender(<Tags {...props} />);

    expect(wrapper.getByRole('list').classList.contains(props.className)).toBe(
      true,
    );
  });
});
