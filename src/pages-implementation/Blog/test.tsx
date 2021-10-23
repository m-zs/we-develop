import { customRender } from 'shared/tests/test-utils';

import { BlogProps } from './type';
import Blog from './component';

const createTag = (value: string) => ({ fieldValue: value });
const createPost = ({ id, title }: { id: string; title: string }) => ({
  node: {
    id,
    slug: 'string',
    frontmatter: {
      date: 'string',
      summary: 'string',
      tags: ['1', '2'],
      title,
    },
    fields: {
      readingTime: {
        text: 'string',
      },
    },
  },
});

describe('Blog', () => {
  const props = {
    data: {
      allMdx: {
        tags: [createTag('1'), createTag('2')],
        posts: [
          createPost({ id: '1', title: 'title1' }),
          createPost({ id: '2', title: 'title2' }),
        ],
      },
    },
  };

  it('should render proper structure', () => {
    const wrapper = customRender(<Blog {...(props as BlogProps)} />);

    expect(wrapper.getAllByRole('article').length).toBe(
      props.data.allMdx.posts.length,
    );
  });
});
