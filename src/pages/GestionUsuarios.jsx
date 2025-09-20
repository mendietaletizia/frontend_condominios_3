import React, { useState } from "react";

function GestionUsuarios() {
  // Obtener el usuario y rol desde localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user && user.role === "administrador";

  // Formulario de creación de usuario
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("residente");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!username || !email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }
    try {
      const response = await fetch("http://127.0.0.1:8000/api/create-user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ username, email, role, password }),
      });
      if (!response.ok) {
        let message = "Error al crear usuario";
        try {
          const errData = await response.json();
          message = errData.detail || message;
        } catch {
        throw new Error(message);
        }
      }
      setSuccess("Usuario creado correctamente.");
      setUsername("");
      setEmail("");
      setRole("residente");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gestión de usuarios</h1>
      {isAdmin ? (
        <div style={{ maxWidth: 400, marginTop: 24 }}>
          <h2>Crear nuevo usuario</h2>
          <form onSubmit={handleCreateUser}>
            <label>Usuario</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Nombre de usuario"
              style={{ width: "100%", marginBottom: 8 }}
            />
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              style={{ width: "100%", marginBottom: 8 }}
            />
            <label>Rol</label>
            <select
              value={role}
              onChange={e => setRole(e.target.value)}
              style={{ width: "100%", marginBottom: 8 }}
            >
              <option value="residente">Residente</option>
              <option value="seguridad">Seguridad</option>
              <option value="empleado">Empleado</option>
            </select>
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Contraseña"
              style={{ width: "100%", marginBottom: 8 }}
            />
            <button type="submit" style={{ marginTop: 12 }}>Crear usuario</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
          </form>
        </div>
      ) : (
        <p style={{ marginTop: 24, color: "#555" }}>
          Solo el administrador puede crear nuevos usuarios.
        </p>
      )}
    </div>
  );
}

export default GestionUsuarios;
