import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingProvider } from './contexts/LoadingContext';
import './i18n';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LoadingProvider>
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <App />
          </AnimatePresence>
        </BrowserRouter>
      </LoadingProvider>
    </ThemeProvider>
  </StrictMode>
);