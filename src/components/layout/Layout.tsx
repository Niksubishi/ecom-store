import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding: 24px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px 12px;
  }
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main id="main-content" role="main">
        {children}
      </Main>
      <Footer />
    </LayoutContainer>
  );
};