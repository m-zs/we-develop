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
    body: '#1e272e',
    font: '#fff',
    layoutMain: '#2c2c54',
    layoutHighlight: '#40407a',
    lightGray: '#f5f6fa',
    textHighlight: '#ef5777',
  },
};

const light: DefaultTheme = {
  ...themeBase,
  colors: {
    black: '#000',
    white: '#fff',
    gray: '#57606f',
    body: '#fff',
    font: '#1e272e',
    layoutMain: '#2c2c54',
    layoutHighlight: '#40407a',
    lightGray: '#f5f6fa',
    textHighlight: '#ef5777',
  },
};

export const themes = {
  light,
  dark,
};

export type ThemeVariants = keyof typeof themes;
