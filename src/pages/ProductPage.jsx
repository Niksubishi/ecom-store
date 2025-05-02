import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchProductById } from "../api/apiClient";
import { CartContext } from "../context/CartContext";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-bottom: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Price = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const OriginalPrice = styled.span`
  font-size: 1.1rem;
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.lightText};
  margin-left: 12px;
`;

const Discount = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: 0.9rem;
  padding: 3px 8px;
  border-radius: 4px;
  margin-left: 12px;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 32px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}dd;
  }
`;

const ReviewsSection = styled.div`
  margin-top: 48px;
`;

const ReviewsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
`;

const NoReviews = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
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
  margin-bottom: 8px;
`;

const ReviewUser = styled.span`
  font-weight: 500;
`;

const ReviewRating = styled.span`
  color: #f39c12;
`;

const ReviewDescription = styled.p`
  font-size: 0.95rem;
`;

const LoadingText = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin: 40px 0;
`;

const ErrorText = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin: 40px 0;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Failed to fetch product. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);

    alert(`${product.title} added to cart!`);
  };

  if (loading) {
    return <LoadingText>Loading product...</LoadingText>;
  }

  if (error || !product) {
    return <ErrorText>{error || "Product not found"}</ErrorText>;
  }

  const hasDiscount = product.price !== product.discountedPrice;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100
      )
    : 0;

  return (
    <div>
      <ProductContainer>
        <ImageContainer>
          <ProductImage src={product.image.url} alt={product.image.alt} />
        </ImageContainer>

        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <PriceContainer>
            <Price>${product.discountedPrice.toFixed(2)}</Price>
            {hasDiscount && (
              <>
                <OriginalPrice>${product.price.toFixed(2)}</OriginalPrice>
                <Discount>{discountPercentage}% OFF</Discount>
              </>
            )}
          </PriceContainer>

          <Description>{product.description}</Description>
          <AddToCartButton onClick={handleAddToCart}>
            Add to Cart
          </AddToCartButton>

          <ReviewsSection>
            <ReviewsTitle>Reviews</ReviewsTitle>
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review) => (
                <ReviewCard key={review.id}>
                  <ReviewHeader>
                    <ReviewUser>{review.username}</ReviewUser>
                    <ReviewRating>
                      {/* Show stars based on rating */}
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </ReviewRating>
                  </ReviewHeader>
                  <ReviewDescription>{review.description}</ReviewDescription>
                </ReviewCard>
              ))
            ) : (
              <NoReviews>No reviews yet for this product.</NoReviews>
            )}
          </ReviewsSection>
        </ProductInfo>
      </ProductContainer>
    </div>
  );
};

export default ProductPage;
