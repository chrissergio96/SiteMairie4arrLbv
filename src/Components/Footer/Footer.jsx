import React, { useState } from 'react';
import './Footer.css';
import logo from './logo mairie 4arr.png'; 
import log from '../../Images/whatsapp.svg'; 
import lo from '../../Images/facebook.svg'; 
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Importation d'EmailJS

const Footer = () => {
  const [email, setEmail] = useState(""); 
  const [isChecked, setIsChecked] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isChecked) {
      alert("Vous devez accepter les conditions pour vous abonner.");
      return;
    }

    if (!email) {
      alert("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    emailjs
    .send("service_1p0onh9", "template_s6j0aw6", {
      to_email: "mairie2pog@gmail.com",  // L'adresse de la mairie
      from_email: email,                 // Utiliser l'adresse e-mail de l'utilisateur comme expéditeur
      subject: "Nouvelle inscription à la newsletter",
      message: `Un nouvel utilisateur s'est inscrit avec l'adresse e-mail : ${email}`,
    }, "myESIYLJrrS1XkCq-")  // Remplacer par ton User ID EmailJS
    .then(
      (response) => {
        console.log("Email envoyé avec succès", response);
        alert("Merci pour votre abonnement !");
      },
      (error) => {
        console.error("Erreur lors de l'envoi de l'email", error);
        alert("Une erreur est survenue, veuillez réessayer.");
      }
    );
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <Link to='/accueil'>
            <img src={logo} alt="Logo Mairie" />
          </Link>
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
            <Link to='/hubmunicipal'><li>Activités/Evènement à venir</li></Link>
            <Link to='/galerie'><li>Galerie</li></Link>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Je m'informe</h3>
          <div className="social-icons">
            <a href="https://wa.me/24160371461">
              <img src={log} alt="whatsapp" />
            </a>
            <a href="https://www.facebook.com/Mairie4emeLBV?locale=fr_FR">
              <img src={lo} alt="facebook" />
            </a>
          </div>

          {/* Formulaire pour l'email */}
          <form id="subscribe-form" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Adresse e-mail *"
              className="email-input"
              required
            />
            <div className="footer-checkbox">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label>
                J'accepte de recevoir vos e-mails et confirme avoir pris connaissance de votre politique de confidentialité et mentions légales.
              </label>
            </div>
            <button type="submit" className="subscribe-button">
              Je m'abonne !
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
