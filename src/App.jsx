import React, { useState, useEffect } from 'react';
import Buscador from './components/Buscador';
import ListaRecetas from './components/ListaRecetas';
import ModalDetalle from './components/ModalDetalle';
import recetasData from './data/recetas.json';

export default function App() {
  // Estados principales
  const [recetas, setRecetas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [favoritos, setFavoritos] = useState([]);
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);
  const [soloFavoritos, setSoloFavoritos] = useState(false);

  // Petición simulada de datos con useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setRecetas(recetasData);
      setCargando(false);
    }, 1000); // Simula 1 segundo de carga de red

    return () => clearTimeout(timer);
  }, []);

  // Función para agregar o quitar de favoritos
  const toggleFavorito = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favId) => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  };

  // Filtrado dinámico por búsqueda, categoría y pestaña de favoritos
  const recetasFiltradas = recetas.filter((receta) => {
    const coincideBusqueda = receta.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === 'Todas' || receta.categoria === categoria;
    const coincideFavorito = soloFavoritos ? favoritos.includes(receta.id) : true;

    return coincideBusqueda && coincideCategoria && coincideFavorito;
  });

  return (
    <div style={{ minHeight: '100vh', padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span style={{ 
          backgroundColor: '#e8efe6', 
          color: 'var(--primary)', 
          padding: '6px 16px', 
          borderRadius: '20px', 
          fontSize: '14px', 
          fontWeight: '600',
          letterSpacing: '0.5px'
        }}>
          RECETARIO EXCLUSIVO
        </span>
        <h1 style={{ color: 'var(--text-dark)', fontSize: '2.5rem', margin: '15px 0 8px 0', fontWeight: '700' }}>
          Colección Gastronómica
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: 0 }}>
          Descubre preparaciones seleccionadas paso a paso
        </p>
        
        <button
          onClick={() => setSoloFavoritos(!soloFavoritos)}
          style={{
            padding: '10px 22px',
            backgroundColor: soloFavoritos ? 'var(--accent)' : 'var(--primary)',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '15px',
            fontWeight: '600',
            fontSize: '14px',
            transition: 'all 0.2s ease'
          }}
        >
          {soloFavoritos ? '← Ver Todas las Recetas' : `Ver mis Favoritos (${favoritos.length})`}
        </button>
      </header>

      <main>
        {!soloFavoritos && (
          <Buscador
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            categoria={categoria}
            setCategoria={setCategoria}
          />
        )}

        {cargando ? (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '18px', marginTop: '60px' }}>
            Cargando recetario...
          </p>
        ) : (
          <ListaRecetas
            recetas={recetasFiltradas}
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
            seleccionarReceta={(receta) => setRecetaSeleccionada(receta)}
          />
        )}
      </main>

      <ModalDetalle
        receta={recetaSeleccionada}
        cerrarModal={() => setRecetaSeleccionada(null)}
      />
    </div>
  );
}