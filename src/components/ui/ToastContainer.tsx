import React from 'react';
import styled from 'styled-components';
import { useToast } from '../../context/ToastContext';
import { Toast } from './Toast';

const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 10px;
    right: 10px;
    left: 10px;
  }
`;

export const ToastContainer: React.FC = () => {
  const { toasts } = useToast();

  if (toasts.length === 0) {
    return null;
  }

  return (
    <Container>
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </Container>
  );
};