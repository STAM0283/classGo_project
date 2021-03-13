import React, { useState } from 'react';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const formSubmitEmail = (event) => {
    event.preventDefault();
    const data = email;
    axios.post('http://localhost:5000/newsletters', data).then((response) => {
      console.log(response.data);
      setEmail('');
      alert('Votre message a été envoyé avec succé !');
    });
  };
  return (
    <div>
      <p>Inscrivez vous pour recevoir nos differentes offres, promotions et avantages client </p>
      <form onSubmit={formSubmitEmail}>
        <input type="text" id="newsLetters" value={email} placeholder="Entrez votre adresse email" onChange={handleEmail} />
        <button type="submit">INSCRIVEZ-VOUS</button>
      </form>
    </div>
  );
};
export default Footer;
