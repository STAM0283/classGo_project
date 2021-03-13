import React, { useState } from 'react';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [emailValide, setEmailValide] = useState('none');
  const [emailValide2, setEmailValide2] = useState('none');
  const handleEmail = (e) => {
    setEmail(e.target.value.toLowerCase());
  };
  function validateEmail(adressEmail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(adressEmail).toLowerCase());
  }
  const formSubmitEmail = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      axios.post(`http://localhost:5000/newsletters?email=${email}`).then(() => {
        setEmail('');
        setEmailValide('block');
        setTimeout(() => {
          setEmailValide('none');
        }, 5000);
        setEmailValide2('none');
      }).catch(() => {
        console.log('message not sent');
      });
    } else {
      setEmailValide2('block');
      setEmailValide('none');
    }
  };
  return (
    <div>
      <p>Inscrivez vous pour recevoir nos differentes offres, promotions et avantages clients </p>
      <form onSubmit={formSubmitEmail}>
        <input type="text" id="newsLetters" value={email} placeholder="Entrez votre adresse email" onChange={handleEmail} />
        <p className={emailValide}>
          Merci pour votre souscriptiont à notre newsletter ClassGo-Infos
        </p>
        <p className={emailValide2}>Adresse e-mail non valide</p>
        <button type="submit">INSCRIVEZ-VOUS</button>
      </form>
    </div>
  );
};
export default Footer;
