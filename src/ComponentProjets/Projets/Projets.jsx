import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link de react-router-dom
import './Projets.css';

const Projets = () => {
  const projets = [
   
    {
      id: 3,
      titre: 'Nettoyage des caniveaux' ,
      description: 'Un projet pour améliorer les routes principales et secondaires ',
      image: require('../../Images/canivau.jpg'),
    },
   
   
  ];

  return (
    <div className="projets-container">
      <h1>Nos Projets</h1>
      <p>Découvrez les projets en cours et à venir qui transformeront le 4e Arrondissement de Libreville.</p>
      
      <div className="projets-grid">
        {projets.map((projet) => (
          <Link to={`/projet/${projet.id}`} key={projet.id} className="projet-card-link"> {/* Ajouter un lien vers les détails du projet */}
            <div className="projet-card">
              <img src={projet.image} alt={projet.titre} />
              <div className="projet-info">
                <h2>{projet.titre}</h2>
                <p>{projet.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projets;
