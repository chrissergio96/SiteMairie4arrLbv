import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Headercdq from '../Component-cdq/Header-cdq/Headercdq';
import MaMairie from '../Component-cdq/Ma-Mairie/MaMairie'
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Contact from '../Components/Contact/Contact';
import Footerbas from '../Components/Footerbas/Footerbas'
import Footer from '../Components/Footer/Footer';

function Mairie() {
  return (
    <div>
     <Navbar/> 
     <Headercdq/> 
     <MaMairie/>
    
     <BackButtonUrb/>
     <Contact/>
     <Footer/>
     <Footerbas/>
    

    </div>
    
  );
}

export default Mairie;
