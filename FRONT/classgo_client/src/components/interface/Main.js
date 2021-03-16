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

const Main = () => {
  const [articles, setArticles] = useState(null);
  const [allArtciles, setAllArticles] = useState('');
  const [category, setCategory] = useState('');
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    axios.get(`http://localhost:5000/articles?category_id=${category}`).then((response) => {
      console.log(response.data);
      setArticles(response.data);
      setAllArticles(response.data);
    });
  }, [category]);
  return articles !== null ? (
    <div className="Main">
      <Switch>
        <Route exact path="/">
          <Home data={{
            articles,
            setArticles,
            allArtciles,
            setAllArticles,
            category,
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
        <Route>
          <MyStore />
        </Route>
      </Switch>
    </div>
  ) : (
    <p>LOADING</p>
  );
};

export default Main;
