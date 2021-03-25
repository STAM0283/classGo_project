/* eslint-disable camelcase */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const DeleteArticles = () => {
  const history = useHistory();
  const [articleId, setArticle_id] = useState('');
  const [allArticles, setAllArticles] = useState([]);
  const addArticlesDiretion = () => {
    history.push('/addArticles');
  };
  const adminDirection = () => {
    history.push('/adminConnexion');
  };
  const slideShowDiretion = () => {
    history.push('/addImages');
  };
  const updateArticlesDirections = () => {
    history.push('/updateArticles');
  };
  useEffect(() => {
    axios.get('http://localhost:5000/allArticles').then((response) => {
      setAllArticles(response.data);
    });
  });
  const hanldeId = (event) => {
    setArticle_id(event.target.value);
  };
  const deleteArticle = (event) => {
    event.preventDefault();
    const article_id = parseInt(articleId, 10);
    axios.delete(`http://localhost:5000/articles?article_id=${article_id}`).then((response) => {
      console.log(response);
    }).catch((err) => {
      alert(err);
    });
  };
  return (
    <div className="addArticles">
      <div className="btnAdmin">
        <button className="btnAddImage" type="button" onClick={addArticlesDiretion}>Ajouter des articles</button>
        <button className="btnAddArticles" type="button" onClick={adminDirection}>Admin connexion</button>
        <button className="btnDeleteArticles" type="button" onClick={slideShowDiretion}>Diaporama</button>
        <button className="btnUpdateArticles" type="button" onClick={updateArticlesDirections}>Modifier des articles</button>
      </div>
      <div className="parentWrapper">
        <h3>Supprimer des articles</h3>
        <br />
        <div className="containerArticles">
          {
        allArticles.map((item) => (
          <div className="wrapperArticles">
            <form onSubmit={deleteArticle}>
              <p>{item.name}</p>
              <img src={item.picture} alt="" />
              <br />
              <p>{item.article_id}</p>
              <button type="submit" value={item.article_id} onClick={hanldeId}>Supprimer</button>
            </form>
          </div>
        ))
      }
        </div>

      </div>
    </div>
  );
};

export default DeleteArticles;
