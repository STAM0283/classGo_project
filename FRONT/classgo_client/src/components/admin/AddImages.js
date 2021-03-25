/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddImages = () => {
  const history = useHistory();
  const [images, setImages] = useState([]);
  const [idImage, setIdImage] = useState('');
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
  useEffect(() => {
    axios.get('http://localhost:5000/images').then((response) => {
      setImages(response.data);
    });
  }, []);
  const submitImage = (event) => {
    event.preventDefault();
    const dataImage = {
      title,
      url,
    };
    axios.post('http://localhost:5000/slideShow', dataImage).then(() => {
      setTitle('');
      setUrl('');
      document.location.reload();
    }).catch((err) => {
      throw err;
    });
  };
  const handleIdImage = (event) => {
    setIdImage(event.target.value);
  };
  const deleteImage = (event) => {
    event.preventDefault();
    const image_id = parseInt(idImage, 10);
    axios.delete(`http://localhost:5000/slideShow?image_id=${image_id}`).then((response) => {
      console.log(response);
      document.location.reload();
    }).catch((err) => {
      alert(err);
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
      <div className="deleteImage">
        <h3>Supprimer des images de la diaporama</h3>
        <div className="container">
          {
            images.map((item) => (

              <div className="wrapperImages">
                <form onSubmit={deleteImage}>
                  <p>{item.title}</p>
                  <img src={item.url} alt="" />
                  <p>{item.image_id}</p>
                  <button type="submit" value={item.image_id} onClick={handleIdImage}>Supprimer</button>
                </form>
              </div>

            ))
        }
        </div>
      </div>
    </div>
  );
};

export default AddImages;
