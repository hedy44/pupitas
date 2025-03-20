import React from 'react';
import '../styles/Banners.css';
import boy from '../assets/boy.png';
import girl from '../assets/girl.png';
import baby from '../assets/baby.png';

function Banners() {
  return (
    <div className="banners">
      <div className="banner">
        <img src={boy} alt="Categoria Menino" />
        <div className="banner-content">
          <h3>Menino</h3>
          <button className="btn-banner">Ver Menino</button>
        </div>
      </div>

      <div className="banner">
        <img src={girl} alt="Categoria Menina" />
        <div className="banner-content">
          <h3>Menina</h3>
          <button className="btn-banner">Ver Menina</button>
        </div>
      </div>

      <div className="banner">
        <img src={baby} alt="Categoria Bebê" />
        <div className="banner-content">
          <h3>Bebê</h3>
          <button className="btn-banner">Ver Bebê</button>
        </div>
      </div>
    </div>
  );
}

export default Banners;