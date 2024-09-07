import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import LoginPage from './LoginPage';

test('renders LoginPage component', () => {
  render(<LoginPage />);
  
  // Check if the main elements are present
  expect(screen.getByAltText('Company Logo')).toBeInTheDocument();
  expect(screen.getByText('Login to Your Account')).toBeInTheDocument();
  expect(screen.getByLabelText('Username')).toBeInTheDocument();
  expect(screen.getByLabelText('Password')).toBeInTheDocument();
  expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
});