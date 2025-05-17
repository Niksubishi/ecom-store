import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 6px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid
    ${({ hasError, theme }) => (hasError ? theme.colors.secondary : "#ddd")};
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ hasError, theme }) =>
      hasError ? theme.colors.secondary : theme.colors.primary};
    box-shadow: 0 0 0 2px
      ${({ hasError, theme }) =>
        hasError ? `${theme.colors.secondary}33` : `${theme.colors.primary}33`};
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid
    ${({ hasError, theme }) => (hasError ? theme.colors.secondary : "#ddd")};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  font-family: inherit;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ hasError, theme }) =>
      hasError ? theme.colors.secondary : theme.colors.primary};
    box-shadow: 0 0 0 2px
      ${({ hasError, theme }) =>
        hasError ? `${theme.colors.secondary}33` : `${theme.colors.primary}33`};
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.8rem;
  margin-top: 4px;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 12px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}dd;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    body: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName || formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }

    if (!formData.subject || formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.body || formData.body.length < 3) {
      newErrors.body = "Message must be at least 3 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data:", formData);

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        body: "",
      });

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <>
      {submitted && (
        <SuccessMessage>
          Your message has been sent successfully!
        </SuccessMessage>
      )}

      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            hasError={!!errors.fullName}
          />
          {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            hasError={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="subject">Subject *</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            hasError={!!errors.subject}
          />
          {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="body">Message *</Label>
          <TextArea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            hasError={!!errors.body}
          />
          {errors.body && <ErrorMessage>{errors.body}</ErrorMessage>}
        </FormGroup>

        <SubmitButton type="submit">Send Message</SubmitButton>
      </FormContainer>
    </>
  );
};

export default ContactForm;
