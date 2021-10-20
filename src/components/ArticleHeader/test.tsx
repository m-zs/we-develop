import { customRender } from 'shared/tests/test-utils';

import ArticleHeader from './component';

describe('ArticleHeader - component', () => {
  const baseProps = {
    date: 'dateTvalue',
    readingTime: 'time',
    title: 'title',
    tags: ['tag', 'tag2'],
    summary: 'summary text',
  };

  it('should render valid base structure', () => {
    const wrapper = customRender(<ArticleHeader {...baseProps} />);

    expect(wrapper.getByText(baseProps.summary)).toBeInTheDocument();
    expect(wrapper.getByText(baseProps.title)).toBeInTheDocument();
    expect(
      wrapper.getByText(`📖 ${baseProps.readingTime}`),
    ).toBeInTheDocument();
    expect(
      wrapper.getByText(`📆 ${baseProps.date.split('T')[0]}`),
    ).toBeInTheDocument();
    expect(wrapper.getAllByRole('listitem').length).toBe(baseProps.tags.length);
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

  it('should render link element', () => {
    const link = { text: 'text', href: 'href' };

    const wrapper = customRender(<ArticleHeader {...baseProps} link={link} />);

    expect(wrapper.getByRole('link')).toBeInTheDocument();
  });
});
