import React from 'react';
import TarjetaReceta from './TarjetaReceta';

export default function ListaRecetas({ recetas, favoritos, toggleFavorito, seleccionarReceta }) {
  if (recetas.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>No se encontraron recetas.</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {recetas.map((receta) => (
        <TarjetaReceta
          key={receta.id}
          receta={receta}
          esFavorito={favoritos.includes(receta.id)}
          toggleFavorito={toggleFavorito}
          seleccionarReceta={seleccionarReceta}
        />
      ))}
    </div>
  );
}