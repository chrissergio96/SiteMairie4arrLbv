import React from 'react';
import './Text.css'; // Assure-toi d'importer le fichier CSS si nécessaire

function Text() {
  return (
    <div className="textgal">
      <div className="outside-text">
        <p>
          Bienvenue dans la Galerie du 4e Arrondissement de Libreville.
          Découvrez à travers cette galerie les moments forts de la vie de notre arrondissement.
          Vous y trouverez des photos et des vidéos illustrant les événements, les projets, et les initiatives qui façonnent notre communauté.
          Du développement des infrastructures aux célébrations locales, chaque image témoigne de notre engagement à améliorer la qualité de vie de nos concitoyens.
          Parcourez cette galerie pour voir en images les actions et l'évolution de votre mairie au service de tous.
        </p>
      </div>
    </div>
  );
}

export default Text;
