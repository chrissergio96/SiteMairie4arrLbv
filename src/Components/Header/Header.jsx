import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from "react-router-dom"; // Importation de useNavigate
import React, {  useState } from 'react';
import Fuse from 'fuse.js'; // Importation de Fuse.js
import backgroundVideo from './video.mp4'; // Importez votre fichier audio
import AdsSidebar from '../AdsSidebar/AdsSidebar';


// Images de la bannière défilante
// const images = [
//     require('../../Images/Ville/ancien port p.jpg'),
//     require('../../Images/Ville/lephare.jpg'),
//     require('../../Images/Ville/chateau.jpg'),
//     require('../../Images/Ville/ancien port bien.png'),
//     require('../../Images/Ville/MARINA.jpg'),
//     require('../../Images/Ville/aeroport.jpg'),
//     require('../../Images/Ville/ancienportpog.jpg'),
//     require('../../Images/Ville/leommba carref.jpg'),
//     require('../../Images/Ville/louissaint.jpg'),
//     require('../../Images/Ville/bgd soir.jpg'),
//     require('../../Images/Ville/mariecentrale.webp'),
//     require('../../Images/Ville/ancien port bien.png'),
//     require('../../Images/Ville/la bgd nuit.jpg'),
// ];

// Suggestions actuelles + mots-clés supplémentaires pour la recherche
const suggestions = [
    { name: 'Service État Civil', path: '/Etatcivil' },
    { name: 'Service Technique', path: '/technique' },
    { name: 'Service Social', path: '/Servicesocial' },
    { name: 'Urbanisme', path: '/urbanisme' },
    { name: 'Agenda', path: '/agenda' },
    { name: 'Chefs de Quartiers et CDQ', path: '/cdq' },
    { name: 'Mariage', path: '/mariage' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Contact', path: '/contact' },
    // Ajoutez plus de suggestions ici si nécessaire
];

// Mots-clés supplémentaires pour une meilleure recherche
const keywords = [
    { name: 'Mairie', path: '/mairie' },
    { name: 'Maire', path: '/maire' },
    { name: 'Service Urbanisme', path: '/urbanisme' },
    { name: 'Demande d\'audience', path: '/audience' },
    { name: 'Services Techniques', path: '/technique' },
    { name: 'État Civil', path: '/Etatcivil' },
    // Ajoutez autant de mots-clés pertinents que nécessaire
];

// Mélanger les suggestions et les mots-clés
const fullSuggestions = [...suggestions, ...keywords];

// Configuration de Fuse.js
const fuse = new Fuse(fullSuggestions, {
    keys: ['name'],
    threshold: 0.3, // Ajuster pour plus ou moins de tolérance
});

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const navigate = useNavigate(); // Initialiser useNavigate

  

    // Gestion de la recherche
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        filterSuggestions(value);
    };

    // Filtrage des suggestions avec Fuse.js
    const filterSuggestions = (value) => {
        if (value.length > 0) {
            const result = fuse.search(value); // Recherche floue
            setFilteredSuggestions(result.map(res => res.item)); // Extraction des éléments correspondants
        } else {
            setFilteredSuggestions([]);
        }
    };

    // Gérer le clic sur l'icône de la loupe
    const handleIconClick = () => {
        if (filteredSuggestions.length > 0) {
            // Rediriger vers la première suggestion trouvée
            const firstSuggestion = filteredSuggestions[0];
            navigate(firstSuggestion.path); // Utilisation de navigate pour rediriger
        } else if (searchTerm.length > 0) {
            alert('Aucun élément correspondant'); // Affiche un message si aucun résultat
        }
    };
    // style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    return (
        <div className='mairiea'>

    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="video-background"
    >
      <source src={backgroundVideo} type="video/mp4" />
    </video>
            <div className='mere-searcha'>
                <div className="search-containera">
                    <input 
                        type="text" 
                        placeholder="Rechercher..." 
                        className="search-inputa" 
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <SearchIcon className="search-icon" onClick={handleIconClick} style={{ cursor: 'pointer' }} />
                </div>

                {/* Affichage des suggestions */}
                {filteredSuggestions.length > 0 ? (
                    <ul className="suggestions-list">
                        {filteredSuggestions.map((suggestion, index) => (
                            <li key={index}>
                                <Link to={suggestion.path} className="suggestion-item">
                                    {suggestion.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : searchTerm.length > 0 ? (
                    <p className="no-suggestions">Aucun élément correspondant</p>
                ) : null}
            </div>

            <div className="buttons-wrapper">

  {/* BOUTON SERVICES */}
  <div className="dropdown">
    <button className="main-button">
      <span className="icon">📂</span> Services
    </button>

    <div className="dropdown-menu">
      <Link to="/Etatcivil">Service État Civil</Link>
      <Link to="/technique">Service Technique</Link>
      <Link to="/Servicesocial">Service Social</Link>
      <Link to="/urbanisme">Urbanisme</Link>
      <Link to="/agenda">Agenda</Link>
      <Link to="/cdq">Votre Mairie</Link>
      <Link to="/mariage">Mariage</Link>
      <Link to="/galerie">Galerie</Link>
    </div>
  </div>
  {/* Bouton d'audience */}
            <a className="audience-button" href="https://calendly.com/safou-christiansergio/30min" target="_blank" rel="noopener noreferrer" className="audience-button">
                Demande d'audience
            </a>
</div>
         <AdsSidebar/>

        </div>
    );
};

export default Header;
