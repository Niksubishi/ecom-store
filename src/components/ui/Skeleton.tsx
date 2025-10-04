import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'rectangular' | 'circular';
  animation?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const getVariantStyles = (variant: SkeletonProps['variant']) => {
  switch (variant) {
    case 'text':
      return css`
        border-radius: 4px;
        height: 1.2em;
      `;
    case 'circular':
      return css`
        border-radius: 50%;
      `;
    default:
      return css`
        border-radius: 8px;
      `;
  }
};

const StyledSkeleton = styled.div<SkeletonProps>`
  display: block;
  background-color: #e0e0e0;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width || '100%')};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height || '20px')};

  ${({ variant }) => getVariantStyles(variant)}

  ${({ animation = true }) => animation && css`
    background-image: linear-gradient(
      90deg,
      #e0e0e0 0px,
      #f0f0f0 40px,
      #e0e0e0 80px
    );
    background-size: 200px;
    animation: ${shimmer} 1.4s ease-in-out infinite;
  `}
`;

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant = 'rectangular',
  animation = true,
  className,
  style,
}) => {
  return (
    <StyledSkeleton
      width={width}
      height={height}
      variant={variant}
      animation={animation}
      className={className}
      style={style}
      aria-label="Loading..."
      role="progressbar"
    />
  );
};