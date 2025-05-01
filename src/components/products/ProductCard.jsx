import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ProductInfo = styled.div`
  padding: 16px;
`;

const ProductTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
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
  margin-left: 8px;
`;

const Discount = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: 0.8rem;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 8px;
`;

const ViewButton = styled(Link)`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}dd;
  }
`;

const ProductCard = ({ product }) => {
  const hasDiscount = product.price !== product.discountedPrice;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100
      )
    : 0;

  return (
    <Card>
      <ImageContainer>
        <ProductImage src={product.image.url} alt={product.title} />
      </ImageContainer>
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <PriceContainer>
          <Price>${product.discountedPrice}</Price>
          {hasDiscount && (
            <>
              <OriginalPrice>${product.price}</OriginalPrice>
              <Discount>{discountPercentage}% OFF</Discount>
            </>
          )}
        </PriceContainer>
        <ViewButton to={`/product/${product.id}`}>View Product</ViewButton>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard;
