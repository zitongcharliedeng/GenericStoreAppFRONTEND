import React from 'react';
import { render, screen, act} from '@testing-library/react';
import App from '../App.js';
import userEvent from '@testing-library/user-event'

// test('renders logo', () => {
//   render(<App />);
//   const allLogos = screen.getAllByText('TheEverythingStore')
//   expect(allLogos.length).toEqual(2)
// });

// test('"shoppingCart" links to preCheckout', () => {
//   render(<App />);
//   const shoppingCart = screen.getByRole('button', {name: 'shoppingCart'})
//   act(() => {shoppingCart.click()})
//   expect(screen.getAllByText('In cart currently:').length).toEqual(1)
// });

test('"Create an account" links to signUp', () => {
  render(<App />);
  const createAnAccount = screen.getByRole('button', {name: 'createAnAccount'})
  act(() => {createAnAccount.click()})
  expect(screen.getAllByRole('heading', {name: 'Sign up'}).length).toEqual(1)
});

// test('"Your purchase history" links to dashboard', () => {
//   render(<App />);
//   const yourPurchaseHistory = screen.getByRole('button', {name: 'yourPurchaseHistory'})
//   act(() => {yourPurchaseHistory.click()})
//   expect(screen.getAllByRole('heading', {name: 'Recent Orders'}).length).toEqual(1)
// });

// test('"Items for sale" links to itemsForSale (from preCheckout, only valid if "links to preCheckout" passes)', () => {
//   render(<App />);
//   const shoppingCart = screen.getByRole('button', {name: 'shoppingCart'})
//   act(() => {shoppingCart.click()})
//   const itemsForSale = screen.getByRole('button', {name: 'itemsForSale'})
//   act(() => {itemsForSale.click()})
//   expect(screen.getAllByRole('definition', {name: 'Banana'}).length).toEqual(1)
// });

// test('"search" works', () => {
//   render(<App />);
//   const search = screen.getByRole('textbox', {name: 'search'})
//   act(() => {search.click()})
//   user.type(search, "Banana")
//   expect(screen.getAllByRole('definition', {name: 'Banana'}).length).toEqual(1)
// });