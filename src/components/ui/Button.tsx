import React from 'react';
import styled, { css } from 'styled-components';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

interface ButtonProps extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}

const getVariantStyles = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.colors.secondary};
        color: white;
        border: 1px solid ${({ theme }) => theme.colors.secondary};

        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.secondary}dd;
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.primary};

        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.primary};
          color: white;
        }
      `;
    case 'ghost':
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border: 1px solid transparent;

        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.primary}11;
        }
      `;
    default:
      return css`
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
        border: 1px solid ${({ theme }) => theme.colors.primary};

        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.primary}dd;
        }
      `;
  }
};

const getSizeStyles = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        padding: 6px 12px;
        font-size: 0.875rem;
      `;
    case 'large':
      return css`
        padding: 14px 28px;
        font-size: 1.125rem;
      `;
    default:
      return css`
        padding: 10px 20px;
        font-size: 1rem;
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  white-space: nowrap;
  position: relative;

  ${({ variant }) => getVariantStyles(variant)}
  ${({ size }) => getSizeStyles(size)}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <LoadingSpinner />}
      {children}
    </StyledButton>
  );
};