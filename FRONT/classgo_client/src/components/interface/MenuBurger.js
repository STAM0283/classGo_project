import React from 'react';
import './interface.css';
import { useHistory } from 'react-router-dom';

const MenuBurger = () => {
  const history = useHistory();
  const homeDirection = () => {
    history.push('/');
  };
  const aboutDirection = () => {
    history.push('/about');
  };
  const contactDirection = () => {
    history.push('/contact');
  };
  return (
    <nav role="navigation" className="navBurger">
      <div id="menuToggle">
        <input type="checkbox" />
        <span />
        <span />
        <span />
        <ul id="menu">
          <li aria-hidden onClick={homeDirection}>ACCUEIL</li>
          <li>MONTRES</li>
          <li>LUNETTES</li>
          <li>BIJOUX</li>
          <li aria-hidden onClick={aboutDirection}>A PROPOS</li>
          <li aria-hidden onClick={contactDirection}>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBurger;
