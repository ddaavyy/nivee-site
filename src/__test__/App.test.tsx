import { render, screen } from '@testing-library/react';
import App from '../App';

test('renderiza título', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /vite/i });
  expect(titleElement).toBeInTheDocument();
});
