// src/Admin/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      {/* ------- SIDEBAR ------- */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Admin</h2>

        <nav className="sidebar-menu">
          <Link to="/admin/actualites" className="menu-item">📰 Actualités</Link>
          <Link to="/admin/breakingnews/new" className="menu-item">⚡ Breaking News</Link>
          <Link to="/admin/services" className="menu-item">📌 Services</Link>
          <Link to="/admin/audience" className="menu-item">📅 Demandes d'Audience</Link>
          <Link to="/admin/galerie" className="menu-item">🖼️ Galerie Photos</Link>
        </nav>

        <button className="logout-btn">Déconnexion</button>
      </aside>

      {/* ------- MAIN CONTENT ------- */}
      <main className="dashboard-content">
        <h1>Bienvenue sur le panneau d'administration</h1>
        <p>Sélectionnez un module dans le menu à gauche.</p>
      </main>
    </div>
  );
};

export default Dashboard;
