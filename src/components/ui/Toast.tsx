import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ToastNotification } from '../../types';
import { useToast } from '../../context/ToastContext';

interface ToastProps {
  toast: ToastNotification;
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const getToastStyles = (type: ToastNotification['type']) => {
  switch (type) {
    case 'success':
      return css`
        background-color: #d4edda;
        border-color: #c3e6cb;
        color: #155724;
      `;
    case 'error':
      return css`
        background-color: #f8d7da;
        border-color: #f5c6cb;
        color: #721c24;
      `;
    case 'warning':
      return css`
        background-color: #fff3cd;
        border-color: #ffeeba;
        color: #856404;
      `;
    default:
      return css`
        background-color: #d1ecf1;
        border-color: #bee5eb;
        color: #0c5460;
      `;
  }
};

const ToastContainer = styled.div<{ type: ToastNotification['type'] }>`
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  margin-bottom: 8px;
  border: 1px solid;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.3s ease-out;
  max-width: 400px;
  min-width: 300px;
  position: relative;

  ${({ type }) => getToastStyles(type)}

  &.toast-exit {
    animation: ${slideOut} 0.3s ease-in;
  }
`;

const ToastContent = styled.div`
  flex: 1;
`;

const ToastTitle = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;

const ToastMessage = styled.div`
  font-size: 0.875rem;
  opacity: 0.9;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  padding: 0;
  margin-left: 12px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const getIcon = (type: ToastNotification['type']) => {
  switch (type) {
    case 'success':
      return '✓';
    case 'error':
      return '✕';
    case 'warning':
      return '⚠';
    default:
      return 'ℹ';
  }
};

export const Toast: React.FC<ToastProps> = ({ toast }) => {
  const { removeToast } = useToast();

  return (
    <ToastContainer type={toast.type}>
      <ToastContent>
        <ToastTitle>
          {getIcon(toast.type)} {toast.title}
        </ToastTitle>
        {toast.message && <ToastMessage>{toast.message}</ToastMessage>}
      </ToastContent>
      <CloseButton onClick={() => removeToast(toast.id)} aria-label="Close">
        ×
      </CloseButton>
    </ToastContainer>
  );
};