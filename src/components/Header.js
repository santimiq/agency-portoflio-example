import React, {useEffect} from 'react'
import { Link } from 'gatsby'

//styled components
import { HeaderNav, Logo, Menu } from '../styles/HeaderStyles'
import { Container, Flex } from '../styles/GlobalStyles'

// Context
import {useGlobalStateContext, useGlobalDispatchContext} from '../context/GlobalContext'


const Header = () => {

  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()
  const toggleTheme = () => {
    if(currentTheme === 'dark') {
      dispatch( {type: 'TOGGLE_THEME', theme: "light"} )
    } else {
      dispatch({ type: 'TOGGLE_THEME', theme: "dark" })
    }
  }

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav animate={{y: 0, opacity: 1}} initial={{y: -72, opacity: 0}} transition={{duration:1, ease: [.6, .05, -.01, .9] }}>
      <Container >
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">FURR</Link>
            <span onClick={toggleTheme}></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu>
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
