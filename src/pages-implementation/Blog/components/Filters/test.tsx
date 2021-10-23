import { customRender, RenderResult } from 'shared/tests/test-utils';
import userEvent from '@testing-library/user-event';

import Filters from './component';

describe('Blog/Filters - component', () => {
  const props = {
    mappedTags: ['1', '2'],
    activeTags: ['1', '2'],
    setActiveTags: jest.fn(),
  };
  let wrapper: RenderResult;

  beforeEach(() => {
    jest.clearAllMocks();

    wrapper = customRender(<Filters {...props} />);
  });

  it('should render proper structure', () => {
    expect(wrapper.getAllByRole('button').length).toBe(props.mappedTags.length);
  });

  it('should trigger callback function on click', () => {
    wrapper.getAllByRole('button').forEach((button, i) => {
      userEvent.click(button);
      expect(props.setActiveTags).toHaveBeenCalledTimes(i + 1);
    });
  });
});
