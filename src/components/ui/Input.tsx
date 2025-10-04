import React from 'react';
import styled, { css } from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  fullWidth?: boolean;
  label?: string;
  errorMessage?: string;
  helpText?: string;
}

const InputContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledInput = styled.input<{ hasError?: boolean }>`
  padding: 12px 16px;
  border: 1px solid ${({ hasError, theme }) =>
    hasError ? theme.colors.secondary : '#ddd'};
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${({ hasError, theme }) =>
      hasError ? theme.colors.secondary : theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ hasError, theme }) =>
      hasError ? `${theme.colors.secondary}22` : `${theme.colors.primary}22`};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

const ErrorMessage = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const HelpText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

export const Input: React.FC<InputProps> = ({
  hasError,
  fullWidth = false,
  label,
  errorMessage,
  helpText,
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <InputContainer fullWidth={fullWidth}>
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {props.required && <span style={{ color: 'red' }}> *</span>}
        </Label>
      )}
      <StyledInput
        id={inputId}
        hasError={hasError || !!errorMessage}
        {...props}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {helpText && !errorMessage && <HelpText>{helpText}</HelpText>}
    </InputContainer>
  );
};