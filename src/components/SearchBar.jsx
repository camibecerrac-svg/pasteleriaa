import React from 'react'

export default function SearchBar({ value, onChange }){
  return (
    <div className="mb-3">
      <input id="buscar" className="form-control" placeholder="Buscar productos..." value={value} onChange={e => onChange(e.target.value)} />
    </div>
  )
}
