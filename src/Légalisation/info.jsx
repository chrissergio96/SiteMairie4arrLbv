import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import imageActe from '../Images/actes de Naissances  2..............jpg';

export default function MediaCard() {
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
      <Card
        sx={{
          width: 1000, // Largeur augmentée
          height: 530, // Hauteur augmentée
          boxShadow: 3, // Ajout d'une ombre pour un effet esthétique
          borderRadius: 2, // Coins légèrement arrondis
          padding:3,
        }}
      >
        {/* Agrandissement de l'image */}
        <CardMedia
          sx={{
            height: 280, // Augmente la hauteur de l'image
            backgroundSize: 'cover', // Ajuste l'image pour qu'elle couvre l'espace
          }}
          image={imageActe}
        />
        <CardContent>
          {/* Agrandissement du titre */}
          <Typography
            gutterBottom
            variant="h3" // Taille de titre plus grande
            component="div"
            sx={{
              fontWeight: 'bold', // Rend le titre plus visible
              fontSize:'20px'
            }}
          >
            LEGALISATION : ACTE DE NAISSANCE
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
            Vous avez un acte de naissance à légaliser ?
            Suivez ces étapes simples pour une procédure rapide à la Mairie du
            4e Arrondissement.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="20px">Voir plus</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
