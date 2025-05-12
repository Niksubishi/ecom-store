import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import CartIcon from "../cart/CartIcon";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
`;

const LogoImage = styled.img`
  height: 40px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none; /* Hide on mobile */
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 5px 0;
  }
`;

const MobileNavigation = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 100;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  padding-top: 60px;
  overflow-y: auto;
  align-items: center;
  flex-direction: column;

  ${(props) =>
    props.isOpen &&
    `
    display: flex; 
    transform: translateX(0); 
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none !important;
  }
`;

const MobileNavigationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MobileNavLink = styled(Link)`
  margin: 20px 0;
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  font-weight: 500;

  &:active {
    color: #4a90e2;
    font-weight: bold;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const MobileCartIcon = styled(CartIcon)`
  margin-left: 0;
  margin-top: 20px;
`;

const CloseMenuButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
  padding: 10px;
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo to="/">
        <LogoImage src="/images/logo.png" alt="eComStore Logo" />
      </Logo>
      <RightSection>
        <Navigation />
        <CartIcon />
      </RightSection>
      <MobileMenuButton onClick={toggleMobileMenu}>
        {/* Hamburger Icon */}
        <div></div>
        <div></div>
        <div></div>
      </MobileMenuButton>
      <MobileNavigation isOpen={isMobileMenuOpen}>
        <CloseMenuButton onClick={toggleMobileMenu}>&times;</CloseMenuButton>
        <MobileNavigationContent>
          <MobileNavLink to="/" onClick={toggleMobileMenu} end>
            Home
          </MobileNavLink>
          <MobileNavLink to="/contact" onClick={toggleMobileMenu}>
            Contact
          </MobileNavLink>
          <MobileCartIcon onClick={toggleMobileMenu} />
        </MobileNavigationContent>
      </MobileNavigation>
    </HeaderContainer>
  );
};

export default Header;
