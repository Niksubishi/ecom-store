import React from 'react';
import styled from 'styled-components';
import { Button } from '../ui/Button';

interface ErrorFallbackProps {
  error?: string;
  onRetry?: () => void;
  showRetry?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  min-height: 200px;
`;

const ErrorIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ErrorTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 400px;
`;

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error = 'Something went wrong. Please try again.',
  onRetry,
  showRetry = true,
}) => {
  return (
    <Container>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorTitle>Oops!</ErrorTitle>
      <ErrorMessage>{error}</ErrorMessage>
      {showRetry && onRetry && (
        <Button onClick={onRetry} variant="outline">
          Try Again
        </Button>
      )}
    </Container>
  );
};