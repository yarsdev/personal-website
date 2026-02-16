import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initI18 } from './lib/i18n/index.ts';

initI18();

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <App />
   </StrictMode>
);
