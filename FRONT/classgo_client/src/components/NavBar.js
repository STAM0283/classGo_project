import React from 'react';
import NavLink from 'react-router-dom';

const NavBar = () => (
  <div className="navBar">
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" />
        </li>
        <li>
          <NavLink exact to="/userConnexion" />
        </li>
        <li>
          <NavLink exact to="/userInscription" />
        </li>
        <li>
          <NavLink exact to="/userPanier" />
        </li>
        <li>
          <NavLink exact to="/shoopingCart" />
        </li>
        <li>
          <NavLink exact to="adminConnexion" />
        </li>
        <li>
          <NavLink exact to="/addArticles" />
        </li>
        <li>
          <NavLink exact to="/updateArticles" />
        </li>
        <li>
          <NavLink exact to="/deleteArticles" />
        </li>
      </ul>
    </nav>

  </div>
);
export default NavBar;
