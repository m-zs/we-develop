// https://testing-library.com/docs/react-testing-library/setup#custom-render
import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { themes } from 'styles/theme';

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={themes.light}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender };
