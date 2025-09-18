// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../api/login";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(username, password);
      localStorage.setItem("user", JSON.stringify(data));
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <p>
        ¿No tienes cuenta?{' '}
        <span
          style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
          onClick={() => navigate('/register')}
        >
          Regístrate aquí
        </span>
      </p>
    </div>
  );
};

export default Login;
