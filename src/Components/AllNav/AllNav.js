// src/components/AllNav.js
import React from 'react';
import './AllNav.css'; // CSS personnalisé
import Logo from './logo mairie 4arr.png';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react'; // Si tu veux une icône animée (optionnel)

const AllNav = () => {
  return (
    <div className="allnav-container">
      {/* Logo */}
      <div className="mere-allnav">
        <Link to="/">
        <img src={Logo} alt="Logo" className="allnav-logo" />
        </Link>
      </div> 

      {/* Texte animé */}
      <div className="allnav-message-box">
        <div className="allnav-marquee">
          <AlertCircle className="allnav-icon" size={18} />
          <span className="blink"></span> 📢 Bienvenue sur le site officiel de la Mairie du 4e Arrondissement de Libreville.
        </div>
      </div>
    </div>
  );
};

export default AllNav;
