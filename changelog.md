# Changelog

Este archivo documenta todos los cambios notables en el proyecto BookShare.

## [0.5.2] - 2025-05-29 10:58

### Mejorado
- Implementado sistema de temas claro/oscuro con persistencia en localStorage
- Añadido botón flotante para cambiar entre temas
- Mejorada la accesibilidad con etiquetas ARIA y contraste de colores
- Optimizada la transición entre temas para una experiencia más fluida

## [0.5.1] - 2025-05-29 10:20

### Añadido
- Creado script `fix_jq.ps1` para solucionar el problema de accesibilidad de jq en Git Bash
- Implementada solución manual para configurar jq en Git Bash
- Añadido script `jq_wrapper.sh` como solución alternativa para el problema de jq

### Corregido
- Proporcionada solución para el error "jq: command not found" al ejecutar scripts en Git Bash

## [0.5.0] - 2025-05-29 09:33

### Añadido
- Creado proyecto Supabase para BookShare
- Configuradas tablas principales: profiles, books, user_books, book_exchanges, messages
- Implementadas políticas de seguridad (RLS) para proteger los datos
- Creadas funciones y triggers para manejar la lógica de negocio
- Añadidas vistas útiles: available_books, pending_exchanges, user_conversations

### Mejorado
- Estructura de base de datos optimizada con índices para mejor rendimiento
- Configuración automática de perfiles de usuario al registrarse

## [0.4.0] - 2025-05-28 22:40

### Añadido
- Implementado sistema completo de animaciones con keyframes y clases de utilidad
- Agregados efectos glassmórficos y neumórficos para elementos de UI
- Incorporadas microinteracciones avanzadas para elementos interactivos
- Diseñado sistema de grid y layout responsive usando variables CSS
- Creados componentes modernos para formularios y controles
- Implementado sistema de tipografía escalar con tamaños y pesos definidos

### Mejorado
- Actualizada la paleta de colores con tonos más oscuros y acentos vibrantes
- Refinado el sistema de espaciado y escalado de componentes
- Optimizada la experiencia para dispositivos móviles con breakpoints específicos
- Mejorado el contraste y legibilidad en la interfaz de usuario
- Implementadas transiciones suaves para una experiencia de navegación fluida

## [0.3.0] - 2025-05-28 22:24

### Añadido
- Implementada nueva interfaz de usuario moderna basada en los diseños proporcionados
- Mejorados los estilos globales con sistema completo de variables CSS
- Añadidos componentes mejorados de tarjetas, botones y elementos interactivos
- Implementada navbar responsive con soporte para móviles
- Añadido footer con información de contacto y enlaces útiles
- Implementados efectos visuales como gradientes, hover states y transiciones

### Mejorado
- Rediseñado completamente el tema oscuro para mejor experiencia visual
- Optimizada la responsividad para todos los tamaños de pantalla
- Mejorada la arquitectura CSS con clases reutilizables

## [0.2.0] - 2025-05-28 21:38

### Añadido
- Implementado componente ErrorBoundary para capturar y mostrar errores de forma amigable
- Añadido manejo de errores para variables de entorno faltantes en producción

### Corregido
- Solucionado el problema de pantalla en blanco en Netlify debido a variables de entorno no configuradas
- Mejorado el manejo de errores en el cliente de Supabase para evitar fallos catastróficos

## [0.1.9] - 2025-05-28 21:24

### Corregido
- Creado componente AuthForm.jsx para solucionar el error "Could not resolve '../components/Auth/AuthForm' from 'src/pages/pages.jsx'"
- Implementado formulario básico de autenticación para las páginas de inicio de sesión y registro

## [0.1.8] - 2025-05-28 21:09

### Corregido
- Creado archivo Footer.jsx separado para solucionar el error "Could not resolve '../Common/Footer' from 'src/components/Layout/MainLayout.jsx'"
- Creados archivos separados para los demás componentes comunes (SearchBar, FilterDropdown, Button, Modal, Spinner)
- Reorganizada la estructura de archivos para mejorar la mantenibilidad y evitar futuros errores de resolución de módulos

## [0.1.7] - 2025-05-28 21:03

### Corregido
- Actualizada la versión de Node.js en netlify.toml de 20.10.0 a 18.12.1 para garantizar compatibilidad con Netlify
- Solucionado el error relacionado con la versión de Node.js no reconocida durante el despliegue

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
