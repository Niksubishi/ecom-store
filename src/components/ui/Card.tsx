import React from 'react';
import styled, { css } from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'small' | 'medium' | 'large';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const getPaddingStyles = (padding: CardProps['padding']) => {
  switch (padding) {
    case 'none':
      return css`padding: 0;`;
    case 'small':
      return css`padding: 12px;`;
    case 'large':
      return css`padding: 24px;`;
    default:
      return css`padding: 16px;`;
  }
};

const getVariantStyles = (variant: CardProps['variant']) => {
  switch (variant) {
    case 'outlined':
      return css`
        background-color: transparent;
        border: 1px solid #e0e0e0;
        box-shadow: none;
      `;
    case 'elevated':
      return css`
        background-color: ${({ theme }) => theme.colors.white};
        border: none;
        box-shadow: ${({ theme }) => theme.shadows.medium};
      `;
    default:
      return css`
        background-color: ${({ theme }) => theme.colors.white};
        border: none;
        box-shadow: ${({ theme }) => theme.shadows.small};
      `;
  }
};

const StyledCard = styled.div<CardProps>`
  border-radius: 8px;
  transition: all 0.3s ease;

  ${({ variant }) => getVariantStyles(variant)}
  ${({ padding }) => getPaddingStyles(padding)}

  ${({ hover }) => hover && css`
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.medium};
    }
  `}

  ${({ onClick }) => onClick && css`
    cursor: pointer;
  `}
`;

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'medium',
  hover = false,
  className,
  onClick,
}) => {
  return (
    <StyledCard
      variant={variant}
      padding={padding}
      hover={hover}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledCard>
  );
};