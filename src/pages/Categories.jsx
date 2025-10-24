// ✅ src/pages/Categories.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { listProducts } from "../data/data";
import { useCart } from "../context/CartContext";

export default function Categories() {
  const { addToCart } = useCart();
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState("all");

  useEffect(() => setProductos(listProducts()), []);

  const categorias = ["all", ...new Set(productos.map((p) => p.categoria))];
  const visibles =
    categoria === "all"
      ? productos
      : productos.filter((p) => p.categoria === categoria);

  return (
    <main className="container mt-4">
      <h2 className="text-center mb-3">Categorías</h2>
      <div className="d-flex flex-wrap justify-content-center mb-3">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm me-2 mb-2 ${
              cat === categoria ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="row">
        {visibles.map((p) => (
          <div key={p.id} className="col-md-4 col-sm-6 mb-4">
            <ProductCard product={p} onAdd={(prod) => addToCart(prod)} />
          </div>
        ))}
      </div>
    </main>
  );
}
