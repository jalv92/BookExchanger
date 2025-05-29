// src/components/Common/ErrorBoundary.jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la UI alternativa
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier UI alternativa
      return (
        <div style={{ 
          padding: '20px', 
          margin: '20px', 
          border: '1px solid #f5c6cb',
          borderRadius: '4px',
          backgroundColor: '#f8d7da',
          color: '#721c24'
        }}>
          <h2>Algo salió mal.</h2>
          <p>Es posible que falten variables de entorno necesarias para la aplicación.</p>
          <details style={{ whiteSpace: 'pre-wrap', marginTop: '10px' }}>
            <summary>Ver detalles del error</summary>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
          {import.meta.env.DEV && (
            <div style={{ marginTop: '20px' }}>
              <h3>Solución para desarrollo:</h3>
              <p>Verifica que tienes un archivo <code>.env</code> con las siguientes variables:</p>
              <pre style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '10px', 
                borderRadius: '4px' 
              }}>
                VITE_SUPABASE_URL=tu_url_de_supabase
                VITE_SUPABASE_ANON_KEY=tu_clave_anon_de_supabase
              </pre>
            </div>
          )}
          {!import.meta.env.DEV && (
            <div style={{ marginTop: '20px' }}>
              <h3>Solución para producción:</h3>
              <p>Si eres el administrador del sitio, configura las variables de entorno en Netlify:</p>
              <ol>
                <li>Ve a la configuración de tu sitio en Netlify</li>
                <li>Build & deploy → Environment → Environment variables</li>
                <li>Añade VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY</li>
              </ol>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
