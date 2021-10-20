import styled from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;

    pre {
      display: block;
      position: relative;
      background: #19212e;
      color: ${theme.colors.white};
      padding: 50px 30px;
      border-radius: 10px;
      overflow: hidden;
      white-space: pre-wrap;

      &[class^="snippet"] {
        &:before {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          left: 30px;
          height: 20px;
          padding: 5px 15px;
          font-family: ${theme.fonts.main};
          font-size: 10px;
          text-transform: uppercase;
          font-weight: 900;
          border-radius: 0 0 4px 4px;
          color: ${theme.colors.white};
        }

      &.language-js, &.language-jsx {
        &:before {
          content: "javascript";
          background: #f0db4f;
          color: ${theme.colors.black};
        }
      }

      &.language-graphql {
        &:before {
          content: "graphql";
          background: #e535ab;
        }
      }

      &.language-html {
        &:before {
          content: "html";
          background: #f06529;
        }
      }

      &.language-ts {
        &:before {
          content: "typescript";
          background: #007acc;
        }
      }

      &.language-css {
        &:before {
          content: "css";
          background: #2965f1;
        }
      }
    }

    h1, h2, h3, h4, h5 {
      display: block;
      margin-bottom: 10px;
    }
  `}
`;

export const Content = styled.section`
  width: 700px;
  max-width: 100%;
  margin-top: 15px;
  font-size: 1.2rem;
  font-weight: 300;
`;
