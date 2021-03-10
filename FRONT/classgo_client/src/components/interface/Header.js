import React from 'react';
import { useHistory } from 'react-router-dom';
import LOGO from '../../images/LOGO.png';
import position from '../../images/position.png';
import user from '../../images/user.png';
import shopping from '../../images/shopping.png';
import SearchBar from './SearchBar';
import './interface.css';
import MenuBurger from './MenuBurger';

const Header = () => {
  const history = useHistory();
  const connexionDirection = () => {
    history.push('/userConnexion');
  };
  return (
    <div className="header">
      <MenuBurger />
      <div className="header1">
        <div>
          <SearchBar />
        </div>
        <div className="logo">
          <img src={LOGO} alt="logo-web-site" />
        </div>
        <div className="user">
          <div>
            <input type="image" src={position} alt="positionImage" id="position" />
            <br />
            <label htmlFor="position">Mon magasin</label>
          </div>
          <div onClick={connexionDirection} aria-hidden>
            <input type="image" src={user} alt="count User" id="coutUser" />
            <br />
            <label htmlFor="coutUser">Mon compte</label>
          </div>
          <div>
            <input type="image" src={shopping} alt="shopping cart" id="shopping" />
            <br />
            <label htmlFor="shopping">Mon panier</label>
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
