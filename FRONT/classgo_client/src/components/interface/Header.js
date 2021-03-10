import React from 'react';
import { useHistory } from 'react-router-dom';
import LOGO from '../../images/LOGO.png';
import SearchBar from './SearchBar';
import './interface.css';
import MenuBurger from './MenuBurger';

const Header = () => {
  const history = useHistory();
  const connexionDirection = () => {
    history.push('/userConnexion');
  };
  return (
    <div id="header">
      <div className="header1">
        <div>
          <MenuBurger />
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="logo">
          <img src={LOGO} alt="logo-web-site" />
        </div>
        <div className="user">
          <div>
            <i className="fas fa-store-alt" />
          </div>
          <div onClick={connexionDirection} aria-hidden>
            <i className="fas fa-user" />
          </div>
          <div className="shopping">
            <i className="fas fa-shopping-cart" />
          </div>
        </div>
      </div>
      <div className="navFlex">
        <div className="header2">
          <nav>
            <ul>
              <li>
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
              <li>
                A PROPOS
              </li>
              <li>
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
