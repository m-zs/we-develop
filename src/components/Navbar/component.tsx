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

  return (
    <S.Container>
      <Link to="/">
        <S.Logo src={logo} alt="we develop text" />
      </Link>

      {shouldRenderHamburger && (
        <S.ToggleNavButton
          onClick={() => setIsActive(!isActive)}
          isActive={shouldRenderHamburger && isActive}
        >
          <span />
          <span />
          <span />
        </S.ToggleNavButton>
      )}

      <S.LinksContainer isActive={shouldRenderHamburger && isActive}>
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
