/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddArticles = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');
  const [category_id, setCategoryId] = useState('');
  const [price, setPrice] = useState('');
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
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handlePicture = (event) => {
    setPicture(event.target.value);
  };
  const handleCategory = (event) => {
    setCategoryId(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const submitForm = (event) => {
    event.preventDefault();
    const data = {
      name,
      description,
      picture,
      category_id,
      price,
    };
    axios.post('http://localhost:5000/articles', data).then((response) => {
      console.log(response.data);
      setName('');
      setDescription('');
      setPicture('');
      setCategoryId('');
      setPrice('');
    }).catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className="addArticles">
      <div className="btnAdmin">
        <button className="btnAddArticles deconnexion" type="button" onClick={adminDirection} style={{ backgroundColor: 'red' }}>Déconnexion</button>
        <button className="btnAddImage" type="button" onClick={slideShowDiretion}>Diaporama</button>
        <button className="btnDeleteArticles" type="button" onClick={deleleArticlesDirection}>Supprimer des articles</button>
        <button className="btnUpdateArticles" type="button" onClick={updateArticlesDirections}>Modifier des articles</button>
      </div>
      <form className="formAddArticle" onSubmit={submitForm}>
        <h3>Ajouter un article</h3>
        <label htmlFor="name">Nom de l&#39;article</label>
        <br />
        <input type="text" id="name" placeholder="ajoutez un nom à l'article" value={name} onChange={handleName} />
        <br />
        <label htmlFor="description">Déscription</label>
        <br />
        <input type="text" id="description" placeholder="Ajouter une description" value={description} onChange={handleDescription} />
        <br />
        <label htmlFor="picture">Url de l&#39;image</label>
        <br />
        <input type="text" id="picture" placeholder="Ajoutez l'url de l'image" value={picture} onChange={handlePicture} />
        <br />
        <label htmlFor="category">Categorie de l&#39;article</label>
        <br />
        <input type="txet" id="category" placeholder="Précisez la catégorie" value={category_id} onChange={handleCategory} />
        <br />
        <label htmlFor="price">Le prix de l&#39;article</label>
        <br />
        <input type="text" id="price" placeholder="Ajoutez le prix de l'article" value={price} onChange={handlePrice} />
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddArticles;
