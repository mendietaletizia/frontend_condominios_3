// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";


import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;
  // Secciones filtradas según el rol
  const secciones = [
    {
      nombre: "Autenticación & Seguridad",
      key: "autenticacion_seguridad",
      icon: "🔒",
      onClick: () => navigate("/autenticacion"),
      visible: true,
    },
    {
      nombre: "Mantenimiento",
      key: "mantenimiento",
      icon: "🛠️",
      onClick: () => alert("Módulo en desarrollo"),
      visible: role === "administrador",
    },
    {
      nombre: "Finanzas & Pagos",
      key: "finanzas_pagos",
      icon: "💰",
      onClick: () => alert("Módulo en desarrollo"),
      visible: role === "administrador" || role === "residente",
    },
    {
      nombre: "Usuarios & Unidades",
      key: "usuarios_unidades",
      icon: "👥",
      onClick: () => navigate("/usuarios_unidades"),
      visible: true,
    },
    {
      nombre: "Comunicación",
      key: "comunicacion",
      icon: "💬",
      onClick: () => alert("Módulo en desarrollo"),
      visible: true,
    },
  ].filter(sec => sec.visible);

  // Simulación de datos para widgets
  const pagos = 85;
  const mantenimientos = [20, 40, 30, 60, 50, 10, 5];
  const anuncios = [
    { id: 1, titulo: "Pago de expensas vence el 30/09" },
    { id: 2, titulo: "Reunión de consorcio el 25/09" },
  ];

  return (
    <div className="dashboard" style={{ display: "flex", minHeight: '100vh', background: '#f8fafc' }}>
      <Sidebar />
      <div className="dashboard-content" style={{ flex: 1, padding: 32 }}>
        <h1 style={{ marginBottom: 24 }}>Condominium Management</h1>
        <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
          {secciones.map((sec) => (
            <div
              key={sec.key}
              onClick={sec.onClick}
              style={{
                minWidth: 160,
                minHeight: 80,
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 2px 8px #0001",
                padding: 18,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 500,
                fontSize: 17,
                transition: "background 0.2s",
              }}
              onMouseOver={e => e.currentTarget.style.background = '#e0e7ff'}
              onMouseOut={e => e.currentTarget.style.background = '#fff'}
            >
              <span style={{ fontSize: 28 }}>{sec.icon}</span>
              {sec.nombre}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {/* Widget: Pagos de residentes */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 24, minWidth: 260, flex: 1 }}>
            <h3 style={{ marginTop: 0 }}>Pagos de residentes</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <svg width="60" height="60">
                <circle cx="30" cy="30" r="26" fill="#e0e7ff" />
                <circle cx="30" cy="30" r="26" fill="none" stroke="#6366f1" strokeWidth="6" strokeDasharray={2 * Math.PI * 26} strokeDashoffset={2 * Math.PI * 26 * (1 - pagos / 100)} />
                <text x="30" y="36" textAnchor="middle" fontSize="18" fill="#222">{pagos}%</text>
              </svg>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>{pagos}% Completado</div>
                <div style={{ color: '#555' }}>Pagos activos y pendientes</div>
              </div>
            </div>
          </div>
          {/* Widget: Solicitudes de mantenimiento */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 24, minWidth: 320, flex: 2 }}>
            <h3 style={{ marginTop: 0 }}>Solicitudes de mantenimiento</h3>
            <svg width="220" height="80">
              {mantenimientos.map((val, i) => (
                <rect key={i} x={20 + i * 28} y={80 - val} width="18" height={val} fill="#6366f1" rx="4" />
              ))}
            </svg>
            <div style={{ color: '#555', fontSize: 15 }}>Activas y pendientes</div>
          </div>
          {/* Widget: Anuncios recientes */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: 24, minWidth: 260, flex: 1 }}>
            <h3 style={{ marginTop: 0 }}>Anuncios recientes</h3>
            <ul style={{ paddingLeft: 18 }}>
              {anuncios.map(a => (
                <li key={a.id} style={{ marginBottom: 8 }}>{a.titulo}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
