import React from 'react';
import { render, screen, act, within } from '@testing-library/react';
import App from '../App.js';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

test('renders logo', () => {
  render(<App />);
  const allLogos = screen.getAllByText('TheEverythingStore')
  expect(allLogos.length).toEqual(2)
});

test('cart links to preCheckout', () => {
  // eslint-disable-next-line testing-library/no-node-access
  render(<App />);
  const cart = screen.getByRole('button', {name: "shoppingCart"})
  act(() => {cart.click()})
  expect(screen.getByText('In cart currently:')).toBeInTheDocument();
});

