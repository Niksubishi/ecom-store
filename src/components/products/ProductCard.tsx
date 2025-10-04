import React, { memo, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { Card } from '../ui/Card';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const StyledCard = styled(Card)`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  background-color: ${({ theme }) => theme.colors.lightGray};

  ${StyledCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 0.875rem;
`;

const ProductInfo = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.text};
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
`;

const Price = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const OriginalPrice = styled.span`
  font-size: 0.9rem;
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.lightText};
`;

const Discount = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  text-transform: uppercase;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

const Stars = styled.span`
  color: #ffc107;
`;

const ViewButton = styled(Link)`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: auto;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}dd;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ProductCardComponent: React.FC<ProductCardProps> = ({ product, className }) => {
  const [imageError, setImageError] = useState(false);

  const discountInfo = useMemo(() => {
    const hasDiscount = product.price !== product.discountedPrice;
    const discountPercentage = hasDiscount
      ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
      : 0;

    return { hasDiscount, discountPercentage };
  }, [product.price, product.discountedPrice]);

  const formattedPrice = useMemo(() => {
    return {
      discounted: product.discountedPrice.toFixed(2),
      original: product.price.toFixed(2),
    };
  }, [product.discountedPrice, product.price]);

  const renderStars = useMemo(() => {
    if (!product.rating) return null;

    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;

    return (
      <>
        <Stars>
          {'★'.repeat(fullStars)}
          {hasHalfStar && '☆'}
          {'☆'.repeat(5 - fullStars - (hasHalfStar ? 1 : 0))}
        </Stars>
        <span>({product.rating})</span>
      </>
    );
  }, [product.rating]);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <StyledCard className={className} padding="none" hover>
      <ImageContainer>
        {!imageError && product.image?.url ? (
          <ProductImage
            src={product.image.url}
            alt={product.image.alt || product.title}
            loading="lazy"
            onError={handleImageError}
          />
        ) : (
          <ImagePlaceholder>
            No Image Available
          </ImagePlaceholder>
        )}
      </ImageContainer>

      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>

        {product.rating && (
          <RatingContainer>
            {renderStars}
          </RatingContainer>
        )}

        <PriceContainer>
          <Price>${formattedPrice.discounted}</Price>
          {discountInfo.hasDiscount && (
            <>
              <OriginalPrice>${formattedPrice.original}</OriginalPrice>
              <Discount>{discountInfo.discountPercentage}% OFF</Discount>
            </>
          )}
        </PriceContainer>

        <ViewButton to={`/product/${product.id}`}>
          View Product
        </ViewButton>
      </ProductInfo>
    </StyledCard>
  );
};

export const ProductCard = memo(ProductCardComponent);