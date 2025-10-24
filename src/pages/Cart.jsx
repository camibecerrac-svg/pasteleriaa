import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/style.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart, total } = useCart();

  return (
    <main className="cart-page">
      <h2>🧾 Tu Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío 🍰</p>
      ) : (
        <>
          <div className="cart-total">
            <h3>Total: ${total.toLocaleString()}</h3>
          </div>

          <div className="cart-grid">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imagen} alt={item.nombre} />
                <div className="cart-info">
                  <h4>{item.nombre}</h4>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Precio: ${item.precio.toLocaleString()}</p>
                  <p>
                    <strong>
                      Subtotal: ${(item.precio * item.cantidad).toLocaleString()}
                    </strong>
                  </p>
                  <button
                    className="btn-delete"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌ Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-buttons">
            <button className="btn-vaciar" onClick={clearCart}>
              🗑️ Vaciar carrito
            </button>
            <button className="btn-comprar" onClick={() => alert("Compra realizada 🎉 Gracias por tu pedido")}>
              💳 Comprar ahora
            </button>
          </div>
        </>
      )}
    </main>
  );
}
