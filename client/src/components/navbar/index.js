import React, {useState, useEffect} from 'react'
import { 
    MobileIcon,
    Nav,
    NavBarContainer,
    NavLinks,
    NavLogo,
    NavMenu,
    NavItem
     } from './NavbarElems'
import { FaBars, FaRegUser, FaChalkboard, FaAddressBook, FaCode } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib'
import { Icon } from '../sidebar/SideBarElems';


const NavBar = ({toggle}) => {
        const [scrollNav, setScrollNav] = useState(false);
      
        const changeNav = () => {
          if (window.scrollY >= 80) {
            setScrollNav(true);
          } else {
            setScrollNav(false);
          }
        };
      
        useEffect(() => {
          window.addEventListener('scroll', changeNav);
        }, []);
      
        const toggleHome = () => {
          scroll.scrollToTop();
        };
      

    return (
            <IconContext.Provider value={{ color: '#fff' }} >
                <Nav scrollNav={scrollNav} >
                    <NavBarContainer>
                        <NavLogo onClick={toggleHome} to='/'>
                            AVS
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about'> <FaRegUser /> About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='portfolio'> <FaChalkboard /> Portfolio</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='skills'> <FaCode /> Skills</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='contact'> <FaAddressBook /> Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
    )
}

export default NavBar
