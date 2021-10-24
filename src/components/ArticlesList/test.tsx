import { customRender } from 'shared/tests/test-utils';

import { createArticle } from 'shared/tests/fixtures';
import ArticlesList from './component';

describe('ArticlesList', () => {
  it('should render proper structure', () => {
    const props = {
      articles: [
        createArticle({ id: '1', title: 'title 1' }),
        createArticle({ id: '2', title: 'title 2' }),
      ],
    };

    const wrapper = customRender(<ArticlesList {...props} />);

    expect(wrapper.getAllByRole('article').length).toBe(props.articles.length);
  });
});
