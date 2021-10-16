import React, { useState } from 'react'
import { Link } from 'gatsby'

import logo from 'assets/images/logo.svg'
import { theme } from 'styles/theme'
import * as S from './style'
import { useMatchMedia } from 'shared/hooks/useMatchMedia'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const shouldRenderHamburger = useMatchMedia(
    `(max-width: ${theme.breakpoints.mobile})`
  )
  const isMobileNavVisible = shouldRenderHamburger && isActive

  return (
    <S.Container>
      <Link to="/">
        <S.Logo src={logo} alt="we develop text" />
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
        <S.NavLink to="/blog" activeClassName="active">
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
  )
}

export default Navbar
