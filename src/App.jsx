import React, { useState, useEffect } from 'react';
import Bienvenida from './components/Bienvenida';
import Buscador from './components/Buscador';
import ListaRecetas from './components/ListaRecetas';
import ModalDetalle from './components/ModalDetalle';
import recetasIniciales from './data/recetas.json';

export default function App() {
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);
  const [recetas, setRecetas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);
  const [soloFavoritos, setSoloFavoritos] = useState(false);
  const [cargando, setCargando] = useState(true);

  const [favoritos, setFavoritos] = useState(() => {
    try {
      const guardados = localStorage.getItem('recetas_favoritas');
      return guardados ? JSON.parse(guardados) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setRecetas(recetasIniciales || []);
      setCargando(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('recetas_favoritas', JSON.stringify(favoritos));
    } catch (error) {
      console.error('Error guardando favoritos en localStorage:', error);
    }
  }, [favoritos]);

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const recetasFiltradas = recetas.filter((receta) => {
    const coincideBusqueda =
      receta.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      receta.ingredientes.some((ing) => ing.toLowerCase().includes(busqueda.toLowerCase()));

    const coincideCategoria = categoria === 'Todas' || receta.categoria === categoria;
    const coincideFavorito = !soloFavoritos || favoritos.includes(receta.id);

    return coincideBusqueda && coincideCategoria && coincideFavorito;
  });

  if (mostrarBienvenida) {
    return <Bienvenida enComenzar={() => setMostrarBienvenida(false)} />;
  }

  return (
    <div className="layout-contenedor">
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="badge">RECETARIO</span>
          <h2>Mi Cocina</h2>
        </div>

        <div className="seccion-sidebar">
          <button
            onClick={() => setSoloFavoritos(!soloFavoritos)}
            className={`btn-favoritos ${soloFavoritos ? 'activo' : ''}`}
          >
            {soloFavoritos ? '★ Mis Favoritos' : '☆ Ver Favoritos'} ({favoritos.length})
          </button>
        </div>

        <div className="seccion-sidebar">
          <h3>Filtros de Búsqueda</h3>
          <Buscador
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            categoria={categoria}
            setCategoria={setCategoria}
          />
        </div>
      </aside>

      <main className="contenido-principal">
        <header className="header-principal">
          <h1>{soloFavoritos ? 'Mis Recetas Guardadas' : 'Colección Gastronómica'}</h1>
          <p>
            {soloFavoritos
              ? 'Mostrando únicamente tus platillos marcados como favoritos.'
              : 'Explora nuestra lista de preparaciones seleccionadas.'}
          </p>
        </header>

        {cargando ? (
          <p className="mensaje-estado">Cargando recetario...</p>
        ) : recetasFiltradas.length === 0 ? (
          <p className="mensaje-estado">
            {soloFavoritos
              ? 'No tienes recetas favoritas guardadas que coincidan con la búsqueda.'
              : 'No se encontraron recetas con los criterios seleccionados.'}
          </p>
        ) : (
          <ListaRecetas
            recetas={recetasFiltradas}
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
            seleccionarReceta={setRecetaSeleccionada}
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