import React from 'react';
import './MotMaire.css';
import MaireImage from './images maire 4e arr lbv.jpeg'; // Assurez-vous que l'image est dans le bon dossier

const MotMaire = () => {
    return (
        <div className="mot-maire-container">
            <h1 className='motmaire'> Le Mot du Maire </h1>
            <div className="maire-card">
                <div className="maire-text">
                    <h2>Nicaise SICKOUT IGUENDJA</h2> {/* Ajout du nom du maire */}
                    <p>
                        En tant que Maire du 4e Arrondissement de Libreville, je tiens à vous 
                        remercier pour votre engagement au sein de notre communauté. Notre mission 
                        est de continuer à développer les infrastructures et améliorer les services 
                        publics pour tous les citoyens. Ensemble, nous construirons un avenir meilleur 
                        pour notre Arrondissement.
                    </p>
                </div>
                <div className="maire-image">
                    <img src={MaireImage} alt="Maire" />
                </div>
            </div>
        </div>
    );
}

export default MotMaire;
