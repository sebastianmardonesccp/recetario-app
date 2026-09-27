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
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#f9f9f9', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333' }}>📖 Recetario Digital</h1>
        <p style={{ color: '#666' }}>Encuentra y guarda tus recetas favoritas</p>
        
        <button
          onClick={() => setSoloFavoritos(!soloFavoritos)}
          style={{
            padding: '10px 15px',
            backgroundColor: soloFavoritos ? '#ff4d4d' : '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          {soloFavoritos ? 'Ver Todas las Recetas' : `Ver mis Favoritos (${favoritos.length})`}
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
          <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '40px' }}>⏳ Cargando recetas...</p>
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