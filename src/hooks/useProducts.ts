import { useState, useEffect, useCallback } from 'react';
import { Product, ProductsState, ApiError } from '../types';
import { fetchProducts } from '../api/apiClient';

export function useProducts() {
  const [state, setState] = useState<ProductsState>({
    products: [],
    filteredProducts: [],
    isLoading: true,
    error: null,
  });

  const [searchTerm, setSearchTerm] = useState('');

  const loadProducts = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      const products = await fetchProducts();
      setState(prev => ({
        ...prev,
        products,
        filteredProducts: products,
        isLoading: false,
      }));
    } catch (error) {
      const apiError = error as ApiError;
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: apiError.message || 'Failed to fetch products',
      }));
    }
  }, []);

  const filterProducts = useCallback((term: string) => {
    setSearchTerm(term);
    if (term.trim() === '') {
      setState(prev => ({ ...prev, filteredProducts: prev.products }));
    } else {
      setState(prev => ({
        ...prev,
        filteredProducts: prev.products.filter(product =>
          product.title.toLowerCase().includes(term.toLowerCase()) ||
          product.description.toLowerCase().includes(term.toLowerCase()) ||
          product.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
        ),
      }));
    }
  }, []);

  const retry = useCallback(() => {
    loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return {
    ...state,
    searchTerm,
    filterProducts,
    retry,
  };
}