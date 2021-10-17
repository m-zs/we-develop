import styled from 'styled-components';

import { Position } from './type';

export const Container = styled.div<{ position: Position }>`
  ${({ theme, position }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 68px;
    height: 30px;
    background: #1e272e;
    padding: 5px;
    border-radius: 30px;
    cursor: pointer;
    position: relative;

    &:after {
      content: '';
      display: block;
      left: -2px;
      bottom: -2px;
      position: absolute;
      width: 34px;
      height: 34px;
      background: ${theme.colors.white};
      border-radius: 30px;
      transition-duration: 0.2s;
      transform: ${position === 'left' ? 'none' : 'translateX(44px)'};
    }

    &:hover {
      &:after {
        background: ${theme.colors.lightGray};
      }
    }

    &:focus-visible {
      outline-color: ${theme.colors.white};
      outline-style: dashed;
    }
  `}
`;

export const Icon = styled.img<{ active: boolean }>`
  width: 20px;
  height: 20px;
  transition-duration: 0.2s;
  filter: brightness(${({ active }) => (active ? '0.2' : '1')});
`;
