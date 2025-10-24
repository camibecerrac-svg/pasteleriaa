import React from "react";
import { useParams, Link } from "react-router-dom";

const contenido = {
  tiramisu: {
    titulo: "TIRAMISÚ FÁCIL",
    imagen: "https://i.pinimg.com/736x/e8/be/85/e8be859f895721fe4e187319c9139063.jpg",
    ingredientes: [
      "500 g de queso mascarpone a temperatura ambiente",
      "200 g de soletas",
      "1 taza de café expreso",
      "Licor de café al gusto",
      "4 cucharadas de azúcar",
      "Cacao en polvo sin azúcar"
    ],
    preparacion: [
      "En un bol mezclar bien el queso mascarpone con el azúcar.",
      "En otro bol mezclar el café expreso con el licor de café.",
      "Preparar un refractario.",
      "En el fondo del refractario colocar una capa de galletas y empaparlas con licor de café.",
      "Repartir la mitad de la crema sobre las galletas y espolvorear cacao.",
      "Colocar otra capa de soletas y bañar con café y licor.",
      "Repartir la crema de mascarpone restante y espolvorear cacao encima.",
      "Refrigerar dos horas."
    ]
  },
  bizcochuelo: {
    titulo: "BIZCOCHUELO CASERO",
    imagen: "https://i.pinimg.com/736x/72/79/9f/72799fa9deacf57161579d21c97a6953.jpg",
    ingredientes: [
      "200 gramos de harina",
      "200 gramos de azúcar",
      "6 huevos",
      "1 cucharada de esencia de vainilla",
      "1 cucharada de polvo de hornear"
    ],
    preparacion: [
      "Bates los huevos, el azúcar y la esencia de vainilla con batidora hasta lograr el punto letra.",
      "Agrega en dos partes la harina tamizada y el polvo de hornear.",
      "Mezcla de manera envolvente para mantener el aire alto.",
      "Enharina y manteca el molde a utilizar.",
      "Vierte la preparación en el molde. Precalienta a 175°C y hornea 50 minutos."
    ]
  },
  pie: {
    titulo: "PIE DE LIMÓN",
    imagen: "https://i.pinimg.com/736x/16/f2/03/16f20316f9815a46fc1b1ad940f7315b.jpg",
    ingredientes: [
      "3 tazas de harina",
      "3 yemas de huevo",
      "1/2 cucharadita de royal",
      "2 cucharadas de margarina",
      "2 cucharadas de azúcar",
      "1 lata de leche condensada",
      "Jugo de 3 limones",
      "3 claras de huevo",
      "3 cucharadas de azúcar"
    ],
    preparacion: [
      "Para la masa: verter la harina... mezclar y hornear 15-20 min a 180°C.",
      "Para el relleno: mezclar la leche condensada con el jugo de limón.",
      "Batir claras a nieve con azúcar, cubrir y dorar en horno."
    ]
  }
};

export default function BlogDetalle() {
  const { id } = useParams();
  const post = contenido[id];

  if (!post) return <p>Receta no encontrada.</p>;

  return (
    <main className="blog-detalle">
      <img src={post.imagen} alt={post.titulo} className="detalle-img" />
      <h2>{post.titulo}</h2>

      <h3>Ingredientes</h3>
      <ul>
        {post.ingredientes.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>

      <h3>Preparación</h3>
      <ol>
        {post.preparacion.map((paso, i) => <li key={i}>{paso}</li>)}
      </ol>

      <Link to="/blog" className="btn-add">Volver al blog</Link>
    </main>
  );
}
