import React from 'react';
import Link from 'react-router-dom';

const NavBar = () => (
  <div className="navBar">
    <nav>
      <ul>
        <li>
          <Link exact to="/" />
        </li>
        <li>
          <Link exact to="/contact" />
        </li>
        <li>
          <Link exact to="/about" />
        </li>
        <li>
          <Link exact to="/searchBar" />
        </li>
        <li>
          <Link exact to="/myStore" />
        </li>
        <li>
          <Link exact to="/userConnexion" />
        </li>
        <li>
          <Link exact to="/userInscription" />
        </li>
        <li>
          <Link exact to="/userComments" />
        </li>
        <li>
          <Link exact to="/shoopingCart" />
        </li>
        <li>
          <Link exact to="/adminConnexion" />
        </li>
        <li>
          <Link exact to="/addArticles" />
        </li>
        <li>
          <Link exact to="/updateArticles" />
        </li>
        <li>
          <Link exact to="/deleteArticles" />
        </li>
        <li>
          <Link exact to="/addImages" />
        </li>
      </ul>
    </nav>

  </div>
);
export default NavBar;
