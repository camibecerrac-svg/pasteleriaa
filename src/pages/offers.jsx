/// src/pages/Offers.jsx
import React, { useEffect, useState } from "react";
import { listProducts } from "../data/data";
import { useCart } from "../context/CartContext";
import "../styles/style.css";

export default function Offers() {
  const { addToCart } = useCart();
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    const all = listProducts();
    setOfertas(all.filter((p) => p.oferta || p.precio <= 10000)); // regla ejemplo
  }, []);

  return (
    <main className="offers-page">
      <h2>Ofertas</h2>
      <div className="offers-grid">
        {ofertas.map((p) => (
          <article className="offer-card" key={p.id}>
            <div className="card-img-wrap">
              <img src={p.imagen} alt={p.nombre} />
            </div>
            <div className="card-body">
              <h3>{p.nombre}</h3>
              <p className="card-desc">{p.descripcion}</p>
              <p className="card-price"><strong>${p.precio.toLocaleString("es-CL")}</strong></p>
              <button className="btn-add" onClick={()=>addToCart(p)}>Agregar</button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
