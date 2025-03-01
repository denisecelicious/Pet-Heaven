import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useRef } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import AuthModal from '../../layout/user/Auth';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProfileIcon from '../../assets/user/profile.png';
import Swal from "sweetalert2";

const Navbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [showLogin, setShowLogin] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [profileImage, setUserImage] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (storedUser && storedUser.profileImage) {
      setUserImage(storedUser.profileImage);
    }
  }, []);


  const handleLogout = () => {
    // localStorage.removeItem("isAuthenticated");
    // setIsAuthenticated(false);
    // handleCloseMenu();
    Swal.fire({
      title: 'Are you sure you want to logout?',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      denyButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Logout Successful!', '', 'success')
        localStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("loggedInUser")
        setIsAuthenticated(false);
        handleCloseMenu();
        navigate("/") // navigate to home page
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  };


  return (
    <>
      <Main>
        <NavLink to='/'>
          <Logo>Pet Heaven</Logo>
        </NavLink>
        <Nav ref={navRef}>
          <NavLink to='/adopt'>Adopt</NavLink>
          <NavLink to='/release'>Release</NavLink>
          <NavLink to='/check-status'>Check Status</NavLink>
          <NavLink to='/about-us'>About</NavLink>
          <NavLink to='/support-us'>Support</NavLink>
          <CloseButton className='nav-btn nav-close-btn' onClick={showNavBar}>
            <ClearIcon />
          </CloseButton>
        </Nav>

        {/* Show Login Button if not logged in/authenticated, otherwise show Avatar */}
        {!isAuthenticated ? (
          <LoginButton onClick={() => setShowLogin(true)}>Login</LoginButton>
        ) : (
          <>
            <AvatarButton onClick={handleAvatarClick}>
              <Avatar src={profileImage || ProfileIcon} alt='Profile' />
            </AvatarButton>
            <ProfileMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} style={{ borderRadius: "10px" }}>
              <MenuItem onClick={() => navigate(`/profile`)} style={{ fontFamily: "Poppins" }}>Profile</MenuItem>
              <MenuItem onClick={handleLogout} style={{ fontFamily: "Poppins" }}>Logout</MenuItem>
            </ProfileMenu>
          </>
        )}

        <Button className='nav-btn' onClick={showNavBar}>
          <MenuIcon />
        </Button>
      </Main>

      {/* Login Modal */}
      <AuthModal show={showLogin} handleClose={() => setShowLogin(false)} setIsAuthenticated={setIsAuthenticated} />
    </>
  );
};

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
  position: relative;
  z-index: 10;
`;

const NavLink = styled(Link)`
  margin: 0 2rem;
  color: #000;
  text-decoration: none;
  font-family: "Poppins", serif;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #bb7b6b;
  }
`;

const Button = styled.button`
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: #bb7b6b;
  font-size: 1.8rem;
  display: none; /* Hide by default */

  @media only screen and (max-width: 1024px) {
    display: block; /* Show on smaller screens */
  }
`;

const LoginButton = styled.button`
  background-color: #bb7b6b;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Poppins", serif;
  font-weight: 600;
  margin-left: auto;
  margin-right: 20px;
  &:hover {
    background-color: #a15f56;
  }
`;

const AvatarButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;
  margin-right: 20px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    background-color: #ffffff;
    color: #bb7b6b;
    transition: transform 0.3s ease-in-out;
    transform: translateY(-100vh); /* Initially hidden */
  }

  &.responsive-nav {
    transform: translateY(0);
  }
`;


const CloseButton = styled.button`
  padding: 5px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: #bb7b6b;
  font-size: 1.8rem;
  display: none; /* Ensure it is hidden */

  @media only screen and (max-width: 1024px) {
    display: block; /* Show it only on mobile */
    visibility: visible;
    opacity: 1;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;

const ProfileMenu = styled(Menu)`
  border-radius: 5px;
`;




export default Navbar;
