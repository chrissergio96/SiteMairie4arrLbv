import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './infotrans.css';
import Declarationmariage from '../Images/Transcription/declarationmariage.jpg'

export default function MediaCard1() {

   const [hoveredImage, setHoveredImage] = useState(null); // État pour stocker l'image survolée
  
    const handleMouseEnter = (image) => {
      setHoveredImage(image); // Afficher l'image en aperçu lors du survol
    };
  
    const handleMouseLeave = () => {
      setHoveredImage(null); // Cacher l'aperçu de l'image quand la souris quitte la carte
    };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh', // Hauteur de la vue pour centrer verticalement
        padding: 2,
        boxSizing: 'border-box', // Assure que tout est bien contenu dans la fenêtre
      }}
    >
      <Card className='hut'
        sx={{
          width: 1000, // Largeur augmentée
          boxShadow: 3, // Ajout d'une ombre pour un effet esthétique
          borderRadius: 2, // Coins légèrement arrondis
          padding:2,
        }}
      >
        {/* Agrandissement de l'image */}
       <div className='Carg' onMouseEnter={() => handleMouseEnter(Declarationmariage)} onMouseLeave={handleMouseLeave}>

       </div>
        <CardContent>
          {/* Agrandissement du titre */}

          <Typography
            gutterBottom
            variant="h3" // Taille de titre plus grande
            component="div"
            sx={{
              fontWeight: 'bold', // Rend le titre plus visible
              fontSize:'20px',
              color:'#1B3D71'
            }}
          >
            PROCESSUS DE DÉCLARATION DE MARIAGE

          </Typography>
          {/* Agrandissement du texte de contenu */}
          <Typography
            variant="p" // Texte plus grand
            sx={{
              color: 'text.secondary',
              lineHeight: 1, // Améliore la lisibilité
              fontSize:'15px',
              fontWeight:'bold'
            }}
          >
           Vous souhaitez vous mariez ?  <br />
            Suivez ces étapes simples pour une procédure rapide à la Mairie du
            4e Arrondissement.
          </Typography>
        </CardContent>
        <CardActions>
        <a href="/CONSTITUTION%20DU%20DOSSIER%20DE%20MARIAGE2.pdf" target="_blank" rel="noopener noreferrer" download>
         <button id='btu' className='telechargebtn'>Voir plus</button>
        </a>
        </CardActions>
      </Card>
       {/* Aperçu de l'image survolée */}
       {hoveredImage && (
        <div className="image-preview">
          <img src={hoveredImage} alt="Aperçu de l'image" />
        </div>
      )}
    </Box>
  );
}
