import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from '../ui/Button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  min-height: 400px;
  border: 2px dashed ${({ theme }) => theme.colors.lightGray};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.6;
`;

const ErrorTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 500px;
  line-height: 1.5;
`;

const ErrorDetails = styled.details`
  margin-top: 20px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
`;

const ErrorSummary = styled.summary`
  font-weight: 500;
  cursor: pointer;
  padding: 4px;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ErrorStack = styled.pre`
  margin-top: 12px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-size: 0.875rem;
  overflow-x: auto;
  color: ${({ theme }) => theme.colors.text};
  white-space: pre-wrap;
  word-break: break-word;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // You could send error to logging service here
    // logErrorToService(error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorContainer>
          <ErrorIcon>💥</ErrorIcon>
          <ErrorTitle>Oops! Something went wrong</ErrorTitle>
          <ErrorMessage>
            We're sorry, but something unexpected happened. This error has been
            logged and we'll look into it. Please try refreshing the page or
            going back to the homepage.
          </ErrorMessage>

          <ButtonContainer>
            <Button onClick={this.handleRetry} variant="primary">
              Try Again
            </Button>
            <Button onClick={this.handleReload} variant="outline">
              Reload Page
            </Button>
            <Button onClick={this.handleGoHome} variant="ghost">
              Go Home
            </Button>
          </ButtonContainer>

          {process.env.NODE_ENV === 'development' && this.state.error && (
            <ErrorDetails>
              <ErrorSummary>Show Error Details</ErrorSummary>
              <ErrorStack>
                {this.state.error.message}
                {'\n\n'}
                {this.state.error.stack}
              </ErrorStack>
            </ErrorDetails>
          )}
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}