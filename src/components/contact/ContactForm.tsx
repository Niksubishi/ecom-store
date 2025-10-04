import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { ContactFormData, FormErrors } from '../../types';
import { useToast } from '../../context/ToastContext';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 100%;
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  padding: 12px 16px;
  border: 1px solid ${({ hasError, theme }) =>
    hasError ? theme.colors.secondary : '#ddd'};
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  min-height: 150px;
  resize: vertical;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
    border-color: ${({ hasError, theme }) =>
      hasError ? theme.colors.secondary : theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ hasError, theme }) =>
      hasError ? `${theme.colors.secondary}22` : `${theme.colors.primary}22`};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const ErrorMessage = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #c3e6cb;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '✓';
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const RequiredIndicator = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 4px;
`;

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: '',
    body: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { addToast } = useToast();

  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.toLowerCase());
  }, []);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.body.trim()) {
      newErrors.body = 'Message is required';
    } else if (formData.body.trim().length < 3) {
      newErrors.body = 'Message must be at least 3 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validateEmail]);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      addToast({
        type: 'error',
        title: 'Validation Error',
        message: 'Please correct the errors in the form.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form submitted:', formData);

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        body: '',
      });

      setSubmitted(true);
      addToast({
        type: 'success',
        title: 'Message Sent!',
        message: 'Thank you for your message. We\'ll get back to you soon.',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } catch (error) {
      addToast({
        type: 'error',
        title: 'Error',
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {submitted && (
        <SuccessMessage>
          Your message has been sent successfully! We'll get back to you soon.
        </SuccessMessage>
      )}

      <FormContainer onSubmit={handleSubmit} noValidate>
        <Input
          type="text"
          name="fullName"
          label="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          errorMessage={errors.fullName}
          required
          fullWidth
          placeholder="Enter your full name"
          disabled={isSubmitting}
        />

        <Input
          type="email"
          name="email"
          label="Email Address"
          value={formData.email}
          onChange={handleChange}
          errorMessage={errors.email}
          required
          fullWidth
          placeholder="Enter your email address"
          disabled={isSubmitting}
        />

        <Input
          type="text"
          name="subject"
          label="Subject"
          value={formData.subject}
          onChange={handleChange}
          errorMessage={errors.subject}
          required
          fullWidth
          placeholder="Enter the subject of your message"
          disabled={isSubmitting}
        />

        <TextAreaContainer>
          <Label htmlFor="body">
            Message
            <RequiredIndicator>*</RequiredIndicator>
          </Label>
          <TextArea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            hasError={!!errors.body}
            placeholder="Enter your message here..."
            disabled={isSubmitting}
            required
            aria-describedby={errors.body ? 'body-error' : undefined}
          />
          {errors.body && (
            <ErrorMessage id="body-error" role="alert">
              {errors.body}
            </ErrorMessage>
          )}
        </TextAreaContainer>

        <Button
          type="submit"
          size="large"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          style={{ alignSelf: 'flex-start' }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </FormContainer>
    </>
  );
};