import styled from 'styled-components';

export const Tag = styled.div`
  ${({ theme }) => `
    padding: 12px 24px;
    border-radius: 99px;
    background: ${theme.colors.textHighlight};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.headings};
    font-weight: 900;
    margin: 5px;
    display: inline-block;
  `}
`;
