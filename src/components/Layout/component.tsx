import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/globalStyle';
import { themes, ThemeVariants } from 'styles/theme';
import { getFromLocalStorage, saveToLocalStorage } from 'shared/utils/storage';
import * as S from './style';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Layout: FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariants>(
    getFromLocalStorage('theme') || 'light',
  );

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <S.Container>
        <GlobalStyle />
        <Navbar />
        <S.Content>{children}</S.Content>
        <Footer
          selectedTheme={currentTheme}
          toggleThemeCallback={() => {
            const nextValue = currentTheme === 'light' ? 'dark' : 'light';

            setCurrentTheme(nextValue);
            saveToLocalStorage('theme', nextValue);
          }}
        />
      </S.Container>
    </ThemeProvider>
  );
};

export default Layout;
