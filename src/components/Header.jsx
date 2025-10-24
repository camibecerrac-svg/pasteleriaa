// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catálogo</Link></li>
          <li><Link to="/offers">Ofertas</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/cart">Carrito (0)</Link></li>
          <li><Link to="/login">Iniciar sesión</Link></li>
          <li><Link to="/register">Crear cuenta</Link></li>
        </ul>
      </nav>
    </header>
  );
}

