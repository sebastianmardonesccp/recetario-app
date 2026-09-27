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
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '90%',
        maxHeight: '80vh',
        overflowY: 'auto'
      }}>
        <h2>{receta.nombre}</h2>
        <img src={receta.imagen} alt={receta.nombre} style={{ width: '100%', borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
        <h3>Ingredientes:</h3>
        <ul>
          {receta.ingredientes.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>
        <h3>Instrucciones:</h3>
        <p>{receta.instrucciones}</p>
        <button 
          onClick={cerrarModal}
          style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}