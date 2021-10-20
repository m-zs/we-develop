import styled from 'styled-components';

export const Tags = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
`;

export const Tag = styled.li`
  ${({ theme }) => `
    padding: 5px 10px;
    border-radius: 4px;
    background: ${theme.colors.textHighlight};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.headings};
    font-weight: 900;
    margin: 5px;
  `}
`;
