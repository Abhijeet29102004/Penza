import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Products from './pages/products/Products';
import SubProducts from './pages/products/SubProducts';
import ProductDetails from './pages/products/ProductDetails';
import Events from './pages/Events';
import Career from './pages/Career';
import FloatingIcon from './components/FloatingIcon';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:subproduct" element={<SubProducts />} />
        <Route path="/products/:subproduct/:id" element={<ProductDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <FloatingIcon />
    </div>
  );
}

export default App;
