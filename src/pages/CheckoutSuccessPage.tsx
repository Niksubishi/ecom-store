import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/ui/Button';

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px;
  min-height: 60vh;
`;

const SuccessIcon = styled.div`
  font-size: 5rem;
  margin-bottom: 24px;
  animation: bounce 1s ease-in-out;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const SuccessTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const SuccessMessage = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightText};
  margin: 0 0 32px 0;
  max-width: 500px;
  line-height: 1.5;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

const OrderDetails = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 32px;
  max-width: 400px;
  width: 100%;
`;

const OrderTitle = styled.h2`
  font-size: 1.3rem;
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.text};
`;

const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.95rem;

  &:last-child {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CheckoutSuccessPage: React.FC = () => {
  const orderNumber = Math.random().toString(36).substring(2, 15).toUpperCase();
  const orderDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Set page title for accessibility
  useEffect(() => {
    document.title = 'Order Confirmation - eComStore';

    // Announce to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.textContent = 'Order placed successfully';
    document.body.appendChild(announcement);

    return () => {
      document.title = 'eComStore';
      document.body.removeChild(announcement);
    };
  }, []);

  return (
    <SuccessContainer>
      <SuccessIcon role="img" aria-label="Success">
        🎉
      </SuccessIcon>

      <SuccessTitle>Order Confirmed!</SuccessTitle>

      <SuccessMessage>
        Thank you for your purchase! Your order has been successfully placed
        and is being processed. You'll receive a confirmation email shortly.
      </SuccessMessage>

      <OrderDetails>
        <OrderTitle>Order Summary</OrderTitle>
        <OrderInfo>
          <span>Order Number:</span>
          <span>#{orderNumber}</span>
        </OrderInfo>
        <OrderInfo>
          <span>Order Date:</span>
          <span>{orderDate}</span>
        </OrderInfo>
        <OrderInfo>
          <span>Status:</span>
          <span>Processing</span>
        </OrderInfo>
      </OrderDetails>

      <ActionButtons>
        <Link to="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4a90e2',
          color: 'white',
          textDecoration: 'none',
          padding: '14px 28px',
          fontSize: '1.125rem',
          fontWeight: '500',
          borderRadius: '6px',
          transition: 'background-color 0.2s ease'
        }}>
          Continue Shopping
        </Link>
        <Link to="/contact" style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          color: '#4a90e2',
          textDecoration: 'none',
          border: '1px solid #4a90e2',
          padding: '14px 28px',
          fontSize: '1.125rem',
          fontWeight: '500',
          borderRadius: '6px',
          transition: 'all 0.2s ease'
        }}>
          Contact Support
        </Link>
      </ActionButtons>
    </SuccessContainer>
  );
};

export default CheckoutSuccessPage;