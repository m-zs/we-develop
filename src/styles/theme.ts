import { DefaultTheme } from 'styled-components';

export const themeBase = {
  fonts: { headings: 'Montserrat', main: 'Open Sans' },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
  },
};

const dark: DefaultTheme = {
  ...themeBase,
  colors: {
    black: '#000',
    white: '#fff',
    gray: '#57606f',
    body: '#000',
    layoutMain: '#2c2c54',
    layoutHighlight: '#40407a',
    lightGray: '#f5f6fa',
  },
};

const light: DefaultTheme = {
  ...themeBase,
  colors: {
    black: '#000',
    white: '#fff',
    gray: '#57606f',
    body: '#fff',
    layoutMain: '#2c2c54',
    layoutHighlight: '#40407a',
    lightGray: '#f5f6fa',
  },
};

export const themes = {
  light,
  dark,
};

export type ThemeVariants = keyof typeof themes;
