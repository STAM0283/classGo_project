import React from 'react';
import { useHistory } from 'react-router-dom';

const AddArticles = () => {
  const history = useHistory();
  const slideShowDiretion = () => {
    history.push('/addImages');
  };
  const adminDirection = () => {
    history.push('/adminConnexion');
  };
  const deleleArticlesDirection = () => {
    history.push('/deleteArticles');
  };
  const updateArticlesDirections = () => {
    history.push('/updateArticles');
  };
  return (
    <div className="addArticles">
      <div className="btnAdmin">
        <button className="btnAddImage" type="button" onClick={slideShowDiretion}>Diaporama</button>
        <button className="btnAddArticles" type="button" onClick={adminDirection}>Admin connexion</button>
        <button className="btnDeleteArticles" type="button" onClick={deleleArticlesDirection}>Supprimer des articles</button>
        <button className="btnUpdateArticles" type="button" onClick={updateArticlesDirections}>Modifier des articles</button>
      </div>
      AddArticles
    </div>
  );
};

export default AddArticles;
