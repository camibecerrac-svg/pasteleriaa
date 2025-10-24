import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Register() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    confirmar: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!form.correo.trim()) newErrors.correo = "El correo es obligatorio.";
    else if (!/\S+@\S+\.\S+/.test(form.correo))
      newErrors.correo = "Correo inválido.";
    if (form.contraseña.length < 6)
      newErrors.contraseña = "La contraseña debe tener al menos 6 caracteres.";
    if (form.confirmar !== form.contraseña)
      newErrors.confirmar = "Las contraseñas no coinciden.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = validate();
    setErrors(val);
    if (Object.keys(val).length === 0) {
      setSuccess("✅ Cuenta creada exitosamente");
      setForm({ nombre: "", correo: "", contraseña: "", confirmar: "" });
    }
  };

  return (
    <main className="form-page">
      <div className="form-card">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Nombre completo</label>
            <input
              type="text"
              name="nombre"
              placeholder="Ej: María González"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className={errors.nombre ? "input-error" : ""}
            />
          </div>
          {errors.nombre && <p className="error-text">{errors.nombre}</p>}

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

          <div className="form-row">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmar"
              placeholder="********"
              value={form.confirmar}
              onChange={(e) => setForm({ ...form, confirmar: e.target.value })}
              className={errors.confirmar ? "input-error" : ""}
            />
          </div>
          {errors.confirmar && <p className="error-text">{errors.confirmar}</p>}

          <button type="submit">Registrarme</button>
        </form>

        {success && <p className="success-text">{success}</p>}
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </main>
  );
}
