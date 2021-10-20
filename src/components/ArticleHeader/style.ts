import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.header`
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
