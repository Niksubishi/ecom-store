import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/Button';

interface CartItemProps {
  item: CartItemType;
}

const ItemContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 12px;
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 100px;
  height: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-self: center;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 0.8rem;
  text-align: center;
`;

const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ItemTitle = styled.h3`
  font-size: 1.1rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const Price = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const OriginalPrice = styled.span`
  font-size: 0.9rem;
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.lightText};
`;

const ItemControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const QuantityButton = styled(Button).attrs({
  variant: 'outline',
  size: 'small',
})`
  width: 32px;
  height: 32px;
  padding: 0;
  font-size: 1.2rem;
  line-height: 1;
`;

const QuantityDisplay = styled.span`
  font-size: 1rem;
  font-weight: 500;
  min-width: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const SubtotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
  }
`;

const SubtotalLabel = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

const Subtotal = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const RemoveButton = styled(Button).attrs({
  variant: 'ghost',
  size: 'small',
})`
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}11;
  }
`;

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    if (window.confirm(`Remove ${item.title} from your cart?`)) {
      removeFromCart(item.id);
    }
  };

  const subtotal = (item.discountedPrice * item.quantity).toFixed(2);
  const hasDiscount = item.price !== item.discountedPrice;

  return (
    <ItemContainer>
      <ImageContainer>
        {!imageError && item.image?.url ? (
          <ItemImage
            src={item.image.url}
            alt={item.image.alt || item.title}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <ImagePlaceholder>
            No Image
          </ImagePlaceholder>
        )}
      </ImageContainer>

      <ItemInfo>
        <ItemTitle>{item.title}</ItemTitle>

        <PriceContainer>
          <Price>${item.discountedPrice.toFixed(2)}</Price>
          {hasDiscount && (
            <OriginalPrice>${item.price.toFixed(2)}</OriginalPrice>
          )}
        </PriceContainer>

        <ItemControls>
          <QuantityControls>
            <QuantityButton
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
            >
              −
            </QuantityButton>
            <QuantityDisplay>
              {item.quantity}
            </QuantityDisplay>
            <QuantityButton
              onClick={() => handleQuantityChange(item.quantity + 1)}
              aria-label="Increase quantity"
            >
              +
            </QuantityButton>
          </QuantityControls>

          <SubtotalContainer>
            <SubtotalLabel>Subtotal</SubtotalLabel>
            <Subtotal>${subtotal}</Subtotal>
          </SubtotalContainer>

          <RemoveButton onClick={handleRemove}>
            Remove
          </RemoveButton>
        </ItemControls>
      </ItemInfo>
    </ItemContainer>
  );
};

export const CartItem = memo(CartItemComponent);