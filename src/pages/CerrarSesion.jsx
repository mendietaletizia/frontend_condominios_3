import React from "react";
import { useNavigate } from "react-router-dom";

function CerrarSesion() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("http://127.0.0.1:8000/api/logout/", {
        method: "POST",
        credentials: "include"
      });
    } catch {
      // Error al cerrar sesión, ignorar
    }
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cerrar sesión</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default CerrarSesion;
