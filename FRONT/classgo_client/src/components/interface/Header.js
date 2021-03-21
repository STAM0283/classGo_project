/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import LOGO from '../../images/LOGO.png';
import './interface.css';
import MenuBurger from './MenuBurger';

const Header = () => {
  const [articles, setArticles] = useState([]);
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
  useEffect(() => {
    axios.get('http://localhost:5000/allArticles').then((response) => {
      console.log(response.data);
      setArticles(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
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
                <select>
                  <option>MONTRES</option>
                  {
                    articles.filter((item) => item.category_id === 1).map((item) => <option id={item.article_id}>{item.name}</option>)
                  }
                </select>
              </li>
              <li>
                <select>
                  <option>LUNETTES</option>
                  {
                    articles.filter((item) => item.category_id === 2).map((item) => <option id={item.article_id}>{item.name}</option>)
                  }
                </select>
              </li>
              <li>
                <select>
                  <option>BIJOUX</option>
                  {
                    articles.filter((item) => item.category_id === 3).map((item) => <option id={item.article_id}>{item.name}</option>)
                  }
                </select>
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
