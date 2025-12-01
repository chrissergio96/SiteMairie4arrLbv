import React from 'react';
import './Contacte.css';

const emergencyNumbers = [
  {
    category: 'Sapeurs-Pompiers',
    numbers: [
      { label: 'Tel', number: '011.56.27.75' },
      { label: 'Tel', number: '077.63.93.63' },
      { label: 'Tel', number: '062.93.98.48' },
    ]
  },
  {
    category: 'Commissariat Central',
    numbers: [
      { label: 'N* Urgence', number: '011 72 00 37' },
      { label: 'B.P', number: '571' }

    ]
  },
  {
    category: 'Samu Social',
    numbers: [
      { label: 'Numéro d\'urgence', number: '1428' }
    ]
  },
  {
    category: 'S.e.e.g',
    numbers: [
      { label: 'Tel', number: '8586' },
      { label: 'Intervention', number: '011.76.73.73' }
    ]
  }
];

const Contacte = () => {
  return (
    <div className='mere-contacte'>
      <h1>Numéros utiles</h1>
      <div className="contacte-container">
        {emergencyNumbers.map((service, index) => (
          <div key={index} className='service-card'>
            <h2>{service.category}</h2>
            {service.numbers.map((num, i) => (
              <p key={i}><strong>{num.label}: {num.number}</strong>{num.extra ? num.extra : ''}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacte;
