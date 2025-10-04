import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

interface CartIconProps {
  className?: string;
  onClick?: () => void;
}

const CartContainer = styled(Link)`
  position: relative;
  margin-left: 15px;
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
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

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  padding: 0 4px;
  animation: pulse 0.3s ease-in-out;

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`;

const CartIconSVG = styled.svg`
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease;

  ${CartContainer}:hover & {
    transform: scale(1.1);
  }
`;

const CartIconComponent: React.FC<CartIconProps> = ({ className, onClick }) => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <CartContainer
      to="/cart"
      className={className}
      onClick={onClick}
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <CartIconSVG
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </CartIconSVG>
      {itemCount > 0 && (
        <CartBadge aria-label={`${itemCount} items in cart`}>
          {itemCount > 99 ? '99+' : itemCount}
        </CartBadge>
      )}
    </CartContainer>
  );
};

export const CartIcon = memo(CartIconComponent);