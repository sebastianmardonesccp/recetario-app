import React from 'react';

export default function Buscador({ busqueda, setBusqueda, categoria, setCategoria }) {
  const categorias = ['Todas', 'Pastas', 'Postres', 'Ensaladas', 'Rápida'];

  return (
    <div style={{ marginBottom: '35px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Buscar por ingrediente o nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          padding: '12px 20px',
          width: '100%',
          maxWidth: '450px',
          borderRadius: '10px',
          border: '1px solid var(--border-color)',
          marginBottom: '20px',
          fontSize: '15px',
          outline: 'none',
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          boxSizing: 'border-box'
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              border: categoria === cat ? '1px solid var(--primary)' : '1px solid var(--border-color)',
              cursor: 'pointer',
              backgroundColor: categoria === cat ? 'var(--primary)' : '#fff',
              color: categoria === cat ? '#fff' : 'var(--text-dark)',
              fontWeight: '500',
              fontSize: '14px',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}