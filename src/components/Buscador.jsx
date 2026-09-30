import React from 'react';

export default function Buscador({ busqueda, setBusqueda, categoria, setCategoria }) {
  return (
    <div className="buscador-contenedor">
      <input
        type="text"
        placeholder="Buscar receta o ingrediente..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="campo-busqueda"
      />

      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        className="select-categoria"
      >
        <option value="Todas">Todas las Categorías</option>
        <option value="Desayuno">Desayuno</option>
        <option value="Plato Principal">Plato Principal</option>
        <option value="Postre">Postre</option>
        <option value="Ensalada">Ensalada</option>
      </select>
    </div>
  );
} 
