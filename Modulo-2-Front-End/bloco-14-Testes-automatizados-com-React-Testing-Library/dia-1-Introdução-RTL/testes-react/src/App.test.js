import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Note que ele está fazendo uma verificação se algum elemento dentro do componente App possui o texto “learn react” (/string/i é utilizado para ignorar case sensitive, ou seja, não diferenciar letras maiúsculas e minúsculas).