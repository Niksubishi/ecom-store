import React from "react";
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
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">eComStore</Logo>
      <RightSection>
        <Navigation />
        <CartIcon />
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
