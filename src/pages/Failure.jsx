import React from 'react'
import { Link } from 'react-router-dom'

export default function Failure(){
  return (
    <div className="text-center">
      <h2>Pago no realizado ❌</h2>
      <p>Hubo un problema procesando tu pago. Inténtalo de nuevo o contacta al soporte.</p>
      <Link to="/carrito" className="btn btn-outline-secondary">Volver al carrito</Link>
    </div>
  )
}
