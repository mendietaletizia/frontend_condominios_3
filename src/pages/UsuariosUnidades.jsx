// src/pages/UsuariosUnidades.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function UsuariosUnidades() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;
  return (
    <div style={{ padding: 32 }}>
      <h2>Usuarios y Unidades</h2>
      <ul style={{ fontSize: 18 }}>
        {/* Solo el administrador puede ver gestión de usuarios y roles */}
        {role === "administrador" && (
          <>
            <li>
              <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/usuarios/gestion')}>Gestión de Usuarios (CU3)</span>
            </li>
            <li>
              <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/usuarios/roles')}>Roles y Permisos (CU4)</span>
            </li>
          </>
        )}
        {/* Todos pueden ver residentes y unidades */}
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
