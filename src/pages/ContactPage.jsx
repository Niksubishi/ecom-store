import React from "react";
import styled from "styled-components";
import ContactForm from "../components/contact/ContactForm";

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactHeader = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.lightText};
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactHeader>
        <Title>Contact Us</Title>
        <Description>
          Have questions about our products or services? Fill out the form below
          and we'll get back to you as soon as possible.
        </Description>
      </ContactHeader>

      <ContactForm />
    </ContactContainer>
  );
};

export default ContactPage;
