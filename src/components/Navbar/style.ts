import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.nav`
  ${({ theme }) => `
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    z-index: 99;
    padding: 0 20px;
    background: ${theme.colors.white};
  `}
`;

export const Logo = styled.img`
  width: 130px;
  max-width: 100%;
  transition-duration: 0.2s;

  &:hover {
    filter: drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.1));
  }
`;
export const LinksContainer = styled.div<{ isActive: boolean }>`
  ${({ theme, isActive }) => `
    display: flex;
    background: ${theme.colors.white};

    @media (max-width: ${theme.breakpoints.mobile}) {
      transition-duration: 0.1s;
      position: fixed;
      width: 100%;
      top: ${isActive ? '70px' : '68px'};
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
    margin-bottom: 15px;
    text-decoration: none;
    color: inherit;
    font-family: ${theme.fonts.headings};
    font-weight: 500;
    
    &:after {
      pointer-events: none;
      content: '';
      width: 0;
      height: 2px;
      position: absolute;
      bottom: -10px;
      left: 0;
      visibility: hidden;
      pointer-events: none;
      transition-duration: 0.2s;
    }
    
    &:hover {
      color: lightgray;
      
      &:after {
        visibility: visible;
        width: 100%;
        background-color: ${theme.colors.gray};
      }
    }
    
    &.active {
      &:after {
        visibility: visible;
        width: 100%;
        background: ${theme.colors.black};
      }
      
      &:hover {
        &:after {
          background-color: ${theme.colors.gray};
        }
      }
    }
  `}
`;
export const ToggleNavButton = styled.button<{ isActive: boolean }>`
  ${({ theme, isActive }) => `
    all: unset;
    cursor: pointer;
    user-select: none;
    width: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 5px;

    span {
      display: block;
      width: 20px;
      height: 2px;
      background ${theme.colors.black};
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
