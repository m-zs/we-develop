import styled from 'styled-components';

export const Tag = styled.div`
  ${({ theme }) => `
    padding: 5px 10px;
    border-radius: 4px;
    background: ${theme.colors.textHighlight};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.headings};
    font-weight: 900;
    margin: 5px;
    display: inline-block;
  `}
`;
