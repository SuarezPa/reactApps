# React + Vite

Esta plantilla proporciona una configuración mínima para usar React con Vite, con HMR y algunas reglas de ESLint.

Actualmente están disponibles dos plugins oficiales:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Babel](https://babeljs.io/) (o [oxc](https://oxc.rs) cuando se usa en [rolldown-vite](https://vite.dev/guide/rolldown)) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh.

## Compilador de React

El compilador de React actualmente no es compatible con SWC. Ver [este issue](https://github.com/vitejs/vite-plugin-react/issues/428) para seguimiento.

## Ampliando la configuración de ESLint

Si desarrollas una aplicación en producción, recomendamos usar TypeScript con reglas de lint conscientes de tipos. Revisa la [plantilla TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para integrar TypeScript y [`typescript-eslint`](https://typescript-eslint.io).

---

# Rick & Morty - React (Proyecto)

Pequeña aplicación creada con Vite + React que muestra personajes de Rick & Morty. Incluye componentes básicos, estilos y un servicio HTTP para consumir datos. Se agregó un layout principal con Header, NavBar y un contenedor grid reutilizable (TeamGrid) que limita a máximo 3 columnas.

## Estructura principal (actualizada)
- `index.html` — Punto de entrada HTML. (appRick&Morthy/index.html)
- `src/main.jsx` — Punto de arranque actualizado: ahora renderiza `<App />`. (appRick&Morthy/src/main.jsx)
- `src/App.jsx` — Nuevo layout: Header + NavBar + main donde se monta `AppCharaters`. (appRick&Morthy/src/App.jsx)
- `src/AppCharaters.jsx` — Componente responsable de obtener y mapear personajes (usa `TeamGrid` y `Card`). (appRick&Morthy/src/AppCharaters.jsx)
- `src/components/TeamGrid.jsx` — Contenedor reusable que aplica `display: grid` (máx 3 columnas). (appRick&Morthy/src/components/TeamGrid.jsx)
- `src/components/Card.jsx` — Componente de tarjeta para cada personaje. (appRick&Morthy/src/components/Card.jsx)
- `src/components/Header.jsx` — Header de la app (logo, navegación superior). (appRick&Morthy/src/components/Header.jsx)
- `src/components/NavBar.jsx` — Barra de navegación simple. (appRick&Morthy/src/components/NavBar.jsx)
- `src/services/http-service.js` — Servicio para llamadas HTTP a la API. (appRick&Morthy/src/services/http-service.js)
- `src/constans.js` — Constantes del proyecto. (appRick&Morthy/src/constans.js)
- `src/*.css` — Estilos globales y de componentes (`App.css`, `TeamGrid.css`, `Header.css`, `Card.css`, etc.)
- `vite.config.js` — Configuración de Vite. (appRick&Morthy/vite.config.js)
- `package.json` — Scripts y dependencias (incluye scripts para prettier si se añade). (appRick&Morthy/package.json)

## Diseño y layout
- Se creó un layout principal (`App.jsx`) que organiza:
  - Header (logo + enlaces)
  - NavBar (botones de navegación)
  - Main (contenido): aquí `AppCharaters` monta la lista de personajes dentro de `TeamGrid`.
- TeamGrid aplica CSS Grid con máximo 3 columnas y media queries para responsive:
  - Desktop: 3 columnas
  - Tablet: 2 columnas
  - Móvil: 1 columna
- Separar el grid en su propio componente mantiene AppCharaters enfocado en datos y Card en la presentación de cada personaje.

## Notas sobre Header y assets
- `Header.jsx` importa `Header.css` y usa imágenes en `src/assets` o `public`. Revisa las rutas de las imágenes (p. ej. `img src="../../public/vite.svg"` puede necesitar `import` o usar `/vite.svg` desde public).
- Ajusta `Header.css` y `App.css` según el diseño que prefieras.

## Requisitos
- Node.js (versión LTS recomendada)
- npm o yarn

## Instalación
1. Abrir la carpeta del proyecto:
   cd appRick&Morthy
2. Instalar dependencias:
   npm install

## Desarrollo
Iniciar servidor de desarrollo:
npm run dev

El proyecto suele servir en http://localhost:5173 por defecto (ver salida del comando).

## Build para producción
Generar artefactos optimizados:
npm run build

## Formateo con Prettier (opcional pero recomendado)
Instalar Prettier:
npm install --save-dev --save-exact prettier

Añadir scripts en `package.json`:
```json
// filepath: /Users/jscode/Documents/reactApps/reactApps/appRick&Morthy/package.json
// ...existing code...
"scripts": {
  // ...existing code...
  "format": "prettier --write \"src/**/*.{js,jsx,css,json,md,html}\"",
  "format:check": "prettier --check \"src/**/*.{js,jsx,css,json,md,html}\""
}
// ...existing code...
```

Archivo opcional de configuración `.prettierrc`:
```json
// filepath: /Users/jscode/Documents/reactApps/reactApps/appRick&Morthy/.prettierrc
{
  "printWidth": 100,
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "endOfLine": "lf"
}
```

Uso:
- Formatear: npm run format
- Comprobar sin modificar: npm run format:check

## Notas técnicas y recomendaciones
- Mantén `AppCharaters` como responsable solo de obtener y mapear datos; usa `TeamGrid` para la presentación en rejilla y `Card` para cada ítem.
- Verifica rutas de imágenes (import vs public) para evitar errores en producción.
- Si quieres, puedo actualizar `AppCharaters.jsx` o `Header.jsx` con rutas de assets correctas y aplicar formateo automático.

## Contribuir
1. Crear una rama feature/fix
2. Hacer commits claros
3. Abrir pull request