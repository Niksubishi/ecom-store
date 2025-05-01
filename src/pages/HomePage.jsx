import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchProducts } from "../api/apiClient";
import ProductCard from "../components/products/ProductCard";
import SearchBar from "../components/products/SearchBar";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 8px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`;

const NoResults = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin: 40px 0;
  color: ${({ theme }) => theme.colors.lightText};
`;

const LoadingText = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin: 40px 0;
`;

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) {
    return <LoadingText>Loading products...</LoadingText>;
  }

  if (error) {
    return <NoResults>{error}</NoResults>;
  }

  return (
    <HomeContainer>
      <div>
        <Title>All Products</Title>
        <SearchBar onSearch={handleSearch} />
      </div>

      {filteredProducts.length === 0 ? (
        <NoResults>No products found matching "{searchTerm}"</NoResults>
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
