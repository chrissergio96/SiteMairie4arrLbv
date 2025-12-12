import React from 'react';
import './Footer.css';
import logo from '../../Images/logo maire 14.svg'; // Remplacez par le chemin de votre logo
import log from '../../Images/whatsapp.svg'; // Remplacez par le chemin de votre logo
import lo from '../../Images/facebook.svg'; // Remplacez par le chemin de votre logo
import {Link} from 'react-router-dom'

const Footer = () => {
  return ( 
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
         <img src={logo} alt="Logo Mairie" />
        </div>

        <div className="footer-middle">
          <h3>Horaires</h3>
          <ul>
            <li><strong>Lundi à Vendredi</strong> : </li>
            <li><strong></strong> 7h30 - 15h30</li>
            

          </ul>
          <p><strong>Attention</strong> : L’accueil physique dans le hall administratif se fait uniquement sur rendez-vous.</p>
          <button className="footer-button">Voir les horaires</button>
        </div>

        <div className="footer-links">
          <h3>Accès rapide</h3>
          <ul>
            <Link to='/etatcivil'><li>Service Etat-Civil</li></Link>
            <Link to='/servicesocial'><li>Service Social</li></Link>
            <Link to='/technique'><li>Service Technique</li></Link>
            <Link to='/urbanisme'><li>Urbanisme</li></Link>
            <Link to='/agenda'><li>Agenda</li></Link>
            <Link to='/mairie'><li>Votre Mairie</li></Link>
            <Link to='/hubmunicipal'><li>Hub Municipal</li></Link>
            <Link to='/galerie'><li>Galerie</li></Link>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Je m'informe</h3>
          <div className="social-icons">

          <a href="https://www.facebook.com/Mairie2eArrondissementPortGentil">
          <img src={log} alt="whatsapp" /></a>
          <a href="https://www.facebook.com/Mairie4emeLBV?locale=fr_FR">
          <img src={lo} alt="facebook" /></a>

          </div>
          <input type="email" placeholder="Adresse e-mail *" className="email-input" />
          <div className="footer-checkbox">
            <input type="checkbox" />
            <label>J'accepte de recevoir vos e-mails et confirme avoir pris connaissance de votre politique de confidentialité et mentions légales.</label>
          </div>
          <button className="subscribe-button">Je m'abonne !</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
