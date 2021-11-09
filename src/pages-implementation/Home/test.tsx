import { customRender, screen } from 'shared/tests/test-utils';

import { createArticle } from 'shared/tests/fixtures';
import { HomeProps } from './type';
import Home from './component';

describe('Home - page', () => {
  const props = {
    data: {
      allMdx: {
        articles: [
          createArticle({ id: '1', title: 'title1' }),
          createArticle({ id: '2', title: 'title2' }),
        ],
      },
    },
  };

  it('should render proper structure', () => {
    customRender(<Home {...(props as HomeProps)} />);

    expect(screen.getAllByRole('article').length).toBe(
      props.data.allMdx.articles.length,
    );
    // articles + introduction
    expect(screen.getAllByRole('heading', { level: 1 }).length).toBe(3);
    // per section
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBe(1);
  });
});
