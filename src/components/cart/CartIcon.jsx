import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartContainer = styled(Link)`
  position: relative;
  margin-left: 15px;
  display: flex;
  text-decoration: none;
  color: #333;
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #e94560;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
`;

const CartIconSVG = styled.svg`
  width: 24px;
  height: 24px;
`;

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContainer to="/cart">
      <CartIconSVG
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </CartIconSVG>
      {itemCount > 0 && <CartBadge>{itemCount}</CartBadge>}
    </CartContainer>
  );
};

export default CartIcon;
