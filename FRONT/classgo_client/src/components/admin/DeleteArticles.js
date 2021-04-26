/* eslint-disable camelcase */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const DeleteArticles = () => {
  const history = useHistory();
  const [articleId, setArticle_id] = useState('');
  const [allArticles, setAllArticles] = useState([]);
  const [displayFirstBtn, setDisplayFirstBtn] = useState('block');
  const [displaySecondBtn, setDisplaySecondBtn] = useState('none');
  const [displayThirdBtn, setDisplayThirdBtn] = useState('none');
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
  }, []);
  const hanldeId = (event) => {
    setArticle_id(event.target.value);
    setDisplayFirstBtn('block');
    setDisplaySecondBtn('none');
    setDisplayThirdBtn('block');
  };
  const deleteArticle = (event) => {
    event.preventDefault();
    const article_id = parseInt(articleId, 10);
    axios.delete(`http://localhost:5000/articles?article_id=${article_id}`).then(() => {
      document.location.reload();
    }).catch((err) => {
      throw err;
    });
  };
  const handleFirstBtn = (event) => {
    const id = parseInt(event.target.id, 10);
    setAllArticles(allArticles.filter((item) => item.article_id === id));
    setDisplayFirstBtn('none');
    setDisplaySecondBtn('block');
    setDisplayThirdBtn('block');
  };
  const handleSecondeBtn = () => {
    setDisplayFirstBtn('block');
    setDisplaySecondBtn('none');
    setDisplayThirdBtn('none');
    document.location.reload();
  };
  return (
    <div className="addArticles">
      <div className="btnAdmin">
        <button className="btnAddArticles" type="button" onClick={adminDirection} style={{ backgroundColor: 'red' }}>Déconnexion</button>
        <button className="btnAddImage" type="button" onClick={addArticlesDiretion}>Ajouter des articles</button>
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
              <p>{item.name.substr(0, 8)}</p>
              <img src={item.picture} alt="" />
              <br />
              <h4>{item.article_id}</h4>
              <button id={item.article_id} type="button" style={{ display: `${displayFirstBtn}` }} onClick={handleFirstBtn}>Supprimer</button>
              <h5 style={{ display: `${displaySecondBtn}` }}>Vous confirmez ?</h5>
              <div style={{ display: 'flex' }}>
                <button type="submit" value={item.article_id} onClick={hanldeId} style={{ display: `${displaySecondBtn}` }}>OUI</button>
                <button type="button" onClick={handleSecondeBtn} style={{ display: `${displayThirdBtn}` }}>NON</button>
              </div>
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
