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
  useEffect(() => {
    axios.get('http://localhost:5000/allArticles').then((response) => {
      console.log(response.data);
      setArticles(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const selectIdFunction = (event) => {
    setSelectId(parseInt(event.target.id, 10));
    console.log('@@@@@@@@@@@@à', selectId);
    alert(selectId);
  };
  console.log(selectIdFunction);
  return (
    <div id="header">
      <div className="header1">
        <MenuBurger />
        <div className="logo">
          <img src={LOGO} alt="logo-web-site" />
        </div>
        <div className="user">
          <i className="far fa-comments" aria-hidden onClick={commentDirection()} />
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
                <div className="monSelectMontres">
                  <select onChange={openModal}>
                    <option>MONTRES</option>
                    {
                    articles.filter((item) => item.category_id === 1).map((item) => <option id={item.article_id} onChange={selectIdFunction}>{item.name}</option>)
                  }
                  </select>
                </div>
              </li>
              <li>
                <select onChange={openModal}>
                  <option>LUNETTES</option>
                  {
                    articles.filter((item) => item.category_id === 2).map((item) => <option id={item.article_id}>{item.name}</option>)
                  }
                </select>
              </li>
              <li>
                <select onChange={openModal}>
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
          <Modal isOpen={isOpen}>
            <button type="button" onClick={closeModal}>Hide modal</button>
            <div>
              {
                articles.filter((item) => item.article_id === selectId).map((item) => (
                  <div>
                    <p>{item.name}</p>
                    <p>{item.name}</p>
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
