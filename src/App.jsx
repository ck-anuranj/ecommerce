import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;