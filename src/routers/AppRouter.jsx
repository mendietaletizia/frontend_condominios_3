// src/routers/AppRouter.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import GestionUsuarios from "../pages/GestionUsuarios";
import RolesYPermisos from "../pages/RolesYPermisos";
import GestionResidentes from "../pages/GestionResidentes";
import GestionUnidades from "../pages/GestionUnidades";
import Registro from "../pages/Registro";
import AutenticacionSeguridad from "../pages/AutenticacionSeguridad";
import UsuariosUnidades from "../pages/UsuariosUnidades";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/registro" element={<Registro />} />
  <Route path="/register" element={<Registro />} />
  <Route path="/autenticacion" element={<AutenticacionSeguridad />} />
  <Route path="/usuarios_unidades" element={<UsuariosUnidades />} />
        <Route path="/usuarios/gestion" element={<GestionUsuarios />} />
        <Route path="/usuarios/roles" element={<RolesYPermisos />} />
        <Route path="/residentes" element={<GestionResidentes />} />
        <Route path="/unidades" element={<GestionUnidades />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
