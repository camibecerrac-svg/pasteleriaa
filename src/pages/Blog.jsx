import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Blog() {
  const recetas = [
    {
      id: "tiramisu",
      titulo: "Tiramisú Fácil",
      descripcion:
        "Un postre clásico italiano con café, mascarpone y cacao. ¡Irresistible!",
      imagen: "https://i.pinimg.com/736x/e8/be/85/e8be859f895721fe4e187319c9139063.jpg",
    },
    {
      id: "bizcochuelo",
      titulo: "Bizcochuelo Casero",
      descripcion:
        "Suave, esponjoso y con aroma a vainilla. Perfecto para toda ocasión.",
      imagen: "https://i.pinimg.com/736x/72/79/9f/72799fa9deacf57161579d21c97a6953.jpg",
    },
    {
      id: "pie",
      titulo: "Pie de Limón",
      descripcion:
        "Corteza crujiente, relleno ácido y merengue suave. ¡Una delicia chilena!",
      imagen: "https://i.pinimg.com/736x/16/f2/03/16f20316f9815a46fc1b1ad940f7315b.jpg",
    },
  ];

  return (
    <main className="blog-section">
      <h2>Recetas del Blog 🍰</h2>
      <div className="blog-grid">
        {recetas.map((receta) => (
          <article key={receta.id} className="recipe-card">
            <img src={receta.imagen} alt={receta.titulo} />
            <div className="recipe-info">
              <h3>{receta.titulo}</h3>
              <p>{receta.descripcion}</p>
              {/* 👇 Enlace a la receta completa */}
              <Link to={`/blog/${receta.id}`} className="btn-read">
                Ver receta completa
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
