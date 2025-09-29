import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import './index.css';
import AppRouter from './routes/AppRouter';
import { theme } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </StrictMode>,
);
