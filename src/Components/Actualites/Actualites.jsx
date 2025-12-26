// src/Components/Actualites/Actualites.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Actualites.css";

const sampleData = [
  {
    id: "1",
    titre: "La Mairie du bonheur a besoin d'une plage propre,  et ensemble....on aura notre plage propre...",
    imageUrl: "../",
  },
  {
    id: "2",
    titre: "Port-Gentil : Houangni Ambouroue élu maire avec 100% des voix",
    imageUrl: "https://gabonactu.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-29-at-11.29.36.jpeg"
  },
  {
    id: "3",
    titre: "Communication présidentielle : Au cœur de l’agenda d’Oligui Nguéma",
    imageUrl: "https://gabonactu.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-29-at-11.29.36.jpeg"
  },
  {
    id: "4",
    titre: "Activités culturelles",
    imageUrl: "https://gabonactu.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-29-at-11.29.36.jpeg"
  }
];

const Actualites = () => {
  const navigate = useNavigate();

  return (
    <div className="actualites-container">
      <h2 className="actualites-title">A la Une</h2>

      <div className="actualites-carousel">
        {sampleData.map((actu) => (
          <div
            key={actu.id}
            className="actualite-card"
            onClick={() => navigate(`/actualites/${actu.id}`)}
          >
            <img src={actu.imageUrl} alt={actu.titre} className="actualite-image" />
            <p className="actualite-titre">{actu.titre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actualites;
