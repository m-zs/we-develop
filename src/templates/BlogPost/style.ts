import styled from 'styled-components';
import { Link } from 'gatsby';

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

export const Header = styled.header`
  width: 700px;
  max-width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid #ededed;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;

export const Summary = styled.p`
  font-size: 1.5rem;
  margin: 0;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.3rem;
  }
`;

export const InfoContainer = styled.div`
  ${({ theme }) => `
    padding-bottom: 5px;

    span {
      margin-right: 20px;
      font-weight: 900;
      font-family: ${theme.fonts.headings};
    }
  `}
`;

export const BlogLink = styled(Link)`
  ${({ theme }) => `
    display: inline-flex;
    color: ${theme.colors.textHighlight};
    font-family: ${theme.fonts.headings};
    font-weight: 900;
    border-radius: 4px;
    margin-bottom: 40px;
    text-decoration: underline;
    text-underline-offset: 6px;
    align-self: flex-start;

    &:hover {
      text-decoration: none;
    }
  `}
`;

export const Tags = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
`;

export const Tag = styled.li`
  ${({ theme }) => `
    padding: 5px 10px;
    border-radius: 4px;
    background: ${theme.colors.textHighlight};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.headings};
    font-weight: 900;
    margin: 5px;
  `}
`;

export const Content = styled.section`
  width: 700px;
  max-width: 100%;
  margin-top: 15px;
  font-size: 1.2rem;
  font-weight: 300;
`;
