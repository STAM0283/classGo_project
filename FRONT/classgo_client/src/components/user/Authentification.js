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
  const submiteForm = (event) => {
    event.preventDefault();
    const data = {
      sex,
      username,
      email,
      password,
    };
    axios.post('http://localhost:5000/signUp', data).then((response) => {
      console.log(response.data);
      alert('Votre message a été envoyé avec succé !');
      setSex('');
      setUserName('');
      setEmail('');
      setPassword('');
    }).catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className="authentification">
      <h3>Mes informations</h3>
      <p>
        Civilité
        <i className="fas fa-star" />
      </p>
      <form onSubmit={submiteForm}>
        <div className="civilite">
          <input type="radio" name="sex" id="women" value="women" onClick={handleSexe} />
          <label htmlFor="women">Madame</label>
          <input type="radio" name="sex" id="man" walue="man" onClick={handleSexe} />
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
          <input type="text" id="text" placeholder="Entrer votre nom" onChange={handleName} value={username} />
          <br />
          <div>
            <label htmlFor="email">
              Adresse mail
              <i className="fas fa-star" />
            </label>
          </div>
          <br />
          <input type="email" id="email" placeholder="Entrer votre adress email" onChange={handleEmail} value={email} />
          <br />
          <div>
            <label htmlFor="password">
              Mot de passe
              <i className="fas fa-star" />
            </label>
          </div>
          <br />
          <div className="passAuthentification">
            <input type={type} id="password" placeholder="Entrer votre mot de passe" onChange={handlePassword} value={password} />
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
