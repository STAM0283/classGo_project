/* eslint-disable camelcase */
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
  const { category_id } = props.data;
  const { setCategory } = props.data;
  const { inputValue } = props.data;
  const { setInputValue } = props.data;
  const [articleValue, setArticleValue] = useState('');
  const [firstPage, setFirstPage] = useState(0);
  const [lastPage, setLastPage] = useState(10);
  const numberOfPage = Math.ceil((articles.length / 10));
  const [currentPage, setCurrentPage] = useState(1);
  const [displayBtnNext, setDisplayBtnNext] = useState('block');
  const [displayBtnPrevious, setDisplayBtnPrevious] = useState('none');
  const selectCategory = (event) => {
    const id = parseInt(event.target.id, 10);
    setFirstPage(0);
    setLastPage(10);
    setCurrentPage(1);
    setCategory(id);
    setArticles((prevState) => prevState.filter((item) => item.category_id === category_id));
    setDisplayDescription('none');
    setDisplaySpan1('inline');
    setDisplaySpan2('none');
    setDisplayBtnNext('block');
  };
  const selectArticle = (event) => {
    const id = parseInt(event.target.id, 10);
    setArticles(articles.filter((item) => item.article_id === id));
    setDisplayDescription('block');
    setDisplaySpan1('none');
    setDisplaySpan2('block');
    setDisplayBtnNext('none');
    setDisplayBtnPrevious('none');
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
  const nextPage = () => {
    setFirstPage(firstPage + 10);
    setLastPage(lastPage + 10);
    setDisplayBtnPrevious('block');
    setCurrentPage(currentPage + 1);
    if (currentPage === numberOfPage - 1) {
      setDisplayBtnNext('none');
    }
  };
  const previousPage = () => {
    setFirstPage(firstPage - 10);
    setLastPage(lastPage - 10);
    setCurrentPage(currentPage - 1);
    if (currentPage === 2) {
      setDisplayBtnPrevious('none');
      setDisplayBtnNext('block');
    }
  };
  return articles !== null ? (
    <div className="articlesFound">
      <div>
        <SearchBar data={{
          articles,
          setArticles,
          allArtciles,
          setAllArticles,
          category_id,
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
         articles.slice(firstPage, lastPage).map((article) => (
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
      <p>
        Page Num :
        {currentPage}
      </p>
      <div className="pagination">
        <button type="button" onClick={previousPage} style={{ display: `${displayBtnPrevious}` }}>
          Page prècédente
        </button>
        <button type="button" onClick={nextPage} style={{ display: `${displayBtnNext}` }}>
          Page suivante
        </button>
      </div>
    </div>
  ) : (
    <div>
      LOADING
    </div>
  );
};

export default ArticlesFound;
