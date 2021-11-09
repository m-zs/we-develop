import { customRender, screen } from 'shared/tests/test-utils';

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
    customRender(<ArticlesList {...props} />);

    expect(screen.getAllByRole('article').length).toBe(props.articles.length);
    expect(screen.getAllByTestId('tag').length).toBeTruthy();
  });

  it('should not render tags with skipTags prop', () => {
    customRender(<ArticlesList {...props} skipTags />);

    expect(screen.queryAllByTestId('tag').length).toBeFalsy();
  });
});
