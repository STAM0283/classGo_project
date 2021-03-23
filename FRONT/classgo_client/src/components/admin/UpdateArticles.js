import React from 'react';
import { useHistory } from 'react-router-dom';

const UpdateArticles = () => {
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
  const deleleArticlesDirection = () => {
    history.push('/deleteArticles');
  };
  return (

    <div className="addArticles">
      <div className="btnAdmin">
        <button className="btnAddImage" type="button" onClick={addArticlesDiretion}>Ajouter des articles</button>
        <button className="btnAddArticles" type="button" onClick={adminDirection}>Admin connexion</button>
        <button className="btnDeleteArticles" type="button" onClick={slideShowDiretion}>Diaporama</button>
        <button className="btnUpdateArticles" type="button" onClick={deleleArticlesDirection}>Supprimer des articles</button>
      </div>
      Update Article
    </div>
  );
};
export default UpdateArticles;
