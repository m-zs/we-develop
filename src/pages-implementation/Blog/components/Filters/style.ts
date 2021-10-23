import styled from 'styled-components';

import Tag from 'components/Tag';

export const Container = styled.div`
  margin-bottom: 50px;
`;

export const Tags = styled.div`
  margin: -5px;
`;

export const StyledTag = styled(Tag)<{ active: boolean }>`
  ${({ theme, active }) => `
    padding: 10px 20px;
    cursor: pointer;
    user-select: none;
    transition-duration: 0.2s;
    border: 2px solid ${theme.colors.textHighlight};
    background: ${active ? theme.colors.textHighlight : 'transparent'};
    color: ${active ? theme.colors.white : theme.colors.textHighlight};

    &:hover {
      filter: brightness(0.85);
    }

    &:focus-visible {
      outline-style: dashed;
      outline-offset: 5px;
    }
  `}
`;

export const Header = styled.h2`
  margin-bottom: 15px;
`;
