import React, {useEffect, useRef} from 'react'
import { Link } from 'gatsby'

//styled components
import { HeaderNav, Logo, Menu } from '../styles/HeaderStyles'
import { Container, Flex } from '../styles/GlobalStyles'

// Context
import {useGlobalStateContext, useGlobalDispatchContext} from '../context/GlobalContext'

//custom hook
import useElementPosition from "../Hooks/useElementPosition"

const Header = ({onCursor, setToggleMenu, toggleMenu, setHamburgerPosition, hamburgerPosition}) => {

  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  const hamburger = useRef(null)
  const position = useElementPosition(hamburger)

  const toggleTheme = () => {
    if(currentTheme === 'dark') {
      dispatch( {type: 'TOGGLE_THEME', theme: "light"} )
    } else {
      dispatch({ type: 'TOGGLE_THEME', theme: "dark" })
    }
  }

  const menuHover = () => {
    onCursor("locked")
    setHamburgerPosition({ x: position.x, y: position.y + 72 })
  }

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{y: 0, opacity: 1}}
      initial={{y: -72, opacity: 0}}
      transition={{duration:1, ease: [.6, .05, -.01, .9] }}
    >
      <Container >
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link to="/">FURR</Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
            ></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu ref={hamburger} onClick={() => setToggleMenu(!toggleMenu)} onMouseEnter={menuHover} onMouseLeave={onCursor}>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
