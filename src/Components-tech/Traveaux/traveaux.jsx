import React from "react";
import Slider from "react-slick";
import './Traveaux.css';

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="boss-div">
      <h3 className="travauxx">TRAVAUX EN COURS</h3>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img 
          src={require('../../Images/caniveau.jpg')} 
           alt="" /> 
         </div>
       
        <div>
          <img  src={require('../../Images/technique 2.jpg')}  alt="" />
        </div>

        <div>
       <img src={require('../../Images/servia.jpg')}  alt="" />
        </div>

        <div>
          <img  src={require('../../Images/technique 3.jpg')} alt="" />
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default CenterMode; 
