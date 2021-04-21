/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import LOGO from '../../images/LOGO.png';
import './interface.css';
import MenuBurger from './MenuBurger';

const Header = () => {
  const [articles, setArticles] = useState([]);
  const [selectId, setSelectId] = useState('');
  const [isOpen, setIsOpen] = useState(false);
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
  const adminDirection = () => {
    history.push('/adminConnexion');
  };
  useEffect(() => {
    axios.get('http://localhost:5000/allArticles').then((response) => {
      setArticles(response.data);
    }).catch((err) => {
      throw err;
    });
  }, []);
  const openModal = (event) => {
    setIsOpen(true);
    setSelectId(parseInt(event.target.value, 10));
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div id="header">
      <div className="header1">
        <MenuBurger />
        <div className="logo">
          <img src={LOGO} alt="logo-web-site" />
        </div>
        <div className="user">
          <nav>
            <ul>
              <li><i className="far fa-comments" aria-hidden onClick={commentDirection} /></li>
              <li><i className="fas fa-store-alt" onClick={myStoreDirection} aria-hidden /></li>
              <li><i className="fas fa-user" onClick={connexionDirection} aria-hidden /></li>
              <li><i className="fas fa-shopping-cart" onClick={shoppingCartDirection} aria-hidden /></li>
              <li><i className="fas fa-user-cog" aria-hidden onClick={adminDirection} /></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="navFlex">
        <div className="header2">
          <nav>
            <ul>
              <li onClick={homeDirection} aria-hidden activeClassName="current">
                ACCUEIL
              </li>
              <li>
                <div className="monSelectMontres">
                  <select onChange={openModal}>
                    <option>MONTRES</option>
                    {
                    articles.filter((item) => item.category_id === 1).map((item) => <option value={item.article_id} id={item.article_id}>{item.name}</option>)
                  }
                  </select>
                </div>
              </li>
              <li>
                <select onChange={openModal}>
                  <option>LUNETTES</option>
                  {
                    articles.filter((item) => item.category_id === 2).map((item) => <option value={item.article_id} id={item.article_id}>{item.name}</option>)
                  }
                </select>
              </li>
              <li>
                <select onChange={openModal}>
                  <option>BIJOUX</option>
                  {
                    articles.filter((item) => item.category_id === 3).map((item) => <option value={item.article_id} id={item.article_id}>{item.name}</option>)
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
          <Modal isOpen={isOpen}>
            <button type="button" onClick={closeModal} id="hideModal">Fermer la modale</button>
            <div className="modal">
              {
                articles.filter((item) => item.article_id === selectId).map((item) => (
                  <div key={item.article_id} className="article-container modal2">
                    <br />
                    <img src={item.picture} alt="montre" />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <div className="starsAndPrice">
                      <div>
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <div>
                        <p>{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Header;
