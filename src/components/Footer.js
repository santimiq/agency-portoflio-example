import React from 'react'
import { Container, Flex } from "../styles/GlobalStyles"
import {FooterContent, FooterSocial, FooterNav} from "../styles/footerStyles"

//Icons
import {Instagram, Facebook, Vimeo} from '../assets/svg/social-icons'

const Footer = ({onCursor}) => {
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>903.315.1234</p>
            <p>info@furrow.studio</p>
          </FooterContent>
          <FooterContent wider>
            <p>15 Cam at Unit B</p>
            <p>University, PE C32 0E2</p>
          </FooterContent>
          <FooterSocial>
            <a onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} href="/">
              <Instagram/>
            </a>
            <a onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} href="/">
              <Facebook/>
            </a>
            <a onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} href="/">
              <Vimeo/>
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
