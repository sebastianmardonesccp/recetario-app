import React from 'react';

export default function TarjetaReceta({ receta, esFavorito, toggleFavorito, seleccionarReceta }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '250px',
      margin: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justify: 'space-between'
    }}>
      <img 
        src={receta.imagen} 
        alt={receta.nombre} 
        style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
      />
      <div style={{ padding: '15px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{receta.nombre}</h3>
        <p style={{ color: '#666', fontSize: '14px', margin: '0 0 10px 0' }}>
          ⏱️ {receta.tiempo} | 🏷️ {receta.categoria}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <button 
            onClick={() => seleccionarReceta(receta)}
            style={{ padding: '6px 10px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #007bff', background: '#fff', color: '#007bff' }}
          >
            Ver Detalle
          </button>
          <button 
            onClick={() => toggleFavorito(receta.id)}
            style={{ padding: '6px 10px', cursor: 'pointer', borderRadius: '4px', border: 'none', background: esFavorito ? '#ff4d4d' : '#ccc', color: '#fff' }}
          >
            {esFavorito ? '❤️ Favorito' : '🤍 Favorito'}
          </button>
        </div>
      </div>
    </div>
  );
}