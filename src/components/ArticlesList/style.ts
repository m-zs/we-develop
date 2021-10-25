import styled from 'styled-components';
import { Link } from 'gatsby';

import { flexColumn } from 'styles/shared';
import ArticleHeader from 'components/ArticleHeader';

export const Container = styled.div`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(100% / 3 - 50px), 1fr));
    align-items: start;
    grid-gap: 50px;
    
    @media(max-width: ${theme.breakpoints.laptop}) {
      grid-template-columns: repeat(auto-fill, minmax(calc(100% / 2 - 50px), 1fr));
    }

    @media(max-width: ${theme.breakpoints.tablet}) {
      ${flexColumn}
    }
  `}
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => `
    max-width: 100%;

    &:hover {
      color: ${theme.colors.textHighlight};
    }
  `}
`;

export const StyledArticleHeader = styled(ArticleHeader)`
  border-bottom: none;
  padding-bottom: 0;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }

  p {
    font-size: 1.2rem;
    margin-top: 12px;
  }
`;
