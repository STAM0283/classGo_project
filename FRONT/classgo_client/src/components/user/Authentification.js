import React, { useState } from 'react';
import axios from 'axios';

const Authentification = () => {
  const [displayEyeSlash, setDisplayEyeSlash] = useState('none');
  const [displayEye, setDisplayEye] = useState('inline');
  const [type, setType] = useState('password');
  const [sex, setSex] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValide, setEmailValide] = useState('none');
  const handleSexe = (event) => {
    setSex(event.target.value);
  };
  const handleName = (event) => {
    setUserName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleDisplayEye = () => {
    setDisplayEye('none');
    setType('text');
    setDisplayEyeSlash('inline');
  };
  const handleDisplayEyeSlash = () => {
    setDisplayEye('inline');
    setType('password');
    setDisplayEyeSlash('none');
  };
  function validateEmail(adressEmail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(adressEmail).toLowerCase());
  }
  const submiteForm = (event) => {
    event.preventDefault();
    const data = {
      sex,
      username,
      email,
      password,
    };
    if (validateEmail(email)) {
      axios.post('http://localhost:5000/signUp', data).then(() => {
        validateEmail(email);
        setSex('');
        setUserName('');
        setEmail('');
        setPassword('');
      }).catch((err) => {
        throw err;
      });
    } else {
      setEmailValide('block');
      setTimeout(() => {
        setEmailValide('none');
      }, 5000);
    }
  };
  return (
    <div className="authentification">
      <h3>Mes informations</h3>
      <div style={{ width: '25%' }}>
        <label>
          Civilité
          <i className="fas fa-star" />
        </label>
      </div>
      <form onSubmit={submiteForm}>
        <div className="civilite">
          <input
            type="radio"
            name="sex"
            id="women"
            value="women"
            onClick={handleSexe}
          />
          <label htmlFor="women">Madame</label>
          <input
            type="radio"
            name="sex"
            id="man"
            walue="man"
            onClick={handleSexe}
          />
          <label htmlFor="man">Monsieur</label>
        </div>
        <br />
        <div className="userInfo">
          <div>
            <label htmlFor="text">
              Nom
              <i className="fas fa-star" />
            </label>
          </div>
          <br />
          <input
            type="text"
            id="text"
            placeholder="Entrer votre nom"
            onChange={handleName}
            value={username}
          />
          <br />
          <div>
            <label htmlFor="email">
              Adresse mail
              <i className="fas fa-star" />
            </label>
          </div>
          <br />
          <input
            type="text"
            id="email"
            placeholder="Entrer votre adress email"
            onChange={handleEmail}
            value={email}
          />
          <br />
          <span style={{ display: `${emailValide}` }}>Cette émail n&#39;est pas valide</span>
          <br />
          <div>
            <label htmlFor="password">
              Mot de passe
              <i className="fas fa-star" />
            </label>
          </div>
          <br />
          <div className="passAuthentification">
            <input type={type} id="password" placeholder="Entrer votre mot de passe" onChange={handlePassword} value={password} minLength="8" />
            <i className="fas fa-eye" aria-hidden style={{ display: `${displayEye}` }} onClick={handleDisplayEye} />
            <i className="fas fa-eye-slash" aria-hidden style={{ display: `${displayEyeSlash}` }} onClick={handleDisplayEyeSlash} />
          </div>
        </div>
        <div>
          <button type="submit">Valider</button>
        </div>
      </form>

    </div>
  );
};

export default Authentification;
