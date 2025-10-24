// ✅ src/pages/Admin.jsx
import React, { useState, useEffect } from "react";
import { listProducts, createProduct, updateProduct, deleteProduct } from "../data/data";
import "../styles/style.css";

export default function Admin() {
  const [productos, setProductos] = useState([]);
  const [nuevo, setNuevo] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: "",
    imagen: "",
    oferta: false,
  });
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    setProductos(listProducts());
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNuevo({ ...nuevo, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevo.nombre || !nuevo.precio) return alert("Completa los campos obligatorios");

    if (editando) {
      updateProduct(editando, nuevo);
      setEditando(null);
    } else {
      createProduct(nuevo);
    }

    setNuevo({ nombre: "", descripcion: "", precio: "", categoria: "", imagen: "", oferta: false });
    setProductos(listProducts());
  };

  const handleEdit = (p) => {
    setEditando(p.id);
    setNuevo({ ...p });
  };

  const handleDelete = (id) => {
    if (confirm("¿Eliminar este producto?")) {
      deleteProduct(id);
      setProductos(listProducts());
    }
  };

  return (
    <main className="form-page">
      <h2>🧁 Panel del Administrador</h2>
      <p>Desde aquí puedes gestionar todos los productos del catálogo.</p>

      <form onSubmit={handleSubmit} className="form-card">
        <h3>{editando ? "✏️ Editar Producto" : "➕ Nuevo Producto"}</h3>

        <label>Nombre del producto *</label>
        <input name="nombre" value={nuevo.nombre} onChange={handleChange} required />

        <label>Descripción</label>
        <textarea name="descripcion" value={nuevo.descripcion} onChange={handleChange} />

        <label>Precio *</label>
        <input name="precio" type="number" value={nuevo.precio} onChange={handleChange} required />

        <label>Categoría</label>
        <input name="categoria" value={nuevo.categoria} onChange={handleChange} />

        <label>Imagen (URL)</label>
        <input name="imagen" value={nuevo.imagen} onChange={handleChange} />

        <label>
          <input
            type="checkbox"
            name="oferta"
            checked={nuevo.oferta}
            onChange={handleChange}
          />{" "}
          ¿Está en oferta?
        </label>

        <button type="submit">
          {editando ? "Guardar Cambios" : "Agregar Producto"}
        </button>
      </form>

      <section className="catalogo-grid" style={{ marginTop: "50px" }}>
        {productos.map((p) => (
          <div key={p.id} className="producto">
            <img src={p.imagen} alt={p.nombre} />
            <div className="card-body">
              <h3>{p.nombre}</h3>
              <p>{p.descripcion}</p>
              <p className="card-price">${p.precio}</p>
              <p>{p.categoria}</p>
              {p.oferta && <span className="badge bg-warning">En oferta</span>}
              <div style={{ marginTop: "10px" }}>
                <button onClick={() => handleEdit(p)} className="btn-add">Editar</button>
                <button onClick={() => handleDelete(p.id)} className="btn-delete">Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
