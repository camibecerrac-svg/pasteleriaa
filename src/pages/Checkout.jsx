// ✅ src/pages/Checkout.jsx
import React from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, getTotal, clearCart } = useCart();

  const handlePurchase = (e) => {
    e.preventDefault();
    alert("✅ ¡Compra realizada con éxito!");
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <main className="container text-center mt-5">
        <h2>No hay productos en el carrito</h2>
      </main>
    );
  }

  return (
    <main className="container mt-4">
      <h2 className="text-center mb-4">Resumen de tu compra 🧾</h2>
      <form onSubmit={handlePurchase} className="checkout-form mx-auto" style={{maxWidth: "500px"}}>
        <input className="form-control mb-2" placeholder="Nombre completo" required />
        <input className="form-control mb-2" placeholder="Dirección de entrega" required />
        <input className="form-control mb-2" placeholder="Correo electrónico" type="email" required />
        <hr />
        <ul className="list-group mb-3">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.nombre}</span>
              <span>${item.precio.toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <h4 className="text-end mb-3">Total: ${getTotal().toLocaleString()}</h4>
        <button type="submit" className="btn btn-success w-100">Finalizar compra</button>
      </form>
    </main>
  );
}
