import React from 'react';
import { useHistory } from 'react-router-dom';

const DeleteArticles = () => {
  const history = useHistory();
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
  return (
    <div className="addArticles">
      <div className="btnAdmin">
        <button className="btnAddImage" type="button" onClick={addArticlesDiretion}>Ajouter des articles</button>
        <button className="btnAddArticles" type="button" onClick={adminDirection}>Admin connexion</button>
        <button className="btnDeleteArticles" type="button" onClick={slideShowDiretion}>Diaporama</button>
        <button className="btnUpdateArticles" type="button" onClick={updateArticlesDirections}>Modifier des articles</button>
      </div>
      Delete Article
    </div>
  );
};

export default DeleteArticles;
