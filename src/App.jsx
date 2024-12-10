
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Cart from './components/Pages/Cart/Cart';
import ProductDetail from './components/ProductDetail/ProductDetail'; 
import PurchasePage from './components/PurchasePage/PurchasePage';
import FormDePago from './components/FormDePago/FormDePago';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ProductsCategory from './components/ProductsCategory/ProductsCategory';
import useCartStore from './stores/useCartStore';

function App() {
  const { items: cart, addToCart, removeFromCart } = useCartStore(); 

  return (
    <Router>
      <Navbar /> 
      <Routes>
        
        <Route path="/" element={<Home />} />        
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/purchase/:id" element={<ProductDetail />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/form-de-pago" element={<FormDePago />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:categoryId" element={<ProductsCategory />} /> 
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
