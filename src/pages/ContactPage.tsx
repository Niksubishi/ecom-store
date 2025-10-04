import React from 'react';
import styled from 'styled-components';
import { ContactForm } from '../components/contact/ContactForm';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Header = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.lightText};
  margin: 0;
  line-height: 1.5;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ContactPage: React.FC = () => {
  return (
    <ContactContainer>
      <Header>
        <Title>Get in Touch</Title>
        <Subtitle>
          Have a question, suggestion, or need support? We'd love to hear from you.
          Fill out the form below and we'll get back to you as soon as possible.
        </Subtitle>
      </Header>

      <FormWrapper>
        <ContactForm />
      </FormWrapper>
    </ContactContainer>
  );
};

export default ContactPage;