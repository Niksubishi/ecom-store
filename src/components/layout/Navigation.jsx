import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  margin-right: 20px;
`;

const StyledNavLink = styled(NavLink)`
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &.active {
    color: #4a90e2;
    font-weight: bold;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
    </Nav>
  );
};

export default Navigation;
