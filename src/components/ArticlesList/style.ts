import styled from 'styled-components';

import ArticleHeader from 'components/ArticleHeader';

export const Container = styled.div`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    align-items: start;
    grid-gap: 50px;
    margin: 0 auto;
    
    @media(max-width: ${theme.breakpoints.laptop}) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      max-width: 890px;
    }

    @media(max-width: ${theme.breakpoints.tablet}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      max-width: 420px;
    }
  `}
`;

export const Article = styled.article`
  grid-column: span 2 / span 2;

  .gatsby-image-wrapper {
    transition-duration: 0.2s;
    border-radius: 10px;
  }

  &:hover {
    .gatsby-image-wrapper {
      transform: scale(0.98);
    }
  }
`;

export const StyledArticleHeader = styled(ArticleHeader)`
  padding-bottom: 0;

  h1 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-top: 20px;
  }
`;
