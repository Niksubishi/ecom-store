import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { CartIcon } from '../cart/CartIcon';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: relative;
  z-index: 50;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
`;


const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const HamburgerLine = styled.div<{ isOpen: boolean }>`
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.text};
  margin: 3px 0;
  transition: all 0.3s ease;

  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'};
  }

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'};
  }
`;

const MobileNavigation = styled.nav<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  z-index: 100;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  padding-top: 80px;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;

  ${({ isOpen }) => isOpen && 'display: flex;'}

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none !important;
  }
`;

const MobileNavigationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 32px;
  padding: 0 20px;
`;

const MobileNavLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-align: center;
  min-width: 200px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const MobileCartIcon = styled(CartIcon)`
  transform: scale(1.5);
  margin: 0;
`;

const CloseMenuButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  line-height: 1;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 6px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  transition: top 0.3s;

  &:focus {
    top: 6px;
  }
`;

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const focusableElements = mobileMenuRef.current?.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    firstElement.focus();
    document.addEventListener('keydown', handleTabKey);

    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <SkipLink href="#main-content">
        Skip to main content
      </SkipLink>

      <HeaderContainer role="banner">
        <Logo to="/" aria-label="eComStore - Go to homepage">
          <LogoImage
            src="/images/logo.png"
            alt=""
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </Logo>

        <RightSection>
          <Navigation />
          <CartIcon />
        </RightSection>

        <MobileMenuButton
          ref={menuButtonRef}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <HamburgerLine isOpen={isMobileMenuOpen} />
          <HamburgerLine isOpen={isMobileMenuOpen} />
          <HamburgerLine isOpen={isMobileMenuOpen} />
        </MobileMenuButton>
      </HeaderContainer>

      <MobileNavigation
        ref={mobileMenuRef}
        id="mobile-navigation"
        isOpen={isMobileMenuOpen}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <CloseMenuButton
          onClick={closeMobileMenu}
          aria-label="Close menu"
        >
          ×
        </CloseMenuButton>

        <MobileNavigationContent>
          <MobileNavLink
            to="/"
            onClick={closeMobileMenu}
            aria-label="Go to home page"
          >
            Home
          </MobileNavLink>
          <MobileNavLink
            to="/contact"
            onClick={closeMobileMenu}
            aria-label="Go to contact page"
          >
            Contact
          </MobileNavLink>
          <MobileCartIcon onClick={closeMobileMenu} />
        </MobileNavigationContent>
      </MobileNavigation>
    </>
  );
};