import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: { headings: string; main: string };
    colors: {
      black: string;
      gray: string;
      white: string;
      layoutMain: string;
      layoutHighlight: string;
      lightGray: string;
      body: string;
      font: string;
      textHighlight: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
    };
  }
}
