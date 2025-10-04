import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Product, ApiError } from '../types';
import { fetchProductById } from '../api/apiClient';
import { useCart } from '../hooks/useCart';
import { useToast } from '../context/ToastContext';
import { Button } from '../components/ui/Button';
import { Skeleton } from '../components/ui/Skeleton';
import { ErrorFallback } from '../components/common/ErrorFallback';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 500px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.lightText};
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const Price = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const OriginalPrice = styled.span`
  font-size: 1.25rem;
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.lightText};
`;

const Discount = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
`;

const Stars = styled.span`
  color: #ffc107;
  font-size: 1.2rem;
`;

const ReviewsSection = styled.section`
  margin-top: 48px;
`;

const ReviewsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
`;

const ReviewCard = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 8px;
`;

const ReviewUser = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const ReviewRating = styled.span`
  color: #ffc107;
  font-size: 1.1rem;
`;

const ReviewDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

const NoReviews = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  font-style: italic;
  text-align: center;
  padding: 20px;
`;

const LoadingSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
  }
`;

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);

  const { addToCart } = useCart();
  const { addToast } = useToast();

  const discountInfo = useMemo(() => {
    if (!product) return { hasDiscount: false, discountPercentage: 0 };

    const hasDiscount = product.price !== product.discountedPrice;
    const discountPercentage = hasDiscount
      ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
      : 0;

    return { hasDiscount, discountPercentage };
  }, [product]);

  useEffect(() => {
    if (!id) {
      setError('Product ID is required');
      setLoading(false);
      return;
    }

    const getProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        const apiError = err as ApiError;
        setError(apiError.message || 'Failed to fetch product');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!product) return;

    try {
      setAddingToCart(true);
      addToCart(product);
      addToast({
        type: 'success',
        title: 'Added to Cart',
        message: `${product.title} has been added to your cart.`,
      });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Error',
        message: 'Failed to add item to cart. Please try again.',
      });
    } finally {
      setAddingToCart(false);
    }
  };

  const handleRetry = () => {
    if (id) {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <Stars>
        {'★'.repeat(fullStars)}
        {hasHalfStar && '☆'}
        {'☆'.repeat(5 - fullStars - (hasHalfStar ? 1 : 0))}
      </Stars>
    );
  };

  if (loading) {
    return (
      <LoadingSkeleton>
        <div style={{ flex: 1 }}>
          <Skeleton height={400} />
        </div>
        <div style={{ flex: 1 }}>
          <Skeleton height={40} width="80%" />
          <Skeleton height={24} width="60%" style={{ margin: '16px 0' }} />
          <Skeleton height={80} style={{ margin: '16px 0' }} />
          <Skeleton height={48} width="200px" />
        </div>
      </LoadingSkeleton>
    );
  }

  if (error || !product) {
    return (
      <ErrorFallback
        error={error || 'Product not found'}
        onRetry={handleRetry}
      />
    );
  }

  return (
    <div>
      <ProductContainer>
        <ImageContainer>
          {!imageError && product.image?.url ? (
            <ProductImage
              src={product.image.url}
              alt={product.image.alt || product.title}
              onError={() => setImageError(true)}
            />
          ) : (
            <ImagePlaceholder>
              Image not available
            </ImagePlaceholder>
          )}
        </ImageContainer>

        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>

          {product.rating && (
            <RatingContainer>
              {renderStars(product.rating)}
              <span>({product.rating})</span>
            </RatingContainer>
          )}

          <PriceContainer>
            <Price>${product.discountedPrice.toFixed(2)}</Price>
            {discountInfo.hasDiscount && (
              <>
                <OriginalPrice>${product.price.toFixed(2)}</OriginalPrice>
                <Discount>{discountInfo.discountPercentage}% OFF</Discount>
              </>
            )}
          </PriceContainer>

          <Description>{product.description}</Description>

          <Button
            onClick={handleAddToCart}
            isLoading={addingToCart}
            size="large"
            style={{ alignSelf: 'flex-start' }}
          >
            Add to Cart
          </Button>
        </ProductInfo>
      </ProductContainer>

      <ReviewsSection>
        <ReviewsTitle>Customer Reviews</ReviewsTitle>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <ReviewCard key={review.id}>
              <ReviewHeader>
                <ReviewUser>{review.username}</ReviewUser>
                <ReviewRating>
                  {renderStars(review.rating)}
                </ReviewRating>
              </ReviewHeader>
              <ReviewDescription>{review.description}</ReviewDescription>
            </ReviewCard>
          ))
        ) : (
          <NoReviews>No reviews yet for this product.</NoReviews>
        )}
      </ReviewsSection>
    </div>
  );
};

export default ProductPage;