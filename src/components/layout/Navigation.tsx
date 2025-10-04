import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.text};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};
  font-size: 1rem;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary}11;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background-color: ${theme.colors.primary};
      border-radius: 1px;
    }
  `}
`;

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <Nav role="navigation" aria-label="Main navigation">
      <NavLink
        to="/"
        $isActive={location.pathname === '/'}
        aria-current={location.pathname === '/' ? 'page' : undefined}
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        $isActive={location.pathname === '/contact'}
        aria-current={location.pathname === '/contact' ? 'page' : undefined}
      >
        Contact
      </NavLink>
    </Nav>
  );
};