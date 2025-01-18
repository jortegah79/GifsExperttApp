import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GifExpertApp } from './GifsExpertApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>,
)
