// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { CartProvider } from './context/CartContext'; 


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CartProvider>  
        <App />
      </CartProvider>
    </React.StrictMode>
  </BrowserRouter>
);
