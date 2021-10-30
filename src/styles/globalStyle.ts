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
      transition-duration: 0.2s;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: ${theme.fonts.headings};
      padding: 0;
      margin: 0;
    }

    a {
      all: unset;
      cursor: pointer;
    }

    button {
      all: inherit;

      &:focus-visible {
        outline: ${theme.colors.textHighlight} dotted 1px;
      }
    }

    *:focus:not(:focus-visible) {
      outline: none;
    }

    :focus-visible {
      outline: ${theme.colors.textHighlight} solid 1px;
      outline-offset: 10px;
    }

    section {
      &:not(:last-of-type) {
        margin-bottom: 80px;

        @media (max-width: ${theme.breakpoints.tablet}) {
          margin-bottom: 60px;
        }
      }
    }
  `}
`;
