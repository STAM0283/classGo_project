/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const ArticlesFound = (props) => {
  const [displayDescription, setDisplayDescription] = useState('none');
  const [displaySpan1, setDisplaySpan1] = useState('inline');
  const [displaySpan2, setDisplaySpan2] = useState('none');
  const { articles } = props.data;
  const { setArticles } = props.data;
  const { allArtciles } = props.data;
  const { setAllArticles } = props.data;
  const { category } = props.data;
  const { setCategory } = props.data;
  const { inputValue } = props.data;
  const { setInputValue } = props.data;
  const [articleValue, setArticleValue] = useState('');
  const selectCategory = (event) => {
    const id = parseInt(event.target.id, 10);
    setCategory(id);
    setArticles((prevState) => prevState.filter((item) => item.category_id === category));
    setDisplayDescription('none');
    setDisplaySpan1('inline');
    setDisplaySpan2('none');
  };
  const selectArticle = (event) => {
    const id = parseInt(event.target.id, 10);
    setArticles(articles.filter((item) => item.article_id === id));
    setDisplayDescription('block');
    setDisplaySpan1('none');
    setDisplaySpan2('block');
  };
  const handleArticleValue = (event) => {
    setArticleValue(event.target.value);
  };
  const articlePost = () => {
    const data = {
      name: articleValue.name,
      picture: articleValue.picture,
      price: articleValue.price,
    };
    axios.post('http://localhost:5000/shoopingCart', data).then((response) => {
      console.log(response);
      alert(data);
    }).catch((err) => {
      console.log(err);
    });
  };
  return articles !== null ? (
    <div className="articlesFound">
      <div>
        <SearchBar data={{
          articles,
          setArticles,
          allArtciles,
          setAllArticles,
          category,
          setCategory,
          inputValue,
          setInputValue,
        }}
        />
      </div>
      <div className="categoryArticles">
        <h4 aria-hidden onClick={selectCategory}>tous</h4>
        <h4 aria-hidden id="1" onClick={selectCategory}>Montres</h4>
        <h4 aria-hidden id="2" onClick={selectCategory}>Lunettes</h4>
        <h4 aria-hidden id="3" onClick={selectCategory}>Bijoux</h4>
      </div>
      <div className="allArticles">
        {
         articles.map((article) => (
           <div key={article.article_id} className="article-container">
             <br />
             <img src={article.picture} alt="montre" />
             <h2>{article.name}</h2>
             <p style={{ display: `${displayDescription}` }}>{article.description}</p>
             <div className="starsAndPrice">
               <div>
                 <i className="far fa-star" />
                 <i className="far fa-star" />
                 <i className="far fa-star" />
                 <i className="far fa-star" />
                 <i className="far fa-star" />
               </div>
               <div>
                 <p>{article.price}</p>
               </div>
             </div>
             <button id={article.article_id} type="button" onClick={selectArticle} style={{ display: `${displaySpan1}` }}>
               Voir ce produit
             </button>
             <button
               value={{
                 name: article.name,
                 picture: article.picture,
                 price: article.price,
               }}
               id={article.article_id}
               type="button"
               onClick={selectArticle + handleArticleValue + articlePost}
               style={{ display: `${displaySpan2}` }}
             >
               Ajouter au panier
             </button>
           </div>
         ))
      }
      </div>
    </div>
  ) : (
    <div>
      LOADING
    </div>
  );
};

export default ArticlesFound;
