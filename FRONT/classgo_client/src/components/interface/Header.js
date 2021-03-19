/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import LOGO from '../../images/LOGO.png';
import './interface.css';
import MenuBurger from './MenuBurger';

const Header = () => {
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
  const connexionDirection = () => {
    history.push('/userConnexion');
  };
  const shoppingCartDirection = () => {
    history.push('/shoopingCart');
  };
  const myStoreDirection = () => {
    history.push('/myStore');
  };
  const commentDirection = () => {
    history.push('/userComments');
  };
  return (
    <div id="header">
      <div className="header1">
        <MenuBurger />
        <div className="logo">
          <img src={LOGO} alt="logo-web-site" />
        </div>
        <div className="user">
          <i className="far fa-comments" aria-hidden onClick={commentDirection} />
          <i className="fas fa-store-alt" onClick={myStoreDirection} aria-hidden />
          <i className="fas fa-user" onClick={connexionDirection} aria-hidden />
          <i className="fas fa-shopping-cart" onClick={shoppingCartDirection} aria-hidden />
        </div>
      </div>
      <div className="navFlex">
        <div className="header2">
          <nav>
            <ul>
              <li onClick={homeDirection} aria-hidden>
                ACCUEIL
              </li>
              <li>
                MONTRES
                <i className="fas fa-chevron-down" />
              </li>
              <li>
                LUNETTES
                <i className="fas fa-chevron-down" />
              </li>
              <li>
                BIJOUX
                <i className="fas fa-chevron-down" />
              </li>
              <li onClick={aboutDirection} aria-hidden>
                A PROPOS
              </li>
              <li onClick={contactDirection} aria-hidden>
                CONTACT
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
