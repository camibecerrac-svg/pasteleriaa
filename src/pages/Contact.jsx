// ✅ src/pages/Contact.jsx
import React, { useState } from "react";
import "../styles/style.css";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.correo || !form.mensaje) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setSuccess(true);
    setForm({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <main className="form-page">
      <div className="form-card">
        <h2>📩 Contáctanos</h2>
        <p>¿Tienes alguna duda o sugerencia? Escríbenos y te responderemos pronto.</p>
        <form onSubmit={handleSubmit}>
          <label>Nombre completo</label>
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className={error && !form.nombre ? "input-error" : ""}
            placeholder="Ej: Camila Becerra"
          />

          <label>Correo electrónico</label>
          <input
            name="correo"
            type="email"
            value={form.correo}
            onChange={handleChange}
            className={error && !form.correo ? "input-error" : ""}
            placeholder="Ej: usuario@correo.com"
          />

          <label>Mensaje</label>
          <textarea
            name="mensaje"
            rows="4"
            value={form.mensaje}
            onChange={handleChange}
            className={error && !form.mensaje ? "input-error" : ""}
            placeholder="Escribe tu mensaje aquí..."
          />

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">✅ Mensaje enviado con éxito.</p>}

          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </main>
  );
}
