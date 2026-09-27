import React from 'react';

export default function Buscador({ busqueda, setBusqueda, categoria, setCategoria }) {
  const categorias = ['Todas', 'Pastas', 'Postres', 'Ensaladas', 'Rápida'];

  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Buscar receta..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          padding: '10px',
          width: '80%',
          maxWidth: '400px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginBottom: '10px'
        }}
      />
      <div>
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            style={{
              margin: '5px',
              padding: '8px 12px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: categoria === cat ? '#007bff' : '#e0e0e0',
              color: categoria === cat ? '#fff' : '#000'
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}