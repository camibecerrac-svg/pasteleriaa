import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Offers from "./pages/offers";
import Blog from "./pages/Blog";
import BlogDetalle from "./pages/BlogDetalle";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";       
import Register from "./pages/Register"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetalle />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />        
        <Route path="/register" element={<Register />} />  
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
      <Footer />
    </>
  );
}


