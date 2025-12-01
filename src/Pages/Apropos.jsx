import React from 'react';
import Aproposde from '../ComponentApropos/Aproposde/Aproposde';
import Navbar from '../Components/Navbar/Navbar';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';

function Apropos() {
    return (
      <div>
        <Navbar/>
        <Aproposde/><br/>
        <BackButtonUrb/>
        <Contact/>
        <Footer/>
        <Footerbas/>
      </div>
      
    );
  }
  
  export default Apropos;
  