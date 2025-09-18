// src/pages/UsuariosUnidades.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function UsuariosUnidades() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 32 }}>
      <h2>Usuarios y Unidades</h2>
      <ul style={{ fontSize: 18 }}>
        <li>
          <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/usuarios/gestion')}>Gestión de Usuarios (CU3)</span>
        </li>
        <li>
          <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/usuarios/roles')}>Roles y Permisos (CU4)</span>
        </li>
        <li>
          <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/residentes')}>Residentes e Inquilinos (CU5)</span>
        </li>
        <li>
          <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/unidades')}>Unidades Habitacionales (CU6)</span>
        </li>
      </ul>
    </div>
  );
}

export default UsuariosUnidades;
