import React, { useState } from 'react';

export default function Bienvenida({ enComenzar }) {
  const [saliendo, setSaliendo] = useState(false);

  const manejarClick = () => {
    setSaliendo(true);
    setTimeout(() => {
      enComenzar();
    }, 400); // Tiempo para completar la animación de salida
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      textAlign: 'center',
      padding: '20px',
      opacity: saliendo ? 0 : 1,
      transform: saliendo ? 'scale(0.96)' : 'scale(1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <span style={{ 
        backgroundColor: '#e8efe6', 
        color: 'var(--primary)', 
        padding: '8px 20px', 
        borderRadius: '25px', 
        fontSize: '14px', 
        fontWeight: '600',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '20px'
      }}>
        Bienvenido a tu Cocina
      </span>

      <h1 style={{ 
        color: 'var(--text-dark)', 
        fontSize: '3.5rem', 
        fontWeight: '800', 
        margin: '0 0 15px 0',
        lineHeight: '1.15',
        maxWidth: '700px'
      }}>
        Sazona tus días con recetas memorables
      </h1>

      <p style={{ 
        color: 'var(--text-muted)', 
        fontSize: '1.2rem', 
        maxWidth: '550px', 
        margin: '0 0 35px 0',
        lineHeight: '1.6'
      }}>
        Una colección seleccionada de preparaciones, ingredientes y sabores diseñados para inspirar cada uno de tus platillos.
      </p>

      <button
        onClick={manejarClick}
        style={{
          padding: '16px 36px',
          backgroundColor: 'var(--primary)',
          color: '#fff',
          border: 'none',
          borderRadius: '30px',
          fontSize: '1.1rem',
          fontWeight: '700',
          cursor: 'pointer',
          boxShadow: '0 8px 20px rgba(45, 90, 39, 0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        Comenzar a explorar <span>→</span>
      </button>
    </div>
  );
}