// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;
  return (
    <div className="sidebar">
      <h2>Condominios</h2>
      <ul>
        {/* Solo el administrador puede ver gestión de usuarios y roles */}
        {role === "administrador" && (
          <>
            <li>
              <Link to="/usuarios/gestion">Gestión de Usuarios</Link>
            </li>
            <li>
              <Link to="/usuarios/roles">Roles y Permisos</Link>
            </li>
          </>
        )}
        {/* Todos pueden ver residentes y unidades */}
        <li>
          <Link to="/residentes">Residentes</Link>
        </li>
        <li>
          <Link to="/unidades">Unidades</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
