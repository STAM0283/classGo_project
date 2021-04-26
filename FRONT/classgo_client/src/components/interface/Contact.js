import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');
  const [displayParagraph, setDisplayParagraph] = useState('none');
  const [displayParagraph2, setDisplayParagraph2] = useState('none');
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
    if (name !== '' && email !== '' && object !== '' && message !== '') {
      axios.post('http://localhost:5000/send-email', data).then(() => {
        setDisplayParagraph('block');
        setDisplayParagraph2('none');
        setTimeout(() => {
          setDisplayParagraph('none');
        }, 5000);
        setName('');
        setEmail('');
        setObject('');
        setMessage('');
      }).catch((err) => {
        throw err;
      });
    } else {
      setDisplayParagraph2('block');
    }
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
        <p style={{
          display: `${displayParagraph}`, color: 'green', fontWeight: 'bold', marginBottom: '10px',
        }}
        >
          votre message a été envoyé avec succès
        </p>
        <p style={{
          display: `${displayParagraph2}`, color: 'red', fontWeight: 'bold', marginBottom: '10px',
        }}
        >
          Veuillez remplir tous les champs
        </p>
        <div className="btn">
          <button type="submit" id="btn1">Envoyer</button>
          <button type="button" id="btn2" onClick={reinitialisation}>Réinitialiser</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
