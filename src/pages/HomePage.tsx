import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ProductCard } from '../components/products/ProductCard';
import { SearchBar } from '../components/products/SearchBar';
import { Skeleton } from '../components/ui/Skeleton';
import { ErrorFallback } from '../components/common/ErrorFallback';
import { useProducts } from '../hooks/useProducts';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 60px 20px;
`;

const NoResultsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

const NoResultsMessage = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.lightText};
  margin: 0;
`;

const LoadingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
`;

const ProductCardSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ResultsInfo = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 0.9rem;
  margin: 0;
`;

const HomePage: React.FC = () => {
  const {
    products,
    filteredProducts,
    isLoading,
    error,
    searchTerm,
    filterProducts,
    retry
  } = useProducts();

  const renderSkeletonCards = useMemo(() => {
    return Array.from({ length: 8 }, (_, index) => (
      <ProductCardSkeleton key={index}>
        <Skeleton height={200} />
        <Skeleton height={20} width="80%" />
        <Skeleton height={16} width="60%" />
        <Skeleton height={40} width="100px" />
      </ProductCardSkeleton>
    ));
  }, []);

  const resultsText = useMemo(() => {
    if (searchTerm.trim()) {
      return `Showing ${filteredProducts.length} results for "${searchTerm}"`;
    }
    return `Showing ${filteredProducts.length} products`;
  }, [filteredProducts.length, searchTerm]);

  if (isLoading) {
    return (
      <HomeContainer>
        <Header>
          <Skeleton height={40} width="200px" />
          <Skeleton height={48} width="500px" />
        </Header>
        <LoadingGrid>
          {renderSkeletonCards}
        </LoadingGrid>
      </HomeContainer>
    );
  }

  if (error) {
    return (
      <HomeContainer>
        <Header>
          <Title>All Products</Title>
        </Header>
        <ErrorFallback error={error} onRetry={retry} />
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      <Header>
        <div>
          <Title>All Products</Title>
          {!isLoading && (
            <ResultsInfo>{resultsText}</ResultsInfo>
          )}
        </div>
        <SearchBar onSearch={filterProducts} />
      </Header>

      {filteredProducts.length === 0 ? (
        <NoResults>
          <NoResultsTitle>
            {searchTerm.trim() ? 'No products found' : 'No products available'}
          </NoResultsTitle>
          <NoResultsMessage>
            {searchTerm.trim()
              ? `Try adjusting your search term "${searchTerm}"`
              : 'Please check back later for new products.'
            }
          </NoResultsMessage>
        </NoResults>
      ) : (
        <ProductsGrid>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      )}
    </HomeContainer>
  );
};

export default HomePage;