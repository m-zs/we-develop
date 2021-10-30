import styled from 'styled-components';

export const Container = styled.h1`
  max-width: 700px;
  font-size: 4rem;
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.6rem;
  }
`;
