import React, {useEffect, useState} from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 160) {
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>RSA</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='background' smooth={true} duration={500} spy={true} exact='true' offset={-100} activeClass="active">Background</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='algorithm' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Algorithm</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='example' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Example</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='application' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Applications</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='encrypt'>Encryption</NavBtnLink>
                </NavBtn>
                
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;
