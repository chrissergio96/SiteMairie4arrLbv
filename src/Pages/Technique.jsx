import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components-tech/Header/Headertech';
import Text from '../Components-tech/Text/Text';
import Profil from '../Components-tech/Profil/Profil';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';

function Technique() {

  return (
    <div>
      <Navbar/>
      <Header/>
      <Text/>
      <Profil/>
      <BackButtonUrb/>
      <Contact/>
      <Footer/>
      <Footerbas/>
    </div>
  );
}

export default Technique;