import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from './index'; 

test('Nav toggles menu when clicked', async () => {
  const { getByTestId } = render(<Nav />); 
  expect(getByTestId('navbar-menu')).not.toHaveClass('active');

  fireEvent.click(getByTestId('navbar-toggle'));

  await waitFor(() => {
    expect(getByTestId('navbar-menu')).toHaveClass('active');
  });

  fireEvent.click(getByTestId('navbar-toggle'));

  await waitFor(() => {
    expect(getByTestId('navbar-menu')).not.toHaveClass('active');
  });
});
