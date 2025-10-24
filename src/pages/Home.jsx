// src/pages/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Home() {
  const [recetaActiva, setRecetaActiva] = useState(null);

  const recetas = [
    {
      id: 1,
      nombre: "Torta Cuadrada de Frutas",
      imagen:
        "https://i.pinimg.com/originals/7d/a9/ef/7da9ef2aa7c0bc937ef3a83974120791.jpg",
      ingredientes: [
        "150 g de manteca",
        "4 huevos",
        "½ limón (ralladura)",
        "¾ taza de leche",
        "2 duraznos, 2 manzanas, 2 peras",
        "2½ tazas de harina",
        "2 cucharaditas de polvo de hornear",
      ],
      preparacion: [
        "Precalienta el horno.",
        "Mezcla manteca, huevos, leche, ralladura, harina y polvo de hornear.",
        "Agrega las frutas cortadas en trozos.",
        "Vierte la mezcla en un molde cuadrado enmantecado.",
        "Hornea 40–60 min, hasta que el palillo salga limpio.",
        "Deja enfriar y decora con frutas frescas.",
      ],
    },
    {
      id: 2,
      nombre: "Tiramisú Clásico",
      imagen:
        "https://i.pinimg.com/736x/16/f2/03/16f20316f9815a46fc1b1ad940f7315b.jpg",
      ingredientes: [
        "500 g queso mascarpone",
        "6 huevos",
        "150 g azúcar glass",
        "300 g bizcochos soletilla",
        "150 ml café fuerte",
        "Licor Amaretto (opcional)",
        "Cacao en polvo sin azúcar",
      ],
      preparacion: [
        "Prepara el café y deja enfriar. Si usas licor, mézclalo.",
        "Bate las yemas con el azúcar hasta que estén cremosas.",
        "Agrega mascarpone hasta obtener una crema homogénea.",
        "Monta claras a punto de nieve y mézclalas suavemente.",
        "Empapa los bizcochos y forma capas alternadas con crema.",
        "Espolvorea cacao y refrigera 2 horas antes de servir.",
      ],
    },
    {
      id: 3,
      nombre: "Mousse de Chocolate",
      imagen:
        "https://i.pinimg.com/736x/a7/35/4e/a7354ed21877150918094af0d86879a9.jpg",
      ingredientes: [
        "200 g chocolate negro (70% cacao)",
        "3 huevos",
        "50 g azúcar",
        "200 ml crema de leche",
        "Pizca de sal y vainilla (opcional)",
      ],
      preparacion: [
        "Derrite el chocolate y deja entibiar.",
        "Bate yemas con azúcar hasta que estén cremosas.",
        "Agrega el chocolate fundido y la crema de leche.",
        "Monta claras con sal y añádelas con movimientos suaves.",
        "Vierte en copas y refrigera 3 horas antes de servir.",
      ],
    },
  ];

  // ✅ Añadimos el nuevo video + los tres que ya tenías
  const videos = [
    "https://www.youtube.com/embed/VBnkOoiIFf8",
    "https://www.youtube.com/embed/CEl7NWrh2Lg",
    "https://www.youtube.com/embed/bpBwyy2P_5g",
    "https://www.youtube.com/embed/zkldAf-1X18", // 👈 Nuevo video agregado
  ];

  return (
    <main className="home-container">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Bienvenido a Locura Kaiser 🍰</h1>
          <p>Repostería artesanal con sabor chileno y tradición familiar.</p>
          <Link to="/catalog" className="btn-principal">
            Ver Catálogo
          </Link>
        </div>
      </section>

      {/* Recetas */}
      <section className="blog-section">
        <h2>Aquí tenemos algunas recetas de nuestros pasteles 🍓</h2>
        <div className="blog-grid">
          {recetas.map((r) => (
            <article key={r.id} className="recipe-card">
              <img src={r.imagen} alt={r.nombre} />
              <h3>{r.nombre}</h3>
              <button
                className="btn-read"
                onClick={() => setRecetaActiva(r)}
              >
                Ver receta completa
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Modal */}
      {recetaActiva && (
        <div className="modal-backdrop" onClick={() => setRecetaActiva(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setRecetaActiva(null)}>
              ✕
            </button>
            <img
              src={recetaActiva.imagen}
              alt={recetaActiva.nombre}
              className="modal-img"
            />
            <h2>{recetaActiva.nombre}</h2>

            <h4>Ingredientes:</h4>
            <ul>
              {recetaActiva.ingredientes.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>

            <h4>Preparación:</h4>
            <ol>
              {recetaActiva.preparacion.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {/* Videos */}
      <section className="video-section">
        <h2>Videos de Repostería</h2>
        <div className="video-grid">
          {videos.map((src, index) => (
            <iframe
              key={index}
              width="320"
              height="180"
              src={src}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </section>
    </main>
  );
}
