import React from 'react';

export default function ModalDetalle({ receta, cerrarModal }) {
  if (!receta) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(31, 36, 33, 0.65)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        backgroundColor: 'var(--bg-card)',
        padding: '25px',
        borderRadius: '16px',
        maxWidth: '520px',
        width: '100%',
        maxHeight: '85vh',
        overflowY: 'auto',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        border: '1px solid var(--border-color)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
          <div>
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {receta.categoria} • ⏱️ {receta.tiempo}
            </span>
            <h2 style={{ margin: '5px 0 0 0', color: 'var(--text-dark)', fontSize: '1.5rem' }}>
              {receta.nombre}
            </h2>
          </div>
          <button 
            onClick={cerrarModal}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              padding: '0 5px'
            }}
          >
            ✕
          </button>
        </div>

        <img 
          src={receta.imagen} 
          alt={receta.nombre} 
          style={{ width: '100%', borderRadius: '10px', height: '220px', objectFit: 'cover', marginBottom: '20px' }} 
        />

        <h3 style={{ color: 'var(--primary)', fontSize: '1.05rem', margin: '0 0 10px 0', borderBottom: '1px solid var(--border-color)', paddingBottom: '5px' }}>
          Ingredientes
        </h3>
        <ul style={{ paddingLeft: '20px', margin: '0 0 20px 0', color: 'var(--text-dark)', lineHeight: '1.6' }}>
          {receta.ingredientes.map((ing, index) => (
            <li key={index} style={{ marginBottom: '4px' }}>{ing}</li>
          ))}
        </ul>

        <h3 style={{ color: 'var(--primary)', fontSize: '1.05rem', margin: '0 0 10px 0', borderBottom: '1px solid var(--border-color)', paddingBottom: '5px' }}>
          Instrucciones de Preparación
        </h3>
        <p style={{ color: 'var(--text-dark)', lineHeight: '1.6', margin: '0 0 20px 0', fontSize: '14px' }}>
          {receta.instrucciones}
        </p>

        <div style={{ textAlign: 'right' }}>
          <button 
            onClick={cerrarModal}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: 'var(--primary)', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px'
            }}
          >
            Cerrar Receta
          </button>
        </div>
      </div>
    </div>
  );
}