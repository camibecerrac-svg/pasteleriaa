import React from 'react'
import { Link } from 'react-router-dom'

export default function Success(){
  return (
    <div className="text-center">
      <h2>Compra exitosa 🎉</h2>
      <p>Gracias por tu compra. Tu pedido ha sido procesado correctamente.</p>
      <Link to="/catalogo" className="btn btn-outline-primary">Volver al catálogo</Link>
    </div>
  )
}
