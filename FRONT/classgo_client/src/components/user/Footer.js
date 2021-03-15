import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const history = useHistory();
  const myStoreDirection = () => {
    history.push('/myStore');
  };
  const aboutDirection = () => {
    history.push('/about');
  };
  const contactDirection = () => {
    history.push('/contact');
  };
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
    <div className="footer">
      <p className="paragraphe">Inscrivez vous pour recevoir nos differentes offres, promotions et avantages clients </p>
      <form onSubmit={formSubmitEmail}>
        <input type="text" id="newsLetters" value={email} placeholder="Entrez votre adresse email" onChange={handleEmail} />
        <button type="submit">INSCRIVEZ-VOUS</button>
        <p className={emailValide}>
          Merci pour votre souscriptiont à notre newsletter ClassGo-Infos
        </p>
        <p className={emailValide2}>Adresse e-mail non valide</p>
      </form>
      <nav className="footerMenu">
        <ul>
          <li>FAQ</li>
          <li aria-hidden onClick={aboutDirection}>A PROPOS</li>
          <li>LIVRAISON</li>
          <li aria-hidden onClick={myStoreDirection}>MAGASINS</li>
          <li aria-hidden onClick={contactDirection}>CONTACT</li>
          <li>AIDE</li>
          <li>MENTIONS LEGALES</li>
        </ul>
      </nav>
      <nav className="socialMedias">
        <ul>
          <li>
            <i className="fab fa-facebook-square" />
          </li>
          <li>
            <i className="fab fa-instagram-square" />
          </li>
          <li>
            <i className="fab fa-youtube-square" />
          </li>
          <li>
            <i className="fab fa-twitter-square" />
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Footer;
