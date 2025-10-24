// src/data/data.js
const STORAGE_KEY = "productos_v2";

export function listProducts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || baseProducts();
}

export function createProduct(p) {
  const productos = listProducts();
  productos.push({ ...p, id: Date.now() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
  return productos;
}

export function updateProduct(id, data) {
  const productos = listProducts().map((prod) =>
    prod.id === id ? { ...prod, ...data } : prod
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
  return productos;
}

export function deleteProduct(id) {
  const productos = listProducts().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
  return productos;
}

// Helper: datos iniciales (19 productos)
function baseProducts() {
  const base = [
    { id: 1, nombre: "Torta Cuadrada de Chocolate", descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas.", precio: 45000, categoria: "Tortas", imagen: "https://tortasdelacasa.com/wp-content/uploads/2024/02/DSC4340-scaled.jpg", oferta:false },
    { id: 2, nombre: "Torta Cuadrada de Frutas", descripcion: "Mezcla de frutas frescas y crema chantilly.", precio: 50000, categoria: "Tortas", imagen: "https://i.pinimg.com/originals/26/0a/31/260a31cf5eec34b32902475ed2ad6dca.jpg", oferta:false },
    { id: 3, nombre: "Torta Circular de Vainilla", descripcion: "Bizcocho de vainilla clásico.", precio: 40000, categoria:"Tortas", imagen:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIVS2Pg1npCWqpk02xFmmBN3IwNjYnsHw4TbTWzYfVPG5fP1uTMYMHaMvEyfxlpIaMjEpQvDBgSThKoccRrFxm3S3D4i_mLuBb5FM20bK5H8Eg9GZZW5kyoj7PTwrgNTVGANesjOCqN_cU/s1600-rw/torta-vainilla-cumplea%25C3%25B1os.jpg", oferta:false },
    { id: 4, nombre: "Torta Circular de Manjar", descripcion: "Torta tradicional chilena con manjar.", precio: 42000, categoria:"Tortas", imagen:"https://www.elingenio.cl/productos/bizcocho-manjar-lucuma.jpg", oferta:false },
    { id: 5, nombre: "Mousse de Chocolate", descripcion: "Postre individual cremoso hecho con chocolate de alta calidad.", precio: 5000, categoria:"Postres", imagen:"https://www.gourmet.cl/wp-content/uploads/2016/09/Mousse-de-chocolate-ajustada-web-570x458.jpg", oferta:true },
    { id: 6, nombre: "Mousse de Maracuyá", descripcion: "Delicioso mousse refrescante.", precio: 5500, categoria:"Postres", imagen:"https://recetinas.com/wp-content/uploads/2023/07/mousse-de-maracuya.jpg", oferta:false },
    { id: 7, nombre: "Tiramisú Clásico", descripcion: "Postre italiano con mascarpone y café.", precio: 5500, categoria:"Postres", imagen:"https://i.pinimg.com/736x/48/76/f6/4876f69623902017e918feb2836a06b0.jpg", oferta:false },
    { id: 8, nombre: "Brownie Sin Azúcar", descripcion: "Brownie sin azúcar, denso y sabroso.", precio: 4000, categoria:"Sin Azúcar", imagen:"https://dulcesdiabeticos.com/wp-content/uploads/2021/02/Brownie-fit-w-opt.jpg", oferta:true },
    { id: 9, nombre: "Queque de Naranja Sin Azúcar", descripcion: "Queque ligero endulzado naturalmente.", precio: 48000, categoria:"Sin Azúcar", imagen:"https://dulcesdiabeticos.com/wp-content/uploads/2016/09/bizcocho-de-naranja-sin-azucar-entero.jpg", oferta:false },
    { id:10, nombre:"Cheesecake de Frutilla", descripcion:"Suave cheesecake de frutilla.", precio:47000, categoria:"Postres", imagen:"https://tofuu.getjusto.com/orioneat-local/resized2/fwcmjSWSoucFNEmXN-2400-x.webp", oferta:false},
    { id:11, nombre:"Empanada de Manzana", descripcion:"Pastelería tradicional rellena de manzana.", precio:3000, categoria:"Pastelería", imagen:"https://www.interpatagonia.com/recetas/empanadas_manzana/empanadas-manzana.jpg", oferta:false},
    { id:12, nombre:"Tarta de Santiago", descripcion:"Tarta tradicional de almendras.", precio:6000, categoria:"Pastelería", imagen:"https://www.lolitalapastelera.com/wp-content/uploads/Como-hacer-tarta-de-santiago-casera-Receta-de-tarta-de-santiago-original-2.jpg", oferta:false},
    { id:13, nombre:"Pastel de Zanahoria", descripcion:"Pastel de zanahoria con glaseado cremosa.", precio:6500, categoria:"Pastelería", imagen:"https://irp-cdn.multiscreensite.com/2af7b8f3/dms3rep/multi/zanahoria.jpg", oferta:false},
    { id:14, nombre:"Pan Sin Gluten", descripcion:"Pan sin gluten suave y esponjoso.", precio:3500, categoria:"Sin Gluten", imagen:"https://juanllorca.com/wp-content/uploads/2020/05/pan-sin-gluten-receta.jpg", oferta:false},
    { id:15, nombre:"Galletas de Avena Sin Gluten", descripcion:"Galletas crujientes de avena.", precio:4500, categoria:"Sin Gluten", imagen:"https://www.disfrutandosingluten.es/wp-content/uploads/2017/04/galletas-de-avena-y-platano-sin-gluten.jpg", oferta:false},
    { id:16, nombre:"Torta Vegana de Chocolate y Avellana", descripcion:"Torta vegana húmeda y deliciosa.", precio:50000, categoria:"Veganos", imagen:"https://www.ferrerorocher.com/ar/sites/ferrerorocher20_ar/files/2021-07/chocolate-cake-carousel-1.png?t=1750438253", oferta:false},
    { id:17, nombre:"Galletas Veganas de Avena", descripcion:"Galletas veganas crujientes.", precio:4500, categoria:"Veganos", imagen:"https://mondaydreams.com/wp-content/uploads/2024/04/Blueberry-Oatmeal-Cookies-0001-web.webp", oferta:false},
    { id:18, nombre:"Torta Especial de Cumpleaños", descripcion:"Torta diseñada para celebraciones.", precio:55000, categoria:"Especiales", imagen:"https://i.pinimg.com/736x/f0/b3/c3/f0b3c3fe00c08617076f7636b7f48f52.jpg", oferta:false},
    { id:19, nombre:"Torta Especial de Matrimonio", descripcion:"Torta elegante para matrimonios.", precio:60000, categoria:"Especiales", imagen:"https://i.pinimg.com/736x/c3/f7/db/c3f7db75ac8718e329bdad4e8726d94e.jpg", oferta:false}
  ];
  // guarda y devuelve
  localStorage.setItem(STORAGE_KEY, JSON.stringify(base));
  return base;
}
