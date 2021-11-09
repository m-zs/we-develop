import { customRender, screen } from 'shared/tests/test-utils';

import { createArticle } from 'shared/tests/fixtures';
import { BlogProps } from './type';
import Blog from './component';

const createTag = (value: string) => ({ fieldValue: value });

describe('Blog - page', () => {
  const props = {
    data: {
      allMdx: {
        tags: [createTag('1'), createTag('2')],
        articles: [
          createArticle({ id: '1', title: 'title1' }),
          createArticle({ id: '2', title: 'title2' }),
        ],
      },
    },
  };

  it('should render proper structure', () => {
    customRender(<Blog {...(props as BlogProps)} />);

    expect(screen.getAllByRole('article').length).toBe(
      props.data.allMdx.articles.length,
    );
  });
});
