# 👨‍🍳 Mi Recetario - Aplicación Web Gastronómica

Una plataforma web interactiva y moderna para explorar, filtrar y guardar recetas de cocina. Diseñada con una arquitectura de componentes limpia, un sistema de estado optimizado con persistencia local y una interfaz de usuario fluida y responsiva.

---

## 🚀 Características Principales

* **Pantalla de Bienvenida Dinámica:** Presentación interactiva con botón desplegable "Sobre nosotros" y animación fluida.
* **Búsqueda en Tiempo Real:** Filtro reactivo por nombre de platillo o ingredientes.
* **Filtrado por Categorías:** Clasificación por tipos de plato (Plato Principal, Ensaladas, Postres, etc.).
* **Gestión de Favoritos:** Marcación de recetas preferidas con persistencia de datos en localStorage.
* **Detalle Modal Interactivo:** Vista previa completa de ingredientes y pasos de preparación en un modal superpuesto.
* **Menú Lateral (Sidebar):** Navegación responsiva y organizada para filtros y favoritos.
* **Diseño Responsivo & Moderno:** Interfaz estilizada con variables CSS nativas y adaptabilidad a dispositivos móviles.

---

## 🛠️ Tecnologías Utilizadas

* **React:** Biblioteca JavaScript para la construcción de interfaces de usuario basadas en componentes.
* **JavaScript (ES6+):** Lógica del cliente, manejo de arreglos (map, filter, some) y Hooks (useState, useEffect).
* **CSS3 Nativo:** Flexbox, Grid Layout, animaciones con @keyframes y variables CSS.
* **HTML5:** Estructura semántica con favicon SVG integrado y metas adaptativos.
* **Vite:** Entorno de desarrollo rápido y empaquetador optimizado.

---

## 📁 Estructura del Proyecto

recetario/
├── public/
│   └── (Archivos estáticos)
├── src/
│   ├── assets/         # Recursos multimedia
│   ├── components/     # Componentes reutilizables de React
│   │   ├── Bienvenida.jsx
│   │   ├── Buscador.jsx
│   │   ├── ListaRecetas.jsx
│   │   ├── TarjetaReceta.jsx
│   │   └── ModalDetalle.jsx
│   ├── data/
│   │   └── recetas.json # Base de datos local de recetas
│   ├── App.jsx         # Componente principal y manejo de estado global
│   ├── main.jsx        # Punto de entrada de React
│   └── index.css       # Sistema global de estilos y animaciones
├── index.html          # Documento HTML principal
└── package.json        # Dependencias y scripts de NPM

---

## ⚙️ Instalación y Ejecución Local

Sigue estos pasos para clonar e iniciar el proyecto en tu máquina local:

1. **Clonar el repositorio:**
   git clone <URL_DE_TU_REPOSITORIO>
   cd recetario

2. **Instalar dependencias:**
   npm install

3. **Iniciar el servidor de desarrollo:**
   npm run dev

4. **Abrir en el navegador:**
   Ingresa a la dirección local indicada en la terminal (por defecto http://localhost:5173).

---

## 🎨 Decisiones de Diseño y Arquitectura

* **Elevación de Estado (State Hoisting):** El estado principal de recetas, favoritos y filtros se centraliza en App.jsx para garantizar una sola fuente de verdad (single source of truth).
* **Persistencia de Datos:** Se implementó localStorage dentro de la inicialización de useState y sincronizado mediante useEffect para mantener los favoritos del usuario tras recargar la página.
* **Optimización de Estilos:** Se prescindió de frameworks pesados para utilizar CSS puro optimizado, garantizando tiempos de carga mínimos y control total del diseño.