import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/style.css";

export default function Login() {
  const [form, setForm] = useState({ correo: "", contraseña: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!form.correo.trim()) newErrors.correo = "Debe ingresar su correo.";
    else if (!/\S+@\S+\.\S+/.test(form.correo))
      newErrors.correo = "Correo inválido.";
    if (!form.contraseña.trim())
      newErrors.contraseña = "Debe ingresar su contraseña.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = validate();
    setErrors(val);
    if (Object.keys(val).length === 0) {
      setSuccess("✅ Inicio de sesión exitoso");
      setTimeout(() => navigate("/"), 2000);
    }
  };

  return (
    <main className="form-page">
      <div className="form-card">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="correo"
              placeholder="Ej: usuario@correo.com"
              value={form.correo}
              onChange={(e) => setForm({ ...form, correo: e.target.value })}
              className={errors.correo ? "input-error" : ""}
            />
          </div>
          {errors.correo && <p className="error-text">{errors.correo}</p>}

          <div className="form-row">
            <label>Contraseña</label>
            <input
              type="password"
              name="contraseña"
              placeholder="********"
              value={form.contraseña}
              onChange={(e) => setForm({ ...form, contraseña: e.target.value })}
              className={errors.contraseña ? "input-error" : ""}
            />
          </div>
          {errors.contraseña && (
            <p className="error-text">{errors.contraseña}</p>
          )}

          <button type="submit">Ingresar</button>
        </form>

        {success && <p className="success-text">{success}</p>}
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </main>
  );
}
