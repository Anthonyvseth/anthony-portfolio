import React from 'react'
import { 
    MobileIcon,
    Nav,
    NavBarContainer,
    NavLinks,
    NavLogo,
    NavMenu,
    NavItem
     } from './NavbarElems'

const NavBar = () => {
    return (
        <>
            <div>
                <Nav>
                    <NavBarContainer>
                        <NavLogo to='/'>
                            AVS
                        </NavLogo>
                        <MobileIcon>
                            AVS
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about'>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='portfolio'>Portfolio</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='skills'>Skills</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='contact'>Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavBarContainer>
                </Nav>
            </div>
        </>
    )
}

export default NavBar
