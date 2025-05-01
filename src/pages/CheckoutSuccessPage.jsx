import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SuccessContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0;
`;

const CheckIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;

  svg {
    width: 40px;
    height: 40px;
    color: white;
  }
`;

const SuccessTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`;

const SuccessMessage = styled.p`
  font-size: 1.1rem;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.lightText};
  line-height: 1.6;
`;

const ReturnButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}dd;
  }
`;

const CheckoutSuccessPage = () => {
  return (
    <SuccessContainer>
      <CheckIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </CheckIcon>

      <SuccessTitle>Order Successful!</SuccessTitle>
      <SuccessMessage>
        Thank you for your purchase. Your order has been received and is being
        processed. You will receive a confirmation email with the details of
        your order shortly.
      </SuccessMessage>

      <ReturnButton to="/">Continue Shopping</ReturnButton>
    </SuccessContainer>
  );
};

export default CheckoutSuccessPage;
