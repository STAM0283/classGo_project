import React from 'react';
import './user.css';

const ShoopingCart = () => {
  const name = 'test';
  console.log(name);
  return (
    <div className="shooping-container">
      <div className="titleShooping">
        <h3>Mon panier</h3>
      </div>
      <div className="wrapperMenu">
        <div>
          <h3>Article</h3>
        </div>
        <div className="wrapperInfo">
          <h3>Identifiant</h3>
          <h3>Date</h3>
          <h3>Quantité</h3>
          <h3>Prix Unitaire</h3>
          <h3>Prix Total</h3>
          <h3>Suppr</h3>
        </div>
      </div>
      {/* <div className="itemDetails">

      </div> */}
    </div>
  );
};

export default ShoopingCart;
