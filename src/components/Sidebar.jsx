// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Condominios</h2>
      <ul>
        <li>
          <Link to="/usuarios/gestion">Gestión de Usuarios</Link>
        </li>
        <li>
          <Link to="/usuarios/roles">Roles y Permisos</Link>
        </li>
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
