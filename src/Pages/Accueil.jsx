import React from 'react';
import './Accueil.css';

import Navbar from '../Components/Navbar/Navbar';
import AllNav from '../Components/AllNav/AllNav';
import Actualites from '../Components/Actualites/Actualites'
import Header from '../Components/Header/Header';
import MotMaire from '../Components/MotMaire/MotMaire';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import BreakingNews from '../Components/BreakingNews/BreakingNews';
import PubDroite from '../Components/PubDroite/PubDroite';

function Accueil() { 
  return ( 
    <div className="accueil">
      <AllNav />
      <Navbar />
      <BreakingNews />

      <div className="accueil-layout">
        <div className="accueil-main">
          <Header />
          <Actualites />
          <MotMaire />
          <Contact />
        </div>

        <div className="accueil-pubs">
          <PubDroite />
        </div>
      </div>

      <Footer />
      <Footerbas />
    </div>
  );
}

export default Accueil;
