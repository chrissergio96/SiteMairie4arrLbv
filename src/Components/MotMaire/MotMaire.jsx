import React from 'react';
import './MotMaire.css';
import MaireImage from './images maire 4e arr lbv.jpeg'; // Assurez-vous que l'image est dans le bon dossier
import { adjoints } from "../adjointsData";


const MotMaire = () => {
    return (
        <div className="mot-maire-container">
         <section className="maire-section">
  <div className="maire-wrapper">

    {/* Photo du maire avec bandeau nom/fonction */}
    <div className="maire-photo-wrapper">
      <img src={MaireImage} alt="Maire du 4e Arrondissement" className="maire-photo" />
        <div class="gradient-overlay"></div>

      <div className="maire-overlay">
        <h3 className="maire-nom">Monsieur Nicaise SICKOUT IGUENDJA</h3>
        <p className="maire-fonction">Maire du 4e Arrondissement de Libreville</p>
        <div className="maire-trait-jaune"></div>
      </div>
    </div>

    {/* Texte du maire */}
    <div className="maire-text">
      <h2 className="maire-message-title">Message de bienvenue</h2>
      <p>
        C’est avec un immense plaisir que je vous souhaite la bienvenue sur
        le portail numérique de notre arrondissement. Cette plateforme
        moderne a été conçue pour rapprocher l’administration des citoyens.
      </p>
      <p>
        Grâce à ce site, vous pouvez accéder facilement aux informations,
        services municipaux, actualités et démarches administratives.
      </p>
      <p className="maire-slogan">
        “Un 4ᵉ arrondissement dynamique au service de tous.”
      </p>
    </div>

  </div>
</section>


             <section className="adjoints-section">
  <h2>Nos Adjoints au Maire</h2>
  <p>Une équipe dévouée au service des citoyens</p>

  <div className="adjoints-grid">
    {adjoints.map((person, index) => (
      <div className="adjoint-card" key={index}>
        <img src={person.image} alt={person.name} />

        <div className="adjoint-card-content">
          <h3>{person.name}</h3>
          <p className="role">{person.role}</p>
          <p className="mission">{person.mission}</p>
        </div>
      </div>
    ))}
  </div>
</section>


        </div>
    );
}

export default MotMaire;
