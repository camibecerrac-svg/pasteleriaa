import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{
      textAlign: "center",
      padding: "100px 20px",
      color: "#ff6b6b"
    }}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" style={{
        color: "#fff",
        background: "#ff6b6b",
        padding: "10px 20px",
        borderRadius: "8px",
        textDecoration: "none"
      }}>
        Volver al inicio
      </Link>
    </div>
  );
}
