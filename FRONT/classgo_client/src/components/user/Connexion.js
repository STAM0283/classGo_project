import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './user.css';

const Connexion = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [displayEyeSlash, setDisplayEyeSlash] = useState('none');
  const [displayEye, setDisplayEye] = useState('inline');
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
  return (
    <div className="connexion">
      <h3>Connexion</h3>
      <div className="emailInput">
        <input type="email" id="email" value={email} onChange={handleEmail} placeholder="Entrer votre adress email" />
        <i className="fas fa-at" />
      </div>
      <div className="passwordInput">
        <input type={type} id="password" value={password} onChange={handlePassword} placeholder="Entrez votre mot de passe" />
        <i
          className="fas fa-eye"
          aria-hidden="true"
          style={{ display: `${displayEye}` }}
          onClick={handleDisplayEye}
        />
        <i className="fas fa-eye-slash" style={{ display: `${displayEyeSlash}` }} aria-hidden="true" onClick={handleDisplayEyeSlash} />
      </div>
      <p>Mot de passe oublié</p>
      <div>
        <button type="button" id="btnConnexion">Se connecter</button>
        <button type="button" id="btnInscription" onClick={() => history.push('/userInscription')}>créer votre compte</button>
      </div>

    </div>
  );
};

export default Connexion;
