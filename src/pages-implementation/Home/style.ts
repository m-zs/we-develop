import styled from 'styled-components';

export const Introduction = styled.h1`
  max-width: 700px;
  font-size: 3.5rem;
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.6rem;
  }
`;

export const Header = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8rem;
  }
`;

export const Section = styled.section`
  &:not(:first-of-type) {
    margin-top: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-top: 60px;
    }
  }
`;
