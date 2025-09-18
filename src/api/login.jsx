// src/api/login.jsx

// Función para loguear un usuario contra el backend
export async function loginUser(username, password) {
  const response = await fetch("http://127.0.0.1:8000/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    let message = "Error en login";
    try {
      const errData = await response.json();
      message = errData.detail || message;
    } catch {
      // si no es JSON, dejamos el mensaje genérico
    }
    throw new Error(message);
  }

  return await response.json();
}
