import React from 'react';
import './CarteUrb.css';
import canal from '../../Images/canal.jpg'; // Remplacez par le chemin correct de vos images
import caniveau from './ecologie.jpeg';
import pont from './controle et regulation.jpeg';
import elec from './permis de construire.jpeg';
import canivau from './gestion cadastre.jpeg';
import hj from '../../Images/hj.jpg';
import Captureplanifurb from '../../Images/Capture planif urb.PNG';

const CarteUrb = () => {
    return (
        <div>
             <div className='fonction'>
                <h3>Quelques fonctions que vous pourrez retrouver dans le service urbanisme:</h3>
            </div>
        <div className="carte-container">
            <div className="carte-item">
                <img src={canal} alt="Carte 1" className="carte-image" />
                <h3>1.Suivi des projets d’infrastructures</h3>
            </div>
            <div className="carte-item">
                <img src={caniveau} alt="Carte 2" className="carte-image" />
                <h3>2.Developpement durable et 
                environnemental</h3>
            </div>
            <div className="carte-item">
                <img src={pont} alt="Carte 3" className="carte-image" />
                <h3>3.Controle et régulation des travaux
                publics</h3>
            </div>
            <div className="carte-item">
                <img src={elec} alt="Carte 4" className="carte-image" />
                <h3>4.Gestion des permis de construire et 
                autorisations d’urbanisme</h3>
            </div>
            <div className="carte-item">
                <img src={canivau} alt="Carte 5" className="carte-image" />
                <h3>5.Gestion du cadastre</h3>
            </div>
            <div className="carte-item">
                <img src={hj} alt="Carte 6" className="carte-image" />
                <h3>6.Relations avec les citoyens et 
                les entreprises</h3>
            </div>
            <div className="carte-item">
                <img src={Captureplanifurb} alt="Carte 7" className="carte-image" />
                <h3>7.Planification urbaine</h3>
            </div>
        </div>
        </div>
    );
};

export default CarteUrb;
