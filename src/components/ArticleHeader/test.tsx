import { IGatsbyImageData } from 'gatsby-plugin-image';
import { customRender, screen } from 'shared/tests/test-utils';

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
    customRender(<ArticleHeader {...baseProps} />);

    expect(screen.getByText(baseProps.summary)).toBeInTheDocument();
    expect(screen.getByText(baseProps.title)).toBeInTheDocument();
    expect(
      screen.getByText(`${DATE_RETURN} - ${baseProps.readingTime}`),
    ).toBeInTheDocument();
    expect(screen.getAllByTestId('tag').length).toBe(baseProps.tags.length);
    expect(screen.queryByRole('img')).toBeNull();
  });

  it('should render additional class on wrapper', () => {
    const className = 'classname';

    customRender(<ArticleHeader {...baseProps} className={className} />);

    expect(
      screen
        .getByTestId('article-header')
        .getAttribute('class')
        ?.includes(className),
    ).toBe(true);
  });

  it('should render image in structure', async () => {
    customRender(
      <ArticleHeader
        {...baseProps}
        banner={{} as IGatsbyImageData}
        bannerAlt="alt"
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
