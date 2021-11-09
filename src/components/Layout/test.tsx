import { render, screen } from 'shared/tests/test-utils';

import Layout from './component';

describe('Layout - component', () => {
  const Children = () => <div data-testid="children" />;

  it('should render passed children and valid structure', () => {
    render(
      <Layout>
        <Children />
      </Layout>,
    );

    expect(screen.getByTestId('children')).toBeInTheDocument();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
