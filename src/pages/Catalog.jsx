import React from "react";
import { useCart } from "../context/CartContext";
import { listProducts } from "../data/data";
import "../styles/style.css";

export default function Catalog() {
  const { addToCart } = useCart();
  const productos = listProducts();

  return (
    <main className="catalogo-grid">
      {productos.map((p) => (
        <div key={p.id} className="producto">
          <img src={p.imagen} alt={p.nombre} />
          <div className="card-body">
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <p className="card-price">${p.precio.toLocaleString()}</p>
            <button className="btn-add" onClick={() => addToCart(p)}>
              🛒 Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
