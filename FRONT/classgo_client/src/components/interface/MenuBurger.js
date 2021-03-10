import React from 'react';
import './menuBurger.css';

const MenuBurger = () => (
  <nav role="navigation" className="navBurger">
    <div id="menuToggle">
      <input type="checkbox" />
      <span />
      <span />
      <span />
      <ul id="menu">
        <li>ACCUEIL</li>
        <li>MONTRES</li>
        <li>LUNETTES</li>
        <li>BIJOUX</li>
        <li>A PROPOS</li>
        <li>CONTACT</li>
      </ul>
    </div>
  </nav>
);

export default MenuBurger;
