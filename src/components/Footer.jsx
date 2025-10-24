import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Pastelería Locura Kaiser — Todos los derechos reservados</p>
      <p>Síguenos: <a href="#">Instagram</a> | <a href="#">Facebook</a></p>
    </footer>
  );
}
