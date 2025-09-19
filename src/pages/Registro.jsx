// src/pages/Registro.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("residente");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegistro = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!username || !email || !password || !repeatPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (password !== repeatPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, role, password }),
      });
      if (!response.ok) {
        let message = "Error al registrar";
        try {
          const errData = await response.json();
          message = errData.detail || message;
        } catch {
          throw new Error(message);
        }
        throw new Error(message);
      }
      setSuccess("Usuario registrado correctamente. Ahora puedes iniciar sesión.");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="registro-page">
      <h2>Crear cuenta</h2>
      <form onSubmit={handleRegistro}>
        <label>Usuario</label>
        <input
          type="text"
          placeholder="Ingresa tu nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Rol</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="residente">Residente</option>
          <option value="administrador">Administrador</option>
          <option value="seguridad">Seguridad</option>
          <option value="empleado">Empleado</option>
        </select>
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Repetir contraseña</label>
        <input
          type="password"
          placeholder="Repite tu contraseña"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
      <p>
        ¿Ya tienes una cuenta?{' '}
        <span
          style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Inicia sesión aquí
        </span>
      </p>
    </div>
  );
}

export default Registro;
