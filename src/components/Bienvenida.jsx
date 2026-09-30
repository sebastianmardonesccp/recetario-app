import React, { useState } from 'react';

export default function Bienvenida({ enComenzar }) {
  const [mostrarSobreNosotros, setMostrarSobreNosotros] = useState(false);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      textAlign: 'center',
      padding: '20px'
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
        fontSize: '3rem', 
        fontWeight: '800', 
        margin: '0 0 15px 0',
        lineHeight: '1.2',
        maxWidth: '700px'
      }}>
        Sazona tus días con recetas memorables
      </h1>

      <p style={{ 
        color: 'var(--text-muted)', 
        fontSize: '1.1rem', 
        maxWidth: '550px', 
        margin: '0 0 25px 0',
        lineHeight: '1.6'
      }}>
        Una colección seleccionada de preparaciones, ingredientes y sabores diseñados para inspirar cada uno de tus platillos.
      </p>

      {/* Botones de acción */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={enComenzar}
          style={{
            padding: '14px 32px',
            backgroundColor: 'var(--primary)',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            fontSize: '1rem',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(45, 90, 39, 0.25)'
          }}
        >
          Comenzar a explorar
        </button>

        <button
          onClick={() => setMostrarSobreNosotros(!mostrarSobreNosotros)}
          style={{
            padding: '14px 28px',
            backgroundColor: 'transparent',
            color: 'var(--primary)',
            border: '2px solid var(--primary)',
            borderRadius: '30px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          {mostrarSobreNosotros ? 'Ocultar info ▲' : 'Sobre nosotros ▼'}
        </button>
      </div>

      {/* Contenido desplegable "Sobre Nosotros" */}
      {mostrarSobreNosotros && (
        <div className="sobre-nosotros-desplegable">
          <h3 style={{ margin: '0 0 10px 0', color: 'var(--primary)', fontSize: '1.2rem' }}>
            Nuestra Misión
          </h3>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Nacimos con el propósito de simplificar y elevar la experiencia culinaria en casa. 
            Creemos que cocinar no debe ser complicado: reunimos recetas prácticas, nutritivas 
            y deliciosas organizadas de forma intuitiva para que disfrutes tanto el proceso como el resultado.
          </p>
        </div>
      )}
    </div>
  );
}