import React from 'react';

export default function TarjetaReceta({ receta, esFavorito, toggleFavorito, seleccionarReceta }) {
  return (
    <div style={{
      border: '1px solid var(--border-color)',
      borderRadius: '12px',
      overflow: 'hidden',
      width: '270px',
      margin: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
      backgroundColor: 'var(--bg-card)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    }}>
      <div style={{ position: 'relative' }}>
        <img 
          src={receta.imagen} 
          alt={receta.nombre} 
          style={{ width: '100%', height: '170px', objectFit: 'cover' }} 
        />
        <span style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '4px 10px',
          borderRadius: '15px',
          fontSize: '12px',
          fontWeight: '600',
          color: 'var(--text-dark)'
        }}>
          {receta.categoria}
        </span>
      </div>

      <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-dark)' }}>
            {receta.nombre}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '5px' }}>
            ⏱️ {receta.tiempo}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
          <button 
            onClick={() => seleccionarReceta(receta)}
            style={{ 
              flex: 1,
              padding: '8px 12px', 
              cursor: 'pointer', 
              borderRadius: '6px', 
              border: '1px solid var(--primary)', 
              background: 'transparent', 
              color: 'var(--primary)',
              fontWeight: '600',
              fontSize: '13px'
            }}
          >
            Ver Detalle
          </button>
          <button 
            onClick={() => toggleFavorito(receta.id)}
            style={{ 
              padding: '8px 12px', 
              cursor: 'pointer', 
              borderRadius: '6px', 
              border: '1px solid var(--border-color)', 
              background: esFavorito ? '#fff0f0' : '#fff', 
              color: esFavorito ? 'var(--accent)' : 'var(--text-muted)',
              fontSize: '14px'
            }}
            title={esFavorito ? "Quitar de favoritos" : "Guardar en favoritos"}
          >
            {esFavorito ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  );
}