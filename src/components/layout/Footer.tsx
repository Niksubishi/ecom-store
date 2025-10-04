import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  padding: 40px 20px 20px;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.colors.white};
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const FooterBottom = styled.div`
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer role="contentinfo">
      <FooterContent>
        <FooterSection>
          <FooterTitle>eComStore</FooterTitle>
          <FooterText>
            Your one-stop destination for quality products at competitive prices.
            We're committed to providing an excellent shopping experience.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Customer Service</FooterTitle>
          <FooterLink href="/contact">Contact Us</FooterLink>
          <FooterLink href="#" aria-label="Shipping Information">Shipping Info</FooterLink>
          <FooterLink href="#" aria-label="Return Policy">Returns</FooterLink>
          <FooterLink href="#" aria-label="Frequently Asked Questions">FAQ</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Company</FooterTitle>
          <FooterLink href="#" aria-label="About Us">About</FooterLink>
          <FooterLink href="#" aria-label="Privacy Policy">Privacy Policy</FooterLink>
          <FooterLink href="#" aria-label="Terms of Service">Terms</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Connect</FooterTitle>
          <FooterText>
            Follow us on social media for updates and special offers.
          </FooterText>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {currentYear} eComStore. All rights reserved.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};