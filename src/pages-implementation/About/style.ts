import styled from 'styled-components';

import HighlightedLink from 'components/HighlightedLink';

export const Introduction = styled.h1`
  max-width: 700px;
  font-size: 4rem;
  line-height: 1.1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.6rem;
  }
`;

export const TimelineBlock = styled.div``;

export const Date = styled.span`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-weight: 900;
  display: block;
`;

export const StyledHighlightedLink = styled(HighlightedLink)`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-weight: 900;
  font-size: 1.6rem;
  padding: 5px 20px;
`;

export const CompanyLinkGroup = styled.div`
  margin: 15px -20px;
`;

export const WorkDescription = styled.p``;

export const Company = styled.h2`
  font-size: 2.4rem;
`;
