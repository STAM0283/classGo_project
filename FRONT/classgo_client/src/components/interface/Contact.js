import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleObject = (event) => {
    setObject(event.target.value);
  };
  const hanldeMessage = (event) => {
    setMessage(event.target.value);
  };
  const reinitialisation = () => {
    setName('');
    setEmail('');
    setObject('');
    setMessage('');
  };
  const formSubmite = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      object,
      message,
    };
    axios.post('http://localhost:5000/send-email', data).then(() => {
      console.log('@@@@@@@@@@', data);
      alert('Votre message a été envoyé avec succé !');
      setName('');
      setEmail('');
      setObject('');
      setMessage('');
    }).catch(() => {
      console.log('message not sent');
    });
  };
  return (
    <div className="contact">
      <p>CONTACTEZ NOUS</p>
      <form onSubmit={formSubmite}>
        <div className="emailName">
          <input type="text" id="input1" placeholder="Nom" value={name} onChange={handleName} />
          <input type="text" id="input2" placeholder="Email" value={email} onChange={handleEmail} />
        </div>
        <div className="object">
          <input type="text" placeholder="Objet" value={object} onChange={handleObject} />
        </div>
        <div className="message">
          <textarea type="text" rows="10" lang="10" placeholder="Message" value={message} onChange={hanldeMessage} />
        </div>
        <div className="btn">
          <button type="submit" id="btn1">Envoyer</button>
          <button type="button" id="btn2" onClick={reinitialisation}>Réinitialiser</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
