import styled from 'styled-components';
import { Link } from 'gatsby';

import { flexAlignCenterJustifySpaceBetween, flexColumn } from 'styles/shared';

export const Container = styled.nav`
  ${({ theme }) => `
    ${flexAlignCenterJustifySpaceBetween}
    top: 0;
    z-index: 99;
    padding: 20px;
    background: ${theme.colors.body};
    position: sticky;
    min-height: 100px;
    transition-duration: 0.2s;
  `}
`;

export const Logo = styled.h1`
  ${({ theme }) => `
    color: ${theme.colors.font};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 20px;
    transition-duration: 0.2s;

    &:hover {
      color: ${theme.colors.textHighlight};
    }
  `}
`;

export const LinksContainer = styled.div<{ isActive: boolean }>`
  ${({ theme, isActive }) => `
    display: flex;
    background: ${theme.colors.body};
    transition-duration: 0.2s;

    @media (max-width: ${theme.breakpoints.mobile}) {
      transition-duration: 0.15s;
      position: fixed;
      width: 100%;
      top: ${isActive ? '90px' : '80px'};
      left: 0;
      box-sizing: border-box;
      flex-wrap: wrap;
      box-shadow: 0px 12px 15px -10px rgba(0, 0, 0, 0.1);
      padding: 0 20px;
      padding-bottom: 30px;
      visibility: ${isActive ? 'visible' : 'hidden'};
      pointer-events: ${isActive ? 'all' : 'none'};
      opacity: ${isActive ? 1 : 0};
    }
  `}
`;
export const NavLink = styled(Link)`
  ${({ theme }) => `
    display: inline-flex;
    position: relative;
    margin: 10px;
    text-decoration: none;
    color: inherit;
    font-family: ${theme.fonts.headings};
    font-weight: 500;
    
    &:after {
      pointer-events: none;
      content: '';
      width: 0;
      height: 3px;
      position: absolute;
      bottom: -10px;
      left: 0;
      visibility: hidden;
      pointer-events: none;
      transition-duration: 0.2s;
    }
    
    &:hover {
      color: ${theme.colors.textHighlight};
    }
    
    &.active {
      color: ${theme.colors.textHighlight};

      &:after {
        visibility: visible;
        width: 100%;
        background: ${theme.colors.textHighlight};
      }
    }
  `}
`;
export const ToggleNavButton = styled.button<{ isActive: boolean }>`
  ${({ theme, isActive }) => `
    ${flexColumn}
    all: unset;
    cursor: pointer;
    user-select: none;
    width: 20px;
    position: relative;
    padding: 5px;

    span {
      display: block;
      width: 20px;
      height: 2px;
      background ${theme.colors.font};
      transition-duration: 0.2s;

      &:nth-of-type(1), &:nth-of-type(3) {
        margin-left: ${isActive ? '3px' : 0};
      }

      &:nth-of-type(1) {
        transform: ${isActive ? 'rotate(45deg)' : 'rotate(0)'};
        transform-origin: left;
      }
      
      &:nth-of-type(2) {
        position: absolute;
        top: 12px;
        left: ${isActive ? 0 : '5px'};
        opacity: ${isActive ? 0 : 1};
      }
      
      &:nth-of-type(3) {
        margin-top: 12px;
        transform-origin: left;
        transform: ${isActive ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  `}
`;
