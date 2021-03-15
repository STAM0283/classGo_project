import React from 'react';

const Contact = () => (
  <div className="contact">
    <p>CONTACTEZ NOUS</p>
    <div className="emailName">
      <input type="text" id="input1" placeholder="Nom" />
      <input type="text" id="input2" placeholder="Email" />
    </div>
    <div className="object">
      <input type="text" placeholder="Objet" />
    </div>
    <div className="message">
      <textarea type="text" rows="10" lang="10" placeholder="Message" />
    </div>
    <div className="btn">
      <button type="button" id="btn1">Envoyer</button>
      <button type="button" id="btn2">Réinitialiser</button>
    </div>
  </div>
);

export default Contact;
