# TravelGo

TravelGo es una aplicación web de viajes desarrollada con React. Permite explorar destinos turísticos, consultar itinerarios, calcular presupuestos personalizados y administrar destinos mediante una API REST simulada.

## Autores

- Guillermo Pernichi
- Joaquín Peyronel

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- React Router DOM
- Sass (SCSS)
- JSON Server
- LocalStorage
- ESLint

## Requisitos previos

Tener instalados Node.js y npm.

## Instalación

Desde la carpeta `segunda-entrega`, ejecutar:

```bash
npm install
```

## Ejecución del proyecto

La aplicación necesita dos servidores funcionando simultáneamente.

**Terminal 1: iniciar JSON Server**

```bash
npm run server
```

API disponible en `http://localhost:3001`.

**Terminal 2: iniciar React con Vite**

```bash
npm run dev
```

Abrir la dirección local indicada por Vite, normalmente `http://localhost:5173`.

## Funcionalidades principales

- Exploración de destinos turísticos.
- Búsqueda, filtrado y ordenamiento de destinos.
- Consulta de itinerarios y sus detalles.
- Cotización personalizada de viajes.
- Selección de servicios adicionales.
- Carrito de cotizaciones con persistencia en localStorage.
- Administración de destinos mediante operaciones CRUD.

## API REST

Se utiliza JSON Server con el archivo `db.json`, ubicado en la raíz de `segunda-entrega`.

Endpoints principales:

- `GET /destinos`
- `POST /destinos`
- `PATCH /destinos/:id`
- `DELETE /destinos/:id`
- `GET /itinerarios`

## Comandos disponibles

```bash
npm run dev
npm run server
npm run lint
npm run build
npm run preview
```

## Estructura del proyecto

- `src/components`: componentes reutilizables.
- `src/pages`: páginas de la aplicación.
- `src/api`: funciones para consultar la API.
- `src/styles`: estilos SCSS.
- `src/assets`: recursos importados por React.
- `src/data`: datos utilizados para generar la base inicial.
- `public`: recursos públicos.

## Observaciones

JSON Server se utiliza como servidor simulado para el desarrollo y las pruebas. Debe estar ejecutándose para consultar destinos e itinerarios y utilizar la administración.

Las cotizaciones agregadas al carrito se almacenan localmente en el navegador.