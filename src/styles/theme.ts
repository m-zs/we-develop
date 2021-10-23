import { DefaultTheme } from 'styled-components';

export const themeBase = {
  fonts: { headings: 'Montserrat', main: 'Open Sans' },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px',
  },
};

const colorBase = {
  black: '#000',
  white: '#fff',
  gray: '#57606f',
  textHighlight: '#ef5777',
  layoutMain: '#2c2c54',
  layoutHighlight: '#40407a',
  lightGray: '#f5f6fa',
};

const dark: DefaultTheme = {
  ...themeBase,
  colors: {
    ...colorBase,
    font: '#fff',
    body: '#1e272e',
  },
};

const light: DefaultTheme = {
  ...themeBase,
  colors: {
    ...colorBase,
    body: '#fff',
    font: '#1e272e',
  },
};

export const themes = {
  light,
  dark,
};

export type ThemeVariants = keyof typeof themes;
