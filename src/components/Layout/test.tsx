import { render } from 'shared/tests/test-utils';

import Layout from './component';

describe('Layout - component', () => {
  const Children = () => <div data-testid="children" />;

  it('should render passed children and valid structure', () => {
    const wrapper = render(
      <Layout>
        <Children />
      </Layout>,
    );

    expect(wrapper.getByTestId('children')).toBeInTheDocument();
    expect(wrapper.getByTestId('navbar')).toBeInTheDocument();
    expect(wrapper.getByTestId('footer')).toBeInTheDocument();
  });
});
