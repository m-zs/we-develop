import styled from 'styled-components';

import { flexAlignCenterJustifySpaceBetween } from 'styles/shared';

export const Container = styled.footer`
  ${({ theme }) => `
    ${flexAlignCenterJustifySpaceBetween}
    flex-wrap: wrap;
    margin: auto 20px;
    margin-bottom: 40px;
    padding: 40px;
    background: ${theme.colors.layoutMain};
    border-radius: 10px;

    @media (max-width: ${theme.breakpoints.mobile}) {
      border-radius: 0;
      margin: auto 0;
      margin-bottom: 0;
      padding: 40px 20px;
    }
  `}
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialLink = styled.a`
  ${({ theme }) => `
    color: ${theme.colors.white};
    font-family: ${theme.fonts.headings};
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-underline-offset: 6px;
    position: relative;
    margin-right: 30px;

    &:hover {
      text-decoration: none;
    }

    &:focus-visible {
      outline-color: ${theme.colors.white};
    }

    &:not(:first-of-type) {
      &:before {
        content: "";
        display: block;
        position: absolute;
        width: 4px;
        height: 4px;
        background: ${theme.colors.white};
        border-radius: 30px;
        left: -17px;
      }
  `}
`;
