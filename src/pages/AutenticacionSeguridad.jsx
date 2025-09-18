// src/pages/AutenticacionSeguridad.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function AutenticacionSeguridad() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 32 }}>
      <h2>Autenticación y Seguridad</h2>
      <ul style={{ fontSize: 18 }}>
        <li>
          <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/')}>Iniciar sesión (CU1)</span>
        </li>
        <li>
          <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/cerrar-sesion')}>Cerrar sesión (CU2)</span>
        </li>
      </ul>
    </div>
  );
}

export default AutenticacionSeguridad;
