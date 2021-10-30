import { customRender } from 'shared/tests/test-utils';

import { createArticle } from 'shared/tests/fixtures';
import ArticlesList from './component';

describe('ArticlesList', () => {
  const props = {
    articles: [
      createArticle({ id: '1', title: 'title 1' }),
      createArticle({ id: '2', title: 'title 2' }),
    ],
  };

  it('should render proper structure', () => {
    const wrapper = customRender(<ArticlesList {...props} />);

    expect(wrapper.getAllByRole('article').length).toBe(props.articles.length);
    expect(wrapper.getAllByTestId('tag').length).toBeTruthy();
  });

  it('should not render tags with skipTags prop', () => {
    const wrapper = customRender(<ArticlesList {...props} skipTags />);

    expect(wrapper.queryAllByTestId('tag').length).toBeFalsy();
  });
});
