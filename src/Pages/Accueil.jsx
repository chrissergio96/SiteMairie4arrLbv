import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import AllNav from '../Components/AllNav/AllNav'
import Header from '../Components/Header/Header';
import Actualites from '../Components/Actualites/Actualites';
import MotMaire from '../Components/MotMaire/MotMaire';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import BreakingNews from '../Components/BreakingNews/BreakingNews'

function Accueil() {
  return (
    <div>
            <AllNav/>
     <Navbar/>  
     <BreakingNews/>
     <Header/>
     <Actualites/>
     <MotMaire/>
     <Contact/>
     <Footer/>
     <Footerbas/>
    </div>
    
  );
}

export default Accueil;
