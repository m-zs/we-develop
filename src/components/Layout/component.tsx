import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/globalStyle';
import { theme } from 'styles/theme';
import * as S from './style';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <GlobalStyle />
        <Navbar />
        <S.Content>{children}</S.Content>
        <Footer />
      </S.Container>
    </ThemeProvider>
  );
};

export default Layout;
