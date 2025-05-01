import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";

const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
`;

const CartTitle = styled.h1`
  font-size: 1.8rem;
`;

const CartItemCount = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 40px 0;
`;

const EmptyCartMessage = styled.p`
  font-size: 1.1rem;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.lightText};
`;

const ContinueShoppingButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}dd;
  }
`;

const CartSummary = styled.div`
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 24px;
  border-radius: 8px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 1rem;

  &:last-of-type {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid #ddd;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const CheckoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  width: 100%;
  padding: 14px;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 8px;
  margin-top: 24px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}dd;
  }
`;

const CartPage = () => {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const subtotal = getTotalPrice().toFixed(2);

  const handleCheckout = () => {
    // Clear cart and navigate to checkout success page
    clearCart();
    navigate("/checkout-success");
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>Your Cart</CartTitle>
        <CartItemCount>{totalItems} item(s)</CartItemCount>
      </CartHeader>

      {cartItems.length === 0 ? (
        <EmptyCart>
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
          <ContinueShoppingButton onClick={handleContinueShopping}>
            Continue Shopping
          </ContinueShoppingButton>
        </EmptyCart>
      ) : (
        <>
          {/* Cart Items */}
          <div>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Cart Summary */}
          <CartSummary>
            <SummaryRow>
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </SummaryRow>
            <SummaryRow>
              <span>Shipping</span>
              <span>Free</span>
            </SummaryRow>
            <SummaryRow>
              <span>Total</span>
              <span>${subtotal}</span>
            </SummaryRow>

            <CheckoutButton onClick={handleCheckout}>
              Proceed to Checkout
            </CheckoutButton>
          </CartSummary>
        </>
      )}
    </CartContainer>
  );
};

export default CartPage;
