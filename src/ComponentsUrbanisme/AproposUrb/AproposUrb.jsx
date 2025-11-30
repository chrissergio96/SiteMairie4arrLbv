import React from 'react';
import './AproposUrb.css';

const AproposUrb= () => {
    return (
        <div className='merev'>

        <div className='containerA'>
            
            <div className='barres'>
            <div className='trait1'></div>
            <div className='trait2'></div>
            </div>
            <div className='titreurbu'>
                <h1 style={{color:'#1B3D71'}}>A PROPOS</h1>
            </div>
            <div className='ligne5'>
            </div>
            </div>
            
           <div className='texteurb'>
            <p>
Le service urbanisme de la Mairie accueille et conseille les particuliers et les constructeurs qui veulent construire ou effectuer des travaux dans la ville.
Il gère les autorisations d'occupation des sols : permis de construire, déclaration de travaux, permis de lotir, certificat d'urbanisme, etc.</p>
           </div>
    </div>
    
    );
};

export default AproposUrb;
