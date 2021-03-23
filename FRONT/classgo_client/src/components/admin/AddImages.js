import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';

const AddImages = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const addArticlesDiretion = () => {
    history.push('/addArticles');
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
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleUrl = (event) => {
    setUrl(event.target.value);
  };
  const submitImage = (event) => {
    event.preventDefault();
    const dataImage = {
      title,
      url,
    };
    axios.post('http://localhost:5000/slideShow', dataImage).then(() => {
      setTitle('');
      setUrl('');
    }).catch((err) => {
      throw err;
    });
  };
  return (
    <div className="addArticles">
      <div className="btnAdmin">
        <button className="btnAddImage" type="button" onClick={addArticlesDiretion}>Ajouter des articles</button>
        <button className="btnAddArticles" type="button" onClick={adminDirection}>Admin connexion</button>
        <button className="btnDeleteArticles" type="button" onClick={deleleArticlesDirection}>Supprimer des articles</button>
        <button className="btnUpdateArticles" type="button" onClick={updateArticlesDirections}>Modifier des articles</button>
      </div>
      <form className="imageAdmin" onSubmit={submitImage}>
        <h3>Ajouter des images à la diaporama </h3>
        <label htmlFor="title">Titre</label>
        <br />
        <input type="text" placeholder="Ajouter un titre" id="title" value={title} onChange={handleTitle} />
        <br />
        <label htmlFor="url">URL de l&#39;image</label>
        <br />
        <input type="text" placeholder="Ajouter l'url" id="url" value={url} onChange={handleUrl} />
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddImages;
