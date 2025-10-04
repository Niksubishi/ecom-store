import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/Theme';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Layout } from './components/layout/Layout';
import { ToastContainer } from './components/ui/ToastContainer';
import { Skeleton } from './components/ui/Skeleton';
import styled from 'styled-components';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutSuccessPage = lazy(() => import('./pages/CheckoutSuccessPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`;

const LoadingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoadingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

const LoadingCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

// Loading fallback component
const PageLoadingFallback: React.FC = () => (
  <LoadingContainer>
    <LoadingHeader>
      <Skeleton height={40} width="200px" />
      <Skeleton height={48} width="300px" />
    </LoadingHeader>
    <LoadingGrid>
      {Array.from({ length: 6 }, (_, index) => (
        <LoadingCard key={index}>
          <Skeleton height={200} />
          <Skeleton height={20} width="80%" />
          <Skeleton height={16} width="60%" />
          <Skeleton height={40} width="100px" />
        </LoadingCard>
      ))}
    </LoadingGrid>
  </LoadingContainer>
);

// 404 Not Found component
const NotFoundPage: React.FC = () => (
  <div style={{
    textAlign: 'center',
    padding: '80px 20px',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <h1 style={{ fontSize: '4rem', margin: '0 0 16px 0', opacity: 0.3 }}>404</h1>
    <h2 style={{ fontSize: '1.5rem', margin: '0 0 8px 0' }}>Page Not Found</h2>
    <p style={{ color: '#666', marginBottom: '24px' }}>
      The page you're looking for doesn't exist.
    </p>
    <a
      href="/"
      style={{
        color: '#4a90e2',
        textDecoration: 'none',
        padding: '10px 20px',
        border: '1px solid #4a90e2',
        borderRadius: '6px',
        transition: 'all 0.2s ease'
      }}
    >
      Go Home
    </a>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <CartProvider>
              <GlobalStyles />
              <Layout>
                <Suspense fallback={<PageLoadingFallback />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route
                      path="/checkout-success"
                      element={<CheckoutSuccessPage />}
                    />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Suspense>
              </Layout>
              <ToastContainer />
            </CartProvider>
          </ToastProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;