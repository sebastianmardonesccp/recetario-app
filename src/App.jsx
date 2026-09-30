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

  // Cargar favoritos guardados en localStorage
  const [favoritos, setFavoritos] = useState(() => {
    try {
      const favoritosGuardados = localStorage.getItem('recetas_favoritas');
      return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
    } catch (e) {
      return [];
    }
  });

  // Simular la carga de datos
  useEffect(() => {
    const timer = setTimeout(() => {
      setRecetas(recetasIniciales || []);
      setCargando(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Guardar en localStorage ante cambios en favoritos
  useEffect(() => {
    try {
      localStorage.setItem('recetas_favoritas', JSON.stringify(favoritos));
    } catch (e) {
      console.error("Error al guardar favoritos", e);
    }
  }, [favoritos]);

  const toggleFavorito = (id) => {
    setFavoritos((prevFavs) =>
      prevFavs.includes(id)
        ? prevFavs.filter((favId) => favId !== id)
        : [...prevFavs, id]
    );
  };

  // Filtrado combinado
  const recetasFiltradas = recetas.filter((receta) => {
    const coincideBusqueda = receta.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      receta.ingredientes.some(ing => ing.toLowerCase().includes(busqueda.toLowerCase()));
    
    const coincideCategoria = categoria === 'Todas' || receta.categoria === categoria;
    const coincideFavorito = !soloFavoritos || favoritos.includes(receta.id);

    return coincideBusqueda && coincideCategoria && coincideFavorito;
  });

  return (
    <div style={{ minHeight: '100vh', padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      {mostrarBienvenida ? (
        <Bienvenida enComenzar={() => setMostrarBienvenida(false)} />
      ) : (
        <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
          <header style={{ textAlign: 'center', marginBottom: '30px' }}>
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
              {soloFavoritos ? 'Mis Recetas Guardadas' : 'Colección Gastronómica'}
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: 0 }}>
              {soloFavoritos 
                ? 'Explora y filtra únicamente los platillos que has marcado como favoritos' 
                : 'Descubre preparaciones seleccionadas paso a paso'}
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
            <Buscador
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              categoria={categoria}
              setCategoria={setCategoria}
            />

            {cargando ? (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '18px', marginTop: '60px' }}>
                Cargando recetario...
              </p>
            ) : recetasFiltradas.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '16px', marginTop: '40px' }}>
                {soloFavoritos 
                  ? 'No tienes recetas favoritas que coincidan con tu búsqueda o filtro.' 
                  : 'No se encontraron recetas con los criterios ingresados.'}
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
      )}
    </div>
  );
}