# Opitech Dashboard Ecommerce

Frontend e-commerce dashboard desarrollado con **Vue 3**, **TypeScript** y **Vite**, que integra la API pública de DummyJSON para la gestión de productos.

## Stack Tecnológico

- **Framework**: Vue 3 con `<script setup>` SFC
- **Lenguaje**: TypeScript 5.9
- **Build Tool**: Vite 7.3
- **Enrutamiento**: Vue Router 4.6
- **UI Framework**: Vuetify 3.12
- **HTTP Client**: Axios 1.13
- **Utilidades**: Lodash 4.17
- **Icons**: Material Design Icons (@mdi)

## Estructura del Proyecto

```
src/
├── assets/          # Recursos estáticos (CSS, imágenes)
├── components/      # Componentes reutilizables
├── composables/     # Vue Composables
├── constants/       # Constantes de la aplicación
├── layouts/         # Layouts principales
├── pages/           # Vistas/Páginas
├── plugins/         # Plugins y configuraciones (Axios, Vuetify)
├── routes/          # Definición de rutas
├── services/        # Servicios API (product.service, etc.)
├── types/           # Tipos TypeScript
└── utils/           # Funciones utilitarias
```

## API Integration

La aplicación consume la [API de DummyJSON](https://dummyjson.com/docs/products) para:
- Obtener listado de productos
- Filtrar por categoría
- Búsqueda de productos
- Paginación

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Preview build local
npm run preview
```

## Características Principales

- Catálogo de productos con filtrado por categoría
- Búsqueda de productos
- Paginación configurable
- Tipado fuerte con TypeScript
- Interfaz moderna con Vuetify
- Arquitectura modular y escalable

## Requisitos

- Node.js ≥ 16
- npm o yarn

## Instalación

```bash
npm install
npm run dev
```