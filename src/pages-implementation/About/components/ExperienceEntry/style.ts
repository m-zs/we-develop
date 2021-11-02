import styled from 'styled-components';

import HighlightedLink from 'components/HighlightedLink';

export const Container = styled.div`
  padding: 50px 0;
  padding-left: 70px;
  position: relative;
  margin-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px 0;
    padding-left: 30px;
    margin-top: 50px;
  }

  &:before {
    content: '';
    width: 5px;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #ededed;
  }

  ul {
    padding-left: 15px;
    margin: 0;
  }
`;

export const Date = styled.span`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-weight: 500;
`;

export const StyledHighlightedLink = styled(HighlightedLink)`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-weight: 900;
  font-size: 1.6rem;
  padding: 5px 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.4rem;
  }
`;

export const WorkDescription = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

export const Company = styled.h2`
  font-size: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: 10px;
`;

export const InnerSection = styled.div`
  margin-top: 35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 20px;
  }
`;

export const Project = styled.span`
  font-size: 1.2rem;
`;
