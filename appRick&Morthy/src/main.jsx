import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppCharaters from './AppCharaters.jsx';
import Header from './components/Header.jsx';
import Partners from './components/Partners.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <AppCharaters />
    <Partners />
  </StrictMode>
);
