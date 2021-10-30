import { IGatsbyImageData } from 'gatsby-plugin-image';
import { customRender } from 'shared/tests/test-utils';

import ArticleHeader from './component';

const DATE_RETURN = 'DATE';

jest.mock('./utils', () => ({
  formatDate: () => DATE_RETURN,
}));

describe('ArticleHeader - component', () => {
  const baseProps = {
    date: new Date().toString(),
    readingTime: 'time',
    title: 'title',
    tags: ['tag', 'tag2'],
    summary: 'summary text',
  };

  it('should render valid base structure without banner', () => {
    const wrapper = customRender(<ArticleHeader {...baseProps} />);

    expect(wrapper.getByText(baseProps.summary)).toBeInTheDocument();
    expect(wrapper.getByText(baseProps.title)).toBeInTheDocument();
    expect(
      wrapper.getByText(`${DATE_RETURN} - ${baseProps.readingTime}`),
    ).toBeInTheDocument();
    expect(wrapper.getAllByTestId('tag').length).toBe(baseProps.tags.length);
    expect(wrapper.queryByRole('img')).toBeNull();
  });

  it('should render additional class on wrapper', () => {
    const className = 'classname';

    const wrapper = customRender(
      <ArticleHeader {...baseProps} className={className} />,
    );

    expect(
      wrapper
        .getByTestId('article-header')
        .getAttribute('class')
        ?.includes(className),
    ).toBe(true);
  });

  it('should render image in structure', async () => {
    const wrapper = customRender(
      <ArticleHeader
        {...baseProps}
        banner={{} as IGatsbyImageData}
        bannerAlt="alt"
      />,
    );

    expect(wrapper.getByRole('img')).toBeInTheDocument();
  });
});
