import React from 'react';
import './Contact.css';
import AgendaImage from '../../Images/Agenda.png';
import numeroImage from '../../Images/numero.jpeg';
import CDQImage from '../../Images/CDQ.jpg';
import galerieImage from '../../Images/galerie.jpeg';
import MARIAGEImage from '../../Images/MARIAGE.jpg';

const Contactcdq = () => {
    return (
        <div className="contact-containeral">
            
            <div className='container1al'>
            
            <div className='barreal'>
            <div className='trait3sal'></div>
            <div className='trait4sal'></div>
                <h1>CONSULTEZ AUSSI</h1>
            </div>
            
            
            </div>
            <div className="cards1-containeral">
                <div className="card1al">
                    <img src={AgendaImage} alt="Agenda" />
                    <h2>Agenda</h2>
                </div>
                <div className="card1al">
                    
                    <img src={numeroImage} alt="numero" />
                    <h2>Numeros utiles </h2>
                    
                </div>
                <div className="card1al">
                    <img src={galerieImage} alt="galerie" />
                    <h2>Galerie</h2>
                </div>
                <div className="card1al">
                    <img src={MARIAGEImage} alt="MARIAGE" />
                    <h2>Mariage</h2>
                </div>
                <div className="card1al">
                    <img src={CDQImage} alt="CDQ" />
                    <h2>Votre Mairie</h2>
                </div>
            </div>
        </div>
    );
};

export default Contactcdq;
