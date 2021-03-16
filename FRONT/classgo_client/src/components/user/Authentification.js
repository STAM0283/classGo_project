import React, { useState } from 'react';
import axios from 'axios';

const Authentification = () => {
  const [sexe, setSexe] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSexe = (event) => {
    setSexe(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const submiteForm = (event) => {
    event.preventDefault();
    const data = {
      sexe,
      name,
      email,
      password,
    };
    axios.post('http://localhost:5000/inscription', data).then((response) => {
      console.log(response.data);
      setSexe('');
      setName('');
      setEmail('');
      setPassword('');
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
          <input type="radio" name="sexe" id="women" value="women" onClick={handleSexe} />
          <label htmlFor="women">Madame</label>
          <input type="radio" name="sexe" id="man" walue="man" onClick={handleSexe} />
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
          <input type="text" id="text" placeholder="Entrer votre nom" onChange={handleName} />
          <br />
          <div>
            <label htmlFor="email">
              Adresse mail
              <i className="fas fa-star" />
            </label>
          </div>
          <br />
          <input type="email" id="email" placeholder="Entrer votre adress email" onChange={handleEmail} />
          <br />
          <div>
            <label htmlFor="password">
              Mot de passe
              <i className="fas fa-star" />
            </label>
          </div>
          <br />
          <input type="password" id="password" placeholder="Entrer votre mot de passe" onChange={handlePassword} />
          <i className="fas fa-eye" />
        </div>
        <div>
          <button type="submit">Valider</button>
        </div>
      </form>

    </div>
  );
};

export default Authentification;
