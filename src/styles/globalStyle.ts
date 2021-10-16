import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { theme } from './theme';
import { fonts } from './fonts';

export const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
${({ theme }) => `
  ${normalize}
  ${fonts}

  * {
    box-sizing: border-box;
    line-height: normal;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.fonts.main};
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }

  :focus-visible {
    outline: ${theme.colors.black} dotted 1px;
    outline-offset: 10px;
  `}
`;
