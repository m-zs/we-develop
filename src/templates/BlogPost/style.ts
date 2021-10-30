import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { flexColumn } from 'styles/shared';

export const Container = styled.article`
  ${flexColumn}
  align-items: center;
  width: 900px;
  max-width: 100%;
  margin: 0 auto;
`;

export const Main = styled.main`
  ${({ theme }) => `
    font-size: 1.2rem;
    font-weight: 300;

    pre {
      display: block;
      position: relative;
      background: #19212e;
      color: ${theme.colors.white};
      padding: 50px 30px;
      border-radius: 10px;
      overflow: hidden;
      max-width: 100%;
      width: 900px;
      margin-bottom: 30px;

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



    h1, h2, h3, h4, h5, p {
      margin: 0 auto;
      display: block;
      margin-bottom: 30px;
      max-width: 700px;
    }

    h1, h2 {
      margin-top: 25px;
      margin-bottom: 35px;
    }
  `}
`;

export const BlogLink = styled(Link)`
  ${({ theme }) => `
    color: ${theme.colors.textHighlight};
    font-family: ${theme.fonts.headings};
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 6px;
    align-self: flex-start;
    margin-bottom: 60px;

    &:hover {
      text-decoration: none;
    }
  `}
`;

export const FeaturedImage = styled(GatsbyImage)`
  margin-top: 30px;
  margin-bottom: 60px;
`;
