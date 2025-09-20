// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        let message = "Error en login";
        try {
          const errData = await response.json();
          message = errData.detail || message;
        } catch {
          // Error al parsear JSON, ignorar
        }
        throw new Error(message);
      }
      const data = await response.json();
      // Guarda username y rol en localStorage
      localStorage.setItem("user", JSON.stringify({ username: data.username, role: data.role }));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          autoComplete="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      {/* Registro deshabilitado, no mostrar opción de registro */}
    </div>
  );
};

export default Login;
