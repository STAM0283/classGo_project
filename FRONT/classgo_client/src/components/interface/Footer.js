import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const handleEmail = (event) => {
    const { value } = event.target;
  };
  return (
    <div>
      <p>Inscrivez vous pour recevoir nos differentes offres, promotions et avantages client</p>
      <input type="text" id="newLatter" placeholder="Entrez votre adresse email" value={email} />
      <button type="button">INSCRIVEZ-VOUS</button>
    </div>
  );
};

export default Footer;
