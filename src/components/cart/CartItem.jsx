import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";

const CartItemContainer = styled.div`
  display: flex;
  padding: 16px 0;
  border-bottom: 1px solid #eee;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 16px;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const ItemTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 4px;
`;

const ItemPrice = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  margin-bottom: 8px;
`;

const ItemControls = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const QuantityButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: none;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const QuantityDisplay = styled.span`
  margin: 0 8px;
  font-size: 0.9rem;
  min-width: 20px;
  text-align: center;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.8rem;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary}cc;
  }
`;

const TotalPrice = styled.div`
  margin-left: auto;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const totalItemPrice = (item.discountedPrice * item.quantity).toFixed(2);

  return (
    <CartItemContainer>
      <ItemImage src={item.image.url} alt={item.image.alt || item.title} />

      <ItemDetails>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemPrice>${item.discountedPrice.toFixed(2)}</ItemPrice>

        <ItemControls>
          <QuantityControl>
            <QuantityButton onClick={handleDecreaseQuantity}>-</QuantityButton>
            <QuantityDisplay>{item.quantity}</QuantityDisplay>
            <QuantityButton onClick={handleIncreaseQuantity}>+</QuantityButton>
          </QuantityControl>

          <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
        </ItemControls>
      </ItemDetails>

      <TotalPrice>${totalItemPrice}</TotalPrice>
    </CartItemContainer>
  );
};

export default CartItem;
