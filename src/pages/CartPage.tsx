import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../hooks/useCart';
import { useToast } from '../context/ToastContext';
import { CartItem } from '../components/cart/CartItem';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const CartContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
  }
`;

const CartContent = styled.div`
  flex: 2;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
`;

const CartTitle = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

const CartItemCount = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 80px 20px;
`;

const EmptyCartIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 16px;
  opacity: 0.3;
`;

const EmptyCartMessage = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

const EmptyCartSubtext = styled.p`
  font-size: 1rem;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.lightText};
`;

const CartSummary = styled(Card)`
  flex: 1;
  height: fit-content;
  position: sticky;
  top: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
  }
`;

const SummaryTitle = styled.h2`
  font-size: 1.3rem;
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.text};
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1rem;

  &:last-of-type {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 2px solid ${({ theme }) => theme.colors.lightGray};
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const SummaryLabel = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

const SummaryValue = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

const CheckoutButton = styled(Button).attrs({
  size: 'large',
  fullWidth: true,
})`
  margin-top: 20px;
`;

const ContinueShoppingButton = styled(Button).attrs({
  variant: 'outline',
  size: 'large',
})``;

const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const ClearCartButton = styled(Button).attrs({
  variant: 'ghost',
  size: 'small',
})`
  color: ${({ theme }) => theme.colors.secondary};
  align-self: flex-start;
`;

const CartPage: React.FC = () => {
  const { cartItems, getTotalPrice, clearCart, getItemCount } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const totalItems = getItemCount();
  const subtotal = getTotalPrice();
  const shipping: number = 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    clearCart();
    addToast({
      type: 'success',
      title: 'Order Placed!',
      message: 'Thank you for your purchase. Your order has been confirmed.',
    });
    navigate('/checkout-success');
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      clearCart();
      addToast({
        type: 'info',
        title: 'Cart Cleared',
        message: 'All items have been removed from your cart.',
      });
    }
  };

  if (cartItems.length === 0) {
    return (
      <EmptyCart>
        <EmptyCartIcon>🛒</EmptyCartIcon>
        <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
        <EmptyCartSubtext>
          Looks like you haven't added any items to your cart yet.
        </EmptyCartSubtext>
        <ContinueShoppingButton onClick={handleContinueShopping}>
          Continue Shopping
        </ContinueShoppingButton>
      </EmptyCart>
    );
  }

  return (
    <CartContainer>
      <CartContent>
        <CartHeader>
          <CartTitle>Shopping Cart</CartTitle>
          <CartItemCount>
            {totalItems} {totalItems === 1 ? 'item' : 'items'}
          </CartItemCount>
        </CartHeader>

        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <ActionsContainer>
          <ClearCartButton onClick={handleClearCart}>
            Clear Cart
          </ClearCartButton>
        </ActionsContainer>
      </CartContent>

      <CartSummary>
        <SummaryTitle>Order Summary</SummaryTitle>

        <SummaryRow>
          <SummaryLabel>Subtotal ({totalItems} items)</SummaryLabel>
          <SummaryValue>${subtotal.toFixed(2)}</SummaryValue>
        </SummaryRow>

        <SummaryRow>
          <SummaryLabel>Shipping</SummaryLabel>
          <SummaryValue>
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </SummaryValue>
        </SummaryRow>

        <SummaryRow>
          <SummaryLabel>Tax</SummaryLabel>
          <SummaryValue>${tax.toFixed(2)}</SummaryValue>
        </SummaryRow>

        <SummaryRow>
          <SummaryLabel>Total</SummaryLabel>
          <SummaryValue>${total.toFixed(2)}</SummaryValue>
        </SummaryRow>

        <CheckoutButton onClick={handleCheckout}>
          Proceed to Checkout
        </CheckoutButton>

        <Button
          variant="outline"
          fullWidth
          onClick={handleContinueShopping}
          style={{ marginTop: '12px' }}
        >
          Continue Shopping
        </Button>
      </CartSummary>
    </CartContainer>
  );
};

export default CartPage;