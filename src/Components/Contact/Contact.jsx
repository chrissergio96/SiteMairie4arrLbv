import React from 'react';
import './Contact.css';
import {Link} from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contact-containeral">
            
            <div className='container1al'>
            
            <div className='barreal'>
            <div className='trait3sal'></div>
            <div className='trait4sal'></div>
                <h1>CONSULTEZ AUSSI</h1>
            </div>
            
            
            </div>
            <div className="cards1-containeral">

                <div className="card1al">
                <Link to='/agenda'>
                    <div className='mereimg'></div>
                    <h2>Agenda</h2>
                </Link>
                </div>

                <div className="card1al">
                <Link to='/numerosutiles'>
                <div className='mereimg1'></div>
                    <h2>Numeros utiles </h2>
                </Link>
                </div>

                <div className="card1al">
                <Link to='/galerie'>
                <div className='mereimg2'></div>
                    <h2>Galerie</h2>
                </Link>
                </div>

                <div className="card1al">
                <Link to='/mariage'>
                <div className='mereimg3'></div>
                    <h2>Mariage</h2>
                </Link>
                </div>

                <div className="card1al">
                <Link to='/cdq'>
                <div className='mereimg4'></div>
                    <h2>Votre Mairie</h2>
                </Link>
                </div>

            </div>
        </div>
    );
};

export default Contact;
