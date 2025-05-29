# Changelog

Este archivo documenta todos los cambios notables en el proyecto BookShare.

## [0.1.6] - 2025-05-28 20:58

### Corregido
- Corregidas las importaciones de páginas en App.jsx para que apunten al archivo pages.jsx donde realmente están definidos los componentes
- Solucionado el error "Could not resolve './pages/HomePage' from 'src/App.jsx'" que impedia el despliegue en Netlify

## [0.1.5] - 2025-05-28 20:51

### Corregido
- Renombrados los archivos de contexto de .js a .jsx para garantizar el correcto procesamiento por Vite
- Actualizadas las importaciones en App.jsx y hooks para usar los archivos .jsx
- Mejorada la configuración de Vite para manejar correctamente los archivos JSX
- Optimizadas las dependencias principales para evitar problemas durante la compilación

## [0.1.4] - 2025-05-28 20:48

### Corregido
- Actualizada la versión de Node.js en netlify.toml de 18.16.0 a 20.10.0 para compatibilidad con Netlify

## [0.1.3] - 2025-05-28 20:44

### Corregido
- Actualizada la versión del proyecto en package.json para que coincida con el changelog
- Añadido script "clean" para facilitar la limpieza de dependencias en caso de problemas
- Creado archivo netlify.toml para configurar correctamente el despliegue en Netlify

## [0.1.2] - 2025-05-28 20:40

### Corregido
- Solucionado error de sintaxis en NotificationContext.js
- Movido el componente NotificationDisplay fuera del NotificationProvider para evitar problemas de compilación

## [0.1.1] - 2025-05-28 20:34

### Corregido
- Solución al problema de despliegue en Netlify
- Creado archivo vite.config.js para configurar correctamente el punto de entrada
- Movido index.html de la carpeta public a la raíz del proyecto

## [0.1.0] - 2025-05-28 20:33

### Añadido
- Configuración inicial del proyecto con React y Vite
- Integración con Supabase para autenticación y base de datos
- Estructura básica de componentes para la interfaz de usuario
- Sistema de temas claro/oscuro
- Contextos para autenticación, temas y notificaciones
- Rutas protegidas para funcionalidades que requieren autenticación
- Componentes placeholder para las principales funcionalidades

### Por hacer
- Implementación completa de la funcionalidad de búsqueda de libros
- Desarrollo del sistema de mensajería entre usuarios
- Finalización del sistema de intercambio de libros
- Mejora de la interfaz de usuario con estilos completos
- Implementación de pruebas unitarias y de integración
