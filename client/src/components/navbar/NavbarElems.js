import styled from 'styled-components'
import {Link as LinkR } from 'react-router-dom'
import {Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #030029;
    // background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justifly-content: center;
    align-items: center;
    font-size;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960) {
        transition 0.3s all ease;
    }
`;

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #87e1f5;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;
    color: #fff;
    
    &:hover {
        color: #fff59d;
        transition: 0.2s ease-in-out;
      }

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    };
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display:none;
    }
`;
export const NavItem = styled.li`
    height: 80px;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
     
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor pointer;

    &:hover {
        color: #fff59d;
        transition: 0.2s ease-in-out;
      }
    &.active {
        border-bottom: 3px solid #fff59d;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #fff59d;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fffde;
    font-size: 16px:
    outline: none;
    border: none;
    curosor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &.hover {
        transition: all 0.3s ease-in-out;
        background: #fff;
        color: #00838f;
    }
`