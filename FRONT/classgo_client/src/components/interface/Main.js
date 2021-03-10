import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import SearchBar from './SearchBar';
import Comments from '../user/Comments';
import Authentification from '../user/Authentification';
import ShoopingCart from '../user/ShoopingCart';
import Connexion from '../user/Connexion';
import MyStore from '../user/MyStore';

const Main = () => (
  <div className="Main">
    <Switch>
      <Route exact path="/">
        <Home />
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
        <ShoopingCart />
      </Route>
      <Route>
        <MyStore />
      </Route>
    </Switch>
  </div>
);

export default Main;
