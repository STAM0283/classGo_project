/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SearchBar from './SearchBar';
import Comments from '../user/Comments';
import Authentification from '../user/Authentification';
import ShoopingCart from '../user/ShoopingCart';
import Connexion from '../user/Connexion';
import MyStore from '../user/MyStore';
import AdminConnexion from '../admin/AdminConnexion';
import AddArticles from '../admin/AddArticles';
import AddImages from '../admin/AddImages';
import DeleteArticles from '../admin/DeleteArticles';
import UpdateArticles from '../admin/UpdateArticles';

const Main = () => {
  const [articles, setArticles] = useState(null);
  const [allArtciles, setAllArticles] = useState('');
  const [category_id, setCategory] = useState('');
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    axios.get(`http://localhost:5000/articles?category_id=${category_id}`).then((response) => {
      setArticles(response.data);
      setAllArticles(response.data);
    });
  }, [category_id]);
  return articles !== null ? (
    <div className="Main">
      <Switch>
        <Route exact path="/">
          <Home data={{
            articles,
            setArticles,
            allArtciles,
            setAllArticles,
            category_id,
            setCategory,
            inputValue,
            setInputValue,
          }}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/searchBar">
          <SearchBar />
        </Route>
        <Route exact path="/userConnexion">
          <Connexion />
        </Route>
        <Route exact path="/userComments">
          <Comments />
        </Route>
        <Route exact path="/userInscription">
          <Authentification />
        </Route>
        <Route exact path="/myStore">
          <MyStore />
        </Route>
        <Route exact path="/shoopingCart">
          <ShoopingCart />
        </Route>
        <Route exact path="/adminConnexion">
          <AdminConnexion />
        </Route>
        <Route exact path="/addArticles">
          <AddArticles />
        </Route>
        <Route exact path="/deleteArticles">
          <DeleteArticles />
        </Route>
        <Route exact path="/updateArticles">
          <UpdateArticles />
        </Route>
        <Route exact path="/addImages">
          <AddImages />
        </Route>
      </Switch>
    </div>
  ) : (
    <p>LOADING</p>
  );
};

export default Main;
