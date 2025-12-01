import React, { useState } from 'react';
import './Aproposde.css';
import DelegueImage from './images maire 4e arr lbv.jpeg';
import GeneralImage from './1er maire adjoint.jpg';
import CCImage from './2e maire adjoint.jpg';
// import ChristelleImage from '../../Images/Christelle.jpg';
// import JeanneImage from '../../Images/Jeanne.jpg';
// import FranciscaImage from '../../Images/Francisca.jpg'


const Aproposde = () => {

    const [hoveredImage, setHoveredImage] = useState(null); // État pour stocker l'image survolée
  
    const handleMouseEnter = (image) => {
      setHoveredImage(image); // Afficher l'image en aperçu lors du survol
    };
  
    const handleMouseLeave = () => {
      setHoveredImage(null); // Cacher l'aperçu de l'image quand la souris quitte la carte
    };

  return (
    <div className="apropos-container">
      <h1>À propos de la Mairie du 4e Arrondissement de Libreville</h1>
      <section className="apropos-intro">
        <p>
          La Mairie du 4e Arrondissement de Libreville se distingue par un engagement constant envers les citoyens. Nous visons à améliorer la vie des résidents avec des services sociaux, des initiatives de développement, et un engagement pour la transparence.
        </p>
      </section>

      <section className="team-section">
        <h2>Notre Équipe</h2>
        <div className="team-members">

          {/* Maire */}
          <div className="team-member">
          <img src={DelegueImage} alt="Maire" onMouseEnter={() => handleMouseEnter(DelegueImage)} onMouseLeave={handleMouseLeave} />
          <h3>Maire :<br></br><br></br><strong> Nicaise SICKOUT IGUENDJA</strong></h3>
            <p>Responsable de la gestion générale du 4e Arrondissement.</p>
          </div>

          {/* Délégué spécial adjoint */}
          <div className="team-member">
            <img src={GeneralImage} alt="Délégué Spécial Adjoint" onMouseEnter={() => handleMouseEnter(GeneralImage)} onMouseLeave={handleMouseLeave}/>
            <h3>1er Maire Adjoint:<br></br><br></br><strong>MABIKA Patrick Emery </strong>  
               
            </h3>
            <p>Responsable adjoint des affaires sociales et du développement local du 4e Arrondissement.</p>
          </div>

          
          <div className="team-member">
            <img src={CCImage} alt="Cabinet" onMouseEnter={() => handleMouseEnter(CCImage)} onMouseLeave={handleMouseLeave} />
            <h3>2e Maire Adjoint :<br></br><br></br><strong>ONGOUORI TIDJANI Yves Kenny </strong>
            </h3>
            <p>Coordination des activités administratives.</p>
          </div>

          
{/* 
           <div className="team-member">
            <img src={FranciscaImage} alt="Secretaire" onMouseEnter={() => handleMouseEnter(FranciscaImage)} onMouseLeave={handleMouseLeave} />
            <h3>Sécrétaire particulière du Délégué Spécial: <br/><br/><br/> <strong> Joel AYAMINE REMBANGOUET</strong>
            </h3>
            <p>Gestion des tâches administratives, organisationnelles et relationnelles du Délégué Spécial</p>
          </div>

           <div className="team-member">
              <img src={ChristelleImage} alt="Chargé de l'état spécial" onMouseEnter={() => handleMouseEnter(ChristelleImage)} onMouseLeave={handleMouseLeave}/>
              <h3>Chargé de l'Etat Spécial : <br/><br/><br/> <strong> Christelle Pamela MANDZEMBE BILONGO</strong>
            </h3>
            <p>En charge de la gestion des finances de la Mairie.</p>
          </div>

          <div className="team-member">
          <img src={JeanneImage} alt="Chargé du Protocole" onMouseEnter={() => handleMouseEnter(JeanneImage)} onMouseLeave={handleMouseLeave}/>
          <h3>Chargé du Protocole <br/><br/><br/> <strong> Jeanne BOUTSANA </strong>
            </h3>
            <p>En charge de la gestion protocolaire de la Mairie.</p>
          </div>

          <div className="team-member">
            <img src={GeneralImage} alt="Service Etat civil" />
            <h3>Chef de section d'Etat-Civil: <br/><br/><br/> <strong> Joel AYAMINE REMBANGOUET</strong>
            </h3>
            <p>Gestion des actes de naissance, mariage, et décès.</p>
          </div>
              */}

          <div className="team-member">
            <img src="/images/service_social.jpg" alt="Service Social" />
            <h3>Chef de section Service Social <br/><br/><br/> <strong> Jacqueline NZIENGUI Epse NZIENGUI</strong>
            </h3> 
            <p>Soutien aux familles et programmes d’aide sociale.</p>
          </div>


          <div className="team-member">
            <img src="/images/etat_civil.jpg" alt="Assistant Technique" />
            <h3>Assistant Technique <br/><br/><br/> <strong> Jovan MOKOUKOU KONDJA </strong>
            </h3>
            <p>Gestion des infrastructures publiques et des travaux.</p>
          </div>

        </div>
      </section>

      <section className="apropos-valeurs">
        <h2>Nos Valeurs</h2>
        <p>
          Transparence, responsabilité et engagement communautaire sont les principes qui guident chaque décision que nous 
          prenons. Nous travaillons sans relâche pour bâtir une administration proche de ses citoyens et attentive à leurs besoins.
        </p>
      </section>
       {/* Aperçu de l'image survolée */}
       {hoveredImage && (
        <div className="image-preview">
          <img src={hoveredImage} alt="Aperçu de l'image" />
        </div>
      )}
    </div>
  );
};

export default Aproposde;
