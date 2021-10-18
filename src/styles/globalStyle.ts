import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { fonts } from './fonts';

export const GlobalStyle = createGlobalStyle`
${({ theme }) => `
  ${normalize}
  ${fonts}

  * {
    box-sizing: border-box;
    line-height: normal;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${theme.fonts.main};
    background: ${theme.colors.body};
    color: ${theme.colors.font};
    font-size: 16px;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.headings};
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }

  :focus-visible {
    outline: ${theme.colors.black} dotted 1px;
    outline-offset: 10px;
  `}
`;
