import styled from 'styled-components';

export const Header = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8rem;
  }
`;
