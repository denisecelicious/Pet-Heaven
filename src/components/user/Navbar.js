import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useRef } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }

  return (
    <Main>
      <NavLink to='/'>
        <Logo>Pet Heaven</Logo>
      </NavLink>
      <Nav ref={navRef}>
        <NavLink to='/adopt'>Adopt</NavLink>
        <NavLink href="/#">Pet Release</NavLink>
        <NavLink href="/#">About us</NavLink>
        <NavLink href="/#">Get Started</NavLink>
        <NavLink href="/#">Contact Us</NavLink>
        <CloseButton className='nav-btn nav-close-btn' onClick={showNavBar}>
          <ClearIcon />
        </CloseButton>
      </Nav>
      <Button className='nav-btn' onClick={showNavBar}>
        <MenuIcon />
      </Button>
    </Main>
  );
}


const Logo = styled.h1`
  color: #bb7b6b;
  font-weight: 400;
  font-family: "Caprasimo", serif;
`;

const Main = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 2rem;
  color: #000;
  position: relative; /* Ensure z-index works as intended */
  z-index: 10; /* Higher z-index to stay above carousel */
`

const NavLink = styled(Link)`
margin: 0 2rem;
color: #000;
text-decoration: none;
font-family: "Poppins", serif;
font-weight: 500;
font-style: normal;
font-size: 18px;
cursor: pointer;
  &:hover {
    color: #bb7b6b;
  }
@media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
}
`


const Button = styled.button`
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: #bb7b6b;
  visibility: hidden;
  opacity: 0;
  font-size: 1.8rem;

  @media only screen and (max-width: 1024px) {
    visibility: visible;
    opacity: 1;
  }
`;

const Nav = styled.nav`
  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    color: #bb7b6b;
    transition: 1s;
    transform: translateY(-100vh);
  }

  &.responsive-nav {
    transform: translateY(0);
    background-color: #ffffff; /* Background color when collapsed */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional shadow for effect */
  }
`;

const CloseButton = styled.button`
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: #bb7b6b;
  visibility: hidden;
  opacity: 0;
  font-size: 1.8rem;

  @media only screen and (max-width: 1024px) {
    visibility: visible;
    opacity: 1;
    position: absolute;
    top: 4rem;
    right: 2rem;
  }
`;



export default Navbar;
