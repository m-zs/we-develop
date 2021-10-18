import React, { useState } from 'react';
import { Link } from 'gatsby';

import { themeBase } from 'styles/theme';
import * as S from './style';
import { useMatchMedia } from 'shared/hooks/useMatchMedia';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const shouldRenderHamburger = useMatchMedia(
    `(max-width: ${themeBase.breakpoints.mobile})`,
  );
  const isMobileNavVisible = shouldRenderHamburger && isActive;

  return (
    <S.Container data-testid="navbar">
      <Link to="/">
        <S.Logo>we develop</S.Logo>
      </Link>

      {shouldRenderHamburger && (
        <S.ToggleNavButton
          onClick={() => setIsActive(!isActive)}
          isActive={isMobileNavVisible}
          data-testid="navbar-hamburger"
        >
          <span />
          <span />
          <span />
        </S.ToggleNavButton>
      )}

      <S.LinksContainer
        {...(shouldRenderHamburger && { 'aria-hidden': !isMobileNavVisible })}
        isActive={isMobileNavVisible}
        data-testid="navbar-links"
      >
        <S.NavLink to="/" activeClassName="active">
          Home
        </S.NavLink>
        <S.NavLink to="/blog" partiallyActive activeClassName="active">
          Blog
        </S.NavLink>
        <S.NavLink to="/about" activeClassName="active">
          About
        </S.NavLink>
        <S.NavLink to="/contact" activeClassName="active">
          Contact
        </S.NavLink>
      </S.LinksContainer>
    </S.Container>
  );
};

export default Navbar;
