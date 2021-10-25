import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled(Link)`
  ${({ theme }) => `
    position: relative;
    transition-duration: 0.2s;
    display: inline-flex;
    color: ${theme.colors.textHighlight};
    overflow: hidden;

    &:hover, &:focus-visible {
      color: ${theme.colors.white};
      text-decoration: none;

      &:before {
        transform: translateX(0);
      }
    }

    &:before {
      content: '';
      position: absolute;
      left: -2px;
      bottom: 0;
      width: 100%;
      height: 100%;
      display: block;
      background: ${theme.colors.textHighlight};
      z-index: -1;
      padding: 0 4px;
      transition-duration: 0.2s;
      transform: translateX(-100%);
    }

    &:focus-visible {
      outline-offset: 2px;
    }
  `}
`;
