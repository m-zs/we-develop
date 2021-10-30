import styled from 'styled-components';

export const Container = styled.header`
  width: 700px;
  max-width: 100%;
  padding-bottom: 30px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2.5rem;
  font-weight: 500;

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

export const PostInfo = styled.span`
  ${({ theme }) => `
    display: block;
    padding-top: 20px;
    padding-bottom: 15px;
    font-weight: 500;
    font-family: ${theme.fonts.headings};
    font-size: 1.2rem;
  `}
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
`;
